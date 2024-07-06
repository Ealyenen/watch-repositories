import { makeAutoObservable } from "mobx";
import moment from "moment";
import { getReppository } from "../../../features/get_reppository/request/request";
import { State, Lang, Data, Language } from "../type/repositoryDetails.type";

export class RepppoDetailsStore {

    state: State = {
        loading: false,
        error: false,
    }

    data:Data = {
        avatarLink: "",
        ownerUrl: "",
        description: "",
        lastPush: "",
        stars: 0,
        languages: []
    }

    //get/se state

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

    //get set data

    getAvatarLink() {
        return this.data.avatarLink
    }

    setAvatarLink(link: string | undefined | null) {
        this.data.avatarLink = link || ""
    }

    getOwnerUrl() {
        return this.data.ownerUrl
    }

    setOwnerUrl(url: string | undefined | null) {
        this.data.ownerUrl = url || ""
    }

    getDescription() {
        return this.data.description
    }

    setDescription(str: string | undefined | null) {
        this.data.description = str || ""
    }

    getLastPush() {
        return this.data.lastPush
    }

    setLastPush(str: string | undefined | null) {
        this.data.lastPush = str || ""
    }

    getStars() {
        return this.data.stars
    }

    setStars(num: number | null | undefined) {
        this.data.stars = num || 0
    }

    getLanguages() {
        return this.data.languages
    }

    setLanguages(langs: Lang[]) {
        this.data.languages = langs
    }


    //request

    getRepositoryData(owner: string, name: string) {
        this.setError(false)
        getReppository(owner, name).
            catch(() =>
                this.setError(true)
            ).
            then((data: any) => {
                if (data){
                    this.setAvatarLink(data?.owner?.avatarUrl)
                    this.setOwnerUrl(data?.owner?.url)
                    this.setDescription(data?.description)
                    this.setLastPush(data?.pushedAt && data?.pushedAt?.length>0 ? moment(data?.pushedAt).format("DD.MM.YYYY") : "")
                    this.setStars(data?.stargazerCount)
                    this.setLanguages(data?.languages?.nodes.map((lang: Language)=>{
                        return {
                            name: lang.name,
                            color: lang.color
                        }
                    }))
                }else this.setError(true)
                this.setLoading(false)
            })
    }

    constructor() {
        makeAutoObservable(this)
    }
}