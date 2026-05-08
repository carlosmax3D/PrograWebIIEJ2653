import { useForm } from 'react-hook-form';
function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const validar = ()=>{console.log("hola!")}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
    <input type="text" style={{backgroundColor: errors.email? 'red' : 'green'}} {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <p>Email is required and must be valid</p>}
      <label>Password</label>
      <input type="password" {...register("password", { required: true, validate: validar })} />
      {errors.password && <p>Password is required</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
export default LoginForm;