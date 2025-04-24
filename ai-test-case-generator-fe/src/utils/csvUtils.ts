import { saveAs } from 'file-saver';

export const exportToCSV = (data: any[], filename: string, headers: string[]) => {
  const csvContent = [
    headers.join(','), // Add headers as the first row
    ...data.map((row) =>
      headers
        .map((header) => `"${(row[header] || '').toString().replace(/"/g, '""')}"`) // Escape double quotes
        .join(',')
    ),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, filename);
};