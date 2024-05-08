
import './No_bg.css';
import upload_img from './assets/img_1.png'
import warning from './assets/warning.png'

import React, { useState, useRef } from 'react';

function No_bg(props) {
    const [color_hex, setcolor_hex] = useState('');

    const inputElement = useRef();

    function choose_color_func() {
        inputElement.current.click();
    }

    function bg_color(e){
        setcolor_hex(e.target.value);
        props.save_color_func(e.target.value);
    }

    return (
        
        <div className='no_bg_cont'>
                {props.title=="no_bg" ? <><div className='no_bg_title'> אל תשכח להוריד את הקבצים, הם ימחקו אוטומטית כשתצא מהדף</div> 
                
                    <img className="warning" src={warning}/>
                    
                        <button className='choose_color' onClick={choose_color_func}> צבע רקע <span className="span_color" style={{backgroundColor: color_hex}}> </span></button>
                        <input type="color" ref={inputElement} className='input_color' onChange={bg_color}/>   

                    </>
                : <></>}

        {props.img_name && props.title=='no_bg' ?<img className="uploaded_img" src={'http://localhost:5000/no_bg_'+props.img_name} />: <></>}

        {props.img_name && props.title=='original' ?<img className="uploaded_img" src={'http://localhost:5000/'+props.img_name} />: <></>}

        </div>

    );
}

export default No_bg;
