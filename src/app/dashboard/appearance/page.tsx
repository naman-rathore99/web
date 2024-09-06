"use client"

import React from "react"
import { useTheme } from "next-themes"
import { FaSun, FaMoon } from "react-icons/fa"

const Switch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="m-4 flex justify-center space-x-4">

      <button
        onClick={() => setTheme("system")}
        onKeyDown={(e) => e.key === 'Enter' && setTheme("system")}
        className={`flex cursor-pointer items-center justify-between p-4 rounded-lg shadow-lg bg-gray-200 dark:bg-gray-900 w-64 transition-shadow duration-300 ${theme === "system" ? "bg-blue-100" : "bg-gray-200"
          }`}
      >
        <div className="flex items-center">
          <span className="ml-4 text-lg font-medium text-gray-900 dark:text-gray-100">
            System Default
          </span>
        </div>
      </button>
      {/* Light Mode Card */}
      <button
        onClick={() => setTheme("light")}
        onKeyDown={(e) => e.key === 'Enter' && setTheme("light")}
        className={`flex cursor-pointer items-center justify-between p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-64 transition-shadow duration-300 ${theme === "light" ? "bg-blue-100" : "bg-white"
          }`}
      >
        <div className="flex items-center">
          <FaSun className="h-6 w-6 text-yellow-500" />
          <span className="ml-4 text-lg font-medium text-gray-900 dark:text-gray-100">
            Light Mode
          </span>
        </div>
      </button>

      {/* Dark Mode Card */}
      <button
        onClick={() => setTheme("dark")}
        onKeyDown={(e) => e.key === 'Enter' && setTheme("dark")}
        className={`flex cursor-pointer items-center justify-between p-4 rounded-lg shadow-lg bg-gray-800 text-white w-64 transition-shadow duration-300 ${theme === "dark" ? "bg-blue-100" : "bg-gray-800"
          }`}
      >
        <div className="flex items-center">
          <FaMoon className="h-6 w-6 text-blue-500" />
          <span className="ml-4 text-lg font-medium text-gray-100">
            Dark Mode
          </span>
        </div>
      </button>

      {/* System Mode Card */}

    </div>
  )
}

export default Switch
