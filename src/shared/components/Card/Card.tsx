import React from 'react';
import './Card.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

interface Props {
    imageUrl: string;
    imageAltText: string;
    widgetName?: string;
    widgetDescription?: string;
    widgetCategory?: string;
}

const Card: React.FC<Props> = ({ imageUrl, imageAltText, widgetName, widgetDescription, widgetCategory }) => {
    return (
        <div className="card" data-widgetcategory={widgetCategory}>
            <div className="card-body">
                <div className="card-header flex column center">
                    <div className="card-image-container">
                        <img className="card-image" src={imageUrl} alt={imageAltText} />
                    </div>
                </div>
                <div className="card-footer flex column ">
                    <div className="widget-title">
                        {widgetName}
                    </div>
                    <div className="widget-description">
                        {widgetDescription}
                    </div>
                    <div className="card-button-container">
                        <Link to={`/create/${widgetName}`}>
                            <button className="card-button">
                                <i><FontAwesomeIcon icon={faWandMagicSparkles}></FontAwesomeIcon></i>
                                <span>Create</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;