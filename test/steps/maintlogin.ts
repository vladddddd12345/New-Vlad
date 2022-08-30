    import {Given, Then, When} from "@wdio/cucumber-framework";
    import LoginPageMaint from "../../src/pages/login.page.maint";
    const pages = {
        tenantpage:LoginPageMaint
    }

    Given(/^I'm on the newpage (\w+)$/, async (tenantpage:string) => {
        // await browser.url(maint)
        await pages[tenantpage].open()
        await browser.maximizeWindow()
        await browser.pause(2000)
    });

    When(/^I press on the button Forgot your password$/, async () => {
        // const forgot = $('a[href*="/user/password-reset"]')
        // await (await forgot).click()
        await LoginPageMaint.forgotpass_funct()
        await browser.pause(2000)
    });

    When(/^I inputting (.+)$/, async (email) => {
        // const email_input = $('[name=emailOrPhone]')
        // await (await email_input).setValue(email)
        await LoginPageMaint.justlogin(email)
        await browser.pause(2000)
    });

    When(/^I press the button Resend password$/, async () => {
        // const reset = $('[type=button]')
        // await (await reset).click()
        await LoginPageMaint.forgotbtn()
        await browser.pause(2000)
    });

    Then(/^I will see system message (.+)$/, async (textstitle) => {
        // const errormes =$('#emailOrPhone-helper-text')
        // expect(await errormes.getText()).toEqual(texts)
        await LoginPageMaint.sysmess_function(textstitle)
        await browser.pause(2000)
        // await browser.reloadSession()
    });

    // Then(/^I will see page newurl$/, async (newurl:string) => {
    //     expect(await browser.getUrl()).toEqual(newurl)
    //     await browser.pause(3000)
    //     await browser.reloadSession()
    // });

    // Given(/^I'm on the newpage (\w+)$/, async (maintpage:string) => {
    //     // await browser.url(maint)
    //     await pages[maintpage].open()
    //     await browser.maximizeWindow()
    // });

    When(/^I input (.+ )and (.+) and press the submit button$/, async (emailnew,passwordnew) => {
        await LoginPageMaint.login(emailnew,passwordnew)
        // const email_input =$('[name=username]')
        // await (await email_input).setValue(email)
        // const password_input =$('#password')
        // await (await password_input).setValue(password)
        await browser.pause (3000)
    });
    // When(/^I press the submit button$/, async () => {
    //     const s_btn =$('[type=submit]')
    //     await (await s_btn).click()
    //     await browser.pause (3000)
    // });

    Then(/^I will see Dashboard title (.+)$/, async (title) => {
        // const dashboard =$('h6=Dashboard')
        // expect(await dashboard.getText()).toEqual(title)
        await LoginPageMaint.dashtitle_function(title)

    });

    // Then(/^I will see the page (.+)$/, async (url:string) => {
    //     expect(await browser.getUrl()).toEqual(url)
    //     await browser.pause (3000)
    //
    // })