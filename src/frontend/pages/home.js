window.handleHomeRequest = () => {
  document.body.innerHTML = `<h1>Home</h1>
  <a href="contacts" data-navigo>Contacts</a>
  asd
  <a href="contact/1" data-navigo>Contact/1</a>

  <form method="post">
  <label for="name"> Name</label>
  <input type="text" id="name" name="name">
  <label for="phonenumber">phone number</label>
  <input type="text" id="phone" name="phonenumber">
  <input type="submit"value="add contact" > 
</form>

  `;
document.querySelector("form").onsubmit = (e)=>{
   const params = new FormData(document.querySelector("form"));
 async function postData(url = "/src/backend/index.js", data = {params}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", 
    body: JSON.stringify(data), 
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

  // if any links are added to the dom, use this function
  // make the router handle those links.
  


}
router.updatePageLinks();




};