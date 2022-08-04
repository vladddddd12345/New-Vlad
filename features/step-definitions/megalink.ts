import {Given,When} from "@wdio/cucumber-framework";
import * as assert from "assert";

    Given(/^I am on main page \"([^\"]*)\"$/, async function (appurl:string) {
        await browser.url(appurl)
        await browser.maximizeWindow

    });

    When(/^I successfully click 3 dots button$/, async () => {
        const click = $('.wrap')
        await (await click).click()
    });

    When(/^I successfully input searching (.+)$/, async function (search:string) {
        const searching = $('#s')
        await (await searching).setValue(search)
    });

    When(/^I click on search button$/, async () => {
        const clicks = $('[type=submit]')
        await (await clicks).click()
    });
    When(/^I click switch theme$/, async () => {
        const switchtheme = $('.mnu-wrap #switch-theme')
        await (await switchtheme).click()
        await browser.pause(3000)
    });
    When(/^I click switch language$/, async () => {
        const switchlang = $('.mnu-wrap .wpml-ls-native')
        await (await switchlang).click()
        await browser.pause(3000)
    });
    When(/^I click on link$/, async () => {
        const linkclick = $('a[href*="cyber-tournament"]')
        await (await linkclick).click()
        await browser.pause(3000)
    });
    When(/^I clear search$/, async () => {
        const clear = $('#s')
        await (await clear).clearValue()
        await browser.pause(3000)
    });
    When(/^I input new search (.+) and clear data$/, async function (search1:string) {
        const searchingnew = $('#s')
        await (await searchingnew).setValue(search1)

        const erasing = await (await searchingnew).getValue(search1)
        await (await erasing).clearValue(clear)
        await browser.pause(3000)
    })