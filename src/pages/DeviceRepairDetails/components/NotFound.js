const NotFound = ({ error, history }) => {
  return (
    <div className="relative w-full u-p-h flex flex-col justify-center items-center">
      <img
        className="h-72 object-contain w-80"
        src="https://cdn.dribbble.com/users/1218631/screenshots/3818393/media/2907281eae03fac6e9f5b99ad597bf13.gif"
        alt="not found location"
      />
      <h2 className="text-black text-5xl">{error}</h2>
      <p
        className="text-gra-600 cursor-pointer mt-6 font-roboto font-semibold"
        onClick={() => history.goBack()}
      >
        Go back
      </p>
    </div>
  );
};

export default NotFound;
