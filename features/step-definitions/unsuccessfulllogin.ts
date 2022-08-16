import {Given, When, Then} from "@wdio/cucumber-framework";

Given(/^I'm on the page (.+)$/, async (maint:string) => {
    await browser.url(maint)
    await browser.maximizeWindow()
});

When(/^I input email (.+) and input password (.+)$/, async (email:string, password:string) => {
    const email_input = $('[name=username]')
    await (await email_input).setValue(email)
    const password_input = $('[name=password]')
    await (await password_input).setValue(password)
    await browser.pause(3000)
});

Then(/^I press the login button$/, async () => {
    const submit = $('[type=submit]')
    await (await submit).click()
    await browser.pause(3000)
});

Then(/^I will see system error$/, async () => {
    const isDispl= await $('.MuiAlert-message*=This user and password combination')
    await (await isDispl).getText()
    //console.log(await isDispl.getText())
    await browser.pause(3000)
});

Then(/^I will see page (.+)$/, async (url:string) => {
    expect(await browser.getUrl()).toEqual(url)
    await browser.pause(3000)
})