import './style.css'
import Abhi from '../assets/abhi.png'
function Home() {
    return(
        <>
            <div className='greeting'>
                Hello and welcome!
            </div>
            <div className='intro'>
                I am Abhishek Saggam
            </div>
            <div className='abhiimg'>
                <img src={Abhi} alt='my-img'/>
            </div>
        </>
    );
}

export default Home