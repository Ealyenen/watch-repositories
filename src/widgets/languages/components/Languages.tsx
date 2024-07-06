import React from "react";
import { Flex } from "../../../shared/components/flex";
import { Typography } from "../../../shared/components/typography";
import { Circle } from "../../../shared/components/circle";
import { neutral } from "../../../theme/theme";

interface Lang {
    name: string
    color?: string
}

interface Props {
    langs?: Lang[]
}

const Languages: React.FC<Props> = ({ langs }) => {

    return (
        <Flex gap={8} sx={{marginTop: "8px"}}>
            {langs?.map((lang, index) => {
                return (
                    <Flex key={lang?.name + index} gap={4} alignItems="center">
                        {lang.color && <Circle size={16} color={lang.color}/>}
                        <Typography variant="bold" color={neutral.main}>
                            {lang.name}
                        </Typography>
                    </Flex>
                )
            })}
        </Flex>
    )
}

export default Languages