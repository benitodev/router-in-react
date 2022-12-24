import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, Roles } from "../models";
import store, { AppStore } from "../redux/store"

interface Props {
  role: Roles;
}

const RoleGuard = ({role}: Props) => {
  const userState = useSelector((store: AppStore) => store.user) 
  return userState.role === role ? <Outlet/> : <Navigate replace to={PrivateRoutes.PRIVATE} />
}
export default RoleGuard