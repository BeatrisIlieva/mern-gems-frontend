import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { DynamicForm } from "../../reusable/DynamicForm/DynamicForm";

import { useBagContext } from "../../../contexts/BagContext";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";
import { useForm } from "../../../hooks/useForm";

import { paymentServiceFactory } from "../../../services/paymentService";
import { orderServiceFactory } from "../../../services/orderService";
import { userCardDetailsServiceFactory } from "../../../services/userCardDetailsService";

import { checkIfFormErrorHasOccurred } from "../../../utils/checkIfFormErrorHasOccurred";
import { clearInitialFormValuesMessages } from "../../../utils/clearInitialFormValuesMessages";

import { checkIfCardHasExpired } from "./helpers/checkIfCardHasExpired";
import { setCardHasExpiredErrorMessage } from "./helpers/setCardHasExpiredErrorMessage";
import { getData } from "./helpers/getData";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

export const CardDetailsForm = ({ popupCloseHandler }) => {
  const navigate = useNavigate();

  const [userCardDetails, setUserCardDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const { userId } = useAuthenticationContext();

  const { totalPrice } = useBagContext();

  const userCardDetailsService = useService(userCardDetailsServiceFactory);

  const paymentService = useService(paymentServiceFactory);

  const orderService = useService(orderServiceFactory);

  const {
    values,
    setValues,
    clickHandler,
    blurHandler,
    updateForm,
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

  const onSubmit = useCallback(
    async (e) => {
      submitHandler(e);

      const errorOccurred = checkIfFormErrorHasOccurred(values);
      const cardHasExpired = checkIfCardHasExpired(
        values.expiryDate.fieldValue
      );

      if (cardHasExpired) {
        const updatedValues = setCardHasExpiredErrorMessage(
          { ...values },
          FORM_KEYS
        );
        setValues(updatedValues);
        return;
      }

      if (!errorOccurred) {
        const data = getData(values);

        try {
          setIsLoading(true);

          await userCardDetailsService.update(userId, data);

          clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);

          if (popupCloseHandler) {
            popupCloseHandler();
          } else {
            await paymentService.create(userId, data);
            await orderService.create(userId);
            navigate("/order-confirmation");
          }
        } catch (err) {
          console.error(err.message);
        } finally {
          setIsLoading(false);
        }
      } else {
        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);
      }
    },
    [
      values,
      popupCloseHandler,
      submitHandler,
      setValues,
      navigate,
      userId,
      userCardDetailsService,
      paymentService,
      orderService,
    ]
  );

  const buttonTitle = useMemo(() => {
    return popupCloseHandler ? "Save" : `Place Order $${totalPrice}`;
  }, [popupCloseHandler, totalPrice]);

  return (
    <>
      <DynamicForm
        values={values}
        formKeys={FORM_KEYS}
        clickHandler={clickHandler}
        blurHandler={blurHandler}
        changeHandler={changeHandler}
        initialFormValues={INITIAL_FORM_VALUES}
        userInformation={userCardDetails}
        buttonTitle={buttonTitle}
        onSubmit={onSubmit}
        isLoading={isLoading}
        formVariant={"wrapped-form"}
        fieldVariant={"small-field-box"}
      />
    </>
  );
};
