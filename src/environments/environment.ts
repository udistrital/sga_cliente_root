export const environment = {
  production: false,
  entorno: "test",
  autenticacion: true,
  notificaciones: false,
  menuApps: false,
  appname: "sga",
  appMenu: "SGA",
  TOKEN: {
    AUTORIZATION_URL: "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
    CLIENTE_ID: "e36v1MPQk2jbz9KM4SmKhk8Cyw0a",
    RESPONSE_TYPE: "id_token token",
    SCOPE: "openid email role documento",
    REDIRECT_URL: "http://localhost:4200/",
    SIGN_OUT_URL: "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
    SIGN_OUT_REDIRECT_URL: "http://localhost:4200/",
    AUTENTICACION_MID: "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
  },
  parcels: {
    "@udistrital/root-config": "//localhost:4200/udistrital-root-config.js",
    "@udistrital/core-mf": "//localhost:4201/main.js",
    "@udistrital/sga-datos-mf": "//localhost:4202/main.js",
    "@udistrital/sga-administracion-mf": "//localhost:4211/main.js",
    "@udistrital/sga-espacios-academicos-mf": "//localhost:4208/main.js",
    "@udistrital/sga-gestionar-periodo-mf": "https://pruebassgagestionperiodo.portaloas.udistrital.edu.co/main.js",
    "@udistrital/sga-derechos-pecuniarios-mf": "//localhost:4208/main.js",
    "@udistrital/sga-notas-mf": "//localhost:4213/main.js",
    "@udistrital/sga-gestion-horarios-mf": "//localhost:4214/main.js",
    "@udistrital/sga-calendarioacademico-mf":"//localhost:4203/main.js"
  }

  
};
