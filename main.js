const express = require('express');
const app = express();
const xlsx = require('xlsx');

const file_db = 'db3.xlsx';

function read_Data(index_sheet) {
  const workbook = xlsx.readFile(file_db);
  const list_sheet = workbook.SheetNames;
  const sheet = workbook.Sheets[list_sheet[index_sheet-1]]
  const data_sheet = [];
  console.log(list_sheet);
  
  delete sheet['!ref'];
  delete sheet['!margins'];
  const lis_data = Object.entries(sheet);
  for(let data of lis_data.splice(4)) {data_sheet.push(data[1]['v']);}
  return data_sheet;
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/data', (req, res) => {
  // Panggil fungsi readExcelSheetData di sini
  const data = read_Data(1);
  // console.log(data);
  res.json(data);
})

app.get('/', (req,res) => {
  res.send('heloo');
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});