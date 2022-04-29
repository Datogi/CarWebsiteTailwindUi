import InputElement from "./input";
import Maininfo from "./mainInfo";
import Search from "./Search";

/* This example requires Tailwind CSS v2.0+ */
export default function Main() {
  return (
    <div className=" overflow-hidden shadow rounded-lg divide-y divide-gray-200 w-full  photo  ">
      <h1 className="font-semibold text-xl ml-3 mb-3">Inventory</h1>
      <div className="px-4 py-5 sm:px-6 border-2  border-gray-100 rounded-md">
        <Search />
        <div className="flex justify-between mt-3">
          {["make", "model", "Year", "Sport", "Milage", "By   Date"].map(
            (el) => (
              <InputElement name={el} />
            )
          )}
          <div className="flex mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-5  text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 sm:p-6 photo">
        <div className="flex justify-between">
          <div>
            <h1 className="font-extrabold">Vechile Sold</h1>
            <h3 className="font-extralight">Total amount: 5000</h3>
          </div>
          <div className="flex ">
            <h2 className="mr-3">1 out f 5000</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
        <div className="photo">
          <Maininfo />
        </div>
      </div>
    </div>
  );
}
