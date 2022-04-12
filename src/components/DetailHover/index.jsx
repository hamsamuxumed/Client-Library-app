import React from "react";
import './style.css';

export const DetailHover = ({title, subtitle, date="n.d.", available, authors=["Unknown"], thumb, display}) => {
    const hidePopup = () => {
        display = false;
    }

    const checkAvailability = () => {
        if(available){
            return <h4 className="available">Available</h4>
        } else {
            return <h4 className="reserved">Reserved</h4>
        }
    }

    return (
        display && (
            <div className="detailPopup" onClick={hidePopup()}>
                <h1 className="popupTitle">{title}</h1>
                <h2 className="popupAuthors">{authors.join(", ")}</h2>
                <h3 className="popupSubtitle">{subtitle}</h3>
                <h4 className="popupDate">Published: {date}</h4>
                {checkAvailability()}
                <img className="popupThumb" src={thumb}></img>
            </div>)
    )
}