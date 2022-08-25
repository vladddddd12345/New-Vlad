import AdminPage from "./adminmain";
class PropifyPage extends AdminPage {
    public get email() {return $('[name=email]')};
    public get password() {return $('[name=password]')};
    public get login() {return $('[type=submit]')};

    // async email_field(email1: string) {await this.email.setValue(email1)}
    //
    // async password_field(password1: string) {await this.password.setValue(password1)}
    //
    // async login_button() {await this.login.click()}
    async login_function (email:string, password:string){
        await this.email.setValue(email="vkaramushka@propify.com")
        await this.password.setValue(password="Aaaaaaaa12")
        await this.login.click()
    }

    public open(page: any) {return super.admin('page')

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