import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { selectProducts } from '../../redux/products/productsSelectors';
import {
  addDiaryEntry,
  //addDiaryEntry,
  deleteDiaryEntry
} from 'redux/diary/diaryOperations';
import {
  selectDiaryInput,
  //selectProducts
} from 'redux/selectors';
import { loadProducts } from '../../redux/products/productsOperations';
import {
  //addDiaryEntry,
  getDailyDiary
} from '../../redux/diary/diaryOperations';
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
<<<<<<< Updated upstream
import { useEffect } from 'react';
=======
//import { useEffect } from 'react';
//import { useForm } from "react-hook-form";

import { useParams, useSParams } from 'react-router-dom';

/*const a = [
  {
    "_id": "5d51694802b2373622ff553b",
    "categories": [
      "яйца"
    ],
    "weight": 100,
    "title": {
      "ru": "Яйцо куриное (желток сухой)",
      "ua": "Яйце куряче (жовток сухий)"
    },
    "calories": 623
  }
] */

>>>>>>> Stashed changes

export const DairyForm = ({ screenWidth }, day) => {
  //let arr = []
  //let prodId = ''  
  /*const todayDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const mon = String(now.getMonth()).padStart(2, '0');
    const year = now.getFullYear();
    const genDate = `${day}${mon}${year}`;
    console.log({ genDate });
    return genDate;
  };*/

  const addMark = (e) => {
    console.log('e.target', e)
    e.preventDefault()
    dispatch(addDiaryEntry({
      date: day,
      product: "5d51694802b2373622ff553b",
      weight: e.target.dairyweight.value,
    }))
  }

  const dispatch = useDispatch();
<<<<<<< Updated upstream
  const consumedProductList = useSelector(selectDiaryInput);
  const productList = useSelector(selectProducts);
=======
  let prod = [];
>>>>>>> Stashed changes

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
<<<<<<< Updated upstream
    dispatch(getDailyDiary(day));
    console.log('day', day);
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
        <SForm id="dairyform" onSubmit={sendMarktoBase}>
          <DairyInput
            id="dairyproduct"
=======
    dispatch(getDailyDiary(day))
  }, [dispatch, day]);

  


  prod = useSelector(selectDiaryInput);

  
  

  async function searchInBase(e) {
      dispatch(loadProducts(e.target.value))
  }

  return (
    <>
      <DContainer>
        <SForm id="dairyform"
          onSubmit={addMark}>

          <DairyInput id="dairyproduct"
>>>>>>> Stashed changes
            name="dairyproduct"
            data-name="dairyproduct"
            placeholder="Enter product name"
            onChange={searchInBase}
            list="listOfProductMatches"
          />
<<<<<<< Updated upstream
          {arrOfProducts?.length > 0 && <ListOfProductMatches arr={arrOfProducts} />}
          <DairyInput id="dairyweight" name="dairyweight" placeholder="Grams" />
=======
          <ListOfProductMatches   />
          <DairyInput id="dairyweight"
            name="dairyweight"
            placeholder="Grams"
          />
          <input type='hidden' id='valOfSelect'></input>
          

>>>>>>> Stashed changes
          <ButtonDairy>
            <Add>Add</Add>
            <Plus>+</Plus>
          </ButtonDairy>
        </SForm>
        {consumedProductList.length > 0 && <ListOfEatenProdactsByDay day={day} />}

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

<<<<<<< Updated upstream
const ListOfProductMatches = () => {
  const array = useSelector(selectProducts);
  if (array.length === 0) return;
  return (
    <datalist id="listOfProductMatches">
      {array &&
        array.length > 0 &&
        array.map(({ title: { ua }, _id }) => (
          <option
            value={ua}
            key={_id}
            id={_id}
            // onChange={()=>}
          >
            {ua}
          </option>
        ))}
=======


const ListOfProductMatches = (array = [] ) => {
   array = useSelector(selectProducts)
    if (!array || array.length === 0) return;
  
  return (<>
    <datalist
      id='listOfProductMatches'
    >
      {array && array.length > 0 && array.map(({ title: { ua }, _id }) =>
        <option
          data-val={_id}
          key={_id}
          id={_id}          
        >{ua }</option>
      )
      }
>>>>>>> Stashed changes
    </datalist>
  </>
  );
};

const ListOfEatenProdactsByDay = ({ day }) => {
  const dispatch = useDispatch();
<<<<<<< Updated upstream
  const prod = useSelector(selectDiaryInput);

  return (
    <>
=======
  const prod = useSelector(selectDiaryInput)
    return <>
>>>>>>> Stashed changes
      <UlDairy>
        {prod &&
          prod.map(el => (
            <DairyProdLi key={el._id}>
              <TitleDairy>{el.title.ua}</TitleDairy>
              <WeightDairy>{el.weight} g</WeightDairy>
              <CalDairy>{el.calories} kcal</CalDairy>
              <ButtonX onClick={e => dispatch(deleteDiaryEntry({ day, id: el._id }))}>X</ButtonX>
            </DairyProdLi>
          ))}
      </UlDairy>
    </>
};

