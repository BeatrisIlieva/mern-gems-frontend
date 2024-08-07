export const AccountManagement = () => {

  const [showUpdatePassword, setShowUpdatePassword] = useState(false);

  const [userLoginDetails, setUserLoginDetails] = useState([]);

  const { userId } = useAuthenticationContext();

  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

  useEffect(() => {
    userLoginDetailsService
      .getOne(userId)
      .then((data) => {
        setUserLoginDetails(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userLoginDetailsService, userId]);


  const onUpdatePasswordClick = async () => {
    setShowUpdatePassword(true);
    setShowUpdateEmail(false);
  };

  return (
    <div className={styles["right-sub-container"]}>
      <LargeTitle title={"Account Management"} variant={"large-title"} />
      <NormalTitle title={userLoginDetails.email} variant={"bolded"} />
      <div className={styles["buttons-container"]}>

        <UnderlinedButton
          title={"Change Password"}
          callBackFunction={onUpdatePasswordClick}
        />
        <Logout />
      </div>
      {showUpdateEmail && <UpdateEmailForm />}
      {showUpdatePassword && <UpdatePasswordForm />}
    </div>
  );
};
