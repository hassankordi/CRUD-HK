





var nameInp =document.getElementById("ProductName");
var catigoryInp =document.getElementById("ProductCategory");
var priceInp =document.getElementById("ProductPrice");
var descInp =document.getElementById("ProductDescription");




if(localStorage.getItem("productKey")==null){
var productList=[];
}
else{
    productList=JSON.parse(localStorage.getItem("productKey"))
    display();
}


function addProduct(){
   

if(validateProductName()){
    var product={
    
        name: nameInp.value,
        catigory: catigoryInp.value,
        price:priceInp.value,
        description:descInp.value,
    
       }
       productList.push(product);
       localStorage.setItem("productKey",JSON.stringify(productList))
       display();
      
      nameInp.value = "";
      catigoryInp.value = "";
      priceInp.value = "";
      descInp.value = "";
}
else{
    add.setAttribute("disabled",true);
    nameInp.classList.add("is-invalid");
    myAlert.classList.remove("d-none")}

}



function display(){
    trs="";

    for(var i=0;i<productList.length;i++){
trs+=` <tr> <td>${i}</td><td>${productList[i].name}</td> <td>${productList[i].catigory}</td> 
<td>${productList[i].price}</td>     <td>${productList[i].description}</td>   
  <td> <button onclick="del(${i});" class="btn btn-danger">Delete</button> </td> 
  <td> <button onclick="update(${i});" class="btn btn-warning">Update</button> </td>   
       </tr>`
    }
    //localStorage.getItem("productKey");
    document.getElementById("tbody").innerHTML=trs;

}
function del(index){
    productList.splice(index,1);
    localStorage.setItem("productKey",JSON.stringify(productList));
    display();
}




var searchInp=document.getElementById("searchInpt");

function search(){
    var str ="";
    for(var i=0;i<productList.length;i++){

        if(productList[i].name.toLowerCase().includes(searchInp.value.toLowerCase())){
            str+=` <tr> <td>${i}</td>
            <td>${productList[i].name.toLowerCase().replace(searchInpt.value.toLowerCase(),`<span style="background-color: yellow;">${searchInpt.value.toLowerCase()}</span>`)}</td> 
            <td>${productList[i].catigory}</td> 
            <td>${productList[i].price}</td>     <td>${productList[i].description}</td>   
              <td> <button onclick="del(${i});" class="btn btn-danger">Delete</button> </td> 
              <td> <button onclick="" class="btn btn-warning">Update</button> </td>   
                   </tr>`

        }
    }

    document.getElementById("tbody").innerHTML=str;
   
}

var myAlert=document.getElementById("myAlert");





 

var add=document.getElementById("add");

function update(index){

    nameInp.value=productList[index].name;
 
    catigoryInp.value=productList[index].catigory;
    priceInp.value=productList[index].price;
    descInp.value=productList[index].description;

add.innerHTML="Update Product";

add.classList.remove("btn-info")
add.classList.add("btn-warning");

add.onclick =function(){
    productList[index].name=nameInp.value;
    productList[index].catigory=catigoryInp.value;
   productList[index].price= priceInp.value;
    productList[index].description = descInp.value;
    localStorage.setItem("productKey",JSON.stringify(productList));
    display();

    nameInp.value = "";
      catigoryInp.value = "";
      priceInp.value = "";
      descInp.value = "";

    add.innerHTML="add product";
        
add.classList.remove("btn-warning")
add.classList.add("btn-info");


    add.onclick =function(){
        addProduct();
        
    };


}

}

// if(add.innerHTML=="Update Product"){
//     add.addEventListener("click".function(){
//    // productList[index].splice(index,0)
//    productList[index].push()
//     })

// }



function validateProductName(){
    var validateName=/^[A-Z][a-z]/;

if(validateName.test(nameInp.value)==true){

nameInp.classList.add("is-valid");
myAlert.classList.add("d-none")
nameInp.classList.remove("is-invalid");
add.removeAttribute("disabled");
return true;

}
else{
    add.setAttribute("disabled",true);
    nameInp.classList.add("is-invalid");
    myAlert.classList.remove("d-none")

return false;
  
}

}
//validateProductName();

nameInp.addEventListener("keyup",validateProductName);


