import React from 'react'
import Navbar from './Navbar'
import Notes from './Notes'
import styles from "./Home.module.css"
import { useState } from 'react'

export default function Home() {
    const [note,setNote]=useState({title:"",text:""})
    const [arrNotes,setArrNotes]=useState([]);
    const [dark,setDark]=useState(false);

    function handleDark(e){
        e.preventDefault();
        setDark(!dark)
        if(!dark){
            document.getElementById('Bigbox').style.background="black"
            document.getElementById('dark').style.background="white"
            document.getElementById('dark').style.color="black"
            document.getElementById('nav').style.background="black"
            document.getElementById('nav').style.color="white"
            document.getElementById('nav').style.boxShadow="0px 0px 10px white"
            document.getElementById('addBox').style.border="2px solid white"
            document.getElementById('addBox').style.background="black"
            document.getElementById('space').style.background="black"
            document.getElementById('space').style.color="white"
            document.getElementById('noteBox').style.background="black"
            document.getElementById('noteBox').style.color="white"
            document.getElementById('noteBox').style.boxShadow="0px 0px 10px white"
        }
        else{
            document.getElementById('Bigbox').style.background="white"
            document.getElementById('dark').style.background="black"
            document.getElementById('dark').style.color="white"
            document.getElementById('nav').style.background="white"
            document.getElementById('nav').style.color="black"
            document.getElementById('nav').style.boxShadow="0px 0px 10px black"
            document.getElementById('addBox').style.border="2px solid black"
            document.getElementById('addBox').style.background="white"
            document.getElementById('space').style.background="white"
            document.getElementById('space').style.color="black"
            document.getElementById('noteBox').style.background="white"
            document.getElementById('noteBox').style.color="black"
            document.getElementById('noteBox').style.boxShadow="0px 0px 10px black"
        }
    }
    return (
        <div className={styles.BigBox} id='Bigbox'>
            <Navbar note={note} setNote={setNote} arrNotes={arrNotes} setArrNotes={setArrNotes}></Navbar>
            <button className={styles.darkButton} onClick={handleDark} id='dark'><i class="fa-solid fa-circle-half-stroke"></i></button>
            <Notes note={note} setNote={setNote}></Notes>
        </div>
    )
}
