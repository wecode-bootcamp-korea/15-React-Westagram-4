import React from 'react';

class Comments extends React.Component{

    render(){
        const {commentsList, commentsData} = this.props;
        return(
            <ul className="commentsList">
                {commentsData.map((comm)=> {return <li key={comm.id}><strong>{comm.userName}:</strong> {comm.content}</li>} )}
                {commentsList.map((comment)=> {return <li key={comment}>{comment}</li>})}
            </ul>
        )
    }
}

export default Comments;