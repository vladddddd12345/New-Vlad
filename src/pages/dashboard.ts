class Dashboard {
    public get title () {return $('.ant-page-header-heading-left=Venture Dashboard')}
    async title_funct (title:string) {
        expect (await this.title.getText()).toEqual(title="Venture Dashboard")
        console.log(title)
    }
    async dashboard_url(page:string) {
        expect (await browser.getUrl()).toEqual(page='https://admin-client-stage.dev.propify.com/')
        console.log(page)
    }
}
export default new Dashboard();