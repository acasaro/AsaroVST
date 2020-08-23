// Attach audio output device to the provided media element using the deviceId.
export const attachSinkId = (element, sinkId) => {
    if (typeof element.sinkId !== 'undefined') {
        element
            .setSinkId(sinkId)
            .then(() => {
                console.log(`Success, audio output device attached: ${sinkId}`);
            })
            .catch((error) => {
                let errorMessage = error;
                if (error.name === 'SecurityError') {
                    errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
                }
                console.error(errorMessage);

                // Jump back to first output device in the list as it's the default.
            });
    } else {
        console.warn('Browser does not support output device selection.');
    }
};
