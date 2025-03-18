const BASE_URL = 'http://localhost:5001'; // your backend URL

// Function to post a new thread
export async function PostThread(title, content) {
  try {
    const response = await fetch(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    if (!response.ok) {
      throw new Error('Failed to post thread');
    }

    const newThread = await response.json();
    return newThread; // Return the new thread object
  } catch (error) {
    throw error; // Propagate the error
  }
}

// Function to fetch all threads
export async function getThreads() {
  try {
    const response = await fetch(`${BASE_URL}/threads`);
    if (!response.ok) {
      throw new Error('Failed to fetch threads');
    }

    const threads = await response.json();
    return threads; // Return the threads array
  } catch (error) {
    throw error; // Propagate the error
  }
}

// Function to get a specific thread by its ID
export async function getThreadById(threadId) {
  try {
    const response = await fetch(`${BASE_URL}/threads/${threadId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch thread with id ${threadId}`);
    }

    const thread = await response.json();
    return thread; // Return the thread object
  } catch (error) {
    throw error; // Propagate the error
  }
}

export async function createNewThread(title, content) {
  try {
    const response = await fetch('http://localhost:5001/Threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    if (!response.ok) {
      throw new Error('Failed to post thread');
    }

    const newThread = await response.json();
    return newThread; // Return the new thread object
  } catch (error) {
    throw error; // Propagate the error
  }
}

