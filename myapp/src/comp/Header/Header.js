import React, {useEffect, useState} from 'react';
import logo from '../../logo.svg';
import {Hidden, SwipeableDrawer, useMediaQuery, useTheme} from "@material-ui/core";
import styles from "./Header-styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Link} from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import CancelIcon from '@material-ui/icons/Cancel';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ChatIcon from '@material-ui/icons/Chat';
import PeopleIcon from '@material-ui/icons/People';
import ListIcon from '@material-ui/icons/List';

import {ExpandLess, ExpandMore, StarBorder} from "@material-ui/icons";

import Collapse from "@material-ui/core/Collapse";

const Header = (props) => {
    let theme = useTheme();
    let classes = styles(theme);

    let [anchor, setAnchor] = useState(null);
    let [openMenu, setOpenMenu] = useState(false);
    let [openDrawer, setOpenDrawer] = useState(false);
    let [openFriend, setOpenFriendList] = useState(false);


    let [selectedTab, setSelectedTab] = useState(0);
    let [selectedMenu, setSelectedMenu] = useState(-1);

    useEffect(() => {
        let pathName = window.location.pathname
        if (window.location.host === "whatruska.github.io"){
            pathName = pathName.substring(pathName.indexOf("/React") + 6);
        };
        switch (pathName) {
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
            default : {
                setSelectedTab(-1);
                break;
            }
        }
    },[]);

    let toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    let toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
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

    let matches = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <>
            <AppBar {...props} className={classes.Header}>
                <Toolbar>
                    <Button disableRipple component={Link} to={"/"} className={classes.logo_btn}>
                        <img src={logo} alt={"logo"} className={classes.logo}/>
                        <span className={classes.heading}>Web app</span>
                    </Button>
                    {props.isLogged ? <>
                        {matches ?
                            <>
                                <Tabs value={selectedTab} indicatorColor={"secondary"} className={classes.tabs} onChange={handleTabClick}>
                                    <Tab label={"Home"} component={Link} to={"/"} className={classes.tab}/>
                                    <Tab label={"Profile"} component={Link} to={"/Profile"} className={classes.tab}/>
                                    <Tab label={"Messages"} component={Link} to={"/Messages"} className={classes.tab}/>
                                    <Tab label={"Users"} component={Link} to={"/UserListAPIComponent"} className={classes.tab}/>
                                    <Tab label={"Friends"}
                                         aria-controls={openMenu ? 'menu' : undefined}
                                         aria-owns={anchor ? "menu" : undefined}
                                         aria-haspopup={anchor ? "true" : undefined}
                                         onMouseOver={handleFriendsClick}
                                         className={classes.tab}
                                    />
                                </Tabs>
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
                            </>: <>
                                <SwipeableDrawer onClose={toggleDrawer} onOpen={toggleDrawer} open={openDrawer}>
                                    <List>
                                        <ListItem>
                                            <IconButton onClick={toggleDrawer} className={classes.drawer_close_btn}>
                                                <CancelIcon/>
                                            </IconButton>
                                        </ListItem>
                                        <ListItem button onClick={toggleDrawer} component={Link} to={"/"}>
                                            <ListItemIcon>
                                                <HomeIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary={"Home"} secondary={"Home, sweet home"}/>
                                        </ListItem>
                                        <ListItem button onClick={toggleDrawer} component={Link} to={"/profile"}>
                                            <ListItemIcon>
                                                <AccountBoxIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary={"Profile"} secondary={"Check your profile and edit status"}/>
                                        </ListItem>
                                        <ListItem button onClick={toggleDrawer} component={Link} to={"/messages"}>
                                            <ListItemIcon>
                                                <ChatIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary={"Messages"} secondary={"Check your messages"}/>
                                        </ListItem>
                                        <ListItem button onClick={toggleDrawer} component={Link} to={"/UserListAPIComponent"}>
                                            <ListItemIcon>
                                                <ListIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary={"Users"} secondary={"List of users"}/>
                                        </ListItem>
                                        <ListItem button onClick={(e) => {setOpenFriendList(!openFriend)}}>
                                            <ListItemIcon>
                                                <PeopleIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary={"Friends"} secondary={"List of your friends"}/>
                                            {openFriend ? <ExpandLess/> : <ExpandMore/>}
                                        </ListItem>
                                        <Collapse in={openFriend} timeout={500} unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItem button component={Link} to={"/Friend/Misha"} onClick={toggleDrawer}>
                                                    <ListItemIcon>
                                                        <StarBorder />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Misha"/>
                                                </ListItem>
                                                <ListItem button component={Link} to={"/Friend/Anya"} onClick={toggleDrawer}>
                                                    <ListItemIcon>
                                                        <StarBorder />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Anna"/>
                                                </ListItem>
                                                <ListItem button component={Link} to={"/Friend/Zeka"} onClick={toggleDrawer}>
                                                    <ListItemIcon>
                                                        <StarBorder />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Evgenii"/>
                                                </ListItem>
                                            </List>
                                        </Collapse>
                                    </List>
                                </SwipeableDrawer>
                                <Button onClick={toggleDrawer} className={classes.drawer_btn}>
                                    <MenuIcon />
                                </Button>
                            </>}
                        <div className={classes.logout_wrapper}>
                            <div className={classes.email}>
                                {props.email}
                            </div>
                            <Button onClick={props.logout} className={classes.logout}>
                                Log out
                            </Button>
                        </div>
                    </> : <></>}
                </Toolbar>
            </AppBar>
            <div className={classes.spacing}/>
        </>
    );
};

export default Header;