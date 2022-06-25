import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MultiplayerHome = () => {
  let navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem('access_token');
    if (!token) navigate('/login', { replace: true });

    token = { token };

    fetch('/api/auth/verifytoken', {
      method: 'POST',
      body: JSON.stringify(token),
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
    }).then((response) => {
      if (response.status !== 200) {
        localStorage.removeItem('access_token');
        navigate('/login', { replace: true });
      }
    });
  }, []);

  return <div>HOLA</div>;
};

MultiplayerHome.propTypes = {};

export default MultiplayerHome;
