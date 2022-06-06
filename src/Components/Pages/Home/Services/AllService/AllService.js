import React from 'react';
import { useQuery } from 'react-query';
import ServiceList from '../ServiceList/ServiceList';



const AllService = () => {

    const { data: services, isLoading } = useQuery('productList', () =>
        fetch('http://localhost:5000/services')
            .then(res => res.json())
    )
    if (isLoading) {
        return <p>Loadin</p>
    }
    return (
        <div className='mx-auto py-9 lg:px-36'>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-28 lg:p-0 p-10'>
                {
                    services.map(service => <ServiceList
                        key={service._id}
                        service={service}
                    ></ServiceList>)
                }
            </div>


        </div>
    );
};

export default AllService;