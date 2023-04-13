import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Review() {
  // logger will log entirety of the store
  const allPeople = useSelector(store => store.allPeople);
  const personName = useSelector(store => store.personName);
  const activityType = useSelector(store => store.activityType);
  const minutes = useSelector(store => store.minutes);
  const miles = useSelector(store => store.miles);
  const dispatch = useDispatch();
  const history = useHistory();

  const sendToServer = () => {
    axios.post('/activity', {
      name: personName,
      type: activityType,
      minutes: minutes,
      miles: miles,
    }).then((response) => {
      dispatch({ type: 'CLEAR_FORM '});
      // Navigate to List View
      history.push('/activity-list');
    }).catch((error) => {
      alert(`We're sorry. Your call cannot be completed as dialed. Please check the number and dial again. Thank you.`);
      console.log(error);
    })
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