"use client";
import React, { ChangeEventHandler } from "react";
import { readAndParseCSV } from "../utils";

export default function Tools() {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      readAndParseCSV(file)
        .then((items) => {
          localStorage.setItem("fileData", JSON.stringify(items));
          setSuccess(true);
          setError(false);
        })
        .catch((error) => {
          console.error("Error reading file:", error);
          setSuccess(false);
          setError(true);
        });
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-slate-500 h-full overflow-scroll p-6">
      <h2 className="text-2xl font-bold mb-4">Upload Inventory</h2>
      <p className="mb-4">Upload casemove inventory CSV here.</p>

      <p>No data is sent to any server.</p>
      <input
        type="file"
        id="file"
        name="file"
        onChange={handleFileChange}
        className="p-2 border border-gray-300 rounded"
      />
      {success && (
        <p className="text-green-500">
          Data successfully saved to local storage!
        </p>
      )}
      {error && (
        <p className="text-red-500">Error reading file. Please try again.</p>
      )}
    </div>
  );
}
