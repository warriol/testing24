import { title } from "process";

export class UserHelper {

    private correo = 'warriol.game@gmail.com';
    private password = 'test12345678';
    private user = 'testing012024';
    private fName = "wilson";
    private lName = "arriola";
    private review = "This is a review for the product. It is a good product. I recommend it.";

    private registrarUsuario = [{
        name: 'testing0120245',
        email: 'prueba.warriol@gmail.com',
        title: 'Mr.',
        password: 'test12345678',
        day: '8',
        month: '2',
        year: '1980',
        newsletter: true,
        offers: true,
        fName: 'willy',
        lName: 'arriola',
        company: 'utu',
        address: 'rivera sin numero',
        address2: '',
        country: 'Singapore',
        state: 'singapore',
        city: 'singapore',
        zip: '12456',
        mobile: '123456789',
    }];

    public registrarUsuarioDto() {
        return this.registrarUsuario;
    }

    async getCorreo() {
        return this.correo;
    }

    async getPassword() {
        return this.password;
    }

    async getUser() {
        return this.user;
    }

    async getFName() {
        return this.fName;
    }

    async getLName() {
        return this.lName;
    }

    async getReview() {
        return this.review;
    }

}
