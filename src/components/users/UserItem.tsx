import IUser from "../../interfaces/IUser";

const UserItem : React.FC<IUser> = ({name, email, picture}) => {
    return (
        <article className="card text-center col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="img-fluid w-100 rounded" src={`${picture.medium}`} alt="user-image" />
                <h3>{`${name.first} ${name.last}`}</h3>
                <p>{email}</p>
            </div>
            

        </article>

    )
}

export default UserItem;