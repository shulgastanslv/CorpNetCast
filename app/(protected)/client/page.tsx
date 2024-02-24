import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const ProtectedClientPage = async () => {

  const session = await auth();


  return (<div>
    {JSON.stringify(session, null, "\n")}
    <div className="mt-5">
      <form action={async () => {
        "use server";

        await signOut();
      }}>
        <Button type="submit">
          Sign out
        </Button>
      </form>
      </div>
    </div>
    );

}

    export default ProtectedClientPage;