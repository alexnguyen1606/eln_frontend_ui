import React, { Component, Fragment } from 'react';
import HomeBreadCrumb from '../common/HomeBreadCrumb';
import PreHeader from '../PreHeader';

class Events extends Component {
    render() {
        return (
            <Fragment>

                <HomeBreadCrumb to="/events" label="Sự kiện"></HomeBreadCrumb>
            </Fragment>
        );
    }
}

export default Events;