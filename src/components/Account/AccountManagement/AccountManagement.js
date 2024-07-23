import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";

export const AccountManagement = () => {
  const [showUpdateEmail, setShowUpdateEmail] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);

  const onUpdateEmailClick = async () => {
    setShowUpdateEmail(true);
    setShowUpdatePassword(false);
  };

  const onUpdatePasswordClick = async () => {
    setShowUpdatePassword(true);
    setShowUpdateEmail(false);
  };
  
  return (
    <section className={styles["slideIn"]}>
      <UpdateEmailForm />
    </section>
  );
};
