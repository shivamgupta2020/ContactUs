import React from 'react'
import footer from './footer.webp'

function Footer() {
  return (
    <div style={{display:'flex', justifyContent:"center", width:"100%", position:"absolute", left:"0"}}>
      <img src={footer} alt="" srcset="" style={{objectFit:"fill", width:"100%"}}/>
    </div>
  )
}

export default Footer
