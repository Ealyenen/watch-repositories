import React from "react";
import VoidStar from "../../../../assets/icons/StarBorderFilled";
import HalfStar from "../../../../assets/icons/StarHalfFilled";
import FilledStar from "../../../../assets/icons/StarFilled";
import { primary } from "../../../../theme/theme";

interface Props {
    stars?: number,
    middleValue?: number
    color?: string
    fontSize?: string | number
}


const Star: React.FC<Props> = ({ stars, middleValue=100, color=primary.main, fontSize }) => {

    const starSwither = () => {
        if (stars) {
            if (stars < middleValue) {
                return <HalfStar color={color} fontSize={fontSize}/>
            } else return <FilledStar color={color} fontSize={fontSize}/>
        } else if (stars === 0) {
            return <VoidStar color={color} fontSize={fontSize}/>
        } else return ""
    }

    return (
        <>
            {starSwither()}
        </>
    )
}

export default Star