export type ApplicationComponent = () => ReactNode;

export interface Configuration {
  ApplicationDOMNode: () => HTMLDivElement;
  ApplicationComponent: ApplicationComponent;
  AuthApplicationComponent: ApplicationComponent;
  ApplicationReactDOM: ReactDOM.Root | null;
}
