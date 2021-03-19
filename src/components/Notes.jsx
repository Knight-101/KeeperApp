import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import { BASE_URL } from "../backend";


function Notes() {
    const [auth,setauth]=useState(true)
    const [note, setNote] = useState({
        title:"",
        content:""
      })
      const [noteArray, setNoteArray] = useState([])
    
      function changeNote(event){
        const {name,value} = event.target
        setNote(prevnote =>{
          return {
          ...prevnote,
          [name]:value}
        });
      }
    
      function addNote(){
        axios.post(BASE_URL+'notes',{
          notes:[...noteArray,note]

        },{headers:{'Authorization':localStorage.getItem('token')}}).then((res)=> {  
           setNoteArray(prevArray => {
            return [...prevArray,note]
          })
          setNote({
            title:"",
            content:""
          })
        })
          .catch((error)=> {
            console.log(error);
          })
        
        
      }
    
      function deleteItem(id){
        setNoteArray(prevArray=> 
          {return  prevArray.filter((item,index) => {
            return index!==id
        })

      })
      }
      function logOut(){
        localStorage.setItem("token","")
        localStorage.setItem("token",false)
        window.location = "/"
      }
      
      useEffect(() => { 
       axios.get(BASE_URL+'notes',{headers:{'Authorization':localStorage.getItem('token')}})
      .then((res)=> {  
      res?setauth(true):setauth(false)   
      setNoteArray(res.data.notes)
    })
      .catch((error)=> {
        console.log(error);
      })
      
      },[])

     


      if(auth){
      
        return(
          <div>
          <Header logOut="Log Out" logoutFunc={logOut}/>
          <CreateArea 
            value={note}
            funcAdd={addNote}
            funcChange={changeNote}
            // post={postData}
          />
          {noteArray.map((item,index) => {
            return <Note key={index} id={index} title={item.title} content={item.content} funcDel={deleteItem} />
          })} 
          <Footer />
        </div>);
      }else{
        return(
          <div>
          <Header />
          <h1>Access Denied</h1>
          <Footer />
        </div>);
      }
      
  }
  
  export default Notes;
  
