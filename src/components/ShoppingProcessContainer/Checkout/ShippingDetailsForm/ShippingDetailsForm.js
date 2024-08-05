import { useState } from "react";

import { useForm } from "../../../../hooks/useForm";
import { checkIfFormErrorHasOccurred } from "../../../../utils/checkIfFormErrorHasOccurred";
import { FORM_KEYS, INITIAL_FORM_VALUES } from "./initialFormValues";
import { clearInitialFormValuesMessages } from "../../../../utils/clearInitialFormValuesMessages";

import { useNavigate } from "react-router-dom";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { DynamicForm } from "../../../DynamicForm/DynamicForm";

import { useService } from "../../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../../services/userShippingDetailsService";

import { LoadingSpinner } from "../../../LoadingSpinner/LoadingSpinner";

import { getData } from "./getData";

import { FormTitle } from "../../FormTitle/FormTitle";

export const ShippingDetailsForm = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const { userId } = useAuthenticationContext();

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  const {
    values,
    updateForm,
    clickHandler,
    blurHandler,
    changeHandler,
    submitHandler,
  } = useForm(INITIAL_FORM_VALUES);

  const onSubmit = async (e) => {
    submitHandler(e);

    const errorOccurred = checkIfFormErrorHasOccurred(values);

    if (!errorOccurred) {
      const data = getData(values);

      try {
        setIsLoading(true);

        await userShippingDetailsService.update(userId, data);

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);

        updateForm();

        navigate("/payment");
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <FormTitle title={"Shipping Information"} />
      <DynamicForm
        values={values}
        formKeys={FORM_KEYS}
        clickHandler={clickHandler}
        blurHandler={blurHandler}
        changeHandler={changeHandler}
        initialFormValues={INITIAL_FORM_VALUES}
        buttonTitle={"Continue Checkout"}
        onSubmit={onSubmit}
      />
    </>
  );
};
