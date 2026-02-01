import { sdk } from '../sdk'
import { setDependencies } from '../dependencies'
import { setInterfaces } from '../interfaces'
import { versionGraph } from '../install/versionGraph'
import { actions } from '../actions'
import { restoreInit } from '../backups'
import { initializeService } from './initializeService'
import { setupStartCli } from './setupStartCli'
import { loginToOsTask } from './loginToOsTask'

export const init = sdk.setupInit(
  restoreInit,
  versionGraph,
  setInterfaces,
  setDependencies,
  actions,
  loginToOsTask,
  setupStartCli,
  initializeService,
)

export const uninit = sdk.setupUninit(versionGraph)
