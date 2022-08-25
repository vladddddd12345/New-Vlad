import Maint from './maintmain';

class LoginMaint extends Maint {

    public get forgotpass() {
        return $('a[href*="/user/password-reset"]')
    }

    public get emailnew_input() {
        return $('[name=emailOrPhone]')
    }

    public get sys_mess() {
        return $('#emailOrPhone-helper-text')
    }

    public get for_btn() {
        return $('[type=button]')
    }

    public get email_input() {
        return $('[name=username]')
    }

    public get password_input() {
        return $('[name=password]')
    }

    public get s_btn() {
        return $('[type=submit]')
    }

    public get dashtitle() {
        return $('h6=Dashboard')
    }


    public async forgotpass_funct() {
        await this.forgotpass.click()
    }

    public async login(emailnew: string, passwordnew: string) {
        await this.email_input.setValue(emailnew = "thursdaycheck@gmail.com")
        await this.password_input.setValue(passwordnew = "Aaaaaaaa12")
        await this.s_btn.click()
    }

    public async justlogin(email: string) {
        await this.emailnew_input.setValue(email = "vlad")
    }

    public async forgotbtn() {
        await this.for_btn.click()
    }

    public async sysmess_function(text: string) {
        expect(await this.sys_mess.getText()).toEqual(text = "Invalid Email/Phone")
    }

    public async dashtitle_function(texttitle: string) {
        expect(await this.dashtitle.getText()).toEqual(texttitle = "Dashboard")
    }

    public open() {
        return super.opennew('tenantpage')
    }

}
export default new LoginMaint ();