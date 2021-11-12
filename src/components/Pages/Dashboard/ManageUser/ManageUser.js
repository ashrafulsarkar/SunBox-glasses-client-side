import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const ManageUser = () => {
    const {user} = useAuth();
    const [allusers, setAllusers] = useState([]);

    useEffect(()=>{
        fetch('https://cryptic-basin-27596.herokuapp.com/user')
        .then(res => res.json())
        .then(data => {
            setAllusers(data);
        })
    },[allusers])
    let i = 1;

    const handerAdmin = async (id, role) =>{
        if (window.confirm("Are you sure you want to Update it?")) {
            await fetch(`https://cryptic-basin-27596.herokuapp.com/user/${id}`,{
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({'role':role})
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    setAllusers([]);
                }
            })
        }
    }


    return (
        <div className="data-table">
            <h2>Manage User</h2>
            <div className="table-data">
                <table>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            allusers.map(alluser => {
                                return(
                                    <tr key={alluser._id}>
                                        <td className="text-center">{i++}</td>
                                        <td>{alluser.displayName}</td>
                                        <td>{alluser.email}</td>
                                        <td className="text-center">{alluser?.role}</td>
                                        <td className="text-center">
                                        {
                                            (alluser.role === 'admin') ? ((user.email===alluser.email) ? "You can't change yourself." :<button  onClick={()=>handerAdmin(alluser._id, 'customer')} >Make Customer</button>):<button  onClick={()=>handerAdmin(alluser._id, 'admin')} >Make Admin</button>
                                        }
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;