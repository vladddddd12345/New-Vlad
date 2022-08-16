/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`https://auth-client-stage.dev.propify.com/login?returnTo=L2Rhc2hib2FyZC9jb2xsZWN0aW9ucw%3D%3D&callbackUrl=https%3A%2F%2Fadmin-client-stage.dev.propify.com%2Fauth%2Fcallback`)
    }

}
