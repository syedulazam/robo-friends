
const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 tc grow shadow-5">
      <img alt="robot1" src={`https://robohash.org/${id}`} />
      <div>
        <h3>{name}</h3>
        <h6>{email}</h6>
      </div>
    </div>
  );
};

export default Card;
