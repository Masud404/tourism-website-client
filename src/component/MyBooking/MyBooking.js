import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const id = user.displayName;
    const [list, setList] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/orders/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setList(data))
    }, [])

    // delete button
    const handleDelete = Name => {
        const url = `http://localhost:5000/orders/${Name}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = list.filter(list => list.Name !== Name);
                    setList(remaining);
                }

            })
    }

    return (
        <div className="container mx-auto my-5">
            <h1 className="text-center fw-bold">My Booking</h1>
            {
                list.map(list =>

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Booking</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {list.Name}</td>
                                <td>{list.Email}</td>
                                <td>{list.Phone}</td>
                                <td>{list.Address}</td>
                                <td className="text-danger">{list.order
                                }</td>
                                <td><button onClick={() => handleDelete(list.Name)} className="btn btn-warning text-light fw-bold">Cancle</button></td>
                            </tr>
                        </tbody>
                    </Table>

                )
            }

        </div>
    );
};

export default MyBooking;