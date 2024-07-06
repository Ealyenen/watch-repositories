import {lazy} from "react";

const Repositories = lazy(() => import('../pages/repositories/Repositories'))
const RepositoryDetails = lazy(() => import('../pages/repository_details/RepositoryDetails'))
const FourHundredFour = lazy(() => import('../pages/four_hungred_four/FourHundredFour'))

export const HOME_ROUTE = '/'
export const REPOSITORY_ROUTE = '/repositories/:owner/:name'
export const REPOSITORIES_ROUTE = '/repositories'

export const publicRoutes = [
    { path: HOME_ROUTE, Component: <Repositories/> },
    { path: REPOSITORY_ROUTE, Component: <RepositoryDetails/> },
    { path: '*', Component: <FourHundredFour/>}
  ]