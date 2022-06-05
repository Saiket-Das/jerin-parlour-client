import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className='w-full bg-red-100'>

            {/* ----------- FORM  -----------  */}
            <form onSubmit={handleSubmit(onSubmit)} className='p-9'>

                {/* ----------- USER NAME  -----------  */}
                <div className='flex items-center gap-96'>
                    <div className="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Service title</span>
                        </label>
                        <input
                            type="name"
                            placeholder="Your name"
                            className="input review-name"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'name is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>



                    {/* ----------- USER EMAIL  -----------  */}
                    <div className="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">What is your name?</span>
                        </label>
                        <input
                            type="img"
                            placeholder="Your email"
                            className="input w-full max-w-xs"
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
                </div>


                {/* ----------- DESCRIPTION  -----------  */}
                <div className="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">What is your name?</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Description"
                        className="textarea review-comment"
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



                <input className='btn btn-primary w-56 max-w-xs mt-4 text-white' type="submit" value="Submit" />

            </form>

        </div>
    );
};

export default AddService;