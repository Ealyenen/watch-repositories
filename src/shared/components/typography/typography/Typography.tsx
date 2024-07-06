import React, { useState } from "react";
import "../styles/typography.css"
import { Props } from "../props/props";

const Typography: React.FC<Props> = ({ variant = "txt", color, hoverColor, sx, children }) => {
    const [colorChange, setColorChange] = useState(false)

    const fontStyles = {
        "h1": {
            fontSize: "7rem",
            fontWeight: 600
        },
        "h2": {
            fontSize: "6rem",
            fontWeight: 600
        },
        "h3": {
            fontSize: "5rem",
            fontWeight: 600
        },
        "h4": {
            fontSize: "4rem",
            fontWeight: 600
        },
        "h5": {
            fontSize: "3rem",
            fontWeight: 600
        },
        "h6": {
            fontSize: "2rem",
            fontWeight: 600
        },
        "btn": {
            fontSize: "1rem",
            fontWeight: 400,
        },
        "subtitle": {
            fontSize: "1.2rem",
            fontWeight: 500
        },
        "txt": {
            fontSize: "1rem",
            fontWeight: 400
        },
        "thin": {
            fontSize: "1rem",
            fontWeight: 200
        },
        "bold": {
            fontSize: "1rem",
            fontWeight: 600
        },
        "hint": {
            fontSize: "0.8rem",
            fontWeight: 300
        },
        "link": {
            fontSize: "1rem",
            fontWeight: 400,
        }
    }

    const handleMouseEnter = () => {
        if (hoverColor) setColorChange(true)
    }

    const handleMouseLeave = () => {
        if (hoverColor) setColorChange(false)
    }

    return (
        <p
            style={{ transition: ".3s", color: colorChange ? hoverColor : color, cursor: hoverColor ? "pointer" : "inherit", ...fontStyles[variant], ...sx}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </p>
    )
}

export default Typography