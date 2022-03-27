import Card from "../layout/Card";
import "./MeetupItem.css";

function MeetupItem(props) {
  return (
    <Card>
      <li className='item'>
        <div className='image'>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className='content'>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className='actions'>
          <button>To Favorites</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
