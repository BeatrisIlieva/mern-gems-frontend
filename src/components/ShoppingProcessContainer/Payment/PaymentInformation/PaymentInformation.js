import { useForm } from "../../../../hooks/useForm";

import { DynamicForm } from "../../../DynamicForm/DynamicForm";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import { MediumTitle } from "../../../MediumTitle/MediumTitle";

import { checkIfCardHasExpired } from "./checkIfCardHasExpired";

import { checkIfFormErrorHasOccurred } from "../../../../utils/checkIfFormErrorHasOccurred";

import styles from "./PaymentInformation.module.css";

export const PaymentInformation = () => {
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

    const cardHasExpired = checkIfCardHasExpired(values.expiryDate.fieldValue);

    if (!errorOccurred && cardHasExpired) {
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

      //   try {
      //     await userService.updateShippingDetails(userId, data);

      //     clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);

      //     if (location.pathname === "/checkout") {
      //       navigate("/payment");
      //     } else {
      //       toggleDisplayShippingDetailsPopup();

      //       updateForm();
      //     }
      //   } catch (err) {
      //     console.log(err.message);
      //   }
    }
  };

  const ButtonTitle = "Place Order Total Price";

  return (
    <section className={styles["payment-information"]}>
      <MediumTitle title={"Payment"} />
      <form method="POST" onSubmit={onSubmit} className={styles["form"]}>
        <DynamicForm
          values={values}
          formKeys={FORM_KEYS}
          clickHandler={clickHandler}
          blurHandler={blurHandler}
          changeHandler={changeHandler}
          initialFormValues={INITIAL_FORM_VALUES}
          buttonTitle={ButtonTitle}
        />
      </form>
    </section>
  );
};
