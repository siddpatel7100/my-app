import React, { useState, useEffect, useContext } from 'react';
import Icon from "@mdi/react";
import { mdiBell } from "@mdi/js";
import { mdiHome } from "@mdi/js"
import { mdiClipboardListOutline } from "@mdi/js"
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { ToDoContext } from '../Contexts/toDoContext';
function Nav(props) {

   const { tagList } = useContext(ToDoContext);
   const getAddedToDoIndex = tagList.length
   const [anchorEl, setAnchorEl] = useState(null);
   let [counter, setCounter] = useState(getAddedToDoIndex);

   useEffect(() => {
      setCounter(getAddedToDoIndex);
   }, [getAddedToDoIndex])

   function onTap(event) {
      setAnchorEl(event.currentTarget);
   }

   const handleClose = () => {
      setAnchorEl(null);
      setCounter(counter = 0)
   };

   const open = Boolean(anchorEl);
   //const id = open ? 'simple-popover' : undefined;
   const notification =
   {
      height: "25px",
      width: "25px",
      backgroundColor: "red",
      borderRadius: "50%",
      display: "inline-block",
      marginTop: 20,
      marginRight: "-3%",
      float: "right"
   }
   var verify;
   if (counter !== 0) {
      verify = <div id='hideIcon'>
         <span style={notification}>
            <span style={{ margin: 8, fontSize: 15 }}>
               {counter}
            </span>
         </span>
      </div>
   }

   return (

      <div id="changeNav">

         <Card >

            <nav>
               <ul style={{ listStyle: "none" }}>

                  <li>
                     <Icon type="button" path={mdiBell} size="6vh" style={{ float: "right", color: "green", margin: "1vh" }} onClick={(e) => onTap(e)} ></Icon>
                     {verify}
                  </li>

                  <Link to='/about'>
                     <li>
                        <Icon type="button" path={mdiClipboardListOutline} size="6vh" style={{ float: "right", color: "green", margin: "1vh" }} ></Icon>
                     </li>
                  </Link>
                  <Link to='/home'>
                     <li>
                        <Icon type="button" path={mdiHome} size="6vh" style={{ float: "right", color: "green", margin: "1vh" }} ></Icon>
                     </li>
                  </Link>

               </ul>
            </nav>
            <Popover

               open={open}
               anchorEl={anchorEl}
               onClose={handleClose}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
               }}
               transformOrigin={{
                  vertical: 'Top',
                  horizontal: 'right'
               }}>
               <Typography style={{ color: "red", width: "200px" }} sx={{ p: 2 }}>{tagList.map((item,id)=>(
                  <h6 key={id}>{item}</h6>
               ))}</Typography>
            </Popover>

         </Card>
      </div>
   )

}
export default Nav