import { useState, useEffect } from "react";

import { useForm } from "../../../../hooks/useForm";

import { DynamicForm } from "../../../DynamicForm/DynamicForm";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import { checkIfCardHasExpired } from "./checkIfCardHasExpired";

import { checkIfFormErrorHasOccurred } from "../../../../utils/checkIfFormErrorHasOccurred";

import { CARD_HAS_EXPIRED_ERROR_MESSAGE } from "../../../../constants/expiryDate";

import { clearInitialFormValuesMessages } from "../../../../utils/clearInitialFormValuesMessages";
import { useBagContext } from "../../../../contexts/BagContext";

import { useNavigate, useLocation } from "react-router-dom";

import { useService } from "../../../../hooks/useService";
import { paymentServiceFactory } from "../../../../services/paymentService";
import { userCardDetailsServiceFactory } from "../../../../services/userCardDetailsService";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { LoadingSpinner } from "../../../LoadingSpinner/LoadingSpinner";

export const CardDetailsForm = ({ toggleDisplayCardDetailsPopup }) => {
  const [isLoading, setIsLoading] = useState(false);
  const userCardDetailsService = useService(userCardDetailsServiceFactory);
  const [userCardDetails, setUserCardDetails] = useState([]);

  const { userId } = useAuthenticationContext();
  const paymentService = useService(paymentServiceFactory);

  const { totalPrice } = useBagContext();

  const {
    values,
    setValues,
    updateForm,
    clickHandler,
    blurHandler,
    changeHandler,
    submitHandler,
  } = useForm(INITIAL_FORM_VALUES);

  useEffect(() => {
    userCardDetailsService
      .getOne(userId)
      .then((data) => {
        setUserCardDetails(data);

        updateForm();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userCardDetailsService, userId, updateForm]);

  const { clearShoppingBag } = useBagContext();

  const location = useLocation();

  const locationIsPayment = location.pathname === "/payment";

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    submitHandler(e);

    const errorOccurred = checkIfFormErrorHasOccurred(values);

    const cardHasExpired = checkIfCardHasExpired(values.expiryDate.fieldValue);

    if (cardHasExpired) {
      setValues((prevValues) => ({
        ...prevValues,
        [FORM_KEYS.ExpiryDate]: {
          ...prevValues[FORM_KEYS.ExpiryDate],
          errorMessage: CARD_HAS_EXPIRED_ERROR_MESSAGE,
        },
      }));

      return;
    }

    if (!errorOccurred) {
      const longCardNumber = values.longCardNumber.fieldValue;
      const cardHolder = values.cardHolder.fieldValue;
      const cVVCode = values.cVVCode.fieldValue;
      const expiryDate = values.expiryDate.fieldValue;

      const data = {
        longCardNumber,
        cardHolder,
        cVVCode,
        expiryDate,
      };

      try {
        setIsLoading(true);

        if (locationIsPayment) {
          await paymentService.create(userId, data);

          clearShoppingBag();

          navigate("/order-confirmation");
        } else {
          await userCardDetailsService.update(userId, data);

          clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);

          updateForm();

          setIsLoading(false);

          toggleDisplayCardDetailsPopup();
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  const ButtonTitle = `Place Order $ ${totalPrice}`;

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
        userInformation={userCardDetails}
        buttonTitle={ButtonTitle}
        onSubmit={onSubmit}
      />
    </>
  );
};
