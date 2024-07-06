import React from "react";
import "../style/circle.css"
import { primary } from "../../../../theme/theme";

interface Props {
    size?: number
    color?: string
}

const Circle:React.FC<Props> = ({size=30, color=primary.main}) => {

    return(
        <div className="circle" style={{width: size+"px", height: size+"px", backgroundColor: color}}/>
    )
}

export default Circle