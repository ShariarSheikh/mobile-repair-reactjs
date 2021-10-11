import { useHistory } from "react-router";

const DeviceCart = ({deviceData}) => {
    const history = useHistory();


    return (
        <div className="w-full">
        <div className="max-w-screen-3xl w-full m-auto flex flex-row flex-wrap justify-center md:justify-center mt-10">
          {deviceData?.map((data) => (
            <div
              onClick={() =>
                history.push(`/device?&name=${data.category}&id=${data._id}`)
              }
              className="cursor-pointer w-36 h-auto mr-4 mb-4 shadow-md p-3"
              key={data._id}
            >
              <img
                className="w-32 h-32 p-2 m-auto object-contain"
                src={data.photo}
                alt="product"
              />
              <p className="mt-3 text-gray-600 text-center line-clamp-1">{data.device}</p>
            </div>
          ))}
        </div>
      </div>
    )
}

export default DeviceCart
