import React from "react";
import * as XLSX from "xlsx";
import { ButtonDefault } from "./ButtonDefault";

function PrintButton({ users }) {
  function handlePrintClick() {
    // Convertir los datos de usuario a un archivo de Excel
    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Crear un objeto Blob y crear una URL que apunte al archivo de Excel
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);

    // Crear un enlace <a> y establecer su atributo href en la URL del objeto Blob
    const a = document.createElement("a");
    a.href = url;
    a.download = "usuarios.xlsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return <ButtonDefault onClick={handlePrintClick} content="Imprimir" />;
}

export default PrintButton;
