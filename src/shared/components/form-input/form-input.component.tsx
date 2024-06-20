import { FC, InputHTMLAttributes } from "react";
import { FormInputProps } from "./form-input";

export const FormInput: FC<
  FormInputProps & InputHTMLAttributes<HTMLInputElement>
> = (props): JSX.Element => {
  return (
    <div className="w-full">
      <p className="text-[16px] mb-2">{props.label}</p>
      <div className="relative">
        <input
          className="w-full bg-[#F8F8F8] p-[16px] rounded-lg"
          {...props}
          type={props.show_password ? "text" : props.type}
        />
        {props.type == "password" && (
          <button
            className="absolute top-4 right-[10px]"
            onClick={props.showCallback}
          >
            <img
              className="w-6 text-gray-400"
              src={
                props.show_password ? "eye-outline.svg" : "eye-off-outline.svg"
              }
              alt="input icon"
            />
          </button>
        )}
      </div>
    </div>
  );
};
