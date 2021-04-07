import * as React from 'react';
import { connect } from 'react-redux';


const Home = () => (
    <div>
        <video autoPlay loop controls>
            <source src="home.mp4" type='video/mp4'></source>
        </video>
  </div>
);

export default connect()(Home);
