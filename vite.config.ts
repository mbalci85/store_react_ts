import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8', // Specify the coverage provider (you can choose 'istanbul' or 'custom' if needed)
      reporter: ['html', 'text'], // Specify the coverage reporters
    },
    includeSource: ["src/**/*.{js,ts}"],
  },
});
