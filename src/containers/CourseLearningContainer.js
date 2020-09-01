import React, { Component } from 'react';
import CourseLearning from '../components/Course/course-learning/CourseLearning';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from './../actions/Action'
class CourseLearningContainer extends Component {
    render() {
        return (
            <div></div>
        );
    }




}
const mapStateToProps = (state, ownProps) => {
    return {
        status: state.learning.status
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStatus: () => {
            dispatch(actions.showTabLearning)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseLearningContainer)
