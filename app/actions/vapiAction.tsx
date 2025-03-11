const onStart = async (vapi: any) => {
    try {
        // Configure CORS options for the Vapi instance if possible
        console.log(vapi.setRequestOptions);
        if (vapi.setRequestOptions) {
            vapi.setRequestOptions({
                mode: "cors",
                credentials: "include",
            });
        }

        const call = await vapi.start(
            process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || ""
        );
        console.log(call);
        return call;
    } catch (error) {
        console.error("Vapi API error:", error);
        throw error;
    }
};

export default onStart;
