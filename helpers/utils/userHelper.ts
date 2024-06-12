import { title } from "process";

export class UserHelper {

    private correo = 'warriol.game@gmail.com';
    private password = 'test12345678';
    private user = 'testing012024';
    private fName = "wilson";
    private lName = "arriola";
    private review = "This is a review for the product. It is a good product. I recommend it.";
    private urlBase = "https://automationexercise.com/api";
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
    },
    {
        name: 'testingDV',
        email: 'prueba.damivera47@gmail.com',
        title: 'Mr.',
        password: 'test12345678',
        day: '8',
        month: '2',
        year: '1980',
        newsletter: true,
        offers: true,
        fName: 'Damian',
        lName: 'Vera',
        company: 'utu',
        address: 'rivera sin numero',
        address2: '',
        country: 'Singapore',
        state: 'singapore',
        city: 'singapore',
        zip: '12456',
        mobile: '123456789',
    },
    {
        name: 'testingLeo',
        email: 'prueba.elleo@gmail.com',
        title: 'Mr.',
        password: 'test12345678',
        day: '8',
        month: '2',
        year: '1980',
        newsletter: true,
        offers: true,
        fName: 'Leandoro',
        lName: 'Rodriguez',
        company: 'utu',
        address: 'rivera sin numero',
        address2: '',
        country: 'Singapore',
        state: 'singapore',
        city: 'singapore',
        zip: '12456',
        mobile: '123456789',
    },
    {
        name: 'apiTest',
        email: 'api.cosumoApi@gmail.com',
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

    public getJsonUsuarioDto(id) {
        let json = {
            "name": this.registrarUsuario[id].name,
            "email": this.registrarUsuario[id].email,
            "title": this.registrarUsuario[id].title,
            "password": this.registrarUsuario[id].password,
            "birth_date": this.registrarUsuario[id].day,
            "birth_month": this.registrarUsuario[id].month,
            "birth_year": this.registrarUsuario[id].year,
            "firstname": this.registrarUsuario[id].fName,
            "lastname": this.registrarUsuario[id].lName,
            "company": this.registrarUsuario[id].company,
            "address1": this.registrarUsuario[id].address,
            "address2": this.registrarUsuario[id].address2,
            "country": this.registrarUsuario[id].country,
            "state": this.registrarUsuario[id].state,
            "city": this.registrarUsuario[id].city,
            "zipcode": this.registrarUsuario[id].zip,
            "mobile_number": this.registrarUsuario[id].mobile,
        }
        return json;
    }

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

    public getUrlBase() {
        return this.urlBase;
    }
}
