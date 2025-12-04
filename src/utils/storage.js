/**
 * Storage utility for handling both localStorage fallback and 
 * the window.storage API when available in Claude artifacts
 */

class StorageManager {
  constructor() {
    this.storageAvailable = typeof window !== 'undefined' && window.storage;
    this.fallbackStorage = new Map();
  }

  async get(key, shared = false) {
    try {
      if (this.storageAvailable) {
        return await window.storage.get(key, shared);
      } else {
        // Fallback for development
        const value = localStorage.getItem(key);
        return value ? { key, value, shared } : null;
      }
    } catch (error) {
      console.log(`Key ${key} not found or error:`, error);
      return null;
    }
  }

  async set(key, value, shared = false) {
    try {
      if (this.storageAvailable) {
        return await window.storage.set(key, value, shared);
      } else {
        // Fallback for development
        localStorage.setItem(key, value);
        return { key, value, shared };
      }
    } catch (error) {
      console.error('Storage error:', error);
      return null;
    }
  }

  async delete(key, shared = false) {
    try {
      if (this.storageAvailable) {
        return await window.storage.delete(key, shared);
      } else {
        // Fallback for development
        localStorage.removeItem(key);
        return { key, deleted: true, shared };
      }
    } catch (error) {
      console.error('Delete error:', error);
      return null;
    }
  }

  async list(prefix = '', shared = false) {
    try {
      if (this.storageAvailable) {
        return await window.storage.list(prefix, shared);
      } else {
        // Fallback for development
        const keys = Object.keys(localStorage).filter(k => k.startsWith(prefix));
        return { keys, prefix, shared };
      }
    } catch (error) {
      console.error('List error:', error);
      return { keys: [], prefix, shared };
    }
  }
}

export const storage = new StorageManager();
export default storage;