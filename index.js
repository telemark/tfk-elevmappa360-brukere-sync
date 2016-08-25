'use strict'

const usersToAdd = require('./lib/find-users-to-add')
const usersToRemove = require('./lib/find-users-to-remove')
const usersToUpdate = require('./lib/find-users-to-update')

module.exports = options => {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.masterdata) {
    throw new Error('Missing required input: options.masterdata')
  }
  if (!Array.isArray(options.masterdata)) {
    throw new Error('Invalid format options.masterdata must be an array')
  }
  if (!options.data) {
    throw new Error('Missing required input: options.data')
  }
  if (!Array.isArray(options.data)) {
    throw new Error('Invalid format options.data must be an array')
  }

  const updates = {
    adds: usersToAdd(options),
    updates: usersToUpdate(options),
    removes: usersToRemove(options)
  }

  return updates
}
