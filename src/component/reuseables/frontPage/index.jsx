import style from "./index.module.css"
import images from "../../../assets/addiction picture.jpg"
import {HandleDownload} from "./HandleDownload";

const FrontPage = ()=>{
    return(
        <div className={style.mainPage}>
            <div className={style.imageSect}>
                <div className={style.texts}>
                    <h1>Reduce Screen Time.</h1>
                    <h2>Get back up to 3h a day.</h2>
                    <p>TOP APPLICATION FOR PRODUCTIVITY</p>
                </div>
                <div className={style.buttons}>
                    <button onClick={HandleDownload} className={style.first}>Download</button>
                    <button className={style.second}>Contact Us</button>
                </div>
            </div>
            <div className={style.logo}>
               <img src={images} alt={"addiction"}/>
            </div>
        </div>

    )
}

export default FrontPage;