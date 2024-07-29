import { useState, useEffect } from "react";
import { useForm } from "../../../../../hooks/useForm";
import { hasFormErrorOccurred } from "../../../../../utils/hasFormErrorOccurred";
import { FORM_KEYS } from "../initialFormValues";
import { clearInitialFormValuesMessages } from "../../../../../utils/clearInitialFormValuesMessages";

import { useLocation, useNavigate } from "react-router-dom";

import { useAuthenticationContext } from "../../../../../contexts/AuthenticationContext";

import { DynamicForm } from "../../../../DynamicForm/DynamicForm";

import { INITIAL_FORM_VALUES } from "../initialFormValues";

import { useService } from "../../../../../hooks/useService";

import { userServiceFactory } from "../../../../../services/userService";

import styles from "./ShippingDetailsForm.module.css";

import { MediumTitle } from "../../../../MediumTitle/MediumTitle";

export const ShippingDetailsForm = ({ toggleDisplayShippingDetailsPopup }) => {
  const userService = useService(userServiceFactory);

  const { userId } = useAuthenticationContext();

  const [userInformation, setUserInformation] = useState([]);

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
    userService
      .getUserShippingDetails(userId)
      .then((data) => {
        setUserInformation(data);
        updateForm();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userInformation]);

  const onSubmit = async (e) => {
    submitHandler(e);

    const errorOccurred = hasFormErrorOccurred(values);

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
        await userService.updateShippingDetails(userId, data);

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);

        if (location.pathname === "/checkout") {
          navigate("/payment");
        } else {
          toggleDisplayShippingDetailsPopup();

          updateForm();
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <section className={styles["shipping-details"]}>
      <div className={styles["top-container"]}>
        <MediumTitle title={"Shipping Details"} />
      </div>
      <form method="POST" onSubmit={onSubmit} className={styles[["form"]]}>
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
