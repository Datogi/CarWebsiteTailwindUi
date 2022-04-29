/* This example requires Tailwind CSS v2.0+ */
import SmallCalendar from "./calendar";
import InputElement from "./input";
const people = [
  {
    vin: "12345678",
    model: "Cdilac",
    auctionPrice: "$30700",
    targetPrice: "$32700",
    fileName: "Ford.csv",
    status: "Auction won",
    source: "File name",
  },
  {
    vin: "12345678",
    model: "Cdilac",
    auctionPrice: "33800",
    targetPrice: "$35000",
    fileName: "Ford5.csv",
    status: "in Transit",
    source: "File name123",
  },
  {
    vin: "12345678",
    model: "Cdilac",
    auctionPrice: "$30700",
    targetPrice: "$32700",
    fileName: "Ford.csv",
    status: "Auction won",
    source: "File name",
  },
  {
    vin: "12345678",
    model: "Cdilac",
    auctionPrice: "33800",
    targetPrice: "$35000",
    fileName: "Ford5.csv",
    status: "in Transit",
    source: "File name123",
  },
  // More people...
];

export default function Acqusition() {
  function display() {
    document.querySelector(".timetable").classList.contains("hidden")
      ? document.querySelector(".timetable").classList.remove("hidden")
      : document.querySelector(".timetable").classList.add("hidden");
    document.querySelector(".calendar").classList.contains("hidden")
      ? document.querySelector(".calendar").classList.remove("hidden")
      : document.querySelector(".calendar").classList.add("hidden");
  }
  return (
    <div className="flex flex-col acqusition">
      <h1 className="font-semibold text-xl ml-3 mb-3">Acqusition</h1>
      <div className="px-4 ml-7 py-5 sm:px-6 border-2  border-gray-100 rounded-md widtb ">
        <h1 className="font-semibold text-xl">Vechicles in Acqusition</h1>
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <input
              type="search"
              className="w-1/3 h-7 rounded-md border-2 border-gray-400"
            />
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm font-medium  text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Upload vechicle
            </button>
            <button
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add vechicles
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          {["make", "model", "Year", "Sport", "Milage", "By   Date"].map(
            (el) => (
              <InputElement name={el} />
            )
          )}
          <div className="flex mt-2">
            <a onClick={display}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-5 cursor-pointer  text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-5 text-blue-500"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
      </div>
      <SmallCalendar />
      <div className="-my-2 -ml-1 overflow-x-auto timetable ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Vin Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Make/Model
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Auction price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Target Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    File name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Source
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    See details
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    export
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, personIdx) => (
                  <tr
                    key={person.email}
                    className={personIdx % 2 === 0 ? "bg-white" : "bg-blue-200"}
                  >
                    <td
                      className={
                        personIdx == 1
                          ? "text-black font-extrabold px-6 py-4 whitespace-nowrap text-sm  "
                          : "text-gray-900 px-6 py-4 whitespace-nowrap text-sm font-medium "
                      }
                    >
                      <input className="h-4 w-4" type="checkbox" /> {person.vin}
                    </td>
                    <td
                      className={
                        personIdx == 1
                          ? "text-black font-extrabold px-6 py-4 whitespace-nowrap text-sm  "
                          : "text-gray-900 px-6 py-4 whitespace-nowrap text-sm font-medium "
                      }
                    >
                      {person.model}
                    </td>
                    <td
                      className={
                        personIdx == 1
                          ? "text-black font-extrabold px-6 py-4 whitespace-nowrap text-sm  "
                          : "text-gray-900 px-6 py-4 whitespace-nowrap text-sm font-medium "
                      }
                    >
                      {person.auctionPrice}
                    </td>
                    <td
                      className={
                        personIdx == 1
                          ? "text-black font-extrabold px-6 py-4 whitespace-nowrap text-sm  "
                          : "text-gray-900 px-6 py-4 whitespace-nowrap text-sm font-medium "
                      }
                    >
                      {person.targetPrice}
                    </td>
                    <td
                      className={
                        personIdx == 1
                          ? "text-black font-extrabold px-6 py-4 whitespace-nowrap text-sm  "
                          : "text-gray-900 px-6 py-4 whitespace-nowrap text-sm font-medium "
                      }
                    >
                      {person.fileName}
                    </td>
                    <td
                      className={
                        personIdx == 1
                          ? "text-black font-extrabold px-6 py-4 whitespace-nowrap text-sm  "
                          : "text-gray-900 px-6 py-4 whitespace-nowrap text-sm font-medium "
                      }
                    >
                      {person.status}
                    </td>
                    <td
                      className={
                        personIdx == 1
                          ? "font-extrabold px-6 py-4 whitespace-nowrap text-sm text-black"
                          : "px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      }
                    >
                      {person.source}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6  text-black"
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
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#">
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
