import { NavLink } from 'react-router-dom';
import LoginForm from '../../components/LoginRegisterForm/LoginRegisterForm';
const imgUrl = new URL('../../assets/images/logo-bonus.svg', import.meta.url).href;

function Login() {
  return (
    <div className="bg-gradient-to-b from-[#1f3756] to-[#141539]">
    <div className="mx-auto bg-gradient-to-b from-[#1f3756] to-[#141539] h-screen flex flex-col md:max-w-sm">

      <img
        src={imgUrl}
        className="mx-auto self-end pt-14 w-48 animate__animated animate__jackInTheBox animate__slower"
      ></img>
      <div className="">
        <h1 className="mx-12 text-white py-2 font-bold text-2xl">Login</h1>
        <p className="mx-12 text-gray-400 pb-4">Please sing in to continue</p>
      </div>

      <LoginForm text="Login" route={'login'} />
      <p className="mx-12 text-gray-400 pb-4 text-center my-6 pt-28">
        Dont have an account?{' '}
        <NavLink to="/register" className="font-bold text-[#0DF5E3]">
          Sign up
        </NavLink>
      </p>
    </div>
    </div>
  );
}

export default Login;
