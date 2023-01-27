import plus from "../../assets/plus.png"

const TechnologiesList = () => {
    return (
        <section>
            <div>
                <h3>Tecnologias</h3>
                <button><img src={plus} alt="buttão de adicionar tecnologia" /></button>
            </div>
            <ul>
                <li>
                    <h4>Styled-components</h4>
                    <p>intermediario</p>
                </li>
            </ul>
        </section>
    )
}

export default TechnologiesList