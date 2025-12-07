const Card = ({ title, subtitle, description, badge, emoji }) => {
  return (
    <article className="card">
      <div className="card-top">
        <span className="card-badge">{badge}</span>
        <span className="card-emoji">{emoji}</span>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-subtitle">{subtitle}</p>
      <p className="card-description">{description}</p>
      <button className="card-btn">Learn More</button>
    </article>
  );
};

export default Card;
