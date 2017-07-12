const bodyEl=document.querySelector('body');
function generateTable(rows, cols){
    const createTable=document.createElement('table');
    bodyEl.append(createTable);
    const tableEl=document.querySelector('table');
    tableEl.style.borderCollapse = 'collapse';
    tableEl.style.textAlign='center';
    tableEl.style.verticalAlign='middle';
    const cellStyle = document.querySelector('style');
    if(cellStyle === null){
        tableEl.append(document.createElement('style'));
    }
    cellStyle.insertAdjacentText('afterBegin', 'th,td{border:1px solid black; height:30px; width:100px} tr:nth-child(even) {background-color: #999;}');
    if(cols<1 || rows<0 || isNaN(rows) || isNaN(cols)){
        const theadElemNaN=document.createElement('th');
        theadElemNaN.insertAdjacentText('afterBegin', 'You should use positive integer numbers as parameters values to add a table.');
        tableEl.append(theadElemNaN);
    }
    else{
        for(var row=0; row<=rows; row++){
            if(row>0){
            const trElem=document.createElement('tr'); 
            tableEl.append(trElem);
            }
            for(var col=1; col<=cols; col++){
                if(row<1){
                    const theadElem=document.createElement('th');
                    theadElem.insertAdjacentText('afterBegin', 'column'+ ' '+col);
                    tableEl.append(theadElem);    
                }
                else{
                    const tdElem=document.createElement('td');
                    tableEl.append(tdElem);
                    tdElem.insertAdjacentText('afterBegin', row + '.'+ col);
                }
            }
        }
    }
}