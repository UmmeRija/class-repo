// let aurl = window.location.href;
// // console.log(aurl)
// let getUrl = new URL(aurl);
// // console.log(getUrl);
// let CatName  = getUrl.searchParams.get("category");
// console.log(CatName)
$(document).ready(function(){
<<<<<<< HEAD
  $.ajax({
    url:"assets/json/project.json",
    type: "get",
    success:function(card1){
    // console.log(card1.hosting)
    i=""
    $.each(card1,function(index,object){
      let catObj = object.name.split(" ").join("").toLowerCase();
      // console.log(catObj)
      i+=` <div class="col-lg-3 md-6 mt-2"></div>
        <div class="card">
          <img src="${object.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${object.name}</h5>
           
            <a href="product.html?category=${catObj}" class="btn btn-primary">More</a>
          </div>
        </div>`
    })
    $("#catagory").html(i);
    }
  })
=======
    let i="";
    $.ajax({
        url:"assets/json/project.json",
        type:"get",
        success:function(proData){
            $.each(proData,function(keys,arrays){
  let catObj = keys.split(" ").join("").toLowerCase();
if(catObj==CatName){
   $.each(arrays,function(indexes,objects){
    i+=`<div class="col-lg-3 col-md-6 mt-2">
    <div class="card" >
        <img src="${objects.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title py-2">${objects.name}</h5>
            
            <a href="product.html?category=${catObj}" class="btn btn-outline-success">detail</a>
        </div>
    </div>
</div>`
   });
   $("#product").html(i);
//  console.log(arrays.name)
}
               
            })
        
            // console.log(proData);
        }
    })
>>>>>>> f6a8f28e3a929064d718483aec2e4e83f76845ff
})