import { useState, useEffect } from "react";

import { useForm } from "../../../../hooks/useForm";

import { DynamicForm } from "../../../DynamicForm/DynamicForm";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import { checkIfCardHasExpired } from "./helpers/checkIfCardHasExpired";

import { checkIfFormErrorHasOccurred } from "../../../../utils/checkIfFormErrorHasOccurred";

import { CARD_HAS_EXPIRED_ERROR_MESSAGE } from "../../../../constants/expiryDate";

import { clearInitialFormValuesMessages } from "../../../../utils/clearInitialFormValuesMessages";
import { useBagContext } from "../../../../contexts/BagContext";

import { useNavigate } from "react-router-dom";

import { useService } from "../../../../hooks/useService";
import { paymentServiceFactory } from "../../../../services/paymentService";

import { userCardDetailsServiceFactory } from "../../../../services/userCardDetailsService";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";
import { ContainerTitle } from "../../../ContainerTitle/ContainerTitle";
import { LoadingSpinner } from "../../../LoadingSpinner/LoadingSpinner";

import { getData } from "./helpers/getData";

export const CardDetailsForm = () => {
  const [userCardDetails, setUserCardDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const userCardDetailsService = useService(userCardDetailsServiceFactory);

  const paymentService = useService(paymentServiceFactory)

  const { userId } = useAuthenticationContext();

  const { totalPrice } = useBagContext();

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

  const { clearShoppingBag } = useBagContext();

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
      const data = getData(values);

      try {
        setIsLoading(true);

        await userCardDetailsService.update(userId, data);

        await paymentService.create(userId, data);

        clearShoppingBag();

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);

        navigate("/order-confirmation");
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
      <ContainerTitle title={"Payment"} />
      <DynamicForm
        values={values}
        formKeys={FORM_KEYS}
        clickHandler={clickHandler}
        blurHandler={blurHandler}
        changeHandler={changeHandler}
        initialFormValues={INITIAL_FORM_VALUES}
        userInformation={userCardDetails}
        buttonTitle={`Place Order $ ${totalPrice}`}
        onSubmit={onSubmit}
      />
    </>
  );
};
