import { NavbarLinks } from "./NavbarLink";
import { LOTRLogo } from "../assets/LOTRLogo";

export const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="w-9/12 mx-auto p-4">
        <div className="flex flex-col items-center justify-center lg:flex-row sm:justify-between lg:items-center">
          <div className="text-center lg:text-left">
            <a href="/lotr">
              <LOTRLogo />
            </a>
          </div>

          <div className="flex flex-row mt-4 lg:mt-0">
            <NavbarLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};
