import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();

  return (
    <div className="u-p-h w-full flex flex-col space-y-6 items-center justify-center">
      <h1 className="text-white text-6xl align-center ">Error page</h1>
      <p onClick={() => history.goBack()} className="cursor-pointer text-white">
        Back to Home page
      </p>
    </div>
  );
};

export default NotFound;
