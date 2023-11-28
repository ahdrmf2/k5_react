import style from './FrontEnd.module.css';


function FrontArtice(probs) {
    //매개변수를 가진다
    return (

        <div className={style.divArtice} id="divHtml">
            <h2>{probs.title}</h2>
            <div>
                <div className={style.divimg} >
                    <img src={probs.href} alt={probs.title} />
                </div>
                <p>
                    {probs.text}
                </p>
            </div>
        </div>

    )
}

export default FrontArtice

