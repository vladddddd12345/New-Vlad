import Page from './page';
class PropifyPage extends Page {
    private get email() {
        return $('[name=email]');
    }

    private get password() {
        return $('[name=password]');
    }

    private get login() {
        return $('[type=submit]');

    }

    private get  searching() {
        return $('[type=text]');

    }

    private get erase() {             //public get
        return $('.ant-input-suffix')
    }

    async email_field (email:string) {     //make as function
        await (this.email).setValue(email)
    }
    async password_field (password:string) {
        await (this.password).setValue(password)
    }
    async login_button () {
          await (await this.login).click()
}
    async searching_field (search:string) {
        await (this.searching).setValue(search)
    }
    async erase_click () {
        await (this.erase).click()
    }

    public open () {
          return super.open('login1')
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