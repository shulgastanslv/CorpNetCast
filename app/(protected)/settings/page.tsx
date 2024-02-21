import { auth, signOut } from "@/auth";
import { getSelf } from "@/lib/auth-service";

const SettingsPage = async () => {
  const session = await auth();

  const self = await getSelf();

  return ( 
    <div>
      {JSON.stringify(session)}
      {JSON.stringify(self)}
      <form action={async () => {
        "use server";

        await signOut();
      }}>
        <button type="submit">
          Sign out
        </button>
      </form>
    </div>
   );
}
 
export default SettingsPage;