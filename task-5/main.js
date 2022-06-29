const prompt = require('prompt');
prompt.start();

prompt.get('input', function (err, result) {
    let setir = parseInt(result.input.split(',')[0])

    let sutun = setir

  

    let matrix= []


    for (let i = 0; i < setir; i++) {
        
            matrix.push(new Array(sutun).fill('*'))
            
        }

    for(let i=0; i<matrix.length; i++){
        console.log(matrix[i].join(" "));
    }


});




