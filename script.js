"use strict";



const dataTime = function () {

  let date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let seconds = date.getSeconds()
  


  let dateNumber = new Date().toLocaleString('ru', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',

  });

  let dateBase = new Date().toLocaleString('ru', {
    weekday: 'long',
    year: 'numeric',
    day: 'numeric',
    month: 'long',

  })
    .replace('г.', 'года')


  const hourEnd = function () {

    if (hour == 12 || hour == 11) return 'часов'
    if (hour % 10 == 1) return 'час'
    if (hour % 10 == 2 || hour % 10 == 3 || hour % 10 == 4) {
      return 'часa'
    } else return 'часов'

  }

  const timeEnd = function (time) {

    if (time !== 11 && time % 10 == 1) return 'a'
    if ((time < 10 || time > 20) && time % 10 == 2 || time % 10 == 3 || time % 10 == 4) {
      return 'ы'
    } else return ''

  }

  const check = function (time) {
    if (time.toString().length < 2) {
      return time = '0' + time
    } else return time

  }
  
  let minuteNum = check(minute)
  let hourNum = check(hour)
  let secondsNum = check(seconds)
  let weekDayVariable =  dateBase[0].toUpperCase() + dateBase.slice(1)
  

  document.getElementsByTagName('b')[0].innerHTML = `b)  ${dateNumber} - ${hourNum} : ${minuteNum} : ${secondsNum} `;


  document.getElementsByTagName('h4')[0].innerHTML = `а) Сегодня ${weekDayVariable} ${hour} ${hourEnd()} ${minute} минут${timeEnd(minute)} ${seconds} секунд${timeEnd(seconds)} `;




}

const div = document.createElement('h4');
document.body.appendChild(div);

const div2 = document.createElement('b');
document.body.appendChild(div2);
dataTime()
setInterval(dataTime, 1000)











