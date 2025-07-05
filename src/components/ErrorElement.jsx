import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  return <div>ErrorElement</div>;
};

export default ErrorElement;
