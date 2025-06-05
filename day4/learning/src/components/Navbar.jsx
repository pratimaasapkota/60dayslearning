import React, {useEffect} from 'react'

const Navbar = ({color}) => {
  useEffect(() => {
    
  alert("color was changed")
    
    
  }, [color])
  
  return (
    <div>
      I am navBar of {color} color hehe.....
    </div>
  )
}

export default Navbar
