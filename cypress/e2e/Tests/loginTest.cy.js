import open_url from "../Base/openUrl";
import login from "../Pages/loginPage";
import home from "../Pages/homePage";
import cart from "../Pages/addtoCart";
import provideInformation from "../Pages/shippingAddress";

describe('Rokomari', ()=>{

    const url = new open_url()
    const loginpage = new login()
    const Home = new home()
    const Cart = new cart()
    const Shipping = new provideInformation()

    it('Test', ()=>{

        url.openUrl()
        loginpage.loginProcess()
        Home.HomePage()
        Cart.AddCart()
        Shipping.ShippingAddress()
    })
})