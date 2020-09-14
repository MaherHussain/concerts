// @ts-ignore
window.handleConcertsRequest = () => {
  document.body.innerHTML = `
  <h1>Concerts</h1>
   <div id="concerts">
        <table id="table">
            <tbody>
                <tr>
                    <th> title</th>
                    <th>band</th>
                    <th>venue</th>
                    <th>created_date</th>
                    <th>performance_date</th>
                    <th>price</th>
                    
                </tr>

            </tbody>
        </table>

    </div>`;

  // make sure the backend api works before working with it here
  fetch("../../backend/api/concerts")
    .then((response) => response.json())
    .then((concerts) => renderConcerts(concerts));
};

function renderConcerts(concerts) {
  const table = document.querySelector("#table");
  const tbody = document.querySelector("tbody");
  concerts.forEach((concert) => {
    tbody.innerHTML += `<tr>
      <td>${concert.title}</td>
      <td> ${concert.band}</td>
      <td> ${concert.venue}</td>
      <td> ${concert.created_date}</td>
      <td> ${concert.performance_date}</td>
      <td> ${concert.price}</td>
      </tr>`;
  });
}
