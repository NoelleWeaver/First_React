import React from "react";
import { useState } from "react"

const Question = ({ title, info}) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
            </header>
            <p>{info}</p>
        </article>
    )
}

export default Question;