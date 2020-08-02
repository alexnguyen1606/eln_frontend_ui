import React, { Component } from 'react';
import headerMenu from './../utils/HeaderMenu';
import HeaderLink from '../utils/HeaderLink';
import { NavLink, Link } from 'react-router-dom'
class PreHeader extends Component {
    showMenuHeader = (headerMenu) => {
        return headerMenu.map((itemMenu, i) => {
            return <HeaderLink key={i} label={itemMenu.label} to={itemMenu.to} activeOnlyWhenExact={itemMenu.exact}></HeaderLink>
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className=" navbar navbar-expand-lg navbar-light bg-light custom pre-header navbar-fixed-top">
                            <Link to="/" exact className="navbar-band mt-3"><img className="logo-image" src="http://elearning-uat.vnpost.vn/static/images/trangchu.png" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className=" collapse navbar-collapse " id="navbarSupportedContent">
                                <ul className="text-right navbar-nav ml-auto ">
                                    {this.showMenuHeader(headerMenu)}

                                    <li className="nav-item dropdown mr-2">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Name</a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink className="dropdown-item" to="/info">Thông tin tài khoản</NavLink>
                                            <NavLink className="dropdown-item" to="/logout">Đăng xuất</NavLink>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>


                    </div>

                </div>
            </div>


        );
    }
}

export default PreHeader;