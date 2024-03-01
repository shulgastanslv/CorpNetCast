import {Button} from "@/components/ui/button";
import {getSelf} from "@/lib/auth-service";
import {LoginButton} from "@/components/auth/login-button";
import {Menu} from "@/app/(browse)/_components/menu";

export const Actions = async () => {
    const user = await getSelf();

    return (

        <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
            {!user && (
                <div className="flex items-center">
                    <LoginButton>
                        <Button size="sm" variant="default">
                            Sign In
                        </Button>
                    </LoginButton>
                </div>
            )}
            {!!user && (
                <div className="flex items-center mr-2">
                    <Menu></Menu>
                </div>
            )}
        </div>
    );
};