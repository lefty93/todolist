const express = require("express");
const bodyParser = require("body-parser");


const app = express();



let items = ["Buy food", "Cook Food", "Eat Food"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {

    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);

    res.render("list", { listTitle: day, newListItems: items });
});

app.post('/', (req, res) => {

    let item = req.body.newItems;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
})

app.get('/work', (req, res) => {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post('/work', (req, res) => {
    let item = req.body.newItems;
    workItems.push(item);
    res.redirect('/work')
})

app.get('/about', (req, res) => {
    res.render("about");
})

app.listen(3000, () => {
    console.log("Port is listening at 3000")

})

