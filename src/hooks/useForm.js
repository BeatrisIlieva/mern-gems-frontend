import { useState, useCallback } from "react";

import { getPatternErrorMessage } from "../utils/getPatternErrorMessage";

export const useForm = (INITIAL_FORM_VALUES) => {
  const [values, setValues] = useState(INITIAL_FORM_VALUES);

  const updateForm = useCallback(() => {
    Object.keys(values).forEach((fieldKey) => {
      const input = document.getElementById(fieldKey);

      if (input && input.value !== "") {
        setValues((prevValues) => ({
          ...prevValues,
          [fieldKey]: {
            ...prevValues[fieldKey],
            fieldValue: input.value,
            isFocused: true,
          },
        }));
      }
    });
  }, [values]);

  const clickHandler = useCallback(
    (fieldKey) => {
      setValues((prevValues) => ({
        ...prevValues,
        [fieldKey]: { ...prevValues[fieldKey], isFocused: true },
      }));
    },
    [setValues]
  );

  const blurHandler = useCallback((fieldKey) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldKey]: {
        ...prevValues[fieldKey],
        isFocused: prevValues[fieldKey].fieldValue !== "",
        errorMessage: getPatternErrorMessage(
          fieldKey,
          prevValues[fieldKey].fieldValue,
          prevValues[fieldKey].regexPattern
        ),
      },
    }));
  }, []);

  const changeHandler = useCallback(
    (fieldKey, newValue) => {
      setValues((prevValues) => ({
        ...prevValues,
        [fieldKey]: { ...prevValues[fieldKey], fieldValue: newValue },
      }));

      updateForm();
    },
    [updateForm]
  );

  const submitHandler = useCallback(
    async (e) => {
      e.preventDefault();

      Object.keys(values).forEach((key) => {
        const field = values[key];

        field.errorMessage = getPatternErrorMessage(
          key,
          field.fieldValue,
          field.regexPattern
        );
      });

      Object.keys(values).forEach((fieldKey) => {
        const field = values[fieldKey];

        setValues((prevValues) => ({
          ...prevValues,
          [fieldKey]: {
            ...prevValues[fieldKey],
            errorMessage: getPatternErrorMessage(
              fieldKey,
              field.fieldValue,
              field.regexPattern
            ),
          },
        }));
      });

      updateForm();
    },
    [updateForm, values]
  );

  return {
    values,
    setValues,
    updateForm,
    clickHandler,
    blurHandler,
    changeHandler,
    submitHandler,
  };
};
