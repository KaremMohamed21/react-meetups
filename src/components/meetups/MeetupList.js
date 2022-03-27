import MeetupItem from "./MeetupItem";
import "./MeetupList.css";

function MeetupList(props) {
  return (
    <ul className='list'>
      {props.meetups.map((meetup) => (
        <MeetupItem meetup={meetup} />
      ))}
    </ul>
  );
}

export default MeetupList;
