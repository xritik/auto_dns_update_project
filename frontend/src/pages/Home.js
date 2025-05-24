import React from 'react'

const Home = ({ navigate }) => {
    const fn1 = () => {
        navigate('/automatic')
    }
    const fn2 = () => {
        navigate('/manually')
    }
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Welcome at DNS Updating Shoftware.</h1>
        <h3>Click any one</h3>
        <div style={{display:'flex', justifyContent:'center', gap:'30px'}}>
            <button className='home_page_button' onClick={fn1}>AutoUpdate</button>
            <button className='home_page_button' onClick={fn2}>ManualUpdate</button>
        </div>
    </div>
  )
}

export default Home