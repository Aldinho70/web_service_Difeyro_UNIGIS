import 'dotenv/config'
const USER = process.env.USER_UNIGIS;
const PASSWORD = process.env.PASSWORD_UNIGIS;

// const data = {
//     Dominio: "AB123CD",
//     NroSerie: -1,
//     Codigo: "123",
//     Latitud: -25.2637,
//     Longitud: -57.5759,
//     Altitud: 105.0,
//     Velocidad: 45.0,
//     Rumbo: 180.0,
//     FechaHoraEvento: new Date().toISOString(),
//     FechaHoraRecepcion: new Date().toISOString(),
//     Crudo: "dato opcional"
// };

export const loginInsertEventXML = (data) => {

return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
               xmlns:xsd="http://www.w3.org/2001/XMLSchema"
               xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <LoginYInsertarEvento xmlns="http://unisolutions.com.ar/">
            <SystemUser>${USER}</SystemUser>
            <Password>${PASSWORD}</Password>
            <Dominio>${data.name || ""}</Dominio>
            <NroSerie>${-1}</NroSerie>
            <Codigo>${"123"}</Codigo>
            <Latitud>${data.latitude}</Latitud>
            <Longitud>${data.longitude}</Longitud>
            <Altitud>${data.Altitud || 0}</Altitud>
            <Velocidad>${data.speed || 0}</Velocidad>
            <FechaHoraEvento>${new Date().toISOString()}</FechaHoraEvento>
            <FechaHoraRecepcion>${new Date().toISOString()}</FechaHoraRecepcion>
        </LoginYInsertarEvento>
    </soap:Body>
    </soap:Envelope>`;
};
 

export const nameMethod = 'LoginYInsertarEvento';
