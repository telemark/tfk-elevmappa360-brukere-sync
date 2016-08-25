'use strict'

const findUsersToAdd = require('./lib/find-users-to-add')
const findUsersToRemove = require('./lib/find-users-to-remove')
const teachers = require('./test/data/teachers.json')
const users = require('./test/data/users.json')

console.log(findUsersToAdd({masterdata: teachers, data: users}))

console.log(findUsersToRemove({masterdata: teachers, data: users}))
