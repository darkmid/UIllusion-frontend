import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import RegisterForm from "./content";

const RegisterPage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Please complete your information here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default RegisterPage;
