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
import CourseLearning from '../components/Course/course-learning/CourseLearning';
import CourseLearningContainer from '../containers/CourseLearningContainer'
import Login from '../components/Login';
import Logout from '../components/Logout';
import CompetitionCategory from '../components/Competition/CompetitionCategory';
import Chat from '../components/Chat';
import RoundTestInfo from '../components/Competition/round-test/RoundTestInfo';
import MyCourse from '../components/Course/my-course/MyCourse';
import Document from '../components/documents/Document';
const route = [
    {
        main: () => <Home></Home>,
        path: "/",
        exact: true
    },
    {
        path: "/course/:page",
        exact: true,
        main: ({ match }) => <Course match={match}></Course>
    },
    {
        path: "/competition/:page",
        exact: true,
        main: () => <Competition></Competition>
    },
    {
        path: "/introduce",
        exact: true,
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
        exact: true,
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
        exact: true,
        main: () => <CourseCategory ></CourseCategory>
    },
    {
        path: "/course/learning/:id",
        exact: false,
        main: () => <CourseLearning></CourseLearning>
    },
    {
        path: "/login",
        exact: true,
        main: () => <Login></Login>
    },
    {
        path: "/logout",
        exact: true,
        main: () => <Logout></Logout>
    },
    {
        path: "/competition/category/:slug.:id.html",
        exact: true,
        main: () => <CompetitionCategory></CompetitionCategory>
    },
    {
        path: "/chat",
        exact: true,
        main: () => <Chat></Chat>
    },
    {
        path: "/competition/round-test/:slug.:id",
        exact: true,
        main: () => <RoundTestInfo></RoundTestInfo>
    },
    {
        path: "/course/my-course/:page",
        exact: true,
        main: () => <MyCourse></MyCourse>
    },
    {
        path: "/documents",
        exact: true,
        main: () => <Document></Document>
    }

]
export default route