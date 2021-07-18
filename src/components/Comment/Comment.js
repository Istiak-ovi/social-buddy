import React from 'react';

const Comment = (props) => {
    const {name,email} = props.comment;
    return (
        <div>
            <p>Comment name is: {name}</p>
            <p>Email is: {email}</p>
        </div>
    );
};

export default Comment;