export const ShippingInformation = ({ userInformation }) => {
  return (
    <ul role="list">
      <li>
        {userInformation.firstName} {userInformation.lastName}
      </li>
      <li>{userInformation.phoneNumber}</li>
      <li>{userInformation.country}</li>
      <li>
        {userInformation.city}, {userInformation.zipCode}
      </li>
      <li>{userInformation.street} St.</li>
      {userInformation.apartment && <li>Apt. {userInformation.apartment}</li>}
    </ul>
  );
};
