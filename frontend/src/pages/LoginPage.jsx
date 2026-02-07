import LoginForm from "../components/LoginForm";
import MinalNavbar from "../components/MinalNavbar";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MinalNavbar />
      <div className="flex-1 flex items-center justify-center -mt-16">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
