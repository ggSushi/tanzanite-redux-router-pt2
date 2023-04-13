import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch }from 'react-redux';

function ActivityList() {

  const dispatch= useDispatch();
  const activities = useSelector(store => store.activities);

  useEffect(() => {
    fetchActivityList();
  }, []) 

const fetchActivityList = () => {
  axios.get('/activity').then((response) => {
    dispatch({ type: 'SET_ACTIVITY_LIST', payload: response.data })
  }).catch((error) => {
    alert(`Something went wrong.`)
  });
}

  return(
    <>
      <h3>Activity List</h3>
    {
      activities.map((activity) => (
        <div key={activity.id}>
          <p>
          Name: {activity.name}
          <br />
          Type: {activity.type}
          <br />
          Minutes: {activity.minutes}
          <br />
          Miles: {activity.miles}
          <br />
          </p>
          <hr />
        </div>
      ))
    }
    </>
  )
}

export default ActivityList;