import React from 'react'

function SearchScreen() {
  return (
    <div>  <div className="searchcon screen">
    <div
      className="as con"
      style={{
        background: "white",
        boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.2)",
        paddingTop: 15
      }}
    >
      <i
        className="material-icons arrow-left"
        style={{ color: "gray", padding: "0px 10px" }}
      >
        arrow_back
      </i>
      <input
        style={{ margin: "0px 10px 10px 10px" }}
        className="input"
        placeholder="Search"
      />
      <div
        className="sbox"
        style={{ borderTop: "1px solid #ddd", padding: 10 }}
      >
        <span className="ini">
          <i className="material-icons">link</i>links
        </span>
        <span className="ini">
          <i className="material-icons">videocam</i>videos
        </span>
        <span className="ini">
          <i className="material-icons">photo</i>photos
        </span>
        <span className="ini">
          <i className="material-icons">gif</i>gifs
        </span>
        <span className="ini">
          <i className="material-icons">insert_drive_file</i>documents
        </span>
        <span className="ini">
          <i className="material-icons">headset</i>musics
        </span>
      </div>
    </div>
  </div></div>
  )
}

export default SearchScreen