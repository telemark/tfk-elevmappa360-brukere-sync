'use strict'

const tap = require('tap')
const findUsersToSync = require('../index')
const teachers = require('./data/teachers.json')
const users = require('./data/users.json')
const usersToSync = findUsersToSync({masterdata: teachers, data: users})

tap.throws(
  function () {
    findUsersToSync()
  },
  {message: 'Missing required input: options'},
  'Throws if options not supplied'
)

tap.throws(
  function () {
    findUsersToSync({masterdata: false})
  },
  {message: 'Missing required input: options.masterdata'},
  'Throws if options.masterdata not supplied'
)

tap.throws(
  function () {
    findUsersToSync({masterdata: true})
  },
  {message: 'Invalid format options.masterdata must be an array'},
  'Throws if options.masterdata not an array'
)

tap.throws(
  function () {
    findUsersToSync({masterdata: [], data: false})
  },
  {message: 'Missing required input: options.data'},
  'Throws if options.data not supplied'
)

tap.throws(
  function () {
    findUsersToSync({masterdata: [], data: true})
  },
  {message: 'Invalid format options.data must be an array'},
  'Throws if options.data not an array'
)

tap.equal(usersToSync.removes.length, 1, 'It finds the correct users to remove')

tap.equal(usersToSync.adds.length, 1, 'It finds the correct users to add')

tap.equal(usersToSync.updates.length, 1, 'It finds the correct users to update')
