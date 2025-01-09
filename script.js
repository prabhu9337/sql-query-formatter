let columnMapping = {};

// Function to generate column mapping dynamically
function generateColumnMapping() {
    // Get the column names entered by the user
    const columnInput = document.getElementById('columnInput').value.trim();

    // Reset the column mapping
    columnMapping = {};

    // Split the input by newlines and process each column
    const columns = columnInput.split('\n');
    columns.forEach(column => {
        const formattedColumn = column.trim();
        if (formattedColumn) {
            // Directly store the exact case as entered
            columnMapping[formattedColumn.toLowerCase()] = formattedColumn;
        }
    });

    // Notify the user that the mapping has been generated
    alert('Column Mapping Generated!');
}

// Function to convert the query using the dynamic column mapping
function convertQuery() {
    let input = document.getElementById('sqlInput').value;

    // Use regex to find column names (word boundaries) and replace them with mapped values
    let formattedQuery = input.replace(/\b([a-zA-Z0-9_]+)\b/g, (match) => {
        // Check if the match is a column name in the mapping and replace it
        if (columnMapping[match.toLowerCase()]) {
            return columnMapping[match.toLowerCase()];
        }
        return match;
    });

    // Display the converted query
    document.getElementById('sqlOutput').value = formattedQuery;
}

// Function to copy the content of the output textarea
function copyOutput() {
    const outputTextarea = document.getElementById('sqlOutput');

    // Select the text in the output textarea
    outputTextarea.select();
    outputTextarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to clipboard
    document.execCommand('copy');

    // Optionally, provide feedback to the user
    alert('SQL query copied to clipboard!');
}