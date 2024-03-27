import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Opps something went wrong!!!</h1>
      <h3>Something went wrong.Please check the routes or contact ur system admin.</h3>
      <h4>{err.status}: {err.statusText}, {err.error.message}</h4>
    </div>
  );
};

export default Error;
