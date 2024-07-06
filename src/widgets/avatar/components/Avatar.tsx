import React from "react";
import { Img } from "../../../shared/components/img";

interface Props {
    src?: string
    alt?: string
    size?: number
}

const Avatar:React.FC<Props> = ({src, alt, size="200"}) => {

    return (
        <div style={{width: size+"px", height: size+"px"}}>
            <Img src={src} alt={alt}/>
        </div>
    )
}

export default Avatar