import React from "react";
import { Button } from "../../shared/components/button";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../router/routes";
import { Container } from "../../shared/components/container";
import { Typography } from "../../shared/components/typography";
import { Flex } from "../../shared/components/flex";

const FourHundredFour: React.FC = () => {

    const navigate = useNavigate()

    const handleNavigateHome = () => {
        navigate(HOME_ROUTE)
    }

    return (
        <>
            <Container>
                <Flex gap={20} alignItems="center" justifyContent="center" flexDirection="column" sx={{minHeight: "50vh"}}>
                    <Typography variant="h6">
                        404
                    </Typography>
                    <Button onClick={handleNavigateHome}>
                        <Typography>
                            На главную
                        </Typography>
                    </Button>
                </Flex>
            </Container>
        </>
    )
}

export default FourHundredFour