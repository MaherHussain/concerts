// @ts-ignore
window.handleConcertRequest = (params) => {
  document.body.innerHTML = `
  <h1>concert with id ${params.id}</h1>`;

    const api = `/api/concerts/${params.id}`;
    fetch(api)
      .then((response) => response.json())
      .then((concert) => renderConcert(concert));
};
function renderConcert(concert) {
  console.log(concert);
  const p = document.createElement("p");
  p.innerHTML = concert.title;
}