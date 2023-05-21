import React from 'react'


function UserList(props) {

    console.log(props);

     const listItems = props.userListData.map(user =>
     <div className={user ? 'chat-box active' : 'chat-box'}>
          <div className="img-box">
            <img
              className="img-cover"
              src={user.image}
              alt=""
            />
          </div>
          <div className="chat-details">
            <div className="text-head">
              <h4>{user.userName}</h4>
              <p className="time unread">{user.time}</p>
            </div>
            <div className="text-message">
              <p>{user.message}</p>
              <b>{user.unseenMsgCount}</b>
            </div>
          </div>
        </div>
  );
  return (
     <>
     {listItems}
     </>
  )
}


export default UserList
