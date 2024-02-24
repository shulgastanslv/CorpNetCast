import { Button } from "./ui/button";
import { signOut } from "@/auth";
  
interface LogOutButtonProps {
    children: React.ReactNode;
};

const LogOutButton = ({children} : LogOutButtonProps) => {
    return (
    
    <div>
      <form action={async () => {
        "use server";

        await signOut();
      }}>
        <Button size="sm" type="submit">
            {children}
        </Button>
      </form>
    </div>
    );
}
 
export default LogOutButton;