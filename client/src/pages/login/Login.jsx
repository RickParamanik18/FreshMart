import { Navigate } from "react-router";
import { AuthTemplate } from "../../components/authTemplate/authTemplate";
import { LoginForm } from "../../components/form/loginform/LoginForm";
import { authContext } from "../../context/auth.context";
import { useContext } from "react";

export const Login = () => {
    const { isLoggedIn } = useContext(authContext);
    return isLoggedIn ? (
        <Navigate to={"/"} />
    ) : (
        <AuthTemplate>
            <LoginForm />
        </AuthTemplate>
    );
};
