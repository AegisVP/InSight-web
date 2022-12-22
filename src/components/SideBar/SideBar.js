import React, { useState } from 'react';
import { Section, Container, List, Title, Item, Text } from './SideBar.styled';
//
// Testing data ----------------
//
const eatedProducts = [
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
];

const notRecomendedProducts = [
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff555c',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Гречневая крупа (ядрица) зелёная',
      ua: 'Гречана крупа (ядриця) зелена',
    },
    calories: 296,
    groupBloodNotAllowed: [null, true, false, true, true],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553a',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (вареное всмятку)',
      ua: 'Яйце куряче (варене всмятку)',
    },
    calories: 159,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff5530',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Омлет с сыром',
      ua: 'Омлет із сиром',
    },
    calories: 342,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff5539',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (вареное вкрутую)',
      ua: 'Яйце куряче (варене круто)',
    },
    calories: 160,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff552c',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff5547',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Булгур',
      ua: 'Булгур',
    },
    calories: 342,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff5565',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Гречневые хлопья Myllyn Paras для каши',
      ua: 'Гречані пластівці Myllyn Paras для каші',
    },
    calories: 340,
    groupBloodNotAllowed: [null, true, false, true, true],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff5569',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Гречневые хлопья Пассим',
      ua: 'Гречані пластівці Пассим',
    },
    calories: 322,
    groupBloodNotAllowed: [null, true, false, true, true],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff5535',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное',
      ua: 'Яйце куряче',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5c76',
    },
    categories: ['масла и жиры'],
    weight: 100,
    title: {
      ru: 'Масло топлёное',
      ua: 'Масло топлене',
    },
    calories: 892,
    groupBloodNotAllowed: [null, false, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5cd0',
    },
    categories: ['сухофрукты'],
    weight: 100,
    title: {
      ru: 'Яблоки сушёные',
      ua: 'Яблука сушені',
    },
    calories: 231,
    groupBloodNotAllowed: [null, false, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5d49',
    },
    categories: ['овощи и зелень'],
    weight: 100,
    title: {
      ru: 'Кукуруза сладкая в початках',
      ua: 'Кукурудза солодка в качанах',
    },
    calories: 101,
    groupBloodNotAllowed: [null, false, false, true, true],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694902b2373622ff5d56',
    },
    categories: ['овощи и зелень'],
    weight: 100,
    title: {
      ru: 'Листья карри',
      ua: 'Листя каррі',
    },
    calories: 203,
    groupBloodNotAllowed: [null, false, false, false, false],
    __v: 0,
  },
];

const dailyRate = 2800;

//
// Testing data ----------------
//

export const SideBar = () => {
  const [show, setShow] = useState();

  function uniqueCategories(arr) {
    let result = [];
    let temp = [];

    for (let item of arr) {
      if (!temp.includes(item.categories[0])) {
        temp.push(item.categories[0]);
        result.push(item);
      }
    }
    return result;
  }

  const notRecomendedFood = uniqueCategories(notRecomendedProducts);

  const left = eatedProducts.reduce((prev, item) => {
    if (!isNaN(item.calories)) {
      return prev + parseInt(item.calories);
    }
    return prev + item.calories;
  }, 0);

  const consumed = dailyRate - left;

  const FullList = arr => {
    if (show) {
      return arr.map(it => (
        <Item key={it._id.$oid} style={{ display: 'block' }}>
          <Text>{it.categories[0]}</Text>
        </Item>
      ));
    } else
      return (
        <>
          {notRecomendedFood.slice(0, 4).map(it => (
            <Item key={it._id.$oid} style={{ display: 'block' }}>
              <Text>{it.categories[0]}</Text>
            </Item>
          ))}
          <button onClick={() => setShow(!show)}>show more ...</button>
        </>
      );
  };
  return (
    <Section>
      <Container>
        <List>
          <Title>Summary for 20/06/2020</Title>
          <Item>
            <Text>Left</Text>
            <Text>{left} kcal</Text>
          </Item>
          <Item>
            <Text>Consumed</Text>
            <Text>{consumed} kcal</Text>
          </Item>
          <Item>
            <Text>Daily rate</Text>
            <Text>{dailyRate} kcal</Text>
          </Item>
          <Item>
            <Text>n% of normal</Text>
            <Text>{Math.ceil((consumed / dailyRate) * 100)} &#37;</Text>
          </Item>
        </List>
        <List>
          <Title>Food not recommended</Title>
          {notRecomendedFood.length !== 0 ? (
            FullList(notRecomendedFood)
          ) : (
            <Item style={{ display: 'block' }}>
              <Text>Your diet will be displayed here</Text>
            </Item>
          )}
        </List>
      </Container>
    </Section>
  );
};
