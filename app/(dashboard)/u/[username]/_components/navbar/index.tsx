import { LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 z-[49] px-2 border-b border-border/40 lg:px-4 flex justify-between items-center shadow-md">
     <Button
        size="sm"
        variant="ghost"
        className="text-muted-foreground hover:text-primary"
        asChild
      >
        <Link href="/">
          <LogOut className="h-5 w-5 mr-2" />
          Exit
        </Link>
      </Button>
    </nav>
  );
};