import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import "./assets/styles/index.css";
import { SharedAssetService } from "./services/shared-asset.service";
import { StylesheetLoader } from "./utils/stylesheet-loader";

let environment;

declare var isProd: boolean | undefined;
declare var isDev: boolean | undefined;

if (isProd) {
  environment = require("./environments/environment.production");
} else if (isDev) {
  environment = require("./environments/environment.development");
} else {
  environment = require("./environments/environment");
}

const data = {
  props: environment,
  loaders: {},
};

const routes = constructRoutes(microfrontendLayout, data);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });
const sharedAssetService = new SharedAssetService();
const stylesheetLoader = new StylesheetLoader();

async function initializeRoot(): Promise<void> {
  try {
    const stylesheetUrl = await sharedAssetService.getUrl("urano-style.css");
    await stylesheetLoader.load(stylesheetUrl, "shared-urano-styles");
  } catch (error) {
    console.error("No fue posible cargar los estilos compartidos", error);
  }

  applications.forEach(registerApplication);
  layoutEngine.activate();
  start();
}

initializeRoot().catch((error) => {
  console.error("No fue posible iniciar el root-config", error);
});
