import { useDispatch, useSelector } from 'react-redux';
import { selectDiary } from 'redux/diary/diarySelectors';
import { addDiaryEntry } from 'redux/diary/diaryOperations';
// import { } from './DailyCaloriesForm.styled';

export const DailyCaloriesForm = () => {
  const dispatch = useDispatch();
  const diaryInfo = useSelector(selectDiary);
  console.log(diaryInfo);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addDiaryEntry(e.currentTarget.value));
    // const form = e.currentTarget;
    // form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h2>Calculate your daily calorie intake right now</h2>
      <label>
        Height *
        <input type="text" name="height" />
      </label>
      <label>
        Age *
        <input type="text" name="age" />
      </label>
      <label>
        Current weight *
        <input type="text" name="currentWeight" />
      </label>
      <label>
        Desired weight *
        <input type="text" name="desiredWeight" />
      </label>
      <p>Blood type *</p>
      <label>
        <input type="radio" name="bloodType" value="1" />1
      </label>
      <label>
        <input type="radio" name="bloodType" value="2" />2
      </label>
      <label>
        <input type="radio" name="bloodType" value="3" />3
      </label>
      <label>
        <input type="radio" name="bloodType" value="4" />4
      </label>
      <button type="submit">Start loosing weight</button>
    </form>
  );
};
