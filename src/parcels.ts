import "regenerator-runtime/runtime";
import "core-js/stable";

// AQUÍ ESTA TODA LA LOGICA PARA RECUPERAR LOS DATOS DE CADA MICROCLIENTE DE LA DB DE PARAMETROS, LA FUNCION organizarParcels DEVUELVE EL MISMO OBJETO QUE SE ASIGNA EN LA CONSTANTE parcels 2

export const parcels = organizarParcels();

async function get(endpoint: any) {
  const url = `http://pruebasapi.intranetoas.udistrital.edu.co:8510/v1/${endpoint}`;
  const response = await fetch(url);

  if (!response.ok) {
    this.errManager.handleError(response);
  }

  const data = await response.json();

  if (data.hasOwnProperty("Body")) {
    return data;
  } else {
    return data;
  }
}

async function cargarParcels() {
  try {
    const response = await get(
      `parametro?query=Activo:true,TipoParametroId:88&sortby=Nombre&order=asc&limit=0`
    );
    if (Object.keys(response.Data[0]).length > 0) {
      return response.Data;
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
}

export async function organizarParcels() {
  let parcelsDic = {};
  const parcelsList = await cargarParcels();
  for (const parcel of parcelsList) {
    if (parcel.ParametroPadreId == null) {
      // let item = {
      //     "udistrital": parcel.Nombre,
      //     "import": parcel.Descripcion
      // }
      parcelsDic[parcel.Nombre] = {
        import: parcel.Descripcion,
      };
      //parcels.push(item);
    }
  }
  return organizarRutasParcels(parcelsList, parcelsDic);
}

function organizarRutasParcels(lista: any, parcelsDic: any) {
  for (const parcel of lista) {
    if (parcel.ParametroPadreId != null) {
      // console.log("******************************1");
      // console.log(parcel.ParametroPadreId.Id);
      const elemento = lista.find(
        (item: any) => item.Id == parcel.ParametroPadreId.Id
      );
      // console.log("******************************2");
      // console.log(elemento);
      //const parcelObjeto = parcels.find((item) => item.udistrital == elemento.Nombre)
      let parcelObjeto = parcelsDic[elemento.Nombre];
      // console.log("*****************************3");
      // console.log(parcelObjeto);
      parcelObjeto["path"] = parcel.Nombre;
      // console.log("******************************4");
      // console.log(parcelObjeto);
      // console.log("******************************4");
      //console.log(parcels);
      return parcelObjeto;
    }
  }
}

//organizarParcels();

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
