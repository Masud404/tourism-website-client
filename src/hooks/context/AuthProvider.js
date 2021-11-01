import React, { createContext } from 'react';
import useFirebase from '../useFirebase';

export const AuthContext = createContext();

const AuthProvider = props => {
    const { children } = props;
    const allcontext = useFirebase();
    return (
        <div>
            <AuthContext.Provider value={allcontext}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;