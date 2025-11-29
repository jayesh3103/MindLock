export class EncryptionService {
  static ALGORITHM = "AES-GCM";
  static KEY_LENGTH = 256;

  /**
   * Generates a new random encryption key.
   * In a real app, this would be derived from a user password or stored securely.
   */
  static async generateKey() {
    return window.crypto.subtle.generateKey(
      {
        name: this.ALGORITHM,
        length: this.KEY_LENGTH,
      },
      true,
      ["encrypt", "decrypt"]
    );
  }

  /**
   * Encrypts text data using the provided key.
   * Returns an object containing the IV and the encrypted data (ciphertext).
   */
  static async encrypt(text, key) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // 96-bit IV for AES-GCM

    const ciphertext = await window.crypto.subtle.encrypt(
      {
        name: this.ALGORITHM,
        iv: iv,
      },
      key,
      data
    );

    return { iv, ciphertext };
  }

  /**
   * Decrypts data using the provided key and IV.
   */
  static async decrypt(ciphertext, key, iv) {
    const decrypted = await window.crypto.subtle.decrypt(
      {
        name: this.ALGORITHM,
        iv: iv,
      },
      key,
      ciphertext
    );

    const decoder = new TextDecoder();
    return decoder.decode(decrypted);
  }

  /**
   * Export key to base64 string for storage (simulated secure storage).
   */
  static async exportKey(key) {
    const exported = await window.crypto.subtle.exportKey("raw", key);
    return this.arrayBufferToBase64(exported);
  }

  /**
   * Import key from base64 string.
   */
  static async importKey(base64Key) {
    const rawKey = this.base64ToArrayBuffer(base64Key);
    return window.crypto.subtle.importKey(
      "raw",
      rawKey,
      { name: this.ALGORITHM },
      true,
      ["encrypt", "decrypt"]
    );
  }

  // Helpers
  static arrayBufferToBase64(buffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  static base64ToArrayBuffer(base64) {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }
}
