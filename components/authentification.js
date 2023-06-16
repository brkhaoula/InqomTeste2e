class authentification {
    constructor(page) {
        this.page = page;
        this.email = 'inqom.qaautomationapplicant@gmail.com';
        this.password = 'o5N,d5ZR@R7^';
        this.emailInput = page.getByTestId('login-field-email');
        this.passwordInput = page.getByTestId('login-field-password');
        this.loginButton = page.getByTestId('login-button-submit');
      }
    
    async fillEmail(email){
        await this.emailInput.fill(email);
    }

    async fillPassword(password){
        await this.passwordInput.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }
}
export default authentification