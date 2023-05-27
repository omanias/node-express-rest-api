- npm init -y
- npm i nodemon express cors dotenv morgan
- "scripts": {
  "dev": "nodemon app.js"
  },
- app.js

---

Creating server

```javascript
const express = require("express");
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello world");
});
```

---

Creating folders:
'models', 'public', 'routes', 'controllers'
