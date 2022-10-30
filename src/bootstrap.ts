import React from "react";

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");

  // See https://github.com/welldone-software/why-did-you-render#options
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    logOwnerReasons: true,
    collapseGroups: true,
  });
}
