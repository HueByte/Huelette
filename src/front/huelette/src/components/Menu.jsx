import React from 'react';
import './Menu.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/white-cloud.jpg';

const Menu = () => {
    const variables = {
        lvl: 10,
        barProgress: 10
    }

    const active = {
        wheel: '',
        roulette: '',
        crash: ''
    }

    // const location = useLocation();
    // switch (location.pathname) {
    //     case "/wheel":
    //         active.wheel = ' active';
    //         active.roulette = '';
    //         active.crash = '';
    //     break;
    //     case "/roulette":
    //         active.wheel = '';
    //         active.roulette = ' active';
    //         active.crash = '';
    //     break;
    //     // case "/crash":
    //     //     active.wheel = '';
    //     //     active.roulette = '';
    //     //     active.crash = ' active';
    //     // break;
    //     default:
    //         active.wheel = ' active';
    //         active.roulette = '';
    //         active.crash = '';
    //     break;
    // }

    return (
        <section className="nav-top">
            <div className="nav-desktop">
                <div className="nav-logo">
                    {/* <img src={logo} className="triangle" /> */}
                    <img src={logo} className="triangle" style={{borderRadius: 10}}/>
                    {/* <img style={{ width: 250, height: 100 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZktLhdaw0NzlvRUYAdJHzRnxv8_y9zFLfg&usqp=CAU" /> */}
                </div>
                <div className="nav-desktop__container">
                    <div className="nav-desktop__main__container">
                        <div className="nav-left">
                            <NavLink activeClassName="active" to="/wheel" className="nav-desktop__main__button">
                                <i class="fa fa-circle-o nav-desktop__main__button-icon"></i>
                                <div>Wheel</div>
                            </NavLink>
                            <NavLink activeClassName="active" to="/roulette" className="nav-desktop__main__button">
                                <i class="fa fa-superpowers nav-desktop__main__button-icon" aria-hidden="true"></i>
                                <div>Roulette</div>
                            </NavLink>
                            <NavLink activeClassName="active" to="crash" className="nav-desktop__main__button">
                                <i class="fa fa-area-chart nav-desktop__main__button-icon" aria-hidden="true"></i>
                                <div>Crash</div>
                            </NavLink>
                        </div>
                        <div className="nav-right">
                            <div className="nav-coins__container">
                                <div className="nav-coins-icon">
                                    <i class="fas fa-coins"></i>
                                    <span style={{ textTransform: "uppercase", marginLeft: 5 }}>coins</span>
                                </div>
                                <div className="nav-coins-balance">
                                    0
                                </div>
                            </div>
                            <Link to="/profile"
                                className="nav-avatar"
                                style={{ backgroundImage: "url(https://lh3.googleusercontent.com/iFjN0aRv7Olsk3uHMzLQdALoJVA3qRyAgJ75Z5PsTLOrUOSzSYP2kbGMvwveZc4a7P9byIV5rbZXDwwfttbyD_wP=w640-h400-e365-rj-sc0x00ffffff)" }}
                                title="Profile">
                            </Link>
                        </div>
                    </div>
                    <div className="nav-desktop-sub">
                        <div className="nav-desktop-sub__left">
                            <Link to="/" className="nav-desktop-sub-item">
                                <div className="nav-desktop-sub-item__icon">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </div>
                                <div className="nav-desktop-sub-item__text">My Account</div>
                            </Link>
                            <Link to="/" className="nav-desktop-sub-item">
                                <div className="nav-desktop-sub-item__icon">
                                    <i class="fa fa-gift" aria-hidden="true"></i>
                                </div>
                                <div className="nav-desktop-sub-item__text">Rewards</div>
                            </Link>
                            <Link to="/" className="nav-desktop-sub-item">
                                <div className="nav-desktop-sub-item__icon">
                                    <i class="fa fa-trophy" aria-hidden="true"></i>
                                </div>
                                <div className="nav-desktop-sub-item__text">Leaderboards</div>
                            </Link>
                        </div>
                        <div className="nav-desktop-sub__right">
                            <div className="nav-progress__container">
                                <div className="nav-progress-level">
                                    {variables.lvl}
                                </div>
                                <div className="nav-progress-bar">
                                    <div className="nav-progress-bar-progress"  style={{width: `${variables.barProgress}%`}}>
                                        
                                    </div>
                                    <div className="nav-progress-bar-number">
                                        {variables.barProgress}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu;