import {Given, When, Then} from "@wdio/cucumber-framework";

Given(/^I'm on the page (.+)$/, async (maint:string) => {
        await browser.url(maint)
        await browser.maximizeWindow()
    });

    When(/^I press on the button Forgot your password$/, async () => {
        const forgot = $('a[href*="/user/password-reset"]')
        await (await forgot).click()
        await browser.pause(3000)
    });

    When(/^I input email (.+)$/, async (email:string) => {
    const email_input = $('[name=emailOrPhone]')
    await (await email_input).setValue(email)
    await browser.pause(3000)
    });

    When(/^I press the button Resend password$/, async () => {
    const reset = $('[type=button]')
    await (await reset).click()
    await browser.pause(3000)
    });

    Then(/^I will see system message (.+)$/, async (texts) => {
        const errormes =$('#emailOrPhone-helper-text')
        expect(await errormes.getText()).toEqual(texts)
        await browser.pause(3000)
    });

    Then(/^I will see page (.+)$/, async (newurl:string) => {
        expect(await browser.getUrl()).toEqual(newurl)
        await browser.pause(3000)
    })