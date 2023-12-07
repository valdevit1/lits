import Alert from "react-bootstrap/Alert";

const Alert = ({ alertType, alertText }) => {
  return (
    <>
      <Alert variant={alertType}>{alertText}</Alert>
    </>
  );
};

export default Alert;
