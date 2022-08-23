import {Given,When,Then} from "@wdio/cucumber-framework";
import PropifyPage from "../pageobjects/propify.page";
import Leads from "../pageobjects/addleadelem";
const pages = {
    page : PropifyPage
}

  Given(/^I'm on thee (\w+)$/, async (page) => {
    // await browser.url(url)
    await pages[page].open()
    await browser.maximizeWindow()
    // await browser.deleteCookies()
    // const cookies = await browser.getCookies()
      // await browser.pause (2000)

  });
  When(/^I'm input email (.+)$/, async (email1) => {
      // const emails = $('[type=email]')
      // await (await emails).setValue(email1)
      await PropifyPage.email_field(email1)
      console.log(email1)
      // await browser.pause (2000)
  });
  When(/^I'm input password (.+)$/, async (password1) => {
    // const passwords = $('[type=password]')
    // await (await passwords).setValue(password1)
      await PropifyPage.password_field(password1)
      console.log(password1)
    // await browser.pause (2000)
  });
  When(/^Click login button$/, async () => {
    // const login = $('[type=submit]')
    // await (await login).click()
    //   await Leads.Login_btn.click()
      await PropifyPage.login_button()
      await browser.pause (2000)
  });
  // When(/^I click Leasing page$/, async () => {
  //   const leasing = $('/html/body/div/div/section/aside/div/div[2]/ul/li[8]/div/span/span[2]')
  //   await (await leasing).click()
  //   console.log(leasing)
  //   await browser.pause (3000)
  // });
  When(/^I click View Leads$/, async () => {
    // const clicklease = $('.propifyLayout-menu-item=Leasing')
    //  await (await clicklease).click()
    // const view_leads = $('a[href*="/prospects/leads"]')
    // await (await view_leads).click()
    await Leads.viewleadspage_funct()
    await browser.pause (2000)
  });
  When(/^I click Add Lead button$/, async () => {
    // const add_leadsbtn = $('.ant-btn-default')
    // await (await add_leadsbtn).click()
    await Leads.addlead_funct()
    await browser.pause (2000)
  });
  When(/^I fill First name (.+)$/, async (firstname) => {
    // const firstname_funct = $('[name=firstName]')
    // await (await firstname_funct).setValue(firstname)
    await Leads.firstname_funct(firstname)
    console.log(firstname)
  });
  When(/^I fill Last name (.+)$/, async (lastname) => {
    // const lastname_funct = $('[name=lastName]')
    // await (await lastname_funct).setValue(lastname)
    await Leads.lastname_funct(lastname)
    console.log(lastname)
});
   When(/^I fill emailfield (.+)$/, async (emailfield) => {
       // const email_funct = $('[name=email]')
       // await (await email_funct).setValue(emailfield)
       await Leads.emailmodal_funct(emailfield)
       console.log(emailfield)
       await browser.pause (2000)
   });
   When(/^I fill phone (.+)$/, async (phonefield) => {
      // const phone_funct = $('[name=phone]')
      // await (await phone_funct).click()
      //  await (await phone_funct).addValue(phonefield)
       await Leads.phone_funct(phonefield)
      console.log(phonefield)
  });
   When(/^I input unit (.+)$/, async (units) => {
       // const unit_funct = $('#rc_select_1')
       // await (await unit_funct).setValue(units)
       await Leads.unitsinput_funct(units)
       console.log(units)
       await browser.pause (2000)
   });
   When(/^I select unit$/, async () => {
     // const select_funct = $('.ant-select-item-option-content=Madison Square Garden, 2 New York NY')
     // await (await select_funct).click()
     await Leads.unitsselect_funct()
     console.log()
       await browser.pause (2000)
   });
   When(/^I click button save$/, async () => {
      // const save_funct = $('.ant-btn-primary=Save')
      // await (await save_funct).click()
       await Leads.savebtn_funct()
       await browser.pause (3000)
   });
  Then(/^I will see modal with systemmessage (.+)$/, async (message) => {
     // const existing =$('.ant-message-notice-content')
     //  await (await existing).isDisplayed()
     //  console.log(existing)
     //  const message_funct = $('.ant-message-success=Lead created successfully')
     //  //await expect(await message_funct.getText()).toEqual(message)
     //await expect (await message_funct).toHaveText(message)
      //await expect (await message_funct).toHaveTextContaining(message)
      await Leads.systemmessage_funct(message)
      console.log(message)
      //await (await passwordfunct).saveScreenshot('/Users/romantikkk/Downloads/Something/screen1.png')
      await browser.saveScreenshot('/Users/romantikkk/Downloads/Something/screen2.png')
      await browser.pause(2000)
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
