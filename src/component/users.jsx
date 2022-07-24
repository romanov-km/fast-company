import React, {useState} from "react";
import User from "./user";

const Users = ({ users, handleDelete, ...rest }) => {

    return (
        <>
            {users.length !== 0 ? (
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретились, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <User key={user._id} {...user} handleDelete={handleDelete} {...rest}/>
                    ))}
                    </tbody>
                </table>
            ):("")}
        </>
    );
};

export default Users;