const router = require("express").Router();
const restricted = require("../auth/restricted-middleware");

const Children = require("./children-model.js");
const Users = require("../users/users-model.js");

// Add new child to user(parent or guardian) account
router.post("/:id/new-child", (req, res) => {
  let newChild = req.body;
  let id = req.params.id;

  Children.addChildren(id, newChild)
    .then(child => {
      res.status(201).json(child);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Could not add new child" });
    });
});

// Retrieve all children for a specific user
router.get("/:id/children", validateParentId, (req, res) => {
  const { id } = req.params;
  console.log("Get children", req.params);
  Children.findChildren(id)
    .then(children => {
      res.status(200).json(children);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Could not find children" });
    });
});

// Retrieve a specific child
router.get("/child/:id", restricted, (req, res) => {
  const id = req.params.id;
  //   console.log("child", req.headers)

  Children.findChildById(id)
    .then(child => {
      res.status(200).json(child);
    })
    .catch(err => {
      console.log("findChildbyID", err);
      res.status(500).json({ error: "Could not retrieve child" });
    });
});

// Delete a child from a user account
router.delete("/child/:id", restricted, (req, res) => {
	const { id } = req.params;
  
	Children.remove(id)
	  .then(deleted => {
		if (deleted) {
		  res.json({ removed: deleted });
		} else {
		  res.status(404).json({ error: "No child" });
		}
	  })
	  .catch(err => {
		console.log(err);
		res.status(500).json({ error: "Could not delete child" });
	  });
  });  

// Custom Middleware

function validateParentId(req, res, next) {
  const id = req.params.id;
  console.log("parent validation", req.params);

  Users.findById(id)
    .then(user => {
      if (user) {
        next();
      } else {
        res.status(404).json({ error: "This ain't yo child" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Could not retrieve user" });
    });
}


module.exports = router;
