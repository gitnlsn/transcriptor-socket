import { Socket, io } from "socket.io-client";
import { TranscriptorEventsMap } from "./TranscriptorEventsMap";

export interface TranscriptorSocketIo extends Socket<TranscriptorEventsMap> {}

/**
 * typescript wrapper over io
 */
export const ioTranscriptor: (
  opts: Parameters<typeof io>[0]
) => TranscriptorSocketIo = io;
