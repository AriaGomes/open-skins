export function readAndParseCSV(file: File): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const fileData = reader.result as string;
      const lines = fileData.split("\n");
      const items = lines.map((line) => {
        const itemName = line.split(",")[0]; // assuming item name is in the first column
        return itemName.replace(/\"/g, ""); // remove all occurrences of \"
      });
      items.shift(); // remove the first element
      resolve(items);
    };

    reader.onerror = () => {
      reject(new Error("Error reading file"));
    };

    if (file) {
      reader.readAsText(file);
    } else {
      reject(new Error("No file provided"));
    }
  });
}
