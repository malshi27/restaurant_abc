import jsPDF from "jspdf";
import "jspdf-autotable";

export const exportPDF = (data, fileName, columns) => {
  const doc = new jsPDF();

  // Generate table rows from data
  const rows = data.map((item) => Object.values(item));

  // Generate table in PDF
  doc.autoTable({
    head: [columns],
    body: rows,
  });

  // Download the generated PDF
  doc.save(`${fileName}.pdf`);
};
