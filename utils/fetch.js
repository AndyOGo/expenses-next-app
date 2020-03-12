import originalFetch from 'cross-fetch';
import fetchRetry from 'fetch-retry';

const fetch = fetchRetry(originalFetch, {
  retryDelay: function(attempt, error, response) {
    return Math.pow(2, attempt) * 1000; // 1000, 2000, 4000
  },
  retryOn: function(attempt, error, response) {
    // retry on any network error or 5xx status codes
    if (error !== null || response.status >= 500) {
      console.log(`retrying, attempt number ${attempt + 1}`);
      return true;
    }
  },
});

export default fetch;
