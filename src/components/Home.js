import React, { Component, Fragment } from 'react';
import CourseIntro from './Course/CourseIntro';
import CompetitionIntro from './Competition/CompetitionIntro';
import NewsIntro from './News/NewsIntro';
import SliceShow from './SliceShow';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <SliceShow></SliceShow>
                <CourseIntro></CourseIntro>
                <CompetitionIntro></CompetitionIntro>
                <NewsIntro></NewsIntro>
            </Fragment>
        );
    }
}

export default Home;