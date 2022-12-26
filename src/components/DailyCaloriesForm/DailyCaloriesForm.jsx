import { useDispatch, useSelector } from 'react-redux';
import { fetchDiet, fetchUserDiet } from 'redux/diet/dietOperations';
import { setParams } from 'redux/user/userSlice';
import { useAuth } from 'hooks/useAuth';
import { selectIsLoadingDiet, selectUserParams } from 'redux/selectors';
import {
  FormField,
  Title,
  InputWrapper,
  InputBlock,
  Label,
  InputField,
  LabelValue,
  Button,
  RadioGroupContainer,
  RadioTitle,
  RadioWrapper,
  RadioLabel,
  RadioField,
} from './DailyCaloriesForm.styled';
// import { schema } from '../validation/joiValidation';

export const DailyCaloriesForm = () => {
  const userParams = useSelector(selectUserParams);
  const dispatch = useDispatch();

  let height = userParams.height;
  let age = userParams.age;
  let currentWeight = userParams.currentWeight;
  let desireWeight = userParams.desireWeight;
  let bloodType = userParams.bloodType;

  // const [height, setHeight] = useState(userParams?.height);
  // const [age, setAge] = useState(userParams?.age);
  // const [currentWeight, setCurrentWeight] = useState(userParams?.currentWeight);
  // const [desireWeight, setDesireWeight] = useState(userParams?.setDesireWeight);
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

    // const data = { height, age, currentWeight, desireWeight, bloodType };
    // const validationResult = schema.validate(data);
    // if (validationResult.error) {
    //   alert('field is required');
    // }

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
    <FormField onSubmit={handleSubmit} autoComplete="off">
      <Title>Calculate your daily calorie intake right now</Title>
      <InputWrapper>
        <InputBlock>
          <Label>
            <InputField type="text" placeholder="" name="height" value={height} onChange={handleChange} />
            <LabelValue> Height *</LabelValue>
          </Label>
          <Label>
            <InputField type="text" placeholder="" name="age" value={age} onChange={handleChange} />
            <LabelValue> Age *</LabelValue>
          </Label>
          <Label>
            <InputField type="text" placeholder="" name="currentWeight" value={currentWeight} onChange={handleChange} />
            <LabelValue> Current weight *</LabelValue>
          </Label>
        </InputBlock>
        <InputBlock>
          <Label>
            <InputField type="text" placeholder="" name="desireWeight" value={desireWeight} onChange={handleChange} />
            <LabelValue> Desired weight *</LabelValue>
          </Label>
          <RadioGroupContainer>
            <RadioTitle>Blood type *</RadioTitle>
            <RadioWrapper>
              <RadioField
                id="first"
                type="radio"
                name="bloodType"
                value="1"
                checked={bloodType === 1}
                onChange={onOptionChange}
              />
              <RadioLabel htmlFor="first">1</RadioLabel>
              <RadioField
                id="second"
                type="radio"
                name="bloodType"
                value="2"
                checked={bloodType === 2}
                onChange={onOptionChange}
              />

              <RadioLabel htmlFor="second">2</RadioLabel>
              <RadioField
                id="third"
                type="radio"
                name="bloodType"
                value="3"
                checked={bloodType === 3}
                onChange={onOptionChange}
              />
              <RadioLabel htmlFor="third">3</RadioLabel>
              <RadioField
                id="fourth"
                type="radio"
                name="bloodType"
                value="4"
                checked={bloodType === 4}
                onChange={onOptionChange}
              />
              <RadioLabel htmlFor="fourth">4</RadioLabel>
            </RadioWrapper>
          </RadioGroupContainer>
        </InputBlock>
      </InputWrapper>
      <Button type="submit" disabled={isLoading}>
        Start loosing weight
      </Button>
    </FormField>
  );
};
