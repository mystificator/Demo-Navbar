import React, { useState } from 'react'
import Header from './components/Header'
import PhoneMenuLayout from './components/PhoneMenuLayout';

const App = () => {
  const [isMenuExpanded,setIsMenuExpanded] = useState(false);
  return (
    <PhoneMenuLayout isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded}>
    <div className='min-h-[100vh] bg-white'>
      <Header isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded}/>
    </div>
    </PhoneMenuLayout>
  )
}

export default App