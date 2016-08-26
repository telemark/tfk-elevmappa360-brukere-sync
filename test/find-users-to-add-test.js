'use strict'

const tap = require('tap')
const findUsersToAdd = require('../lib/find-users-to-add')
const teachers = require('./data/teachers.json')
const users = require('./data/users.json')
const usersToAdd = findUsersToAdd({masterdata: teachers, data: users})

tap.equal(usersToAdd.length, 1, 'It finds the correct users to add')
