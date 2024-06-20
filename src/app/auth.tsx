import { FC, lazy } from "react";
import { withProviders } from "./providers";

const AuthView = lazy(() => import("@/pages/auth/auth.view"));

export const AuthApplication: FC = withProviders((): React.ReactElement => {
  return <AuthView />;
});
