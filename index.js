document.addEventListener('DOMContentLoaded', () => {
    const i_A1 = document.getElementById('i_A1');
    const i_A2 = document.getElementById('i_A2');
    const i_A3 = document.getElementById('i_A3');
    const i_A4 = document.getElementById('i_A4');

    const o_A1 = document.getElementById('o_A1');
    const o_A2 = document.getElementById('o_A2');
    const o_A3 = document.getElementById('o_A3');
    const o_A4 = document.getElementById('o_A4');

    const i_B1 = document.getElementById('i_B1');
    const i_B2 = document.getElementById('i_B2');
    const i_B3 = document.getElementById('i_B3');
    const i_B4 = document.getElementById('i_B4');

    const o_B1 = document.getElementById('o_B1');
    const o_B2 = document.getElementById('o_B2');
    const o_B3 = document.getElementById('o_B3');
    const o_B4 = document.getElementById('o_B4');

    const i_C1 = document.getElementById('i_C1');
    const i_C2 = document.getElementById('i_C2');
    const i_C3 = document.getElementById('i_C3');
    const i_C4 = document.getElementById('i_C4');

    const o_C1 = document.getElementById('o_C1');
    const o_C2 = document.getElementById('o_C2');
    const o_C3 = document.getElementById('o_C3');
    const o_C4 = document.getElementById('o_C4');

    const i_D1 = document.getElementById('i_D1');
    const i_D2 = document.getElementById('i_D2');
    const i_D3 = document.getElementById('i_D3');
    const i_D4 = document.getElementById('i_D4');

    const o_D1 = document.getElementById('o_D1');
    const o_D2 = document.getElementById('o_D2');
    const o_D3 = document.getElementById('o_D3');
    const o_D4 = document.getElementById('o_D4');

    const input_matrixTable = [
        [i_A1, i_B1, i_C1, i_D1],
        [i_A2, i_B2, i_C2, i_D2],
        [i_A3, i_B3, i_C3, i_D3],
        [i_A4, i_B4, i_C4, i_D4],
    ];

    const output_matrixTable = [
        [o_A1, o_B1, o_C1, o_D1],
        [o_A2, o_B2, o_C2, o_D2],
        [o_A3, o_B3, o_C3, o_D3],
        [o_A4, o_B4, o_C4, o_D4],
    ];



    const resultTable = [
        {
            field: i_A1,
            output: [o_C3],
            bishop: [o_D2, o_B4],
            lightKnight: [o_B3, o_D3],
            darkKnight: [o_C4, o_C2]
        },
        {
            field: i_A2,
            output: [o_C4, o_C2],
            bishop: [o_D1, o_B1],
            lightKnight: [o_B4, o_D2],
            darkKnight: [o_C3]
        },
        {
            field: i_A3,
            output: [o_C1],
            bishop: [o_D4, o_B2],
            lightKnight: [o_B1, o_D1],
            darkKnight: [o_C2, o_C4]
        },
        {
            field: i_A4,
            output: [o_C4, o_C2],
            bishop: [o_D3, o_B3],
            lightKnight: [o_B2, o_D4],
            darkKnight: [o_C1]
        },
        {
            field: i_B1,
            output: [o_D3, o_B3],
            bishop: [o_B2, o_D4],
            lightKnight: [o_A3],
            darkKnight: [o_D4, o_B2]
        },
        {
            field: i_B2,
            output: [o_D4, o_B2],
            bishop: [o_C1],
            lightKnight: [o_A4, o_A2],
            darkKnight: [o_D3, o_B3]
        },
        {
            field: i_B3,
            output: [o_D1, o_B1],
            bishop: [o_C4, o_C2],
            lightKnight: [o_A1],
            darkKnight: [o_D2, o_B4]
        },
        {
            field: i_B4,
            output: [o_D2, o_B4],
            bishop: [o_C3],
            lightKnight: [o_A2, o_A4],
            darkKnight: [o_D1, o_B1]
        },
        {
            field: i_C1,
            output: [o_A3],
            bishop: [o_B2, o_D4],
            lightKnight: [o_D3, o_B3],
            darkKnight: [o_A4, o_A2]
        },
        {
            field: i_C2,
            output: [o_A4, o_A2],
            bishop: [o_B1, o_D1],
            lightKnight: [o_D4, o_B2],
            darkKnight: [o_A3]
        },
        {
            field: i_C3,
            output: [o_A1],
            bishop: [o_B4, o_D2],
            lightKnight: [o_D1, o_B1],
            darkKnight: [o_A2, o_A4]
        },
        {
            field: i_C4,
            output: [o_A4, o_A2],
            bishop: [o_B3, o_D3],
            lightKnight: [o_D2, o_B4],
            darkKnight: [o_A1]
        },
        {
            field: i_D1,
            output: [o_D3, o_B3],
            bishop: [o_A2, o_A4],
            lightKnight: [o_C3],
            darkKnight: [o_B4, o_D2]
        },
        {
            field: i_D2,
            output: [o_D2, o_B4],
            bishop: [o_A1],
            lightKnight: [o_C4, o_C2],
            darkKnight: [o_B3, o_D3]
        },
        {
            field: i_D3,
            output: [o_D1, o_B1],
            bishop: [o_A4, o_A2],
            lightKnight: [o_C1],
            darkKnight: [o_B2, o_D4]
        },
        {
            field: i_D4,
            output: [o_D4, o_B2],
            bishop: [o_A3],
            lightKnight: [o_C2, o_C4],
            darkKnight: [o_B1, o_D1]
        },
    ]

    const clear = () => {
        for (let i = 0; i < input_matrixTable.length; i++) {
            for (let j = 0; j < input_matrixTable[i].length; j++) {
                const field = input_matrixTable[i][j];
                field.className = '';
            }
        }

        for (let i = 0; i < output_matrixTable.length; i++) {
            for (let j = 0; j < output_matrixTable[i].length; j++) {
                const field = output_matrixTable[i][j];
                field.className = '';
            }
        }
    }

    const selectItem = (item) => {

        const resultItem = resultTable.find(x => x.field === item);

        if (!resultItem) { alert('No result item'); }

        item.classList.add('selected');

        resultItem.output.forEach(x => x !== item && x.classList.add('output'));
        resultItem.bishop.forEach(x => x.classList.add('bishop'));
        resultItem.lightKnight.forEach(x => x.classList.add('light-knoght'));
        resultItem.darkKnight.forEach(x => x.classList.add('dark-knight'));
    }


    for (let i = 0; i < input_matrixTable.length; i++) {
        for (let j = 0; j < input_matrixTable[i].length; j++) {
            const field = input_matrixTable[i][j];

            field.addEventListener('click', () => {
                clear();
                selectItem(field);
            })
        }
    }



});