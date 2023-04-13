import React  from "react";
import {
  SidebarContainer,
  Icon,
  ColoseIcon,
  SideMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({isOpen,toogle}) => {

   
  return (
    <SidebarContainer isOpen={isOpen} onClick={toogle}>
      <Icon onClick={toogle}>
        <ColoseIcon />
      </Icon>
      <SideMenu>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Desserts</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SideMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
