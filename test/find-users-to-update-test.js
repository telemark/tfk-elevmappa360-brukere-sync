'use strict'

const tap = require('tap')
const findUsersToUpdate = require('../lib/find-users-to-update')
const teachers = require('./data/teachers.json')
const users = require('./data/users.json')
const usersToUpdate = findUsersToUpdate({masterdata: teachers, data: users})

tap.throws(
  function () {
    findUsersToUpdate()
  },
  {message: 'Missing required input: options'},
  'Throws if options not supplied'
)

tap.throws(
  function () {
    findUsersToUpdate({masterdata: false})
  },
  {message: 'Missing required input: options.masterdata'},
  'Throws if options.masterdata not supplied'
)

tap.throws(
  function () {
    findUsersToUpdate({masterdata: true})
  },
  {message: 'Invalid format options.masterdata must be an array'},
  'Throws if options.masterdata not an array'
)

tap.throws(
  function () {
    findUsersToUpdate({masterdata: [], data: false})
  },
  {message: 'Missing required input: options.data'},
  'Throws if options.data not supplied'
)

tap.throws(
  function () {
    findUsersToUpdate({masterdata: [], data: true})
  },
  {message: 'Invalid format options.data must be an array'},
  'Throws if options.data not an array'
)

tap.equal(usersToUpdate.length, 3, 'It finds the correct users to update')
