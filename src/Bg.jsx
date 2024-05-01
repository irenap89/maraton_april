
import './Bg.css';
import close_x from './assets/close.png'

import logo from './assets/logo.png'
import banner from './assets/banner.png'
import axios from 'axios';

import Download_img from './Download_img'
import React, { useState } from 'react';
import No_bg from './No_bg'
import Download_popup from './Download_popup'
import Eula from './Eula'
import { useRef } from "react";

function Bg() {

  const [selected_tab, setselected_tab] = useState(true);
  const [show_download_popup, setshow_download_popup] = useState(false);
  const [show_eula_popup, setshow_eula_popup] = useState(false);

  function choose_tab(){
    setselected_tab(!selected_tab);
  }

  function show_download_poup_func(){
    setshow_download_popup(true);
  }

  function close_pupup_func(){
    setshow_download_popup(false);
  }

  function show_eula(){
    setshow_eula_popup(true);
  }

  function close_eula_func(){
    setshow_eula_popup(false);
  }


  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.click();
  };

  function uploaded_file(e){

     let file_info = e.target.files[0];


     let url ='http://localhost:5000/upload_file';

     let formData = new FormData();    //formdata object

      formData.append('name', 'ABC');   //append the values with key, value pair
      formData.append('age', 20);

      const config = {     
          headers: { 'content-type': 'multipart/form-data' }
      }

      axios.post(url, formData, config)
      .then(response => {
          console.log(response);
      })
      .catch(error => {
          console.log(error);
      });

  }

  return (
    <>
    <div className='bg_general'>
        <img src={close_x} className='close_img'/>
         <div className='title'> העלאת תמונה כדי להסיר את הרקע</div>   

         <button className='upload_btn' onClick={focusInput}>העלאת תמונה  </button>
         <input type="file" ref={inputElement} className='input_file' onChange={uploaded_file}/>
         <div className='upload_text'> פורמטים נתמכים png, jpeg</div>


         <div className='middle_div'>
            <div className='right_div'>
                <div className='right_div_inner'>
                      <Download_img show_download_poup_func={show_download_poup_func} title="תמונה חינם" subtitle="תצוגה מקדימה של תמונה" top="true" btn_text="הורד" last_title="איכות טובה עד 0.25 מגה פיקסל"></Download_img>

                      <Download_img title="Pro" subtitle="תמונה מלאה" top="false" btn_text="הורד HD" last_title="האיכות הטובה ביותר עד 25 מגה פיקסל"></Download_img>

                </div>
            </div>

            <div className='left_div'>
              <div className='tabs_cont'> 
                <div className={'tab ' +(selected_tab ? 'selected_tab': '')} onClick={choose_tab}>הוסר רקע </div>
                <div className={'tab ' +(!selected_tab ? 'selected_tab': '')} onClick={choose_tab}> מקורי </div>
              </div>

              <div className='left_div_inner'>
                  {selected_tab? <No_bg title="no_bg"></No_bg> :

                    <No_bg title="original"></No_bg>}

              </div>

              <div className='left_div_footer'>
                  <button className='takanon_btn' onClick={show_eula}> תקנון החברה </button>
                  <div className='takanon_text'> על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות שלנו. אתר זה מוגן וחלים מדיניות ופרטיות </div>
              </div>

            </div>


         </div>

        <div className='footer_cont'>
            <img src={logo} className='footer_logo'/>

            <img src={banner}  className='footer_banner'/>

        </div>


       

    </div>
  {show_download_popup? <>
  <div className='layout'> </div>
  <Download_popup  close_pupup_func={close_pupup_func}> </Download_popup></>: <></>}


  {show_eula_popup? <>
  <div className='layout'> </div>
 <Eula close_eula_func={close_eula_func}></Eula></>:<></>}

</>
  );
}

export default Bg;
