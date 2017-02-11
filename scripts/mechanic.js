var storage = window.localStorage,
    number  = storage.getItem('number')||0;

var createWorks = (text, n) => {

    var div = document.createElement('div');
        div.className = 'rectangle animated1 fadeIn';

    var inner = document.createElement('div');
        inner.className = 'inner';
        inner.innerHTML = text;
    div.appendChild(inner);

    var remove = document.createElement('div');
        remove.className = 'remove';
        remove.innerHTML = '<i class="icon-trash"></i>';
        remove.addEventListener('click', () => {
            div.parentNode.removeChild(div);
            storage.removeItem(n);
        });
    div.appendChild(remove);

    document.getElementsByClassName('works_container')[0].appendChild(div);
}

document.getElementById('button').addEventListener('click' , () => {
    var name = document.getElementById('text');

    if(name.value != ''){
      number++;
      storage.setItem(number, name.value);
      storage.setItem('number', number);

      createWorks(name.value, number);
      name.value = '';
    }
});

for(var i = 0; i <= number; i++){
  if(i>0 && storage.getItem(i) != null) createWorks(storage.getItem(i), number);
}
