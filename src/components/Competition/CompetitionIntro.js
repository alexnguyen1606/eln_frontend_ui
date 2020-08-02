import React, { Component, Fragment } from 'react';
import TitleIntro from '../common/TitleIntro';
import ItemCompetition from './ItemCompetition';

class CompetitionIntro extends Component {
    render() {
        return (
            <div className="bg-gray mt-5 mb-5 container-fluid">
                <div className="container pt-3 pb-5  ">
                    <TitleIntro title="Cuộc thi nổi bật" ></TitleIntro>
                    <div className="row">
                        <ItemCompetition></ItemCompetition>
                        <ItemCompetition></ItemCompetition>
                        <ItemCompetition></ItemCompetition>
                        <ItemCompetition></ItemCompetition>
                        <ItemCompetition></ItemCompetition>
                        <ItemCompetition></ItemCompetition>

                    </div>
                </div>
            </div>


        );
    }
}

export default CompetitionIntro;