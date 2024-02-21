import { LoginForm } from "@/components/auth/login-form";
import { db } from "@/lib/db";
import { randomUUID } from "crypto";

const LoginPage = async () => {
    // const id = randomUUID().toString();

    //   await db.user.create(
    //     {
    //       data : {
    //       id : id,
    //       externalUserId : id,
    //       primary_email_address_id: "root@gmail.com",
    //       imageUrl: "",
    //       username: "root",
    //       password: "1234",
    //       stream: {
    //         create:{
    //           name: "root`s stream"
    //         }
    //       }
    //     }}
    //   )

    return (<LoginForm></LoginForm>);
}
 
export default LoginPage;