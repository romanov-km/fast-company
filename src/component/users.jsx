import React, {useState} from "react";
import api from "../api";

const Users = () => {
    const [user, setUsers] = useState(api.users.fetchAll);

    const handleDelete = (userID) => {
        setUsers(prevState=>prevState.filter(item=>item!==userID))
    };

    const renderPhrase = (number) => {
        number = user.length + ' тусанет с тобой сегодня'
        return user.length !==0 ? (<h2><span className="badge bg-primary">{number}</span></h2>) : (<h2><span className="badge bg-danger">никто не тусанет с тобой сегодня</span></h2>)
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
                         <td><button className="badge bg-danger" onClick={()=>handleDelete(item)}>delete</button></td>
                     </tr>
                 </>
         )
    })

    console.log()
    return (
        <>
            {renderPhrase()}
            {user.length !== 0 ? (

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
                    <tbody>{usersData}</tbody>
                </table>) : ('')}
        </>
    );
};

export default Users;