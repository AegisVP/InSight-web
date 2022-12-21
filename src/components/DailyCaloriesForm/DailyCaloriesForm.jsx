import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiet } from 'redux/diet/dietSelectors';
import { getDiet } from 'redux/diet/dietOperations';
// import { } from './DailyCaloriesForm.styled';

export const DailyCaloriesForm = () => {
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [bloodType, setBloodType] = useState(1);

  const dispatch = useDispatch();
  const dietInfo = useSelector(selectDiet);
  console.log(dietInfo);

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
      case 'desiredWeight':
        setDesiredWeight(e.currentTarget.value);
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
    setDesiredWeight('');
    setBloodType(1);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getDiet({ height, age, currentWeight, desiredWeight, bloodType }));
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
        <input type="number" name="desiredWeight" value={desiredWeight} onChange={handleChange} />
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
