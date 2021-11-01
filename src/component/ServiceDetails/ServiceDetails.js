import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm, reset } from 'react-hook-form';
import { useParams } from 'react-router';
import './ServiceDetails.css'
import useAuth from '../../hooks/useAuth';


const ServiceDetails = () => {
    const { user } = useAuth();
    const { servicedetailsId } = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-atoll-57556.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])

    const details = detail.find(detail => detail._id == servicedetailsId)

    // place order form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.order = details?.name;


        fetch('https://fathomless-atoll-57556.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booking Successfully')
                    reset();
                }
            })

    };

    return (
        <div>
            {/* service deteails item */}
            <Container>
                <Row className="my-5">
                    <Col xs={12} md={6}>
                        <h1 className="text-center text-primary">{details?.name}</h1>
                        <img className="img-fluid" src={details?.img} alt="" />
                        <h3 className="fw-bold mt-4">About This Travel</h3>
                        <p className="fw-bold">{details?.description}</p>
                        <h4 className="fw-bold mt-4">Trip details</h4>
                        <p className="fw-bold">$ {details?.cost}</p>
                        <p className="fw-bold"><i class="fas fa-user me-2"></i>{details?.people}</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <h3 className="text-center fw-bold">Trip Booking</h3>
                        <div className="mt-5 ms-5">
                            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                                <input defaultValue={user.displayName} {...register("Name")} />

                                <input defaultValue={user.email} {...register("Email", { required: true })} />

                                {errors.email && <span className="error">This field is required</span>}
                                <input placeholder="Address" defaultValue="" {...register("Address")} />
                                <input placeholder="City" defaultValue="" {...register("City")} />
                                <input placeholder="Phone" defaultValue="" {...register("Phone")} />

                                <input className="book-now-button" type="submit" value="Booking" />


                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;