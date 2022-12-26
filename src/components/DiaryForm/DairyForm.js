import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { selectProducts } from '../../redux/products/productsSelectors';
import {
  addDiaryEntry,
  deleteDiaryEntry,
  getDailyDiary
} from 'redux/diary/diaryOperations';
import { selectDiaryInput} from 'redux/selectors';
import { loadProducts } from '../../redux/products/productsOperations';

import {
  SForm,
  DContainer,
  ButtonDairy,
  DairyInput,
  Add,
  Plus,
  DairyProdLi,
  TitleDairy,
  WeightDairy,
  CalDairy,
  ButtonX,
  UlDairy,
  ModalButton,
} from './DairyFormStyle';

export const DairyForm = ({ screenWidth, day }) => {

  const dispatch = useDispatch();
  const consumedProductList = useSelector(selectDiaryInput);
  const productList = useSelector(selectProducts);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getDailyDiary(day));
  }, [dispatch, day]);

  async function searchInBase(e) {
    dispatch(loadProducts(e.target.value));
  }

  function sendMarktoBase(e) {
    e.preventDefault();
    const product = productList[0]._id;
    const weight = e.currentTarget.elements.dairyweight.value;
    dispatch(
      addDiaryEntry({
        date: day,
        product,
        weight,
      })
    );
    document.getElementById('dairyform').reset();
  }

  const arrOfProducts = useSelector(selectProducts);

  return (
    <>
      <DContainer>
        <SForm id="dairyform"
          onSubmit={sendMarktoBase}>

          <DairyInput id="dairyproduct"
            name="dairyproduct"
            data-name="dairyproduct"
            placeholder="Enter product name"
            onChange={searchInBase}
            list="listOfProductMatches"
          />
          {arrOfProducts?.length > 0 && <ListOfProductMatches arr={arrOfProducts} />}
          <ListOfProductMatches />
          <DairyInput id="dairyweight"
            name="dairyweight"
            placeholder="Grams"
          />
          <ButtonDairy>
            <Add>Add</Add>
            <Plus>+</Plus>
          </ButtonDairy>
        </SForm>
        {consumedProductList.length > 0 && <ListOfEatenProdactsByDay day={day} />}

        {screenWidth < 768 && (
          <ModalButton onClick={() => setIsOpen(!isOpen)}>{<Plus style={{ display: 'block' }}>+</Plus>}</ModalButton>
        )}
      </DContainer>
    </>
  );
};

const ListOfProductMatches = () => {
  const array = useSelector(selectProducts);
  if (array.length === 0) return;
  return (
    <datalist id="listOfProductMatches">
      {array && array.length > 0 &&
        array.map(({ title: { ua }, _id }) => <option key={_id} value={ua}></option>)}
    </datalist>)
}

const ListOfEatenProdactsByDay = ({ day }) => {
  const dispatch = useDispatch()
  const prod = useSelector(selectDiaryInput)
  return (<>
    <UlDairy>
      {prod &&
        prod.map(el => (
          <DairyProdLi key={el._id}>
            <TitleDairy>{el.title.ua}</TitleDairy>
            <WeightDairy>{el.weight} g</WeightDairy>
            <CalDairy>{el.calories} kcal</CalDairy>
            <ButtonX onClick={() => dispatch(deleteDiaryEntry({ day, id: el._id }))}>X</ButtonX>
          </DairyProdLi>
        ))}
    </UlDairy>
  </>)
}

