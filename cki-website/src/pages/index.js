import React, { Component } from 'react';
import Link from 'gatsby-link'
import '../files/css/index.scss'

class IndexPage extends Component {
  render() {
    return (
        <div className="center">
          <h3>Hello World!</h3>
          <p>Feel free to peruse the pages.</p>
          <a href="http://github.com/tfricks">Github</a>
        </div>
    );
  }
}

export default IndexPage;