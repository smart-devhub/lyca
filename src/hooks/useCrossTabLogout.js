import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
//@import redux slices
import { store } from 'store/store';
import { reset } from 'store/slices/authSlice';
import { handleGenericApiCall } from 'data/commonService';

let isLoggingOut = false;
const TOKEN_KEY = 'token';
const CHANNEL_NAME = 'auth_channel';

const broadcastLogout = () => {
  if ('BroadcastChannel' in window) {
    const logoutChannel = new BroadcastChannel(CHANNEL_NAME);
    logoutChannel.postMessage('logout');
    logoutChannel.close();
  } else {
    localStorage.removeItem('logout');
    localStorage.setItem('logout', Date.now().toString());
  }
};

export const logout = () => {
  const token = localStorage.getItem('token');
  if (!token) return;

  handleGenericApiCall({
    path: '/auth/logout',
    payload: {
      token,
    },
    onSuccessCallback: () => {
      isLoggingOut = true;
      localStorage.removeItem(TOKEN_KEY);
      localStorage.clear();
      store.dispatch(reset());
      broadcastLogout();
      const redirectUrl = `${window.location.pathname}#/auth/login`;
      window.location.replace(redirectUrl);
    },
  });
};

const useCrossTabLogout = (timeoutDuration = 30 * 60000) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { token } = useSelector(state => state.auth);

  const handleLogout = useCallback(() => {
    if (isLoggingOut) return;

    dispatch(reset());
    localStorage.removeItem(TOKEN_KEY);
    localStorage.clear();

    navigate('/auth/login', { replace: true });
  }, [dispatch, navigate]);

  /*
  const validateToken = useCallback(async () => {
      try {
        await getData('/callcentre/validateUser');
      } catch (error) {
        logout();
      }
    }, [logout]);
*/

  useEffect(() => {
    // if (location?.pathname?.includes('auth') && token) {
    //   navigate('/', { replace: true });
    //   return;
    // }

    if (!location?.pathname?.includes('auth') && !token) {
      logout();
      return;
    }

    if (token && !location?.pathname?.includes('auth')) {
      //   validateToken();
    }
  }, [logout, location?.pathname, token]);

  useEffect(() => {
    let timeOutID;
    const events = [
      'mousemove',
      'mousedown',
      'touchstart',
      'scroll',
      'click',
      'keydown',
    ];

    const resetTimer = () => {
      clearTimeout(timeOutID);
      timeOutID = setTimeout(logout, timeoutDuration);
    };

    events.forEach(event => {
      document.addEventListener(event, resetTimer, true);
    });

    return () => {
      clearTimeout(timeOutID);
      events.forEach(event => {
        document.removeEventListener(event, resetTimer, true);
      });
    };
  }, [logout, timeoutDuration]);

  useEffect(() => {
    let channel;

    if ('BroadcastChannel' in window) {
      channel = new BroadcastChannel(CHANNEL_NAME);
      channel.onmessage = event => {
        handleLogout(event.data);
      };
    } else {
      const handleStorageEvent = event => {
        handleLogout(event.key);
      };

      window.addEventListener('storage', handleStorageEvent);
      return () => window.removeEventListener('storage', handleStorageEvent);
    }

    return () => {
      channel?.close();
    };
  }, [handleLogout]);
};

export default useCrossTabLogout;
