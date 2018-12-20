[![Build Status](https://travis-ci.org/telemark/tfk-elevmappa360-brukere-sync.svg?branch=master)](https://travis-ci.org/telemark/tfk-elevmappa360-brukere-sync)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-elevmappa360-brukere-sync/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-elevmappa360-brukere-sync?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# tfk-elevmappa360-brukere-sync

Synkronisering av brukere mellom Buddy og 360.

Henter alle lærere fra Buddy

Henter alle med rollen Lærer fra 360

Alle fra Buddy som ikke er i 360 opprettes som bruker.

Alle fra 360 som ikke er i Buddy slettes.

Alle i 360 som tilhører et annet sted enn de har tilgang i Buddy legge inn for endring.

## Usage

Pass an object with masterdata and data.

Masterdata are all teachers from Buddy

Data are all users in Public 360 with role **Lærer**

```JavaScript
const syncLists = require('tfk-elevmappa360-brukere-sync')
const teachers = require('./test/data/teachers.json')
const users = require('./test/data/users.json')

console.log(syncList({masterdata: teachers, data: users}))

```

returns an object with 3 lists.

**adds** all new user to be added to 360

**updates** all users who needs updating

**removes** all users to be removed from 360

```JavaScript
{ adds: 
   [ { firstName: 'Testine',
       middleName: null,
       lastName: 'Testen',
       fullName: 'Testine Testen',
       username: '01016101',
       personalIdNumber: '20',
       mobilePhone: null,
       mail: 'Testine.Testen@t-fk.no',
       privateMail: 'Testine.Testen@example.com',
       department: 'SKIVS',
       organizationNumber: '974568039' },
     { firstName: 'Testine',
       middleName: null,
       lastName: 'Testen',
       fullName: 'Testine Testen',
       username: '01016103',
       personalIdNumber: '40',
       mobilePhone: null,
       mail: 'Testine.Testen@t-fk.no',
       privateMail: 'Testine.Testen@example.com',
       department: 'SKIVS',
       organizationNumber: '974568039' } ],
  updates: 
   [ { firstName: 'Testine',
       middleName: null,
       lastName: 'Testen',
       fullName: 'Testine Testen',
       username: 'ulnor',
       personalIdNumber: '50',
       mobilePhone: null,
       mail: 'Testine.Testen@t-fk.no',
       privateMail: 'Testine.Testen@example.com',
       department: 'SKIVS',
       organizationNumber: '974568039' },
     { firstName: 'Testine',
       middleName: null,
       lastName: 'Testen',
       fullName: 'Testine Testen',
       username: 'jomid',
       personalIdNumber: '60',
       mobilePhone: null,
       mail: 'Testine.Testen@t-fk.no',
       privateMail: 'Testine.Testen@example.com',
       department: 'SKIVS',
       organizationNumber: '974568039' } ],
  removes: 
   [ { role: 'Lærer',
       name: 'Guest User',
       userId: 'GuestUser',
       enterpriseNumber1: '974568039',
       enterpriseNumber2: null } ] }
```
# License

[MIT](LICENSE)
