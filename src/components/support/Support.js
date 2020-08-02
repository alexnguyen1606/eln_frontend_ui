import React, { Component, Fragment } from 'react';
import HomeBreadCrumb from '../common/HomeBreadCrumb';

class Support extends Component {
    render() {
        return (
            <Fragment>
                <HomeBreadCrumb to="/support" label="Hỗ trợ"></HomeBreadCrumb>
            </Fragment>
        );
    }
}

export default Support;