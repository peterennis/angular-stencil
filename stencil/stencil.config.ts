import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "fwt-slider",
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      serviceWorker: null
    }
  ]
};
