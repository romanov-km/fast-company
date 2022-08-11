import React from "react";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import PropTypes from "prop-types";

const Bookmark = ({ status, ...rest }) => {
    return (
        <button
            {...rest}
            className={
                "bi bi-bookmark-plus" +
                (status ? "bi bi-bookmark-plus-fill" : "")
            }
        ></button>
    );
};

Bookmark.propTypes = {
    status: PropTypes.bool
};

export default Bookmark;
