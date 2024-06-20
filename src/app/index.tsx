import React from "react";
import { Core } from "./core";

import "@/app/css/global.css";

import { Application } from "./app";
import { AuthApplication } from "./auth";

Core.setup(
  () => <React.StrictMode children={<Application />} />,
  () => <AuthApplication />
);
