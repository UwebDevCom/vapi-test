// types/vapi.d.ts - Updated with correct module structure
declare module "@vapi-ai/web" {
    export default class VapiClient {
        constructor(options: { apiKey: string });
        assistant(options: AssistantOptions): Assistant;
    }

    // Also export the class directly for CommonJS-style imports
    export class VapiClient {
        constructor(options: { apiKey: string });
        assistant(options: AssistantOptions): Assistant;
    }

    export interface AssistantOptions {
        assistantId?: string;
        model?: string;
        config?: {
            intro?: string;
            [key: string]: any;
        };
    }

    export interface TranscriptEvent {
        transcript: string;
        isFinal: boolean;
    }

    export interface ResponseEvent {
        response: string;
        isFinal: boolean;
    }

    export interface ErrorEvent {
        error: string;
    }

    export interface Assistant {
        on(
            event: "transcript",
            callback: (event: TranscriptEvent) => void
        ): void;
        on(event: "response", callback: (event: ResponseEvent) => void): void;
        on(event: "error", callback: (event: ErrorEvent) => void): void;
        on(event: "finish", callback: () => void): void;
        start(): Promise<void>;
        stop(): Promise<void>;
    }
}
