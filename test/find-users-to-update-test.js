'use strict'

const tap = require('tap')
const findUsersToUpdate = require('../lib/find-users-to-update')
const teachers = require('./data/teachers.json')
const users = require('./data/users.json')
const usersToUpdate = findUsersToUpdate({masterdata: teachers, data: users})

tap.equal(usersToUpdate.length, 1, 'It finds the correct users to update')
