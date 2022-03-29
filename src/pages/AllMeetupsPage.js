import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-meetup-e8871-default-rtdb.europe-west1.firebasedatabase.app/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setMeetups(meetups);
      });
  }, []);

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <div>
      <h2>All Meetups</h2>
      <MeetupList meetups={meetups} />
    </div>
  );
}

export default AllMeetupsPage;
