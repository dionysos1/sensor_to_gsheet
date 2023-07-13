function doGet(e) { 
  Logger.log( JSON.stringify(e) );  // view parameters
  var result = 'Ok;'; // assume success
  if (e.parameter == 'undefined') {
    result = 'No Parameters';
  }
  else {
    var sheet_id = ''; 		// Spreadsheet ID
    var sheet = SpreadsheetApp.openById(sheet_id).getActiveSheet();		// get Active sheet
    var newRow = sheet.getLastRow() + 1;						
    var rowData = [];
    rowData[0] = new Date();
    // rowData[0] = new Date().toLocaleDateString('nl-NL');
    // rowData[1] = new Date().toLocaleTimeString('nl-NL');	
    for (var param in e.parameter) {
      Logger.log('In for loop, param=' + param);
      var value = stripQuotes(e.parameter[param]);
      Logger.log(param + ':' + e.parameter[param]);
      result += param;
      switch (param) {
        case 'temperature': //Parameter
          rowData[1] = Number(value); //Value in column C
          result += ' Written on column C - Temperature; ';
          break;
        case 'humidity': //Parameter
          rowData[2] = Number(value); //Value in column D
          result += ' ,Written on column D - Humidity; ';
          break;  
        case 'ppm': //Parameter
          rowData[3] = Number(value); //Value in column E
          result += ' ,Written on column E - CO2; ';
          break;  
        default:
          result += "unsupported parameter: " + param;
      }
    }
    //fill norm data
    rowData[4] = 20;
    rowData[5] = 24;
    rowData[6] = 40;
    rowData[7] = 60
    rowData[8] = 400;
    rowData[9] = 1000;
    Logger.log(JSON.stringify(rowData));
    // Write new row below
    var newRange = sheet.getRange(newRow, 1, 1, rowData.length);
    newRange.setValues([rowData]);
  }
  // Return result of operation
  return ContentService.createTextOutput(result);
}
/**
* Remove leading and trailing single or double quotes
*/
function stripQuotes( value ) {
  return value.replace(/^["']|['"]$/g, "");
}