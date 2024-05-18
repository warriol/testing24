## Integrantes

- Leandro Rodriguez : elleo1190@gmail.com
- Damian Vera : damivera47@gmail.com
- Wilson Arriola : warriol@gmail.com

# instalacion
```bash
npx playwright install 
npm init playwright@latest
```
# personalizar mensajes en consola
```bash
npm install chalk
```

# url para automatizar casos de prueba
https://automationexercise.com/test_cases

# Entorno de desarrollo

- Visual Studio Code

## complementos
```bash
# Playwright test
npm i --save-dev @playwright/test
```

# url casos de uso obligatorios
https://automationexercise.com/api_list

# cuenta de prueba
- correo: warriol.game@gmail.com
- usuario: testing012024
- contraseña: test12345678

# división de casos de uso por integrantes

## todo
npx playwright test --grep "@Todos"

- [Test Case 1: Register User](https://automationexercise.com/test_cases#collapse1)
- [Test Case 2: Login User with correct email and password](https://automationexercise.com/test_cases#collapse2)

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

```bash
# probar solo las pruebas de wilson
npx playwright test --grep "@wilson"
```

- [Test Case 19: View & Cart Brand Products](https://automationexercise.com/test_cases#collapse19)
- [Test Case 20: Search Products and Verify Cart After Login](https://automationexercise.com/test_cases#collapse20)
- [Test Case 21: Add review on product](https://automationexercise.com/test_cases#collapse21)
- [Test Case 22: Add to cart from Recommended items](https://automationexercise.com/test_cases#collapse22)
- [Test Case 23: Verify address details in checkout page](https://automationexercise.com/test_cases#collapse23)
- [Test Case 24: Download Invoice after purchase order](https://automationexercise.com/test_cases#collapse24)
- [Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality](https://automationexercise.com/test_cases#collapse25)
- [Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality](https://automationexercise.com/test_cases#collapse26)


# escribir el primer test UC1
npx playwright codegen http://automationexercise.com

# bloquear anuncios
npm install --save @cliqz/adblocker-playwright

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