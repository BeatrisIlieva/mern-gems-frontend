import { useEffect } from "react";
import { useForm } from "../../../../hooks/useForm";
import { checkIfFormErrorHasOccurred } from "../../../../utils/checkIfFormErrorHasOccurred";
import { FORM_KEYS, INITIAL_FORM_VALUES } from "./initialFormValues";
import { clearInitialFormValuesMessages } from "../../../../utils/clearInitialFormValuesMessages";

import { useLocation, useNavigate } from "react-router-dom";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { DynamicForm } from "../../../DynamicForm/DynamicForm";

import { useUserShippingDetails } from "../../../../hooks/useUserShippingDetails";

import { useLoading } from "../../../../hooks/useLoading";

import { LoadingSpinner } from "../../../LoadingSpinner/LoadingSpinner";

export const ShippingDetailsForm = ({ toggleDisplayShippingDetailsPopup }) => {
  const { isLoading, toggleIsLoading } = useLoading();


  const { userShippingDetails, updateUserShippingDetails } =
    useUserShippingDetails();

  const location = useLocation();

  const navigate = useNavigate();

  const ButtonTitle =
    location.pathname === "/checkout" ? "Continue Checkout" : "Save";

  const {
    values,
    updateForm,
    clickHandler,
    blurHandler,
    changeHandler,
    submitHandler,
  } = useForm(INITIAL_FORM_VALUES);

  useEffect(() => {
    updateForm();
  }, [userShippingDetails]);

  const onSubmit = async (e) => {
    toggleIsLoading();

    submitHandler(e);

    const errorOccurred = checkIfFormErrorHasOccurred(values);

    if (!errorOccurred) {
      const firstName = values.firstName.fieldValue;
      const lastName = values.lastName.fieldValue;
      const phoneNumber = values.phoneNumber.fieldValue;
      const country = values.country.fieldValue;
      const city = values.city.fieldValue;
      const street = values.street.fieldValue;
      const apartment = values.apartment.fieldValue;
      const zipCode = values.zipCode.fieldValue;

      const data = {
        firstName,
        lastName,
        phoneNumber,
        country,
        city,
        street,
        apartment,
        zipCode,
      };

      try {
        await updateUserShippingDetails(data);

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);

        if (location.pathname === "/checkout") {
          navigate("/payment");
        } else {
          toggleDisplayShippingDetailsPopup();

          updateForm();
        }

        document.body.style.overflow = "visible";
      } catch (err) {
        console.log(err.message);
      } finally {
        toggleIsLoading();
      }
    }
  };

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
        userInformation={userShippingDetails}
        buttonTitle={ButtonTitle}
        onSubmit={onSubmit}
      />
    </>
  );
};
