document.addEventListener('DOMContentLoaded', () => {
    const A1 = document.getElementById('A1');
    const A2 = document.getElementById('A2');
    const A3 = document.getElementById('A3');
    const A4 = document.getElementById('A4');
    
    const B1 = document.getElementById('B1');
    const B2 = document.getElementById('B2');
    const B3 = document.getElementById('B3');
    const B4 = document.getElementById('B4');
    
    const C1 = document.getElementById('C1');
    const C2 = document.getElementById('C2');
    const C3 = document.getElementById('C3');
    const C4 = document.getElementById('C4');
    
    const D1 = document.getElementById('D1');
    const D2 = document.getElementById('D2');
    const D3 = document.getElementById('D3');
    const D4 = document.getElementById('D4');
    
    const matrixTable = [
      [A1, B1, C1, D1],
      [A2, B2, C2, D2],
      [A3, B3, C3, D3],
      [A4, B4, C4, D4],
    ];

    const resultTable = [
        {
            field: A1,
            output: [C3]
        },
        {
            field: A2,
            output: [C4, C2]
        },
        {
            field: A3,
            output: [C1]
        },
        {
            field: A4,
            output: [C4, C2]
        },
        {
            field: B1,
            output: [D3, B3]
        },
        {
            field: B2,
            output: [D4, B2]
        },
        {
            field: B3,
            output: [D1, B1]
        },
        {
            field: B4,
            output: [D2, B4]
        },
        {
            field: C1,
            output: [A3]
        },
        {
            field: C2,
            output: [A4, A2]
        },
        {
            field: C3,
            output: [A1]
        },
        {
            field: C4,
            output: [A4, A2]
        },
        {
            field: D1,
            output: [D3, B3]
        },
        {
            field: D2,
            output: [D2, B4]
        },
        {
            field: D3,
            output: [D1, B1]
        },
        {
            field: D4,
            output: [D4, B2]
        },
    ]
    
    const clear = () => {
       for(let i = 0; i < matrixTable.length; i++) {
          for(let j = 0; j < matrixTable[i].length; j++) {
            const field = matrixTable[i][j];
            field.className = '';
          }
       }
    }

    const selectItem = (item) => {

        const resultItem = resultTable.find(x => x.field === item);

        if (!resultItem) { alert('No result item'); }

        item.classList.add('selected');

        resultItem.output.forEach(x => x !== item && x.classList.add('output'));
    }
    
    
    for(let i = 0; i < matrixTable.length; i++) {
      for(let j = 0; j < matrixTable[i].length; j++) {
        const field = matrixTable[i][j];
        
        field.addEventListener('click', () => {
          clear();
          selectItem(field);
        })
      }
    }
   
    
  
  });