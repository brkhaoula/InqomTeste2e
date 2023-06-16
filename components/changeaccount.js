class changeaccount {

    constructor(page) {
        this.page = page;
        this.getImageUploadField = page.getByTestId('account-edit-field-avatar')
        this.getAvatarImg = this.getImageUploadField.locator('img')
        this.getImageUploadInput = this.getImageUploadField.locator('input[type="file"]')
        this.getSubmitButton = page.getByTestId('account-edit-button-submit')
      }
    async goTo(baseUrl){
        await this.page.goto(`${baseUrl}/me/settings/account`);
    }

    async uploadImage(){
        await this.getImageUploadInput.setInputFiles('components/fixtures/avatar.png')
    }
    
    async clickSubmitButton(){
        await this.getSubmitButton.click()
    }
}
export default changeaccount;