import { RuntimeContext } from '../typings/runtime-context'

export const DEFAULT_RUNTIME_CTX: RuntimeContext = {
  isRunning: true,
  PC: 0,
  returnValue: -1,
  dataview: new DataView(new ArrayBuffer(2 ** 9))
}
