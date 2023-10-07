import { TranscriptorSocketIo } from "./TranscriptorSocket";

export type TranscriptorEvent = Parameters<TranscriptorSocketIo["on"]>[0];
