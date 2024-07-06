import React from "react"
import "../styles/container.css"

interface Props {
    children?: React.ReactNode
    sx?: React.CSSProperties
}

const Container:React.FC<Props> = ({children, sx}) => {

    return(
        <div className="container-wrap" style={{...sx}}>
            {children}
        </div>
    )

}

export default Container