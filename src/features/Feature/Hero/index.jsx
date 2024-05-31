import pics from "../../../assets/close-up-kid-phone.jpg"
import style from "./index.module.css"
const Hero = ()=>{
    return(
        <div className={style.mainCont}>
            <div className={style.secondCont}>
                <h2 className={style.title}>Take control of your time</h2>
                <p>
                    Spending too much time on apps or you just wanted to check
                    that one message - and ended up scrolling on Twitter for 1 hour?
                    Social media is designed to keep you glued to spend as much as possible.
                    Time that could be spent so much better with your family and friends, socializing or getting work
                    done.
                </p>
            </div>
            <div>
                <img src={pics} alt={"Social media"} className={style.applicationImage}/>
            </div>
        </div>

    )
}

export default Hero;