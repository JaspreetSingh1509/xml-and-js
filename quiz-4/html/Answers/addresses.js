const loadData = () => {
  /**
   * load data from https://6253799f90266e3d0e0373e6.mockapi.io/ok/user
   */
  return fetch("https://6253799f90266e3d0e0373e6.mockapi.io/ok/user");
};

loadData().then(async (data) => {
  /**
   * render data in html table
   */
  let data1 = await data.json();
  console.log(data1);
  let body = document.getElementsByClassName("main");
  let html = data1.map(
    (element) => `<tr>
          <td>${element.address[0].country}</td>
          <td>${element.address[0].state}</td>
          <td>${element.address[0].city}</td>
          <td>${element.address[0].zipCode}</td>
          <td>${element.address[0].userId}</td>
          </tr>`
  );

  console.log(html.join());

  body.innerHTML = `<table>hello</table>`;
});
