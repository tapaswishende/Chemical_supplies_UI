const data = [
    { id: 1, chemicalName: "Ammonium Persulfate", vendor: "LG Chem", density: 3525.92, viscosity: 60.63, packaging: "Bag", packSize: "100.00 kg", unit: "kg", quantity: 6495.18 },
    { id: 2, chemicalName: "Caustic Potash", vendor: "Formosa", density: 3172.15, viscosity: 48.22, packaging: "Bag", packSize: "100.00 kg", unit: "kg", quantity: 8751.90 },
    { id: 3, chemicalName: "Dimethylaminopropylamino", vendor: "LG Chem", density: 8435.37, viscosity: 12.62, packaging: "Barrel", packSize: "75.00 L", unit: "L", quantity: 5964.61 },
    { id: 4, chemicalName: "Mono Ammonium Phosphate", vendor: "Sinopec", density: 1597.65, viscosity: 76.51, packaging: "Bag", packSize: "105.00 kg", unit: "kg", quantity: 8183.73 },
    { id: 5, chemicalName: "Ferric Nitrate", vendor: "DowDuPont", density: 364.04, viscosity: 14.90, packaging: "Bag", packSize: "105.00 kg", unit: "kg", quantity: 4154.33 },
    { id: 6, chemicalName: "n-Pentane", vendor: "Sinopec", density: 4535.26, viscosity: 66.76, packaging: "N/A", packSize: "N/A", unit: "t", quantity: 6272.34 },
    { id: 7, chemicalName: "Glycol Ether PM", vendor: "LG Chem", density: 6495.18, viscosity: 72.12, packaging: "Bag", packSize: "250.00 kg", unit: "kg", quantity: 8749.54 },
    { id: 8, chemicalName: "Sodium Bicarbonate", vendor: "Solvay", density: 1682.00, viscosity: 45.00, packaging: "Bag", packSize: "50.00 kg", unit: "kg", quantity: 3250.20 },
    { id: 9, chemicalName: "Potassium Hydroxide", vendor: "Merck", density: 2130.00, viscosity: 34.00, packaging: "Barrel", packSize: "200.00 L", unit: "L", quantity: 4180.50 },
    { id: 10, chemicalName: "Ammonium Nitrate", vendor: "Yara", density: 1706.00, viscosity: 10.50, packaging: "Bag", packSize: "50.00 kg", unit: "kg", quantity: 7635.60 },
    { id: 11, chemicalName: "Sodium Chloride", vendor: "Cargill", density: 2000.00, viscosity: 15.00, packaging: "Sack", packSize: "25.00 kg", unit: "kg", quantity: 5000.00 },
    { id: 12, chemicalName: "Calcium Carbonate", vendor: "Omya", density: 2700.00, viscosity: 20.00, packaging: "Bag", packSize: "100.00 kg", unit: "kg", quantity: 3000.00 },
    { id: 13, chemicalName: "Magnesium Sulfate", vendor: "Soda Ash", density: 1747.00, viscosity: 12.00, packaging: "Bag", packSize: "50.00 kg", unit: "kg", quantity: 4500.00 },
    { id: 14, chemicalName: "Potassium Nitrate", vendor: "Yara", density: 1100.00, viscosity: 14.00, packaging: "Sack", packSize: "25.00 kg", unit: "kg", quantity: 5800.00 },
    { id: 15, chemicalName: "Sodium Sulfate", vendor: "BASF", density: 2500.00, viscosity: 11.00, packaging: "Bag", packSize: "100.00 kg", unit: "kg", quantity: 4000.00 },
];

const tableBody = document.getElementById('chemicalBody');

function renderTable() {
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox" /></td>
            <td>${item.chemicalName}</td>
            <td>${item.vendor}</td>
            <td>${item.density}</td>
            <td>${item.viscosity}</td>
            <td>${item.packaging}</td>
            <td>${item.packSize}</td>
            <td>${item.unit}</td>
            <td>${item.quantity}</td>
        `;
        tableBody.appendChild(row);
    });
}

function sortTable(columnIndex) {
    data.sort((a, b) => {
        if (columnIndex === 1) return a.chemicalName.localeCompare(b.chemicalName);
        if (columnIndex === 2) return a.vendor.localeCompare(b.vendor);
        if (columnIndex === 3) return a.density - b.density;
        if (columnIndex === 4) return a.viscosity - b.viscosity;
        if (columnIndex === 5) return a.packaging.localeCompare(b.packaging);
        if (columnIndex === 6) return a.packSize.localeCompare(b.packSize);
        if (columnIndex === 7) return a.unit.localeCompare(b.unit);
        if (columnIndex === 8) return a.quantity - b.quantity;
    });
    renderTable();
}

document.getElementById('add').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('submit').addEventListener('click', () => {
    const newChemical = {
        id: data.length + 1,
        chemicalName: document.getElementById('chemicalName').value,
        vendor: document.getElementById('vendor').value,
        density: parseFloat(document.getElementById('density').value),
        viscosity: parseFloat(document.getElementById('viscosity').value),
        packaging: document.getElementById('packaging').value,
        packSize: document.getElementById('packSize').value,
        unit: document.getElementById('unit').value,
        quantity: parseFloat(document.getElementById('quantity').value)
    };
    data.push(newChemical);
    renderTable();
    document.getElementById('modal').style.display = 'none';
});

// Cancel button functionality
document.getElementById('cancel').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none'; // Hide modal on cancel
});

// Call this to initially render the table
renderTable();
