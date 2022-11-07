import "../css/basicCard.css";

const Basiccardv2 = (props) => {
  let logoDef = require(`../../public/Photos/${props.logo}`);
  return (
    <div className="basicCard-container">
        <img className="basicCard-img" src={logoDef} alt="Character Portrait" />
        <div className="basicCard-blur"></div>
        <b className="basicCard-name">{props.name}</b>
        <b className="basicCard-class">{props.class}</b>
        <b className="basicCard-race" >{props.race}</b>
    </div>
  );
};

export default Basiccardv2;

/*
<img className = "basicCard-img"
        src={logoDef}
        srcSet={logoDef}
        loading="lazy"
        alt="Character Portrait"
      />
*/
