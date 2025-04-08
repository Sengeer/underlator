const path = require('path');

class Pipeline {
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
        progress_callback
      });
    }
    return this.instance;
  }
}

module.exports = Pipeline;
