import { Actions } from "./actions";
import { Logo } from "./logo";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 px-2 lg:px-4 flex justify-between items-center shadow-md z-[50]">
        <Logo/>
      <Actions />
    </nav>
  );
};