const csv = require('csv');
const csvParse = require('csv-parse');


/**
 * Create two files; one will have the PN for each assembly that matches in both gate files.
 * this will have costs USD (use exRate) to get costs 
 * use final csv to get output boilerplate
 * IRIS price list to get price for each individual PN
 * 
 * @param CSV Gate v1 --- First revision BOM
 * @param CSV Gate v2 --- Reviewed revision of BOM
 * @param CSV ExRate  --- Exchange rate to translate all costs to USD 
 * @param CSV Prices  --- IRIS price list for each PN
 * 
 * @return CSV Results
 * 
 */

class CsvHanlder {
    constructor () {

    }

    splitUserInput (args) {
        const chunks = [];

        for (let i = 0; i < 3; i++) {
            const start = i * 3;
            const end = start + 3;
            chunks.push(args.slice(start, end))
        }

        return chunks;
    }
}

const filePathArray = [];

// Get CSV files path to read from user input
const args = process.argv.slice(2);
console.log(args);
  