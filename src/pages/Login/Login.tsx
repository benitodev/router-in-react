import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PrivateRoutes, PublicRoutes, Roles } from "../../models"
import { createUser, resetUser, userKey } from "../../redux/states/user"
import { getMorty } from "../../services"
import { clearLocalStorage } from "../../utilities"


const Login = () => {
  const distpach = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    clearLocalStorage(userKey)
    distpach(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
  }, [])

  const login = async() => {
    try {
      const result = await getMorty()
      distpach(createUser({...result, role: Roles.ADMIN}))
      navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true})
    } catch (error) {
        
    }
  }
  return (
    <div>
      <h2>Welcome to the Login</h2>
      <button onClick={login}></button>
    </div>
  )
}
export default Login