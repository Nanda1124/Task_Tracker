import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";


const Header = ({title, onAdd,showAdd}) => {
    //const OnClick = () => {
        
    //}
  return (
    <header className="header">
    <h1>{title}</h1>
    <Button text= {showAdd?'Close':'Add'} color= {showAdd?'red':'green'} onclick={onAdd}/>
    </header>
  )
};

Header.defaultProps = {
    title:'Task Tacker',
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
    text : PropTypes.string,
    color : PropTypes.string
}

export default Header;