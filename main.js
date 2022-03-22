let primapersona = prompt( 'inserisci l eta di Domenico');
let secondapersona = prompt('inserisci l eta di Antonio');

parseInt (primapersona);
parseInt (secondapersona);

if (primapersona>secondapersona){
    alert('Domenico è più grande di Antonio')
}
else if (primapersona<secondapersona){
    alert('Domenico è più piccolo di Antonio')
}
else{
    alert('Domenico e Antonio hanno la stessa età')
}