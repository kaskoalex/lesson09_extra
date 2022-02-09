"use strict";


const dataTime=function(){
  setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
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

      if (hour % 10 == 1) return 'час'
      if (hour % 10 == 2 || hour % 10 == 3 || hour % 10 == 4) {
        return 'часa'
      } else return 'часов'

    }
    const check = function (time) {
      if (time.toString().length < 2) {
        return time = '0' + time
      } else return time

    } 

    document.getElementsByTagName('b')[0].innerHTML = `b)  ${dateNumber} - ${check(hour)} : ${check(minute)} : ${check(seconds)} `;
    
    
    document.getElementsByTagName('h4')[0].innerHTML = `а) Сегодня ${dateBase[0].toUpperCase() + dateBase.slice(1)} ${hour} ${hourEnd()} ${minute} минут ${seconds} секунды `;
    

  }, 1000)

}

const div = document.createElement('h4');
document.body.appendChild(div);

const div2 = document.createElement('b');
document.body.appendChild(div2);
dataTime()










