import { useForm } from "../../../../hooks/useForm";

import { INITIAL_FORM_VALUES } from "./initialFormValues";

export const PaymentInformation = () => {
    const {
        values,
        updateForm,
        clickHandler,
        blurHandler,
        changeHandler,
        submitHandler,
      } = useForm(INITIAL_FORM_VALUES);
}