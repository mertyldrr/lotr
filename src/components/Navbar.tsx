import { NavItems } from "../constants";
import { NavbarLink } from "./NavbarLink";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center font-aniron text-2xl font-semibold whitespace-nowrap dark:text-white">
            LOTR
          </span>
        </a>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-language-select"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {NavItems.map((label: string) => (
              <NavbarLink label={label} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
