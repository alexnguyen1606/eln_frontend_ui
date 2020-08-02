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

const route = [
    {
        main: () => <Home></Home>,
        path: "/",
        exact: true
    },
    {
        path: "/course",
        exact: true,
        main: () => <Course></Course>
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
        path: "/course/detail/:id",
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
    }
]
export default route