import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, useState, useContext } from "react";
import { Alert, InputGroup, Button } from 'react-bootstrap';
import Input from "@mui/material/Input";
import AddedToDo from "./addedToDo";
import { Chip } from "@mui/material";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { ToDoContext } from '../Contexts/toDoContext';

function About() {

    const { tagList, setTagList, setTag, tag } = useContext(ToDoContext)

    const giveValue = (e) => {
        const val = e.target.value
        setTag(val);

    }

    const press = (e) => {
        e.preventDefault();


        if (tag !== "") {
            setTagList(preElement => [...preElement, tag])
            // console.log(tagList)
            document.getElementById("clearInput").value = "";
        } else {
            alert("Please Enter Some To Do Items")
        }

    }
    const pressDelete = (uniqueId) => {

        const filterItems = tagList.filter((item, index) => (index !== uniqueId))
        setTagList(filterItems)
    }



    function DateAndTime(setVal) {
        const [value, setValue] = useState(new Date());

        return (
            <LocalizationProvider dateAdapter={AdapterDateFns} >
                <DateTimePicker

                    renderInput={(props) => <TextField {...props} style={{ width: "55%" }} />}
                    label="DateTimePicker"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}

                />
            </LocalizationProvider>
        );
    }

    return (

        <div className="changeAlert">

            <Alert variant="success" className="changeAlertBox" >
                <InputGroup className="mb-3" >
                    <Button variant="outline-secondary" id="button-addon1" onClick={e => press(e)}>
                        Submit
                    </Button>
                    <div id="changeInputBox">
                        <Input
                            style={{ border: "solid", marginLeft: "6px", marginRight: "6px" }}
                            id="clearInput"
                            type="text" onChange={(e) => giveValue(e)}
                        />
                    </div>


                    <div id="changeDateAndTime">
                        <DateAndTime />
                    </div>

                </InputGroup>


                <div id="chipComponent">
                    <AddedToDo tagListed={tagList} pressDelete={pressDelete} />

                    {/* {  tagList.map((taging, index) => {
        
                    <div key={index} style={{ padding: 4 }}>
                        <Chip key={index} label={taging}
                            onDelete={() => pressDelete(index)}>
                        </Chip>

                    </div>

                    
    })} */}
                </div>
            </Alert>
        </div>


    )
}

export default About