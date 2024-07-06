export type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "btn" | "subtitle" | "txt" | "hint" | "thin" | "bold" | "link"

export interface Props {
    variant?: Variant
    color?: string
    sx?: React.CSSProperties
    children?: React.ReactNode
    hoverColor?: string
}