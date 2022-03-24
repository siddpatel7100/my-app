import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert} from 'react-bootstrap';
import { Input } from '@mui/material';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { ToDoContext } from '../Contexts/toDoContext';
function Home() {

const {setTagList} = useContext(ToDoContext)
function giveValue(e){
    if(e.key =="Enter")
{
   
    const val = e.target.value
    setTagList(preElement =>[...preElement,val])
       document.getElementById("clearInput").value = "";
}
}

        return (
            <div className="changeAlert">
                <Alert variant="success" className="changeAlertBox" >
                   <h2>Hello This is your Home</h2> 
                   <Input
                            style={{ border: "solid", marginLeft: "6px", marginRight: "6px" }}
                            id="clearInput"
                            type="text" onKeyUp={(e) => giveValue(e)}
                        />
                </Alert>
            </div>
        )
    
}
export default Home