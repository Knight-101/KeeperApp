import React from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
  return (
    <div>
      <form onChange={props.funcChange} >
        <input name="title"  placeholder="Title" value={props.value.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={props.value.content}/>
        <button id="add" type= "button" onClick={props.funcAdd} ><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
