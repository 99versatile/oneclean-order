import React, { useEffect, useState } from 'react';

const CheckButton = ({ item, className, onClick, checked }) => {
    const [check, setCheck] = useState(checked);
    const serviceTime = item.serviceTime;
    
    return (
      <div>
        <input type="button" id='checkbox' name='checkbox' value={`${item.date}/${item.serviceTime}`} onClick={onClick}  />
      </div>
    )
  }

export default CheckButton;