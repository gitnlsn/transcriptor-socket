import { TranscriptionResponse } from "./interfaces/TranscriptionResponse";

export interface TranscriptorEventsMap {
  ping: (data: any) => void;
  pong: (data: any) => void;
  transcribe: (data: string) => Promise<void>;
  transcription: (transcriptionResponse: TranscriptionResponse) => void;
}
