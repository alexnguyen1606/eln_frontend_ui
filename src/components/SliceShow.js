import React, { Component } from 'react';

class SliceShow extends Component {
    render() {
        return (
            <div id="carouselId" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselId" data-slide-to={0} className="active" />
                    <li data-target="#carouselId" data-slide-to={1} />
                    <li data-target="#carouselId" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="w-100" src="http://elearning-uat.vnpost.vn/e-learning/upload/images/b3i7YAqG9hG7jHNIfdmVB1.jpg" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="http://elearning-uat.vnpost.vn/e-learning/upload/images/b3i7YAqG9hG7jHNIfdmVB1.jpg" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className=" w-100" src="http://elearning-uat.vnpost.vn/e-learning/upload/images/b3i7YAqG9hG7jHNIfdmVB1.jpg" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default SliceShow;