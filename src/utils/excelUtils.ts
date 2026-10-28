import * as XLSX from 'xlsx/xlsx.mjs';
import * as fs from 'fs';

// Bind Node’s fs so XLSX can access the filesystem
XLSX.set_fs(fs);

export class ExcelUtils {
  static readExcel(filePath: string, sheetName?: string): Record<string, string>[] {
    const workbook = XLSX.readFile(filePath);
    const sheet = sheetName || workbook.SheetNames[0];
    return XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {
      defval: "",
      raw: false
    }) as Record<string, string>[];
  }
}
