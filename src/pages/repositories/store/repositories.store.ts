import { makeAutoObservable } from "mobx";
import { RepNode, Repository } from "../type/repositories.type";
import { getReppositories as queryReppo } from "../../../features/get_reppositiories";
import moment from "moment";

interface Data {
    totalQty: number
    repositories: Repository[]
}

export class ReppposStore {

    constants = {
        pageLimit: 10,
        pageQtyLimit: 10
    }

    state = {
        currentPage: 1,
        search: "",
        loading: false,
        error: false,
        noResults: false
    }

    data: Data = {
        totalQty: 0,
        repositories: []
    }

    //get/set state

    getCurrentPage() {
        return this.state.currentPage
    }

    setCurrentPage(page: number) {
        this.state.currentPage = page
        localStorage.setItem("reppo-current-page", JSON.stringify(page))
    }

    getSearch() {
        return this.state.search
    }

    setSearch(str: string | null | undefined) {
        const noSpaceStr = str?.replace(/\s/g, "")
        if (noSpaceStr && noSpaceStr?.length > 0) {
            this.state.search = str || ""
            if (str && str?.length > 0) {
                localStorage.setItem("reppo-search", str)
            } else if (str?.length === 0) {
                localStorage.removeItem("reppo-search")
            }
        } else {
            this.state.search = ""
            localStorage.removeItem("reppo-search")
        }
    }

    getLoading() {
        return this.state.loading
    }

    setLoading(value: boolean) {
        this.state.loading = value
    }

    getError() {
        return this.state.error
    }

    setError(value: boolean) {
        this.state.error = value
    }

    getNoResults() {
        return this.state.noResults
    }

    setNoResults(value: boolean) {
        this.state.noResults = value
    }

    //get/set data

    setTotalQty(num: number) {
        this.data.totalQty = num
    }

    getRepositories() {
        return this.data.repositories
    }

    setRepositories(repositories: Repository[]) {
        this.data.repositories = repositories
    }

    //other get/set

    get pages() {
        const totalPages = Math.ceil(this.data.totalQty / this.constants.pageLimit)
        const pagesQty = Math.min(totalPages, this.constants.pageQtyLimit)
        return Array.from({ length: pagesQty }, (_, i) => i + 1)
    }

    get reppoByPage() {
        const first = (this.state.currentPage - 1) * this.constants.pageLimit
        const last = (this.state.currentPage * this.constants.pageLimit)
        return this.data.repositories.slice(first, last)
    }

    setDefaultSettings() {
        return new Promise((resolve) => {
            const page = Number(localStorage.getItem("reppo-current-page"))
            const search = localStorage.getItem("reppo-search")
            if (page) {
                this.setCurrentPage(page)
            }
            if (search) {
                this.setSearch(search)
            }
            resolve(true)
        })
    }

    //requests

    queryRepositories() {
        this.setError(false)
        this.setNoResults(false)
        this.setLoading(true)
        queryReppo({
            after: "",
            first: this.constants.pageLimit * this.constants.pageQtyLimit,
            query: this.state.search?.length > 0 ? `${this.state.search} in:name` : import.meta.env.VITE_APP_DEFAULT_SEARCH
        }).then((data: any) => {
            if (data) {
                this.setTotalQty(data.repositoryCount)
                if (data.edges?.length > 0) {
                    if (data.repositoryCount<(this.state.currentPage * this.constants.pageLimit)-1){
                        this.setCurrentPage(1)
                    }
                    this.setRepositories(data.edges.map((repNode: RepNode) => {
                        return ({
                            id: `${repNode?.node?.owner?.login}/${repNode?.node?.name}`,
                            name: repNode?.node?.name,
                            url: repNode?.node?.url,
                            stars: repNode?.node?.stargazerCount,
                            owner: repNode?.node?.owner?.login,
                            lastCommitData: moment(repNode?.node?.defaultBranchRef?.target?.committedDate).format("DD.MM.YYYY") || null
                        })
                    }))
                } else {
                    this.setNoResults(true)
                }
            } else {
                this.setError(true)
            }
            this.setLoading(false)
        })
    }

    constructor() {
        makeAutoObservable(this)
        this.setDefaultSettings().then(() => {
            this.queryRepositories()
        })
    }
}