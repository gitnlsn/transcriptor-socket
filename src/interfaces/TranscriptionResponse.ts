import { Speech } from "./Speech";

export interface TranscriptionResponse {
  status: "transcribed" | "exceeded-file-size" | "internal-server-error";
  speeches: Speech[];
}
