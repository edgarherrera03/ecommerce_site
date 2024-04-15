import "./authentication.styles.scss";
import SignUpForm from "../../components/sign-up-form/sign-up.component";
import SignInForm from "../../components/sign-in-form/sign-in.component";

const SignIn = () => {
	return (
		<div className="authentication-container">
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default SignIn;
