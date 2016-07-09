/**
 * Created by idanr on 15/06/2016.
 */


import {render} from "react-dom"
import React from "react"
import CatContainer from "./components/CatSelectionContainer"
import SelectedCatContainer from "./components/SelectedCatContainer"

import $ from 'jquery';
var catsData = [{title:"Moshiko",imgUrl:"../../../resources/cat1.jpg",shouldShowCounter:false},{title:"Avi",imgUrl:"../../../resources/cat2.jpg",shouldShowCounter:false}];

const container = document.getElementById("catContainer");

render(
    <CatContainer cats={catsData}/>,
    container
)

const selectedCatcontainer = document.getElementById("selectedCatContainer");

render(
    <SelectedCatContainer cat={catsData[0]}/>,
    selectedCatcontainer
)

