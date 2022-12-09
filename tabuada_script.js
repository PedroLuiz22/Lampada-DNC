const tabuada = () =>{
    let num = window.document.getElementById('num');
    let end = document.getElementById('end');
    if( num.value.length == 0 ||  end.value.length == 0){
        window.alert('Preencha os dados corretamente');
    } else{
        let n = Number(num.value);
        let e = Number(end.value);
        let x = 0;
        let r = "";
        let res = window.document.getElementById('resposta')
        r = n * e;
        res.innerHTML = `A tabuada do ${n} é: <br>`
        
        do{
            r = n * x;
            res.innerHTML += `${n} X ${x} = ${r} <br>` 
            x++;
        } while(x <= e)
    }
    
    
}