import {Given, Then, When} from "@wdio/cucumber-framework";
import * as assert from "assert";

    Given(/^I open main page(.+)$/, async (page:string) => {
       await browser.url(page)
        await browser.maximizeWindow()
        await browser.pause(2000)
    });
    When(/^I input email(.+)$/, async (email:string) => {
        const emailfunct = $('[name=username]')
        await (await emailfunct).setValue(email)
        await browser.pause(2000)
        await (await emailfunct).click()
        await browser.keys(['Command', 'a'])
        await browser.keys('Delete')
        await browser.pause(2000)

    });
    When(/^I input password(.+)$/, async (password:string) => {
        const passwordfunct = $('[name=password]')
        await (await passwordfunct).setValue(password)
        const valuep = await passwordfunct.getText()
        console.log(valuep)
        //await (await passwordfunct).saveScreenshot('/Users/romantikkk/Downloads/Something/screen1.png')
        await browser.saveScreenshot('/Users/romantikkk/Downloads/Something/screen2.png')
        await browser.pause(2000)
    })


