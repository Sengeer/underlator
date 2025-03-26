const { parentPort } = require('worker_threads');
const TranslationPipeline = require('./model');

parentPort.on('message', async (event) => {
  try {
    const { messages, options } = event;

    parentPort.postMessage({
      status: 'progress',
      data: 'Initializing model...',
    });

    const generator = await TranslationPipeline.getInstance((progress) => {
      parentPort.postMessage({ status: 'progress', data: progress });
    });

    parentPort.postMessage({
      status: 'progress',
      data: 'Generating response...',
    });

    const output = await TranslationPipeline.generate(messages, {
      ...options,
      callback_function: (beam) => {
        parentPort.postMessage({
          status: 'update',
          output: beam[0].generated_text,
        });
      },
    });

    parentPort.postMessage({
      status: 'complete',
      output: output[0].generated_text,
    });
  } catch (error) {
    parentPort.postMessage({
      status: 'error',
      error: error.message,
    });
  }
});
