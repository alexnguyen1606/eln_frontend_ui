import React, { Component } from 'react';
import TitleIntro from '../common/TitleIntro';
import ItemNews from './ItemNews';

class NewsIntro extends Component {
    render() {
        return (
            <div className="container  mt-5 mb-5">
                <div className="row">
                    <TitleIntro title="Tin tức mới nhất"></TitleIntro>
                    <div className="col-xs-12 row">
                        <ItemNews></ItemNews>
                        <ItemNews></ItemNews>
                        <ItemNews></ItemNews>
                        <ItemNews></ItemNews>
                        <ItemNews></ItemNews>
                        <ItemNews></ItemNews>
                    </div>

                </div>

            </div>
        );
    }
}

export default NewsIntro;