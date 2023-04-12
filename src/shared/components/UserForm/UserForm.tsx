import React, { useContext, useState } from "react";
import { UserServiceContext } from "../../contexts/Contexts";
import { User } from "../../models/User";

const UserForm: React.FC = () => {
    const userService = useContext(UserServiceContext);

    const [user, setUser] = useState<User>({ firstName: "", lastName: "", password: "" });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await userService?.createUser(user);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" value={user.firstName} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" value={user.lastName} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={user.password} onChange={handleInputChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
