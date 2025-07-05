import axios from "axios";
import 'dotenv/config';
import { parseSoapResponse } from "./utils/utils.js";

const ENDPOINT = process.env.ENDPOINT;
const SERVER = process.env.SERVER_UNIGIS;

export async function soapRequest(xml, method) {
  const headers = {
    "Content-Type": "text/xml; charset=utf-8",
    SOAPAction: `"${SERVER}${method}"`,
  };

  try {
    const response = await axios.post(ENDPOINT, xml, { headers });
    const data = await parseSoapResponse( response.data );
    return data['response'];
  } catch (err) {
    const errorMessage = err.response?.data || `SOAP request failed for action: ${SERVER}${method}`;
    console.error(method, "Error en la petición SOAP:", errorMessage);
    throw new Error(errorMessage);
  }
}