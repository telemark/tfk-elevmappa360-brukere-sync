'use strict'

const tap = require('tap')
const findUsersToRemove = require('../lib/find-users-to-remove')
const teachers = require('./data/teachers.json')
const users = require('./data/users.json')
const usersToRemove = findUsersToRemove({ masterdata: teachers, data: users })

tap.throws(
  function () {
    findUsersToRemove()
  },
  { message: 'Missing required input: options' },
  'Throws if options not supplied'
)

tap.throws(
  function () {
    findUsersToRemove({ masterdata: false })
  },
  { message: 'Missing required input: options.masterdata' },
  'Throws if options.masterdata not supplied'
)

tap.throws(
  function () {
    findUsersToRemove({ masterdata: true })
  },
  { message: 'Invalid format options.masterdata must be an array' },
  'Throws if options.masterdata not an array'
)

tap.throws(
  function () {
    findUsersToRemove({ masterdata: [], data: false })
  },
  { message: 'Missing required input: options.data' },
  'Throws if options.data not supplied'
)

tap.throws(
  function () {
    findUsersToRemove({ masterdata: [], data: true })
  },
  { message: 'Invalid format options.data must be an array' },
  'Throws if options.data not an array'
)

tap.equal(usersToRemove.length, 1, 'It finds the correct users to remove')
