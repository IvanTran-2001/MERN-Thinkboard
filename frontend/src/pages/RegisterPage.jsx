import RegisterForm from "../components/RegisterForm";
import MinalNavbar from "../components/MinalNavbar";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <MinalNavbar />
      <div className="flex-1 flex items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
