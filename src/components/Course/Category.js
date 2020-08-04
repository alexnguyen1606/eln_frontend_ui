import React, { Component } from 'react';
import * as api from './../../apis/RootApi';
import { NavLink } from "react-router-dom";
import toSlug from './../../utils/ToSlug'
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        api.getAll("/api/v2/course/category").then((res) => {
            let serviceResult = res.data;
            console.log(serviceResult);
            this.setState({
                categories: serviceResult.data
            })
        }).catch((error) => {
            console.log(error);
        })
    }
    showCategory = () => {
        if (this.state.categories.length > 0) {
            return this.state.categories.map((item, i) => {
                let slug = toSlug(item.name);
                let url = "/course/category/" + slug + "." + item.id + ".html";
                return (<NavLink key={i} to={url} exact activeClassName="active" className="list-group-item">{item.name}</NavLink>)
            })
        }
        return "";
    }
    render() {
        return (
            <div className="col-md-3">
                <h3>Danh mục</h3>
                <ul class="list-group list-group-flush">
                    {this.showCategory()}
                </ul>
            </div>
        );
    }
}

export default Category;