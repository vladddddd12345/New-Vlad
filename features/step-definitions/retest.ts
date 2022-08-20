import {Given, When, Then} from "@wdio/cucumber-framework";

  Given(/^I'm on login page(.+)$/, async (page:string) => {
     await browser.url(page)
     await browser.maximizeWindow()
   });
  When(/^I input email(.+)$/, async (email:string) => {
      const email_input = $('[name=username]')
      await (await email_input).setValue(email)
      console.log(email)
      await browser.pause(2000)
  });
  When(/^I input incorrect password(.+)$/, async (password:string) => {
      const password_input = $('[name=password]')
      await (await password_input).setValue(password)
      console.log(password)
      await browser.pause(2000)
  });
  // When(/^I clear email field$/, async ()=> {
  //   const clear_email = $('[name=username]')
  //   await (await clear_email).click()
  //     await browser.keys (['Command','a'])
  //     await browser.keys ('Delete')
  //    console.log(clear_email)
  //    await browser.pause(2000)
  When(/^I click on submit$/, async () => {
      const click_sub = $('[type=submit]')
      await (await click_sub).click()
      await browser.pause(2000)
  });

  Then(/^I will see systemmm message error(.+)$/, async (text:string) => {
      const modal = $('#LoginInvalidCredentialsError')
      await (await modal).isDisplayed()
      console.log(modal)
      const text_mess = $('.MuiAlert-message')
      expect (await text_mess.getText()).toHaveTextContaining(text)
      console.log(text)

    await browser.pause(2000)
  });
  Then(/^I can see mainpage(.+)$/, async (mainpage :string) => {
      expect( await browser.getUrl()).toEqual(mainpage)
      console.log(mainpage)
      await browser.pause(3000)
  })

