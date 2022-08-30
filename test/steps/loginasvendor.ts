import {Given, When, Then} from "@wdio/cucumber-framework";
import Vendor from "../../src/pages/vendor.login";
import Dashboard from "../../src/pages/vendordashboard";
import newdata from "steps/loginasvendor"
const pages = {
    vendor : Vendor
}

 Given (/^I open page (\w+)$/, async (vendor) => {
     await pages[vendor].open()
    // await browser.url(vendor)
     // await browser.deleteCookies()
     // let cookies = await browser.getCookies()
     // console.log(cookies)
    await browser.maximizeWindow()
 });
 When (/^I input valid (.+)$/, async (vemail) => {
    // const vendemail = $('[name=email]')
    // await (await vendemail).setValue(vemail)
     await Vendor.maintemail_funct(vemail)
    console.log (vemail)
    await browser.pause(2000)
 });
 When (/^I input valid (.+)$/, async (vpassword) => {
    // const vendpassword = $('[name=password]')
    // await (await vendpassword).setValue(vpassword)
     await Vendor.maintpassword_funct(vpassword)
     console.log (vpassword)
     await browser.pause(2000)
 });
 When (/^I click login button$/, async () => {
    // const loginbtn = $('[type=submit]')
    // await (await loginbtn).click()
     await Vendor.maintlogin_funct()
     await browser.pause(2000)
 });
 Then (/^I will see newpage (.+)$/, async (newpage:string) => {
    await expect (await browser.getUrl()).toEqual(newpage)
     console.log(newpage)
     await browser.pause(2000)
 });
 Then (/^I will see logo$/, async () => {
    // const vendorlogo = $('.logoWithText undefined')
    // await (await vendorlogo).isDisplayed()
     await Dashboard.logo_funct()
 });
 Then (/^I will see work order blocks$/, async () => {
    // const vendorlogo = $('.containerWithSpacing')
    // await (await vendorlogo).isDisplayed()
     await Dashboard.woblocks_funct()
 })
