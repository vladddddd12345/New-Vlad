import {Given} from "@wdio/cucumber-framework";

    Given(/^I have provided below information to create an account$/, function (table) {
         this.data = getData(table.rowsHash());
         createuserPage.enterUserDetails(this.data);
    });