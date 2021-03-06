import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
function CourseBreadCrumb(props) {

    return (
        <div className="w-100 breadcrumb">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav className=" ">
                            <Link to="/" exact className="breadcrumb-item">Trang chủ</Link>
                            <NavLink exact={props.exact} to="/course/1" className="breadcrumb-item">Khóa học</NavLink>
                            <a activeClassName="active-bread-crumb" to={props.to} className="breadcrumb-item active-bread-crumb">{props.label}</a>
                        </nav>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default CourseBreadCrumb;