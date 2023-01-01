import React, { useEffect, useState } from 'react';
//import '../styles';
import CheckButton from './CheckButton';
import checkedListAtom from './checkedListAtom';
import { useRecoilState } from 'recoil';

const today = new Date(); // today's date
const modifyDate = (today, number) => {
  let modifiedDate = today;
  modifiedDate.setDate(today.getDate() + number);
  return modifiedDate;
}
let availDate = null;
if (today.getDay() === 6) { // when today is Sunday
  availDate = modifyDate(today, 9);
} else if (today.getDay() === 0) {
  availDate = modifyDate(today, 8);
} else {
  availDate = modifyDate(today, 7);
}

const createYMD = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const YMD = {
    year : year, 
    month : month, 
    day: day,
  }
  return YMD;
}

let CATEGORY_LIST = []; // 신청 가능 시간대 array 생성 (평일, 2주, 오전/오후)
for (let i = 0; i < 10; i++) {
  let registerDate = availDate;
  let registerYMD = createYMD(registerDate);
  CATEGORY_LIST.push({date: `${registerYMD.year}/${registerYMD.month}/${registerYMD.day}`, serviceTime : `오전`});
  CATEGORY_LIST.push({date: `${registerYMD.year}/${registerYMD.month}/${registerYMD.day}`, serviceTime : `오후`});
  if (registerDate.getDay() === 5) {
    registerDate = modifyDate(availDate, 3);
  } else {
    registerDate = modifyDate(availDate, 1);
  }
}

const CheckBox = () => {
  const cat_list = CATEGORY_LIST.map(item => `${item.date}/${item.serviceTime}`);
  const [checkedList, setCheckedList] = useRecoilState(checkedListAtom);
  useEffect(()=>{
    setCheckedList(cat_list);
  }, []);

  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList(checkedList.filter(el => el !== item));
    } else if (!checked) {
      setCheckedList([...checkedList, item]);
    }
  };
  //console.log(checkedList);
  return (
    <div className='App'>
      <div className='InnerDiv'>
      {CATEGORY_LIST.map((item, index) => {
        if (index % 2 ===0) {
          let listBuffer = CATEGORY_LIST.slice(index, index + 2);
          return (
            <div key={`${item.date}/${item.serviceTime}`} className='Checkbox'>
              <h3>{item.date}</h3>
              <CheckButton
                item={listBuffer[0]}
                // 체크표시 & 해제를 시키는 로직. 배열에 data가 있으면 true, 없으면 false
                checked={checkedList.includes(listBuffer[0]) ? true : false}
                // onClick이벤트가 발생하면 click여부와 value(serviceTime)값을 전달하여 배열에 data를 넣어준다.
                onClick={e => {
                  e.target.checked = !(e.target.checked);
                  onCheckedElement(e.target.checked, e.target.value);                  
                }}
              />
              <CheckButton
                item={listBuffer[1]}
                // 체크표시 & 해제를 시키는 로직. 배열에 data가 있으면 true, 없으면 false
                checked={checkedList.includes(listBuffer[1]) ? true : false}
                // onClick이벤트가 발생하면 click여부와 value(serviceTime)값을 전달하여 배열에 data를 넣어준다.
                onClick={e => {
                  e.target.checked = !(e.target.checked);
                  onCheckedElement(e.target.checked, e.target.value);
                }}
              />
            </div>
          );
        }
      }
      )
    }
      </div>
    </div>
  );
}

export default CheckBox;
