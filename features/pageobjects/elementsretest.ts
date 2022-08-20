import Maint from "./maintmain";
class NewCheck extends Maint {
    public get email_input() {
        return $('[name=username]')
    };

    public get password_input() {
        return $('[name=password]')
    };

    public get submit() {
        return $('[type=submit]')
    };
    public get error_modal() {
        return $('#LoginInvalidCredentialsError')
    };
    public get error_text() {
        return $('.MuiAlert-message')
    };

    public async email_function (email: string) {
        await this.email_input.setValue(email)
    }
    public async password_function (password: string) {
        await this.password_input.setValue(password)
    }
    public async submit_function () {
        await this.submit.click()
    }
    public open () {
        return super.opennew('link')

    }

    // public async error_function (text: string) {
    //     await this.error_modal.isDisplayed()
    //     await this.error_text.getText()
    //     await this.error_text.toHaveTextContaining(text)
    // };

}

export default new NewCheck();