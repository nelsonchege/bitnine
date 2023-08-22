import { LoginForm } from "./Form";

export default function LoginPage() {
  return (
    <>
      <div className="bg-slate-100 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <LoginForm />
          <div className="text-grey-dark mt-6 ">
            Dont have an account?{" "}
            <a
              className="no-underline border-b border-blue text-blue"
              href="/signup"
            >
              Sign up
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
}
