import { lazy } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Logout } from "../../components"
import { PrivateRoutes } from "../../models"
import { RoutesWithNotFound } from "../../utilities"

const Home = lazy(()=> import('./Home/Home'))
const Dashboard = lazy(()=> import('./Dashboard/Dashboard'))


const Private = () => {
  console.log('hi')
  return (
    <RoutesWithNotFound>
      <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD}/>} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>} />
      <Route path={PrivateRoutes.HOME} element={<Home/>} />
    </RoutesWithNotFound>
  )
}
export default Private