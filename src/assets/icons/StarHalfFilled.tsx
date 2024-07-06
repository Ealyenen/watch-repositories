import React from "react"

interface Props {
    color?: string
    fontSize?: string | number
}

const HalfStar: React.FC<Props> = ({ color="black", fontSize = "24" }) => {
    return (
        <svg width={fontSize} height={fontSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4V6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z"
                fill={color}
            />
        </svg>
    )
}

export default HalfStar