interface IUser {
    // id: number;
    name:{
        first: string;
        last: string;
    };
    email: string;
    picture?: {
        medium: string;
    };
}

export default IUser;