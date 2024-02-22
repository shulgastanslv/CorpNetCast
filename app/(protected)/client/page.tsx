import { signOut } from "@/auth";

const ProtectedClientPage = () => {
    return (<div>
        <form action={async () => {
        "use server";

        await signOut();
      }}>
        <button type="submit">
          Sign out
        </button>
        </form></div>);
}
 
export default ProtectedClientPage;