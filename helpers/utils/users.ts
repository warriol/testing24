export class UserHelper {

    private correo = 'warriol.game@gmail.com';
    private password = 'test12345678';
    private user = 'testing012024';
    private fName = "wilson";
    private lName = "arriola";
    private review = "This is a review for the product. It is a good product. I recommend it.";

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
