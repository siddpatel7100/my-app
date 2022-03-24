import React from "react";
import { Chip } from "@mui/material";

export default function AddedToDo(props) {
 
  const getProps = props.tagListed;
    
    const getTagList = getProps.map((taging, index) => {
        return (
        <div key={index} style={{padding:4}}>
            <Chip key={index} label={taging} 
                onDelete={() => props.pressDelete(index)}>  
            </Chip>
           
        </div>
       
        )
    })

    return (
        <div>{getTagList}</div>
    )
}

