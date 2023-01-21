
function itemized(clicked_id){
    //document.getElementById("item1-airforce").outerText="ordered"
    Callid = clicked_id
    localStorage.setItem("textvalue",Callid)
    console.log(localStorage.getItem("textvalue"))
    window.location.href=('cart.html')
    console.log(Callid)
    //getConsole = document.getElementById(Callid)
    
}

//var img = document.createElement('div')
//shoe = localstorage.getItem("textvalue")
 /* items = "<div style='height:400px;padding:2%;background:white;float:right;border-radius:2%;margin:10px;align-items:center;"
  +"margin-left:30%;overflow-y:scroll;object-fit:fill;'> <h1>CART</h1> Scroll to submit order<br>"+'<img src="'+ localStorage.getItem("textvalue")
  +'" width="250px"">' + "<br>"
  +"<form action='https://formspree.io/f/xjvdvqnk' method='post' style='padding: 2%;background:linear-gradient(60deg,white,grey,darkgrey)'>"
  +"NAME:<input type='text' name='user_name' required> <br><br>"
  +"SHOE SIZE:<select name='size'required>"
  +"<option value='35'>35</option>"
  +"<option value='36'>36</option>"
  +"<option value='37'>37</option>"
  +"<option value='38'>38</option>"
  +"<option value='39'>39</option>"
  +"<option value='40'>40</option>"
  +"<option value='42'>42</option>"
  +"<option value='43'>43</option>"
  +"<option value='44'>44</option>"
    +"</select> <br> <br>"
    +"TEL NO.: <input type='tel'max='13'name='telephone no:'required> <br><br>"
    +"WHATSAPP:<input type='tel' name='whatsapp no:' required><br><br>"
    +"EMAIL:<input type='email' name='email'required> <br><br>"
    +"QUANTITY: <input type='number'value='1' width='2px' required><br><br>"
    +"<input type=''text name='image' value='"+localStorage.getItem("textvalue")+"' style='display:none;'>"
    +"  <button type='submit' name='submission'>Submit</button>"
    +"</form> </div>"
 
 
console.log(localStorage.getItem("textvalue"))
//document.getElementById("shoe_type").textContent = shoe
console.log(items)
cart = document.getElementById("cart")
cart.outerHTML= items
*/
