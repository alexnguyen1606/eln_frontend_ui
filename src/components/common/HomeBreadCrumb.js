import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
class HomeBreadCrumb extends Component {
    render() {
        return (
            <div className="w-100 breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <nav className=" ">
                                <Link to="/" exact className="breadcrumb-item">Trang chủ</Link>
                                <NavLink activeClassName="active-bread-crumb" to={this.props.to} className="breadcrumb-item">{this.props.label}</NavLink>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default HomeBreadCrumb;