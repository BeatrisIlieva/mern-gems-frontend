import { useForm } from "../../../../hooks/useForm";

import { DynamicForm } from "../../../DynamicForm/DynamicForm";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import { MediumTitle } from "../../../MediumTitle/MediumTitle";


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

  let onSubmit;

  let userInformation;

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
          userInformation={userInformation}
          buttonTitle={ButtonTitle}
        />
      </form>
    </section>
  );
};
