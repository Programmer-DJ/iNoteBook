import React, { useEffect } from 'react'
import AddNote from './AddNote.js'
import ShowNotes from './ShowNotes.js'
import { useNavigate } from 'react-router-dom'

export default function Home(props) {
  // Styles : 
  let notesContStyle = {
    borderRadius : "6px",
    backgroundColor: "#f1f1f1",
  }
  let noteContStyle = {
    backgroundColor: "#f8f9fa",
    borderRadius: "6px", 
    boxShadow:"2px 2px 3px #b7b7b7",
    border: "1px solid #e5e5e5"
  }

  const navigate = useNavigate()
  const showHome= localStorage.getItem("token")
  useEffect(()=> {
    if(!showHome)
      navigate("/login")
      return
      //eslint-disable-next-line
  }, [])

  return (
    showHome && 
    <div className='my-4'>
      <h2>Add a note : </h2>

      <div className='container p-3 d-flex justify-content-center'>
        <div className="w-75 p-3" style={noteContStyle}>
          <AddNote showAlert={props.showAlert}/>
        </div>
      </div>

      <h2 className='mt-5 mb-4'>Your notes : </h2>
      <div className='container p-3' style={notesContStyle}>
        <ShowNotes showAlert={props.showAlert}/>
      </div>

    </div>
  )
}
