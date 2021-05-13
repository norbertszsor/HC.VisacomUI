import Login from '../login/login';
import Register from '../register/register';
import Route from '../Route';
import BlogElemets from '../blogElements/BlogElements';
import Shop from '../shop/Shop'


const Routing = () =>{
    return(
        <div>

            <Route path="">
                <BlogElemets/>
            </Route>

            <Route path="/">
                <BlogElemets/>
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

        </div>
        
    );
}

export default Routing;