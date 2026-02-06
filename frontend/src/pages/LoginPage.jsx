import LoginForm from "../components/LoginForm";
import MinalNavbar from "../components/MinalNavbar";

const LoginPage = () => {
  return (
    <div className="min-h-screen">
      <MinalNavbar />
      <div className="flex items-center justify-center min-h-screen">
        <LoginForm />
      </div>

    </div>
  )
};

export default LoginPage;
