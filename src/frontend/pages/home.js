// @ts-ignore
window.handleHomeRequest = () => {
  document.body.innerHTML = `<h1>Home</h1>
  <a href="concerts" data-navigo>concerts</a>
  asd
  <a href="concerts/1" data-navigo>concerts/1</a>

  `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
  


};
router.updatePageLinks();






/*  <form method="post">
  <label for="name"> Name</label>
  <input type="text" id="name" name="name">
  <label for="phonenumber">phone number</label>
  <input type="text" id="phone" name="phonenumber">
  <input type="submit"value="add contact" > 
</form> */
