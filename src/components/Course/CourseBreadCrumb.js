import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
class CourseBreadCrumb extends Component {
    render() {
        return (
            <div className="w-100 breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <nav className=" ">
                                <Link to="/" exact className="breadcrumb-item">Trang chủ</Link>
                                <NavLink exact to="/course" className="breadcrumb-item">Khóa học</NavLink>
                                <a activeClassName="active-bread-crumb" to="/course/detail" className="breadcrumb-item active-bread-crumb">Chi tiết khóa học</a>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CourseBreadCrumb;