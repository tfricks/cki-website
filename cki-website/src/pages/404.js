import React from 'react'
import '../files/css/404.scss'
import linkisdead from '../files//linkisdead.gif';


const NotFoundPage = () => (
  <div className="fourohfour">
    <h1>404 LINK IS DEAD</h1>
    <p>You must save Hyrule in Link's Stead!</p>
    <img src={linkisdead} />
  </div>
)

export default NotFoundPage
