import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import { RenderFormField } from "@/components/form";

const formSchema = z.object({
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: "Invalid email address.",
  }),
  password: z.string(),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: any) => {
    // Do something with the form values.
    console.log(values);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        values
      );
      // const response = await axios.post('https://csis3380-project-sbtc.onrender.com/api/login', values);
      const { token, user } = response.data;
      console.log(user);

      // save data to local
      localStorage.setItem("token", token);
      localStorage.setItem("username", user.username);

      toast.success("Login successful! Redirecting...", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/main");
      }, 2000);
    } catch (error) {
      console.error("There was an error logging in!", error);
      toast.error("Invalid email or password.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <RenderFormField
          control={form.control}
          name="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
        />

        <RenderFormField
          control={form.control}
          name="password"
          type="password"
          label="Password"
          placeholder="******"
        />
        <div className="grid gap-4">
          <Button type="submit" className="w-full">
            Login
          </Button>

          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
