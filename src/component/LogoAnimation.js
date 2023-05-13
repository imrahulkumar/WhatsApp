import React from 'react'

function LogoAnimation() {
  return (
    <div>  <div
    className="loading"
    style={{
      zIndex: 6,
      background: "white",
      height: "100%",
      width: "100%",
      diplay: "none",
      overflowY: "auto",
      position: "fixed"
    }}
    align="center"
  >
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQHGXoq1-ENDzar7ZqDZ8Wlaf79pRaKZZAieL7qHptpl-2owD&s"
    />
    <div
      style={{
        position: "fixed",
        zIndex: 3,
        bottom: 0,
        width: "100%",
        color: "black",
        padding: "20px 0 20px 0"
      }}
      align="center"
    >
      <span
        style={{
          color: "gray",
          fontSize: 13,
          display: "inline-block",
          paddingBottom: 5
        }}
      >
        By
      </span>
      <br />
      <b style={{ color: "#25d366", fontSize: 20 }}>CodingFrontend.Com</b>
    </div>
  </div></div>
  )
}

export default LogoAnimation