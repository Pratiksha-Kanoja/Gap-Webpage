import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer-container'>
      <div className='Footercontainer-top'>
        <div className='FC-topfirst'>
          <p className='FC-topheading'>SEE IT FIRST</p>
          <div>
            <input type="text" placeholder='Enter your email address' />
            <button>JOIN</button>
          </div>
          <p>PRIVACY POLICY</p>
        </div>
        <div className='FC-topsecond'>
          <p className='FC-topheading'>CUSTOMER SUPPORT</p>
          <p className='FC-toplink'>Customer Service</p>
          <p className='FC-toplink'>Buy Online. Pick Up In-Store.</p>
          <p className='FC-toplink'>Store Locator</p>
          <p className='FC-toplink'>GapCash</p>
          <p className='FC-toplink'>GiftCards</p>
        </div>
        <div className='FC-topthird'>
          <p className='FC-topheading'>GAP GOOD REWARDS</p>
          <p className='FC-toplink'>Join Gap Good Rewards</p>
          <p className='FC-toplink'>Apply for a Credit Card</p>
          <p className='FC-toplink'>My Rewards & Benefits</p>
          <p className='FC-toplink'>Pay Credit Card Bill</p>
          <p className='FC-toplink'>Learn More</p>
        </div>
        <div className='FC-topforth'>
          <p className='FC-topheading'>ABOUT US</p>
          <p className='FC-toplink'>Our Values</p>
          <p className='FC-toplink'>Sustainability</p>
          <p className='FC-toplink'>Equality and Belonging</p>
          <p className='FC-toplink'>Careers</p>
          <p className='FC-toplink'>Get the App</p>
        </div>
      </div>

      <div className='Footercontainer-bottom'>
        <p>© 2023 THE GAP, INC.| PRIVACY POLICY | YOUR PRIVACY CHOICES | YOUR CALIFORNIA PRIVACY RIGHTS | CALIFORNIA TRANSPARENCY IN SUPPLY CHAINS ACT | TERMS OF USE | CAREERS | SUSTAINABILITY | ABOUT GAP INC.</p>
        <p>AMERICANS WITH DISABILITIES ACT | GAP INC. POLICIES</p>
      </div>
    </div>
  )
}

export default Footer