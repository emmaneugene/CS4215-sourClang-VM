import { Program } from 'estree'

import { Microcode } from './../typings/microcode'

/**
 * Converts the AST (from `./parser`) into
 * a list of microcode commands (to be loaded into `./interpeter`).
 *
 * This is the integration point between the "compiler" and the rest of this codebase.
 */
export function compile(ast: Program): Array<Microcode> {
  return []
}
