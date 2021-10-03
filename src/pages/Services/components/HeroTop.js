const HeroTop = ({device,search,setSearch,findDevice}) => {
    return (
        <header id="services_page_bg_img">
        <div className="flex flex-col items-center justify-start">
          <h1 className="text-4xl text-start font-normal text-white p-3 bg-opacity-60 bg-black">
            {device} device we repair
          </h1>
          <div className="flex items-center mt-20 bg-white rounded pr-3 pl-3 pt-3 pb-5">
            <input
              type="text"
              placeholder="Search your Device Model"
              className="border-b bg-transparent pl-3 pt-3 pb-3 mr-5 outline-none text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="mt-3 pr-5 pl-5 pt-2 pb-2 bg-indigo-600 text-white  rounded "
              onClick={() =>findDevice()}
            >
              Find
            </button>
          </div>
        </div>
      </header>
    )
}

export default HeroTop
