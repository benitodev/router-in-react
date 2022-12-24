import { Suspense, lazy } from 'react'
import { Dashboard } from './pages/Private'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes, Roles } from './models'
import { AuthGuard, RoleGuard } from './guards'
import { RoutesWithNotFound } from './utilities'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'

const Login = lazy(()=> import('./pages/Login/Login'))
const Private = lazy(()=> import('./pages/Private/Private'))

function App() {

  return (
    <div className='App'>
     <Suspense fallback={<>Loading...</>}>
      <Provider store={store}>
       <BrowserRouter>
        <RoutesWithNotFound>
            <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE}/>}/>
            
            <Route path={PublicRoutes.LOGIN} element={<Login />}/>

            <Route element={<AuthGuard privateGuard={true}/>}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private/>}/>
            </Route>

            <Route element={<RoleGuard role={Roles.ADMIN} />} >
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>} />
            </Route>

            <Route path='*' element={<>Not found</>}/>
          </RoutesWithNotFound>
         </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
