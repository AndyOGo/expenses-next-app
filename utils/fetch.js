import originalFetch from 'cross-fetch';
import fetchRetry from 'fetch-retry';

const enhancedFetch = fetchRetry(originalFetch, {
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

function status(res) {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res;
}

function fetch(...args) {
  return enhancedFetch(...args).then(status);
}

export default fetch;
