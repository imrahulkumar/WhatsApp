import React from 'react'

function Status() {
  return (
    <div> <div className="status">
        <div className="sta">
          <img
            className="img"
            src="https://randomuser.me/api/portraits/men/57.jpg"
          />
          <i className="material-icons add">add_circle</i>
          <div className="sg">
            <b className="name">My status</b>
            <br />
            Tap to add status update
          </div>
        </div>
        <div className="up">Recent updates</div>
        <div className="sta">
          <img
            className="simg"
            src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"
          />
          <div className="smsg">
            <b className="name">Kumar</b>
            <br />
            <span className="times">today 8:20</span>
          </div>
        </div>
        <div className="sta">
          <img
            className="simg"
            src="https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"
          />
          <div className="smsg">
            <b className="name">Sky-Lark</b>
            <br />
            <span className="times">today 8:20</span>
          </div>
        </div>
        <div className="sta">
          <img
            className="simg"
            src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"
          />
          <div className="smsg">
            <b className="name">MsfVenom</b>
            <br />
            <span className="times">today 8:20</span>
          </div>
        </div>
        <div className="down">viewed updates</div>
      </div></div>
  )
}

export default Status 