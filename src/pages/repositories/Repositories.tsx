import { Container } from "../../shared/components/container/index";
import { Button } from "../../shared/components/button/index";
import { TextField } from "../../shared/components/text_field";
import { ReppposStore } from "./store/repositories.store";
import { useInstance, provider } from "react-ioc";
import { observer } from "mobx-react-lite";
import { Pagination } from "../../widgets/pagination";
import { Repository } from "./type/repositories.type";
import { Repositories as RepositoryBlock } from "../../widgets/repositories";
import { Flex } from "../../shared/components/flex";
import { Typography } from "../../shared/components/typography";
import { Preloader } from "../../shared/components/preloader";
import { primary } from "../../theme/theme";

const Repositories: React.FC = provider(ReppposStore)(observer(() => {
    const store = useInstance(ReppposStore)

    const handlePageChange = (page: number | string) => {
        store.setCurrentPage(page as number)
    }

    const handleChangeSearch = (value: string) => {
        store.setSearch(value)
    }

    const handleSearchClick = () => {
        store.queryRepositories()
    }

    const ReppoContent = () => {
        if (store.getLoading()) {
            return (
                <Container sx={{ height: "50vh" }}>
                    <Flex flexDirection="column" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                        <Preloader />
                        <Typography variant="subtitle" sx={{ marginTop: "20px" }} color={primary.main}>
                            Идет поиск
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
        } else if (store.getNoResults()) {
            return (
                <Container sx={{ padding: "20px" }}>
                    <Typography variant="subtitle" sx={{ textAlign: "center" }}>
                        По вашему запросу результатов не найдено
                    </Typography>
                </Container>
            )
        }
    }



    return (
        <Container sx={{ marginTop: "4vh" }}>
            <div style={{ display: "flex", gap: 2, alignItems: "center", padding: "10px" }}>
                <TextField value={store.getSearch()} label="Поиск" onChange={(e) => handleChangeSearch(e.target.value)} />
                <Button disabled={store.getLoading()} onClick={handleSearchClick} sx={{ marginLeft: "10px" }}>Поиск</Button>
            </div>
            {ReppoContent()}
            {!store.getLoading() && !store.getError() && !store.getNoResults() &&
                <>
                    <div style={{ width: "100%", overflowX: "scroll", padding: "20px", maxHeight: "70vh", overflowY: "scroll" }}>
                        {store.reppoByPage && store.reppoByPage?.length > 0 &&
                            store.reppoByPage.map((reppo: Repository) => {
                                return (
                                    <RepositoryBlock
                                        key={reppo.id}
                                        id={reppo.id}
                                        name={reppo.name}
                                        owner={reppo.owner}
                                        url={reppo.url}
                                        stars={reppo.stars}
                                        lastCommitData={reppo.lastCommitData}
                                    />
                                )
                            })
                        }
                    </div>
                    <Flex sx={{ paddingLeft: "10px", marginTop: "10px" }} justifyContent="end">
                        {store.pages && store.pages?.length > 0 &&
                            <Pagination pages={store.pages} currentPage={store.getCurrentPage()} onChange={(_, v) => handlePageChange(v)} />
                        }
                    </Flex>
                </>
            }
        </Container>
    );
}))

export default Repositories;