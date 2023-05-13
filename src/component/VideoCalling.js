import React from 'react'

function VideoCalling() {
  return (
    <div>  <div
    className="vcalling"
    style={{
      zIndex: 5,
      background:
        'black url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5Lfor2LPkvTubIzpkHCSvQ2E0BwiqtDDtqUo8doxRPM2uTda&s") center no-repeat',
      height: "100%",
      width: "100%",
      display: "none",
      overflowY: "auto",
      position: "fixed"
    }}
  >
    <div
      style={{
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
      <img
        className="img videoimg"
        style={{ height: 90, width: 90, margin: "20px 20px 10px 20px" }}
        src="https://api.sololearn.com/Uploads/Avatars/16869381.jpg"
      />
      <h1 className="videoname">hii</h1>
      Ringing
    </div>
    <div
      className="vicon"
      style={{
        position: "fixed",
        zIndex: 3,
        bottom: 0,
        width: "100%",
        color: "rgba(255,255,255,0.7)",
        padding: "20px 0 20px 0"
      }}
      align="center"
    >
      <i
        style={{
          color: "rgba(255,255,255,0.7)",
          background: "red",
          padding: 15,
          borderRadius: "50%"
        }}
        className=" material-icons call-end"
      >
        call
      </i>
      <br />
      <i className=" material-icons">camera_enhance</i>
      <i className="material-icons">videocam_off</i>
      <i className="material-icons">mic_off</i>
    </div>
  </div></div>
  )
}

export default VideoCalling