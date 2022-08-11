import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const headerStateChanges = (number) => {
        if (number === 2 || number === 3 || number === 4) {
            return " человека тусанут";
        } else {
            return " человек тусанёт";
        }
    };

    return (
        <>
            <h1>
                <span
                    className={
                        "badge " + (length > 0 ? "bg-primary" : "bg-danger")
                    }
                >
                    {length > 0
                        ? `${
                              length + headerStateChanges(length)
                          } с тобой сегодня`
                        : "Никто с тобой не тусанёт"}
                </span>
            </h1>
        </>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;
