import {Given,When,Then} from "@wdio/cucumber-framework";
import PropifyPage from "../../src/pages/propify.page";
import Leads from "../../src/pages/addleadelem";
import Dashboard from "../../src/pages/dashboard";
const pages = {
    page:PropifyPage
}

  Given(/I'm on thee (.+)/, async (page) => {
    // await browser.url(url)
      await pages[page].open()
    // await PropifyPage.open(page)
    // await PropifyPage.open()
    await browser.maximizeWindow()
    // await browser.deleteCookies()
    // const cookies = await browser.getCookies()
      // await browser.pause (2000)

  });
  When(/I login with valid (.+) and (.+) and click login button/, async (email,password) => {
    // const emails = $('[type=email]')
    // await (await emails).setValue(email1)
      await PropifyPage.login_function(email,password)
    // await browser.pause (2000)
  });
  Then(/I will see (.+) title/, async (title) => {
      // const emails = $('[type=email]')
      // await (await emails).setValue(email1)
      await Dashboard.title_funct(title)
  });

  Then(/I will see (.+) url/, async (page) => {
    // const existing =$('.ant-message-notice-content')
    //  await (await existing).isDisplayed()
    //  console.log(existing)
    //  const message_funct = $('.ant-message-success=Lead created successfully')
    //  //await expect(await message_funct.getText()).toEqual(message)
    //await expect (await message_funct.getText()).toHaveText(message)
    //await expect (await message_funct).toHaveTextContaining(message)
    await Dashboard.dashboard_url(page)
    await browser.pause (1000)
    await browser.reloadSession()
    //await (await passwordfunct).saveScreenshot('/Users/romantikkk/Downloads/Something/screen1.png')
  });

  // When(/^I'm input email (.+)$/, async (email1) => {
  //     // const emails = $('[type=email]')
  //     // await (await emails).setValue(email1)
  //     await PropifyPage.email_field(email1)
  //     console.log(email1)
  //     // await browser.pause (2000)
  // });
  // When(/^I'm input password (.+)$/, async (password1) => {
  //   // const passwords = $('[type=password]')
  //   // await (await passwords).setValue(password1)
  //     await PropifyPage.password_field(password1)
  //     console.log(password1)
  //   // await browser.pause (2000)
  // });
  // When(/^Click login button$/, async () => {
  //   // const login = $('[type=submit]')
  //   // await (await login).click()
  //   //   await Leads.Login_btn.click()
  //     await PropifyPage.login_button()
  //     await browser.pause (2000)
  // });
  // When(/^I click Leasing page$/, async () => {
  //   const leasing = $('/html/body/div/div/section/aside/div/div[2]/ul/li[8]/div/span/span[2]')
  //   await (await leasing).click()
  //   console.log(leasing)
  //   await browser.pause (3000)
  // });
  When(/I navigate to Leads page/, async () => {
    // const clicklease = $('.propifyLayout-menu-item=Leasing')
    //  await (await clicklease).click()
    // const view_leads = $('a[href*="/prospects/leads"]')
    // await (await view_leads).click()
    await Leads.viewleadspage_funct()
    await browser.pause (2000)

   });
   When(/I add a (.+) and press Save button/, async (lead) => {
      // const save_funct = $('.ant-btn-primary=Save')
      // await (await save_funct).click()
      //  await Leads.addlead_funct()
      //  await Leads.firstname_funct(firstname)
      //  await Leads.lastname_funct(lastname)
      //  await Leads.emailmodal_funct(emailfield)
      //  await Leads.phone_funct(phonefield)
      //  await Leads.unitsinput_funct(units)
      //  await Leads.unitsselect_funct()
      //  await Leads.savebtn_funct()
       await Leads.addlead(lead)
       await browser.pause (2000)
   });
  Then(/I will see modal with systemmessage (.+)/, async (message) => {
     // const existing =$('.ant-message-notice-content')
     //  await (await existing).isDisplayed()
     //  console.log(existing)
     //  const message_funct = $('.ant-message-success=Lead created successfully')
     //  //await expect(await message_funct.getText()).toEqual(message)
     //await expect (await message_funct.getText()).toHaveText(message)
      //await expect (await message_funct).toHaveTextContaining(message)
      await Leads.systemmessage_funct(message)
      //await (await passwordfunct).saveScreenshot('/Users/romantikkk/Downloads/Something/screen1.png')
      await browser.saveScreenshot('/Users/romantikkk/Downloads/Something/screen2.png')
      await browser.pause(2000)
  });
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
  Then(/I will see (.+) URL/, async (page) => {
      // const existing =$('.ant-message-notice-content')
      //  await (await existing).isDisplayed()
      //  console.log(existing)
      //  const message_funct = $('.ant-message-success=Lead created successfully')
      //  //await expect(await message_funct.getText()).toEqual(message)
      //await expect (await message_funct.getText()).toHaveText(message)
      //await expect (await message_funct).toHaveTextContaining(message)
      await Leads.leads_url(page)
      //await (await passwordfunct).saveScreenshot('/Users/romantikkk/Downloads/Something/screen1.png')
      await browser.saveScreenshot('/Users/romantikkk/Downloads/Something/screen2.png')
      await browser.pause(2000)
  })
