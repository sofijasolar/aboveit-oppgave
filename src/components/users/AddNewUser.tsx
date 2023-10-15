import { ChangeEvent, useContext, useState } from "react";
import UserContext, { IUserContext } from "../../context/UserContext";


const AddNewUserForm : React.FC = () => {

    const {addNewUser: contextAddNewUser} = useContext(UserContext) as IUserContext;

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    // const [image, setImage] = useState<string>("");

    // const [imageFile, setImageFile ] = useState<File | null>(null);
    

    const changeHandler = ( e: ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.currentTarget;


        switch(name){
            case "firstName":
                setFirstName(value);
            break;
            case "lastName":
                setLastName(value);
            break;
            case "email":
                setLastName(value);
            break;
            
        }
    }


    // const imageHandler = (e: ChangeEvent<HTMLInputElement>) => {

    //     const {files} = e.target;

    //     if(files != null){
    //         const file = files[0];
    //         setImageFile(file);
    //         setImage(file.name);
    //       }

    // }

    // const uploadImageWithFile = async () => {
    //     if(imageFile != null) {

    //         ImageUploadService.uploadImage(imageFile);
    //     }
    // }


    const addNewUserToContext = () => {
        // uploadImageWithFile();
        const newUser = {
            name: { first: firstName, last: lastName },
            email: email
        };
        contextAddNewUser(newUser); // Use the context function
    }

    const refresh = () => {
        window.location.reload();
    }

    return (
        <section className="w-50 mx-auto">
            <div className="">
                <label  htmlFor="">First name: </label>
                <div className="input-group">
                    <input className="form-control" onChange={changeHandler} name="title" type="text" value={firstName} />
                </div>
            </div>
            <div>
                <label htmlFor="">Last name: </label>
                <input className="form-control" onChange={changeHandler} type="text" name="platform" id="" value={lastName}/>
            </div>
            <div>
                <label htmlFor="">Email: </label>
                <input className="form-control" onChange={changeHandler} type="text" name="releaseYear" id="" value={email} />
            </div>
            
            {/* <div>
                <label htmlFor="">Image: </label>
                <input className="form-control" onChange={imageHandler} type="file" name="imageFile" />
            </div> */}
            <div className="mt-2">
                <button onClick={addNewUserToContext} className="btn btn-outline-dark me-2 ">Add game</button>
                <button onClick={refresh} className="btn btn-outline-dark">
                {/* <FontAwesomeIcon icon="arrows-rotate" />   */}
                    <span className="p-1"></span>Refresh</button>
            </div>
        </section>
    )

}

export default AddNewUserForm;