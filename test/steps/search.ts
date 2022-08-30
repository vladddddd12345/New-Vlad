import {Given, When} from "@wdio/cucumber-framework";

    Given(/^I am on main page \"([^\"]*)\"$/, async function (appurl:string) {
          await browser.url(appurl)
          await browser.maximizeWindow()
    });

    When(/^I successfully input search (.+)$/, async function (search:string) {
        const search_input = $('[type=text]')
        await (await search_input).setValue(search)
        await browser.pause(3000)

    });
    When(/^I successfully click on the result$/, async  ()=> {
        const result_btn = $('.button-in-search')
        await (await result_btn).click()
        await browser.pause(3000)
    });
    When(/^I click red value$/, async  ()=> {
        const red_check = $('#option347764')
        await (await red_check).click()
        await browser.pause(3000)
    });
    When(/^I click Add chart$/, async  ()=> {
        const button_click = $('.cart')
        await (await button_click).click()
        await browser.pause(3000)
    })