import React from "react";
import { primary, ThemeColor } from "../../../../theme/theme";
import "../style/preloader.css"

interface Props {
    size?: number
    color?: ThemeColor
}

const Preloader: React.FC<Props> = ({ size = 60, color = primary }) => {

    return (
        <>
            <div
                className="preloader"
                style={{
                    width: size + "px",
                    height: size + "px",
                    backgroundColor: color.main,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div
                    className="preloader-center"
                    style={{
                        width: (size / 1.6) + "px",
                        height: (size / 1.6) + "px",
                        backgroundColor: color.contrast
                    }}
                />
            </div>
        </>
    )
}

export default Preloader