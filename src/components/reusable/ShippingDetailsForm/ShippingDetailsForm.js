import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { DynamicForm } from "../DynamicForm/DynamicForm";
import { LoadingSpinner } from "../../LoadingSpinner/LoadingSpinner";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useForm } from "../../../hooks/useForm";
import { useService } from "../../../hooks/useService";

import { userShippingDetailsServiceFactory } from "../../../services/userShippingDetailsService";

import { checkIfFormErrorHasOccurred } from "../../../utils/checkIfFormErrorHasOccurred";
import { clearInitialFormValuesMessages } from "../../../utils/clearInitialFormValuesMessages";

import { getData } from "./helpers/getData";

import { FORM_KEYS, INITIAL_FORM_VALUES } from "./initialFormValues";

export const ShippingDetailsForm = ({ popupCloseHandler }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const [userShippingDetails, setUserShippingDetails] = useState([]);

  const navigate = useNavigate();

  const { userId } = useAuthenticationContext();

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  const {
    values,
    clickHandler,
    blurHandler,
    changeHandler,
    submitHandler,
    updateForm,
  } = useForm(INITIAL_FORM_VALUES);

  useEffect(() => {
    userShippingDetailsService
      .getOne(userId)
      .then((data) => {
        setUserShippingDetails(data);

        updateForm();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userShippingDetailsService, userId, updateForm]);

  const onSubmit = async (e) => {
    submitHandler(e);

    const errorOccurred = checkIfFormErrorHasOccurred(values);

    if (!errorOccurred) {
      const data = getData(values);

      try {
        setIsLoading(true);

        await userShippingDetailsService.update(userId, data);

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);

        if (popupCloseHandler) {
          popupCloseHandler();
        } else {
          navigate("/payment");
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const buttonTitle = popupCloseHandler ? "Save" : "Continue Checkout";

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <DynamicForm
        values={values}
        formKeys={FORM_KEYS}
        clickHandler={clickHandler}
        blurHandler={blurHandler}
        changeHandler={changeHandler}
        initialFormValues={INITIAL_FORM_VALUES}
        userInformation={userShippingDetails}
        buttonTitle={buttonTitle}
        onSubmit={onSubmit}
      />
    </>
  );
};
