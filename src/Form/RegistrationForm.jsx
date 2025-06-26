import { useForm } from "react-hook-form";
import Field from "../component/Field";
import FieldSet from "../component/FieldSet";

export default function RegistrationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const formSubmit = (formData) => {
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
            <form onSubmit={handleSubmit(formSubmit)}>
                <FieldSet label="Registration Form">
                    <Field label="Email" error={errors.email}>
                        <input
                            {...register("email", {
                                required: "Email is required",
                            })}
                            className={`p-2 border border-box w-[300px] rounded-md ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter Your Email"
                        />
                    </Field>
                    <Field label="Picture" error={errors.picture}>
                        <input
                            {...register("picture", {
                                required: "Your picture is required",
                            })}
                            className={`p-2 cursor-pointer border border-box w-[300px] rounded-md ${errors.picture ? "border-red-500" : "border-gray-300"
                                }`}
                            type="file"
                            name="picture"
                            id="picture"

                        />
                    </Field>
                    <Field label="Full Name" error={errors.fname}>
                        <input
                            {...register("fname", {
                                required: "Full Name is required",
                            })}
                            className={`p-2 border border-box w-[300px] rounded-md ${errors.fname ? "border-red-500" : "border-gray-300"
                                }`}
                            type="text"
                            name="fname"
                            id="fname"
                            placeholder="Enter Your Full Name"
                        />
                    </Field>
                    <Field label="Age" error={errors.age}>
                        <input
                            {...register("age", {
                                required: "Age is required",
                                max: {
                                    value: 100,
                                    message: "Age must be between 0 to 100",
                                },
                            })}
                            className={`p-2 border border-box w-[300px] rounded-md ${errors.age ? "border-red-500" : "border-gray-300"
                                }`}
                            type="number"
                            name="age"
                            id="age"
                            placeholder="Enter Your Age"
                        />
                    </Field>
                    <Field label="Password" error={errors.password}>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Your password is must be at least 8 characters",
                                },
                            })}
                            className={`p-2 border border-box w-[300px] rounded-md ${errors.password ? "border-red-500" : "border-gray-300"
                                }`}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                        />
                    </Field>
                </FieldSet>
                <div>{errors?.root?.random?.message}</div>
                <Field>
                    <button className="text-md text-white cursor-pointer px-4 py-1 border rounded-sm  bg-purple-500 mx-auto">
                        Register
                    </button>
                </Field>
            </form>
        </div>
    );
}
