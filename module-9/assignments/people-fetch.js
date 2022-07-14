
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

const loadData = async () => {
    try {
        const response = await fetch(`people.xml`);
        const str = await response.text();
        const data = new DOMParser().parseFromString(str, `text/xml`);
        displayData(data);
    } catch (error){
        console.error(error);
    }
};

loadData();

fetch("people.xml")
    .then((response) => response.text())
    .then((str) => new DOMParser().parseFromString(str,"text/xml"))
    .then(displayData);
