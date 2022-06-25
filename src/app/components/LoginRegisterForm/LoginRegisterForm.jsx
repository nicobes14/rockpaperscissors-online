import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

LoginRegisterForm.propTypes = {
  text: PropTypes.string,
  route: PropTypes.string,
};

function LoginRegisterForm(props) {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      fetch(`/api/auth/${props.route}`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
        .then((response) => {
          if (response.status !== 200) return undefined; //todo: modal con el message error

          return response.json();
        })
        .then((json) => {
          if (!json) return null;
          localStorage.setItem('access_token', json.access_token);
          navigate('/', { replace: true });
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <form className="flex flex-col" onSubmit={formik.handleSubmit}>
      <input
        className="bg-[#38304C] outline-none pl-8 border-none rounded-2xl placeholder:text-[#828282] text-[#828282] mx-10 py-3 my-3 "
        placeholder="Email"
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
      />
      {formik.touched.userName && formik.errors.userName ? (
        <div>{formik.errors.userName}</div>
      ) : null}

      <input
        className="bg-[#201A30] focus:bg-[#38304C] outline-none pl-8 border-none rounded-2xl placeholder:text-[#828282] text-[#828282] mx-10 py-3 my-3"
        placeholder="Password"
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <button
        className="bg-[#0DF5E3] text-[#201A30] rounded-full mx-20 py-4 my-3"
        type="submit"
      >
        {props.text}
      </button>
    </form>
  );
}

export default LoginRegisterForm;
