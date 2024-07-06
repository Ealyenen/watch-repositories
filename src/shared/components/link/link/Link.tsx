import React from "react";
import "../style/link.css"
import { Typography } from "../../typography";
import { warning, ThemeColor } from "../../../../theme/theme";
import { Variant } from "../../typography";

interface Props {
    children?: React.ReactNode
    href?: string
    mode?: 'newWindow'
    color?: ThemeColor
    variant?: Variant
}

const Link: React.FC<Props> = ({ children, href, mode, color = warning, variant="link" }) => {

    return (
        <>
            <a href={href} className="a-link" target={mode === 'newWindow' ? '_blank' : '_self'}>
                <span>
                    <Typography color={color.main} hoverColor={color.dark} variant={variant}>
                        {children}
                    </Typography>
                </span>
            </a>
        </>
    )
}

export default Link