import React from 'react';
import Home from "../components/Home"
import Course from "../components/Course/Course"
import Competition from "../components/Competition/Competition"
import Introduce from "../components/Introduce"
import News from "../components/News/News"
import Events from "../components/Events/Events"
import Support from '../components/support/Support';
import CourseDetail from '../components/Course/CourseDetail';
import CompetitionDetail from '../components/Competition/CompetitionDetail';
import NewsDetail from '../components/News/NewsDetail';
import CourseCategory from '../components/Course/CourseCategory';
import CourseLearning from '../components/Course/CourseLearning';

const route = [
    {
        main: () => <Home></Home>,
        path: "/",
        exact: true
    },
    {
        path: "/course",
        exact: true,
        main: ({ match }) => <Course match={match}></Course>
    },
    {
        path: "/competition",
        exact: true,
        main: () => <Competition></Competition>
    },
    {
        path: "/introduce",
        exact: false,
        main: () => <Introduce></Introduce>
    },
    {
        path: "/news",
        exact: true,
        main: () => <News></News>
    },
    {
        path: "/events",
        exact: true,
        main: () => <Events></Events>
    }, {
        path: "/support",
        exact: true,
        main: () => <Support></Support>
    }, {
        path: "/course/detail/:slug.:id.html",
        exact: false,
        main: () => <CourseDetail></CourseDetail>
    },
    {
        path: "/competition/detail/:id",
        exact: false,
        main: () => <CompetitionDetail></CompetitionDetail>
    },
    {
        path: "/news/detail/:id",
        exact: false,
        main: () => <NewsDetail></NewsDetail>
    },
    {
        path: "/course/category/:slug.:id.html",
        exact: false,
        main: () => <CourseCategory ></CourseCategory>
    },
    {
        path: "/course/learning/:id",
        exact: false,
        main: () => <CourseLearning></CourseLearning>
    }
]
export default route