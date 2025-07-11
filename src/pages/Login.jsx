import React from "react";

import { SubmitBtn, FormInput } from "../components";
import { Form, Link } from "react-router-dom";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = {
      identifier: formData.get("identifier"),
      password: formData.get("password"),
    };
    try {
      const response = await customFetch.post("/auth/local/", data);
      store.dispatch(loginUser(response.data));
      toast.success("Logged in successfully");
      // return redirect("/login");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please check your credentials";
      console.log(errorMessage);
    }
  };

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold ">Login</h4>
        <FormInput type="email" label="email" name="identifier" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block capitalize"
        >
          guest user
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to="/register"
            className="ml-2 link-hover link-primary capitalize"
          >
            {" "}
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
