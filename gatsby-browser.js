/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "./src/styles/sass/global.scss"
import "./src/i18n/config"


// gatsby-browser.js
export const onRouteUpdate = () => {
  if (typeof window !== "undefined") {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }
};
