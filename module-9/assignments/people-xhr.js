        const xhr = (yrl, method ="GET") => 
        new Promise((resolve) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseXML);
            }
        };
    })
        xhttp.open(method, url);
        xhttp.send();
        function displayData(xmlDoc) {
            const tableElement = document.getElementById(`people`);
            const x = xmlDoc.getElementsByTagName(`person`);
            for (let i = 0; i < x.length; i++) {
                tableElement.appendChild(stringToNode((`<tr>
                    <td>${x[i].getElementsByTagName(`id`)[0].childNodes[0].nodeValue}</td>
                    <td>${x[i].getElementsByTagName(`first_name`)[0].childNodes[0].nodeValue}${x[i].getElementsByTagName(`last_name`)[0].childNodes[0].nodeValue}</td>
                    <td>${x[i].getElementsByTagName(`email`)[0].childNodes[0].nodeValue}</td>
                    <td>${x[i].getElementsByTagName(`gender`)[0].childNodes[0].nodeValue}</td>
                    <td>${x[i].getElementsByTagName(`ip_address`)[0].childNodes[0].nodeValue}</td>
                </tr>`).trim()));
            }
        }
        function stringToNode(TableRow) {
            const y = document.createElement(`template`);
            y.innerHTML = TableRow;
            return y.content.firstChild;
        }
    
        xhr(`people.xml`).then(displayData);  
