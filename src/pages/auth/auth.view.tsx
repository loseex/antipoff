import { SignUpForm } from "@/widgets/sign-up-form/sign-up-form.component";
import { FC } from "react";

const AuthView: FC = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full max-w-[500px] bg-white rounded-[16px] p-4 shadow-md">
        <div className="w-full h-fit flex flex-col gap-4">
          <div>
            <h5 className="w-full text-xl">Регистрация</h5>
          </div>
          <div>
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthView;
