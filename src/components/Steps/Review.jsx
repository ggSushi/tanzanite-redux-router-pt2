import { useSelector } from 'react-redux';

function Review() {

  const allPeople = useSelector(store => store.allPeople);
  const personName = useSelector(store => store.personName);
  const activityType = useSelector(store => store.activityType);
  const minutes = useSelector(store => store.minutes);
  const miles = useSelector(store => store.miles);

  const sendToServer = () => {
    
  }

  return(
    <>
      <h3>Review</h3>
      <div>{personName}</div>
      <div>{activityType}</div>
      <div>{minutes}</div>
      <div>{miles}</div>
      <div>{allPeople}</div>
      <button onClick={sendToServer}>Submit</button>
    </>
  )
}

export default Review;