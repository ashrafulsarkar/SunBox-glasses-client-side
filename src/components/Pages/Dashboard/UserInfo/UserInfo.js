import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import './UserInfo.css';

const UserInfo = () => {
    const {user} = useAuth();
    return (
        <div className="userinfo">
            <h2>User Information</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input readOnly id="name" value={user.displayName} />
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input readOnly id="email" value={user.email} />
            </div>
        </div>
    );
};

export default UserInfo;