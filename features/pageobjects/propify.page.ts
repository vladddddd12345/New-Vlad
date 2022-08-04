import Page from './page';
class PropifyPage extends Page {
    get email() {
        return $('[name=email]');
    }

    get password() {
        return $('[name=password]');
    }

    get login() {
        return $('[type=submit]');

    }

    get searching() {
        return $('[type=text]');

    }

    get erase() {             //public get
        return $('.ant-input-suffix')
    }

    async email_function (email:string) {     //make as function
        await (this.email).setValue(email)
    }
    async password_function (password:string) {
        await (this.password).setValue(password)
    }

    // public async login (email: string, password: string, search: string) {
    //     await this.inputemail.setValue(email);
    //     await this.inputepassword.setValue(password);
    //     await this.buttonSubmit.click();
    //     await this.searching.setValue(search);
    //     await browser.pause(6000)
    //     await this.erasing.click();
    //     await browser.pause(5000)
    // };
}
export default new PropifyPage();