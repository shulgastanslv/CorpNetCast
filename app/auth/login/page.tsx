import { LoginForm } from "@/components/auth/login-form";
import { db } from "@/lib/db";
import { randomUUID } from "crypto";

const LoginPage = async () => {
    return (<LoginForm></LoginForm>);
}
 
export default LoginPage;