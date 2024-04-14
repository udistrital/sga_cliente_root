// USANDO ESTA CONSTANTE EN EL ARCHIVO index.ejs FUNCIONA BIEN Y LAS URLS NO ESTAN QUEMADAS EN DICHO ARCHIVO

export const parcels2 = {
  "@udistrital/root-config": {
    import: "//localhost:4200/udistrital-root-config.js",
  },
  "@udistrital/core-mf": { import: "//localhost:4201/main.js" },
  "@udistrital/sga-datos-mf": {
    import: "//localhost:4202/main.js",
    path: "datos",
  },
  "@udistrital/sga-calendario-academico-mf": {
    import: "//localhost:4203/main.js",
    path: "calendario-academico",
  },
  "@udistrital/sga-proyecto-curricular-mf": {
    import: "//localhost:4204/main.js",
    path: "proyecto_academico",
  },
  "@udistrital/sga-gestionar-periodo-mf": {
    import: "//localhost:4205/main.js",
    path: "periodo",
  },
  "@udistrital/sga-tirilla-noticias-mf": {
    import: "//localhost:4206/main.js",
    path: "tirilla",
  },
  "@udistrital/sga-admisiones-mf": {
    import: "//localhost:4207/main.js",
    path: "admisiones",
  },
  "@udistrital/sga-derechos-pecunarios-mf": {
    import: "//localhost:4208/main.js",
    path: "derechos-pecuniarios",
  },
  "@udistrital/sga-inscripcion-mf": {
    import: "//localhost:4209/main.js",
    path: "inscripcion",
  },
  "@udistrital/sga-practicas-academicas-mf": {
    import: "//localhost:4210/main.js",
    path: "practicas-academicas",
  },
  "@udistrital/sga-administracion-mf": {
    import: "//localhost:4211/main.js",
    path: "administracion",
  },
  "@udistrital/sga-espacios-academicos-mf": {
    import: "//localhost:4212/main.js",
    path: "espacios-academicos",
  },
  "@udistrital/sga-notas-mf": {
    import: "//localhost:4213/main.js",
    path: "notas",
  },
  "@udistrital/sga-gestion-horarios-mf": {
    import: "//localhost:4214/main.js",
    path: "horarios",
  },
  "@udistrital/sga-plan-estudios-mf": {
    import: "//localhost:4215/main.js",
    path: "plan-estudio",
  },
};
