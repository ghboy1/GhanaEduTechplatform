// Authentication utilities

export const saveSession = async (userData) => {
  try {
    await window.storage.set('nyansapo-session', JSON.stringify(userData));
    return true;
  } catch (error) {
    console.error('Failed to save session:', error);
    return false;
  }
};

export const loadSession = async () => {
  try {
    const result = await window.storage.get('nyansapo-session');
    if (result) {
      return JSON.parse(result.value);
    }
    return null;
  } catch (error) {
    console.log('No saved session found');
    return null;
  }
};

export const clearSession = async () => {
  try {
    await window.storage.delete('nyansapo-session');
    return true;
  } catch (error) {
    console.error('Failed to clear session:', error);
    return false;
  }
};

export const isAuthenticated = (user) => {
  return user && user.loggedIn === true;
};