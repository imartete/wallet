import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

// export const useAuth = () => {
//   const isAuth = useSelector(authSelectors.getIsAuth);
//   const IsRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);
//   const user = useSelector(authSelectors.getUser);

//   return { isAuth, IsRefreshingUser, user };
// };

// import authSelectors from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isAuth = useSelector(authSelectors.getIsAuth);
  const isRefreshing = useSelector(authSelectors.getIsRefreshingUser);
  const user = useSelector(authSelectors.getUser);
  const loading = useSelector(authSelectors.getLoading);
  const error = useSelector(authSelectors.getError);
  const balance1 = useSelector(authSelectors.getBalance);
  const balance = balance1 ? balance1.toFixed(2) : balance1;
  return {
    isAuth,
    isRefreshing,
    user,
    error,
    loading,
    balance,
  };
};

// for example: const   {isRefreshing, user} = useAuth();

// you will have    const isRefreshing = state.auth.isRefreshingUser;
// and         const user = state.auth.user; ;
