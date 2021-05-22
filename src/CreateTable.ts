const createTableStructure = (data : Array<any>, options?: {[id: string]: any}) => {
  const headers : Array<string> = [];
  const rows = [];

    const getColumnName = (fieldName: string) => {
        return options?.headers && options?.headers[fieldName] ? options.headers[fieldName] : fieldName;
    };

    //Prepare headers
    data.forEach(data => {
        Object.keys(data).forEach(fieldname => {
            const columnName = getColumnName(fieldname);
            if(!headers.includes(columnName)){
                headers.push(columnName)
            }
        })
    });

    // Prepare rows
    for(let row of data){
        const rowValues = new Array(headers.length).fill(' ');
        for(let fieldName of Object.keys(row)){
            const columnName = getColumnName(fieldName);
            const columnIndex = headers.indexOf(columnName);
            rowValues[columnIndex] = row[fieldName];
        }
        rows.push(rowValues);
    }
    return {headers, rows};
};

const toMarkupRow = (values : Array<string>) => `|${values.join('|')}|\n`

const toTable = (data : Array<any>, options?: {[id: string]: any}) => {
    const tableData = createTableStructure(data, options);
    let markup = '';
    markup += toMarkupRow(tableData.headers);
    markup += toMarkupRow(tableData.headers.map(a => '-'));
    markup += tableData.rows.map(row => toMarkupRow(row)).join('');
    return markup;
};

export default {toTable};
