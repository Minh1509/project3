// <![CDATA[
'use strict';

class DatePicker {
  constructor(id, callback) {
    this.id = id;
    this.callback = callback;
  }
  
  render(selectedDate) {
    const datepicker = document.getElementById(this.id);
      datepicker.innerHTML = `
      
        <div class = "calendar" >
          <div class="month">
          <i class="fas fa-angle-left prev"></i>
          
            <div class="date">
              <h1></h1>
              <p></p>
            </div>
            <i class="fas fa-angle-right next"></i>
          </div>
          <div class="weekdays">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </div>
          <div class="days"></div>
        
        </div>      
        `;
    
    
    const monthDays = datepicker.querySelector(".days");
    const selectedMonth = selectedDate.getMonth();
    const selectedYear = selectedDate.getFullYear();

    const lastDay = new Date(selectedYear,selectedMonth + 1,0).getDate();

    const prevLastDay = new Date(selectedYear,selectedMonth,0).getDate();

    const firstDayIndex = new Date(selectedYear,selectedMonth,1).getDay();

    const lastDayIndex = new Date(selectedYear,selectedMonth + 1,0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    datepicker.querySelector(".date h1").innerHTML = months[selectedMonth];

    datepicker.querySelector(".date p").innerHTML = selectedDate.toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (i === new Date().getDate() && selectedDate.getMonth() === new Date().getMonth() && selectedDate.getFullYear() === new Date().getFullYear()) {
        days += `<div class="today">${i}</div>`;
      } else {
        days += `<div>${i}</div>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
      
    }
    monthDays.innerHTML = days;

    datepicker.querySelector(".prev").addEventListener("click", () => {
      selectedDate.setMonth(selectedDate.getMonth() - 1);
      this.render(selectedDate);
    });
    
    datepicker.querySelector(".next").addEventListener("click", () => {
      selectedDate.setMonth(selectedDate.getMonth() + 1);
      this.render(selectedDate);
    });
  };
  
  
}






