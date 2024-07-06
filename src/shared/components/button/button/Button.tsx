import React, { SyntheticEvent } from "react";
import "../css/button.css";
import { primary } from "../../../../theme/theme";
import { ThemeColor } from "../../../../theme/theme";

interface Props {
    onClick?: (e: SyntheticEvent) => void
    children?: React.ReactNode
    variant?: 'outlined' | 'contained'
    color?: ThemeColor
    sx?: React.CSSProperties
    disabled?:boolean
}

const Button:React.FC<Props> = ({ onClick, children, variant='contained', color=primary, sx, disabled=false }) => {

    const variants = {
        'contained': {
            backgroundColor: color?.main,
            color: color?.contrast,
        },
        'outlined': {
            backgroundColor: "transparent",
            border: "1px solid",
            borderColor: color?.main,
            color: color?.main
        }
    }

    return (
        <button disabled={disabled} className="btn" onClick={onClick && onClick} style={{...variants[variant], ...sx}}>
            {children}
        </button>
    )
}

export default Button