import * as React from 'react';
import { connect } from 'react-redux';
import './cssStyles/Login.css';


const Login = () => (
    <div className="masterCoinainer">
        <div className="container">
            <form action="/action_page.php">
                <div className="row">
                    <div className="col">
                        <a href="#" className="fb btn">
                            <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                    </a>
                        <a href="#" className="twitter btn">
                            <i className="fa fa-twitter fa-fw"></i> Login with Twitter
                    </a>
                        <a href="#" className="google btn">
                            <i className="fa fa-google fa-fw"></i> Login with Google+
                    </a>
                    </div>

                    <div className="col">
                        <div className="hide-md-lg">
                            <p>Or sign in manually:</p>
                        </div>

                        <input type="text" name="username" placeholder="Username" required></input>
                        <input type="password" name="password" placeholder="Password" required></input>
                        <input type="submit" value="Login"></input>
                    </div>

                </div>
            </form>
        </div>

        <div className="bottom-container">
            <div className="row">
                <div className="col">
                    <a href="#" className="btn">Sign up</a>
                </div>
                <div className="col">
                    <a href="#" className="btn">Forgot password?</a>
                </div>
            </div>
        </div>
    </div>
);

export default connect()(Login);