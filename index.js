import { loginInsertEventXML, nameMethod } from "./src/request/loginInsertEvent.js";
import { soapRequest } from "./src/web_service/unigis.com/soapRequest.js";
import getInfoDevices from "./src/api/wialon/wialon.js";
import { destructWialon } from "./src/api/wialon/utils/wialon.utils.js";

const init = async () => {
  const units = await getInfoDevices();
  const _units = await destructWialon(units);
  for (const key in _units) {
    if (Object.prototype.hasOwnProperty.call(_units, key)) {
      const unit = _units[key];
      // console.log( loginInsertEventXML(unit) );
      
      const responseLoginInsertEvent = await soapRequest( loginInsertEventXML(unit), nameMethod );
      if( responseLoginInsertEvent > 0 ){
        console.log( `[${unit.name}]: Registro exitoso en UNIGIS, codigo de respuesta: [${responseLoginInsertEvent}], timestamp:{${unit.timestamp}}` );
      }else{
        console.log( `[${unit.name}]: Error de registro en UNIGIS, timestamp:{${unit.timestamp}}` );
      }
    }
  }
}

init(); // Primera ejecución inmediata

setInterval(() => {
  init(); // Se ejecuta cada 10 segundos sin detener el flujo
}, 60 * 1000); // 10,000 ms = 10 segundos
