import React, { Component, Fragment } from 'react';
import HomeBreadCrumb from './common/HomeBreadCrumb';
import PreHeader from './PreHeader';

class Introduce extends Component {

    render() {
        return (
            <Fragment>

                <HomeBreadCrumb to="/introduce" label="Giới thiệu"></HomeBreadCrumb>
            </Fragment>
        );
    }
}

export default Introduce;