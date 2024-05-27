import { test, expect } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import { UserHelper } from '../../../helpers/utils/userHelper';
import { MensajesConsola } from '../../../helpers/utils/mensajesConsola';

test.describe('Test realizados por Wilson Arriola', {tag: ['@api', '@todos']}, () => {
    // datos para la creación de usuarios
    const userHelper = new UserHelper();

    test('API 1: Get All Products List', {tag:'@api01'}, async ({ request }) => {
        MensajesConsola.mensajeInicio('CU - API 1: Get All Products List');
        // Definir la URL de la API
        const apiUrl = userHelper.getUrlBase() + '/productsList';
        // Realizar la petición GET a la API
        const response = await request.get(apiUrl);
        // Verificar que la respuesta sea 200 OK
        expect(response.status()).toBe(200);
        // Verificar que la respuesta sea en formato JSON
        const responseBody = await response.json();
        // Obtengo el cuerpo de la respuesta
        expect(responseBody).toBeDefined();
        // Verificar que la respuesta contenga la lista de productos
        expect(Array.isArray(responseBody.products)).toBe(true);
        // Verificar que la lista de productos no esté vacía
        expect(responseBody.products.length).toBeGreaterThan(0);
        MensajesConsola.mensajeFin('CU - API 1: Get All Products List');
    });

    test('API 2: POST To All Products List', {tag:'@api02'}, async ({ request }) => {
        MensajesConsola.mensajeInicio('CU - API 2: POST To All Products List');
        // Definir la URL de la API
        const apiUrl = userHelper.getUrlBase() + '/productsList';
        // Realizar la petición POST a la API
        const response = await request.post(apiUrl);
        // Verificar qeu al respuesta sea 200 ok
        expect(response.status()).toBe(200);
        // Verificar que la respuesta sea en formato JSON
        const responseBody = await response.json();
        // Obtengo el cuerpo de la respuesta
        expect(responseBody).toBeDefined();
        // Verificar que codigo de respuesta se 405
        expect(responseBody.responseCode).toBe(405);
        // Verificar que el mensaje sea: "This request method is not supported"
        expect(responseBody.message).toBe('This request method is not supported.');
        MensajesConsola.mensajeFin('CU - API 2: POST To All Products List');
    });

    test('API 3: Get All Brands List', {tag:'@api03'}, async ({ request }) => {
        MensajesConsola.mensajeInicio('CU - API 3: Get All Brands List');
        // Definir la URL de la API
        const apiUrl = userHelper.getUrlBase() + '/brandsList';
        // Realizar la petición GET a la API
        const response = await request.get(apiUrl);
        // Verificar que la respuesta sea 200 OK
        expect(response.status()).toBe(200);
        // Verificar que la respuesta sea en formato JSON
        const responseBody = await response.json();
        // Obtengo el cuerpo de la respuesta
        expect(responseBody).toBeDefined();
        // Verificar que la respuesta contenga la lista de marcas
        expect(Array.isArray(responseBody.brands)).toBe(true);
        // Verificar que la lista de marcas no esté vacía
        expect(responseBody.brands.length).toBeGreaterThan(0);
        MensajesConsola.mensajeFin('CU - API 3: Get All Brands List');
    });

    test('API 4: PUT To All Brands List', {tag:'@api04'}, async ({ request }) => {
        MensajesConsola.mensajeInicio('CU - API 4: PUT To All Brands List');
        // Definir la URL de la API
        const apiUrl = userHelper.getUrlBase() + '/brandsList';
        // Realizar la petición PUT a la API
        const response = await request.put(apiUrl);
        // Verificar que la respuesta sea 200 OK
        expect(response.status()).toBe(200);
        // Verificar que la respuesta sea en formato JSON
        const responseBody = await response.json();
        // Obtengo el cuerpo de la respuesta
        expect(responseBody).toBeDefined();
        // Verificar que codigo de respuesta se 405
        expect(responseBody.responseCode).toBe(405);
        // Verificar que el mensaje sea: "This request method is not supported"
        expect(responseBody.message).toBe('This request method is not supported.');
        MensajesConsola.mensajeFin('CU - API 4: PUT To All Brands List');
    });

    test('API 5: POST To Search Product', {tag:'@api05'}, async ({ request }) => {
        MensajesConsola.mensajeInicio('CU - API 5: POST To Search Product');
        // Definir la URL de la API
        const apiUrl = userHelper.getUrlBase() + '/searchProduct';
        // Realizar la petición POST a la API
        const response = await request.post(apiUrl, {
            form: {
                search_product: 'top'
            }
        });
        // Verificar que la respuesta sea 200 OK
        expect(response.status()).toBe(200);
        // Verificar que la respuesta sea en formato JSON
        const responseBody = await response.json();
        // Obtengo el cuerpo de la respuesta
        expect(responseBody).toBeDefined();
        // Verificar que la respuesta contenga la lista de productos
        expect(Array.isArray(responseBody.products)).toBe(true);
        // Verificar que la lista de productos no esté vacía
        expect(responseBody.products.length).toBeGreaterThan(0);
        MensajesConsola.mensajeFin('CU - API 5: POST To Search Product');
    });

});