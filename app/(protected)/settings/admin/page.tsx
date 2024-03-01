import {Button} from "@/components/ui/button";
import Link from "next/link";

const AdminPage = () => {

    return (
        <div className="h-full flex flex-col space-y-4 w-full items-center justify-center text-muted-foreground">
            <p>
                You are welcome, this is your admin panel 👋
            </p>
            <Button variant="secondary" asChild>
                <Link href="/">
                    Exit from panel
                </Link>
            </Button>
        </div>);
}

export default AdminPage;