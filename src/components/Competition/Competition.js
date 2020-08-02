import React, { Component, Fragment } from 'react';
import ItemCompetition from './ItemCompetition';
import HomeBreadCrumb from '../common/HomeBreadCrumb';

class Competition extends Component {
    render() {
        return (
            <Fragment>
                <HomeBreadCrumb to="/competition" label="Cuộc thi"></HomeBreadCrumb>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <ItemCompetition></ItemCompetition>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Competition;