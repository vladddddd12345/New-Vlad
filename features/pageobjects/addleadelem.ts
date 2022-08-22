import Page from "./page";
class Leads extends Page {
    public get email() {
        return $('[type=email]')
    };

    public async email_func (email: string) {
        await this.email.setValue(email)
    }
}
export default new Leads();