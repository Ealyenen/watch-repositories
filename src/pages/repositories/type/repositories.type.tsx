export interface Repository {
    id: string | number
    name: string,
    owner: string,
    url: string
    stars?: number
    lastCommitData?: string
}

interface GitHubRepositoryOwner {
    login: string
}

interface GitHubDefaultBranchRef {
    target?: { committedDate?: string }
}

export interface GitHubRepositoryData {
    id: string | number
    name: string
    url: string
    stargazerCount?: number | string
    owner: GitHubRepositoryOwner
    defaultBranchRef?: GitHubDefaultBranchRef
}

export interface RepNode {
    node: GitHubRepositoryData
}