import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiet, selectUserInfo } from 'redux/diet/dietSelectors';
import { getDiet, getUserInfo } from 'redux/diet/dietOperations';
import axios from 'axios';
// import { } from './DailyCaloriesForm.styled';

export const DailyCaloriesForm = () => {
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [desireWeight, setDesireWeight] = useState('');
  const [bloodType, setBloodType] = useState(1);

  const dispatch = useDispatch();
  const dietInfo = useSelector(selectDiet);
  console.log(dietInfo);
  const userInfo = useSelector(selectUserInfo);
  console.log(userInfo);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2E0NDExNzY4M2ZiZTA1YjI5MDYzZWQiLCJpYXQiOjE2NzE3MDg5NTF9.rgT3hPGpuynrMmxdayA_rzVrcxzSIeeXihnf0mXNQQU';
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'height':
        setHeight(e.currentTarget.value);
        break;
      case 'age':
        setAge(e.currentTarget.value);
        break;
      case 'currentWeight':
        setCurrentWeight(e.currentTarget.value);
        break;
      case 'desireWeight':
        setDesireWeight(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const onOptionChange = e => {
    setBloodType(e.currentTarget.value);
  };

  const resetForm = () => {
    setHeight('');
    setAge('');
    setCurrentWeight('');
    setDesireWeight('');
    setBloodType(1);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!token) {
      dispatch(getUserInfo({ height, age, currentWeight, desireWeight, bloodType }));
    } else {
      dispatch(getDiet({ height, age, currentWeight, desireWeight, bloodType }));
    }
    resetForm();
  };

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
        <input type="radio" name="bloodType" value="1" checked={bloodType === '1'} onChange={onOptionChange} />1
      </label>
      <label>
        <input type="radio" name="bloodType" value="2" checked={bloodType === '2'} onChange={onOptionChange} />2
      </label>
      <label>
        <input type="radio" name="bloodType" value="3" checked={bloodType === '3'} onChange={onOptionChange} />3
      </label>
      <label>
        <input type="radio" name="bloodType" value="4" checked={bloodType === '4'} onChange={onOptionChange} />4
      </label>
      <button type="submit">Start loosing weight</button>
    </form>
  );
};
