import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l,n as m}from"./assets/vendor-99565d0e.js";const e={picker:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};e.startBtn.disabled=!0;e.startBtn.addEventListener("click",y);const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){new Date(t[0])<=Date.now()?(e.startBtn.toggleAttribute("disabled",!0),a()):e.startBtn.toggleAttribute("disabled",!1)}},s=l("#datetime-picker",f);function y(){if(s.selectedDates[0].getTime()-Date.now()<=0){a();return}e.picker.disabled=!0,e.startBtn.disabled=!0,setInterval(()=>{const o=s.latestSelectedDateObj.getTime()-Date.now(),r=h(o);b(r)},1e3)}function h(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:i,seconds:u}}function b(t){e.days.textContent=n(t.days),e.hours.textContent=n(t.hours),e.minutes.textContent=n(t.minutes),e.seconds.textContent=n(t.seconds)}function n(t){return t<10?String(t).padStart(2,"0"):t}function a(){m.Notify.failure("Please choose a date in the future")}
//# sourceMappingURL=commonHelpers2.js.map
