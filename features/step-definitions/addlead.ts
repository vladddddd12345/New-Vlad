import {Given,When, Then} from "@wdio/cucumber-framework";

  Given(/^I'm on thee page (.+)$/, async (url:string) => {
      await browser.url(url)
      await browser.deleteCookies()
      await browser.maximizeWindow()

      // await browser.pause (2000)
  });
  When(/^I'm input email (.+)$/, async (email1:string) => {
      const emails = $('[type=email]')
      await (await emails).setValue(email1)
      console.log(email1)
      // await browser.pause (2000)
  });
  When(/^I'm input password (.+)$/, async (password1:string) => {
    const passwords = $('[type=password]')
    await (await passwords).setValue(password1)
    console.log(password1)
    // await browser.pause (2000)
  });
  When(/^Click login button$/, async () => {
    const login = $('[type=submit]')
    await (await login).click()
    console.log(login)
    await browser.pause (4000)
  });
  When(/^I click Leasing page$/, async () => {
    const leasing = $('.ant-layout-sider-children #/prospects$Menu')
    await (await leasing).click()
    console.log(leasing)
    await browser.pause (3000)
  });
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
  Then(/^I will see Leads modal$/, async () => {
    const leds_modal = $('.ant-modal-content')
    await (await leds_modal).click()
    console.log(leds_modal)
    await browser.pause (2000)
  })
