import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isAuth = useSelector(authSelectors.getIsAuth);
  const isRefreshing = useSelector(authSelectors.getIsRefreshingUser);
  const user = useSelector(authSelectors.getUser);
  const loading = useSelector(authSelectors.getLoading);
  const error = useSelector(authSelectors.getError);

  return {
    isAuth,
    isRefreshing,
    user,
    error,
    loading,
  };
};

// for example: const   {isRefreshing, user} = useAuth();

// you will have    const isRefreshing = state.auth.isRefreshingUser;
// and         const user = state.auth.user; ;
