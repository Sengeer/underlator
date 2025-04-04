const path = require('path');

class TranslationPipeline {
  // NOTE: Replace this with your own task and model.
  static task = 'translation';
  static model = 'opus-mt-en-ru';
  static instance = null;

  static async getInstance(
    translateLanguage = 'en-ru',
    progress_callback = null
  ) {
    if (
      this.instance === null ||
      this.model !== `opus-mt-${translateLanguage}`
    ) {
      // Dynamically import the Transformers.js library.
      let { pipeline, env } = await import('@huggingface/transformers');

      // Search model locally.
      env.cacheDir = path.join(__dirname, 'models');
      env.allowRemoteModels = false;

      this.model = `opus-mt-${translateLanguage}`;
      this.instance = pipeline(this.task, this.model, { progress_callback });
    }

    return this.instance;
  }
}

module.exports = TranslationPipeline;
