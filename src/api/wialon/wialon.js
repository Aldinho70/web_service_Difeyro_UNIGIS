import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

// Variables de configuración
const SERVER_WIALON = process.env.SERVER_WIALON;  /*'https://hst-api.wialon.com/wialon/ajax.html';*/
const TOKEN = process.env.TOKEN_WIALON;        /*'75d411452da4001e15a7523b47bbe071741204643F8F56F2E2BA1C050C9F301BCD84731D'; */

async function authenticate() {
    try {
        const response = await axios.get(`${SERVER_WIALON}`, {
            params: {
                svc: 'token/login',
                params: JSON.stringify({ token: TOKEN })
            }
        });
        const { eid } = response.data;
        if (!eid) throw new Error('Error de autenticación');
        console.log('Autenticación exitosa');
        return eid; // Se retorna el eid (ID de sesión) para las siguientes peticiones
    } catch (error) {
        console.log(`Error en la autenticación: ${error.message}`);
        throw error;
    }
}

async function getUnits(eid) {
    try {
        const flags = -1; 
        const response = await axios.get(`${SERVER_WIALON}`, {
            params: {
                svc: 'core/search_items',
                params: JSON.stringify({
                    spec: {
                        itemsType: 'avl_unit',
                        propName: 'sys_name',
                        propValueMask: '*',
                        sortType: 'sys_name'
                    },
                    force: 1,
                    flags: flags,
                    from: 0,
                    to: 0
                }),
                sid: eid 
            }
        });

        const units = response.data.items;
        if (!units || units.length === 0) {
            console.log('No se encontraron unidades.');
            return;
        }
        
        return units ;
    } catch (error) {
        console.log(`Error al obtener unidades: ${error.message}`);
    }
}

// Función principal
const getInfoDevices = async () => {
    try {
        const eid = await authenticate(); // Autenticación y obtención de eid
        return await getUnits(eid); // Obtención de unidades
        
    } catch (error) {
        console.error('Proceso fallido:', error.message);
    }
} 


export default getInfoDevices;