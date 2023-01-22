/*function itemized(clicked_id){
    //document.getElementById("item1-airforce").outerText="ordered"
    Callid = clicked_id
    localStorage.setItem("textvalue",Callid)
    console.log(localStorage.getItem("textvalue"))
    window.location.reload(true).href='cart'
    //console.log(Callid)
    //getConsole = document.getElementById(Callid)
    
}
//window.location.href="#cart"
//var img = document.createElement('div')
//shoe = localstorage.getItem("textvalue")*/
function load(items){
    items = "<div style='width:80%;padding:2%;background:white;border-radius:2%;margin:10px;align-items:center;margin-left:3%;overflow-y:scroll;object-fit:fill;'>"
    +"<form action='mailto:dailystar.co.ke@gmail.com' enctype='text/plain' method='post' style='padding: 2%;background:linear-gradient(60deg,white,grey,darkgrey)'>"
    +"<h1>CART</h1> Scroll to submit order<br>"+'<img src="'+ localStorage.getItem("textvalue")
    +'">' + "<br>"
    +"NAME:<input type='text' name='user_name' required> <br><br>"
    +"SHOE SIZE:<select name='size'required>"
    +"<option value='35'>35</option>"
    +"<option value='36'>36</option>"
    +"<option value='37'>37</option>"
    +"<option value='38'>38</option>"
    +"<option value='39'>39</option>"
    +"<option value='40'>40</option>"
    +"<option value='42' selected>42</option>"
    +"<option value='43'>43</option>"
    +"<option value='44'>44</option>"
    +"</select> <br> <br>"
    +'COLOR: <input type="color" name="color"> (only if you think it is available and confirm below)<br><br>'
    +'<input type="color-name" value="(Default)"><br> <br>'
    +"TEL NO.: <input type='tel' max='13' name='telephone no:'required> <br><br>"
    +"WHATSAPP:<input type='tel' name='whatsapp no:' required><br><br>"
    +"EMAIL:<input type='email' name='email'required> <br><br>"
    +"QUANTITY: <input type='number'value='1' width='2px' required><br><br>"
    +"DELIVERY OPTION: <input type='name' name='delivery araea'width='2px' placeholder='e.g.Makadara-Nairobi// Nyeri' required><br><br>"
    +"<input type='name' name='image/ "+localStorage.getItem("textvalue")+"' style='display:none;'>"
    +" <button type='submit' name='submission'>Submit order</button>"
    +"</form> </div>"
    console.log(localStorage.getItem("textvalue"))
    //document.getElementById("shoe_type").textContent = shoe
    console.log(items)
    cart = document.getElementById("cart")
    cart.outerHTML = items 
    return items
}
