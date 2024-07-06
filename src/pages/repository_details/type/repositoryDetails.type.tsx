export interface State {
    loading: boolean
    error: boolean
}

export interface Lang {
    name: string
    color?: string
}

export interface Data {
    avatarLink?: string,
    ownerUrl?: string,
    description?: string,
    lastPush?: string,
    stars?: number,
    languages: Lang[]
}

interface Owner {
    avatarUrl?: string
    login?:string
    url?:string
}

export interface Language {
    name?: string
    color?: string
}

interface Languages {
    node?: Language[]
}

export interface Query {
    description?: string
    name?: string
    pushedAt?: string
    stargazerCount?:number
    owner?: Owner
    languages?: Languages
}