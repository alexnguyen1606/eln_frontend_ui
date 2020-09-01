import React, { useEffect, useState } from 'react'
import { get } from './../../apis/RootApi';
import toSlug from "./../../utils/ToSlug";
import { NavLink } from 'react-router-dom'
function Category() {
    const [categories, setCategories] = useState([])
    const getCategory = () => {
        get("/api/v2/competition/categories/all").then((res) => {
            let { data } = res.data;
            setCategories(data)
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getCategory();
    }, [])
    const showCategory = () => {
        if (categories.length > 0) {
            return categories.map((item, i) => {
                let slug = toSlug(item.nameCompetition);
                let url = "/competition/category/" + slug + "." + item.id + ".html";
                return (<NavLink key={i} to={url} exact activeClassName="active" className="list-group-item">{item.nameCompetition}</NavLink>)
            })
        }
        return "";
    }
    return (
        <div className="col-md-3">
            <h3>Danh mục</h3>
            <ul class="list-group list-group-flush">
                {showCategory()}
            </ul>
        </div>
    )
}

export default Category
