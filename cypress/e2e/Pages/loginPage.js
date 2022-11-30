 class login{

    loginProcess(){
         let SignIn = "//a[contains(text(),'Sign in')]"
         let Email = "//input[@id='j_username']"
         let Password = "//input[@id='j_password']"
         let Confirm = "//button[contains(text(),'Sign In')]"

        cy.xpath(SignIn).click();
        //cy.xpath(Email).click();
        cy.xpath(Email).type("ehsanbd92@gmail.com");
        cy.xpath(Password).click({ force: true });
        cy.xpath(Password).type("012345678", {force: true });
        cy.xpath(Confirm).click({ force: true });
    }
}export default login