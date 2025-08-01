import 'dotenv/config';

const user = process.env.USER /*|| "JornadaDigital"*/;
const pass = process.env.PASSWORD /*|| "XAL963mbf"*/;

export const loginXML = 
`<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <Login xmlns="http://unisolutions.com.ar/">
        <SystemUser>${user}</SystemUser>
        <Password>${pass}</Password>
        </Login>
    </soap:Body>
</soap:Envelope>`;