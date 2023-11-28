
function FrontArtice({title, href, text}) {
    //매개변수를 가진다
    return (

        <div id="divHtml">
            <h2>{title}</h2>
            <div>
                <img src={href} alt={title} />
            </div>
            <p>
                {text}
            </p>
        </div>

    )
}

export default FrontArtice

