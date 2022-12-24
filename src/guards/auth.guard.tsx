import {useSelector} from 'react-redux'
import { AppStore } from '../redux/store'
import {Outlet, Navigate} from 'react-router-dom'
import { Login } from '../pages/Login'
import { PrivateRoutes, PublicRoutes } from '../models'

interface Props {
    privateGuard: boolean;
} 

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />;

export const AuthGuard = ({ privateGuard }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.name ? (
    privateGuard ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard