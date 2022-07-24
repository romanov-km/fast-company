import React from "react";

const Qualitie = ({name, color, _id}) => {
    return (
        <span className={`badge bg-${color} m-1`} key={_id}>
            {name}
        </span>
    );
};

export default Qualitie;