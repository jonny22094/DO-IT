let storage = window.localStorage;
let number  = storage.getItem( 'number' ) || 0;

const createWorks = ( text, n ) => {

    let div = document.createElement( 'div' );
        div.className = 'rectangle animations fadeIn';

    let inner = document.createElement( 'div' );
        inner.className = 'inner';
        inner.innerHTML = text;
    div.appendChild( inner );

    let remove = document.createElement( 'div' );
        remove.className = 'remove';
        remove.innerHTML = '<i class="icon-trash"></i>';
        remove.addEventListener('click', () => {
            div.className = 'rectangle animations1 fadeOut';
            setTimeout( () => {
                div.parentNode.removeChild( div );
            }, 225 );
            storage.removeItem( n );
        });
    div.appendChild( remove );

    document.getElementsByClassName( 'works_container' )[ 0 ].appendChild( div );
}

document.getElementById( 'button' ).addEventListener( 'click' , () => {
    let name = document.getElementById( 'text' );

    if( name.value !== '' ){
      number++;
      storage.setItem( number, name.value );
      storage.setItem( 'number', number );

      createWorks( name.value, number );
      name.value = '';
    }
}, false );

for( let i = 0; i <= number; i++ ){
  if( storage.getItem( i ) != null ) createWorks( storage.getItem( i ), i );
}
