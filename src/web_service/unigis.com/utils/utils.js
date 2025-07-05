import { parseStringPromise } from "xml2js";

export async function parseSoapResponse(xml) {
  try {
    const json = await parseStringPromise(xml, {
      explicitArray: false,
      ignoreAttrs: false,
    });

    const body = json["soap:Envelope"]["soap:Body"];

    // Acceder al primer método dentro del body (ej: LoginResponse, InsertarEventoResponse)
    const methodKey = Object.keys(body)[0];
    const methodResponse = body[methodKey];

    // Quitar atributos XML como "$": { xmlns: ... }
    const cleaned = {};
    for (const key in methodResponse) {
      if (key !== "$") {
        cleaned['response'] = methodResponse[key];
      }
    }

    return cleaned;
  } catch (err) {
    throw new Error("❌ Error al procesar XML SOAP: " + err.message);
  }
}
