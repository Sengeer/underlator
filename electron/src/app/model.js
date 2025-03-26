const path = require('path');

class TranslationPipeline {
  static task = 'text-generation';
  static model = 'gemma-3-1b-it-ONNX';
  static instance = null;

  static async getInstance(progress_callback = null) {
    if (!this.instance) {
      const { pipeline, env } = await import('@huggingface/transformers');

      env.cacheDir = path.join(__dirname, 'models');
      env.allowRemoteModels = false;

      this.instance = await pipeline(this.task, this.model, {
        dtype: 'q4',
        progress_callback,
      });
    }
    return this.instance;
  }

  static async generate(messages, options = {}) {
    const generator = await this.getInstance();
    const result = await generator(messages, {
      max_new_tokens: 512,
      do_sample: false,
      ...options,
    });
    return result;
  }
}

module.exports = TranslationPipeline;
