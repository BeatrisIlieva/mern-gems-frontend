import { useState, useCallback } from "react";
import { getPatternErrorMessage } from "../utils/getPatternErrorMessage";

export const useForm = (INITIAL_FORM_VALUES) => {
  const [values, setValues] = useState(INITIAL_FORM_VALUES);

  // Memoize the handlers to avoid re-creating them on every render
  const updateForm = useCallback(() => {
    setValues((prevValues) => {
      const updatedValues = { ...prevValues };

      Object.keys(updatedValues).forEach((fieldKey) => {
        const field = updatedValues[fieldKey];
        if (field.fieldValue !== "") {
          updatedValues[fieldKey] = {
            ...field,
            isFocused: true,
          };
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

      updateForm(); // Ensure fields are updated based on the latest values
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
