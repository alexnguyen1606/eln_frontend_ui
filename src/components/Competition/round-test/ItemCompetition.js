import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../../constants/Config';
import handleDate from '../../../utils/HandleDate'
function ItemCompetition(props) {
    let { competition } = props;
    const showRegister = () => {
        if (competition.timeEnd && competition.timeStart) {
            return handleDate(competition.timeStart) + " / " + handleDate(competition.timeStart)
        }
        return "Không giới hạn thời gian"
    }
    return (
        <div className="col-md-4 mt-3 d-flex">
            <Link to={"/competition/detail/" + competition.id} className="item">
                <div className="card h-100">
                    <img className="card-img-top" src={API_URL + competition.imageCompetition} alt="Card image cap"></img>
                    <div className="card-body">
                        <h4 className="card-title">{competition.nameCompetition}</h4>
                        <div>
                            <h6 className="text-muted text-info">Admin</h6>
                            <small><i className="fa fa-clock-o fa-1x icon"></i>{showRegister()}</small>
                        </div>

                    </div>
                </div>
            </Link>

        </div>
    );
}

export default ItemCompetition;