class home{
    HomePage(){
        //let Writers = "//a[@id='js--authors']"
        let selectWriter = "//a[contains(text(),'কাজী নজরুল ইসলাম')]"
        let bestSeller = "//label[contains(text(),'Best Seller')]"
        let উপন্যাস_সমগ্র = "//label[contains(text(),'উপন্যাস সমগ্র')]"
        

        //cy.wait(3000);
       // cy.xpath(Writers).invoke('show');
        cy.wait(5000);
        cy.xpath(selectWriter).invoke('show').click({ force: true });
        cy.xpath(bestSeller).click({ force: true });
        cy.xpath(উপন্যাস_সমগ্র).click({ force: true });
        

    }
}export default home