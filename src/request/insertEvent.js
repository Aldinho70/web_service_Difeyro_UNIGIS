import 'dotenv/config';

const SERVER = process.env.SERVER;

const data = {
    Dominio: "AB123CD",
    NroSerie: -1,
    Codigo: "123",
    Latitud: -25.2637,
    Longitud: -57.5759,
    Altitud: 105.0,
    Velocidad: 45.0,
    Rumbo: 180.0,
    FechaHoraEvento: new Date().toISOString(),
    FechaHoraRecepcion: new Date().toISOString(),
    Crudo: "dato opcional"
};

export const insertEventXML = 
`<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <InsertarEvento xmlns="http://unisolutions.com.ar/">
        <Dominio>${data.Dominio}</Dominio>
        <NroSerie>${data.NroSerie}</NroSerie>
        <Codigo>${data.Codigo}</Codigo>
        <Latitud>${data.Latitud}</Latitud>
        <Longitud>${data.Longitud}</Longitud>
        <Altitud>${data.Altitud}</Altitud>
        <Velocidad>${data.Velocidad}</Velocidad>
        <Rumbo>${data.Rumbo}</Rumbo>
        <FechaHoraEvento>${data.FechaHoraEvento}</FechaHoraEvento>
        <FechaHoraRecepcion>${data.FechaHoraRecepcion}</FechaHoraRecepcion>
        <Crudo>${data.Crudo || ""}</Crudo>
        </InsertarEvento>
    </soap:Body>
</soap:Envelope>`;