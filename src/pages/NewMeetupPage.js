import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  async function onFormSubmit(formdata) {
    await fetch("https://react-meetup-e8871-default-rtdb.europe-west1.firebasedatabase.app/meetups.json", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json"
      }
    });

    history.replace("/");
  }

  return (
    <div>
      <h1>New Meetup</h1>
      <NewMeetupForm onSubmit={onFormSubmit} />
    </div>
  );
}

export default NewMeetupPage;
