class Dashboard {

    public get logo (){
        return $('.logoWithText undefined')
    };
    public get woblocks (){
        return $('.containerWithSpacing')
    };
    async logo_funct () {
        await this.logo.isDisplayed()
    };
    async woblocks_funct () {
        await this.woblocks.isDisplayed()
    }


}
export default new Dashboard();