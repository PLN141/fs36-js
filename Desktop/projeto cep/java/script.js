//console.log('js link');
const cep = document.querySelector('#cep');

const consultaCep = asy () => {
    let cepValue = cep.value;
    console.log(cepValue);

    if(cepValue.length === 8) {
        console.log('executar o request viacep');
    }
}