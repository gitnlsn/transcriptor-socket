import { Speech } from "./Speech";
import { TranscriptionStatus } from "./TranscriptionsStatus";

export interface TranscriptionResponse {
  status: TranscriptionStatus;

  speeches: Speech[];
}
