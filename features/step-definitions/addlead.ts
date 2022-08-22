import {Given,When,Then} from "@wdio/cucumber-framework";
import Leads from "../pageobjects/addleadelem";

  Given(/^I'm on thee page (.+)$/, async (url:string) => {
    await browser.url(url)
    await browser.maximizeWindow()
    // await browser.deleteCookies()
    // const cookies = await browser.getCookies()
      // await browser.pause (2000)

  });
  When(/^I'm input email (.+)$/, async (email1) => {
      // const emails = $('[type=email]')
      // await (await emails).setValue(email1)
      await Leads.email_funct(email1)
      console.log(email1)
      // await browser.pause (2000)
  });
  When(/^I'm input password (.+)$/, async (password1) => {
    // const passwords = $('[type=password]')
    // await (await passwords).setValue(password1)
      await Leads.password_funct(password1)
      console.log(password1)
    // await browser.pause (2000)
  });
  When(/^Click login button$/, async () => {
    // const login = $('[type=submit]')
    // await (await login).click()
    //   await Leads.Login_btn.click()
      await Leads.login_funct()
      await browser.pause (4000)
  });
  // When(/^I click Leasing page$/, async () => {
  //   const leasing = $('/html/body/div/div/section/aside/div/div[2]/ul/li[8]/div/span/span[2]')
  //   await (await leasing).click()
  //   console.log(leasing)
  //   await browser.pause (3000)
  // });
  When(/^I click View Leads$/, async () => {
    const view_leads = $('a[href*="/prospects/leads"]')
    await (await view_leads).click()
    console.log(view_leads)
    await browser.pause (2000)
  });
  When(/^I click Add Lead button$/, async () => {
    const add_leadsbtn = $('.ant-btn-default')
    await (await add_leadsbtn).click()
    console.log(add_leadsbtn)
    await browser.pause (2000)
  });
  When(/^I fill First name (.+)$/, async (firstname:string) => {
    const firstname_funct = $('[name=firstName]')
    await (await firstname_funct).setValue(firstname)
    console.log(firstname)
  });
  When(/^I fill Last name (.+)$/, async (lastname:string) => {
    const lastname_funct = $('[name=lastName]')
    await (await lastname_funct).setValue(lastname)
    console.log(lastname)
});
   When(/^I fill emailfield (.+)$/, async (emailfield:string) => {
       const email_funct = $('[name=email]')
       await (await email_funct).setValue(emailfield)
       console.log(emailfield)
       await browser.pause (2000)
   });
   When(/^I fill phone (.+)$/, async (phonefield:bigint) => {
      const phone_funct = $('[name=phone]')
      await (await phone_funct).click()
       await (await phone_funct).addValue(phonefield)
      console.log(phonefield)
  });
   When(/^I input unit (.+)$/, async (units:string) => {
       const unit_funct = $('#rc_select_1')
       await (await unit_funct).setValue(units)
       console.log(units)
       await browser.pause (2000)
   });
   When(/^I select unit$/, async () => {
     const select_funct = $('.ant-select-item-option-content=Madison Square Garden, 2 New York NY')
     await (await select_funct).click()
     console.log(select_funct)
       await browser.pause (2000)
   });
   When(/^I click button save$/, async () => {
      const save_funct = $('.ant-btn-primary=Save')
      await (await save_funct).click()
      console.log(save_funct)
       await browser.pause (3000)
   });
  Then(/^I will see modal with systemmessage (.+)$/, async (message:string) => {
     const existing =$('.ant-message-notice-content')
      await (await existing).isDisplayed()
      console.log(existing)
      const message_funct = $('.ant-message-success=Lead created successfully')
      //await expect(await message_funct.getText()).toEqual(message)
      await expect (await message_funct).toHaveText(message)
      console.log(message)
      await browser.pause (2000)
  })
  // Then(/^I will see Leads modal$/, async () => {
  //   const leds_modal = $('.ant-modal-content')
  //   await (await leds_modal).click()
  //   console.log(leds_modal)
  //   await browser.pause (2000)
  // });
  // Then(/^I will see text (.+)$/, async (text:string) => {
  //   const text_modal = $('.ant-modal-title')
  //   await expect (await text_modal.getText()).toEqual(text)
  //   //await expect (await text_modal).toHaveText(text)
  //   //await expect (await text_modal).toHaveTextContaining(text)
  //   console.log(text)
  //   await browser.pause(2000)
  // })
