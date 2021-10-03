const NotFound = ({device}) => {
    return (
        <div className="w-full flex flex-col justify-center items-center h-96">
        <img
          className="h-72 object-contain w-80"
          src="https://cdn.dribbble.com/users/1218631/screenshots/3818393/media/2907281eae03fac6e9f5b99ad597bf13.gif"
          alt="not found location"
        />
        <h1 className="text-3xl">
          OHHH... sorry we don't repair
          <span className="text-blue-500">{device}</span>
        </h1>
      </div>
    )
}

export default NotFound
