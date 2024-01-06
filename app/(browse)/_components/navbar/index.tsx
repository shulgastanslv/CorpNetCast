import { Logo } from "@/app/(auth)/_components/logo";
import { Search } from "./search";


export const Navbar = () => {
    return (
      <nav className="fixed top-0 w-full h-20 z-[49] bg-[#202020] px-2 lg:px-4 flex justify-between items-center shadow-sm">
        <Search></Search>
      </nav>
    );
  };
 
export default Navbar;