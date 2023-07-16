import { Navigate } from "react-router";
import { AuthTemplate } from "../../components/authTemplate/authTemplate";
import { SigninForm } from "../../components/form/signinForm/SigninForm";
import { authContext } from "../../context/auth.context";
import { useContext } from "react";

export const Signin = () => {
    const { isLoggedIn } = useContext(authContext);

    return isLoggedIn ? (
        <Navigate to={"/"} />
    ) : (
        <AuthTemplate>
            <SigninForm />
        </AuthTemplate>
    );
};
