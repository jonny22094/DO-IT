
for(var x=0; x<=high_id; x++){
  if(window.localStorage.getItem(x)!=null){

    ////////////           box          ////////////
    var div = document.createElement('div');
    div.className = 'rectangle animated1 fadeIn';
    div.id = x;
    document.getElementsByClassName('works_container')[0].appendChild(div);

    ////////////           text           ////////////
    var inner = document.createElement('div');
    inner.className = 'inner';
    inner.innerHTML = window.localStorage.getItem(x);
    inner.id = x;
    document.getElementsByClassName('rectangle')[quantity].appendChild(inner);

    ////////////           remove           ////////////
    var remove = document.createElement('div');
    remove.className = 'remove';
    remove.id = x;
    remove.innerHTML = '<i class="icon-trash"></i>';
    remove.setAttribute('onclick', 'remove_div('+x+')');
    document.getElementsByClassName('rectangle')[quantity].appendChild(remove);
    quantity++;
  }
}
op();
