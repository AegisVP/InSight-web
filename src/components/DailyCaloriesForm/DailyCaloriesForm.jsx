import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiet, fetchUserDiet } from 'redux/diet/dietOperations';
import { setParams } from 'redux/user/userSlice';
import { useAuth } from 'hooks/useAuth';
import { selectIsLoadingDiet, selectUserParams } from 'redux/selectors';
// import { } from './DailyCaloriesForm.styled';

export const DailyCaloriesForm = () => {
  const userParams = useSelector(selectUserParams);
  const dispatch = useDispatch();

  let height = userParams.height;
  let age = userParams.age;
  let currentWeight = userParams.currentWeight;
  let desireWeight = userParams.desireWeight;
  let bloodType = userParams.bloodType;

  // const [height, setHeight] = useState(userParams?.height);
  // const [age, setAge] = useState('');
  // const [currentWeight, setCurrentWeight] = useState('');
  // const [desireWeight, setDesireWeight] = useState('');
  // const [bloodType, setBloodType] = useState(3);

  const { isLoggedIn } = useAuth();
  const isLoading = useSelector(selectIsLoadingDiet);

  const handleChange = e => {
    const val = parseInt(e.currentTarget.value) || 0;
    switch (e.currentTarget.name) {
      case 'height':
        height = val;
        break;
      case 'age':
        age = val;
        break;
      case 'currentWeight':
        currentWeight = val;
        break;
      case 'desireWeight':
        desireWeight = val;
        break;
      default:
        return;
    }
    dispatch(setParams({ height, age, currentWeight, desireWeight, bloodType }));
  };

  const onOptionChange = e => {
    bloodType = parseInt(e.currentTarget.value);
    dispatch(setParams({ height, age, currentWeight, desireWeight, bloodType }));
  };

  // const resetForm = () => {
  //   setHeight('');
  //   setAge('');
  //   setCurrentWeight('');
  //   setDesireWeight('');
  //   setBloodType(1);
  // };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(setParams({ height, age, currentWeight, desireWeight, bloodType }));

    if (isLoggedIn) {
      dispatch(fetchUserDiet({ height, age, currentWeight, desireWeight, bloodType }));
    } else {
      dispatch(fetchDiet({ height, age, currentWeight, desireWeight, bloodType }));
    }
    // resetForm();
  };
  console.log({ bloodType });
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h2>Calculate your daily calorie intake right now</h2>
      <label>
        Height *
        <input type="number" name="height" value={height} onChange={handleChange} />
      </label>
      <label>
        Age *
        <input type="number" name="age" value={age} onChange={handleChange} />
      </label>
      <label>
        Current weight *
        <input type="number" name="currentWeight" value={currentWeight} onChange={handleChange} />
      </label>
      <label>
        Desired weight *
        <input type="number" name="desireWeight" value={desireWeight} onChange={handleChange} />
      </label>
      <p>Blood type *</p>
      <label>
        <input type="radio" name="bloodType" value="1" checked={bloodType === 1} onChange={onOptionChange} />1
      </label>
      <label>
        <input type="radio" name="bloodType" value="2" checked={bloodType === 2} onChange={onOptionChange} />2
      </label>
      <label>
        <input type="radio" name="bloodType" value="3" checked={bloodType === 3} onChange={onOptionChange} />3
      </label>
      <label>
        <input type="radio" name="bloodType" value="4" checked={bloodType === 4} onChange={onOptionChange} />4
      </label>
      <button type="submit" disabled={isLoading}>
        Start loosing weight
      </button>
    </form>
  );
};
