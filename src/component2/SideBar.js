import { React, useState }  from 'react';
import  '../component2/Global.css';
import userListData from '../component2/ChatUserList.json';
import UserList from './UserList';
import Chatting from './Chatting';
import userChattingData from "../component2/ChattingUserData.json"


function SideBar() {
      const [chatUserList, setchatUserList] = useState();

  return (
    <div>
  <title>Whatsapp Clone</title>
  <div className="background-green" />
  <div className="main-container">
    <div className="left-container">
      {/*header */}
      <div className="header">
        <div className="user-img">
          <img
            className="dp"
            src="https://www.codewithfaraz.com/InstaPic.png"
            alt=""
          />
        </div>
        <div className="nav-icons">
          <li>
            <i className="fa-solid fa-users" />
          </li>
          <li>
            <i className="fa-solid fa-message"></i>
          </li>
          <li>
            <i className="fa-solid fa-ellipsis-vertical" />
          </li>
        </div>
      </div>
      {/*notification */}
      <div className="notif-box">
        <i className="fa-solid fa-bell-slash" />
        <div className="notif-text">
          <p>Get Notified of New Messages</p>
          <a href="#">Turn on Desktop Notifications ›</a>
        </div>
        <i className="fa-solid fa-xmark" />
      </div>
      {/*search-container */}
      <div className="search-container">
        <div className="input">
          <i className="fa-solid fa-magnifying-glass" />
          <input type="text" placeholder="Search or start new chat   " />
        </div>
        <i className="fa-sharp fa-solid fa-bars-filter" />
      </div>
      {/*chats */}
      <div className="chat-list">
        <UserList  userListData={userListData}/>

      </div>
    </div>
 
<Chatting  chattingData={userChattingData}/>

  </div>
</div>
  )
}

export default SideBar

