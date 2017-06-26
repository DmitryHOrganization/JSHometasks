const bodyEl=document.querySelector('body');
function generateTable(rows, cols){
    const createTable=document.createElement('table');
    bodyEl.append(createTable);
    const tableEl=document.querySelector('table');
    tableEl.style.borderCollapse = 'collapse';
    tableEl.style.textAlign='center';
    tableEl.style.verticalAlign='middle';
    const cellStyle = document.querySelector('style');
    cellStyle.insertAdjacentText('afterBegin', 'th,td{border:1px solid black; height:30px; width:90px} ')
    let i=1;
    do {
        const theadElem=document.createElement('th');
        theadElem.insertAdjacentText('afterBegin', 'column'+ ' '+i)
        tableEl.append(theadElem);
        i++;
    }
    while(i<=cols)
    for(row=1; row<=rows; row++){
        const trElem=document.createElement('tr'); //тут мне кажется странным обьявлять внутри цикла константу, но вынести ее нельзя и по логике это именно константа
        tableEl.append(trElem);
        // if(row%2==0){ //тут один из не рабочих вариантов попытки покрасить фон четных строк
        //     trElem.classList.add('.lightBlueBack');
        //      trElem.style.background='#dfe2e5';
        // }
        for(col=1; col<=cols; col++){
            const tdElem=document.createElement('td');
            tableEl.append(tdElem);
            tdElem.insertAdjacentText('afterBegin', row + '.'+ col);
        }
    }
}