import React from 'react'

const AutoUpdate = () => {
  return (
    <div className='automatic_Section'>
      <h3 style={{color:'red', paddingLeft:'50px'}}>: Please Fill all the required credentials carefully!</h3>
      <div style={{display:'flex', width:'100vw'}}>
        <div style={{width:'50%'}}>
          <h3 style={{color:'red', paddingLeft:'50px'}}>AWS Credentials :</h3>
          <div className='credentialSection'><label>AWS Accesss Key Id:</label><input type='text' placeholder='Ex:- AKIAIOSFODNN7EXAMPLE'/></div>
          <div className='credentialSection'><label>AWS Secret Accesss Key:</label><input type='text' placeholder='Ex:- wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY' /></div>
          <div className='credentialSection'><label>AWS EC2 Region:</label><input type='text' placeholder='Ex:- us-east-1'/></div>
        </div>
        <div style={{width:'50%'}}>
          <h3 style={{color:'red', paddingLeft:'50px'}}>CloudFlare Credentials :</h3>
          <div className='credentialSection'><label>CloudFlare API Token:</label><input type='text' placeholder='Ex:- ABC123DEF456GHI789JKL_TOKEN' /></div>
          <div className='credentialSection'><label>CloudFlare Zone Id:</label><input type='text' placeholder='Ex:- 23a1cdef23456789abcd1234567890ef' /></div>
          <div className='credentialSection'><label>CloudFlare Domain:</label><input type='text' placeholder='Ex:- example.com'/></div>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center', paddingTop:'30px'}}><button className='home_page_button'>Update A records</button></div>
    </div>
  )
}

export default AutoUpdate