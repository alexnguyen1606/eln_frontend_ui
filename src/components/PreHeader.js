import React, { Component, Fragment, useEffect } from 'react';
import headerMenu from './../utils/HeaderMenu';
import HeaderLink from '../utils/HeaderLink';
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from './../utils/ObjectUtils';
import { useHistory, Redirect } from 'react-router-dom';
function PreHeader() {
    const userInfo = useSelector(state => state.userInfo);
    const history = useHistory();
    useEffect(() => {
        checkLogin()
    }, [userInfo])
    const checkLogin = () => {
        if (!userInfo) {
            return <Redirect to="/login"></Redirect>
        }
    }
    const showMenuHeader = (headerMenu) => {
        headerMenu.sort((a, b) => {
            return a.priority - b.priority
        })
        return headerMenu.map((itemMenu, i) => {
            return <HeaderLink key={i} label={itemMenu.label} to={itemMenu.to} activeOnlyWhenExact={itemMenu.exact}></HeaderLink>
        })
    }

    const showInfo = () => {
        if (isEmpty(userInfo)) {
            return (<HeaderLink label={"Đăng nhập"} to="/login" activeOnlyWhenExact={true}></HeaderLink>)
        }
        return (
            <Fragment>
                {showMenuHeader(headerMenu)}
                <li className="nav-item dropdown mr-2">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {userInfo.FULL_NAME}</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to="/info">Thông tin tài khoản</NavLink>
                        <NavLink className="dropdown-item" to="/logout">Đăng xuất</NavLink>
                    </div>
                </li>
            </Fragment>

        );
    }
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

                                {showInfo()}
                            </ul>
                        </div>
                    </nav>


                </div>

            </div>
        </div>


    );

}

export default PreHeader;