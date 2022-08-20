import Page from './page';
class PropifyPage extends Page {
    public get email() {
        return $('[name=email]')
    };

    public get password() {
        return $('[name=password]')
    };

    public get login() {
        return $('[type=submit]')

    };

    public get  searching() {
        return $('[type=text]')

    };
    public get  dashboard_pageclick() {
        return $('.ant-menu-submenu-title')

    }
    public get  collections_pageclick() {
        return $('a[href*="/dashboard/collections"]')

    }
    public get header_check () {
        return $('.ant-pro-grid-content')
    };


    public get erase() {             //public get
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
    async dash_click () {     //make as function
        await (this.dashboard_pageclick).click()
    }
    async collections_click () {     //make as function
        await (this.collections_pageclick).click()
    }


    public open () {
          return super.open('login1')
    }
    public open1 () {
        return super.open1('collections')
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