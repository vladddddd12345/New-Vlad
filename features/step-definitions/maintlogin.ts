    import {Given, Then, When} from "@wdio/cucumber-framework";
    import LoginMaint from "..pageobjects/login.page.maint";
    import LoginPageMaint from "../pageobjects/login.page.maint";
    Given(/^I'm on the page (.+)$/, async (maint) => {
        await browser.url(maint)
        await browser.maximizeWindow()
    });

    When(/^I input (.+) and (.+)$/, async (email:string,password:string) => {
        await LoginPageMaint.login(email, password)
        // const email_input =$('[name=username]')
        // await (await email_input).setValue(email)
        // const password_input =$('#password')
        // await (await password_input).setValue(password)
        await browser.pause (3000)
    });
    When(/^I press the submit button$/, async () => {
        const s_btn =$('[type=submit]')
        await (await s_btn).click()
        await browser.pause (3000)
    });

    Then(/^I will see Dashboard title (.+)$/, async (title) => {
        const dashboard =$('h6=Dashboard')
        expect(await dashboard.getText()).toEqual(title)

    });

    Then(/^I will see the page (.+)$/, async (url:string) => {
        expect(await browser.getUrl()).toEqual(url)
        await browser.pause (3000)

    })