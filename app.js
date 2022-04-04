const express = require("express");
const bodyParser = require("body-parser");

const app = express();



let items = ["Buy food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {

    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindOfDay: day, newListItems: items });
});

app.post('/', (req, res) => {
    let item = req.body.newItems;
    items.push(item);
    res.redirect('/');
})
app.listen(3000, () => {
    console.log("Port is listening at 3000")

})

