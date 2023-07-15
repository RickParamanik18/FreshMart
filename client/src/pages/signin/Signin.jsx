import { Navigate } from "react-router";
import { AuthTemplate } from "../../components/authTemplate/authTemplate";
import { SigninForm } from "../../components/form/signinForm/SigninForm";
import useAuth from "../../hooks/useAuth";

export const Signin = () => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? (
        <Navigate to={"/"} />
    ) : (
        <AuthTemplate>
            <SigninForm />
        </AuthTemplate>
    );
};
