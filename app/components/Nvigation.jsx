"use client";

import { useState } from "react";

export default function Navigation() {
  const [show, setShow] = useState(true);
  return (
    <nav>
      <button
        onClick={() => setShow(!show)}
        className="flex items-center sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white font-medium"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <ul
        className={`absolute bg-blue-500 w-full top-20 right-0 text-center p-4 ${
          show && "hidden"
        } sm:top-0 sm:relative sm:flex sm:p-0 z-50`}
      >
        <li className="mb-2 ml-4">
          <a className="text-white font-semibold" href="../">
            Home
          </a>
        </li>
        <li className="mb-2 ml-4">
          <a className="text-white font-semibold" href="../about">
            About
          </a>
        </li>
        <li className="mb-2 ml-4">
          <a className="text-white font-semibold" href="../blog">
            Blog
          </a>
        </li>
        <li className="mb-2 ml-4 mt-4 sm:mt-0">
          <a
            className="text-white font-semibold items-center"
            href="../contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
