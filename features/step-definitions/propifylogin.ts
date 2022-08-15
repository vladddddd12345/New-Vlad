    import {Given,Then,When} from "@wdio/cucumber-framework";
    import PropifyPage from "../pageobjects/propify.page";

    Given(/^I am on home page(.+)$/, async (homepage:string) => {
        await browser.url(homepage)
        await browser.maximizeWindow
    });

    When(/^I input email (.+) password (.+)$/, async (email:string, password:string) => {  //async function - can be used
       // const email_input = $('[name=email]') - 2 first lines that is standart flow
        //await (await email_input).setValue(email)
        //const password_input = $('[name=password]')
        //await (await password_input).setValue(password)
        //await browser.pause(3000)
        //await PropifyPage.login(email, password, search) - if fields in 1 class
        await PropifyPage.email_field(email)
        await PropifyPage.password_field(password)
        //await (PropifyPage.password).setValue(password) - if without class with just get
    });

    When(/^I click on submit button$/, async () => {
        //const submit = $('[type=submit]') - 2 first lines that is standart flow
        //await (await submit).click()
        //await browser.pause(9000)
        //await (PropifyPage.login).click() - if without class with just get
        await PropifyPage.login_button()
    });

    When(/^I input search (.+)$/, async  (search:string) => {
       // const search_propiff = $('[type=text]') - 2 first lines that is standart flow
        //await (await search_propiff).setValue(searchpropify)
       // await (PropifyPage.searching).setValue(search) - if without class with just get
        await PropifyPage.searching_field(search)
        await browser.pause(3000)
    });
    When(/^I click erase icon$/, async () => {
        //const erase_icon = $('.ant-input-suffix') - 2 first lines that is standart flow
        //await (await erase_icon).click()
        //await (PropifyPage.erase).click() - if without class with just get
        await PropifyPage.erase_click()
        await browser.pause(3000)

    });
    When(/^I click Dashboard in the side menu$/, async () => {
        const dashboard = $('.ant-menu-submenu-title')
        await (await dashboard).click()

    });
    When(/^I click Collections page$/, async () => {
            const collections = $('a[href*="/dashboard/collections"]')
            await (await collections).click()

    });
    Then(/^I should see header with text (.+)$/, async (header) => {
        const header_funct = await $('.ant-pro-grid-content')
        expect(await header_funct.getText()).toEqual(header)
        //browser.getUrl()
        await browser.pause (3000)

    });
    Then(/^I should see url (.+)$/, async (url:string) => {
        //await browser.url();
        expect(await browser.getUrl()).toEqual(url)
        await browser.pause (3000)
    })

