const Card=(props)=>{
    return (
        <div className="card shadow-soft">
          <img src={props.image}/>
          <div className="card-body">
            <span>{props.teacher}</span>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a className="btn">دیدن جزئیات</a>
          </div>
        </div>
      );
};

export default Card;