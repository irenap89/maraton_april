import './Download_popup.css';
import close_img from './assets/close1.png'
import not_robot from './assets/not_robot.png'
function Download_popup(props) {

    function close_download_popup(){
        props.close_pupup_func();
    }

return (
    <div className="download_popup_cont_top">
        <div className='download_popup_cont'>  
                <div className='top_div'></div>

                <img src={close_img} className='close_img' onClick={close_download_popup}/>

                <div className='download_title'> אישור להורדת תמונה </div>

                <div className='download_subtitle'> האם להוריד את התמונה ?</div>

                <div className='checkbox_cont'> 
                    <input type="checkbox" />
                    <div> אני לא רובוט </div>
                    <img src={not_robot} className='not_robot_img'/>
                </div>

                <div className='download_btn_cont'>
                    <button className='cancel_btn' onClick={close_download_popup}>ביטול</button>  
                    <button className='approve_btn'>אישור</button>  
                </div>
        </div>
    </div>
);
}

export default Download_popup;



