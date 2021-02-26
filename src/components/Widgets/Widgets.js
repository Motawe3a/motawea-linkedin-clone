import React from 'react'
import './Widgets.css'
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widget-article">
            <div className="widget-article-L">
                <FiberManualRecordIcon />
            </div>
            <div className="widget-article-R">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widget">
            <div className="widget-header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Motawea Design", "Top News - 9099 readers")}
            {newsArticle("Corona Virus: UK updates", "Top News - 886 readers")}
            {newsArticle("Tesla hits new high", "Cars & auto - 380 readers")}
            {newsArticle("bitcoin breaks $22k", "Crypto - 8000 readers")}
            {newsArticle("Is Redux Too Good", "Code - 6500 readers")}
            {newsArticle("What is the coming course", "Crypto - 9000 readers")}
        </div>
    )
}

export default Widgets
