const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',

    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });



  fetch('https://fakestoreapi.com/products').then((response)=>{return response.json();}).then((data)=>{
   
  let result = "";
  // data is in array form
  data.map((value)=>{
    result += `<div class="card">
    <h1 class="title">${value.title}</h1>
    <img src=${value.image} alt="img" class="images">
    <p>${value.description}</p>
    <p class="category">${value.category}</p>
    <p class="price">${value.price}</p>
    </div>`
  })
  
  document.getElementById('boxes').innerHTML = result;
  }).catch((error)=>{console.log(error)})