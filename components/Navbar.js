import React from 'react'
import PropTypes from "prop-types";

 function Navbar(props) {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}
//!propTypes ile propsa belirli özellkikler verbeiliyoruz burda propsumuz strşng olmalı ve kesinklikle değer atanmış olmalı demişiz
Navbar.propTypes = {
    title : PropTypes.string.isRequired

}
//!bu sayede eğer o propsa değer verilmez ise hata vermez default verilen bu değeri görürüz ekranda 
Navbar.defaultProps = {
    title : "Default App"
}
export default Navbar;




/*
/BU ŞEKİLDE AROW FONKSİYON ŞEKLİNDE KULLANABİLRİZİ BU PROPS ALMAYAN FONK COMPONENT DİYE GEÇER
import React from 'react'

 function Navbar = () => {
  return (
    <div>
    <h3>User App</h3>
      
    </div>
  )
}
export default Navbar;
*/
