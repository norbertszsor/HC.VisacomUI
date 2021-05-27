import Login from '../login/login';
import Register from '../register/Register';
import Route from '../Route';
import BlogElemets from '../blogElements/BlogElements';
import Shop from '../shop/Shop'
import Blog from '../blog/Blog';
import Checkout from '../shop/checkout/checkout'


const Routing = () =>{
    return(
        <div>

            <Route path="">
                <BlogElemets/>
            </Route>

            <Route path="/">
                <BlogElemets/>
            </Route>
            <Route path="/blog">
                <Blog/>
            </Route>

            <Route path="/login">
                <Login/>
            </Route>

            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/shop">
                <Shop/>
            </Route>
            <Route path="/checkout">
                <Checkout/>
            </Route>

        </div>
        
    );
}

export default Routing;