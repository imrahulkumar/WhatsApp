import React from 'react'

function Chatting(props) {
const {userDetail, chatting } = props.chattingData;
const chattingContent =  chatting.map(chatData => 
         <div className={chatData.userName === 'self' ?  'message-box my-message' : 'message-box friend-message'}>
          <p>
             {chatData.msg}
            <br />
            <span>{chatData.time}</span>
          </p>
        </div>
)

  return (
    <div className="right-container">
      {/*header */}
      <div className="header">
        <div className="img-text">
          <div className="user-img">
            <img
              className="dp"
              src={userDetail?.image}
              alt=""
            />
          </div>
          <h4>
            {userDetail?.userName}
            <br />
            <span> {userDetail?.status}</span>
          </h4>
        </div>
        <div className="nav-icons">
          <li>
            <i className="fa-solid fa-magnifying-glass" />
          </li>
          <li>
            <i className="fa-solid fa-ellipsis-vertical" />
          </li>
        </div>
      </div>
      {/*chat-container */}
      <div className="chat-container">
        {chattingContent}
      </div>
      {/*input-bottom */}
      <div className="chatbox-input">
        <i className="fa-regular fa-face-grin" />
        <i className="fa-sharp fa-solid fa-paperclip" />
        <input type="text" placeholder="Type a message" />
        <i className="fa-solid fa-microphone" />
      </div>
    </div>
  )
}

export default Chatting