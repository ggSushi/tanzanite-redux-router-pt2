import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function StepFour() {
  const dispatch = useDispatch();
  const miles = useSelector(store => store.miles);
  const history = useHistory();

  const handleChange = (event) => {
    const action = {
      type: 'SET_ACTIVITY_MILES',
      payload: event.target.value
    };
    dispatch(action);
  }

  const nextPage = (event) => {
    event.preventDefault();
    if (miles > 0) {
      history.push('/review');
    } else {
      alert(`Please enter a value greater than 0.`);
    }
  }

  return (
    <>
      <h3>Step Four</h3>
      <form onSubmit={nextPage}>
        <label htmlFor="miles">Miles:</label>
        <br />
        <input type="number" value={miles} onChange={handleChange} />
        <input type="submit" value="Next" />
      </form>
    </>
  )
}

export default StepFour;