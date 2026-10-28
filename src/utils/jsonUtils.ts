import fs from 'fs';

export class JSONUtils {
  static readJSON(filePath: string): Record<string, any>[] {
    // Read file contents
    const rawData = fs.readFileSync(filePath, 'utf-8');

    // Parse JSON
    const data = JSON.parse(rawData);

    // Ensure the result is always an array of objects
    return Array.isArray(data) ? data : [data];
  }
}
