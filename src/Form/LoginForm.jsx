import Field from "../component/Field";
import FieldSet from "../component/FieldSet";

export default function LoginForm() {
  return (
    <form action="">
      <FieldSet label="EnterLogin Details">
        <Field label="Email">
          <input
            className="p-2 border border-box w-[300px] rounded-md border-gray-300"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Address"
          />
        </Field>
        <Field label="Password">
          <input
            className="p-2 border border-box w-[300px] rounded-md border-gray-300"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
          />
        </Field>
      </FieldSet>

      <Field>
        <button className="text-md text-white cursor-pointer px-4 py-1 border rounded-sm  bg-purple-500">
          Login
        </button>
      </Field>
    </form>
  );
}
