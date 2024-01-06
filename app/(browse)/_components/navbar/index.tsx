import { Actions } from "./actions";
import { Logo } from "./logo";
import { Search } from "./search";


export const Navbar = () => {
    return (
      <nav className="fixed top-0 w-full h-16 z-[49] px-2 lg:px-4 flex justify-between items-center shadow-md">
        <Logo></Logo>
        <Search></Search>
        <Actions />
      </nav>
    );
  };
 
export default Navbar;