import Link from "next/link";

const Card=(props)=>{
    return (
        <div className="card shadow-soft">
          <img src={props.image}/>
          <div className="card-body">
            <span>{props.teacher}</span>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <Link href={`/course/${props._id}`} className="btn">دیدن جزئیات</Link>
          </div>
        </div>
      );
};

export default Card;