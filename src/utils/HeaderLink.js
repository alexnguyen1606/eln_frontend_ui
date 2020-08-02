import { Route, Link } from 'react-router-dom';
import React from 'react';
const HeaderLink = ({ label, to, activeOnlyWhenExact }) => {
    return <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
        let active = match ? 'active' : '';
        return (<li className={active + " nav-item mr-3"}><Link to={to} className={active + " nav-link "}>{label}</Link></li>)
    }}></Route>
}
export default HeaderLink;
