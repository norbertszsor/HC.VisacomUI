import Login from '../login/Login';
import Register from '../register/Register';
import Route from '../Route';
import BlogElemets from '../blogElements/BlogElements';


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

        </div>
        
    );
}

export default Routing;