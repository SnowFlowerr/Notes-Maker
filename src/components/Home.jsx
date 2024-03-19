import React from 'react'
import Navbar from './Navbar'
import Notes from './Notes'
import styles from "./Home.module.css"
import { useState } from 'react'

export default function Home() {
    const [note,setNote]=useState({title:"",text:""})
    const [arrNotes,setArrNotes]=useState([]);
    return (
        <div className={styles.BigBox}>
            <Navbar note={note} setNote={setNote} arrNotes={arrNotes} setArrNotes={setArrNotes}></Navbar>
            <button className={styles.darkButton}><i class="fa-solid fa-circle-half-stroke"></i></button>
            <Notes note={note} setNote={setNote}></Notes>
        </div>
    )
}
