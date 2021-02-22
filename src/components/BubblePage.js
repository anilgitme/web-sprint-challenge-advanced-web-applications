import React, { useEffect, useState } from "react";
import axiosWithAuth from '../helpers/axiosWithAuth';
// import axios from "axios";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {getColors} from '../helpers/getColors';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

    useEffect(() => {
       getColors()  //get request
        .then(result => { //promise being returned
          console.log(result.data)
          setColorList(result.data) //setting state(mounting)
        })
        .catch(error => console.log(error, 'cant find bubblecolors'))
    }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
