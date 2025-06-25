import { useForm } from "react-hook-form";
import Field from "../component/Field";
import FieldSet from "../component/FieldSet";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    const user = {
      email: "x@example.com",
      password: "12345678",
    };

    const found =
      formData.email === user.email && formData.password === user.password;
    if (!found) {
      setError("root.random", {
        message: `user with email ${formData.email} is not found`,
        type: "random",
      });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="EnterLogin Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required" })}
              className={`p-2 border border-box w-[300px] rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email Address"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password id required",
                minLength: {
                  value: 8,
                  message: "Your password is must be at least 8 characters",
                },
              })}
              className={`p-2 border border-box w-[300px] rounded-md ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
            />
          </Field>
        </FieldSet>
        <div>{errors?.root?.random?.message}</div>

        <Field>
          <button className="text-md text-white cursor-pointer px-4 py-1 border rounded-sm  bg-purple-500 mx-auto">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
}
