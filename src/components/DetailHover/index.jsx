import React, { useState, useEffect } from "react";
import './style.css';
import { ReserveButton } from "../index";

export const DetailHover = ({id, title, subtitle, date="n.d.", reserved, authors=["Unknown"], thumb, display, logged}) => {

    const [ resStatus, setResStatus ] = useState(<h4 className="reserved">Reserved</h4>);

    const hidePopup = () => {
        display = false;
    }
    
    useEffect(() => {
        const checkAvailability = () => {
            if(!reserved){
                setResStatus(<h4 className="available">Available</h4>)
            } else {
                setResStatus(<h4 className="reserved">Reserved</h4>)
            }
        }
        checkAvailability();
    },[reserved])


    return (
        display && (
            <div className="detailPopup" onClick={hidePopup()}>
                <h1 className="popupTitle">{title}</h1>
                <h2 className="popupAuthors">{authors.join(", ")}</h2>
                <h3 className="popupSubtitle">{subtitle}</h3>
                <h4 className="popupDate">Published: {date}</h4>
                {resStatus}
                <img className="popupThumb" src={thumb}></img>
                {(!reserved && logged) && <ReserveButton id={id}/>}
            </div>)
    )
}