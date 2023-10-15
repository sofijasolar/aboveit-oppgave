import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {IUserContext} from "../../context/UserContext";
import UserItem from "./UserItem";


const UserList = () => {

    const {users} = useContext(UserContext) as IUserContext;

    const getUserItems = () => {
        return users.map( (user, i) => (
            <UserItem
                key={`user-${i}`}
                name={user.name}
                email={user.email}
                picture={user.picture}
            />
        ))
    }


    return (
        <section className="">
            <div className="user-list row">
                {getUserItems()}
            </div>
        </section >
    )
}

export default UserList;