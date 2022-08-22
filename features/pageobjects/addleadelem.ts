import Page from "./page";

class Leads extends Page {
    public get email() {
        return $('[type=email]')
    };

    public get password() {
        return $('[type=password]')
    };

    public get Login_btn() {
        return $('[type=submit]')
    };


    async email_funct(email1: string) {
        await this.email.setValue(email1)
    }

    async password_funct(password1: string) {
        await this.password.setValue(password1)
    }

    async login_funct() {
        await this.Login_btn.click()
    }
}
export default new Leads();




























































