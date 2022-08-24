import AdminPage from "./adminmain";
class PropifyPage extends AdminPage {
    public get email() {
        return $('input[name=email]')
    };

    public get password() {
        return $('[name=password]')
    };

    public get login() {
        return $('button[type=submit]')

    };

    async email_field(email1: string) {     //make as function
        await this.email.setValue(email1)
    }

    async password_field(password1: string) {
        await this.password.setValue(password1)
    }

    async login_button() {
        await this.login.click()
    }


    public open() {
        return super.admin('page')

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
}
export default new PropifyPage();