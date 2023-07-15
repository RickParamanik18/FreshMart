import { Navigate } from "react-router";
import { AuthTemplate } from "../../components/authTemplate/authTemplate";
import { LoginForm } from "../../components/form/loginform/LoginForm";
import useAuth from "../../hooks/useAuth";

export const Login = () => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? (
        <Navigate to={"/"} />
    ) : (
        <AuthTemplate>
            <LoginForm />
        </AuthTemplate>
    );
};
