
import fs from 'fs';
import path from 'node:path';
import { parse } from 'csv-parse/sync';

export class CSVUtils {

    static readCSV(filePath: string): Record<string, string>[] {

       return parse(fs.readFileSync(filePath, 'utf-8'), {
        columns: true,
        skip_empty_lines: true,
        trim: true,
        relax_column_count: true   // allows rows with missing values
});     
    }
}
