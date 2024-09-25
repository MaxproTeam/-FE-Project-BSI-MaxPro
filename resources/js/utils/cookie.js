const Cookie = {
    set: function (name, value, options = {}) {
      let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
      if (options.expires) {
        if (typeof options.expires === 'number') {
          const date = new Date();
          date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
          cookieString += `; expires=${date.toUTCString()}`;
        } else {
          cookieString += `; expires=${options.expires.toUTCString()}`;
        }
      }
  
      if (options.path) {
        cookieString += `; path=${options.path}`;
      }
  
      if (options.domain) {
        cookieString += `; domain=${options.domain}`;
      }
  
      if (options.secure) {
        cookieString += `; secure`;
      }
  
      if (options.sameSite) {
        cookieString += `; samesite=${options.sameSite}`;
      }
  
      document.cookie = cookieString;
    },
  
    get: function (name) {
      const nameEQ = `${encodeURIComponent(name)}=`;
      const cookies = document.cookie.split(';');
  
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
          return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
        }
      }
      return null;
    },
  
    delete: function (name, path) {
      this.set(name, '', { expires: -1, path: path || '/' });
    }
  };

  export default Cookie;