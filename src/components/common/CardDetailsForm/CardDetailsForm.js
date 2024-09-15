import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { DynamicForm } from "../../reusable/DynamicForm/DynamicForm";

import { useLanguageContext } from "../../../contexts/LanguageContext";
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

import { PLACE_ORDER_BUTTON_NAMING } from "./constants/languageRelated";
import { SAVE_BUTTON_NAMING } from "../../../constants/languageRelated";
import { INITIAL_FORM_VALUES, FORM_KEYS } from "./constants/initialFormValues";

export const CardDetailsForm = ({ popupCloseHandler }) => {
  const { language } = useLanguageContext();

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
        const cardData = getData(values);

        const languageData = { selectedLanguage: language };

        try {
          setIsLoading(true);

          await userCardDetailsService.update(userId, cardData);

          if (popupCloseHandler) {
            popupCloseHandler();
          } else {
            await paymentService.create(userId, languageData);
            await orderService.create(userId);
            navigate("/order-confirmation");
          }
        } catch (err) {
          console.error(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);
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
    return popupCloseHandler
      ? SAVE_BUTTON_NAMING[language]
      : `${PLACE_ORDER_BUTTON_NAMING[language]} $${totalPrice}`;
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
