
const table = [
    {
        'column-one': 'row-1-col-1',
        'column-two': 'row-1-col-2',
    },
    {
        'column-one': 'row-2-col-1',
        'column-two': 'row-2-col-2',
    }
];

const createTableStructure = (data : Array<any>) => {
  const headers : Array<string> = [];
  const rows = [];

    //Prepare headers
    data.forEach(data => {
        Object.keys(data).forEach(colName => {
            if(!headers.includes(colName)){
                headers.push(colName)
            }
        })
    });

    // Prepare rows
    for(let row of data){
        const rowValues = new Array(headers.length).fill(' ');
        for(let column of Object.keys(row)){
            const columnIndex = headers.indexOf(column);
            rowValues[columnIndex] = row[column];
        }
        rows.push(rowValues);
    }
    return {headers, rows};
};

const toMarkupRow = (values : Array<string>) => `|${values.join('|')}|\n`

const toTable = (data : Array<any>) => {
    const tableData = createTableStructure(data);
    let markup = '';
    markup += toMarkupRow(tableData.headers);
    markup += toMarkupRow(tableData.headers.map(a => '-'));
    markup += tableData.rows.map(row => toMarkupRow(row)).join('');
    return markup;
};

export default {toTable};
