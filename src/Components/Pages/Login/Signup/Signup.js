import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './Signup.css'


const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => console.log(data);
    return (
        <div>

            <div className='flex justify-center items-center lg:mt-16 mt-10 lg:p-0 p-5'>
                <div className='card border w-96 '>
                    <div className='card-body'>
                        <h2 className="text-center text-2xl font-bold">Create your account </h2>

                        {/* ----------- FORM  -----------  */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* ----------- FIRST NAME  -----------  */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="input rounded-none input-black w-full max-w-xs p-0"
                                    {...register("firstname", {
                                        required: {
                                            value: true,
                                            message: 'Firstname is required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.firstname.message}</span>}
                                </label>
                            </div>



                            {/* ----------- LAST NAME  -----------  */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="input rounded-none input-black w-full max-w-xs p-0 "
                                    {...register("lastname", {
                                        required: {
                                            value: true,
                                            message: 'Last name is required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.lastname?.type === 'required' && <span className="label-text-alt text-red-500">{errors.lastname.message}</span>}
                                </label>
                            </div>


                            {/* ----------- USERNAME OR EMAIL  -----------  */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="email"
                                    placeholder="Username or Email"
                                    className="input rounded-none input-black w-full max-w-xs p-0"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>



                            {/* ----------- PASSWORD  -----------  */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input rounded-none input-black w-full max-w-xs p-0"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>



                            {/* ----------- CONFIRM PASSWORD  -----------  */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="input rounded-none input-black w-full max-w-xs p-0"
                                    name="confirmPassword"
                                    {...register("confirmPassword", {
                                        validate: value =>
                                            value === password.current || "The passwords do not match"
                                    })}
                                />
                                <label className="label">
                                    {errors.confirmPassword && <span className="label-text-alt text-red-500">{errors.confirmPassword.message}</span>}
                                </label>


                            </div>



                            <input className='btn btn-primary w-full max-w-xs mt-4 text-white' type="submit" value="Create an account" />

                        </form>


                        <p className='text-center'>Already have an account?
                            <span className='text-primary'> Login here</span>
                        </p>

                        <div class="divider">OR</div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;