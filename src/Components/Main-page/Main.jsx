import React, { useState } from "react";
import './main.css'
import Header from "./Header/Header";
import Description from "./Description/Description";
import Animation from "./Animation/Animation";
 
export default function Main() {

    return (
        <div className='page'>
            <Header />
            <div className='container flex-box'>
                <Description />
                <Animation />
            </div>
        </div>
        
    )
}