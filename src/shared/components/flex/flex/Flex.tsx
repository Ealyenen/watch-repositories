import React from "react"

interface Props {
    children?: React.ReactNode
    alignItems?: "start" | "end" | "center" | "space-between" | string
    justifyContent?: "start" | "end" | "center" | "space-between" | string
    flexDirection?: "row" | "column"
    gap?: number
    wrap?: boolean
    sx?: React.CSSProperties
}

const Flex: React.FC<Props> = ({ children, alignItems="start", justifyContent="start", flexDirection="row", gap=0, wrap=true, sx }) => {

    return (
        <div
            style={{
                display: "flex",
                alignItems: alignItems,
                justifyContent: justifyContent,
                flexDirection: flexDirection,
                gap: gap+"px",
                flexWrap: wrap ? "wrap" : "nowrap",
                ...sx
            }}
        >
            {children}
        </div>
    )
}

export default Flex