import { test, expect } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import { UserHelper } from '../../../helpers/utils/userHelper';
import { MensajesConsola } from '../../../helpers/utils/mensajesConsola';

test.describe.serial('Test realizados por Wilson Arriola', {tag: ['@api', '@todos']}, () => {
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

    test('API 6: POST To Search Product without search_product parameter', {tag:'@api06'}, async ({ request }) => {
        MensajesConsola.mensajeInicio('CU - API 6: API 6: POST To Search Product without search_product parameter');
        // Definir la URL de la API
        const apiUrl = userHelper.getUrlBase() + '/searchProduct';
        // Realizar la petición POST a la API
        const response = await request.post(apiUrl);
        // Verificar que la respuesta sea 200 OK
        expect(response.status()).toBe(200);
        // Verificar que la respuesta sea en formato JSON
        const responseBody = await response.json();
        // Obtengo el cuerpo de la respuesta
        expect(responseBody).toBeDefined();
        // Verificar que codigo de respuesta se 400
        expect(responseBody.responseCode).toBe(400);
        // Verificar que el mensaje sea: "Bad request, search_product parameter is missing in POST request"
        expect(responseBody.message).toBe('Bad request, search_product parameter is missing in POST request.');
        MensajesConsola.mensajeFin('CU - API 6: API 6: POST To Search Product without search_product parameter');
    });
    
    test('API 7: POST To Verify Login with valid details', {tag:'@api07'}, async ({ request }) => {
        MensajesConsola.mensajeInicio('CU - API 7: POST To Verify Login with valid details');
        // Definir la URL de la API
        const apiUrl = userHelper.getUrlBase() + '/verifyLogin';
        // Realizar la petición POST a la API
        const response = await request.post(apiUrl, {
            form: {
                email: await userHelper.getCorreo(),
                password: await userHelper.getPassword()
            }
        });
        // Verificar que la respuesta sea 200 OK
        expect(response.status()).toBe(200);
        // Verificar que la respuesta sea en formato JSON
        const responseBody = await response.json();
        // Obtengo el cuerpo de la respuesta
        expect(responseBody).toBeDefined();
        // Verificar que codigo de respuesta se 200
        expect(responseBody.responseCode).toBe(200);
        // Verificar que el mensaje sea: "User exists!"
        expect(responseBody.message).toBe('User exists!');
        MensajesConsola.mensajeFin('CU - API 7: POST To Verify Login with valid details');
    });

    test('API 8: POST To Verify Login without email parameter', {tag:'@api08'}, async ({ request }) => {
        MensajesConsola.mensajeInicio('CU - API 8: POST To Verify Login without email parameter');
        // Definir la URL de la API
        const apiUrl = userHelper.getUrlBase() + '/verifyLogin';
        // Realizar la petición POST a la API
        const response = await request.post(apiUrl, {
            form: {
                password: await userHelper.getPassword()
            }
        });
        // Verificar que la respuesta sea 200 OK
        expect(response.status()).toBe(200);
        // Verificar que la respuesta sea en formato JSON
        const responseBody = await response.json();
        // Obtengo el cuerpo de la respuesta
        expect(responseBody).toBeDefined();
        // Verificar que codigo de respuesta se 400
        expect(responseBody.responseCode).toBe(400);
        // Verificar que el mensaje sea: "Bad request, email or password parameter is missing in POST request."
        expect(responseBody.message).toBe('Bad request, email or password parameter is missing in POST request.');
        MensajesConsola.mensajeFin('CU - API 8: POST To Verify Login without email parameter');
    });

    test('API 9: DELETE To Verify Login', {tag:'@api09'}, async ({ request }) => {
        MensajesConsola.mensajeInicio('CU - API 9: DELETE To Verify Login');
        // Definir la URL de la API
        const apiUrl = userHelper.getUrlBase() + '/verifyLogin';
        // Realizar la petición DELETE a la API
        const response = await request.delete(apiUrl);
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
        MensajesConsola.mensajeFin('CU - API 9: DELETE To Verify Login');
    });

    test('API 10: POST To Verify Login with invalid details', {tag:'@api10'}, async ({ request }) => {
        MensajesConsola.mensajeInicio('CU - API 10: POST To Verify Login with invalid details');
        // Definir la URL de la API
        const apiUrl = userHelper.getUrlBase() + '/verifyLogin';
        // Realizar la petición POST a la API
        const response = await request.post(apiUrl, {
            form: {
                email: 'algo@erroneo.com',
                password: 'algo'
            }
        });
        // Verificar que la respuesta sea 200 OK
        expect(response.status()).toBe(200);
        // Verificar que la respuesta sea en formato JSON
        const responseBody = await response.json();
        // Obtengo el cuerpo de la respuesta
        expect(responseBody).toBeDefined();
        // Verificar que codigo de respuesta se 404
        expect(responseBody.responseCode).toBe(404);
        // Verificar que el mensaje sea: "User not found!"
        expect(responseBody.message).toBe('User not found!');
        MensajesConsola.mensajeFin('CU - API 10: POST To Verify Login with invalid details');
    });

    test('API 11: POST To Create/Register User Account', {tag:'@api11'}, async ({ request }) => {
        MensajesConsola.mensajeInicio('CU - API 11: POST To Create/Register User Account');
        // Definir la URL de la API
        const apiUrl = userHelper.getUrlBase() + '/createAccount';
        // Realizar la petición POST a la API
        const data = userHelper.getJsonUsuarioDto(3);
        console.log(data);
        const response = await request.post(apiUrl, {
            form: data
        });
        // Verificar que la respuesta sea 200 OK
        expect(response.status()).toBe(200);
        // Verificar que la respuesta sea en formato JSON
        const responseBody = await response.json();
        // Obtengo el cuerpo de la respuesta
        expect(responseBody).toBeDefined();
        // Verificar que codigo de respuesta se 200
        expect(responseBody.responseCode).toBe(201);
        // Verificar que el mensaje sea: "User created!"
        expect(responseBody.message).toBe('User created!');
        MensajesConsola.mensajeFin('CU - API 11: POST To Create/Register User Account');
    });

    test('API 13: PUT METHOD To Update User Account', {tag:'@api13'}, async ({ request }) => {
        MensajesConsola.mensajeInicio('CU - API 13: PUT METHOD To Update User Account');
        // Definir la URL de la API
        const apiUrl = userHelper.getUrlBase() + '/updateAccount';
        // Realizar la petición PUT
        const data = userHelper.getJsonUsuarioDto(3);
        const response = await request.put(apiUrl, {
            form: data
        });
        // Verificar que la respuesta sea 200 OK
        expect(response.status()).toBe(200);
        // Verificar que la respuesta sea en formato JSON
        const responseBody = await response.json();
        // Obtengo el cuerpo de la respuesta
        expect(responseBody).toBeDefined();
        // Verificar que codigo de respuesta se 200
        expect(responseBody.responseCode).toBe(200);
        // Verificar que el mensaje sea: "User updated!"
        expect(responseBody.message).toBe('User updated!');
        MensajesConsola.mensajeFin('CU - API 13: PUT METHOD To Update User Account');
    });

    test('API 14: GET user account detail by email', {tag:'@api14'}, async ({ request }) => {
        MensajesConsola.mensajeInicio('CU - API 14: GET user account detail by email');
        // Definir la URL de la API
        const apiUrl = userHelper.getUrlBase() + '/getUserDetailByEmail?email=' + userHelper.registrarUsuarioDto()[3].email;
        // Realizar la petición GET a la API
        const response = await request.get(apiUrl);
        // Verificar que la respuesta sea 200 OK
        expect(response.status()).toBe(200);
        // Verificar que la respuesta sea en formato JSON
        const responseBody = await response.json();
        // Obtengo el cuerpo de la respuesta
        expect(responseBody).toBeDefined();
        // Verificar que codigo de respuesta se 200
        expect(responseBody.responseCode).toBe(200);
        // Verificar que el mensaje sea: "User found!"
        expect(responseBody.user).toMatchObject({
            "name": "apiTest",
            "email": "api.cosumoApi@gmail.com",
            "title": "Mr.",
            "birth_day": "8",
            "birth_month": "2",
            "birth_year": "1980",
            "first_name": "willy",
            "last_name": "arriola",
            "company": "utu",
            "address1": "rivera sin numero",
            "address2": "",
            "country": "Singapore",
            "state": "singapore",
            "city": "singapore",
            "zipcode": "12456"
        });
        MensajesConsola.mensajeFin('CU - API 14: GET user account detail by email');
    });

    test('API 12: DELETE METHOD To Delete User Account', {tag:'@api12'}, async ({ request }) => {
        MensajesConsola.mensajeInicio('CU - API 12: DELETE METHOD To Delete User Account');
        // Definir la URL de la API
        const apiUrl = userHelper.getUrlBase() + '/deleteAccount';
        // Realizar la petición DELETE a la API
        const response = await request.delete(apiUrl, {
            form: {
                email: userHelper.registrarUsuarioDto()[3].email,
                password: userHelper.registrarUsuarioDto()[3].password
            }
        }
        );
        // Verificar que la respuesta sea 200 OK
        expect(response.status()).toBe(200);
        // Verificar que la respuesta sea en formato JSON
        const responseBody = await response.json();
        // Obtengo el cuerpo de la respuesta
        expect(responseBody).toBeDefined();
        // Verificar que codigo de respuesta se 200
        expect(responseBody.responseCode).toBe(200);
        // Verificar que el mensaje sea: "Account deleted!"
        expect(responseBody.message).toBe('Account deleted!');
        MensajesConsola.mensajeFin('CU - API 12: DELETE METHOD To Delete User Account');
    });

});