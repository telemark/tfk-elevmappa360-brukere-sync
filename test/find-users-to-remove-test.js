'use strict'

const tap = require('tap')
const findUsersToRemove = require('../lib/find-users-to-remove')
const teachers = require('./data/teachers.json')
const users = require('./data/users.json')
const usersToRemove = findUsersToRemove({masterdata: teachers, data: users})

tap.equal(usersToRemove.length, 1, 'It finds the correct users to remove')
