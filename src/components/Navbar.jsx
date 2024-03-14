import React, { useState } from 'react'
import styles from "./Navbar.module.css"

export default function Navbar({ note, setNote, arrNotes, setArrNotes }) {
    const [add, setAdd] = useState(false);
    const [search, setSearch] = useState(false);
    const [searchInp, setSearchInp] = useState("");
    const [searchArr, setSearchArr] = useState([]);

    function handleaddInput(e) {
        e.preventDefault();
        setAdd(!add)
        setSearch(false);
    }
    function handleChange(e) {
        e.preventDefault();
        setNote({ ...note, [e.target.id]: e.target.value })
    }
    function handleClick(e) {
        e.preventDefault();
        if(note.title!==""){
            setArrNotes([...arrNotes, note])
            setNote({title:"",text:""})
        }
        setAdd(false);
    }
    function handleDelete(index){
        setArrNotes(arrNotes.filter((ele,ind)=>ind!==index))
        setNote({title:"",text:""})
    }
    function handleDisplay(index){
        setNote(arrNotes[index])
    }
    function handleSearchChange(e){
        e.preventDefault()
        setSearchInp(e.target.value)
    }
    function handleSearch(e){
        e.preventDefault()
        if(searchInp!==""){
            setSearchArr(arrNotes)
            setArrNotes(arrNotes.filter((ele)=>ele.title.includes(searchInp)))
        }
        setSearchInp("")
        setSearch(false);
    }
    function handleSearchInput(e){
        e.preventDefault()
        setSearch(!search);
        setAdd(false)
    }
    function handleCancel(){
        setArrNotes(searchArr);
        setSearchInp("")
        setSearch(false);
    }
    return (
        <div className={styles.Navbox}>
            <div className={styles.addNotes}>Add Notes <button className={styles.addNotesBtn} onClick={handleaddInput}><i class="fa-solid fa-plus"></i></button><button className={styles.searchBtn} onClick={handleSearchInput}><i class="fa-solid fa-magnifying-glass"></i></button>
            {add && (
                <div className={styles.inputBox}>
                    <form >
                        <input type="text" placeholder=' Enter The Title' onChange={handleChange} value={note.title} id='title' />
                        <button onClick={handleClick} className={styles.btn}><i class="fa-solid fa-floppy-disk"></i></button>
                    </form>
                </div>
            )}
            {search && (
                <div className={styles.inputBox}>
                    <form >
                        <input type="text" placeholder=' Search' onChange={handleSearchChange} className={styles.search} value={searchInp} id='title' />
                        <button onClick={handleSearch} ><i class="fa-solid fa-floppy-disk"></i></button>
                        <button onClick={handleCancel} ><i class="fa-solid fa-xmark"></i></button>
                    </form>
                </div>
            )}
            </div>
            <div className={styles.titlesBox}>
            {arrNotes.map((element,index) => <div><button onClick={()=>handleDisplay(index)} className={styles.titleBtn}>{element.title}</button> <button className={styles.deleteBtn} onClick={()=>handleDelete(index)}><i class="fa-solid fa-trash"></i></button></div>)}
            </div>
        </div>
    )
}
