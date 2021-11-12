import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const ClintRoute = ({ children, ...rest }) => {
    const {user, admin, isAdminLoading} = useAuth();
    if(isAdminLoading){
        return (
          <div className="text-center spinner-load">
            <Spinner animation="grow" />
          </div>
        );
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
        (user.email && !admin) ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
            )
        }
        >

        </Route>
    );
};

export default ClintRoute;