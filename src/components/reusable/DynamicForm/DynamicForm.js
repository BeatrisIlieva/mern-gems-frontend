import { FieldBox } from "./FieldBox/FieldBox";
import {Button} from "../../reusable/Button/Button"

import styles from "./DynamicForm.module.css";

export const DynamicForm = ({
  values,
  formKeys,
  clickHandler,
  blurHandler,
  changeHandler,
  initialFormValues,
  userInformation,
  buttonTitle,
  onSubmit,
  isLoading
}) => {
  return (
    <form method="POST" onSubmit={onSubmit} className={styles["form"]}>
      {Object.entries(formKeys).map(([key, value]) => (
        <FieldBox
          changeHandler={changeHandler}
          clickHandler={clickHandler}
          blurHandler={blurHandler}
          userInformation={userInformation}
          values={values}
          value={value}
          currentKey={key}
          initialFormValues={initialFormValues}
        />
      ))}
      <Button title={buttonTitle} isLoading={isLoading} type={"submit"} variant={"pink"}/>
    </form>
  );
};
