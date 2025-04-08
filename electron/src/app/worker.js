const { parentPort } = require('worker_threads');
const Pipeline = require('./model');

parentPort.on('message', async (event) => {
  try {
    const { messages, options } = event;

    if (options.status === 'progress') {
      parentPort.postMessage({
        status: options.status,
        data: { file: ' ' },
      });
    }

    const generator = await Pipeline.getInstance((x) => {
      parentPort.postMessage({ status: 'progress', data: x });
    });

    const output = await generator(messages, {
      max_new_tokens: 512,
      do_sample: false,
    });

    parentPort.postMessage({
      status: 'complete',
      output: output[0].generated_text.at(-1).content,
    });

  } catch (error) {
    parentPort.postMessage({
      status: 'error',
      error: error.message,
    });

  } finally {
    if (generator?.model) {
      generator.model.dispose();
    }

  }
});
