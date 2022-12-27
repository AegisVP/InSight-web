import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SC from './CalculatorCalorieForm.styled';
import { selectIsLoadingUser, selectUserParams } from 'redux/selectors';
import { setParams } from 'redux/user/userSlice';
import { useEffect } from 'react';
import { fetchDiet, fetchUserDiet } from 'redux/diet/dietOperations';
import { refreshUser } from 'redux/user/userOperations';

function CalculatorCalorieForm({ modal }) {
  const dispatch = useDispatch();
  const userParams = useSelector(selectUserParams);
  const { isLoggedIn } = useAuth();
  const isLoading = useSelector(selectIsLoadingUser);

  useEffect(() => {
    if (isLoggedIn) dispatch(refreshUser());
  }, [isLoggedIn]);

  useEffect(() => {
    if (userParams) {
      dispatch(fetchUserDiet(userParams));
    }
  });

  const handleSubmit = values => {
    dispatch(setParams(values));
    if (isLoggedIn) dispatch(fetchUserDiet(values));
    else dispatch(fetchDiet(values));
    modal();
  };

  const ErrorMessagesSchema = Yup.object().shape({
    height: Yup.number('Значення має бути число')
      .min(100, 'Вкажіть значення більше 100 см')
      .max(260, 'Вкажіть значення менше 260 см')
      .required("Обов'язкове поле"),
    age: Yup.number('Значення має бути число')
      .min(18, 'Вкажіть значення більше 18')
      .max(100, 'Вкажіть значення менше 100')
      .required("Обов'язкове поле"),
    currentWeight: Yup.number('Значення має бути число')
      .min(40, 'Мінімальна вага 40 кг')
      .max(500, 'Максимальна вага 500 кг')
      .required("Обов'язкове поле"),
    desireWeight: Yup.number('Значення має бути число')
      .min(40, 'Мінімальна вага 40 кг')
      .max(500, 'Максимальна вага 500 кг')
      .required("Обов'язкове поле")
      .when('currentWeight', (currentWeight, schema) => {
        return schema.test({
          test: desireWeight => !!currentWeight && desireWeight < currentWeight,
          message: 'Бажана вага повинна бути менше поточної',
        });
      }),
    bloodType: Yup.number().required("Обов'язкове поле"),
  });

  return (
    <>
      <Formik
        validationSchema={ErrorMessagesSchema}
        initialValues={{
          height: userParams && userParams.height ? userParams.height : '',
          age: userParams && userParams.age ? userParams.age : '',
          currentWeight: userParams && userParams.currentWeight ? userParams.currentWeight : '',
          desireWeight: userParams && userParams.desireWeight ? userParams.desireWeight : '',
          bloodType: userParams && userParams.bloodType ? userParams.bloodType.toString() : '',
        }}
        enableReinitialize
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <SC.FormikForm>
            <SC.Title>Calculate your daily calorie intake right now</SC.Title>
            <SC.InputWrapper>
              <SC.InputBlock>
                <SC.Label>
                  <SC.InputField
                    placeholder=" "
                    name="height"
                    type="number"
                    iserror={!!errors.height && !!touched.height ? 1 : 0}
                  />
                  <SC.LabelValue>Height *</SC.LabelValue>
                  <SC.Error component="div" name="height" />
                </SC.Label>

                <SC.Label>
                  <SC.InputField
                    placeholder=" "
                    name="age"
                    type="number"
                    iserror={!!errors.age && touched.age ? 1 : 0}
                  />
                  <SC.LabelValue>Age *</SC.LabelValue>
                  <SC.Error component="div" name="age" />
                </SC.Label>

                <SC.Label>
                  <SC.InputField
                    placeholder=" "
                    name="currentWeight"
                    type="number"
                    iserror={!!errors.currentWeight && touched.currentWeight ? 1 : 0}
                  />
                  <SC.LabelValue>Current weight *</SC.LabelValue>
                  <SC.Error component="div" name="currentWeight" />
                </SC.Label>
              </SC.InputBlock>
              <SC.InputBlock>
                <SC.Label>
                  <SC.InputField
                    placeholder=" "
                    name="desireWeight"
                    type="number"
                    iserror={!!errors.desireWeight && touched.desireWeight ? 1 : 0}
                  />
                  <SC.LabelValue>Desired weight *</SC.LabelValue>
                  <SC.Error component="div" name="desireWeight" />
                </SC.Label>
                <SC.RadioGroupContainer>
                  <SC.RadioTitle>Blood type *</SC.RadioTitle>
                  {touched.bloodType && errors.bloodType && <SC.RadioError>{errors.bloodType}</SC.RadioError>}
                  <SC.RadioWrapper role="group">
                    <SC.RadioField id="first" type="radio" name="bloodType" value="1" />
                    <SC.RadioLabel htmlFor="first">1</SC.RadioLabel>
                    <SC.RadioField id="second" type="radio" name="bloodType" value="2" />
                    <SC.RadioLabel htmlFor="second">2</SC.RadioLabel>
                    <SC.RadioField id="third" type="radio" name="bloodType" value="3" />
                    <SC.RadioLabel htmlFor="third">3</SC.RadioLabel>
                    <SC.RadioField id="fourth" type="radio" name="bloodType" value="4" />
                    <SC.RadioLabel htmlFor="fourth">4</SC.RadioLabel>
                  </SC.RadioWrapper>
                </SC.RadioGroupContainer>
              </SC.InputBlock>
            </SC.InputWrapper>
            <SC.Button type="submit" disabled={isLoading}>
              Start loosing weight
            </SC.Button>
          </SC.FormikForm>
        )}
      </Formik>
    </>
  );
}

export default CalculatorCalorieForm;
