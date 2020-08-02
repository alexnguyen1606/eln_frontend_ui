import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class ItemCompetition extends Component {
    render() {
        return (
            <div className="col-sm-4 mt-3">
                <Link to="/competition/detail/5" className="item">
                    <img className="card-img-top" src="http://elearning-uat.vnpost.vn/e-learning/upload/images/3abf9b6d-c5dd-4df9-a858-70a477a16761image%2027.png" alt="Card image cap"></img>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <h6 className="card-subtitle text-muted">Subtitle</h6>
                        </div>

                    </div>
                </Link>

            </div>
        );
    }
}

export default ItemCompetition;