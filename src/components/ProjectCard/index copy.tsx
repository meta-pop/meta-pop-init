
import { useTheme } from 'app/state/application/hooks'
import { Dropdown } from 'flowbite-react'
import { useEffect } from 'react'

// @ts-ignore TYPE NEEDS FIXING
const ProjectCard = () => {
  const theme = useTheme()
  useEffect(() => {}, [theme])

  return (
    <div className="relative max-w-sm bg-base-100 rounded-lg border border-base-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        {/* eslint-disable-next-line @next/next/no-img-element */ }
        <img className="rounded-t-lg" src="/snapshot1.png" alt="" />
        <div className="absolute right-4 top-4">
          <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
              <span className="sr-only">Open dropdown</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          </button>
          <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
              <ul className="py-1" aria-labelledby="dropdownButton">
              <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
              </li>
              <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
              </li>
              <li>
                  <a href="#" className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
              </li>
              </ul>
          </div>
        </div>

        <div className="p-5">
          <h5 className="mb-1 text-xl font-medium text-accent-content">标题标题标题</h5>
          <span className="text-sm text-base-content">Visual Designer</span>
        </div>
    </div>
  )
}

export default ProjectCard