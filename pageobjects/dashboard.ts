class Dashboard {
    public get title () {return $('.ant-page-header-heading-left=Venture Dashboard')}
    async title_funct (title:string) {
        expect (await this.title.getText()).toEqual(title ="Venture Dashboard")
    }
}
export default new Dashboard();