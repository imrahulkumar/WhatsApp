import React from 'react'

function CallingScreen() {
  return (
    <div>  <div className="calling screen">
    <div
      style={{
        background: "#075e54",
        fontSize: 15,
        color: "rgba(255,255,255,0.7)",
        padding: "10px 0px 15px 0px"
      }}
      align="center"
    >
      <i
        style={{
          fontSize: 25,
          marginLeft: 0,
          float: "none",
          margin: "0% 15% 0% -25%"
        }}
        className="material-icons arrow-left"
      >
        keyboard_arrow_down{" "}
      </i>
      <i style={{ fontSize: 15 }} className="material-icons">
        lock{" "}
      </i>
      End-to-end encrypted
      <br />
      <h1 className="callname">hii</h1>
      Ringing zzzzzz
    </div>
    <div
      className="callimg"
      style={{
        height: "80%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      align="center"
    >
      <i
        style={{
          color: "rgba(255,255,255,0.7)",
          background: "red",
          padding: 15,
          borderRadius: "50%",
          marginTop: "50%"
        }}
        className=" material-icons call-end"
      >
        call
      </i>
    </div>
    <div
      className="vicon"
      style={{
        position: "fixed",
        zIndex: 3,
        bottom: 0,
        width: "100%",
        color: "rgba(255,255,255,0.7)",
        padding: "5px 0 20px 0",
        background: "#075e54"
      }}
      align="center"
    >
      <br />
      <i className=" material-icons">camera_enhance</i>
      <i className="material-icons">videocam_off</i>
      <i className="material-icons">mic_off</i>
    </div>
  </div></div>
  )
}

export default CallingScreen