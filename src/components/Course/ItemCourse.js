import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { API_URL } from './../../constants/Config';
import toSlug from './../../utils/ToSlug';
class ItemCourse extends Component {
    redirect = () => {
        // <Redirect to="/course/detail/3"></Redirect>
    }
    showPrice = (price) => {
        if (price === 0 || price === null) {
            return "Miễn Phí";
        }
        return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(price);
    }
    render() {
        let { course } = this.props;
        let slug = toSlug(course.name);
        let to = "/course/detail/" + slug + "." + course.id + ".html";
        return (
            <div className="col-md-4 mt-3">
                <Link to={to} className="item">
                    <div className="card  ">
                        <img className="card-img-top" src={API_URL + course.avatar}></img>
                        <div className="card-body">
                            <h4 className="card-title">{course.name}</h4>
                            <div >
                                <h6 className="text-muted">Admin</h6>
                                <small>Đơn vị: {course.poscodeName}</small>
                            </div>

                        </div>
                        <div className="card-footer">
                            <p className="course-price"><i className="fa fa-book icon "></i>Số chương mục {course.outline.chapters.length}</p>
                            <div className="course-price mr-auto">
                                {this.showPrice(course.price)}
                            </div>
                        </div>
                    </div>
                </Link>

            </div >

        );
    }
}

export default ItemCourse;