import React from 'react';

const Date = () => {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

return `${year}, ${month<10?`0${month}`:`${month}`}, ${date}`
}

export default Date;