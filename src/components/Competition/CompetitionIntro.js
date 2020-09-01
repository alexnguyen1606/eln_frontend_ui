import React, { Component, Fragment, useState, useEffect } from 'react';
import TitleIntro from '../common/TitleIntro';
import ItemCompetition from './round-test/ItemCompetition';
import { post } from './../../apis/RootApi'
function CompetitionIntro() {
    const [listCompetition, setListCompetition] = useState([])
    const showCompetition = () => {
        if (listCompetition.length > 0) {
            return listCompetition.map((item, i) => {
                return <ItemCompetition competition={item} key={i}></ItemCompetition>
            })
        }
        return ""
    }
    const loadData = () => {
        post("/api/v2/competition/list/all?size=6", {}).then((res) => {
            let { data } = res.data;
            console.log(data);
            if (data) {
                setListCompetition(data)
            }
        })
    }
    useEffect(() => {
        loadData();
    }, [])
    return (
        <div className="bg-gray mt-5 mb-5 container-fluid">
            <div className="container pt-3 pb-5  ">
                <TitleIntro title="Cuộc thi nổi bật" ></TitleIntro>
                <div className="row">
                    {showCompetition()}
                </div>
            </div>
        </div>


    );

}

export default CompetitionIntro;