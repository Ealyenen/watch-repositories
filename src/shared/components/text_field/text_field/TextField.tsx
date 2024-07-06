import React, { useEffect, useState } from "react";
import "../styles/textField.css"
import { ThemeColor, primary } from "../../../../theme/theme";

interface Props {
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    width?: string
    color?: ThemeColor
    label?: string
}

const TextField: React.FC<Props> = ({ value, onChange, width = "300px", color = primary, label }) => {
    const [inputValue, setInputValue] = useState("")
    const [focus, setFocus] = useState(false)

    useEffect(() => {
        if (value) setInputValue(value)
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        onChange && onChange(e)
    }


    return (
        <div className="text-field-wrap" style={{ width: width }}>
            <input
                className="text-field"
                style={{ borderColor: color.main, color: color.main }}
                value={inputValue}
                onChange={handleChange}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            <fieldset className="text-fieldset"
                style={{
                    borderColor: color.main,
                    color: color.main,
                    borderRadius: focus ? "6px" : "0px",
                    borderLeft: focus ? "1px solid" : "none",
                    borderTop: focus ? "1px solid" : "none",
                    borderRight: focus ? "1px solid" : "none",
                    borderBottom: "1px solid",
                }}
            >
                <legend>{label}</legend>
            </fieldset>
        </div>
    )
}

export default TextField