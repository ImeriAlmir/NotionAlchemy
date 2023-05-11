import React from 'react';
import './Card.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
interface Props {
    imageUrl: string;
    imageAltText: string;
    widgetName?: string;

}

const Card: React.FC<Props> = ({ imageUrl, imageAltText }) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-header flex column center">
                    <div className="card-image-container">
                        <img className="card-image" src={imageUrl} alt={imageAltText} />
                    </div>
                </div>
                <div className="card-footer flex column ">
                    <div className="widget-title">
                        Digital Clock
                    </div>
                    <div className="widget-description">
                        24 hour time format
                    </div>
                    <div className="card-button-container">
                        <button className="card-button">
                            <i>
                                <FontAwesomeIcon icon={faWandMagicSparkles}></FontAwesomeIcon>
                            </i>
                            <span>Create</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;