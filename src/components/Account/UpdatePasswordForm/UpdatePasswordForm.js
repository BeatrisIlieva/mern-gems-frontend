import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";
import { DynamicForm } from "../../DynamicForm/DynamicForm";
import { LoadingSpinner } from "../../LoadingSpinner/LoadingSpinner";
import { useFetchUserLoginDetails } from "../../../hooks/useFetchUserLoginDetails";
import { useUpdatePasswordForm } from "../../../hooks/useUpdatePasswordForm/useUpdatePasswordForm";
import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";
import styles from "./UpdatePasswordForm.module.css";

export const UpdatePasswordForm = () => {
  const { userId } = useAuthenticationContext();
  const userLoginDetails = useFetchUserLoginDetails(userId);
  const {
    values,
    clickHandler,
    blurHandler,
    changeHandler,
    onSubmit,
    isLoading,
  } = useUpdatePasswordForm(userId);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className={styles["slideIn"]}>
        <DynamicForm
          values={values}
          formKeys={FORM_KEYS}
          clickHandler={clickHandler}
          blurHandler={blurHandler}
          changeHandler={changeHandler}
          initialFormValues={INITIAL_FORM_VALUES}
          userInformation={userLoginDetails}
          buttonTitle={"Save"}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};
