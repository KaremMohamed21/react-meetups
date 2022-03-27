import { useRef } from "react";
import Card from "../layout/Card";
import "./NewMeetupForm.css";

function NewMeetupForm(props) {
  // collect data by ref
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function onFormSubmit(e) {
    e.preventDefault();

    const meetupData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value
    };

    console.log(meetupData);

    props.onSubmit(meetupData);
  }

  return (
    <Card>
      <form className='form' onSubmit={onFormSubmit}>
        <div className='control'>
          <label htmlFor='title'>Meetup Title</label>
          <input id='title' required type='text' ref={titleInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='image'>Meetup Image</label>
          <input id='image' required type='url' ref={imageInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='address'>Meetup Address</label>
          <input id='address' required type='text' ref={addressInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='description'>Meetup Description</label>
          <textarea id='title' rows='5' required ref={descriptionInputRef}></textarea>
        </div>
        <div className='actions'>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
