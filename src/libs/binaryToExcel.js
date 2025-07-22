// @import dependencies
import { saveAs } from 'file-saver';

export const convertBinaryToExcel = (binaryString, fileName) => {
  // console.log('binaryString, fileName', binaryString, fileName);

  try {
    // Validate input
    if (!binaryString || !fileName) {
      return;
    }

    // Convert the binary string into a Uint8Array
    const byteArray = new Uint8Array(
      atob(binaryString)
        .split('')
        .map(char => char.charCodeAt(0))
    );

    // Create a Blob from the byteArray, with Excel MIME type
    const blob = new Blob([byteArray], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    // Use FileSaver.js to save the Blob as an Excel file
    saveAs(blob, fileName);
  } catch (error) {
    return error;
  }
};
