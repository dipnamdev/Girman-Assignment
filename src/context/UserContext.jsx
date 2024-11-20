import React, { createContext } from 'react'
import user_data from '../assets/user_list.json'

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [SearchName, setSearchName] = React.useState('');

    const data = {
        SearchName,
        setSearchName,
        user_data
    };

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
export { UserContext };