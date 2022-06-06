import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import './AddService.css'




const AddService = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset()
    };
    return (
        <div className='w-full bg-base-100'>

            {/* ----------- FORM  -----------  */}
            <form onSubmit={handleSubmit(onSubmit)} className='p-9'>

                {/* ----------- USER NAME  -----------  */}
                <div className='lg:flex md:flex items-center lg:gap-72 md:gap-24'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Service title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter title"
                            className="input  input-bordered add-service-title"
                            {...register("productName", {
                                required: {
                                    value: true,
                                    message: 'Title is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.productName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.productName.message}</span>}
                        </label>
                    </div>



                    {/* ----------- SERVICE IMAGE  -----------  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Image</span>
                        </label>


                        <div className='border border-primary rounded-lg add-service-icon-image flex justify-center items-center pb-1'>
                            <FontAwesomeIcon
                                icon={faCloudArrowUp} className='text-primary mt-1' />

                            {/* <img className='w-6 mt-1' src={upload} alt="" /> */}
                            <input
                                type="file"
                                className="input w-24 add-service-image input-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is required'
                                    }
                                })}
                            />
                        </div>
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>
                </div>


                {/* ----------- DESCRIPTION  -----------  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold text-base">Description</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Description"
                        className="textarea textarea-bordered add-service-comment"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>



                <input className='btn btn-primary w-56 max-w-xs mt-4 text-white' type="submit" value="Submit" />

            </form>

        </div>
    );
};

export default AddService;