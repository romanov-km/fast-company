import React, {useState} from "react";
import api from "../api";

const Users = () => {
    const [user, setUsers] = useState(api.users.fetchAll);

    const handleDelete = (userID) => {
        userID.currentTarget.closest("tr").remove();
        console.log('click')
    };
    const renderPhrase = (number) => {
        if (usersData.length === 0) {
            number = "никто не тусанет с тобой сегодня";
        } number = usersData.length + ' тусанет с тобой сегодня'
        return number
    };
    let usersData = user.map(function (item) {
         return (
                 <>
                     <tr key={item._id}>
                         <td>{item.name}</td>
                         <td>
                             {item.qualities.map((qualitie) => (
                                 <span key={qualitie._id} className={`badge bg-${qualitie.color} m-2`}>
                                     {qualitie.name}
                                 </span>
                             ))}
                         </td>
                         <td>{item.profession.name}</td>
                         <td>{item.completedMeetings}</td>
                         <td>{item.rate}</td>
                         <td><button className="badge bg-danger" onClick={handleDelete}>delete</button></td>
                     </tr>
                 </>
         )
    })

    console.log()
    return (
        <>
            <h2><span className="badge bg-primary">{renderPhrase()} </span></h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {usersData}
                </tbody>
            </table>
        </>
    );
};

export default Users;