import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from './header.js'

import './index.scss'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="CKI Montana District"
      meta={[
        { name: 'description', content: 'Circle K Montana' },
        { name: 'keywords', content: 'circlek, keyclub, college, club, service' },
      ]}
    />
    <Header />
    <div></div>
    <div id="content"> 
      <div className="children">
       {children()}
      </div>
      <div></div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
