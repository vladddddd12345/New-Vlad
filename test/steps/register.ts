import {Given, Then, When} from "@wdio/cucumber-framework";
import PropifyPage from "../../src/pages/propify.page";


    Given(/^I am on practice page \"([^\"]*)\"$/, async function (appurl:string) {
        await browser.url(appurl)
        await browser.maximizeWindow()
    });

    Then(/^I validate page header \"([^\"]*)\"$/, async function (createaccount:string) {
        const header=$("//h1")
        expect (await header).toHaveText(createaccount)
    });
    When(/^I enter firstname (.+) lastname (.+)$/, async function (fname:string, lname:string) {
        const fname_input = $('[name=firstname]')
        const lname_input = $('[name=lastname]')
        await (await fname_input).setValue(fname)
        await (await lname_input).setValue(lname)

    });
    When (/^I enter random email (.+)$/, async function (email:string) {
          const email_input = $('[name=email]')
          await (await email_input).setValue(email)

    });

    When(/^I enter address1 (.+) city (.+)$/, async function (address:string, city:string) {
        const address_input = $('[name=address_1]')
        const city_input = $('[name=city]')
        await (await address_input).setValue(address)
        await (await city_input).setValue(city)
    });

    When(/^I select country (.+)$/, async function (country) {
        const country_dropdown = await $('#AccountFrm_country_id')

        await (await country_dropdown).selectByVisibleText(country)
        await browser.pause (5000)
    });

    When(/^I select region (.+)$/, async function (states:string) {
        const region_dropdown = await $('#AccountFrm_zone_id')

        await (await region_dropdown).selectByVisibleText(states)
        await browser.pause (1000)

    });

    When(/^I enter zipcode (.+)$/, async function (zipcode:string) {
        const zipcode_input = $('[name=postcode]')
        await (await zipcode_input).setValue(zipcode)

    });


    When(/^I enter login (.+) password (.+) passwordrepeat (.+)$/, async function (login:string, pass:string, pass1:string) {
        const login_input = $('[name=loginname]')
        const pass_input = $('[name=password]')
        const pass1_input = $('[name=confirm]')
        await (await login_input).setValue(login)
        await (await pass_input).setValue(pass)
        await (await pass1_input).setValue(pass1)

    });
    When(/^I click policy (.+)$/, async function (policy:string) {
        const policy_select = $('#filter_keyword')
        await (await policy_select).click()
        await browser.pause (2000)
    });

    When(/^I click on submit button$/, async () => {
        const submit_btn = $('[title=Continue]')
        await (await submit_btn).click()
        await browser.pause (9000)

    });
    Then(/^I validate page header again \"([^\"]*)\"$/, async function (youraccounthasbeencreated:string) {
        const headernew = $("//i")
        expect(await headernew).toHaveText(youraccounthasbeencreated)
        //await expect(PropifyPage.header_check).toHaveTextContaining(header)
    })