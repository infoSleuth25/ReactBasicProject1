import React from 'react'

const Tabs = ({children, buttons, buttonsContainer = "menu"}) => {
    const ButtonCont = buttonsContainer;
  return (
    <>
    <ButtonCont>
        {buttons}
    </ButtonCont>
    {children}
    </>
  )
}

export default Tabs