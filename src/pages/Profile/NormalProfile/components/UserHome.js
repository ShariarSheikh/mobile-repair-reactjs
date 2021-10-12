import { useSelector } from "react-redux";

const UserHome = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <main className="u-p-h flex justify-center items-center flex-col">
      <div className="w-40 h-40 overflow-hidden relative">
        <img
          className="w-full h-full object-cover rounded-full"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="user profile"
        />
      </div>
      <h1 className="text-gray-400 text-4xl font-semibold mt-10">
        Welcome {user.data.name}
      </h1>
    </main>
  );
};

export default UserHome;
