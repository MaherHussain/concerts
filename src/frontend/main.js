var root = document.location.origin;
var router = new Navigo(root);

// when no route specified it assumes the base route: "/"
router.on(window.handleHomeRequest).resolve();
router.on("/concerts", window.handleContactsRequest).resolve();
router.on("/concerts/:id", window.handleContactRequest).resolve();
