import React from 'react'

function CameraScreen() {
  return (
    <div> <div
    className="oncam screen"
    style={{
      background:
        'black url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5Lfor2LPkvTubIzpkHCSvQ2E0BwiqtDDtqUo8doxRPM2uTda&s") center no-repeat'
    }}
  >
    <div className="as">
      <i className="material-icons arrow-left" style={{ padding: 20 }}>
        arrow_back
      </i>
    </div>
    <div
      style={{
        position: "fixed",
        zIndex: 3,
        bottom: 0,
        width: "100%",
        color: "white",
        padding: "20px 0 20px 0"
      }}
      align="center"
    >
      <i style={{ color: "white" }} className=" material-icons">
        flash_off
      </i>
      <span className="circle" />
      <i className="material-icons">camera_enhance</i> <br />
      <br />
      <br />
      hold for video, tap for photo.
    </div>
  </div></div>
  )
}

export default CameraScreen