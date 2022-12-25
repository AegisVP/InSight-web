import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectProducts } from '../../redux/products/productsSelectors';
import { deleteDiaryEntry } from 'redux/diary/diaryOperations';
import { selectDiaryInput } from 'redux/selectors';
import { loadProducts } from '../../redux/products/productsOperations';
import { addDiaryEntry, getDailyDiary } from '../../redux/diary/diaryOperations';
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

export const DairyForm = ({ screenWidth, day }) => {
  const dispatch = useDispatch();
  const consumedProductList = useSelector(selectDiaryInput);
  const productList = useSelector(selectProducts);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
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
            name="dairyproduct"
            data-name="dairyproduct"
            placeholder="Enter product name"
            onChange={searchInBase}
            list="listOfProductMatches"
          />
          {arrOfProducts?.length > 0 && <ListOfProductMatches arr={arrOfProducts} />}
          <DairyInput id="dairyweight" name="dairyweight" placeholder="Grams" />
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
    </datalist>
  );
};

const ListOfEatenProdactsByDay = ({ day }) => {
  const dispatch = useDispatch();
  const prod = useSelector(selectDiaryInput);

  return (
    <>
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
  );
};
