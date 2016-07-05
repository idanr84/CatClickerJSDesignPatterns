/**
 * Created by idanr on 15/06/2016.
 */


import {render} from "react-dom"
import React from "react"
import CatContainer from "./components/CatContainer"

import $ from 'jquery';
var catsData = [{title:"Moshiko",imgUrl:"../../../resources/cat1.jpg",shouldShowCounter:false},{title:"Avi",imgUrl:"../../../resources/cat2.jpg",shouldShowCounter:true}];

const container = document.getElementById("catContainer");

render(
    <CatContainer cats={catsData}/>,
    container
)
