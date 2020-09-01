import React, { Component, Fragment } from 'react';
import HomeBreadCrumb from '../common/HomeBreadCrumb';
import ItemNews from './ItemNews';
import TitleIntro from '../common/TitleIntro';
import PreHeader from '../PreHeader';

class News extends Component {
    render() {
        return (
            <Fragment>

                <HomeBreadCrumb to="/news" label="Tin tức"></HomeBreadCrumb>
                <TitleIntro title="Tin tức"></TitleIntro>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 row">
                            <ItemNews></ItemNews>
                            <ItemNews></ItemNews>
                        </div>
                        <div className="col-md-4">
                            <h3>Danh mục</h3>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Morbi leo risus</li>
                                <li class="list-group-item">Porta ac consectetur ac</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default News;