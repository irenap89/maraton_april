import './Eula.css';
import close_img from './assets/close1.png'

function Eula(props) {

    function close_eula(){
        props.close_eula_func()
    }

    return (
        <div className='eula_poup_cont'>
            <img src={close_img} className='close_eula' onClick={close_eula}/>
                <div className='eula_popup_text'>
                    dfsgfdgth 
                    ghfj fghj 
                    ghfj fghj 

                </div>
        
        
        </div>
    );
}

export default Eula;
