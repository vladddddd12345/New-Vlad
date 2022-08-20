    import {Given,Then,When} from "@wdio/cucumber-framework";
    import PropifyPage from "../pageobjects/propify.page";
    // import LoginPage from "../pageobjects/login.page";
    const pages = {
        login1: PropifyPage,
        collections:PropifyPage
    }
    Given(/^I am on (\w+) page$/, async (page) => {
        await pages[page].open()
        //await browser.url(homepage)
        await browser.maximizeWindow()
    });

    When(/^I input email (.+) password (.+)$/, async (email, password) => {  //async function - can be used
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

    When(/^I input search (.+)$/, async  (search) => {
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
        // const dashboard = $('.ant-menu-submenu-title')
        // await (await dashboard).click()
        await PropifyPage.dash_click()

    });
    When(/^I click Collections page$/, async () => {
            // const collections = $('a[href*="/dashboard/collections"]')
            // await (await collections).click()
        await PropifyPage.collections_click()

    });
    Then(/^I should see header with text (.+)$/, async (header) => {
        // const header_funct = await $('.ant-pro-grid-content')
        // expect(await header_funct.getText()).toEqual(header)
        // //browser.getUrl()
        await expect(PropifyPage.header_check).toHaveTextContaining(header)
        console.log(header)
        await browser.pause (3000)

    });
    Then(/^I should see (\w+) url$/, async (url) => {
        //await browser.url();
        // expect(await browser.getUrl()).toEqual(url)
        //browser.back()
        //browser.createWindow('tab')
        //await browser.takeScreenshot()
        //await browser.generateTestReport('ola')
        await pages[url].open1()
        console.log(url)
        await browser.pause (3000)
    })

