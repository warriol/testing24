## Integrantes
- Leandro Rodriguez : elleo1190@gmail.com
- Damian Vera : damivera47@gmail.com
- Wilson Arriola : warriol@gmail.com

# división de casos de uso por integrantes

## comunes
```bash
# probar todos los test
npx playwright test --grep "@todos"
# probar solo las pruebas comunes
npx playwright test --grep "@comunes"
# probar solo las pruebas de Damian
npx playwright test --grep "@Damian"
# probar solo las pruebas de wilson
npx playwright test --grep "@wilson"
# probar solo las pruebas de API
npx playwright test --grep "@api"
```

- [Test Case 1: Register User](https://automationexercise.com/test_cases#collapse1) <img src="https://img.shields.io/badge/CU_COMUN-Hecho-success">
- [Test Case 2: Login User with correct email and password](https://automationexercise.com/test_cases#collapse2) <img src="https://img.shields.io/badge/CU_COMUN-Hecho-success">

## damian

- [Test Case 3: Login User with incorrect email and password](https://automationexercise.com/test_cases#collapse3)
- [Test Case 4: Logout User](https://automationexercise.com/test_cases#collapse4)
- [Test Case 5: Register User with existing email](https://automationexercise.com/test_cases#collapse5)
- [Test Case 6: Contact Us Form](https://automationexercise.com/test_cases#collapse6)
- [Test Case 7: Verify Test Cases Page](https://automationexercise.com/test_cases#collapse7)
- [Test Case 8: Verify All Products and product detail page](https://automationexercise.com/test_cases#collapse8)
- [Test Case 9: Search Product](https://automationexercise.com/test_cases#collapse9)
- [Test Case 10: Verify Subscription in home page](https://automationexercise.com/test_cases#collapse10)

## leandro

- [Test Case 11: Verify Subscription in Cart page](https://automationexercise.com/test_cases#collapse11)
- [Test Case 12: Add Products in Cart](https://automationexercise.com/test_cases#collapse12)
- [Test Case 13: Verify Product quantity in Cart](https://automationexercise.com/test_cases#collapse13)
- [Test Case 14: Place Order: Register while Checkout](https://automationexercise.com/test_cases#collapse14)
- [Test Case 15: Place Order: Register before Checkout](https://automationexercise.com/test_cases#collapse15)
- [Test Case 16: Place Order: Login before Checkout](https://automationexercise.com/test_cases#collapse16)
- [Test Case 17: Remove Products From Cart](https://automationexercise.com/test_cases#collapse17)
- [Test Case 18: View Category Products](https://automationexercise.com/test_cases#collapse18)

## wilson

- [Test Case 19: View & Cart Brand Products](https://automationexercise.com/test_cases#collapse19) <img src="https://img.shields.io/badge/CU_WILSON-Hecho-success">
- [Test Case 20: Search Products and Verify Cart After Login](https://automationexercise.com/test_cases#collapse20) <img src="https://img.shields.io/badge/CU_WILSON-Hecho-success">
- [Test Case 21: Add review on product](https://automationexercise.com/test_cases#collapse21) <img src="https://img.shields.io/badge/CU_WILSON-Hecho-success">
- [Test Case 22: Add to cart from Recommended items](https://automationexercise.com/test_cases#collapse22) <img src="https://img.shields.io/badge/CU_WILSON-Hecho-success">
- [Test Case 23: Verify address details in checkout page](https://automationexercise.com/test_cases#collapse23) <img src="https://img.shields.io/badge/CU_WILSON-Hecho-success">
- [Test Case 24: Download Invoice after purchase order](https://automationexercise.com/test_cases#collapse24) <img src="https://img.shields.io/badge/CU_WILSON-Hecho-success">
- [Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality](https://automationexercise.com/test_cases#collapse25) <img src="https://img.shields.io/badge/CU_WILSON-Hecho-success">
- [Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality](https://automationexercise.com/test_cases#collapse26) <img src="https://img.shields.io/badge/CU_WILSON-Hecho-success">

# instalacion
```bash
npx playwright install 
npm init playwright@latest
# bloquear anuncios
npm install --save @cliqz/adblocker-playwright
# personalizar mensajes en consola
npm install chalk
# Entorno de desarrollo: Visual Studio Code
# Complementos: Playwright test
npm i --save-dev @playwright/test
```

# url para casos de prueba obligatorios
https://automationexercise.com/test_cases
# url para casos de uso de API opcionales
https://automationexercise.com/api_list

# cuenta de prueba
- correo: warriol.game@gmail.com
- usuario: testing012024
- contraseña: test12345678



# escribir el primer test
npx playwright codegen http://automationexercise.com

# ejecutar test
npx playwright test
npx playwright test archivo

# link
uitestingplayground.com
automationteststore.com

# ver interaccion con el navegador
npx playwright test --headed

# debug
npx playwright test primer --debug

# en el codigo pongo pausa
await page.pause()

# se eejcuta de esta forma
```bash
$env:PWDEBUG="console"; npx playwright test primer
```

# api log
```bash
$env:PWDEBUG="pw:api"; npx playwright test primer
$env:PWDEBUG=""; npx playwright test --trace on primer
```

# huellas y rastros
```bash
npx playwright test primer primer --trace on primer
npx playwright show-report
```