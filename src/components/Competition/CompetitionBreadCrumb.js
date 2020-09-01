import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
function CompetitionBreadCrumb(props) {

    return (
        <div className="w-100 breadcrumb">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav className=" ">
                            <Link to="/" exact className="breadcrumb-item">Trang chủ</Link>
                            <NavLink exact to="/competition" className="breadcrumb-item">Cuộc thi</NavLink>
                            <a activeClassName="active-bread-crumb" to="/competition/detail" className="breadcrumb-item active-bread-crumb">{props.name}</a>
                        </nav>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default CompetitionBreadCrumb;