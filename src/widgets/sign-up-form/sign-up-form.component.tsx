import { usePostRegisterUserMutation } from "@/api/auth/auth.api";
import { FormInput } from "@/shared/components/form-input/form-input.component";
import { useActions } from "@/shared/hooks/redux/redux.actions";
import { useTypedSelector } from "@/shared/hooks/redux/redux.selector";
import { FC } from "react";

export const SignUpForm: FC = (): JSX.Element => {
  const [request] = usePostRegisterUserMutation();

  const payload = useTypedSelector((state) => state.AuthSliceReducer);
  const {
    setAuthUsername,
    updShowPasswordParams,
    setAuthEmail,
    setAuthPassword,
    setAuthPasswordConfirm,
  } = useActions();

  const isDisabled =
    payload.state.username.length <= 3 ||
    payload.confirm.password_confirm !== payload.state.password ||
    payload.state.email.length <= 3;

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (!isDisabled) request(payload.state);
      }}
    >
      <FormInput
        label="Имя"
        type="text"
        placeholder="Артур"
        value={payload.state.username}
        onChange={(ev) => setAuthUsername(ev.target.value)}
      />
      <FormInput
        label="Электронная почта"
        type="email"
        placeholder="example@mail.ru"
        value={payload.state.email}
        onChange={(ev) => setAuthEmail(ev.target.value)}
      />
      <FormInput
        label="Пароль"
        type="password"
        placeholder="******"
        value={payload.state.password}
        onChange={(ev) => setAuthPassword(ev.target.value)}
        show_password={payload.params.show_password}
        showCallback={() =>
          updShowPasswordParams(!payload.params.show_password)
        }
      />
      <FormInput
        label="Подтвердите пароль"
        type="password"
        placeholder="******"
        value={payload.confirm.password_confirm}
        onChange={(ev) => setAuthPasswordConfirm(ev.target.value)}
        show_password={payload.params.show_password}
        showCallback={() =>
          updShowPasswordParams(!payload.params.show_password)
        }
      />
      <button
        className="w-full bg-[#512689] py-3 rounded-lg disabled:bg-purple-950 disabled:cursor-no-drop mt-2 transition"
        disabled={isDisabled}
        onClick={() => request(payload.state)}
      >
        <span className="text-white text-[16px]">Зарегистрироваться</span>
      </button>
    </form>
  );
};
