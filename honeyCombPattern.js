//to print the honey comp or hexagon pattern

function honeyComb(row,col) {//inputs

    function line1(){
        let line1 = '';
        for (let i=0;i<col;i++) {
            line1 += ' __   ';
        }
        console.log(line1);
    }

    function line2() {
        let line2 = '';
        for (let i=0;i<col;i++) {
            line2 += '/  \\__';
        }
        console.log(line2);
    }

    function line3() {
        let line3 = '';
        for (let i=0;i<col;i++) {
            line3 += '\\__/  ';
        }
        console.log(line3);
    }

    for(let i=0;i<row;i++) {
        line1()
        line2()
        line3()
    }
}

honeyComb(3,4)
console.log("row: 3" + " col: 4" )
honeyComb(4,5)
console.log("row: 4" + " col: 5" )
