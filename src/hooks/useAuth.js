import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isAuth = useSelector(authSelectors.getIsAuth);
  const IsRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);
  const user = useSelector(authSelectors.getUser);

  return { isAuth, IsRefreshingUser, user };
};
