import { Actions } from "./actions";
import { Logo } from "./logo";
import { Search } from "./search";
import { ThemeProvider } from "@/components/theme-provider";


export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-inherit h-16 z-[49] px-2 border-b border-border/40 lg:px-4 flex justify-between items-center shadow-md">
      <div className="items-center m-0">
          <Logo></Logo>
      </div>
      <div className="items-center">
        <Search></Search>
      </div>
      <div className="items-center m-0">
        <Actions />
      </div>
    </nav>
  );
};

export default Navbar;