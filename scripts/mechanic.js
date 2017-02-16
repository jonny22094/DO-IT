var storage = window.localStorage,
    number  = storage.getItem( 'number' ) || 0;

var createWorks = ( text, n ) => {

    var div = document.createElement( 'div' );
        div.className = 'rectangle animations fadeIn';

    var inner = document.createElement( 'div' );
        inner.className = 'inner';
        inner.innerHTML = text;
    div.appendChild( inner );

    var remove = document.createElement( 'div' );
        remove.className = 'remove';
        remove.innerHTML = '<i class="icon-trash"></i>';
        remove.addEventListener('click', () => {
            div.className = 'rectangle animations1 fadeOut';
            setTimeout( () => {
                div.parentNode.removeChild( div );
            }, 225);
            storage.removeItem( n );
        });
    div.appendChild( remove );

    document.getElementsByClassName( 'works_container' )[ 0 ].appendChild( div );
}

document.getElementById( 'button' ).addEventListener('click' , () => {
    var name = document.getElementById( 'text' );

    if( name.value !== '' ){
      number++;
      storage.setItem( number, name.value );
      storage.setItem( 'number', number );

      createWorks( name.value, number );
      name.value = '';
    }
});

for( var i = 0; i <= number; i++ ){
  if( storage.getItem( i ) != null ) createWorks( storage.getItem( i ), i);
}
