class Leads {

    public get leads_page () {return $('.propifyLayout-menu-item=Leasing')};
    public get viewleads_btn () {return $('a[href*="/prospects/leads"]')};
    public get addleads_btn () {return $('.ant-btn-default')};
    public get firstnamefield () {return $('input[name=firstName]')}  //or just '[name=firstName]'};
    public get lastnamefield () {return $('[name=lastName]')};
    public get emailfield () {return $('[name=email]')};
    public get phonefield () {return $('[name=phone]')};
    public get unitsfield () {return $('input[id=rc_select_1]')};   //or just '#rc_select_1'};
    public get selectunitfield () {return $('.ant-select-item-option-content=Madison Square Garden, 2 New York NY')};
    public get savebtn () {return $('button.ant-btn-primary=Save')}; //or just '.ant-btn-primary=Save'};
    public get sysmessageexsist () {return $('.ant-message-notice-content')};
    public get sysmessagetext () {return $('.ant-message-success=Lead created successfully')};


    public async viewleadspage_funct () {
        await this.leads_page.click()
        await this.viewleads_btn.click()
        await this.addleads_btn.click()
    }

    // public async addlead_funct () {
    //     await this.addleads_btn.click()
    // }
    public async addlead (firstname:string, lastname:string, emailfield:string,phonefield:string, units:string) {
        await this.firstnamefield.setValue(firstname="Vlad")
        await this.lastnamefield.setValue(lastname="Kar")
        await this.emailfield.setValue(emailfield="vlad@gmail.com")
        await this.phonefield.click()
        await this.phonefield.addValue(phonefield="7654987654")
        await this.unitsfield.setValue(units="madison")
        await this.selectunitfield.click()
        await this.savebtn.click()
    }
    public async systemmessage_funct(message:string) {
        await this.sysmessageexsist.isDisplayed()
        expect (await this.sysmessagetext.getText()).toEqual(message="Lead created successfully")
        // expect (this.sysmessagetext.getText()).toEqual(message)
        //expect (this.sysmessagetext.getElementText(message))
    }

}
export default new Leads();

































































































