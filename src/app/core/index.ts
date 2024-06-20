import ReactDOM from "react-dom/client";
import { ApplicationComponent, Configuration } from "./types";

export class Core {
  configuration: Configuration = {
    ApplicationDOMNode: () => document.getElementById("root") as HTMLDivElement,
    ApplicationComponent: () => void 0,
    AuthApplicationComponent: () => void 0,
    ApplicationReactDOM: null,
  };

  constructor(
    component: ApplicationComponent,
    authorization: ApplicationComponent
  ) {
    this.configuration.ApplicationComponent = component;
    this.configuration.AuthApplicationComponent = authorization;
  }

  public mount(DomNode: HTMLDivElement) {
    const { ApplicationComponent, AuthApplicationComponent } =
      this.configuration;

    this.configuration.ApplicationReactDOM = ReactDOM.createRoot(DomNode);
    this.configuration.ApplicationReactDOM.render(
      this.validateAuthorization()
        ? ApplicationComponent()
        : AuthApplicationComponent()
    );

    if (this.validateAuthorization()) {
      console.log(AuthApplicationComponent);
    }
  }

  public unmount() {
    const { ApplicationReactDOM } = this.configuration;

    if (ApplicationReactDOM) {
      return ApplicationReactDOM.unmount();
    }

    throw new Error("Core::ApplicationReactDOM cannot be null");
  }

  public async makeCall(
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<Response> {
    try {
      return await fetch(input, init);
    } catch (e) {
      throw new Error(e as string);
    }
  }

  private validateAuthorization(): boolean {
    try {
      if (localStorage.getItem("token")) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }

  public static setup(
    component: ApplicationComponent,
    authorization: ApplicationComponent
  ): void {
    const core = new Core(component, authorization);

    const { ApplicationDOMNode } = core.configuration;

    core.mount(ApplicationDOMNode());

    return void 0;
  }
}
