export const environment = {
  production: true,
  entorno: "test",
  autenticacion: true,
  notificaciones: false,
  menuApps: false,
  appname: "sga",
  appMenu: "SGA",
  TOKEN: {
    AUTORIZATION_URL: "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
    CLIENTE_ID: "Mg40MfT62GA_vcPMIJurpX3pzx4a",
    RESPONSE_TYPE: "id_token token",
    SCOPE: "openid email role documento",
    REDIRECT_URL: "https://sgamicroclientes.portaloas.udistrital.edu.co",
    SIGN_OUT_URL: "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
    SIGN_OUT_REDIRECT_URL: "https://sgamicroclientes.portaloas.udistrital.edu.co",
    AUTENTICACION_MID: "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
  },
  parcels: {
    "@udistrital/root-config": "https://sgamicroclientes.portaloas.udistrital.edu.co/udistrital-root-config.js",
    "@udistrital/core-mf": "https://coreclientes.portaloas.udistrital.edu.co/main.js",
    "@udistrital/sga-datos-mf": "//localhost:4202/main.js",
    "@udistrital/sga-administracion-mf": "//localhost:4211/main.js",
    "@udistrital/sga-espacios-academicos-mf": "//localhost:4208/main.js",
    "@udistrital/sga-gestionar-periodo-mf": "https://sgagestionperiodo.portaloas.udistrital.edu.co/main.js",
    "@udistrital/sga-derechos-pecuniarios-mf": "//localhost:4208/main.js",
    "@udistrital/sga-notas-mf":"//localhost:4213/main.js",
    "@udistrital/sga-gestion-horarios-mf":"//localhost:4214/main.js",
    "@udistrital/calendario-academico-mf":"https://pruebassgacalendarioacademico.portaloas.udistrital.edu.co"
  }
};
