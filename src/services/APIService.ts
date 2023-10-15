import axios from "axios";

const APIService = (
    () => {
        const endpoints = {
            users: "https://randomuser.me/api/?results=30&seed=aboveit&exc=login"
        }

        const getAllUsers = async () => {
            const result = await axios.get(endpoints.users);
            console.log(result.data)
            return result.data;
            
        }

        // later add / post new user

        

        return {
            getAllUsers
        }
    }
)();

export default APIService;