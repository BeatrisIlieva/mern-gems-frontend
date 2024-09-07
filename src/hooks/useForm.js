import { useState, useCallback } from "react";
import { getPatternErrorMessage } from "../utils/getPatternErrorMessage";

export const useForm = (INITIAL_FORM_VALUES) => {
  const [values, setValues] = useState(INITIAL_FORM_VALUES);

  const updateForm = useCallback(() => {
    setValues((prevValues) => {
      const updatedValues = { ...prevValues };

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
      return updatedValues;
    });
  }, []);

  const clickHandler = useCallback((fieldKey) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldKey]: { ...prevValues[fieldKey], isFocused: true },
    }));
  }, []);

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

  const changeHandler = useCallback((fieldKey, newValue) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldKey]: { ...prevValues[fieldKey], fieldValue: newValue },
    }));
  }, []);

  const submitHandler = useCallback(
    async (e) => {
      e.preventDefault();

      setValues((prevValues) => {
        const updatedValues = { ...prevValues };

        Object.keys(updatedValues).forEach((key) => {
          const field = updatedValues[key];
          updatedValues[key] = {
            ...field,
            errorMessage: getPatternErrorMessage(
              key,
              field.fieldValue,
              field.regexPattern
            ),
          };
        });

        return updatedValues;
      });

      updateForm();
    },
    [updateForm]
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
