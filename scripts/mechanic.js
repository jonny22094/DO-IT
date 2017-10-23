const storage = window.localStorage;
let List      = JSON.parse( storage.getItem( 'TODO' ) ) || {} ;

const createWorks = ( text, id ) => {

    let div = document.createElement( 'div' );
        div.className = 'rectangle center animations fadeIn';

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
            delete List[ id ];
            storage.setItem( "TODO", JSON.stringify( List ) );
        });
    div.appendChild( remove );

    document.getElementsByClassName( 'works_container' )[ 0 ].appendChild( div );
}

document.getElementById( 'button' ).addEventListener( 'click' , () => {
    let name = document.getElementById( 'text' );

    if( name.value !== '' ){
        List[ Object.keys( List ).length ] = name.value;
        storage.setItem( "TODO", JSON.stringify( List ) );

        createWorks( name.value );
        name.value = '';
    }
}, false );

for( data in List ){
    createWorks( List[ data ], data );
}
