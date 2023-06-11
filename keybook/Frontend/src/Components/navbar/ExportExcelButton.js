// ExportExcelButton.js
import React from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { ButtonDefault } from "../buttons/ButtonDefault";

function ExportExcelButton({ onExport }) {
  const { getDownloadLink, isEnabled } = useDownloadExcel({
    filename: "Usuarios",
    sheetname: "Usuarios",
    format: "xlsx",
    includeSheet: true,
  });

  return (
    <>
      {isEnabled && (
        <ButtonDefault
          className="dropdown-item"
          onClick={(e) => {
            e.of(e);
            onExport(getDownloadLink());
          }}
        >
          <FontAwesomeIcon
            icon={faTimes}
            className="icon"
            title="Exportar a Excel"
          />
        </ButtonDefault>
      )}
    </>
  );
}

export default ExportExcelButton;
