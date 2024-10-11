import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { Link } from "react-router-dom";
import { RenderFormField } from "@/components/form";

// Define the schema with confirm password validation
const formSchema = z
  .object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Invalid email address.",
    }),
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters long.",
      })
      .regex(/[a-zA-Z]/, {
        message: "Password must contain at least one letter.",
      })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Password must contain at least one special character.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const RegisterForm = () => {
  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (values: { username: any; email: any; password: any }) => {
    // Do something with the form values.
    axios
      .post(`${import.meta.env.VITE_API_URL}/user`, {
        username: values.username,
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        toast.success("Registration successful! Redirecting to home page...", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // wait for 3 secs before navigate to the main page
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.error("There was an error registering the user!", error);
        toast.error("Registration failed! Please try again.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <RenderFormField
          control={form.control}
          name="username"
          type="text"
          label="Username"
          placeholder="your username"
          description="This is your public display name."
        />

        <RenderFormField
          control={form.control}
          name="email"
          type="email"
          label="E-mail"
          placeholder="you@example.com"
          description="Please enter a valid email address."
        />

        <RenderFormField
          control={form.control}
          name="password"
          type="password"
          label="Password"
          placeholder="******"
          description="Must be at least 8 characters long, contain one letter and one special character."
        />

        <RenderFormField
          control={form.control}
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="******"
        />

        <div className="flex justify-between">
          <Link to="/login">
            <Button className="px-20" variant="outline">
              Cancel
            </Button>
          </Link>
          <Button className="px-20" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
