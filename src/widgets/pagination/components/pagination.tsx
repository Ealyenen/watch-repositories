import React, { SyntheticEvent } from "react";
import { Typography } from "../../../shared/components/typography";
import { Button } from "../../../shared/components/button";
import { Flex } from "../../../shared/components/flex";

interface Props {
    pages: number[] | string[]
    currentPage?: number | string
    onChange?: (e: SyntheticEvent, v: number | string) => void
}

const Pagination: React.FC<Props> = ({ pages, currentPage, onChange }) => {

    const handleChange = (e:SyntheticEvent, page:number|string) => {
        onChange && onChange(e, page)
    }

    return (
        <Flex gap={4}>
            {pages.map((page) => {
                return (
                    <Button
                        key={page}
                        variant={page === currentPage ? 'contained' : 'outlined'}
                        onClick={(e) => handleChange(e, page)}
                    >
                        <Typography variant="btn">
                            {page}
                        </Typography>
                    </Button>
                )
            })}
        </Flex>
    )
}

export default Pagination