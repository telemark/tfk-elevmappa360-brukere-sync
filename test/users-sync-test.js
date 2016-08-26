'use strict'

const tap = require('tap')
const findUsersToSync = require('../index')
const teachers = require('./data/teachers.json')
const users = require('./data/users.json')
const usersToSync = findUsersToSync({masterdata: teachers, data: users})

tap.equal(usersToSync.removes.length, 1, 'It finds the correct users to remove')

tap.equal(usersToSync.adds.length, 1, 'It finds the correct users to add')

tap.equal(usersToSync.updates.length, 1, 'It finds the correct users to update')
