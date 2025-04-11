import Form from "../components/Form"

function Register() {
    console.log("Inside register page")
    return <Form route="/api/user/register/" method="register" />
}

export default Register