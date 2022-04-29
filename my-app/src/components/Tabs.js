/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { useState, useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  const [selected, setSelected] = useState("Profile");
  const [show, setShow] = useState("Profile");
  const [tabs, setTabs] = useState([
    { name: "Profile", class: "Profile", href: "#", current: true },
    { name: "Notification", class: "Notification", href: "#", current: false },
    { name: "My Calendar", class: "Calendar", href: "#", current: false },
    { name: "Team Managment", class: "Team", href: "#", current: false },
  ]);

  useEffect(() => {
    const arr = tabs.map((el) => {
      el.name == selected ? (el.current = true) : (el.current = false);
      document.querySelector(`.${el.class}`)?.classList.add("hidden");
      document.querySelector(`.${show}`)?.classList.remove("hidden");

      return el;
    });

    setTabs(arr);
  }, [selected]);

  return (
    <div className="ml-8 mb-3">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10  text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={() => {
                  setSelected(tab.name);
                  setShow(tab.class);
                }}
                className={classNames(
                  tab.current
                    ? "border-blue-500 text-black font-bold"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium",
                  "whitespace-nowrap py-4 px-1 border-b-2  text-sm"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
