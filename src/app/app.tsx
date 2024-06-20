import { AppRouting } from "@/pages";
import { withProviders } from "./providers";

export const Application = withProviders((): React.ReactElement => {
  return <AppRouting />;
});
