"use client";
import { FilterAlt, Search } from "@mui/icons-material";
import { useWindowWidth } from "@react-hook/window-size";
import FilterDrawer from "../FilterDrawer";

export default function SerachFilterPanel({
  searchQuery = "",
  openFilter = false,
  isFilter = false,
  setSearchQuery = () => {},
  filterHandler = () => {},
  setOpenFilter = () => {},
  label = "",
  placeholder = "",
}) {
  const screenWidth = useWindowWidth();

  return (
    <div
      className={`py-2 mb-5 w-full  ${screenWidth < 768 ? "filter-panel" : ""}`}
    >
      <div
        className={`flex relative justify-between items-end mt-auto sm:mx-12 mx-4`}
      >
        {isFilter ? (
          <>
            <FilterDrawer
              open={openFilter}
              setOpen={setOpenFilter}
              onFilter={filterHandler}
            />
            <button
              onClick={() => setOpenFilter(!openFilter)}
              className="uppercase hidden px-2 py-1 text-sm md:flex justify-between items-center text-orange-600 hover:bg-orange-50 rounded"
            >
              <FilterAlt color="warning" />
              <span className="md:block hidden">Filter</span>
            </button>
          </>
        ) : (
          <span />
        )}
        <div
          className={`xl:w-1/4 lg:w-[35%] md:w-1/2 ${
            isFilter ? "w-[90%] justify-between" : "w-full justify-end"
          } flex items-center border-orange-400`}
        >
          <Search fontSize="small" color="action" />
          <input
            type="search"
            // className="h-10 px-3 focus:outline-none w-full md:text-base sm:text-sm text-xs"
            className="h-10 px-3 w-full border-b-2 outline-none border-transparent focus:outline-none border-gray-300 focus:border-orange-500 transition-all duration-300 md:text-base sm:text-sm text-xs"
            label={label}
            value={searchQuery}
            placeholder={placeholder}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {isFilter ? (
          <button
            onClick={() => setOpenFilter(!openFilter)}
            className="md:hidden w-8 h-8 text-sm flex justify-center items-center text-orange-600 bg-orange-50 rounded-full"
          >
            <FilterAlt color="warning" fontSize="small" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
