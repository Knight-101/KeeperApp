import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import backend, { BASE_URL } from "../backend";


function Notes() {
    const [initial,setInitial]=useState("")
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
        console.log({
          id:localStorage.getItem("id"),
          notes:[...noteArray,note]
        })
        axios.post(BASE_URL+'notes',{
          // id:localStorage.getItem("id"),
          notes:[...noteArray,note]

        },{headers:{'Authorization':localStorage.getItem('token')}}).then((res)=> {  
           console.log(res)
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
        localStorage.setItem("id","")
        window.location = "/"
      }
      
      useEffect(() => { 
       axios.get(BASE_URL+'notes',{headers:{'Authorization':localStorage.getItem('token')}})
      .then((res)=> {  
      console.log(res)  
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
          {noteArray.length>0 && noteArray.map((item,index) => {
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
  
