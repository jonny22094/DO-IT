var quantity=0;
var name;


document.getElementById('button').addEventListener('click', function(){

  name = document.getElementById('text').value;

  var div = document.createElement('div');
  div.className += 'rectangle animate fadeIn';
  div.innerHTML = name;

  document.getElementsByClassName('works_container')[0].appendChild(div);

////////////////////////////////////////////////////////////////////

  var div2 = document.createElement('div');
  div2.className += 'end';

  document.getElementsByClassName('rectangle')[quantity+1].appendChild(div2);

  quantity+=1;
});
