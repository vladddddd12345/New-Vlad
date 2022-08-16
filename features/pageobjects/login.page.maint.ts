import Maint from './maintmain';
class LoginMaint extends Maint {
    private get email_input() {
        return $('[name=username]')
    }

    private get password_input() {
        return $('#password');
    }

    private get s_btn() {
        return $('[type=submit]');
    }

    public async login(email: string, password: string) {
        await this.email_input.setValue(email);
        await this.password_input.setValue(password);
        await this.s_btn.click()
    }
}
export default new LoginMaint ();