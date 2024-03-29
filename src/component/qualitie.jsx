import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ name, color, _id }) => {
    return (
        <span className={`badge bg-${color} m-1`} key={_id}>
            {name}
        </span>
    );
};

Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
};

export default Qualitie;
