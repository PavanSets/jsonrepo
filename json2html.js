// json2html.js
export default function json2html(data) {
    // Start building the HTML table
    let html = `<table data-user="pavansomisetty7703@gmail.com">
                  <thead>
                    <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
                  </thead>
                  <tbody>`;
  
    // Loop through each data object and add rows to the table
    data.forEach(item => {
      html += `<tr><td>${item.Name}</td><td>${item.Age}</td><td>${item.Gender || ''}</td></tr>`;
    });
  
    // Close the table tags
    html += `</tbody></table>`;
  
    return html;
  }
  