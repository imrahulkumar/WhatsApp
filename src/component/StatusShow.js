import React from 'react'

function StatusShow() {
  return (
    <div>  <div style={{ display: "none" }} className="statusshow">
    <div className="as">
      <div className="load">
        <div className="hr" />
      </div>
      <i style={{ marginLeft: 10 }} className="material-icons arrow-left">
        arrow_back
      </i>
      <img className="topimg statusimg1" />{" "}
      <span className="statusname">hii</span>
      <span className="statustime">Online</span>
      <span className="icon">
        <i className="material-icons ellipsis-v">more_vert</i>
      </span>
    </div>
    <img className="statusimg" />
    <div
      className="statusmsg"
      style={{
        position: "fixed",
        zIndex: 3,
        bottom: 87,
        width: "100%",
        color: "white",
        padding: "10px 0 10px 0",
        background: "rgba(0, 0, 0, 0.4)"
      }}
      align="center"
    >
      hii
    </div>
    <div
      style={{
        position: "fixed",
        zIndex: 3,
        bottom: 0,
        width: "100%",
        color: "white",
        padding: "20px 0 20px 0",
        background: "rgba(0, 0, 0, 0.4)"
      }}
      align="center"
    >
      <i className="material-icons">keyboard_arrow_up</i>
      <br />
      REPLY
    </div>
  </div></div>
  )
}

export default StatusShow