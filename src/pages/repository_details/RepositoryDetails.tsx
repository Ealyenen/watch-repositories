import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RepppoDetailsStore } from "./store/repositoryDetails.store";
import { useInstance, provider } from "react-ioc";
import { observer } from "mobx-react-lite";
import { Container } from "../../shared/components/container";
import { Typography } from "../../shared/components/typography";
import { Flex } from "../../shared/components/flex";
import { Preloader } from "../../shared/components/preloader";
import { neutral, primary } from "../../theme/theme";
import { Star } from "../../shared/components/star";
import { Languages } from "../../widgets/languages";
import { Link } from "../../shared/components/link";
import { Avatar } from "../../widgets/avatar";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "../../shared/components/button";
import { HOME_ROUTE } from "../../router/routes";

const RepositoryDetails: React.FC = provider(RepppoDetailsStore)(observer(() => {
    const store = useInstance(RepppoDetailsStore)
    const params = useParams()

    useEffect(() => {
        if (params && params.owner && params.name) {
            store.getRepositoryData(params.owner, params.name)
        }
    }, [])

    if (store.getLoading()) {
        return (
            <Container sx={{ height: "50vh" }}>
                <Flex flexDirection="column" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                    <Preloader />
                    <Typography variant="subtitle" sx={{ marginTop: "20px" }} color={primary.main}>
                        Ожидаются данные
                    </Typography>
                </Flex>
            </Container>
        )
    } else if (store.getError()) {
        return (
            <Container sx={{ padding: "20px" }}>
                <Typography variant="subtitle" sx={{ textAlign: "center" }}>
                    Произошла ошибка при попытке загрузить данные
                </Typography>
            </Container>
        )
    }

    return (
        <Container sx={{ paddingTop: "60px" }}>
            <div style={{paddingLeft: "20px"}}>
                <RouterLink to={HOME_ROUTE} style={{ textDecoration: "none" }}>
                    <Button variant="outlined" color={primary}>
                        <Typography>
                            К репозиториям
                        </Typography>
                    </Button>
                </RouterLink>
            </div>
            <Flex justifyContent="space-between" gap={10} sx={{marginTop: "40px"}}>
                <div style={{ flex: 1, padding: "0px 20px 40px 20px" }}>
                    <Typography variant="h6" sx={{ wordBreak: "break-all" }}>
                        {params.name}
                    </Typography>
                    <Flex gap={10} alignItems="center">
                        {store.getLastPush() &&
                            <Typography>
                                {store.getLastPush()}
                            </Typography>
                        }
                        <Flex alignItems="center" gap={6}>
                            <Star stars={store.getStars()} />
                            <Typography color={neutral.main}>
                                {store.getStars()}
                            </Typography>
                        </Flex>
                    </Flex>
                    {store.getLanguages() && store.getLanguages().length > 0 && <Languages langs={store.getLanguages()} />}
                    {store.getDescription() &&
                        <Typography sx={{ marginTop: "20px", textIndent: "10px" }}>
                            {store.getDescription()}
                        </Typography>
                    }
                </div>
                <Flex flexDirection="column" gap={20} alignItems="center" sx={{ maxWidth: "280px", paddingLeft: "20px" }}>
                    {store.getAvatarLink() && <Avatar src={store.getAvatarLink()} alt={params.owner} />}
                    <Link href={store.getOwnerUrl()} mode="newWindow" variant="subtitle">
                        {params.owner}
                    </Link>
                </Flex>
            </Flex>
        </Container>
    )
}))

export default RepositoryDetails