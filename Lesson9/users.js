const express = require("express");
const router = express.Router();

router
    .get("/", (req, res) => {
        res.send(users);
    })
    .get("/:id", (req, res) =>{
        const { id } = req.params;
        const user = users.find(user => user.id == id);

        if (user) {
            res.send(user);
        } else{
            res.status(404).send(`User ${id} does not exist`)
        }
    })
    .delete("/:id", (req, res) =>{
        const { id } = req.params;
        const index = users.findIndex(user => user.id == id);

        if (index > -1) {
            users.splice(index, 1);
            res.send(200);
        } else{
            res.status(404).send(`User ${id} does not exist`)
        }
    })
module.exports = router;

var users = [{
    "id": 1,
    "first_name": "Ivar",
    "last_name": "Ballin",
    "email": "iballin0@webmd.com",
    "gender": "Female",
    "ip_address": "10.195.243.247"
}, {
    "id": 2,
    "first_name": "Jesse",
    "last_name": "Pregel",
    "email": "jpregel1@cnbc.com",
    "gender": "Male",
    "ip_address": "198.250.132.57"
}, {
    "id": 3,
    "first_name": "Geno",
    "last_name": "Carlow",
    "email": "gcarlow2@yellowpages.com",
    "gender": "Genderfluid",
    "ip_address": "5.86.54.44"
}, {
    "id": 4,
    "first_name": "Rachel",
    "last_name": "Morphet",
    "email": "rmorphet3@theguardian.com",
    "gender": "Female",
    "ip_address": "44.17.71.230"
}, {
    "id": 5,
    "first_name": "Midge",
    "last_name": "Welbelove",
    "email": "mwelbelove4@exblog.jp",
    "gender": "Female",
    "ip_address": "243.59.129.116"
}, {
    "id": 6,
    "first_name": "Damiano",
    "last_name": "Gopsall",
    "email": "dgopsall5@smh.com.au",
    "gender": "Genderqueer",
    "ip_address": "170.168.25.190"
}, {
    "id": 7,
    "first_name": "Tomas",
    "last_name": "Diben",
    "email": "tdiben6@marriott.com",
    "gender": "Non-binary",
    "ip_address": "175.11.238.112"
}, {
    "id": 8,
    "first_name": "Raimundo",
    "last_name": "Hambric",
    "email": "rhambric7@nhs.uk",
    "gender": "Genderfluid",
    "ip_address": "222.158.141.1"
}, {
    "id": 9,
    "first_name": "Claudette",
    "last_name": "Hanalan",
    "email": "chanalan8@fema.gov",
    "gender": "Non-binary",
    "ip_address": "157.216.106.70"
}, {
    "id": 10,
    "first_name": "Jillana",
    "last_name": "Hirjak",
    "email": "jhirjak9@sciencedirect.com",
    "gender": "Bigender",
    "ip_address": "137.130.133.188"
}, {
    "id": 11,
    "first_name": "Mahala",
    "last_name": "Jinkins",
    "email": "mjinkinsa@vk.com",
    "gender": "Polygender",
    "ip_address": "92.63.64.90"
}, {
    "id": 12,
    "first_name": "Rozina",
    "last_name": "Alabone",
    "email": "ralaboneb@unblog.fr",
    "gender": "Male",
    "ip_address": "162.119.65.233"
}, {
    "id": 13,
    "first_name": "Ddene",
    "last_name": "Sandbach",
    "email": "dsandbachc@studiopress.com",
    "gender": "Agender",
    "ip_address": "72.203.103.46"
}, {
    "id": 14,
    "first_name": "Aveline",
    "last_name": "Walcot",
    "email": "awalcotd@wunderground.com",
    "gender": "Bigender",
    "ip_address": "60.166.107.214"
}, {
    "id": 15,
    "first_name": "Russell",
    "last_name": "Zuker",
    "email": "rzukere@mapy.cz",
    "gender": "Polygender",
    "ip_address": "180.211.225.222"
}, {
    "id": 16,
    "first_name": "Marrissa",
    "last_name": "Trafford",
    "email": "mtraffordf@feedburner.com",
    "gender": "Genderfluid",
    "ip_address": "27.234.34.139"
}, {
    "id": 17,
    "first_name": "Celestina",
    "last_name": "Galliver",
    "email": "cgalliverg@discovery.com",
    "gender": "Genderqueer",
    "ip_address": "116.237.117.19"
}, {
    "id": 18,
    "first_name": "Sasha",
    "last_name": "Moorcraft",
    "email": "smoorcrafth@nps.gov",
    "gender": "Polygender",
    "ip_address": "82.122.125.204"
}, {
    "id": 19,
    "first_name": "Sunny",
    "last_name": "Collen",
    "email": "scolleni@angelfire.com",
    "gender": "Male",
    "ip_address": "3.225.150.168"
}, {
    "id": 20,
    "first_name": "Kareem",
    "last_name": "Cunniam",
    "email": "kcunniamj@senate.gov",
    "gender": "Genderfluid",
    "ip_address": "10.122.4.18"
}]