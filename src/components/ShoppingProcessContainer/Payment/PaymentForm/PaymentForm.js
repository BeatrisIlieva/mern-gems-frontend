import { useForm } from "../../../../hooks/useForm";
import { useService } from "../../../../hooks/useService";
import { paymentServiceFactory } from "../../../../services/paymentService";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { DynamicForm } from "../../../DynamicForm/DynamicForm";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import { checkIfCardHasExpired } from "./checkIfCardHasExpired";

import { checkIfFormErrorHasOccurred } from "../../../../utils/checkIfFormErrorHasOccurred";

import { CARD_HAS_EXPIRED_ERROR_MESSAGE } from "../../../../constants/expiryDate";

import { clearInitialFormValuesMessages } from "../../../../utils/clearInitialFormValuesMessages";
import { useBagContext } from "../../../../contexts/BagContext";

import { useNavigate } from "react-router-dom";


export const PaymentForm = () => {
  const { userId } = useAuthenticationContext();
  const { totalPrice } = useBagContext();

  const paymentService = useService(paymentServiceFactory);
  const {
    values,
    setValues,
    updateForm,
    clickHandler,
    blurHandler,
    changeHandler,
    submitHandler,
  } = useForm(INITIAL_FORM_VALUES);

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
      const longCardNumber = values.longCardNumber.fieldValue;
      const cardHolder = values.cardHolder.fieldValue;
      const cvvCode = values.cvvCode.fieldValue;
      const expiryDate = values.expiryDate.fieldValue;

      const data = {
        longCardNumber,
        cardHolder,
        cvvCode,
        expiryDate,
      };

      try {
        await paymentService.create(userId, data);

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);

        updateForm();

        clearShoppingBag();

        navigate("/order-confirmation");
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  const ButtonTitle = `Place Order $ ${totalPrice}`;

  return (
    <DynamicForm
      values={values}
      formKeys={FORM_KEYS}
      clickHandler={clickHandler}
      blurHandler={blurHandler}
      changeHandler={changeHandler}
      initialFormValues={INITIAL_FORM_VALUES}
      buttonTitle={ButtonTitle}
      onSubmit={onSubmit}
    />
  );
};
