'use strict'

const tap = require('tap')
const findUsersToAdd = require('../lib/find-users-to-add')
const teachers = require('./data/teachers.json')
const users = require('./data/users.json')
const usersToAdd = findUsersToAdd({ masterdata: teachers, data: users })

tap.throws(
  function () {
    findUsersToAdd()
  },
  { message: 'Missing required input: options' },
  'Throws if options not supplied'
)

tap.throws(
  function () {
    findUsersToAdd({ masterdata: false })
  },
  { message: 'Missing required input: options.masterdata' },
  'Throws if options.masterdata not supplied'
)

tap.throws(
  function () {
    findUsersToAdd({ masterdata: true })
  },
  { message: 'Invalid format options.masterdata must be an array' },
  'Throws if options.masterdata not an array'
)

tap.throws(
  function () {
    findUsersToAdd({ masterdata: [], data: false })
  },
  { message: 'Missing required input: options.data' },
  'Throws if options.data not supplied'
)

tap.throws(
  function () {
    findUsersToAdd({ masterdata: [], data: true })
  },
  { message: 'Invalid format options.data must be an array' },
  'Throws if options.data not an array'
)

tap.equal(usersToAdd.length, 2, 'It finds the correct users to add')
