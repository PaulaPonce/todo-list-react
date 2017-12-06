import React, { Component } from 'react';
import '../components/Foot.css';
import {Footer} from 'react-materialize';

class Foot extends Component {
  render() {
    return ( 
      <Footer className="Footer" copyrights="&copy 2015 Copyright Text"
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        }
          /*
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          }
          className='example Footer'
          */
        >
        <h5 className="white-text">Footer Content</h5>
      </Footer> 
    );
  }
}

export default Foot;