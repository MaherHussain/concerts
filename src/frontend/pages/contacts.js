window.handleContactsRequest = () => {
  document.body.innerHTML = `
  <h1>Contacts</h1>
   <div id="contacts">
        <table id="table">
            <tbody>
                <tr>
                    <th> name</th>
                    <th>phone number</th>
                </tr>

            </tbody>
        </table>

    </div>`;

  // make sure the backend api works before working with it here
  fetch("/api/contacts")
    .then((response) => response.json())
    .then((contacts) => renderContacts(contacts));
};

function renderContacts(contacts) {
  const table = document.querySelector("#table");
  const tbody = document.querySelector("tbody");
  contacts.forEach((contact) => {
   

    tbody.innerHTML += `<tr>
      <td>${contact.name}</td>
      <td> ${contact.phonenumber}</td>
      </tr>`;
     
    
  });
}
