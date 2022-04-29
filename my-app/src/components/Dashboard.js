/* This example requires Tailwind CSS v2.0+ */
import {
  CalendarIcon,
  ChartBarIcon,
  HomeIcon,
  ShoppingBagIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Main from "./main";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [ind, setInd] = useState("Dashboard");
  const [navigation, setNavigation] = useState([
    { name: "Dashboard", icon: HomeIcon, href: "#", current: true },
    { name: "Acqusition", icon: ShoppingBagIcon, href: "#", current: false },
    { name: "Inventory", icon: ViewListIcon, href: "#", current: false },
    { name: "CPM", icon: CalendarIcon, href: "#", current: false },
    { name: "Reports", icon: ChartBarIcon, href: "#", current: false },
  ]);
  useEffect(() => {
    const arr = navigation.map((el) => {
      el.name == ind ? (el.current = true) : (el.current = false);
      console.log(
        document.querySelector(`.${el.name}`)?.classList.add("hidden")
      );
      console.log(
        document.querySelector(`.${ind}`)?.classList.remove("hidden")
      );
      return el;
    });
    setNavigation(arr);
    console.log(arr);
  }, [ind]);

  return (
    <div>
      <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 overflow-y-auto h-screen">
        <div className="flex items-center flex-shrink-0 px-4 space-y-5">
          <h1 className="text-3xl text-blue-600 font-semibold">Getcar</h1>
        </div>
        <div className="mt-5 flex-grow flex flex-col w-80">
          <nav className="flex-1 bg-white space-y-1" aria-label="Sidebar">
            {navigation.map((item, index) => (
              <a
                id={index}
                onClick={() => {
                  setInd(item.name);
                }}
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-indigo-50 border-blue-600 text-blue-600 group flex items-center px-2 py-2 text-sm font-medium border-l-4 "
                    : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium border-l-4",
                  ""
                )}
              >
                <item.icon
                  className={
                    item.current
                      ? "text-blue-500 mr-3 flex-shrink-0 h-6 w-6"
                      : "text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
                  }
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
