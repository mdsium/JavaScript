document.getElementById("loadXML").addEventListener("click", loadXML);
function loadXML() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "students.xml", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const xmldoc = xhr.responseXML;
            const students = xmldoc.getElementsByTagName("Student");
            let output = "<table border=1;><tr><tr><th>Name</th><th>ID</th><th>AGE</th></tr>";
            for (let i = 0; i < students.length; i++) {
                const name = students[i].getElementsByTagName("Name")[0].textContent;
                const id = students[i].getElementsByTagName("ID")[0].textContent;
                const age = students[i].getElementsByTagName("Age")[0].textContent;
                output += `
                <tr>
                <td> ${name}</td> 
                <td>${id}</td>
                <td>${age}</td>
                </tr>`;
            }
            output += "</table>";
            document.getElementById("result").innerHTML = output;
        }
    };
    xhr.send();
}
