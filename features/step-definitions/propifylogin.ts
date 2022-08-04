    import {Given,When} from "@wdio/cucumber-framework";
    import PropifyPage from "../pageobjects/propify.page";

    Given(/^I am on main page \"([^\"]*)\"$/, async function  (appurl:string) {
        await browser.url(appurl)
        await browser.maximizeWindow
    });

    When(/^I input email (.+) password (.+)$/, async function (email:string, password:string) {
       // const email_input = $('[name=email]')
        //await (await email_input).setValue(email)
        //const password_input = $('[name=password]')
        //await (await password_input).setValue(password)
        //await browser.pause(3000)
        //await PropifyPage.login(email, password, search)
        await PropifyPage.email_function(email)
        await PropifyPage.password_function(password)
        //await (PropifyPage.password).setValue(password)
    });

    When(/^I click on submit button$/, async () => {
        //const submit = $('[type=submit]')
        //await (await submit).click()
        //await browser.pause(9000)
        await (PropifyPage.login).click()
    });

    When(/^I input search (.+)$/, async function (search:string) {
       // const search_propiff = $('[type=text]')
        //await (await search_propiff).setValue(searchpropify)
        await (PropifyPage.searching).setValue(search)
        await browser.pause(3000)
    });
    When(/^I click erase icon$/, async () => {
        //const erase_icon = $('.ant-input-suffix')
        //await (await erase_icon).click()
        await (PropifyPage.erase).click()
        await browser.pause(9000)
    })

