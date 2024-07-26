import { useAuthenticationContext } from "../../../../../contexts/AuthenticationContext";

import { DynamicForm } from "../../../../DynamicForm/DynamicForm";

import { INITIAL_FORM_VALUES } from "../initialFormValues";

export const ShippingDetailsForm = () => {
  const { userId } = useAuthenticationContext();

  const addressInformationService = useService(
    addressInformationServiceFactory
  );

  const [userInformation, setUserInformation] = useState([]);

  const {
    values,
    updateForm,
    clickHandler,
    blurHandler,
    changeHandler,
    submitHandler,
  } = useForm(INITIAL_FORM_VALUES);

  useEffect(() => {
    addressInformationService
      .find(userId)
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
      const phoneNumber = values.phoneNumber.fieldValue;
      const country = values.country.fieldValue;
      const city = values.city.fieldValue;
      const street = values.street.fieldValue;
      const apartment = values.apartment.fieldValue;
      const zipCode = values.zipCode.fieldValue;

      const data = {
        phoneNumber,
        country,
        city,
        street,
        apartment,
        zipCode,
      };

      try {
        await addressInformationService.update(userId, data);

        Object.keys(FORM_KEYS).forEach((key) => {
          INITIAL_FORM_VALUES[FORM_KEYS[key]].errorMessage = "";
        });

        popupSubmitHandler();

        updateForm();
      } catch (err) {
        console.log(err.message);
      }
    }
  };
};
