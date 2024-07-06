import React from "react";
import "../css/img.css"
import { neutral } from "../../../../theme/theme";

interface Props {
    src?: string
    alt?: string
    sx?: React.CSSProperties
}

const Img: React.FC<Props> = ({ src, alt, sx }) => {

    return (
        <img
            className="img-styled"
            style={{ 
                boxShadow: `4px 4px 20px 0px ${neutral.light}`,
                ...sx
             }}
            src={src}
            alt={alt}
        />
    )
}

export default Img