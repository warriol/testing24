import { test, expect } from '@playwright/test';
import { UserHelper } from '../../../helpers/utils/userHelper';
import { RegistrarUsuario,cargarDatos } from '../../../helpers/utils/registrarUsuario';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import { MensajesConsola } from '../../../helpers/utils/mensajesConsola';


test.describe.serial('Test relisados en conjunto', { tag: ['@Comunes', '@todos'] }, () => {
  const userHelper = new UserHelper();
  const path = require('path');

  // Configurar el bloqueador de anuncios
  test.beforeEach(async ({ page }) => {
      // Configura el bloqueador de anuncios antes de la navegación
      const blocker = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
      await blocker.enableBlockingInPage(page);
  });

  test('Test Case 1', { tag: '@cu01' }, async ({ page }) => {
    // 1. Inicio del caso de uso número 4
    MensajesConsola.mensajeInicio('1');
    MensajesConsola.mensajeTitulo('Registrar usuario');
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto('https://automationexercise.com/');
    // 3. Verify that home page is visible successfully
    await expect(page.locator('#header')).toContainText('Home');
    // 4. Click on 'Signup / Login' button
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    // 5. Verifique '¡Registro de nuevo usuario!' es visible
    // al paso
    // 13. Haga clic en 'Botón Crear cuenta'
    await RegistrarUsuario(page, userHelper, 1); 
    // 14. Verifique que '¡CUENTA CREADA!' es visible
    await expect(page.locator('b')).toContainText('Account Created!');
    // 15. Haga clic en el botón 'Continuar'
    await page.getByRole('link', { name: 'Continue' }).click();
    // 16. Verifique que "Iniciar sesión como nombre de usuario" esté visible
    await expect(page.locator('#header')).toContainText('Logged in as '+ userHelper.registrarUsuarioDto()[1].name);
    // 17. Haga clic en el botón 'Eliminar cuenta'
    await page.getByRole('link', { name: 'Delete Account' }).click();
    //18. Verifique que '¡CUENTA ELIMINADA!' es visible y haga clic en el botón 'Continuar'
    await expect(page.locator('b')).toContainText('Account Deleted!');
    await page.getByRole('link', { name: 'Continue' }).click();
    MensajesConsola.mensajeFin('1');  
  });

  test('Test Case 2', {tag: '@cu02'}, async ({ page }) => {
    await cargarDatos(page, userHelper, 1);//Creo el usuario que se usa
    // 1. Inicio del caso de uso número 4
    MensajesConsola.mensajeInicio('2');
    MensajesConsola.mensajeTitulo('Usuario de inicio de sesión con correo electrónico y contraseña correctos');
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto('https://automationexercise.com/');
    // 3. Verify that home page is visible successfully
    await expect(page.locator('#header')).toContainText('Home');
    // 4. Click on 'Signup / Login' button
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    // 5. Verifique que 'Iniciar sesión en su cuenta' esté visible
    await expect(page.locator('#form')).toContainText('Login to your account');
    // 6. Ingrese la dirección de correo electrónico y la contraseña correctas.
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(userHelper.registrarUsuarioDto()[1].email);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(userHelper.registrarUsuarioDto()[1].password);
    // 7. Haga clic en el botón 'iniciar sesión'
    await page.getByRole('button', { name: 'Login' }).click();
    // 8. Verifique que "Iniciar sesión como nombre de usuario" esté visible
    await expect(page.locator('#header')).toContainText('Logged in as '+ userHelper.registrarUsuarioDto()[1].name);
    // 9. Haga clic en el botón 'Eliminar cuenta'
    await page.getByRole('link', { name: 'Delete Account' }).click();
    // 10. Verifique que '¡CUENTA ELIMINADA!' es visible
    await expect(page.locator('b')).toContainText('Account Deleted!');
    MensajesConsola.mensajeFin('2');  
  });
});