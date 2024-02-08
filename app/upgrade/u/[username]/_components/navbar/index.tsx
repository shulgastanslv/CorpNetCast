import { UserButton } from "@clerk/nextjs";
import { Logo } from "./logo";
import { Actions } from "./actions";


export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 px-2 lg:px-4 flex justify-between items-center shadow-md z-[50]">
      <div className="items-center m-0">
        <Logo></Logo>
      </div>
      <div className="items-center m-2">
        <Actions />
      </div>
    </nav>
  );
};

export default Navbar;