# Voice Assistant App with Vapi AI

This is a simple voice assistant app built with Next.js and Vapi AI. It provides a beautiful interface with a single button to start and stop the voice assistant.

## Features

-   Clean, modern UI with a nice-looking button
-   Dark mode support
-   Real-time transcription of voice input
-   Powered by Vapi AI's voice assistant technology

## Getting Started

### Prerequisites

-   Node.js 18.x or later
-   A Vapi AI account with API keys

### Setup

1. Clone this repository
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env.local` file in the root directory with your Vapi AI API keys:

    ```
    NEXT_PUBLIC_VAPI_API_KEY=your-public-key-here
    NEXT_PUBLIC_VAPI_ASSISTANT_ID=your-assistant-id-here
    ```

    You can get these keys from your [Vapi AI Dashboard](https://dashboard.vapi.ai/).

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## How to Use

1. Click the microphone button to start the voice assistant.
2. Speak to the assistant. Your speech will be transcribed in real-time.
3. The assistant will respond to your queries using Vapi AI's technology.
4. Click the button again to stop the conversation.

## Deployment

You can deploy this app to Vercel, Netlify, or any other hosting service that supports Next.js applications.

## Learn More

-   [Vapi AI Documentation](https://docs.vapi.ai/)
-   [Next.js Documentation](https://nextjs.org/docs)

## License

This project is licensed under the MIT License.
