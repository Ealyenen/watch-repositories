import { GET_REPOSITORIES } from "../query/query";
import { client } from "../../../shared/http/appolo/appoloClient";

interface ParamsData {
  last?: number, first?: number, after?: string, before?: string, query?:string
}

export const getReppositories = async (params: ParamsData) => {
  return new Promise((resolve, reject) => {
    client.query({
      query: GET_REPOSITORIES,
      variables: {
        query: "stars>0",
        type: "REPOSITORY",
        ...params
      }
    }).then((data) => {
      if (data.data.search) {
        resolve(data.data.search)
      }else reject(data)
    })
  })
}