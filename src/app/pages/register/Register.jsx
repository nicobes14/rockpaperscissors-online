import RegisterForm from '../../components/LoginRegisterForm/LoginRegisterForm'

function Register() {
  return (
    <div className="container mx-auto bg-gradient-to-b from-[#1f3756] to-[#141539] h-screen flex flex-col">
        <RegisterForm text='Register' route={'register'}/>
    </div>
  )
}

export default Register