import {Given, When, Then} from "@wdio/cucumber-framework";
import NewCheck from "../pageobjects/elementsretest";
const pages = {
    link: NewCheck
}
  Given(/^I'm on (\w+)$/, async (page) => {
     // await browser.url(page)
     // await browser.maximizeWindow()
      await pages[page].opennew()
   });
  When(/^I input email(.+)$/, async (email) => {
      await NewCheck.email_function(email)
      // const email_input = $('[name=username]')
      // await (await email_input).setValue(email)
      console.log(email)
      await browser.pause(2000)
  });
  When(/^I input incorrect password(.+)$/, async (password) => {
      await NewCheck.password_function(password)
      // const password_input = $('[name=password]')
      // await (await password_input).setValue(password)
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
      // const click_sub = $('[type=submit]')
      // await (await click_sub).click()
      await NewCheck.submit_function()
      await browser.pause(2000)
  });

  Then(/^I will see systemmm message error(.+)$/, async (text) => {
      // const modal = $('#LoginInvalidCredentialsError')
      // await (await modal).isDisplayed()
      // console.log(modal)
      // const text_mess = $('.MuiAlert-message')
      // expect (await text_mess.getText()).toHaveTextContaining(text)
      await (NewCheck.error_modal).isDisplayed
      await expect(NewCheck.error_text).toHaveTextContaining(text)
      console.log(text)


    await browser.pause(2000)
  });
  Then(/^I'm on(\w+)$/, async () => {
      // expect( await browser.getUrl()).toEqual(mainpage)
      // console.log(mainpage)
      //await browser.generateTestReport('ola')
      //browser.createWindow('tab')
      await pages[page].opennew()
      await browser.pause(3000)
  })