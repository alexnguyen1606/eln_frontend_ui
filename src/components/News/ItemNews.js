import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class ItemNews extends Component {
    render() {
        return (
            <div className="col-md-6 mt-3">
                <Link to="/news/detail/5" className="item w-100">
                    <img className="card-img-top" src="http://elearning-uat.vnpost.vn/e-learning/upload/images/9e8bdd56-bb87-49bc-aa5f-d876816b96bf257.png" alt=""></img>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <h6 className="card-subtitle text-muted">Subtitle</h6>
                        </div>
                        <div className="card-footer">
                            Tác giả : Admin
                        </div>
                    </div>
                </Link>

            </div>
        );
    }
}

export default ItemNews;