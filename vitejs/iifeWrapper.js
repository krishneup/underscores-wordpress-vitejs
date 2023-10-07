function iifeWrapper() {
    return {
        name: 'iife-wrapper',
        renderChunk(code, chunk, options) {
            // Check if the chunk is an entry point
            if (chunk.isEntry) {
                // Wrap the code in an IIFE with strict mode
                const wrappedCode = `(function() { "use strict";\n${code}\n})();`;
                return {
                    code: wrappedCode,
                    map: null, // You can handle source maps here if needed
                };
            }
            return null;
        },
    };
}

export default iifeWrapper;
