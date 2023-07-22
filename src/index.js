// const messegeEl = document.querySelector('.js-alert');

// messegeEl.addEventListener("click", onNotificationClick);

// showNotification()

// function showNotification(){
//     messegeEl.classList.add("is-visible");
//     setTimeout(hideNotification, 3000)
// }

// function hideNotification(){
//     matchMedia.classList.remove("is-visible");
// }

// function onNotificationClick(){
//     hideNotification()
// }


//   function printNumbers(from, to) {
//     let current = from;
    
//     const intervalId = setInterval(() => {
//       console.log(current);
//       if (current === to) {
//         clearInterval(intervalId);
//       }
//       current++;
//     }, 1000);
//   }
  

//   printNumbers(1, 5);


  /**
 * Коли запуститься запланована функція?
 * 1.Після циклу.
 * 2. До циклу.
 * 3. На початку циклу.
 * Що буде показувати в консолі?
 */

//  let a = 0;
//  setTimeout(() => console.log('а в setTimeout', a), 100); // ?
//  припустимо, що час виконання цієї функції > 100 мс
//  for(let i = 0; i < 10000; i++) {
//    a += 1;
//    console.log('а всередині циклу', a);
//  }
  
  