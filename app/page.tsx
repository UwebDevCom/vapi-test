// pages/index.tsx
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Vapi from "@vapi-ai/web";
import onStart from "./actions/vapiAction";
export default function Home() {
    const [state, setState] = useState<any>({
        isListening: false,
        transcript: "",
        response: "",
        error: "",
        vapiInitialized: false,
        vapiInstance: null,
    });

    const vapi: any = new Vapi({
        apiKey: process.env.NEXT_PUBLIC_VAPI_API_KEY,
        baseUrl: "/api/vapi",
    } as any);

    useEffect(() => {
        console.log(vapi, process.env.NEXT_PUBLIC_VAPI_API_KEY);
        setState({ ...state, vapiInstance: vapi });
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <Head>
                <title>Voice Assistant</title>
                <meta
                    name="description"
                    content="Next.js Voice Assistant with Vapi"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full max-w-md">
                <h1 className="text-3xl font-bold mb-8">Voice Assistant</h1>

                {state.error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full">
                        {state.error}
                    </div>
                )}

                <button
                    onClick={() => onStart(vapi)}
                    className={`w-32 h-32 rounded-full mb-8 flex items-center justify-center text-white font-bold text-xl focus:outline-none
            ${
                state.isListening
                    ? "bg-red-500 animate-pulse"
                    : "bg-blue-500 hover:bg-blue-600"
            }`}
                >
                    {state.isListening ? "Listening..." : "Talk"}
                </button>

                {state.transcript && (
                    <div className="w-full mb-4">
                        <h2 className="text-xl font-semibold mb-2">
                            You said:
                        </h2>
                        <p className="bg-white p-4 rounded-lg shadow">
                            {state.transcript}
                        </p>
                    </div>
                )}

                {state.response && (
                    <div className="w-full">
                        <h2 className="text-xl font-semibold mb-2">
                            Assistant:
                        </h2>
                        <p className="bg-white p-4 rounded-lg shadow">
                            {state.response}
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}
