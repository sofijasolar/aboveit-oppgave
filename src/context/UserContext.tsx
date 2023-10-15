import { ReactNode, createContext, useEffect, useState } from "react"
import IUser from "../interfaces/IUser";
import APIService from "../services/APIService";


export interface IUserContext {
    users: IUser[];
    getUsersFromService: () => void;
    addNewUser: (newUser: IUser) => void;
}

export const UserContext = createContext<IUserContext | null>(null);


type Props = {
    children: ReactNode
}

const UserProvider = ({children}: Props) => {
    
    const [users, setUsers] = useState<IUser[]>([]);
    

    useEffect( () => {
        getUsersFromService();
    }, []);

    const getUsersFromService = async ( ) => {
        const usersFromService = await APIService.getAllUsers();
        const users = usersFromService.results;
        console.log(users);
        setUsers(users);
    }

    const addNewUser = (newUser: IUser) => {
        setUsers([newUser, ...users]);
    }

    return (
        <UserContext.Provider value={{users, getUsersFromService, addNewUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;