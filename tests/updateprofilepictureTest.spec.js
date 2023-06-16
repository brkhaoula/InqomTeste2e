// @ts-check
const { test, expect } = require('@playwright/test');
const { default: changeaccount } = require('../components/changeaccount');
const { default: authentification } = require('../components/authentification');


test('upload profile picture', async ({ page, baseURL }) => {
  const authentificationPage = new authentification(page);
  const changeaccountPage = new changeaccount(page);
  //open page home of site
  await changeaccountPage.goTo(baseURL);
   // Expect a title "to contain" a substring.
   await expect(page).toHaveTitle(/Welcome to the Jungle - Le guide de l'emploi/);
   //fill email and psw to authentifiate
  await authentificationPage.fillEmail(authentificationPage.email);
  await authentificationPage.fillPassword(authentificationPage.password);
  await authentificationPage.clickLoginButton();
  //redirection to profile page to update picture and save 
  await expect(page).toHaveURL(`${baseURL}/me/settings/account`);
  await changeaccountPage.uploadImage();
  await changeaccountPage.clickSubmitButton();
  //verify picture save
  await expect(changeaccountPage.getAvatarImg).toBeVisible();
});
