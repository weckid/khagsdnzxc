let list = document.querySelectorAll(".list li");
let boxes = document.querySelectorAll(".catalog_card");
let boexs = document.querySelectorAll(".product_card")

list.forEach((el)=>{
    el.addEventListener("click", (e)=>{

        list.forEach((li)=>{
            li.classList.remove("active");
        })
        e.target.classList.add("active");

        boxes.forEach((el2)=>{
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.filter).forEach((li)=>{
            li.style.display = "block";
        })
    })
})
list.forEach((el)=>{
  el.addEventListener("click", (e)=>{

      list.forEach((li)=>{
          li.classList.remove("active");
      })
      e.target.classList.add("active");

      boexs.forEach((el2)=>{
          el2.style.display = "none";
      })
      document.querySelectorAll(e.target.dataset.filter).forEach((li)=>{
          li.style.display = "block";
      })
  })
})