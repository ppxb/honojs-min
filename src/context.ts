import type { ResponseHeader } from './utils/headers'
import type { BaseMime } from './utils/mime'

/**
 * Design to represent HTTP response headers.
 */
type HeaderRecord
  = | Record<'Content-Type', BaseMime>
    | Record<ResponseHeader, string | string[]>
    | Record<string, string | string[]>

/**
 * Data type can be a string, ArrayBuffer, Uint8Array (buffer), or ReadableStream.
 */
export type Data = string | ArrayBuffer | ReadableStream | Uint8Array<ArrayBuffer>

/**
 * Interface for the execution context in a web worker or similar environment.
 */
export interface ExecutionContext {
  /**
   * Extends the lifetime of the event callback until the promise is settled.
   *
   * @param promise - A promise to wait for.
   */
  waitUntil: (promise: Promise<unknown>) => void
  /**
   * Allows the event to be passed through to subsequent event listeners.
   */
  passThroughOnException: () => void
  /**
   * For compatibility with Wrangler 4.x.
   */
  props: any
}
