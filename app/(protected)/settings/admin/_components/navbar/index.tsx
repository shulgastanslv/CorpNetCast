import { Actions } from "./actions";
import { ThemeProvider } from "@/components/theme-provider";


export const Navbar = () => {
  return (
    <nav className="fixed top-16 w-full bg-background h-16 z-[49] px-2 border-b border-border/40 lg:px-4 flex justify-between items-center shadow-md">
      <div className="items-center m-0">
        <Actions />
      </div>
    </nav>
  );
};

export default Navbar;