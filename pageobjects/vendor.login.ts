import MaintMain from "./vendormain";
class Vendor extends MaintMain {
    public get maintemail () {
        return $('[name=email]')
    };
    public get maintpassword () {
        return $('[name=password]')
    };
    public get loginmaint () {
        return $('[type=submit]')
    };
    async maintemail_funct (vemail:string) {
        await this.maintemail.setValue(vemail)
    };
    async maintpassword_funct (vpassword:string) {
        await this.maintpassword.setValue(vpassword)
    };
    async maintlogin_funct () {
        await this.loginmaint.click()
    };

    public open() {
        return super.maintopen('vendor');
    }
}
export default new Vendor();