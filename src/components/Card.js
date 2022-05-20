function Card({ text, img, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt="" />
      <h3 className="cardText">{text}</h3>
    </div>
  );
}

export default Card;
