import React, { useState } from "react";
import { ProfileIconContanier } from "../../../styles/headerStyled/HeaderStyled";
import ProfileDropDown from "./ProfileDropDown";
const ProfileIcon = () => {
  const [ isMenu, setIsMenu ] = useState(false);

  const handleContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMenu((preIsMenu) => !preIsMenu);
  };


  return (
    <ProfileIconContanier onClick={handleContainerClick}>
      <div className="icon" />
      { isMenu ? <ProfileDropDown setIsMenu={setIsMenu} /> : null }
    </ProfileIconContanier>
  )
};

export default ProfileIcon;
