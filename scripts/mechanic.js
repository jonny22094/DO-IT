var element = new Array(100);
var quantity = 0;
var high_id = window.localStorage.getItem("high_id")||0;
var name;

// Add new works

document.getElementById('button').addEventListener('click', function(){

  name = document.getElementById('text').value;
  document.getElementById('text').value = "";

  if(name.length!=0){

    ////////////           box          ////////////
    var div = document.createElement('div');
    div.className = 'rectangle animated1 fadeIn';
    div.id = high_id;
    document.getElementsByClassName('works_container')[0].appendChild(div);

    ////////////           text           ////////////
    var inner = document.createElement('div');
    inner.className = 'inner';
    inner.innerHTML = name;
    inner.id = high_id;
    document.getElementsByClassName('rectangle')[quantity].appendChild(inner);

    ////////////           remove           ////////////
    var remove = document.createElement('div');
    remove.className = 'remove';
    remove.id = high_id;
    remove.innerHTML = '<i class="icon-trash"></i>';
    remove.setAttribute('onclick', 'remove_div('+high_id+')');
    document.getElementsByClassName('rectangle')[quantity].appendChild(remove);

    save();
    quantity++;
    high_id++;
    op();
  }
});

// Remove works
function remove_div(g){

  var element = document.getElementById(g);
  element.className = 'rectangle animated1 fadeOut';
  window.localStorage.removeItem(g);

  setTimeout(function(){
    element.parentNode.removeChild(element);
    quantity--;
    op();
  }, 250);
}


// Open
function op(){
  var open = document.getElementById('open');
      open.innerHTML = 'Open: '+quantity;

  if(quantity<10) open.style.marginLeft = '220px';
  else if(quantity<100) open.style.marginLeft = '210px';
  else if(quantity<1000) open.style.marginLeft = '200px';

}
