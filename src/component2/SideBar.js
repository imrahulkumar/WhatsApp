import { React, useState }  from 'react';
import  '../component2/Global.css';
import userListData from '../component2/ChatUserList.json'
import UserList from './UserList';







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
    <div className="right-container">
      {/*header */}
      <div className="header">
        <div className="img-text">
          <div className="user-img">
            <img
              className="dp"
              src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <h4>
            Leo
            <br />
            <span>Online</span>
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
        <div className="message-box my-message">
          <p>
            I've been waiting to see that show asap!
            <br />
            <span>07:43</span>
          </p>
        </div>
        <div className="message-box friend-message">
          <p>
            Ahh, I can't believe you do too!
            <br />
            <span>07:45</span>
          </p>
        </div>
        <div className="message-box friend-message">
          <p>
            The trailer looks good
            <br />
            <span>07:45</span>
          </p>
        </div>
        <div className="message-box friend-message">
          <p>
            I've been waiting to watch it!!
            <br />
            <span>07:45</span>
          </p>
        </div>
        <div className="message-box my-message">
          <p>
            😐😐😐
            <br />
            <span>07:46</span>
          </p>
        </div>
        <div className="message-box my-message">
          <p>
            Mee too! 😊
            <br />
            <span>07:46</span>
          </p>
        </div>
        <div className="message-box friend-message">
          <p>
            We should video chat to discuss, if you're up for it!
            <br />
            <span>07:48</span>
          </p>
        </div>
        <div className="message-box my-message">
          <p>
            Sure
            <br />
            <span>07:48</span>
          </p>
        </div>
        <div className="message-box my-message">
          <p>
            I'm free now!
            <br />
            <span>07:48</span>
          </p>
        </div>
        <div className="message-box friend-message">
          <p>
            Awesome! I'll start a video chat with you in a few.
            <br />
            <span>07:49</span>
          </p>
        </div>
      </div>
      {/*input-bottom */}
      <div className="chatbox-input">
        <i className="fa-regular fa-face-grin" />
        <i className="fa-sharp fa-solid fa-paperclip" />
        <input type="text" placeholder="Type a message" />
        <i className="fa-solid fa-microphone" />
      </div>
    </div>
  </div>
</div>
  )
}

export default SideBar

