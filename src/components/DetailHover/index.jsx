import React, { useState } from "react";
import './style.css';

export const DetailHover = ({title, subtitle, authors=["Unknown"], thumb, display}) => {
    const hidePopup = () => {
        display = false;
    }

    return (
        display && (
            <div className="detailPopup" onClick={hidePopup()}>
                <h1>{title}</h1>
                <h2>{authors}</h2>
                <h3>{subtitle}</h3>
                <img src={thumb}></img>
            </div>)
    )
}