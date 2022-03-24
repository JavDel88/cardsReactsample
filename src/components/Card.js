import './Card.css'

const Card = ({title, info1, info2, info3, bgColor}) => {

    const att = `Card ${bgColor}`;

    return (
        <div className={att} >
            <h2>{title}</h2>
            <ul>
                <li>{info1}</li>
                <li>{info2}</li>
                <li>{info3}</li>
            </ul>
        </div>
    )
};

export default Card;