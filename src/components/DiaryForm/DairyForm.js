import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectProducts } from '../../redux/products/productsSelectors';
import { deleteDiaryEntry } from 'redux/diary/diaryOperations';
import { selectDiaryInput } from 'redux/selectors';
import { loadProducts } from '../../redux/products/productsOperations';
import { addDiaryEntry, getDailyDiary } from '../../redux/diary/diaryOperations';
//import axios from 'axios'
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
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
//const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2E3NzM5ZTMxZDIxM2ExZmJlZjRmMGQiLCJpYXQiOjE2NzE5MTg1NjV9.M9A0s5-i_2J1sehR_teX5YPe4Yngl8hwgqCLY-dfrII'

//axios.defaults.headers.common.Authorization = `Bearer${myToken }`
//import { Modal } from 'components/Modal/Modal';

export const DairyForm = ({ screenWidth, day }) => {
  const dispatch = useDispatch();
  const indexOfFood = null;
  const form = document.querySelector('dairyproduct');
  let prod = [];
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('title') ?? '';
  console.log('query', query)


  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getDailyDiary(day))
    console.log('day', day)
      }, [dispatch, day]);

  prod = useSelector(selectDiaryInput);

  const todayDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const mon = String(now.getMonth()).padStart(2, '0');
    const year = now.getFullYear();
    const genDate = `${day}${mon}${year}`;
    console.log({ genDate });
    return genDate;
  };

  async function searchInBase(e) {
      setSearchParams(e.target.value === '' ? {} : { title: e.target.value })
      dispatch(loadProducts(query))
  } 

  console.log({ date: todayDate() });

  function sendMarktoBase(e) {
    e.preventDefault();
    // send req with product
    dispatch(
      addDiaryEntry({
        // owner: user._id,
        date: day || todayDate(),
        product: indexOfFood,
        weight: form.elements.weight.value,
      })
    );
    form.reset();
  }


  const arrOfProducts = useSelector(selectProducts);

  return (
    <>
      <DContainer>
        <SForm id="dairyform"
          onChange={searchInBase}
          onSubmit={sendMarktoBase}>
          <DairyInput id="dairyproduct"
            name="dairyproduct"
            data-name="dairyproduct"
            placeholder="Enter product name"
            onChange={searchInBase}
            list='listOfProductMatches'
          />
          {arrOfProducts && arrOfProducts.length > 0 && <ListOfProductMatches arr={arrOfProducts} />}
          <DairyInput id="dairyweight" name="dairyweight" placeholder="Grams" />
          <ButtonDairy>
            <Add>Add</Add>
            <Plus>+</Plus>
          </ButtonDairy>
        </SForm>
        {prod.length > 0 && <ListOfEatenProdactsByDay products={[]} />}

        {/*}  {screenWidth > 767 && (
          <SForm id="dairyform" onChange={searchInBase} onSubmit={sendMarktoBase}>
            <DairyInput
              id="dairyproduct"
              name="dairyproduct"
              data-name="dairyproduct"
              placeholder="Enter product name"
            />
            {arr?.length > 0 && (<ListOfProducts arr={arr} />)}
            <DairyInput id="dairyweight" name="dairyweight" placeholder="Enter product name" />
            <ButtonDairy>
              <Add>Add</Add>
              <Plus>+</Plus>
            </ButtonDairy>
          </SForm>
        )}
        {/* */}
        {screenWidth < 768 && (
          <ModalButton onClick={() => setIsOpen(!isOpen)}>{<Plus style={{ display: 'block' }}>+</Plus>}</ModalButton>
        )}
        {/*isOpen && (
          <Modal onClose={() => setIsOpen(!isOpen)}>
            <SForm id="dairyform" onChange={searchInBase} onSubmit={sendMarktoBase}>
              <DairyInput
                id="dairyproduct"
                name="dairyproduct"
                data-name="dairyproduct"
                placeholder="Enter product name"
              />
              {arr?.length > 0 && <ListOfProducts arr={arr} />}
              <DairyInput id="dairyweight" name="dairyweight" placeholder="Enter product name" />
              <ButtonDairy onClick={() => setIsOpen(!isOpen)}>
                <Add>Add</Add>
                <Plus>+</Plus>
              </ButtonDairy>
            </SForm>
          </Modal>
        )} */}
      </DContainer>
    </>
  );
};

const ListOfProductMatches = () => {
  const array = useSelector(selectProducts)
  if (array.length === 0) return;
  return (
    <datalist id='listOfProductMatches'>
      {array && array.length> 0 && array.map(({ title: { ua }, _id }) => 
        <option
          value={ua}
          key={_id}
          id={_id}
         // onChange={()=>}
        >{ua}</option>
        )
      }
    </datalist>
  );
};

const ListOfEatenProdactsByDay = day => {
  const dispatch = useDispatch();
  const prod = dispatch(getDailyDiary(day));
  return (
    <>
      <UlDairy>
        {prod &&
          prod.map(el => (
            <DairyProdLi>
              <TitleDairy>{el.title.ua}</TitleDairy>
              <WeightDairy>{el.weight} g</WeightDairy>
              <CalDairy>{el.calories} kcal</CalDairy>
              <ButtonX onClick={e => dispatch(deleteDiaryEntry(e.target._id))}>X</ButtonX>
            </DairyProdLi>
          ))}
      </UlDairy>
    </>
  );
};
