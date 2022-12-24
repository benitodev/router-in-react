import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../models"
import { resetUser, userKey } from "../redux/states/user"
import { clearLocalStorage } from "../utilities/LocalStorage.utility"

const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logout = () => {
    clearLocalStorage(userKey)
    dispatch(resetUser)
    navigate(PublicRoutes.LOGIN, {replace: true})

  }
  return (
    <button onClick={logout}>Log out</button>
  )
}
export default Logout