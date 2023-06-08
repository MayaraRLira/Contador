/*c = 1
while (c <=2){
    console.log(`Passo ${c}`)
    c++
}
for (let c =1; c<=4; c++){
    console.log(c)
}
console.log('FIM')*/
function contar(){
    let ini = document.getElementById('txt1')
    let fim = document.getElementById('txt2')
    let pas = document.getElementById('txt3')
    let res = document.getElementById('res')

        if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
            res.innerHTML = 'Impossível contar!!!'
            alert('ERRO faltam dados')
        }
        else {
            res.innerHTML = 'Contando:'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(pas.value)
                if (p <= 0){
                    alert('Passo INVÁLIDO, considerar PASSO 1')
                    p = 1
                }
                if (i<f){
                     for(let c = i; c <= f; c += p){
                     res.innerHTML += `${c} \u{1F449} `
                 }
            }    
                else {
                    for(let c = i; c >= f; c -= p){
                    res.innerHTML += `${c} \u{1F448} `
                    }
            }
                res.innerHTML += `         \u{1F916}`	
        }

}
