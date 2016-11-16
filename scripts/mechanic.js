var quantity=0;
var name;


document.getElementById('button').addEventListener('click', function(){

  name = document.getElementById('text').value;
  document.getElementById('text').value = "";

  var div = document.createElement('div');
  div.className += 'rectangle animated1 fadeIn';

  document.getElementsByClassName('works_container')[0].appendChild(div);

////////////////////////////////////////////////////////////////////

  var inner = document.createElement('div');
  inner.className += 'inner';
  inner.innerHTML = name;

  document.getElementsByClassName('rectangle')[quantity].appendChild(inner);

////////////////////////////////////////////////////////////////////

  var remove = document.createElement('div');
  remove.className += 'remove';

  document.getElementsByClassName('rectangle')[quantity].appendChild(remove);

  quantity+=1;
});
