import React, {useEffect, useState} from 'react';
import logo from '../../logo.svg';
import {useTheme} from "@material-ui/core";
import styles from "./Header-styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Link} from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Header = (props) => {
    let theme = useTheme();
    let classes = styles(theme);

    let [anchor, setAnchor] = useState(null);
    let [openMenu, setOpenMenu] = useState(false);

    let [selectedTab, setSelectedTab] = useState(0);
    let [selectedMenu, setSelectedMenu] = useState(-1);

    useEffect(() => {
        switch (window.location.pathname) {
            case "/" : {
                setSelectedTab(0);
                break;
            }
            case "/Profile" : {
                setSelectedTab(1);
                break;
            }
            case "/Messages" : {
                setSelectedTab(2);
                break;
            }
            case "/UserListAPIComponent" : {
                setSelectedTab(3);
                break;
            }
            case "/" : {
                setSelectedTab(0);
                break;
            }
            default : {
                setSelectedTab(-1);
                break;
            }
        }
    })

    let toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    let handleTabClick = (e, val) => {
        setSelectedTab(val);
    }

    let handleFriendsClick = (e) => {
        setAnchor(e.currentTarget);
        toggleMenu();
    }

    let handleMenuClose = (e) => {
        setAnchor(null);
        toggleMenu();
    }

    let chooseFriend = (e, index) => {
        setSelectedMenu(index);
    }

    return (
        <>
            <AppBar {...props} className={classes.Header}>
                <Toolbar>
                    <Button disableRipple component={Link} to={"/"} className={classes.logo_btn}>
                        <img src={logo} alt={"logo"} className={classes.logo}/>
                        <span className={classes.heading}>Web app</span>
                    </Button>
                    {props.isLogged ? <>
                        <Tabs value={selectedTab} indicatorColor={"secondary"} className={classes.tabs} onChange={handleTabClick}>
                            <Tab label={"Home"} component={Link} to={"/"}/>
                            <Tab label={"Profile"} component={Link} to={"/Profile"}/>
                            <Tab label={"Messages"} component={Link} to={"/Messages"}/>
                            <Tab label={"Users"} component={Link} to={"/UserListAPIComponent"}/>
                            <Tab label={"Friends"}
                                 aria-controls={openMenu ? 'menu' : undefined}
                                 aria-owns={anchor ? "menu" : undefined}
                                 aria-haspopup={anchor ? "true" : undefined}
                                 onMouseOver={handleFriendsClick}
                            />
                        </Tabs>
                        <div className={classes.logout_wrapper}>
                            <div className={classes.email}>
                                {props.email}
                            </div>
                            <Button onClick={props.logout} className={classes.logout}>
                                Log out
                            </Button>
                        </div>
                        <Menu open={openMenu} id={"menu"}
                              anchorEl={anchor} onClose={handleMenuClose}
                              autoFocusItem={openMenu} MenuListProps={{onMouseLeave : handleMenuClose}}
                              classes={{paper : classes.menu, list : classes.menuList}}
                              transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'center',
                              }}
                              elevation={3}
                              keepMounted
                        >
                            <MenuItem selected={selectedMenu === 0} onClick={(e) => {chooseFriend(e,0)}} component={Link} to={"/Friend/Misha"}>
                                Michael
                            </MenuItem>
                            <MenuItem selected={selectedMenu === 1} onClick={(e) => {chooseFriend(e,1)}} component={Link} to={"/Friend/Anya"}>
                                Anna
                            </MenuItem>
                            <MenuItem selected={selectedMenu === 2} onClick={(e) => {chooseFriend(e,2)}} component={Link} to={"/Friend/Zeka"}>
                                Evgenii
                            </MenuItem>
                        </Menu>
                    </> : <></>}
                </Toolbar>
            </AppBar>
            <div className={classes.spacing}/>
        </>
    );
};

export default Header;