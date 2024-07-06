import { GET_REPPOSITORY } from "../query/query";
import { client } from "../../../shared/http/appolo/appoloClient";


export const getReppository = async (owner: string, name: string) => {
  return new Promise((resolve, reject) => {
    client.query({
      query: GET_REPPOSITORY,
      variables: {
        owner: owner,
        name: name
      }
    }).then((data) => {
      if (data.data.repository) {
        resolve(data.data.repository)
      }else reject(data)
    })
  })
}