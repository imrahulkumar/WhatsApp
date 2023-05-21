import React from 'react'

function Chatting() {
  return (
    <div>  <div className="chatting">
    <div className="ar">
      <i className="material-icons arrow-left">arrow_back</i>
      <img className="topimg"  src="https://randomuser.me/api/portraits/men/33.jpg" /> <span className="chatname">Power Ranger</span>
      <span className="online">
        <i className="material-icons dot">fiber_manual_record</i>Online
      </span>
      <span className="icon">
        {" "}
        <i className="material-icons video">videocam</i>
        <i className="material-icons phone">phone</i>
        <i className="material-icons ellipsis-v">more_vert</i>
      </span>
    </div>
    <br />
    <center>
      <span className="yes">YESTERDAY</span>
    </center>
    <br />
    <div id="rchat">
      {"mai hue koan "}
      <span className="rechat" />
      <span className="rtime">yesterday</span>
    </div>
    <br />
    <br />
    <br />
    <center>
      {" "}
      <span className="yes">TODAY</span>
    </center>
    <br />
    <div style={{ position: "fixed", zIndex: 3, bottom: "0%", width: "100%" }}>
      <div className="text">
        <i className="material-icons smile">mood</i>
        <input className="input" required="" placeholder="Type a message" />
        <div className="input-abs-icon">
          <i className="material-icons">attach_file</i>
          <i className="material-icons camera">camera_alt</i>
        </div>
      </div>
      <span className="mic">
        <i className="material-icons send">send</i>
      </span>
    </div>
  </div></div>
  )
}

export default Chatting