import React from "react";

import { compose } from "@reduxjs/toolkit";

import { withRouter } from "./with-router.provider";
import { withStore } from "./with-store.provider";

export const withProviders = compose<React.FC>(withRouter, withStore);
