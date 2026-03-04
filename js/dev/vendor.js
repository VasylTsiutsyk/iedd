const BROWSER_ALIASES_MAP = {
  "Amazon Silk": "amazon_silk",
  "Android Browser": "android",
  Bada: "bada",
  BlackBerry: "blackberry",
  Chrome: "chrome",
  Chromium: "chromium",
  Electron: "electron",
  Epiphany: "epiphany",
  Firefox: "firefox",
  Focus: "focus",
  Generic: "generic",
  "Google Search": "google_search",
  Googlebot: "googlebot",
  "Internet Explorer": "ie",
  "K-Meleon": "k_meleon",
  Maxthon: "maxthon",
  "Microsoft Edge": "edge",
  "MZ Browser": "mz",
  "NAVER Whale Browser": "naver",
  Opera: "opera",
  "Opera Coast": "opera_coast",
  "Pale Moon": "pale_moon",
  PhantomJS: "phantomjs",
  Puffin: "puffin",
  QupZilla: "qupzilla",
  QQ: "qq",
  QQLite: "qqlite",
  Safari: "safari",
  Sailfish: "sailfish",
  "Samsung Internet for Android": "samsung_internet",
  SeaMonkey: "seamonkey",
  Sleipnir: "sleipnir",
  Swing: "swing",
  Tizen: "tizen",
  "UC Browser": "uc",
  Vivaldi: "vivaldi",
  "WebOS Browser": "webos",
  WeChat: "wechat",
  "Yandex Browser": "yandex",
  Roku: "roku"
};
const BROWSER_MAP = {
  amazon_silk: "Amazon Silk",
  android: "Android Browser",
  bada: "Bada",
  blackberry: "BlackBerry",
  chrome: "Chrome",
  chromium: "Chromium",
  electron: "Electron",
  epiphany: "Epiphany",
  firefox: "Firefox",
  focus: "Focus",
  generic: "Generic",
  googlebot: "Googlebot",
  google_search: "Google Search",
  ie: "Internet Explorer",
  k_meleon: "K-Meleon",
  maxthon: "Maxthon",
  edge: "Microsoft Edge",
  mz: "MZ Browser",
  naver: "NAVER Whale Browser",
  opera: "Opera",
  opera_coast: "Opera Coast",
  pale_moon: "Pale Moon",
  phantomjs: "PhantomJS",
  puffin: "Puffin",
  qupzilla: "QupZilla",
  qq: "QQ Browser",
  qqlite: "QQ Browser Lite",
  safari: "Safari",
  sailfish: "Sailfish",
  samsung_internet: "Samsung Internet for Android",
  seamonkey: "SeaMonkey",
  sleipnir: "Sleipnir",
  swing: "Swing",
  tizen: "Tizen",
  uc: "UC Browser",
  vivaldi: "Vivaldi",
  webos: "WebOS Browser",
  wechat: "WeChat",
  yandex: "Yandex Browser"
};
const PLATFORMS_MAP = {
  tablet: "tablet",
  mobile: "mobile",
  desktop: "desktop",
  tv: "tv",
  bot: "bot"
};
const OS_MAP = {
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MacOS: "macOS",
  iOS: "iOS",
  Android: "Android",
  WebOS: "WebOS",
  BlackBerry: "BlackBerry",
  Bada: "Bada",
  Tizen: "Tizen",
  Linux: "Linux",
  ChromeOS: "Chrome OS",
  PlayStation4: "PlayStation 4",
  Roku: "Roku"
};
const ENGINE_MAP = {
  EdgeHTML: "EdgeHTML",
  Blink: "Blink",
  Trident: "Trident",
  Presto: "Presto",
  Gecko: "Gecko",
  WebKit: "WebKit"
};
class Utils {
  /**
   * Get first matched item for a string
   * @param {RegExp} regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getFirstMatch(regexp, ua) {
    const match = ua.match(regexp);
    return match && match.length > 0 && match[1] || "";
  }
  /**
   * Get second matched item for a string
   * @param regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getSecondMatch(regexp, ua) {
    const match = ua.match(regexp);
    return match && match.length > 1 && match[2] || "";
  }
  /**
   * Match a regexp and return a constant or undefined
   * @param {RegExp} regexp
   * @param {String} ua
   * @param {*} _const Any const that will be returned if regexp matches the string
   * @return {*}
   */
  static matchAndReturnConst(regexp, ua, _const) {
    if (regexp.test(ua)) {
      return _const;
    }
    return void 0;
  }
  static getWindowsVersionName(version) {
    switch (version) {
      case "NT":
        return "NT";
      case "XP":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.1":
        return "XP";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return void 0;
    }
  }
  /**
   * Get macOS version name
   *    10.5 - Leopard
   *    10.6 - Snow Leopard
   *    10.7 - Lion
   *    10.8 - Mountain Lion
   *    10.9 - Mavericks
   *    10.10 - Yosemite
   *    10.11 - El Capitan
   *    10.12 - Sierra
   *    10.13 - High Sierra
   *    10.14 - Mojave
   *    10.15 - Catalina
   *
   * @example
   *   getMacOSVersionName("10.14") // 'Mojave'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getMacOSVersionName(version) {
    const v2 = version.split(".").splice(0, 2).map((s2) => parseInt(s2, 10) || 0);
    v2.push(0);
    if (v2[0] !== 10) return void 0;
    switch (v2[1]) {
      case 5:
        return "Leopard";
      case 6:
        return "Snow Leopard";
      case 7:
        return "Lion";
      case 8:
        return "Mountain Lion";
      case 9:
        return "Mavericks";
      case 10:
        return "Yosemite";
      case 11:
        return "El Capitan";
      case 12:
        return "Sierra";
      case 13:
        return "High Sierra";
      case 14:
        return "Mojave";
      case 15:
        return "Catalina";
      default:
        return void 0;
    }
  }
  /**
   * Get Android version name
   *    1.5 - Cupcake
   *    1.6 - Donut
   *    2.0 - Eclair
   *    2.1 - Eclair
   *    2.2 - Froyo
   *    2.x - Gingerbread
   *    3.x - Honeycomb
   *    4.0 - Ice Cream Sandwich
   *    4.1 - Jelly Bean
   *    4.4 - KitKat
   *    5.x - Lollipop
   *    6.x - Marshmallow
   *    7.x - Nougat
   *    8.x - Oreo
   *    9.x - Pie
   *
   * @example
   *   getAndroidVersionName("7.0") // 'Nougat'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getAndroidVersionName(version) {
    const v2 = version.split(".").splice(0, 2).map((s2) => parseInt(s2, 10) || 0);
    v2.push(0);
    if (v2[0] === 1 && v2[1] < 5) return void 0;
    if (v2[0] === 1 && v2[1] < 6) return "Cupcake";
    if (v2[0] === 1 && v2[1] >= 6) return "Donut";
    if (v2[0] === 2 && v2[1] < 2) return "Eclair";
    if (v2[0] === 2 && v2[1] === 2) return "Froyo";
    if (v2[0] === 2 && v2[1] > 2) return "Gingerbread";
    if (v2[0] === 3) return "Honeycomb";
    if (v2[0] === 4 && v2[1] < 1) return "Ice Cream Sandwich";
    if (v2[0] === 4 && v2[1] < 4) return "Jelly Bean";
    if (v2[0] === 4 && v2[1] >= 4) return "KitKat";
    if (v2[0] === 5) return "Lollipop";
    if (v2[0] === 6) return "Marshmallow";
    if (v2[0] === 7) return "Nougat";
    if (v2[0] === 8) return "Oreo";
    if (v2[0] === 9) return "Pie";
    return void 0;
  }
  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  static getVersionPrecision(version) {
    return version.split(".").length;
  }
  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
   *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
   *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
   *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
   *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
   *
   * @param {String} versionA versions versions to compare
   * @param {String} versionB versions versions to compare
   * @param {boolean} [isLoose] enable loose comparison
   * @return {Number} comparison result: -1 when versionA is lower,
   * 1 when versionA is bigger, 0 when both equal
   */
  /* eslint consistent-return: 1 */
  static compareVersions(versionA, versionB, isLoose = false) {
    const versionAPrecision = Utils.getVersionPrecision(versionA);
    const versionBPrecision = Utils.getVersionPrecision(versionB);
    let precision = Math.max(versionAPrecision, versionBPrecision);
    let lastPrecision = 0;
    const chunks = Utils.map([versionA, versionB], (version) => {
      const delta = precision - Utils.getVersionPrecision(version);
      const _version = version + new Array(delta + 1).join(".0");
      return Utils.map(_version.split("."), (chunk) => new Array(20 - chunk.length).join("0") + chunk).reverse();
    });
    if (isLoose) {
      lastPrecision = precision - Math.min(versionAPrecision, versionBPrecision);
    }
    precision -= 1;
    while (precision >= lastPrecision) {
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === lastPrecision) {
          return 0;
        }
        precision -= 1;
      } else if (chunks[0][precision] < chunks[1][precision]) {
        return -1;
      }
    }
    return void 0;
  }
  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  static map(arr, iterator) {
    const result = [];
    let i2;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i2 = 0; i2 < arr.length; i2 += 1) {
      result.push(iterator(arr[i2]));
    }
    return result;
  }
  /**
   * Array::find polyfill
   *
   * @param  {Array} arr
   * @param  {Function} predicate
   * @return {Array}
   */
  static find(arr, predicate) {
    let i2;
    let l2;
    if (Array.prototype.find) {
      return Array.prototype.find.call(arr, predicate);
    }
    for (i2 = 0, l2 = arr.length; i2 < l2; i2 += 1) {
      const value = arr[i2];
      if (predicate(value, i2)) {
        return value;
      }
    }
    return void 0;
  }
  /**
   * Object::assign polyfill
   *
   * @param  {Object} obj
   * @param  {Object} ...objs
   * @return {Object}
   */
  static assign(obj, ...assigners) {
    const result = obj;
    let i2;
    let l2;
    if (Object.assign) {
      return Object.assign(obj, ...assigners);
    }
    for (i2 = 0, l2 = assigners.length; i2 < l2; i2 += 1) {
      const assigner = assigners[i2];
      if (typeof assigner === "object" && assigner !== null) {
        const keys = Object.keys(assigner);
        keys.forEach((key) => {
          result[key] = assigner[key];
        });
      }
    }
    return obj;
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('Microsoft Edge') // edge
   *
   * @param  {string} browserName
   * @return {string}
   */
  static getBrowserAlias(browserName) {
    return BROWSER_ALIASES_MAP[browserName];
  }
  /**
   * Get browser name for a short version/alias
   *
   * @example
   *   getBrowserTypeByAlias('edge') // Microsoft Edge
   *
   * @param  {string} browserAlias
   * @return {string}
   */
  static getBrowserTypeByAlias(browserAlias) {
    return BROWSER_MAP[browserAlias] || "";
  }
}
const commonVersionIdentifier = /version\/(\d+(\.?_?\d+)+)/i;
const browsersList = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe(ua) {
      const browser2 = {
        name: "Googlebot"
      };
      const version = Utils.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  /* Opera < 13.0 */
  {
    test: [/opera/i],
    describe(ua) {
      const browser2 = {
        name: "Opera"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  /* Opera > 13.0 */
  {
    test: [/opr\/|opios/i],
    describe(ua) {
      const browser2 = {
        name: "Opera"
      };
      const version = Utils.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/SamsungBrowser/i],
    describe(ua) {
      const browser2 = {
        name: "Samsung Internet for Android"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/Whale/i],
    describe(ua) {
      const browser2 = {
        name: "NAVER Whale Browser"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/PaleMoon/i],
    describe(ua) {
      const browser2 = {
        name: "Pale Moon"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/MZBrowser/i],
    describe(ua) {
      const browser2 = {
        name: "MZ Browser"
      };
      const version = Utils.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/focus/i],
    describe(ua) {
      const browser2 = {
        name: "Focus"
      };
      const version = Utils.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/swing/i],
    describe(ua) {
      const browser2 = {
        name: "Swing"
      };
      const version = Utils.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/coast/i],
    describe(ua) {
      const browser2 = {
        name: "Opera Coast"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(ua) {
      const browser2 = {
        name: "Opera Touch"
      };
      const version = Utils.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/yabrowser/i],
    describe(ua) {
      const browser2 = {
        name: "Yandex Browser"
      };
      const version = Utils.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/ucbrowser/i],
    describe(ua) {
      const browser2 = {
        name: "UC Browser"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/Maxthon|mxios/i],
    describe(ua) {
      const browser2 = {
        name: "Maxthon"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/epiphany/i],
    describe(ua) {
      const browser2 = {
        name: "Epiphany"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/puffin/i],
    describe(ua) {
      const browser2 = {
        name: "Puffin"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/sleipnir/i],
    describe(ua) {
      const browser2 = {
        name: "Sleipnir"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/k-meleon/i],
    describe(ua) {
      const browser2 = {
        name: "K-Meleon"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/micromessenger/i],
    describe(ua) {
      const browser2 = {
        name: "WeChat"
      };
      const version = Utils.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/qqbrowser/i],
    describe(ua) {
      const browser2 = {
        name: /qqbrowserlite/i.test(ua) ? "QQ Browser Lite" : "QQ Browser"
      };
      const version = Utils.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/msie|trident/i],
    describe(ua) {
      const browser2 = {
        name: "Internet Explorer"
      };
      const version = Utils.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/\sedg\//i],
    describe(ua) {
      const browser2 = {
        name: "Microsoft Edge"
      };
      const version = Utils.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/edg([ea]|ios)/i],
    describe(ua) {
      const browser2 = {
        name: "Microsoft Edge"
      };
      const version = Utils.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/vivaldi/i],
    describe(ua) {
      const browser2 = {
        name: "Vivaldi"
      };
      const version = Utils.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/seamonkey/i],
    describe(ua) {
      const browser2 = {
        name: "SeaMonkey"
      };
      const version = Utils.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/sailfish/i],
    describe(ua) {
      const browser2 = {
        name: "Sailfish"
      };
      const version = Utils.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/silk/i],
    describe(ua) {
      const browser2 = {
        name: "Amazon Silk"
      };
      const version = Utils.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/phantom/i],
    describe(ua) {
      const browser2 = {
        name: "PhantomJS"
      };
      const version = Utils.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/slimerjs/i],
    describe(ua) {
      const browser2 = {
        name: "SlimerJS"
      };
      const version = Utils.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(ua) {
      const browser2 = {
        name: "BlackBerry"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/(web|hpw)[o0]s/i],
    describe(ua) {
      const browser2 = {
        name: "WebOS Browser"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/bada/i],
    describe(ua) {
      const browser2 = {
        name: "Bada"
      };
      const version = Utils.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/tizen/i],
    describe(ua) {
      const browser2 = {
        name: "Tizen"
      };
      const version = Utils.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/qupzilla/i],
    describe(ua) {
      const browser2 = {
        name: "QupZilla"
      };
      const version = Utils.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/firefox|iceweasel|fxios/i],
    describe(ua) {
      const browser2 = {
        name: "Firefox"
      };
      const version = Utils.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/electron/i],
    describe(ua) {
      const browser2 = {
        name: "Electron"
      };
      const version = Utils.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/MiuiBrowser/i],
    describe(ua) {
      const browser2 = {
        name: "Miui"
      };
      const version = Utils.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/chromium/i],
    describe(ua) {
      const browser2 = {
        name: "Chromium"
      };
      const version = Utils.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/chrome|crios|crmo/i],
    describe(ua) {
      const browser2 = {
        name: "Chrome"
      };
      const version = Utils.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  {
    test: [/GSA/i],
    describe(ua) {
      const browser2 = {
        name: "Google Search"
      };
      const version = Utils.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  /* Android Browser */
  {
    test(parser) {
      const notLikeAndroid = !parser.test(/like android/i);
      const butAndroid = parser.test(/android/i);
      return notLikeAndroid && butAndroid;
    },
    describe(ua) {
      const browser2 = {
        name: "Android Browser"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  /* PlayStation 4 */
  {
    test: [/playstation 4/i],
    describe(ua) {
      const browser2 = {
        name: "PlayStation 4"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  /* Safari */
  {
    test: [/safari|applewebkit/i],
    describe(ua) {
      const browser2 = {
        name: "Safari"
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua);
      if (version) {
        browser2.version = version;
      }
      return browser2;
    }
  },
  /* Something else */
  {
    test: [/.*/i],
    describe(ua) {
      const regexpWithoutDeviceSpec = /^(.*)\/(.*) /;
      const regexpWithDeviceSpec = /^(.*)\/(.*)[ \t]\((.*)/;
      const hasDeviceSpec = ua.search("\\(") !== -1;
      const regexp = hasDeviceSpec ? regexpWithDeviceSpec : regexpWithoutDeviceSpec;
      return {
        name: Utils.getFirstMatch(regexp, ua),
        version: Utils.getSecondMatch(regexp, ua)
      };
    }
  }
];
const osParsersList = [
  /* Roku */
  {
    test: [/Roku\/DVP/],
    describe(ua) {
      const version = Utils.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, ua);
      return {
        name: OS_MAP.Roku,
        version
      };
    }
  },
  /* Windows Phone */
  {
    test: [/windows phone/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.WindowsPhone,
        version
      };
    }
  },
  /* Windows */
  {
    test: [/windows /i],
    describe(ua) {
      const version = Utils.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, ua);
      const versionName = Utils.getWindowsVersionName(version);
      return {
        name: OS_MAP.Windows,
        version,
        versionName
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe(ua) {
      const result = {
        name: OS_MAP.iOS
      };
      const version = Utils.getSecondMatch(/(Version\/)(\d[\d.]+)/, ua);
      if (version) {
        result.version = version;
      }
      return result;
    }
  },
  /* macOS */
  {
    test: [/macintosh/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, ua).replace(/[_\s]/g, ".");
      const versionName = Utils.getMacOSVersionName(version);
      const os = {
        name: OS_MAP.MacOS,
        version
      };
      if (versionName) {
        os.versionName = versionName;
      }
      return os;
    }
  },
  /* iOS */
  {
    test: [/(ipod|iphone|ipad)/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, ua).replace(/[_\s]/g, ".");
      return {
        name: OS_MAP.iOS,
        version
      };
    }
  },
  /* Android */
  {
    test(parser) {
      const notLikeAndroid = !parser.test(/like android/i);
      const butAndroid = parser.test(/android/i);
      return notLikeAndroid && butAndroid;
    },
    describe(ua) {
      const version = Utils.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, ua);
      const versionName = Utils.getAndroidVersionName(version);
      const os = {
        name: OS_MAP.Android,
        version
      };
      if (versionName) {
        os.versionName = versionName;
      }
      return os;
    }
  },
  /* WebOS */
  {
    test: [/(web|hpw)[o0]s/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, ua);
      const os = {
        name: OS_MAP.WebOS
      };
      if (version && version.length) {
        os.version = version;
      }
      return os;
    }
  },
  /* BlackBerry */
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, ua) || Utils.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, ua) || Utils.getFirstMatch(/\bbb(\d+)/i, ua);
      return {
        name: OS_MAP.BlackBerry,
        version
      };
    }
  },
  /* Bada */
  {
    test: [/bada/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.Bada,
        version
      };
    }
  },
  /* Tizen */
  {
    test: [/tizen/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.Tizen,
        version
      };
    }
  },
  /* Linux */
  {
    test: [/linux/i],
    describe() {
      return {
        name: OS_MAP.Linux
      };
    }
  },
  /* Chrome OS */
  {
    test: [/CrOS/],
    describe() {
      return {
        name: OS_MAP.ChromeOS
      };
    }
  },
  /* Playstation 4 */
  {
    test: [/PlayStation 4/],
    describe(ua) {
      const version = Utils.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.PlayStation4,
        version
      };
    }
  }
];
const platformParsersList = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe() {
      return {
        type: PLATFORMS_MAP.bot,
        vendor: "Google"
      };
    }
  },
  /* Huawei */
  {
    test: [/huawei/i],
    describe(ua) {
      const model = Utils.getFirstMatch(/(can-l01)/i, ua) && "Nova";
      const platform = {
        type: PLATFORMS_MAP.mobile,
        vendor: "Huawei"
      };
      if (model) {
        platform.model = model;
      }
      return platform;
    }
  },
  /* Nexus Tablet */
  {
    test: [/nexus\s*(?:7|8|9|10).*/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Nexus"
      };
    }
  },
  /* iPad */
  {
    test: [/ipad/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Amazon Kindle Fire */
  {
    test: [/kftt build/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Amazon",
        model: "Kindle Fire HD 7"
      };
    }
  },
  /* Another Amazon Tablet with Silk */
  {
    test: [/silk/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Amazon"
      };
    }
  },
  /* Tablet */
  {
    test: [/tablet(?! pc)/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet
      };
    }
  },
  /* iPod/iPhone */
  {
    test(parser) {
      const iDevice = parser.test(/ipod|iphone/i);
      const likeIDevice = parser.test(/like (ipod|iphone)/i);
      return iDevice && !likeIDevice;
    },
    describe(ua) {
      const model = Utils.getFirstMatch(/(ipod|iphone)/i, ua);
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "Apple",
        model
      };
    }
  },
  /* Nexus Mobile */
  {
    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "Nexus"
      };
    }
  },
  /* Nokia */
  {
    test: [/Nokia/i],
    describe(ua) {
      const model = Utils.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i, ua);
      const platform = {
        type: PLATFORMS_MAP.mobile,
        vendor: "Nokia"
      };
      if (model) {
        platform.model = model;
      }
      return platform;
    }
  },
  /* Mobile */
  {
    test: [/[^-]mobi/i],
    describe() {
      return {
        type: PLATFORMS_MAP.mobile
      };
    }
  },
  /* BlackBerry */
  {
    test(parser) {
      return parser.getBrowserName(true) === "blackberry";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "BlackBerry"
      };
    }
  },
  /* Bada */
  {
    test(parser) {
      return parser.getBrowserName(true) === "bada";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile
      };
    }
  },
  /* Windows Phone */
  {
    test(parser) {
      return parser.getBrowserName() === "windows phone";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "Microsoft"
      };
    }
  },
  /* Android Tablet */
  {
    test(parser) {
      const osMajorVersion = Number(String(parser.getOSVersion()).split(".")[0]);
      return parser.getOSName(true) === "android" && osMajorVersion >= 3;
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tablet
      };
    }
  },
  /* Android Mobile */
  {
    test(parser) {
      return parser.getOSName(true) === "android";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile
      };
    }
  },
  /* desktop */
  {
    test(parser) {
      return parser.getOSName(true) === "macos";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop,
        vendor: "Apple"
      };
    }
  },
  /* Windows */
  {
    test(parser) {
      return parser.getOSName(true) === "windows";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop
      };
    }
  },
  /* Linux */
  {
    test(parser) {
      return parser.getOSName(true) === "linux";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop
      };
    }
  },
  /* PlayStation 4 */
  {
    test(parser) {
      return parser.getOSName(true) === "playstation 4";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tv
      };
    }
  },
  /* Roku */
  {
    test(parser) {
      return parser.getOSName(true) === "roku";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tv
      };
    }
  }
];
const enginesParsersList = [
  /* EdgeHTML */
  {
    test(parser) {
      return parser.getBrowserName(true) === "microsoft edge";
    },
    describe(ua) {
      const isBlinkBased = /\sedg\//i.test(ua);
      if (isBlinkBased) {
        return {
          name: ENGINE_MAP.Blink
        };
      }
      const version = Utils.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, ua);
      return {
        name: ENGINE_MAP.EdgeHTML,
        version
      };
    }
  },
  /* Trident */
  {
    test: [/trident/i],
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Trident
      };
      const version = Utils.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        engine.version = version;
      }
      return engine;
    }
  },
  /* Presto */
  {
    test(parser) {
      return parser.test(/presto/i);
    },
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Presto
      };
      const version = Utils.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        engine.version = version;
      }
      return engine;
    }
  },
  /* Gecko */
  {
    test(parser) {
      const isGecko = parser.test(/gecko/i);
      const likeGecko = parser.test(/like gecko/i);
      return isGecko && !likeGecko;
    },
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Gecko
      };
      const version = Utils.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        engine.version = version;
      }
      return engine;
    }
  },
  /* Blink */
  {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
      return {
        name: ENGINE_MAP.Blink
      };
    }
  },
  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.WebKit
      };
      const version = Utils.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, ua);
      if (version) {
        engine.version = version;
      }
      return engine;
    }
  }
];
class Parser {
  /**
   * Create instance of Parser
   *
   * @param {String} UA User-Agent string
   * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance
   * improvements if you need to make a more particular parsing
   * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}
   *
   * @throw {Error} in case of empty UA String
   *
   * @constructor
   */
  constructor(UA, skipParsing = false) {
    if (UA === void 0 || UA === null || UA === "") {
      throw new Error("UserAgent parameter can't be empty");
    }
    this._ua = UA;
    this.parsedResult = {};
    if (skipParsing !== true) {
      this.parse();
    }
  }
  /**
   * Get UserAgent string of current Parser instance
   * @return {String} User-Agent String of the current <Parser> object
   *
   * @public
   */
  getUA() {
    return this._ua;
  }
  /**
   * Test a UA string for a regexp
   * @param {RegExp} regex
   * @return {Boolean}
   */
  test(regex) {
    return regex.test(this._ua);
  }
  /**
   * Get parsed browser object
   * @return {Object}
   */
  parseBrowser() {
    this.parsedResult.browser = {};
    const browserDescriptor = Utils.find(browsersList, (_browser) => {
      if (typeof _browser.test === "function") {
        return _browser.test(this);
      }
      if (Array.isArray(_browser.test)) {
        return _browser.test.some((condition) => this.test(condition));
      }
      throw new Error("Browser's test function is not valid");
    });
    if (browserDescriptor) {
      this.parsedResult.browser = browserDescriptor.describe(this.getUA());
    }
    return this.parsedResult.browser;
  }
  /**
   * Get parsed browser object
   * @return {Object}
   *
   * @public
   */
  getBrowser() {
    if (this.parsedResult.browser) {
      return this.parsedResult.browser;
    }
    return this.parseBrowser();
  }
  /**
   * Get browser's name
   * @return {String} Browser's name or an empty string
   *
   * @public
   */
  getBrowserName(toLowerCase) {
    if (toLowerCase) {
      return String(this.getBrowser().name).toLowerCase() || "";
    }
    return this.getBrowser().name || "";
  }
  /**
   * Get browser's version
   * @return {String} version of browser
   *
   * @public
   */
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  /**
   * Get OS
   * @return {Object}
   *
   * @example
   * this.getOS();
   * {
   *   name: 'macOS',
   *   version: '10.11.12'
   * }
   */
  getOS() {
    if (this.parsedResult.os) {
      return this.parsedResult.os;
    }
    return this.parseOS();
  }
  /**
   * Parse OS and save it to this.parsedResult.os
   * @return {*|{}}
   */
  parseOS() {
    this.parsedResult.os = {};
    const os = Utils.find(osParsersList, (_os) => {
      if (typeof _os.test === "function") {
        return _os.test(this);
      }
      if (Array.isArray(_os.test)) {
        return _os.test.some((condition) => this.test(condition));
      }
      throw new Error("Browser's test function is not valid");
    });
    if (os) {
      this.parsedResult.os = os.describe(this.getUA());
    }
    return this.parsedResult.os;
  }
  /**
   * Get OS name
   * @param {Boolean} [toLowerCase] return lower-cased value
   * @return {String} name of the OS — macOS, Windows, Linux, etc.
   */
  getOSName(toLowerCase) {
    const { name } = this.getOS();
    if (toLowerCase) {
      return String(name).toLowerCase() || "";
    }
    return name || "";
  }
  /**
   * Get OS version
   * @return {String} full version with dots ('10.11.12', '5.6', etc)
   */
  getOSVersion() {
    return this.getOS().version;
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  getPlatform() {
    if (this.parsedResult.platform) {
      return this.parsedResult.platform;
    }
    return this.parsePlatform();
  }
  /**
   * Get platform name
   * @param {Boolean} [toLowerCase=false]
   * @return {*}
   */
  getPlatformType(toLowerCase = false) {
    const { type } = this.getPlatform();
    if (toLowerCase) {
      return String(type).toLowerCase() || "";
    }
    return type || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parsePlatform() {
    this.parsedResult.platform = {};
    const platform = Utils.find(platformParsersList, (_platform) => {
      if (typeof _platform.test === "function") {
        return _platform.test(this);
      }
      if (Array.isArray(_platform.test)) {
        return _platform.test.some((condition) => this.test(condition));
      }
      throw new Error("Browser's test function is not valid");
    });
    if (platform) {
      this.parsedResult.platform = platform.describe(this.getUA());
    }
    return this.parsedResult.platform;
  }
  /**
   * Get parsed engine
   * @return {{}}
   */
  getEngine() {
    if (this.parsedResult.engine) {
      return this.parsedResult.engine;
    }
    return this.parseEngine();
  }
  /**
   * Get engines's name
   * @return {String} Engines's name or an empty string
   *
   * @public
   */
  getEngineName(toLowerCase) {
    if (toLowerCase) {
      return String(this.getEngine().name).toLowerCase() || "";
    }
    return this.getEngine().name || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parseEngine() {
    this.parsedResult.engine = {};
    const engine = Utils.find(enginesParsersList, (_engine) => {
      if (typeof _engine.test === "function") {
        return _engine.test(this);
      }
      if (Array.isArray(_engine.test)) {
        return _engine.test.some((condition) => this.test(condition));
      }
      throw new Error("Browser's test function is not valid");
    });
    if (engine) {
      this.parsedResult.engine = engine.describe(this.getUA());
    }
    return this.parsedResult.engine;
  }
  /**
   * Parse full information about the browser
   * @returns {Parser}
   */
  parse() {
    this.parseBrowser();
    this.parseOS();
    this.parsePlatform();
    this.parseEngine();
    return this;
  }
  /**
   * Get parsed result
   * @return {ParsedResult}
   */
  getResult() {
    return Utils.assign({}, this.parsedResult);
  }
  /**
   * Check if parsed browser matches certain conditions
   *
   * @param {Object} checkTree It's one or two layered object,
   * which can include a platform or an OS on the first layer
   * and should have browsers specs on the bottom-laying layer
   *
   * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
   * Returns `undefined` when the browser is no described in the checkTree object.
   *
   * @example
   * const browser = Bowser.getParser(window.navigator.userAgent);
   * if (browser.satisfies({chrome: '>118.01.1322' }))
   * // or with os
   * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
   * // or with platforms
   * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
   */
  satisfies(checkTree) {
    const platformsAndOSes = {};
    let platformsAndOSCounter = 0;
    const browsers = {};
    let browsersCounter = 0;
    const allDefinitions = Object.keys(checkTree);
    allDefinitions.forEach((key) => {
      const currentDefinition = checkTree[key];
      if (typeof currentDefinition === "string") {
        browsers[key] = currentDefinition;
        browsersCounter += 1;
      } else if (typeof currentDefinition === "object") {
        platformsAndOSes[key] = currentDefinition;
        platformsAndOSCounter += 1;
      }
    });
    if (platformsAndOSCounter > 0) {
      const platformsAndOSNames = Object.keys(platformsAndOSes);
      const OSMatchingDefinition = Utils.find(platformsAndOSNames, (name) => this.isOS(name));
      if (OSMatchingDefinition) {
        const osResult = this.satisfies(platformsAndOSes[OSMatchingDefinition]);
        if (osResult !== void 0) {
          return osResult;
        }
      }
      const platformMatchingDefinition = Utils.find(
        platformsAndOSNames,
        (name) => this.isPlatform(name)
      );
      if (platformMatchingDefinition) {
        const platformResult = this.satisfies(platformsAndOSes[platformMatchingDefinition]);
        if (platformResult !== void 0) {
          return platformResult;
        }
      }
    }
    if (browsersCounter > 0) {
      const browserNames = Object.keys(browsers);
      const matchingDefinition = Utils.find(browserNames, (name) => this.isBrowser(name, true));
      if (matchingDefinition !== void 0) {
        return this.compareVersion(browsers[matchingDefinition]);
      }
    }
    return void 0;
  }
  /**
   * Check if the browser name equals the passed string
   * @param {string} browserName The string to compare with the browser name
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {boolean}
   */
  isBrowser(browserName, includingAlias = false) {
    const defaultBrowserName = this.getBrowserName().toLowerCase();
    let browserNameLower = browserName.toLowerCase();
    const alias = Utils.getBrowserTypeByAlias(browserNameLower);
    if (includingAlias && alias) {
      browserNameLower = alias.toLowerCase();
    }
    return browserNameLower === defaultBrowserName;
  }
  compareVersion(version) {
    let expectedResults = [0];
    let comparableVersion = version;
    let isLoose = false;
    const currentBrowserVersion = this.getBrowserVersion();
    if (typeof currentBrowserVersion !== "string") {
      return void 0;
    }
    if (version[0] === ">" || version[0] === "<") {
      comparableVersion = version.substr(1);
      if (version[1] === "=") {
        isLoose = true;
        comparableVersion = version.substr(2);
      } else {
        expectedResults = [];
      }
      if (version[0] === ">") {
        expectedResults.push(1);
      } else {
        expectedResults.push(-1);
      }
    } else if (version[0] === "=") {
      comparableVersion = version.substr(1);
    } else if (version[0] === "~") {
      isLoose = true;
      comparableVersion = version.substr(1);
    }
    return expectedResults.indexOf(
      Utils.compareVersions(currentBrowserVersion, comparableVersion, isLoose)
    ) > -1;
  }
  /**
   * Check if the OS name equals the passed string
   * @param {string} osName The string to compare with the OS name
   * @returns {boolean}
   */
  isOS(osName) {
    return this.getOSName(true) === String(osName).toLowerCase();
  }
  /**
   * Check if the platform type equals the passed string
   * @param {string} platformType The string to compare with the platform type
   * @returns {boolean}
   */
  isPlatform(platformType) {
    return this.getPlatformType(true) === String(platformType).toLowerCase();
  }
  /**
   * Check if the engine name equals the passed string
   * @param {string} engineName The string to compare with the engine name
   * @returns {boolean}
   */
  isEngine(engineName) {
    return this.getEngineName(true) === String(engineName).toLowerCase();
  }
  /**
   * Is anything? Check if the browser is called "anything",
   * the OS called "anything" or the platform called "anything"
   * @param {String} anything
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {Boolean}
   */
  is(anything, includingAlias = false) {
    return this.isBrowser(anything, includingAlias) || this.isOS(anything) || this.isPlatform(anything);
  }
  /**
   * Check if any of the given values satisfies this.is(anything)
   * @param {String[]} anythings
   * @returns {Boolean}
   */
  some(anythings = []) {
    return anythings.some((anything) => this.is(anything));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class Bowser {
  /**
   * Creates a {@link Parser} instance
   *
   * @param {String} UA UserAgent string
   * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it
   * explicitly. Same as `skipParsing` for {@link Parser}.
   * @returns {Parser}
   * @throws {Error} when UA is not a String
   *
   * @example
   * const parser = Bowser.getParser(window.navigator.userAgent);
   * const result = parser.getResult();
   */
  static getParser(UA, skipParsing = false) {
    if (typeof UA !== "string") {
      throw new Error("UserAgent should be a string");
    }
    return new Parser(UA, skipParsing);
  }
  /**
   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
   *
   * @param UA
   * @return {ParsedResult}
   *
   * @example
   * const result = Bowser.parse(window.navigator.userAgent);
   */
  static parse(UA) {
    return new Parser(UA).getResult();
  }
  static get BROWSER_MAP() {
    return BROWSER_MAP;
  }
  static get ENGINE_MAP() {
    return ENGINE_MAP;
  }
  static get OS_MAP() {
    return OS_MAP;
  }
  static get PLATFORMS_MAP() {
    return PLATFORMS_MAP;
  }
}
function isObject$2(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend$1(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    if (typeof target[key] === "undefined") target[key] = src[key];
    else if (isObject$2(src[key]) && isObject$2(target[key]) && Object.keys(src[key]).length > 0) {
      extend$1(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend$1(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function CustomEvent2() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend$1(win, ssrWindow);
  return win;
}
function classesToTokens(classes2) {
  if (classes2 === void 0) {
    classes2 = "";
  }
  return classes2.trim().split(" ").filter((c2) => !!c2.trim());
}
function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach((key) => {
    try {
      object[key] = null;
    } catch (e2) {
    }
    try {
      delete object[key];
    } catch (e2) {
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle$1(el) {
  const window2 = getWindow();
  let style;
  if (window2.getComputedStyle) {
    style = window2.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = "x";
  }
  const window2 = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle$1(el);
  if (window2.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform.split(", ").map((a2) => a2.replace(",", ".")).join(", ");
    }
    transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }
  if (axis === "x") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject$1(o2) {
  return typeof o2 === "object" && o2 !== null && o2.constructor && Object.prototype.toString.call(o2).slice(8, -1) === "Object";
}
function isNode(node) {
  if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
  const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
  const noExtend = ["__proto__", "constructor", "prototype"];
  for (let i2 = 1; i2 < arguments.length; i2 += 1) {
    const nextSource = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window2 = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none";
  window2.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? "next" : "prev";
  const isOutOfBound = (current, target) => {
    return dir === "next" && current >= target || dir === "prev" && current <= target;
  };
  const animate = () => {
    time = (/* @__PURE__ */ new Date()).getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.scrollSnapType = "";
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = "";
  }
  const window2 = getWindow();
  const children = [...element.children];
  if (window2.HTMLSlotElement && element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  if (!selector) {
    return children;
  }
  return children.filter((el) => el.matches(selector));
}
function elementIsChildOfSlot(el, slot) {
  const elementsQueue = [slot];
  while (elementsQueue.length > 0) {
    const elementToCheck = elementsQueue.shift();
    if (el === elementToCheck) {
      return true;
    }
    elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : [], ...elementToCheck.assignedElements ? elementToCheck.assignedElements() : []);
  }
}
function elementIsChildOf(el, parent) {
  const window2 = getWindow();
  let isChild = parent.contains(el);
  if (!isChild && window2.HTMLSlotElement && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    isChild = children.includes(el);
    if (!isChild) {
      isChild = elementIsChildOfSlot(el, parent);
    }
  }
  return isChild;
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
  }
}
function createElement(tag, classes2) {
  if (classes2 === void 0) {
    classes2 = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
  return el;
}
function elementOffset(el) {
  const window2 = getWindow();
  const document2 = getDocument();
  const box = el.getBoundingClientRect();
  const body = document2.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
  const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling;
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling;
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window2 = getWindow();
  return window2.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i2;
  if (child) {
    i2 = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i2 += 1;
    }
    return i2;
  }
  return void 0;
}
function elementParents(el, selector) {
  const parents = [];
  let parent = el.parentElement;
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e2) {
    if (e2.target !== el) return;
    callback.call(el, e2);
    el.removeEventListener("transitionend", fireCallBack);
  }
  if (callback) {
    el.addEventListener("transitionend", fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window2 = getWindow();
  {
    return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
  }
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter((e2) => !!e2);
}
function setInnerHTML(el, html) {
  if (html === void 0) {
    html = "";
  }
  if (typeof trustedTypes !== "undefined") {
    el.innerHTML = trustedTypes.createPolicy("html", {
      createHTML: (s2) => s2
    }).createHTML(html);
  } else {
    el.innerHTML = html;
  }
}
let support;
function calcSupport() {
  const window2 = getWindow();
  const document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support2 = getSupport();
  const window2 = getWindow();
  const platform = window2.navigator.platform;
  const ua = userAgent || window2.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window2.screen.width;
  const screenHeight = window2.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === "Win32";
  let macos = platform === "MacIntel";
  const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, "13_0_0"];
    macos = false;
  }
  if (android && !windows) {
    device.os = "android";
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = "ios";
    device.ios = true;
  }
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}
let browser;
function calcBrowser() {
  const window2 = getWindow();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  if (isSafari()) {
    const ua = String(window2.navigator.userAgent);
    if (ua.includes("Version/")) {
      const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("beforeResize");
    emit("resize");
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver((entries) => {
      animationFrame = window2.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach((_ref2) => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window2.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("orientationchange");
  };
  on("init", () => {
    if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler);
    window2.addEventListener("orientationchange", orientationChangeHandler);
  });
  on("destroy", () => {
    removeObserver();
    window2.removeEventListener("resize", resizeHandler);
    window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}
function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window2 = getWindow();
  const attach = function(target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
    const observer = new ObserverFunc((mutations) => {
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate2() {
        emit("observerUpdate", mutations[0]);
      };
      if (window2.requestAnimationFrame) {
        window2.requestAnimationFrame(observerUpdate);
      } else {
        window2.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl);
      for (let i2 = 0; i2 < containerParents.length; i2 += 1) {
        attach(containerParents[i2]);
      }
    }
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach((observer) => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on("init", init);
  on("destroy", destroy);
}
var eventsEmitter = {
  on(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    events2.split(" ").forEach((event) => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    function onceHandler() {
      self.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events2, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events2.split(" ").forEach((event) => {
      if (typeof handler === "undefined") {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events2;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events2 = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events2 = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
    eventsArray.forEach((event) => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach((eventHandler) => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler) => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
  height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === "function") {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === "function") {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;
  slides.forEach((slideEl) => {
    if (rtl) {
      slideEl.style.marginLeft = "";
    } else {
      slideEl.style.marginRight = "";
    }
    slideEl.style.marginBottom = "";
    slideEl.style.marginTop = "";
  });
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
    return typeof params.breakpoints[key].slidesPerView !== "undefined";
  }).length > 0;
  for (let i2 = 0; i2 < slidesLength; i2 += 1) {
    slideSize = 0;
    let slide2;
    if (slides[i2]) slide2 = slides[i2];
    if (gridEnabled) {
      swiper.grid.updateSlide(i2, slide2, slides);
    }
    if (slides[i2] && elementStyle(slide2, "display") === "none") continue;
    if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slides[i2].style[swiper.getDirectionLabel("width")] = ``;
      }
      const slideStyles = getComputedStyle(slide2);
      const currentTransform = slide2.style.transform;
      const currentWebKitTransform = slide2.style.webkitTransform;
      if (currentTransform) {
        slide2.style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width") : elementOuterSize(slide2, "height");
      } else {
        const width = getDirectionPropertyValue(slideStyles, "width");
        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        const boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide2;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i2]) {
        slides[i2].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slides[i2]) {
      slides[i2].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i2 !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i2 === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i2 = 0; i2 < snapGrid.length; i2 += 1) {
      let slidesGridItem = snapGrid[i2];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups2 = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i2 = 0; i2 < groups2; i2 += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i2 = 0; i2 < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i2 += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
    slides.filter((_2, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach((slideEl) => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
    snapGrid = snapGrid.map((snap) => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map((v2) => v2 + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map((v2) => v2 + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit("slidesUpdated");
  if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i2;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = (index) => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach((slide2) => {
        activeSlides.push(slide2);
      });
    } else {
      for (i2 = 0; i2 < Math.ceil(swiper.params.slidesPerView); i2 += 1) {
        const index = swiper.activeIndex + i2;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }
  for (i2 = 0; i2 < activeSlides.length; i2 += 1) {
    if (typeof activeSlides[i2] !== "undefined") {
      const height = activeSlides[i2].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i2 = 0; i2 < slides.length; i2 += 1) {
    slides[i2].swiperSlideOffset = (swiper.isHorizontal() ? slides[i2].offsetLeft : slides[i2].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}
const toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate2) {
  if (translate2 === void 0) {
    translate2 = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  if (rtl) offsetCenter = translate2;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i2 = 0; i2 < slides.length; i2 += 1) {
    const slide2 = slides[i2];
    let slideOffset = slide2.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i2];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i2];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i2);
    }
    toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
    slide2.progress = rtl ? -slideProgress : slideProgress;
    slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}
function updateProgress(translate2) {
  const swiper = this;
  if (typeof translate2 === "undefined") {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate2);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
const toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = (selector) => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.find((slideEl) => slideEl.column === activeIndex);
      nextSlide = slides.find((slideEl) => slideEl.column === activeIndex + 1);
      prevSlide = slides.find((slideEl) => slideEl.column === activeIndex - 1);
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }
      prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach((slideEl) => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}
const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute("loading");
};
const preload = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_2, i2) => {
      return activeColumn + slidesPerView + i2;
    }));
    swiper.slides.forEach((slideEl, i2) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i2);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i2 = activeIndex - amount; i2 <= slideIndexLastInView + amount; i2 += 1) {
      const realIndex = (i2 % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i2 = Math.max(activeIndex - amount, 0); i2 <= Math.min(slideIndexLastInView + amount, len - 1); i2 += 1) {
      if (i2 !== activeIndex && (i2 > slideIndexLastInView || i2 < activeIndex)) {
        unlazy(swiper, i2);
      }
    }
  }
};
function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i2 = 0; i2 < slidesGrid.length; i2 += 1) {
    if (typeof slidesGrid[i2 + 1] !== "undefined") {
      if (translate2 >= slidesGrid[i2] && translate2 < slidesGrid[i2 + 1] - (slidesGrid[i2 + 1] - slidesGrid[i2]) / 2) {
        activeIndex = i2;
      } else if (translate2 >= slidesGrid[i2] && translate2 < slidesGrid[i2 + 1]) {
        activeIndex = i2 + 1;
      }
    } else if (translate2 >= slidesGrid[i2]) {
      activeIndex = i2;
    }
  }
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = (aIndex) => {
    let realIndex2 = aIndex - swiper.virtual.slidesBefore;
    if (realIndex2 < 0) {
      realIndex2 = swiper.virtual.slides.length + realIndex2;
    }
    if (realIndex2 >= swiper.virtual.slides.length) {
      realIndex2 -= swiper.virtual.slides.length;
    }
    return realIndex2;
  };
  if (typeof activeIndex === "undefined") {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.find((slideEl) => slideEl.column === activeIndex);
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    swiper.emit("slideChange");
  }
}
function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
      if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide2 = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide2) {
    for (let i2 = 0; i2 < swiper.slides.length; i2 += 1) {
      if (swiper.slides[i2] === slide2) {
        slideFound = true;
        slideIndex = i2;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? "x" : "y";
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate: translate2,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x2 = 0;
  let y2 = 0;
  const z2 = 0;
  if (swiper.isHorizontal()) {
    x2 = rtl ? -translate2 : translate2;
  } else {
    y2 = translate2;
  }
  if (params.roundLengths) {
    x2 = Math.floor(x2);
    y2 = Math.floor(y2);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x2 : y2;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x2 : -y2;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x2 -= swiper.cssOverflowAdjustment();
    } else {
      y2 -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x2}px, ${y2}px, ${z2}px)`;
  }
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
  if (translate2 === void 0) {
    translate2 = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate2 = swiper.minTranslate();
  const maxTranslate2 = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;
  else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;
  else newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e2) {
          if (!swiper || swiper.destroyed) return;
          if (e2.target !== this) return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = "next";
    else if (activeIndex < previousIndex) dir = "prev";
    else dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && dir === "reset") {
    swiper.emit(`slideResetTransition${step}`);
  } else if (runCallbacks && activeIndex !== previousIndex) {
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "Start"
  });
}
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  });
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex) {
    for (let i2 = 0; i2 < slidesGrid.length; i2 += 1) {
      const normalizedTranslate = -Math.floor(translate2 * 100);
      const normalizedGrid = Math.floor(slidesGrid[i2] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i2 + 1] * 100);
      if (typeof slidesGrid[i2 + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i2;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i2 + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i2;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit("beforeSlideChangeStart");
  }
  swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex) direction = "next";
  else if (slideIndex < activeIndex) direction = "prev";
  else direction = "reset";
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  const isInitialVirtual = isVirtual && initial;
  if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t2 = rtl ? translate2 : -translate2;
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = "none";
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
        });
      } else {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = "";
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t2,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t2,
        behavior: "smooth"
      });
    }
    return true;
  }
  const browser2 = getBrowser();
  const isSafari = browser2.isSafari;
  if (isVirtual && !initial && isSafari && swiper.isElement) {
    swiper.virtual.update(false, false, slideIndex);
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate2);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit("beforeTransitionStart", speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e2) {
        if (!swiper || swiper.destroyed) return;
        if (e2.target !== this) return;
        swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === "auto") {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === "next" ? swiper.realIndex : void 0
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}
function slideNext(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "next"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "prev"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate2);
  const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
  const isFreeMode = params.freeMode && params.freeMode.enabled;
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      swiper.slideToLoop(realIndex);
    } else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate(slideRealIndex, initial) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute("data-swiper-slide-index", index);
    });
  };
  const clearBlankSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideBlankClass}`);
    slides.forEach((el) => {
      el.remove();
    });
    if (slides.length > 0) {
      swiper.recalcSlides();
      swiper.updateSlides();
    }
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
    clearBlankSlides();
  }
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = (amountOfSlides) => {
    for (let i2 = 0; i2 < amountOfSlides; i2 += 1) {
      const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? void 0 : "next",
    initial
  });
}
function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo: slideTo2 = true,
    direction,
    setTranslate: setTranslate2,
    activeSlideIndex,
    initial,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit("beforeLoopFix");
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides,
    initialSlide
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo2) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === "auto") {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = centeredSlides ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
    showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
  } else if (gridEnabled && params.grid.fill === "row") {
    showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !centeredSlides;
  let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
  if (typeof activeSlideIndex === "undefined") {
    activeSlideIndex = swiper.getSlideIndex(slides.find((el) => el.classList.contains(params.slideActiveClass)));
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === "next" || !direction;
  const isPrev = direction === "prev" || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i2 = 0; i2 < loopedSlides - activeColIndexWithShift; i2 += 1) {
      const index = i2 - Math.floor(i2 / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i3 = slides.length - 1; i3 >= 0; i3 -= 1) {
          if (slides[i3].column === colIndexToPrepend) prependSlidesIndexes.push(i3);
        }
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    if (isInitialOverflow) {
      slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
    }
    for (let i2 = 0; i2 < slidesAppended; i2 += 1) {
      const index = i2 - Math.floor(i2 / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide2, slideIndex) => {
          if (slide2.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
    if (appendSlidesIndexes.includes(activeSlideIndex)) {
      appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
    if (prependSlidesIndexes.includes(activeSlideIndex)) {
      prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach((index) => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach((index) => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === "auto") {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide2, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo2) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff2 = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff2);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff2;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff2;
          }
        }
      } else {
        if (setTranslate2) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff2 = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff2);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff2;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff2;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach((c2) => {
        if (!c2.destroyed && c2.params.loop) c2.loopFix({
          ...loopParams,
          slideTo: c2.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
      });
    }
  }
  swiper.emit("loopFix");
}
function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach((slideEl) => {
    const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach((slideEl) => {
    slideEl.removeAttribute("data-swiper-slide-index");
  });
  newSlidesOrder.forEach((slideEl) => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = "move";
  el.style.cursor = moving ? "grabbing" : "grab";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
  const window2 = getWindow();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event) {
  const swiper = this;
  const document2 = getDocument();
  let e2 = event;
  if (e2.originalEvent) e2 = e2.originalEvent;
  const data = swiper.touchEventsData;
  if (e2.type === "pointerdown") {
    if (data.pointerId !== null && data.pointerId !== e2.pointerId) {
      return;
    }
    data.pointerId = e2.pointerId;
  } else if (e2.type === "touchstart" && e2.targetTouches.length === 1) {
    data.touchId = e2.targetTouches[0].identifier;
  }
  if (e2.type === "touchstart") {
    preventEdgeSwipe(swiper, e2, e2.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e2.pointerType === "mouse") return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e2.target;
  if (params.touchEventsTarget === "wrapper") {
    if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
  }
  if ("which" in e2 && e2.which === 3) return;
  if ("button" in e2 && e2.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = e2.composedPath ? e2.composedPath() : e2.path;
  if (swipingClassHasValue && e2.target && e2.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e2.target && e2.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e2.pageX;
  touches.currentY = e2.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;
  if (!preventEdgeSwipe(swiper, e2, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === "SELECT") {
      data.isTouched = false;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e2.pointerType === "mouse" || e2.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
    document2.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e2.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit("touchStart", e2);
}
function onTouchMove(event) {
  const document2 = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === "mouse") return;
  let e2 = event;
  if (e2.originalEvent) e2 = e2.originalEvent;
  if (e2.type === "pointermove") {
    if (data.touchId !== null) return;
    const id = e2.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e2.type === "touchmove") {
    targetTouch = [...e2.changedTouches].find((t2) => t2.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e2;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e2);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e2.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e2.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
      return;
    } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
      return;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e2.target && e2.pointerType !== "mouse") {
    document2.activeElement.blur();
  }
  if (document2.activeElement) {
    if (e2.target === document2.activeElement && e2.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e2);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === "undefined") {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e2);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e2.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e2.cancelable) {
    e2.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e2.stopPropagation();
  }
  let diff2 = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff2 = Math.abs(diff2) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff2;
  diff2 *= params.touchRatio;
  if (rtl) {
    diff2 = -diff2;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff2 > 0 ? "prev" : "next";
  swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent("transitionend", {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e2);
  }
  (/* @__PURE__ */ new Date()).getTime();
  if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff2) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit("sliderMove", e2);
  data.isMoved = true;
  data.currentTranslate = diff2 + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff2 > 0) {
    if (isLoop && allowLoopFix && true && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
      swiper.loopFix({
        direction: "prev",
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff2) ** resistanceRatio;
      }
    }
  } else if (diff2 < 0) {
    if (isLoop && allowLoopFix && true && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: "next",
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff2) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e2.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff2) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e2 = event;
  if (e2.originalEvent) e2 = e2.originalEvent;
  let targetTouch;
  const isTouchEvent = e2.type === "touchend" || e2.type === "touchcancel";
  if (!isTouchEvent) {
    if (data.touchId !== null) return;
    if (e2.pointerId !== data.pointerId) return;
    targetTouch = e2;
  } else {
    targetTouch = [...e2.changedTouches].find((t2) => t2.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e2.type)) {
    const proceed = ["pointercancel", "contextmenu"].includes(e2.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e2.pointerType === "mouse") return;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e2);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    const pathTree = e2.path || e2.composedPath && e2.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e2.target, pathTree);
    swiper.emit("tap click", e2);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e2);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i2 = 0; i2 < slidesGrid.length; i2 += i2 < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i2 < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i2 + increment2] !== "undefined") {
      if (swipeToLast || currentPos >= slidesGrid[i2] && currentPos < slidesGrid[i2 + increment2]) {
        stopIndex = i2;
        groupSize = slidesGrid[i2 + increment2] - slidesGrid[i2];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i2]) {
      stopIndex = i2;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
      else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e2.target === swiper.navigation.nextEl || e2.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e2.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e2) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e2.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e2.stopPropagation();
      e2.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e2) {
  const swiper = this;
  processLazyPreloader(swiper, e2.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}
function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = "auto";
  }
}
const events = (swiper, method) => {
  const document2 = getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
  const swiperMethod = method;
  if (!el || typeof el === "string") return;
  document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]("touchstart", swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]("pointerdown", swiper.onTouchStart, {
    passive: false
  });
  document2[domMethod]("touchmove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("pointermove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("touchend", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerup", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointercancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("touchcancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerout", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerleave", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("contextmenu", swiper.onTouchEnd, {
    passive: true
  });
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]("scroll", swiper.onScroll);
  }
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
  } else {
    swiper[swiperMethod]("observerUpdate", onResize, true);
  }
  el[domMethod]("load", swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, "on");
}
function detachEvents() {
  const swiper = this;
  events(swiper, "off");
}
var events$1 = {
  attachEvents,
  detachEvents
};
const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
  const document2 = getDocument();
  const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
  const breakpointContainer = ["window", "container"].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document2.querySelector(params.breakpointsBase);
  const breakpoint = swiper.getBreakpoint(breakpoints2, breakpointsBase, breakpointContainer);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }
  ["navigation", "pagination", "scrollbar"].forEach((prop) => {
    if (typeof breakpointParams[prop] === "undefined") return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base, containerEl) {
  if (base === void 0) {
    base = "window";
  }
  if (!breakpoints2 || base === "container" && !containerEl) return void 0;
  let breakpoint = false;
  const window2 = getWindow();
  const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints2).map((point) => {
    if (typeof point === "string" && point.indexOf("@") === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a2, b2) => parseInt(a2.value, 10) - parseInt(b2.value, 10));
  for (let i2 = 0; i2 < points.length; i2 += 1) {
    const {
      point,
      value
    } = points[i2];
    if (base === "window") {
      if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
var breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach((item) => {
    if (typeof item === "object") {
      Object.keys(item).forEach((classNames) => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  const suffixes = prepareClasses(["initialized", params.direction, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    "autoheight": params.autoHeight
  }, {
    "rtl": rtl
  }, {
    "grid": params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    "android": device.android
  }, {
    "ios": device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    "centered": params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}
function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  if (!el || typeof el === "string") return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}
var classes = {
  addClasses,
  removeClasses
};
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  }
}
var checkOverflow$1 = {
  checkOverflow
};
var defaults = {
  init: true,
  direction: "horizontal",
  oneWayMovement: false,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: "swiper",
  enabled: true,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== "object" || moduleParams === null) {
      extend(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && "enabled" in moduleParams)) {
      extend(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    extend(allModulesParams, obj);
  };
}
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = extend({}, params);
    if (el && !params.el) params.el = el;
    const document2 = getDocument();
    if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document2.querySelectorAll(params.el).forEach((containerEl) => {
        const newParams = extend({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach((mod) => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    const swiperParams = extend({}, defaults, allModulesParams);
    swiper.params = extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend({}, swiper.params);
    swiper.passedParams = extend({}, params);
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach((eventName) => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit("_swiper");
    if (swiper.params.init) {
      swiper.init();
    }
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index));
  }
  getSlideIndexWhenGrid(index) {
    if (this.grid && this.params.grid && this.params.grid.rows > 1) {
      if (this.params.grid.fill === "column") {
        index = Math.floor(index / this.params.grid.rows);
      } else if (this.params.grid.fill === "row") {
        index = index % Math.ceil(this.slides.length / this.params.grid.rows);
      }
    }
    return index;
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit("enable");
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit("disable");
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(" ").filter((className) => {
      return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return "";
    return slideEl.className.split(" ").filter((className) => {
      return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(" ");
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach((slideEl) => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit("_slideClass", slideEl, classNames);
    });
    swiper.emit("_slideClasses", updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = "current";
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === "number") return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i2 = activeIndex + 1; i2 < slides.length; i2 += 1) {
        if (slides[i2] && !breakLoop) {
          slideSize += Math.ceil(slides[i2].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i2 = activeIndex - 1; i2 >= 0; i2 -= 1) {
        if (slides[i2] && !breakLoop) {
          slideSize += slides[i2].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      if (view === "current") {
        for (let i2 = activeIndex + 1; i2 < slides.length; i2 += 1) {
          const slideInView = exact ? slidesGrid[i2] + slidesSizesGrid[i2] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i2] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        for (let i2 = activeIndex - 1; i2 >= 0; i2 -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i2] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate2() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate2();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate2();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit("update");
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
    }
    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach((slideEl) => {
      if (newDirection === "vertical") {
        slideEl.style.width = "";
      } else {
        slideEl.style.height = "";
      }
    });
    swiper.emit("changeDirection");
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
    swiper.rtl = direction === "rtl";
    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "rtl";
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "ltr";
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;
    let el = element || swiper.params.el;
    if (typeof el === "string") {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement("div", swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
      wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit("beforeInit");
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.addClasses();
    swiper.updateSize();
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }
    if (swiper.params.loop) {
      swiper.loopCreate(void 0, true);
    }
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener("load", (e2) => {
          processLazyPreloader(swiper, e2.target);
        });
      }
    });
    preload(swiper);
    swiper.initialized = true;
    preload(swiper);
    swiper.emit("init");
    swiper.emit("afterInit");
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === "undefined" || swiper.destroyed) {
      return null;
    }
    swiper.emit("beforeDestroy");
    swiper.initialized = false;
    swiper.detachEvents();
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== "string") {
        el.removeAttribute("style");
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute("style");
      }
      if (slides && slides.length) {
        slides.forEach((slideEl) => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute("style");
          slideEl.removeAttribute("data-swiper-slide-index");
        });
      }
    }
    swiper.emit("destroy");
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.swiper = null;
      }
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    extend(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === "function" && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach((m2) => Swiper.installModule(m2));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach((prototypeGroup) => {
  Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key) => {
      if (!params[key] && params.auto === true) {
        let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = createElement("div", checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}
function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  function getEl(el) {
    let res;
    if (el && typeof el === "string" && swiper.isElement) {
      res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === "string") res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      } else if (res && res.length === 1) {
        res = res[0];
      }
    }
    if (el && !res) return el;
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (subEl) {
        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      }
    });
  }
  function update2() {
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e2) {
    e2.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit("navigationPrev");
  }
  function onNextClick(e2) {
    e2.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit("navigationNext");
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(" "));
      }
    };
    nextEl.forEach((el) => initButton(el, "next"));
    prevEl.forEach((el) => initButton(el, "prev"));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
    };
    nextEl.forEach((el) => destroyButton(el, "next"));
    prevEl.forEach((el) => destroyButton(el, "prev"));
  }
  on("init", () => {
    if (swiper.params.navigation.enabled === false) {
      disable();
    } else {
      init();
      update2();
    }
  });
  on("toEdge fromEdge lock unlock", () => {
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (swiper.enabled) {
      update2();
      return;
    }
    [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
  });
  on("click", (_s, e2) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e2.target;
    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
    if (swiper.isElement && !targetIsButton) {
      const path = e2.path || e2.composedPath && e2.composedPath();
      if (path) {
        targetIsButton = path.find((pathEl) => nextEl.includes(pathEl) || prevEl.includes(pathEl));
      }
    }
    if (swiper.params.navigation.hideOnClick && !targetIsButton) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
    init();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update: update2,
    init,
    destroy
  });
}
function classesToSelector(classes2) {
  if (classes2 === void 0) {
    classes2 = "";
  }
  return `.${classes2.trim().replace(/([\.:!+\/()[\]])/g, "\\$1").replace(/ /g, ".")}`;
}
function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = "swiper-pagination";
  extendParams({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function getMoveDirection(prevIndex, nextIndex, length) {
    prevIndex = prevIndex % length;
    nextIndex = nextIndex % length;
    if (nextIndex === prevIndex + 1) {
      return "next";
    } else if (nextIndex === prevIndex - 1) {
      return "previous";
    }
    return;
  }
  function onBulletClick(e2) {
    const bulletEl = e2.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e2.preventDefault();
    const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
      if (moveDirection === "next") {
        swiper.slideNext();
      } else if (moveDirection === "previous") {
        swiper.slidePrev();
      } else {
        swiper.slideToLoop(index);
      }
    } else {
      swiper.slideTo(index);
    }
  }
  function update2() {
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== "undefined") {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height");
        el.forEach((subEl) => {
          subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach((bulletEl) => {
        const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s2) => typeof s2 === "string" && s2.includes(" ") ? s2.split(" ") : s2).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach((bullet) => {
          const bulletIndex = elementIndex(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          } else if (swiper.isElement) {
            bullet.setAttribute("part", "bullet");
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, "prev");
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, "next");
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(" "));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i2 = firstIndex; i2 <= lastIndex; i2 += 1) {
            if (bullets[i2]) {
              bullets[i2].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
          }
          setSideBullets(firstDisplayedBullet, "prev");
          setSideBullets(lastDisplayedBullet, "next");
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? "right" : "left";
        bullets.forEach((bullet) => {
          bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === "fraction") {
        subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === "progressbar") {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === "custom" && params.renderCustom) {
        setInnerHTML(subEl, params.renderCustom(swiper, current + 1, total));
        if (subElIndex === 0) emit("paginationRender", subEl);
      } else {
        if (subElIndex === 0) emit("paginationRender", subEl);
        emit("paginationUpdate", subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
      }
    });
  }
  function render() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = "";
    if (params.type === "bullets") {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i2 = 0; i2 < numberOfBullets; i2 += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i2, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === "fraction") {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === "progressbar") {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach((subEl) => {
      if (params.type !== "custom") {
        setInnerHTML(subEl, paginationHTML || "");
      }
      if (params.type === "bullets") {
        swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
      }
    });
    if (params.type !== "custom") {
      emit("paginationRender", el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: "swiper-pagination"
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      if (el.length > 1) {
        el = el.find((subEl) => {
          if (elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
          return true;
        });
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (params.type === "bullets" && params.clickable) {
        subEl.classList.add(...(params.clickableClass || "").split(" "));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === "bullets" && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener("click", onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || "").split(" "));
          subEl.removeEventListener("click", onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
  }
  on("changeDirection", () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on("init", () => {
    if (swiper.params.pagination.enabled === false) {
      disable();
    } else {
      init();
      render();
      update2();
    }
  });
  on("activeIndexChange", () => {
    if (typeof swiper.snapIndex === "undefined") {
      update2();
    }
  });
  on("snapIndexChange", () => {
    update2();
  });
  on("snapGridLengthChange", () => {
    render();
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
    }
  });
  on("lock unlock", () => {
    update2();
  });
  on("click", (_s, e2) => {
    const targetEl = e2.target;
    const el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit("paginationShow");
      } else {
        emit("paginationHide");
      }
      el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update: update2,
    init,
    destroy
  });
}
function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document2 = getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate2() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = "400ms";
      }, 1e3);
    }
  }
  function setTransition2(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize2() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = "";
    dragEl.style.height = "";
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === "auto") {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = "none";
    } else {
      el.style.display = "";
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e2) {
    return swiper.isHorizontal() ? e2.clientX : e2.clientY;
  }
  function setDragPosition(e2) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e2) - elementOffset(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e2) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e2.target === dragEl ? getPointerPosition(e2) - e2.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
    e2.preventDefault();
    e2.stopPropagation();
    wrapperEl.style.transitionDuration = "100ms";
    dragEl.style.transitionDuration = "100ms";
    setDragPosition(e2);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = "0ms";
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style["scroll-snap-type"] = "none";
    }
    emit("scrollbarDragStart", e2);
  }
  function onDragMove(e2) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e2.preventDefault && e2.cancelable) e2.preventDefault();
    else e2.returnValue = false;
    setDragPosition(e2);
    wrapperEl.style.transitionDuration = "0ms";
    el.style.transitionDuration = "0ms";
    dragEl.style.transitionDuration = "0ms";
    emit("scrollbarDragMove", e2);
  }
  function onDragEnd(e2) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style["scroll-snap-type"] = "";
      wrapperEl.style.transitionDuration = "";
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = nextTick(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = "400ms";
      }, 1e3);
    }
    emit("scrollbarDragEnd", e2);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events2(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
    target[eventMethod]("pointerdown", onDragStart, activeListener);
    document2[eventMethod]("pointermove", onDragMove, activeListener);
    document2[eventMethod]("pointerup", onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events2("on");
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events2("off");
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = document2.querySelectorAll(params.el);
      if (!el.length) return;
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));
      if (!dragEl) {
        dragEl = createElement("div", swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(...classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
    }
    disableDraggable();
  }
  on("changeDirection", () => {
    if (!swiper.scrollbar || !swiper.scrollbar.el) return;
    const params = swiper.params.scrollbar;
    let {
      el
    } = swiper.scrollbar;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on("init", () => {
    if (swiper.params.scrollbar.enabled === false) {
      disable();
    } else {
      init();
      updateSize2();
      setTranslate2();
    }
  });
  on("update resize observerUpdate lock unlock changeDirection", () => {
    updateSize2();
  });
  on("setTranslate", () => {
    setTranslate2();
  });
  on("setTransition", (_s, duration) => {
    setTransition2(duration);
  });
  on("enable disable", () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
    }
  });
  on("destroy", () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    init();
    updateSize2();
    setTranslate2();
  };
  const disable = () => {
    swiper.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize: updateSize2,
    setTranslate: setTranslate2,
    init,
    destroy
  });
}
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayTimeLeft;
  let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e2) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e2.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
    if (pausedByPointerEnter || e2.detail && e2.detail.bySwiperTouchMove) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.find((slideEl) => slideEl.classList.contains("swiper-slide-active"));
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return void 0;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
    return currentSlideDelay;
  };
  const run = (delayForce) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit("autoplay");
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit("autoplay");
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }
    return delay;
  };
  const start = () => {
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.running = true;
    run();
    emit("autoplayStart");
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit("autoplayStop");
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit("autoplayPause");
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document2 = getDocument();
    if (document2.visibilityState === "hidden") {
      pausedByInteraction = true;
      pause(true);
    }
    if (document2.visibilityState === "visible") {
      resume();
    }
  };
  const onPointerEnter = (e2) => {
    if (e2.pointerType !== "mouse") return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = (e2) => {
    if (e2.pointerType !== "mouse") return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener("pointerenter", onPointerEnter);
      swiper.el.addEventListener("pointerleave", onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    if (swiper.el && typeof swiper.el !== "string") {
      swiper.el.removeEventListener("pointerenter", onPointerEnter);
      swiper.el.removeEventListener("pointerleave", onPointerLeave);
    }
  };
  const attachDocumentEvents = () => {
    const document2 = getDocument();
    document2.addEventListener("visibilitychange", onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document2 = getDocument();
    document2.removeEventListener("visibilitychange", onVisibilityChange);
  };
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on("_freeModeStaticRelease", () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on("_freeModeNoMomentumRelease", () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on("touchEnd", () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on("slideChange", () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on("beforeInit", () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on("setTranslate _virtualUpdated", () => {
    if (swiper.params.effect !== effect) return;
    setTranslate2();
  });
  on("setTransition", (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition2(duration);
  });
  on("transitionEnd", () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      swiper.slides.forEach((slideEl) => {
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
      });
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on("virtualUpdate", () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate2();
        requireUpdateOnVirtual = false;
      }
    });
  });
}
function effectTarget(effectParams, slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = "hidden";
    transformEl.style["-webkit-backface-visibility"] = "hidden";
  }
  return transformEl;
}
function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements
  } = _ref;
  const {
    activeIndex
  } = swiper;
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    {
      transitionEndTarget = transformElements;
    }
    transitionEndTarget.forEach((el) => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}
function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate2 = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i2 = 0; i2 < slides.length; i2 += 1) {
      const slideEl = swiper.slides[i2];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition2 = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: "fade",
    swiper,
    on,
    setTranslate: setTranslate2,
    setTransition: setTransition2,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
/*! choices.js v11.1.0 | © 2025 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3) if (Object.prototype.hasOwnProperty.call(b3, p2)) d3[p2] = b3[p2];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null) throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
  for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
    if (ar || !(i2 in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
      ar[i2] = from[i2];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e2 = new Error(message);
  return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
};
var ActionType = {
  ADD_CHOICE: "ADD_CHOICE",
  REMOVE_CHOICE: "REMOVE_CHOICE",
  FILTER_CHOICES: "FILTER_CHOICES",
  ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
  CLEAR_CHOICES: "CLEAR_CHOICES",
  ADD_GROUP: "ADD_GROUP",
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM"
};
var EventType = {
  showDropdown: "showDropdown",
  hideDropdown: "hideDropdown",
  change: "change",
  choice: "choice",
  search: "search",
  addItem: "addItem",
  removeItem: "removeItem",
  highlightItem: "highlightItem",
  highlightChoice: "highlightChoice",
  unhighlightItem: "unhighlightItem"
};
var KeyCodeMap = {
  TAB_KEY: 9,
  SHIFT_KEY: 16,
  BACK_KEY: 46,
  DELETE_KEY: 8,
  ENTER_KEY: 13,
  A_KEY: 65,
  ESC_KEY: 27,
  UP_KEY: 38,
  DOWN_KEY: 40,
  PAGE_UP_KEY: 33,
  PAGE_DOWN_KEY: 34
};
var ObjectsInConfig = ["fuseOptions", "classNames"];
var PassedElementTypes = {
  Text: "text",
  SelectOne: "select-one",
  SelectMultiple: "select-multiple"
};
var addChoice = function(choice) {
  return {
    type: ActionType.ADD_CHOICE,
    choice
  };
};
var removeChoice = function(choice) {
  return {
    type: ActionType.REMOVE_CHOICE,
    choice
  };
};
var filterChoices = function(results) {
  return {
    type: ActionType.FILTER_CHOICES,
    results
  };
};
var activateChoices = function(active) {
  return {
    type: ActionType.ACTIVATE_CHOICES,
    active
  };
};
var addGroup = function(group) {
  return {
    type: ActionType.ADD_GROUP,
    group
  };
};
var addItem = function(item) {
  return {
    type: ActionType.ADD_ITEM,
    item
  };
};
var removeItem$1 = function(item) {
  return {
    type: ActionType.REMOVE_ITEM,
    item
  };
};
var highlightItem = function(item, highlighted) {
  return {
    type: ActionType.HIGHLIGHT_ITEM,
    item,
    highlighted
  };
};
var getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
var generateChars = function(length) {
  return Array.from({ length }, function() {
    return getRandomNumber(0, 36).toString(36);
  }).join("");
};
var generateId = function(element, prefix) {
  var id = element.id || element.name && "".concat(element.name, "-").concat(generateChars(2)) || generateChars(4);
  id = id.replace(/(:|\.|\[|\]|,)/g, "");
  id = "".concat(prefix, "-").concat(id);
  return id;
};
var getAdjacentEl = function(startEl, selector, direction) {
  if (direction === void 0) {
    direction = 1;
  }
  var prop = "".concat(direction > 0 ? "next" : "previous", "ElementSibling");
  var sibling = startEl[prop];
  while (sibling) {
    if (sibling.matches(selector)) {
      return sibling;
    }
    sibling = sibling[prop];
  }
  return null;
};
var isScrolledIntoView = function(element, parent, direction) {
  if (direction === void 0) {
    direction = 1;
  }
  var isVisible;
  if (direction > 0) {
    isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
  } else {
    isVisible = element.offsetTop >= parent.scrollTop;
  }
  return isVisible;
};
var sanitise = function(value) {
  if (typeof value !== "string") {
    if (value === null || value === void 0) {
      return "";
    }
    if (typeof value === "object") {
      if ("raw" in value) {
        return sanitise(value.raw);
      }
      if ("trusted" in value) {
        return value.trusted;
      }
    }
    return value;
  }
  return value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;");
};
var strToEl = function() {
  var tmpEl = document.createElement("div");
  return function(str) {
    tmpEl.innerHTML = str.trim();
    var firstChild = tmpEl.children[0];
    while (tmpEl.firstChild) {
      tmpEl.removeChild(tmpEl.firstChild);
    }
    return firstChild;
  };
}();
var resolveNoticeFunction = function(fn, value) {
  return typeof fn === "function" ? fn(sanitise(value), value) : fn;
};
var resolveStringFunction = function(fn) {
  return typeof fn === "function" ? fn() : fn;
};
var unwrapStringForRaw = function(s2) {
  if (typeof s2 === "string") {
    return s2;
  }
  if (typeof s2 === "object") {
    if ("trusted" in s2) {
      return s2.trusted;
    }
    if ("raw" in s2) {
      return s2.raw;
    }
  }
  return "";
};
var unwrapStringForEscaped = function(s2) {
  if (typeof s2 === "string") {
    return s2;
  }
  if (typeof s2 === "object") {
    if ("escaped" in s2) {
      return s2.escaped;
    }
    if ("trusted" in s2) {
      return s2.trusted;
    }
  }
  return "";
};
var escapeForTemplate = function(allowHTML, s2) {
  return allowHTML ? unwrapStringForEscaped(s2) : sanitise(s2);
};
var setElementHtml = function(el, allowHtml, html) {
  el.innerHTML = escapeForTemplate(allowHtml, html);
};
var sortByAlpha = function(_a, _b) {
  var value = _a.value, _c = _a.label, label = _c === void 0 ? value : _c;
  var value2 = _b.value, _d = _b.label, label2 = _d === void 0 ? value2 : _d;
  return unwrapStringForRaw(label).localeCompare(unwrapStringForRaw(label2), [], {
    sensitivity: "base",
    ignorePunctuation: true,
    numeric: true
  });
};
var sortByRank = function(a2, b2) {
  return a2.rank - b2.rank;
};
var dispatchEvent = function(element, type, customArgs) {
  if (customArgs === void 0) {
    customArgs = null;
  }
  var event = new CustomEvent(type, {
    detail: customArgs,
    bubbles: true,
    cancelable: true
  });
  return element.dispatchEvent(event);
};
var diff = function(a2, b2) {
  var aKeys = Object.keys(a2).sort();
  var bKeys = Object.keys(b2).sort();
  return aKeys.filter(function(i2) {
    return bKeys.indexOf(i2) < 0;
  });
};
var getClassNames = function(ClassNames) {
  return Array.isArray(ClassNames) ? ClassNames : [ClassNames];
};
var getClassNamesSelector = function(option) {
  if (option && Array.isArray(option)) {
    return option.map(function(item) {
      return ".".concat(item);
    }).join("");
  }
  return ".".concat(option);
};
var addClassesToElement = function(element, className) {
  var _a;
  (_a = element.classList).add.apply(_a, getClassNames(className));
};
var removeClassesFromElement = function(element, className) {
  var _a;
  (_a = element.classList).remove.apply(_a, getClassNames(className));
};
var parseCustomProperties = function(customProperties) {
  if (typeof customProperties !== "undefined") {
    try {
      return JSON.parse(customProperties);
    } catch (e2) {
      return customProperties;
    }
  }
  return {};
};
var updateClassList = function(item, add, remove) {
  var itemEl = item.itemEl;
  if (itemEl) {
    removeClassesFromElement(itemEl, remove);
    addClassesToElement(itemEl, add);
  }
};
var Dropdown = (
  /** @class */
  function() {
    function Dropdown2(_a) {
      var element = _a.element, type = _a.type, classNames = _a.classNames;
      this.element = element;
      this.classNames = classNames;
      this.type = type;
      this.isActive = false;
    }
    Dropdown2.prototype.show = function() {
      addClassesToElement(this.element, this.classNames.activeState);
      this.element.setAttribute("aria-expanded", "true");
      this.isActive = true;
      return this;
    };
    Dropdown2.prototype.hide = function() {
      removeClassesFromElement(this.element, this.classNames.activeState);
      this.element.setAttribute("aria-expanded", "false");
      this.isActive = false;
      return this;
    };
    return Dropdown2;
  }()
);
var Container = (
  /** @class */
  function() {
    function Container2(_a) {
      var element = _a.element, type = _a.type, classNames = _a.classNames, position = _a.position;
      this.element = element;
      this.classNames = classNames;
      this.type = type;
      this.position = position;
      this.isOpen = false;
      this.isFlipped = false;
      this.isDisabled = false;
      this.isLoading = false;
    }
    Container2.prototype.shouldFlip = function(dropdownPos, dropdownHeight) {
      var shouldFlip = false;
      if (this.position === "auto") {
        shouldFlip = this.element.getBoundingClientRect().top - dropdownHeight >= 0 && !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches;
      } else if (this.position === "top") {
        shouldFlip = true;
      }
      return shouldFlip;
    };
    Container2.prototype.setActiveDescendant = function(activeDescendantID) {
      this.element.setAttribute("aria-activedescendant", activeDescendantID);
    };
    Container2.prototype.removeActiveDescendant = function() {
      this.element.removeAttribute("aria-activedescendant");
    };
    Container2.prototype.open = function(dropdownPos, dropdownHeight) {
      addClassesToElement(this.element, this.classNames.openState);
      this.element.setAttribute("aria-expanded", "true");
      this.isOpen = true;
      if (this.shouldFlip(dropdownPos, dropdownHeight)) {
        addClassesToElement(this.element, this.classNames.flippedState);
        this.isFlipped = true;
      }
    };
    Container2.prototype.close = function() {
      removeClassesFromElement(this.element, this.classNames.openState);
      this.element.setAttribute("aria-expanded", "false");
      this.removeActiveDescendant();
      this.isOpen = false;
      if (this.isFlipped) {
        removeClassesFromElement(this.element, this.classNames.flippedState);
        this.isFlipped = false;
      }
    };
    Container2.prototype.addFocusState = function() {
      addClassesToElement(this.element, this.classNames.focusState);
    };
    Container2.prototype.removeFocusState = function() {
      removeClassesFromElement(this.element, this.classNames.focusState);
    };
    Container2.prototype.enable = function() {
      removeClassesFromElement(this.element, this.classNames.disabledState);
      this.element.removeAttribute("aria-disabled");
      if (this.type === PassedElementTypes.SelectOne) {
        this.element.setAttribute("tabindex", "0");
      }
      this.isDisabled = false;
    };
    Container2.prototype.disable = function() {
      addClassesToElement(this.element, this.classNames.disabledState);
      this.element.setAttribute("aria-disabled", "true");
      if (this.type === PassedElementTypes.SelectOne) {
        this.element.setAttribute("tabindex", "-1");
      }
      this.isDisabled = true;
    };
    Container2.prototype.wrap = function(element) {
      var el = this.element;
      var parentNode = element.parentNode;
      if (parentNode) {
        if (element.nextSibling) {
          parentNode.insertBefore(el, element.nextSibling);
        } else {
          parentNode.appendChild(el);
        }
      }
      el.appendChild(element);
    };
    Container2.prototype.unwrap = function(element) {
      var el = this.element;
      var parentNode = el.parentNode;
      if (parentNode) {
        parentNode.insertBefore(element, el);
        parentNode.removeChild(el);
      }
    };
    Container2.prototype.addLoadingState = function() {
      addClassesToElement(this.element, this.classNames.loadingState);
      this.element.setAttribute("aria-busy", "true");
      this.isLoading = true;
    };
    Container2.prototype.removeLoadingState = function() {
      removeClassesFromElement(this.element, this.classNames.loadingState);
      this.element.removeAttribute("aria-busy");
      this.isLoading = false;
    };
    return Container2;
  }()
);
var Input = (
  /** @class */
  function() {
    function Input2(_a) {
      var element = _a.element, type = _a.type, classNames = _a.classNames, preventPaste = _a.preventPaste;
      this.element = element;
      this.type = type;
      this.classNames = classNames;
      this.preventPaste = preventPaste;
      this.isFocussed = this.element.isEqualNode(document.activeElement);
      this.isDisabled = element.disabled;
      this._onPaste = this._onPaste.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onFocus = this._onFocus.bind(this);
      this._onBlur = this._onBlur.bind(this);
    }
    Object.defineProperty(Input2.prototype, "placeholder", {
      set: function(placeholder) {
        this.element.placeholder = placeholder;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Input2.prototype, "value", {
      get: function() {
        return this.element.value;
      },
      set: function(value) {
        this.element.value = value;
      },
      enumerable: false,
      configurable: true
    });
    Input2.prototype.addEventListeners = function() {
      var el = this.element;
      el.addEventListener("paste", this._onPaste);
      el.addEventListener("input", this._onInput, {
        passive: true
      });
      el.addEventListener("focus", this._onFocus, {
        passive: true
      });
      el.addEventListener("blur", this._onBlur, {
        passive: true
      });
    };
    Input2.prototype.removeEventListeners = function() {
      var el = this.element;
      el.removeEventListener("input", this._onInput);
      el.removeEventListener("paste", this._onPaste);
      el.removeEventListener("focus", this._onFocus);
      el.removeEventListener("blur", this._onBlur);
    };
    Input2.prototype.enable = function() {
      var el = this.element;
      el.removeAttribute("disabled");
      this.isDisabled = false;
    };
    Input2.prototype.disable = function() {
      var el = this.element;
      el.setAttribute("disabled", "");
      this.isDisabled = true;
    };
    Input2.prototype.focus = function() {
      if (!this.isFocussed) {
        this.element.focus();
      }
    };
    Input2.prototype.blur = function() {
      if (this.isFocussed) {
        this.element.blur();
      }
    };
    Input2.prototype.clear = function(setWidth) {
      if (setWidth === void 0) {
        setWidth = true;
      }
      this.element.value = "";
      if (setWidth) {
        this.setWidth();
      }
      return this;
    };
    Input2.prototype.setWidth = function() {
      var element = this.element;
      element.style.minWidth = "".concat(element.placeholder.length + 1, "ch");
      element.style.width = "".concat(element.value.length + 1, "ch");
    };
    Input2.prototype.setActiveDescendant = function(activeDescendantID) {
      this.element.setAttribute("aria-activedescendant", activeDescendantID);
    };
    Input2.prototype.removeActiveDescendant = function() {
      this.element.removeAttribute("aria-activedescendant");
    };
    Input2.prototype._onInput = function() {
      if (this.type !== PassedElementTypes.SelectOne) {
        this.setWidth();
      }
    };
    Input2.prototype._onPaste = function(event) {
      if (this.preventPaste) {
        event.preventDefault();
      }
    };
    Input2.prototype._onFocus = function() {
      this.isFocussed = true;
    };
    Input2.prototype._onBlur = function() {
      this.isFocussed = false;
    };
    return Input2;
  }()
);
var SCROLLING_SPEED = 4;
var List = (
  /** @class */
  function() {
    function List2(_a) {
      var element = _a.element;
      this.element = element;
      this.scrollPos = this.element.scrollTop;
      this.height = this.element.offsetHeight;
    }
    List2.prototype.prepend = function(node) {
      var child = this.element.firstElementChild;
      if (child) {
        this.element.insertBefore(node, child);
      } else {
        this.element.append(node);
      }
    };
    List2.prototype.scrollToTop = function() {
      this.element.scrollTop = 0;
    };
    List2.prototype.scrollToChildElement = function(element, direction) {
      var _this = this;
      if (!element) {
        return;
      }
      var listHeight = this.element.offsetHeight;
      var listScrollPosition = this.element.scrollTop + listHeight;
      var elementHeight = element.offsetHeight;
      var elementPos = element.offsetTop + elementHeight;
      var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
      requestAnimationFrame(function() {
        _this._animateScroll(destination, direction);
      });
    };
    List2.prototype._scrollDown = function(scrollPos, strength, destination) {
      var easing = (destination - scrollPos) / strength;
      var distance = easing > 1 ? easing : 1;
      this.element.scrollTop = scrollPos + distance;
    };
    List2.prototype._scrollUp = function(scrollPos, strength, destination) {
      var easing = (scrollPos - destination) / strength;
      var distance = easing > 1 ? easing : 1;
      this.element.scrollTop = scrollPos - distance;
    };
    List2.prototype._animateScroll = function(destination, direction) {
      var _this = this;
      var strength = SCROLLING_SPEED;
      var choiceListScrollTop = this.element.scrollTop;
      var continueAnimation = false;
      if (direction > 0) {
        this._scrollDown(choiceListScrollTop, strength, destination);
        if (choiceListScrollTop < destination) {
          continueAnimation = true;
        }
      } else {
        this._scrollUp(choiceListScrollTop, strength, destination);
        if (choiceListScrollTop > destination) {
          continueAnimation = true;
        }
      }
      if (continueAnimation) {
        requestAnimationFrame(function() {
          _this._animateScroll(destination, direction);
        });
      }
    };
    return List2;
  }()
);
var WrappedElement = (
  /** @class */
  function() {
    function WrappedElement2(_a) {
      var element = _a.element, classNames = _a.classNames;
      this.element = element;
      this.classNames = classNames;
      this.isDisabled = false;
    }
    Object.defineProperty(WrappedElement2.prototype, "isActive", {
      get: function() {
        return this.element.dataset.choice === "active";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(WrappedElement2.prototype, "dir", {
      get: function() {
        return this.element.dir;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(WrappedElement2.prototype, "value", {
      get: function() {
        return this.element.value;
      },
      set: function(value) {
        this.element.setAttribute("value", value);
        this.element.value = value;
      },
      enumerable: false,
      configurable: true
    });
    WrappedElement2.prototype.conceal = function() {
      var el = this.element;
      addClassesToElement(el, this.classNames.input);
      el.hidden = true;
      el.tabIndex = -1;
      var origStyle = el.getAttribute("style");
      if (origStyle) {
        el.setAttribute("data-choice-orig-style", origStyle);
      }
      el.setAttribute("data-choice", "active");
    };
    WrappedElement2.prototype.reveal = function() {
      var el = this.element;
      removeClassesFromElement(el, this.classNames.input);
      el.hidden = false;
      el.removeAttribute("tabindex");
      var origStyle = el.getAttribute("data-choice-orig-style");
      if (origStyle) {
        el.removeAttribute("data-choice-orig-style");
        el.setAttribute("style", origStyle);
      } else {
        el.removeAttribute("style");
      }
      el.removeAttribute("data-choice");
    };
    WrappedElement2.prototype.enable = function() {
      this.element.removeAttribute("disabled");
      this.element.disabled = false;
      this.isDisabled = false;
    };
    WrappedElement2.prototype.disable = function() {
      this.element.setAttribute("disabled", "");
      this.element.disabled = true;
      this.isDisabled = true;
    };
    WrappedElement2.prototype.triggerEvent = function(eventType, data) {
      dispatchEvent(this.element, eventType, data || {});
    };
    return WrappedElement2;
  }()
);
var WrappedInput = (
  /** @class */
  function(_super) {
    __extends(WrappedInput2, _super);
    function WrappedInput2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return WrappedInput2;
  }(WrappedElement)
);
var coerceBool = function(arg, defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = true;
  }
  return typeof arg === "undefined" ? defaultValue : !!arg;
};
var stringToHtmlClass = function(input) {
  if (typeof input === "string") {
    input = input.split(" ").filter(function(s2) {
      return s2.length;
    });
  }
  if (Array.isArray(input) && input.length) {
    return input;
  }
  return void 0;
};
var mapInputToChoice = function(value, allowGroup, allowRawString) {
  if (allowRawString === void 0) {
    allowRawString = true;
  }
  if (typeof value === "string") {
    var sanitisedValue = sanitise(value);
    var userValue = allowRawString || sanitisedValue === value ? value : { escaped: sanitisedValue, raw: value };
    var result_1 = mapInputToChoice({
      value,
      label: userValue,
      selected: true
    }, false);
    return result_1;
  }
  var groupOrChoice = value;
  if ("choices" in groupOrChoice) {
    if (!allowGroup) {
      throw new TypeError("optGroup is not allowed");
    }
    var group = groupOrChoice;
    var choices2 = group.choices.map(function(e2) {
      return mapInputToChoice(e2, false);
    });
    var result_2 = {
      id: 0,
      // actual ID will be assigned during _addGroup
      label: unwrapStringForRaw(group.label) || group.value,
      active: !!choices2.length,
      disabled: !!group.disabled,
      choices: choices2
    };
    return result_2;
  }
  var choice = groupOrChoice;
  var result = {
    id: 0,
    // actual ID will be assigned during _addChoice
    group: null,
    // actual group will be assigned during _addGroup but before _addChoice
    score: 0,
    // used in search
    rank: 0,
    // used in search, stable sort order
    value: choice.value,
    label: choice.label || choice.value,
    active: coerceBool(choice.active),
    selected: coerceBool(choice.selected, false),
    disabled: coerceBool(choice.disabled, false),
    placeholder: coerceBool(choice.placeholder, false),
    highlighted: false,
    labelClass: stringToHtmlClass(choice.labelClass),
    labelDescription: choice.labelDescription,
    customProperties: choice.customProperties
  };
  return result;
};
var isHtmlInputElement = function(e2) {
  return e2.tagName === "INPUT";
};
var isHtmlSelectElement = function(e2) {
  return e2.tagName === "SELECT";
};
var isHtmlOption = function(e2) {
  return e2.tagName === "OPTION";
};
var isHtmlOptgroup = function(e2) {
  return e2.tagName === "OPTGROUP";
};
var WrappedSelect = (
  /** @class */
  function(_super) {
    __extends(WrappedSelect2, _super);
    function WrappedSelect2(_a) {
      var element = _a.element, classNames = _a.classNames, template = _a.template, extractPlaceholder = _a.extractPlaceholder;
      var _this = _super.call(this, { element, classNames }) || this;
      _this.template = template;
      _this.extractPlaceholder = extractPlaceholder;
      return _this;
    }
    Object.defineProperty(WrappedSelect2.prototype, "placeholderOption", {
      get: function() {
        return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
        this.element.querySelector("option[placeholder]");
      },
      enumerable: false,
      configurable: true
    });
    WrappedSelect2.prototype.addOptions = function(choices2) {
      var _this = this;
      var fragment = document.createDocumentFragment();
      choices2.forEach(function(obj) {
        var choice = obj;
        if (choice.element) {
          return;
        }
        var option = _this.template(choice);
        fragment.appendChild(option);
        choice.element = option;
      });
      this.element.appendChild(fragment);
    };
    WrappedSelect2.prototype.optionsAsChoices = function() {
      var _this = this;
      var choices2 = [];
      this.element.querySelectorAll(":scope > option, :scope > optgroup").forEach(function(e2) {
        if (isHtmlOption(e2)) {
          choices2.push(_this._optionToChoice(e2));
        } else if (isHtmlOptgroup(e2)) {
          choices2.push(_this._optgroupToChoice(e2));
        }
      });
      return choices2;
    };
    WrappedSelect2.prototype._optionToChoice = function(option) {
      if (!option.hasAttribute("value") && option.hasAttribute("placeholder")) {
        option.setAttribute("value", "");
        option.value = "";
      }
      return {
        id: 0,
        group: null,
        score: 0,
        rank: 0,
        value: option.value,
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
        // This attribute is text for the label indicating the meaning of the option. If the `label` attribute isn't defined, its value is that of the element text content (ie `innerText`).
        label: option.label,
        element: option,
        active: true,
        // this returns true if nothing is selected on initial load, which will break placeholder support
        selected: this.extractPlaceholder ? option.selected : option.hasAttribute("selected"),
        disabled: option.disabled,
        highlighted: false,
        placeholder: this.extractPlaceholder && (!option.value || option.hasAttribute("placeholder")),
        labelClass: typeof option.dataset.labelClass !== "undefined" ? stringToHtmlClass(option.dataset.labelClass) : void 0,
        labelDescription: typeof option.dataset.labelDescription !== "undefined" ? option.dataset.labelDescription : void 0,
        customProperties: parseCustomProperties(option.dataset.customProperties)
      };
    };
    WrappedSelect2.prototype._optgroupToChoice = function(optgroup) {
      var _this = this;
      var options = optgroup.querySelectorAll("option");
      var choices2 = Array.from(options).map(function(option) {
        return _this._optionToChoice(option);
      });
      return {
        id: 0,
        label: optgroup.label || "",
        element: optgroup,
        active: !!choices2.length,
        disabled: optgroup.disabled,
        choices: choices2
      };
    };
    return WrappedSelect2;
  }(WrappedElement)
);
var DEFAULT_CLASSNAMES = {
  containerOuter: ["choices"],
  containerInner: ["choices__inner"],
  input: ["choices__input"],
  inputCloned: ["choices__input--cloned"],
  list: ["choices__list"],
  listItems: ["choices__list--multiple"],
  listSingle: ["choices__list--single"],
  listDropdown: ["choices__list--dropdown"],
  item: ["choices__item"],
  itemSelectable: ["choices__item--selectable"],
  itemDisabled: ["choices__item--disabled"],
  itemChoice: ["choices__item--choice"],
  description: ["choices__description"],
  placeholder: ["choices__placeholder"],
  group: ["choices__group"],
  groupHeading: ["choices__heading"],
  button: ["choices__button"],
  activeState: ["is-active"],
  focusState: ["is-focused"],
  openState: ["is-open"],
  disabledState: ["is-disabled"],
  highlightedState: ["is-highlighted"],
  selectedState: ["is-selected"],
  flippedState: ["is-flipped"],
  loadingState: ["is-loading"],
  notice: ["choices__notice"],
  addChoice: ["choices__item--selectable", "add-choice"],
  noResults: ["has-no-results"],
  noChoices: ["has-no-choices"]
};
var DEFAULT_CONFIG = {
  items: [],
  choices: [],
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  closeDropdownOnSelect: "auto",
  singleModeForMultiSelect: false,
  addChoices: false,
  addItems: true,
  addItemFilter: function(value) {
    return !!value && value !== "";
  },
  removeItems: true,
  removeItemButton: false,
  removeItemButtonAlignLeft: false,
  editItems: false,
  allowHTML: false,
  allowHtmlUserInput: false,
  duplicateItemsAllowed: true,
  delimiter: ",",
  paste: true,
  searchEnabled: true,
  searchChoices: true,
  searchFloor: 1,
  searchResultLimit: 4,
  searchFields: ["label", "value"],
  position: "auto",
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  sorter: sortByAlpha,
  shadowRoot: null,
  placeholder: true,
  placeholderValue: null,
  searchPlaceholderValue: null,
  prependValue: null,
  appendValue: null,
  renderSelectedChoices: "auto",
  loadingText: "Loading...",
  noResultsText: "No results found",
  noChoicesText: "No choices to choose from",
  itemSelectText: "Press to select",
  uniqueItemText: "Only unique values can be added",
  customAddItemText: "Only values matching specific conditions can be added",
  addItemText: function(value) {
    return 'Press Enter to add <b>"'.concat(value, '"</b>');
  },
  removeItemIconText: function() {
    return "Remove item";
  },
  removeItemLabelText: function(value) {
    return "Remove item: ".concat(value);
  },
  maxItemText: function(maxItemCount) {
    return "Only ".concat(maxItemCount, " values can be added");
  },
  valueComparer: function(value1, value2) {
    return value1 === value2;
  },
  fuseOptions: {
    includeScore: true
  },
  labelId: "",
  callbackOnInit: null,
  callbackOnCreateTemplates: null,
  classNames: DEFAULT_CLASSNAMES,
  appendGroupInSearch: false
};
var removeItem = function(item) {
  var itemEl = item.itemEl;
  if (itemEl) {
    itemEl.remove();
    item.itemEl = void 0;
  }
};
function items(s2, action, context) {
  var state = s2;
  var update2 = true;
  switch (action.type) {
    case ActionType.ADD_ITEM: {
      action.item.selected = true;
      var el = action.item.element;
      if (el) {
        el.selected = true;
        el.setAttribute("selected", "");
      }
      state.push(action.item);
      break;
    }
    case ActionType.REMOVE_ITEM: {
      action.item.selected = false;
      var el = action.item.element;
      if (el) {
        el.selected = false;
        el.removeAttribute("selected");
        var select = el.parentElement;
        if (select && isHtmlSelectElement(select) && select.type === PassedElementTypes.SelectOne) {
          select.value = "";
        }
      }
      removeItem(action.item);
      state = state.filter(function(choice) {
        return choice.id !== action.item.id;
      });
      break;
    }
    case ActionType.REMOVE_CHOICE: {
      removeItem(action.choice);
      state = state.filter(function(item2) {
        return item2.id !== action.choice.id;
      });
      break;
    }
    case ActionType.HIGHLIGHT_ITEM: {
      var highlighted = action.highlighted;
      var item = state.find(function(obj) {
        return obj.id === action.item.id;
      });
      if (item && item.highlighted !== highlighted) {
        item.highlighted = highlighted;
        if (context) {
          updateClassList(item, highlighted ? context.classNames.highlightedState : context.classNames.selectedState, highlighted ? context.classNames.selectedState : context.classNames.highlightedState);
        }
      }
      break;
    }
    default: {
      update2 = false;
      break;
    }
  }
  return { state, update: update2 };
}
function groups(s2, action) {
  var state = s2;
  var update2 = true;
  switch (action.type) {
    case ActionType.ADD_GROUP: {
      state.push(action.group);
      break;
    }
    case ActionType.CLEAR_CHOICES: {
      state = [];
      break;
    }
    default: {
      update2 = false;
      break;
    }
  }
  return { state, update: update2 };
}
function choices(s2, action, context) {
  var state = s2;
  var update2 = true;
  switch (action.type) {
    case ActionType.ADD_CHOICE: {
      state.push(action.choice);
      break;
    }
    case ActionType.REMOVE_CHOICE: {
      action.choice.choiceEl = void 0;
      if (action.choice.group) {
        action.choice.group.choices = action.choice.group.choices.filter(function(obj) {
          return obj.id !== action.choice.id;
        });
      }
      state = state.filter(function(obj) {
        return obj.id !== action.choice.id;
      });
      break;
    }
    case ActionType.ADD_ITEM:
    case ActionType.REMOVE_ITEM: {
      action.item.choiceEl = void 0;
      break;
    }
    case ActionType.FILTER_CHOICES: {
      var scoreLookup_1 = [];
      action.results.forEach(function(result) {
        scoreLookup_1[result.item.id] = result;
      });
      state.forEach(function(choice) {
        var result = scoreLookup_1[choice.id];
        if (result !== void 0) {
          choice.score = result.score;
          choice.rank = result.rank;
          choice.active = true;
        } else {
          choice.score = 0;
          choice.rank = 0;
          choice.active = false;
        }
        if (context && context.appendGroupInSearch) {
          choice.choiceEl = void 0;
        }
      });
      break;
    }
    case ActionType.ACTIVATE_CHOICES: {
      state.forEach(function(choice) {
        choice.active = action.active;
        if (context && context.appendGroupInSearch) {
          choice.choiceEl = void 0;
        }
      });
      break;
    }
    case ActionType.CLEAR_CHOICES: {
      state = [];
      break;
    }
    default: {
      update2 = false;
      break;
    }
  }
  return { state, update: update2 };
}
var reducers = {
  groups,
  items,
  choices
};
var Store = (
  /** @class */
  function() {
    function Store2(context) {
      this._state = this.defaultState;
      this._listeners = [];
      this._txn = 0;
      this._context = context;
    }
    Object.defineProperty(Store2.prototype, "defaultState", {
      // eslint-disable-next-line class-methods-use-this
      get: function() {
        return {
          groups: [],
          items: [],
          choices: []
        };
      },
      enumerable: false,
      configurable: true
    });
    Store2.prototype.changeSet = function(init) {
      return {
        groups: init,
        items: init,
        choices: init
      };
    };
    Store2.prototype.reset = function() {
      this._state = this.defaultState;
      var changes = this.changeSet(true);
      if (this._txn) {
        this._changeSet = changes;
      } else {
        this._listeners.forEach(function(l2) {
          return l2(changes);
        });
      }
    };
    Store2.prototype.subscribe = function(onChange) {
      this._listeners.push(onChange);
      return this;
    };
    Store2.prototype.dispatch = function(action) {
      var _this = this;
      var state = this._state;
      var hasChanges = false;
      var changes = this._changeSet || this.changeSet(false);
      Object.keys(reducers).forEach(function(key) {
        var stateUpdate = reducers[key](state[key], action, _this._context);
        if (stateUpdate.update) {
          hasChanges = true;
          changes[key] = true;
          state[key] = stateUpdate.state;
        }
      });
      if (hasChanges) {
        if (this._txn) {
          this._changeSet = changes;
        } else {
          this._listeners.forEach(function(l2) {
            return l2(changes);
          });
        }
      }
    };
    Store2.prototype.withTxn = function(func) {
      this._txn++;
      try {
        func();
      } finally {
        this._txn = Math.max(0, this._txn - 1);
        if (!this._txn) {
          var changeSet_1 = this._changeSet;
          if (changeSet_1) {
            this._changeSet = void 0;
            this._listeners.forEach(function(l2) {
              return l2(changeSet_1);
            });
          }
        }
      }
    };
    Object.defineProperty(Store2.prototype, "state", {
      /**
       * Get store object
       */
      get: function() {
        return this._state;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Store2.prototype, "items", {
      /**
       * Get items from store
       */
      get: function() {
        return this.state.items;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Store2.prototype, "highlightedActiveItems", {
      /**
       * Get highlighted items from store
       */
      get: function() {
        return this.items.filter(function(item) {
          return item.active && item.highlighted;
        });
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Store2.prototype, "choices", {
      /**
       * Get choices from store
       */
      get: function() {
        return this.state.choices;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Store2.prototype, "activeChoices", {
      /**
       * Get active choices from store
       */
      get: function() {
        return this.choices.filter(function(choice) {
          return choice.active;
        });
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Store2.prototype, "searchableChoices", {
      /**
       * Get choices that can be searched (excluding placeholders or disabled choices)
       */
      get: function() {
        return this.choices.filter(function(choice) {
          return !choice.disabled && !choice.placeholder;
        });
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Store2.prototype, "groups", {
      /**
       * Get groups from store
       */
      get: function() {
        return this.state.groups;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Store2.prototype, "activeGroups", {
      /**
       * Get active groups from store
       */
      get: function() {
        var _this = this;
        return this.state.groups.filter(function(group) {
          var isActive = group.active && !group.disabled;
          var hasActiveOptions = _this.state.choices.some(function(choice) {
            return choice.active && !choice.disabled;
          });
          return isActive && hasActiveOptions;
        }, []);
      },
      enumerable: false,
      configurable: true
    });
    Store2.prototype.inTxn = function() {
      return this._txn > 0;
    };
    Store2.prototype.getChoiceById = function(id) {
      return this.activeChoices.find(function(choice) {
        return choice.id === id;
      });
    };
    Store2.prototype.getGroupById = function(id) {
      return this.groups.find(function(group) {
        return group.id === id;
      });
    };
    return Store2;
  }()
);
var NoticeTypes = {
  noChoices: "no-choices",
  noResults: "no-results",
  addChoice: "add-choice",
  generic: ""
};
function _defineProperty(e2, r2, t2) {
  return (r2 = _toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _toPrimitive(t2, r2) {
  if ("object" != typeof t2 || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function _toPropertyKey(t2) {
  var i2 = _toPrimitive(t2, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function isArray(value) {
  return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  let result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
  return typeof value === "object";
}
function isObjectLike(value) {
  return isObject(value) && value !== null;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isBlank(value) {
  return !value.trim().length;
}
function getTag(value) {
  return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
const PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
const INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
const hasOwn = Object.prototype.hasOwnProperty;
class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};
    let totalWeight = 0;
    keys.forEach((key) => {
      let obj = createKey(key);
      this._keys.push(obj);
      this._keyMap[obj.id] = obj;
      totalWeight += obj.weight;
    });
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;
  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, "name")) {
      throw new Error(MISSING_KEY_PROPERTY("name"));
    }
    const name = key.name;
    src = name;
    if (hasOwn.call(key, "weight")) {
      weight = key.weight;
      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
      }
    }
    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }
  return {
    path,
    id,
    weight,
    src,
    getFn
  };
}
function createKeyPath(key) {
  return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
  return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
  let list = [];
  let arr = false;
  const deepGet = (obj2, path2, index) => {
    if (!isDefined(obj2)) {
      return;
    }
    if (!path2[index]) {
      list.push(obj2);
    } else {
      let key = path2[index];
      const value = obj2[key];
      if (!isDefined(value)) {
        return;
      }
      if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        for (let i2 = 0, len = value.length; i2 < len; i2 += 1) {
          deepGet(value[i2], path2, index + 1);
        }
      } else if (path2.length) {
        deepGet(value, path2, index + 1);
      }
    }
  };
  deepGet(obj, isString(path) ? path.split(".") : path, 0);
  return arr ? list : list[0];
}
const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};
const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a2, b2) => a2.score === b2.score ? a2.idx < b2.idx ? -1 : 1 : a2.score < b2.score ? -1 : 1
};
const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};
const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Config = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);
const SPACE = /[^ ]+/g;
function norm(weight = 1, mantissa = 3) {
  const cache = /* @__PURE__ */ new Map();
  const m2 = Math.pow(10, mantissa);
  return {
    get(value) {
      const numTokens = value.match(SPACE).length;
      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      }
      const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
      const n2 = parseFloat(Math.round(norm2 * m2) / m2);
      cache.set(numTokens, n2);
      return n2;
    },
    clear() {
      cache.clear();
    }
  };
}
class FuseIndex {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;
    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return;
    }
    this.isCreated = true;
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }
    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();
    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);
    for (let i2 = idx, len = this.size(); i2 < len; i2 += 1) {
      this.records[i2].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]];
  }
  size() {
    return this.records.length;
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return;
    }
    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };
    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = {
      i: docIndex,
      $: {}
    };
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
      if (!isDefined(value)) {
        return;
      }
      if (isArray(value)) {
        let subRecords = [];
        const stack = [{
          nestedArrIndex: -1,
          value
        }];
        while (stack.length) {
          const {
            nestedArrIndex,
            value: value2
          } = stack.pop();
          if (!isDefined(value2)) {
            continue;
          }
          if (isString(value2) && !isBlank(value2)) {
            let subRecord = {
              v: value2,
              i: nestedArrIndex,
              n: this.norm.get(value2)
            };
            subRecords.push(subRecord);
          } else if (isArray(value2)) {
            value2.forEach((item, k2) => {
              stack.push({
                nestedArrIndex: k2,
                value: item
              });
            });
          } else ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };
        record.$[keyIndex] = subRecord;
      }
    });
    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function createIndex(keys, docs, {
  getFn = Config.getFn,
  fieldNormWeight = Config.fieldNormWeight
} = {}) {
  const myIndex = new FuseIndex({
    getFn,
    fieldNormWeight
  });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}
function parseIndex(data, {
  getFn = Config.getFn,
  fieldNormWeight = Config.fieldNormWeight
} = {}) {
  const {
    keys,
    records
  } = data;
  const myIndex = new FuseIndex({
    getFn,
    fieldNormWeight
  });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}
function computeScore$1(pattern, {
  errors = 0,
  currentLocation = 0,
  expectedLocation = 0,
  distance = Config.distance,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  const accuracy = errors / pattern.length;
  if (ignoreLocation) {
    return accuracy;
  }
  const proximity = Math.abs(expectedLocation - currentLocation);
  if (!distance) {
    return proximity ? 1 : accuracy;
  }
  return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i2 = 0;
  for (let len = matchmask.length; i2 < len; i2 += 1) {
    let match = matchmask[i2];
    if (match && start === -1) {
      start = i2;
    } else if (!match && start !== -1) {
      end = i2 - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }
  if (matchmask[i2 - 1] && i2 - start >= minMatchCharLength) {
    indices.push([start, i2 - 1]);
  }
  return indices;
}
const MAX_BITS = 32;
function search(text, pattern, patternAlphabet, {
  location: location2 = Config.location,
  distance = Config.distance,
  threshold = Config.threshold,
  findAllMatches = Config.findAllMatches,
  minMatchCharLength = Config.minMatchCharLength,
  includeMatches = Config.includeMatches,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }
  const patternLen = pattern.length;
  const textLen = text.length;
  const expectedLocation = Math.max(0, Math.min(location2, textLen));
  let currentThreshold = threshold;
  let bestLocation = expectedLocation;
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  const matchMask = computeMatches ? Array(textLen) : [];
  let index;
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;
    if (computeMatches) {
      let i2 = 0;
      while (i2 < patternLen) {
        matchMask[index + i2] = 1;
        i2 += 1;
      }
    }
  }
  bestLocation = -1;
  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;
  const mask = 1 << patternLen - 1;
  for (let i2 = 0; i2 < patternLen; i2 += 1) {
    let binMin = 0;
    let binMid = binMax;
    while (binMin < binMid) {
      const score2 = computeScore$1(pattern, {
        errors: i2,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score2 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }
      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }
    binMax = binMid;
    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
    let bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << i2) - 1;
    for (let j2 = finish; j2 >= start; j2 -= 1) {
      let currentLocation = j2 - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];
      if (computeMatches) {
        matchMask[currentLocation] = +!!charMatch;
      }
      bitArr[j2] = (bitArr[j2 + 1] << 1 | 1) & charMatch;
      if (i2) {
        bitArr[j2] |= (lastBitArr[j2 + 1] | lastBitArr[j2]) << 1 | 1 | lastBitArr[j2 + 1];
      }
      if (bitArr[j2] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i2,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (finalScore <= currentThreshold) {
          currentThreshold = finalScore;
          bestLocation = currentLocation;
          if (bestLocation <= expectedLocation) {
            break;
          }
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }
    const score = computeScore$1(pattern, {
      errors: i2 + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });
    if (score > currentThreshold) {
      break;
    }
    lastBitArr = bitArr;
  }
  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, finalScore)
  };
  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }
  return result;
}
function createPatternAlphabet(pattern) {
  let mask = {};
  for (let i2 = 0, len = pattern.length; i2 < len; i2 += 1) {
    const char = pattern.charAt(i2);
    mask[char] = (mask[char] || 0) | 1 << len - i2 - 1;
  }
  return mask;
}
class BitapSearch {
  constructor(pattern, {
    location: location2 = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    this.options = {
      location: location2,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };
    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.chunks = [];
    if (!this.pattern.length) {
      return;
    }
    const addChunk = (pattern2, startIndex) => {
      this.chunks.push({
        pattern: pattern2,
        alphabet: createPatternAlphabet(pattern2),
        startIndex
      });
    };
    const len = this.pattern.length;
    if (len > MAX_BITS) {
      let i2 = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;
      while (i2 < end) {
        addChunk(this.pattern.substr(i2, MAX_BITS), i2);
        i2 += MAX_BITS;
      }
      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }
  searchIn(text) {
    const {
      isCaseSensitive,
      includeMatches
    } = this.options;
    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }
    if (this.pattern === text) {
      let result2 = {
        isMatch: true,
        score: 0
      };
      if (includeMatches) {
        result2.indices = [[0, text.length - 1]];
      }
      return result2;
    }
    const {
      location: location2,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;
    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;
    this.chunks.forEach(({
      pattern,
      alphabet,
      startIndex
    }) => {
      const {
        isMatch,
        score,
        indices
      } = search(text, pattern, alphabet, {
        location: location2 + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });
      if (isMatch) {
        hasMatches = true;
      }
      totalScore += score;
      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });
    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };
    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }
    return result;
  }
}
class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex);
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex);
  }
  search() {
  }
}
function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null;
}
class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(text) {
    const isMatch = text === this.pattern;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
}
class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
}
class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    };
  }
}
class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
}
class FuzzyMatch extends BaseMatch {
  constructor(pattern, {
    location: location2 = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location: location2,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(text) {
    return this._bitapSearch.searchIn(text);
  }
}
class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(text) {
    let location2 = 0;
    let index;
    const indices = [];
    const patternLen = this.pattern.length;
    while ((index = text.indexOf(this.pattern, location2)) > -1) {
      location2 = index + patternLen;
      indices.push([index, location2 - 1]);
    }
    const isMatch = !!indices.length;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    };
  }
}
const searchers = [ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch];
const searchersLen = searchers.length;
const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = "|";
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
    let results = [];
    for (let i2 = 0, len = query.length; i2 < len; i2 += 1) {
      const queryItem = query[i2];
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }
      if (found) {
        continue;
      }
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break;
        }
      }
    }
    return results;
  });
}
const MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
class ExtendedSearch {
  constructor(pattern, {
    isCaseSensitive = Config.isCaseSensitive,
    includeMatches = Config.includeMatches,
    minMatchCharLength = Config.minMatchCharLength,
    ignoreLocation = Config.ignoreLocation,
    findAllMatches = Config.findAllMatches,
    location: location2 = Config.location,
    threshold = Config.threshold,
    distance = Config.distance
  } = {}) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location: location2,
      threshold,
      distance
    };
    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }
  static condition(_2, options) {
    return options.useExtendedSearch;
  }
  searchIn(text) {
    const query = this.query;
    if (!query) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const {
      includeMatches,
      isCaseSensitive
    } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;
    for (let i2 = 0, qLen = query.length; i2 < qLen; i2 += 1) {
      const searchers2 = query[i2];
      allIndices.length = 0;
      numMatches = 0;
      for (let j2 = 0, pLen = searchers2.length; j2 < pLen; j2 += 1) {
        const searcher = searchers2[j2];
        const {
          isMatch,
          indices,
          score
        } = searcher.search(text);
        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break;
        }
      }
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };
        if (includeMatches) {
          result.indices = allIndices;
        }
        return result;
      }
    }
    return {
      isMatch: false,
      score: 1
    };
  }
}
const registeredSearchers = [];
function register(...args) {
  registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
  for (let i2 = 0, len = registeredSearchers.length; i2 < len; i2 += 1) {
    let searcherClass = registeredSearchers[i2];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }
  return new BitapSearch(pattern, options);
}
const LogicalOperator = {
  AND: "$and",
  OR: "$or"
};
const KeyType = {
  PATH: "$path",
  PATTERN: "$val"
};
const isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
const isPath = (query) => !!query[KeyType.PATH];
const isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});
function parse(query, options, {
  auto = true
} = {}) {
  const next = (query2) => {
    let keys = Object.keys(query2);
    const isQueryPath = isPath(query2);
    if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
      return next(convertToExplicit(query2));
    }
    if (isLeaf(query2)) {
      const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
      const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
      }
      const obj = {
        keyId: createKeyId(key),
        pattern
      };
      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }
      return obj;
    }
    let node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach((key) => {
      const value = query2[key];
      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });
    return node;
  };
  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }
  return next(query);
}
function computeScore(results, {
  ignoreFieldNorm = Config.ignoreFieldNorm
}) {
  results.forEach((result) => {
    let totalScore = 1;
    result.matches.forEach(({
      key,
      norm: norm2,
      score
    }) => {
      const weight = key ? key.weight : null;
      totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm2));
    });
    result.score = totalScore;
  });
}
function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];
  if (!isDefined(matches)) {
    return;
  }
  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }
    const {
      indices,
      value
    } = match;
    let obj = {
      indices,
      value
    };
    if (match.key) {
      obj.key = match.key.src;
    }
    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }
    data.matches.push(obj);
  });
}
function transformScore(result, data) {
  data.score = result.score;
}
function format(results, docs, {
  includeMatches = Config.includeMatches,
  includeScore = Config.includeScore
} = {}) {
  const transformers = [];
  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);
  return results.map((result) => {
    const {
      idx
    } = result;
    const data = {
      item: docs[idx],
      refIndex: idx
    };
    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }
    return data;
  });
}
class Fuse {
  constructor(docs, options = {}, index) {
    this.options = _objectSpread2(_objectSpread2({}, Config), options);
    if (this.options.useExtendedSearch && false) ;
    this._keyStore = new KeyStore(this.options.keys);
    this.setCollection(docs, index);
  }
  setCollection(docs, index) {
    this._docs = docs;
    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE);
    }
    this._myIndex = index || createIndex(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(doc) {
    if (!isDefined(doc)) {
      return;
    }
    this._docs.push(doc);
    this._myIndex.add(doc);
  }
  remove(predicate = () => false) {
    const results = [];
    for (let i2 = 0, len = this._docs.length; i2 < len; i2 += 1) {
      const doc = this._docs[i2];
      if (predicate(doc, i2)) {
        this.removeAt(i2);
        i2 -= 1;
        len -= 1;
        results.push(doc);
      }
    }
    return results;
  }
  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }
  getIndex() {
    return this._myIndex;
  }
  search(query, {
    limit = -1
  } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;
    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
    computeScore(results, {
      ignoreFieldNorm
    });
    if (shouldSort) {
      results.sort(sortFn);
    }
    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }
    return format(results, this._docs, {
      includeMatches,
      includeScore
    });
  }
  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const {
      records
    } = this._myIndex;
    const results = [];
    records.forEach(({
      v: text,
      i: idx,
      n: norm2
    }) => {
      if (!isDefined(text)) {
        return;
      }
      const {
        isMatch,
        score,
        indices
      } = searcher.searchIn(text);
      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{
            score,
            value: text,
            norm: norm2,
            indices
          }]
        });
      }
    });
    return results;
  }
  _searchLogical(query) {
    const expression = parse(query, this.options);
    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const {
          keyId,
          searcher
        } = node;
        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });
        if (matches && matches.length) {
          return [{
            idx,
            item,
            matches
          }];
        }
        return [];
      }
      const res = [];
      for (let i2 = 0, len = node.children.length; i2 < len; i2 += 1) {
        const child = node.children[i2];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return [];
        }
      }
      return res;
    };
    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];
    records.forEach(({
      $: item,
      i: idx
    }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);
        if (expResults.length) {
          if (!resultMap[idx]) {
            resultMap[idx] = {
              idx,
              item,
              matches: []
            };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({
            matches
          }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });
    return results;
  }
  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const {
      keys,
      records
    } = this._myIndex;
    const results = [];
    records.forEach(({
      $: item,
      i: idx
    }) => {
      if (!isDefined(item)) {
        return;
      }
      let matches = [];
      keys.forEach((key, keyIndex) => {
        matches.push(...this._findMatches({
          key,
          value: item[keyIndex],
          searcher
        }));
      });
      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });
    return results;
  }
  _findMatches({
    key,
    value,
    searcher
  }) {
    if (!isDefined(value)) {
      return [];
    }
    let matches = [];
    if (isArray(value)) {
      value.forEach(({
        v: text,
        i: idx,
        n: norm2
      }) => {
        if (!isDefined(text)) {
          return;
        }
        const {
          isMatch,
          score,
          indices
        } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm: norm2,
            indices
          });
        }
      });
    } else {
      const {
        v: text,
        n: norm2
      } = value;
      const {
        isMatch,
        score,
        indices
      } = searcher.searchIn(text);
      if (isMatch) {
        matches.push({
          score,
          key,
          value: text,
          norm: norm2,
          indices
        });
      }
    }
    return matches;
  }
}
Fuse.version = "7.0.0";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
{
  Fuse.parseQuery = parse;
}
{
  register(ExtendedSearch);
}
var SearchByFuse = (
  /** @class */
  function() {
    function SearchByFuse2(config) {
      this._haystack = [];
      this._fuseOptions = __assign(__assign({}, config.fuseOptions), { keys: __spreadArray([], config.searchFields), includeMatches: true });
    }
    SearchByFuse2.prototype.index = function(data) {
      this._haystack = data;
      if (this._fuse) {
        this._fuse.setCollection(data);
      }
    };
    SearchByFuse2.prototype.reset = function() {
      this._haystack = [];
      this._fuse = void 0;
    };
    SearchByFuse2.prototype.isEmptyIndex = function() {
      return !this._haystack.length;
    };
    SearchByFuse2.prototype.search = function(needle) {
      if (!this._fuse) {
        {
          this._fuse = new Fuse(this._haystack, this._fuseOptions);
        }
      }
      var results = this._fuse.search(needle);
      return results.map(function(value, i2) {
        return {
          item: value.item,
          score: value.score || 0,
          rank: i2 + 1
          // If value.score is used for sorting, this can create non-stable sorts!
        };
      });
    };
    return SearchByFuse2;
  }()
);
function getSearcher(config) {
  {
    return new SearchByFuse(config);
  }
}
var isEmptyObject = function(obj) {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return true;
};
var assignCustomProperties = function(el, choice, withCustomProperties) {
  var dataset = el.dataset;
  var customProperties = choice.customProperties, labelClass = choice.labelClass, labelDescription = choice.labelDescription;
  if (labelClass) {
    dataset.labelClass = getClassNames(labelClass).join(" ");
  }
  if (labelDescription) {
    dataset.labelDescription = labelDescription;
  }
  if (withCustomProperties && customProperties) {
    if (typeof customProperties === "string") {
      dataset.customProperties = customProperties;
    } else if (typeof customProperties === "object" && !isEmptyObject(customProperties)) {
      dataset.customProperties = JSON.stringify(customProperties);
    }
  }
};
var addAriaLabel = function(docRoot, id, element) {
  var label = id && docRoot.querySelector("label[for='".concat(id, "']"));
  var text = label && label.innerText;
  if (text) {
    element.setAttribute("aria-label", text);
  }
};
var templates = {
  containerOuter: function(_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
    var containerOuter = _a.classNames.containerOuter;
    var div = document.createElement("div");
    addClassesToElement(div, containerOuter);
    div.dataset.type = passedElementType;
    if (dir) {
      div.dir = dir;
    }
    if (isSelectOneElement) {
      div.tabIndex = 0;
    }
    if (isSelectElement) {
      div.setAttribute("role", searchEnabled ? "combobox" : "listbox");
      if (searchEnabled) {
        div.setAttribute("aria-autocomplete", "list");
      } else if (!labelId) {
        addAriaLabel(this._docRoot, this.passedElement.element.id, div);
      }
      div.setAttribute("aria-haspopup", "true");
      div.setAttribute("aria-expanded", "false");
    }
    if (labelId) {
      div.setAttribute("aria-labelledby", labelId);
    }
    return div;
  },
  containerInner: function(_a) {
    var containerInner = _a.classNames.containerInner;
    var div = document.createElement("div");
    addClassesToElement(div, containerInner);
    return div;
  },
  itemList: function(_a, isSelectOneElement) {
    var searchEnabled = _a.searchEnabled, _b = _a.classNames, list = _b.list, listSingle = _b.listSingle, listItems = _b.listItems;
    var div = document.createElement("div");
    addClassesToElement(div, list);
    addClassesToElement(div, isSelectOneElement ? listSingle : listItems);
    if (this._isSelectElement && searchEnabled) {
      div.setAttribute("role", "listbox");
    }
    return div;
  },
  placeholder: function(_a, value) {
    var allowHTML = _a.allowHTML, placeholder = _a.classNames.placeholder;
    var div = document.createElement("div");
    addClassesToElement(div, placeholder);
    setElementHtml(div, allowHTML, value);
    return div;
  },
  item: function(_a, choice, removeItemButton) {
    var allowHTML = _a.allowHTML, removeItemButtonAlignLeft = _a.removeItemButtonAlignLeft, removeItemIconText = _a.removeItemIconText, removeItemLabelText = _a.removeItemLabelText, _b = _a.classNames, item = _b.item, button = _b.button, highlightedState = _b.highlightedState, itemSelectable = _b.itemSelectable, placeholder = _b.placeholder;
    var rawValue = unwrapStringForRaw(choice.value);
    var div = document.createElement("div");
    addClassesToElement(div, item);
    if (choice.labelClass) {
      var spanLabel = document.createElement("span");
      setElementHtml(spanLabel, allowHTML, choice.label);
      addClassesToElement(spanLabel, choice.labelClass);
      div.appendChild(spanLabel);
    } else {
      setElementHtml(div, allowHTML, choice.label);
    }
    div.dataset.item = "";
    div.dataset.id = choice.id;
    div.dataset.value = rawValue;
    assignCustomProperties(div, choice, true);
    if (choice.disabled || this.containerOuter.isDisabled) {
      div.setAttribute("aria-disabled", "true");
    }
    if (this._isSelectElement) {
      div.setAttribute("aria-selected", "true");
      div.setAttribute("role", "option");
    }
    if (choice.placeholder) {
      addClassesToElement(div, placeholder);
      div.dataset.placeholder = "";
    }
    addClassesToElement(div, choice.highlighted ? highlightedState : itemSelectable);
    if (removeItemButton) {
      if (choice.disabled) {
        removeClassesFromElement(div, itemSelectable);
      }
      div.dataset.deletable = "";
      var removeButton = document.createElement("button");
      removeButton.type = "button";
      addClassesToElement(removeButton, button);
      setElementHtml(removeButton, true, resolveNoticeFunction(removeItemIconText, choice.value));
      var REMOVE_ITEM_LABEL = resolveNoticeFunction(removeItemLabelText, choice.value);
      if (REMOVE_ITEM_LABEL) {
        removeButton.setAttribute("aria-label", REMOVE_ITEM_LABEL);
      }
      removeButton.dataset.button = "";
      if (removeItemButtonAlignLeft) {
        div.insertAdjacentElement("afterbegin", removeButton);
      } else {
        div.appendChild(removeButton);
      }
    }
    return div;
  },
  choiceList: function(_a, isSelectOneElement) {
    var list = _a.classNames.list;
    var div = document.createElement("div");
    addClassesToElement(div, list);
    if (!isSelectOneElement) {
      div.setAttribute("aria-multiselectable", "true");
    }
    div.setAttribute("role", "listbox");
    return div;
  },
  choiceGroup: function(_a, _b) {
    var allowHTML = _a.allowHTML, _c = _a.classNames, group = _c.group, groupHeading = _c.groupHeading, itemDisabled = _c.itemDisabled;
    var id = _b.id, label = _b.label, disabled = _b.disabled;
    var rawLabel = unwrapStringForRaw(label);
    var div = document.createElement("div");
    addClassesToElement(div, group);
    if (disabled) {
      addClassesToElement(div, itemDisabled);
    }
    div.setAttribute("role", "group");
    div.dataset.group = "";
    div.dataset.id = id;
    div.dataset.value = rawLabel;
    if (disabled) {
      div.setAttribute("aria-disabled", "true");
    }
    var heading = document.createElement("div");
    addClassesToElement(heading, groupHeading);
    setElementHtml(heading, allowHTML, label || "");
    div.appendChild(heading);
    return div;
  },
  choice: function(_a, choice, selectText, groupName) {
    var allowHTML = _a.allowHTML, _b = _a.classNames, item = _b.item, itemChoice = _b.itemChoice, itemSelectable = _b.itemSelectable, selectedState = _b.selectedState, itemDisabled = _b.itemDisabled, description = _b.description, placeholder = _b.placeholder;
    var label = choice.label;
    var rawValue = unwrapStringForRaw(choice.value);
    var div = document.createElement("div");
    div.id = choice.elementId;
    addClassesToElement(div, item);
    addClassesToElement(div, itemChoice);
    if (groupName && typeof label === "string") {
      label = escapeForTemplate(allowHTML, label);
      label += " (".concat(groupName, ")");
      label = { trusted: label };
    }
    var describedBy = div;
    if (choice.labelClass) {
      var spanLabel = document.createElement("span");
      setElementHtml(spanLabel, allowHTML, label);
      addClassesToElement(spanLabel, choice.labelClass);
      describedBy = spanLabel;
      div.appendChild(spanLabel);
    } else {
      setElementHtml(div, allowHTML, label);
    }
    if (choice.labelDescription) {
      var descId = "".concat(choice.elementId, "-description");
      describedBy.setAttribute("aria-describedby", descId);
      var spanDesc = document.createElement("span");
      setElementHtml(spanDesc, allowHTML, choice.labelDescription);
      spanDesc.id = descId;
      addClassesToElement(spanDesc, description);
      div.appendChild(spanDesc);
    }
    if (choice.selected) {
      addClassesToElement(div, selectedState);
    }
    if (choice.placeholder) {
      addClassesToElement(div, placeholder);
    }
    div.setAttribute("role", choice.group ? "treeitem" : "option");
    div.dataset.choice = "";
    div.dataset.id = choice.id;
    div.dataset.value = rawValue;
    if (selectText) {
      div.dataset.selectText = selectText;
    }
    if (choice.group) {
      div.dataset.groupId = "".concat(choice.group.id);
    }
    assignCustomProperties(div, choice, false);
    if (choice.disabled) {
      addClassesToElement(div, itemDisabled);
      div.dataset.choiceDisabled = "";
      div.setAttribute("aria-disabled", "true");
    } else {
      addClassesToElement(div, itemSelectable);
      div.dataset.choiceSelectable = "";
    }
    return div;
  },
  input: function(_a, placeholderValue) {
    var _b = _a.classNames, input = _b.input, inputCloned = _b.inputCloned, labelId = _a.labelId;
    var inp = document.createElement("input");
    inp.type = "search";
    addClassesToElement(inp, input);
    addClassesToElement(inp, inputCloned);
    inp.autocomplete = "off";
    inp.autocapitalize = "off";
    inp.spellcheck = false;
    inp.setAttribute("aria-autocomplete", "list");
    if (placeholderValue) {
      inp.setAttribute("aria-label", placeholderValue);
    } else if (!labelId) {
      addAriaLabel(this._docRoot, this.passedElement.element.id, inp);
    }
    return inp;
  },
  dropdown: function(_a) {
    var _b = _a.classNames, list = _b.list, listDropdown = _b.listDropdown;
    var div = document.createElement("div");
    addClassesToElement(div, list);
    addClassesToElement(div, listDropdown);
    div.setAttribute("aria-expanded", "false");
    return div;
  },
  notice: function(_a, innerHTML, type) {
    var _b = _a.classNames, item = _b.item, itemChoice = _b.itemChoice, addChoice2 = _b.addChoice, noResults = _b.noResults, noChoices = _b.noChoices, noticeItem = _b.notice;
    if (type === void 0) {
      type = NoticeTypes.generic;
    }
    var notice = document.createElement("div");
    setElementHtml(notice, true, innerHTML);
    addClassesToElement(notice, item);
    addClassesToElement(notice, itemChoice);
    addClassesToElement(notice, noticeItem);
    switch (type) {
      case NoticeTypes.addChoice:
        addClassesToElement(notice, addChoice2);
        break;
      case NoticeTypes.noResults:
        addClassesToElement(notice, noResults);
        break;
      case NoticeTypes.noChoices:
        addClassesToElement(notice, noChoices);
        break;
    }
    if (type === NoticeTypes.addChoice) {
      notice.dataset.choiceSelectable = "";
      notice.dataset.choice = "";
    }
    return notice;
  },
  option: function(choice) {
    var labelValue = unwrapStringForRaw(choice.label);
    var opt = new Option(labelValue, choice.value, false, choice.selected);
    assignCustomProperties(opt, choice, true);
    opt.disabled = choice.disabled;
    if (choice.selected) {
      opt.setAttribute("selected", "");
    }
    return opt;
  }
};
var IS_IE11 = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
var USER_DEFAULTS = {};
var parseDataSetId = function(element) {
  if (!element) {
    return void 0;
  }
  return element.dataset.id ? parseInt(element.dataset.id, 10) : void 0;
};
var selectableChoiceIdentifier = "[data-choice-selectable]";
var Choices = (
  /** @class */
  function() {
    function Choices2(element, userConfig) {
      if (element === void 0) {
        element = "[data-choice]";
      }
      if (userConfig === void 0) {
        userConfig = {};
      }
      var _this = this;
      this.initialisedOK = void 0;
      this._hasNonChoicePlaceholder = false;
      this._lastAddedChoiceId = 0;
      this._lastAddedGroupId = 0;
      var defaults2 = Choices2.defaults;
      this.config = __assign(__assign(__assign({}, defaults2.allOptions), defaults2.options), userConfig);
      ObjectsInConfig.forEach(function(key) {
        _this.config[key] = __assign(__assign(__assign({}, defaults2.allOptions[key]), defaults2.options[key]), userConfig[key]);
      });
      var config = this.config;
      if (!config.silent) {
        this._validateConfig();
      }
      var docRoot = config.shadowRoot || document.documentElement;
      this._docRoot = docRoot;
      var passedElement = typeof element === "string" ? docRoot.querySelector(element) : element;
      if (!passedElement || typeof passedElement !== "object" || !(isHtmlInputElement(passedElement) || isHtmlSelectElement(passedElement))) {
        if (!passedElement && typeof element === "string") {
          throw TypeError("Selector ".concat(element, " failed to find an element"));
        }
        throw TypeError("Expected one of the following types text|select-one|select-multiple");
      }
      var elementType = passedElement.type;
      var isText = elementType === PassedElementTypes.Text;
      if (isText || config.maxItemCount !== 1) {
        config.singleModeForMultiSelect = false;
      }
      if (config.singleModeForMultiSelect) {
        elementType = PassedElementTypes.SelectMultiple;
      }
      var isSelectOne = elementType === PassedElementTypes.SelectOne;
      var isSelectMultiple = elementType === PassedElementTypes.SelectMultiple;
      var isSelect = isSelectOne || isSelectMultiple;
      this._elementType = elementType;
      this._isTextElement = isText;
      this._isSelectOneElement = isSelectOne;
      this._isSelectMultipleElement = isSelectMultiple;
      this._isSelectElement = isSelectOne || isSelectMultiple;
      this._canAddUserChoices = isText && config.addItems || isSelect && config.addChoices;
      if (typeof config.renderSelectedChoices !== "boolean") {
        config.renderSelectedChoices = config.renderSelectedChoices === "always" || isSelectOne;
      }
      if (config.closeDropdownOnSelect === "auto") {
        config.closeDropdownOnSelect = isText || isSelectOne || config.singleModeForMultiSelect;
      } else {
        config.closeDropdownOnSelect = coerceBool(config.closeDropdownOnSelect);
      }
      if (config.placeholder) {
        if (config.placeholderValue) {
          this._hasNonChoicePlaceholder = true;
        } else if (passedElement.dataset.placeholder) {
          this._hasNonChoicePlaceholder = true;
          config.placeholderValue = passedElement.dataset.placeholder;
        }
      }
      if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== "function") {
        var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
        config.addItemFilter = re.test.bind(re);
      }
      if (this._isTextElement) {
        this.passedElement = new WrappedInput({
          element: passedElement,
          classNames: config.classNames
        });
      } else {
        var selectEl = passedElement;
        this.passedElement = new WrappedSelect({
          element: selectEl,
          classNames: config.classNames,
          template: function(data) {
            return _this._templates.option(data);
          },
          extractPlaceholder: config.placeholder && !this._hasNonChoicePlaceholder
        });
      }
      this.initialised = false;
      this._store = new Store(config);
      this._currentValue = "";
      config.searchEnabled = !isText && config.searchEnabled || isSelectMultiple;
      this._canSearch = config.searchEnabled;
      this._isScrollingOnIe = false;
      this._highlightPosition = 0;
      this._wasTap = true;
      this._placeholderValue = this._generatePlaceholderValue();
      this._baseId = generateId(passedElement, "choices-");
      this._direction = passedElement.dir;
      if (!this._direction) {
        var elementDirection = window.getComputedStyle(passedElement).direction;
        var documentDirection = window.getComputedStyle(document.documentElement).direction;
        if (elementDirection !== documentDirection) {
          this._direction = elementDirection;
        }
      }
      this._idNames = {
        itemChoice: "item-choice"
      };
      this._templates = defaults2.templates;
      this._render = this._render.bind(this);
      this._onFocus = this._onFocus.bind(this);
      this._onBlur = this._onBlur.bind(this);
      this._onKeyUp = this._onKeyUp.bind(this);
      this._onKeyDown = this._onKeyDown.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onClick = this._onClick.bind(this);
      this._onTouchMove = this._onTouchMove.bind(this);
      this._onTouchEnd = this._onTouchEnd.bind(this);
      this._onMouseDown = this._onMouseDown.bind(this);
      this._onMouseOver = this._onMouseOver.bind(this);
      this._onFormReset = this._onFormReset.bind(this);
      this._onSelectKey = this._onSelectKey.bind(this);
      this._onEnterKey = this._onEnterKey.bind(this);
      this._onEscapeKey = this._onEscapeKey.bind(this);
      this._onDirectionKey = this._onDirectionKey.bind(this);
      this._onDeleteKey = this._onDeleteKey.bind(this);
      if (this.passedElement.isActive) {
        if (!config.silent) {
          console.warn("Trying to initialise Choices on element already initialised", { element });
        }
        this.initialised = true;
        this.initialisedOK = false;
        return;
      }
      this.init();
      this._initialItems = this._store.items.map(function(choice) {
        return choice.value;
      });
    }
    Object.defineProperty(Choices2, "defaults", {
      get: function() {
        return Object.preventExtensions({
          get options() {
            return USER_DEFAULTS;
          },
          get allOptions() {
            return DEFAULT_CONFIG;
          },
          get templates() {
            return templates;
          }
        });
      },
      enumerable: false,
      configurable: true
    });
    Choices2.prototype.init = function() {
      if (this.initialised || this.initialisedOK !== void 0) {
        return;
      }
      this._searcher = getSearcher(this.config);
      this._loadChoices();
      this._createTemplates();
      this._createElements();
      this._createStructure();
      if (this._isTextElement && !this.config.addItems || this.passedElement.element.hasAttribute("disabled") || !!this.passedElement.element.closest("fieldset:disabled")) {
        this.disable();
      } else {
        this.enable();
        this._addEventListeners();
      }
      this._initStore();
      this.initialised = true;
      this.initialisedOK = true;
      var callbackOnInit = this.config.callbackOnInit;
      if (typeof callbackOnInit === "function") {
        callbackOnInit.call(this);
      }
    };
    Choices2.prototype.destroy = function() {
      if (!this.initialised) {
        return;
      }
      this._removeEventListeners();
      this.passedElement.reveal();
      this.containerOuter.unwrap(this.passedElement.element);
      this._store._listeners = [];
      this.clearStore(false);
      this._stopSearch();
      this._templates = Choices2.defaults.templates;
      this.initialised = false;
      this.initialisedOK = void 0;
    };
    Choices2.prototype.enable = function() {
      if (this.passedElement.isDisabled) {
        this.passedElement.enable();
      }
      if (this.containerOuter.isDisabled) {
        this._addEventListeners();
        this.input.enable();
        this.containerOuter.enable();
      }
      return this;
    };
    Choices2.prototype.disable = function() {
      if (!this.passedElement.isDisabled) {
        this.passedElement.disable();
      }
      if (!this.containerOuter.isDisabled) {
        this._removeEventListeners();
        this.input.disable();
        this.containerOuter.disable();
      }
      return this;
    };
    Choices2.prototype.highlightItem = function(item, runEvent) {
      if (runEvent === void 0) {
        runEvent = true;
      }
      if (!item || !item.id) {
        return this;
      }
      var choice = this._store.items.find(function(c2) {
        return c2.id === item.id;
      });
      if (!choice || choice.highlighted) {
        return this;
      }
      this._store.dispatch(highlightItem(choice, true));
      if (runEvent) {
        this.passedElement.triggerEvent(EventType.highlightItem, this._getChoiceForOutput(choice));
      }
      return this;
    };
    Choices2.prototype.unhighlightItem = function(item, runEvent) {
      if (runEvent === void 0) {
        runEvent = true;
      }
      if (!item || !item.id) {
        return this;
      }
      var choice = this._store.items.find(function(c2) {
        return c2.id === item.id;
      });
      if (!choice || !choice.highlighted) {
        return this;
      }
      this._store.dispatch(highlightItem(choice, false));
      if (runEvent) {
        this.passedElement.triggerEvent(EventType.unhighlightItem, this._getChoiceForOutput(choice));
      }
      return this;
    };
    Choices2.prototype.highlightAll = function() {
      var _this = this;
      this._store.withTxn(function() {
        _this._store.items.forEach(function(item) {
          if (!item.highlighted) {
            _this._store.dispatch(highlightItem(item, true));
            _this.passedElement.triggerEvent(EventType.highlightItem, _this._getChoiceForOutput(item));
          }
        });
      });
      return this;
    };
    Choices2.prototype.unhighlightAll = function() {
      var _this = this;
      this._store.withTxn(function() {
        _this._store.items.forEach(function(item) {
          if (item.highlighted) {
            _this._store.dispatch(highlightItem(item, false));
            _this.passedElement.triggerEvent(EventType.highlightItem, _this._getChoiceForOutput(item));
          }
        });
      });
      return this;
    };
    Choices2.prototype.removeActiveItemsByValue = function(value) {
      var _this = this;
      this._store.withTxn(function() {
        _this._store.items.filter(function(item) {
          return item.value === value;
        }).forEach(function(item) {
          return _this._removeItem(item);
        });
      });
      return this;
    };
    Choices2.prototype.removeActiveItems = function(excludedId) {
      var _this = this;
      this._store.withTxn(function() {
        _this._store.items.filter(function(_a) {
          var id = _a.id;
          return id !== excludedId;
        }).forEach(function(item) {
          return _this._removeItem(item);
        });
      });
      return this;
    };
    Choices2.prototype.removeHighlightedItems = function(runEvent) {
      var _this = this;
      if (runEvent === void 0) {
        runEvent = false;
      }
      this._store.withTxn(function() {
        _this._store.highlightedActiveItems.forEach(function(item) {
          _this._removeItem(item);
          if (runEvent) {
            _this._triggerChange(item.value);
          }
        });
      });
      return this;
    };
    Choices2.prototype.showDropdown = function(preventInputFocus) {
      var _this = this;
      if (this.dropdown.isActive) {
        return this;
      }
      if (preventInputFocus === void 0) {
        preventInputFocus = !this._canSearch;
      }
      requestAnimationFrame(function() {
        _this.dropdown.show();
        var rect = _this.dropdown.element.getBoundingClientRect();
        _this.containerOuter.open(rect.bottom, rect.height);
        if (!preventInputFocus) {
          _this.input.focus();
        }
        _this.passedElement.triggerEvent(EventType.showDropdown);
      });
      return this;
    };
    Choices2.prototype.hideDropdown = function(preventInputBlur) {
      var _this = this;
      if (!this.dropdown.isActive) {
        return this;
      }
      requestAnimationFrame(function() {
        _this.dropdown.hide();
        _this.containerOuter.close();
        if (!preventInputBlur && _this._canSearch) {
          _this.input.removeActiveDescendant();
          _this.input.blur();
        }
        _this.passedElement.triggerEvent(EventType.hideDropdown);
      });
      return this;
    };
    Choices2.prototype.getValue = function(valueOnly) {
      var _this = this;
      var values = this._store.items.map(function(item) {
        return valueOnly ? item.value : _this._getChoiceForOutput(item);
      });
      return this._isSelectOneElement || this.config.singleModeForMultiSelect ? values[0] : values;
    };
    Choices2.prototype.setValue = function(items2) {
      var _this = this;
      if (!this.initialisedOK) {
        this._warnChoicesInitFailed("setValue");
        return this;
      }
      this._store.withTxn(function() {
        items2.forEach(function(value) {
          if (value) {
            _this._addChoice(mapInputToChoice(value, false));
          }
        });
      });
      this._searcher.reset();
      return this;
    };
    Choices2.prototype.setChoiceByValue = function(value) {
      var _this = this;
      if (!this.initialisedOK) {
        this._warnChoicesInitFailed("setChoiceByValue");
        return this;
      }
      if (this._isTextElement) {
        return this;
      }
      this._store.withTxn(function() {
        var choiceValue = Array.isArray(value) ? value : [value];
        choiceValue.forEach(function(val) {
          return _this._findAndSelectChoiceByValue(val);
        });
        _this.unhighlightAll();
      });
      this._searcher.reset();
      return this;
    };
    Choices2.prototype.setChoices = function(choicesArrayOrFetcher, value, label, replaceChoices, clearSearchFlag, replaceItems) {
      var _this = this;
      if (choicesArrayOrFetcher === void 0) {
        choicesArrayOrFetcher = [];
      }
      if (value === void 0) {
        value = "value";
      }
      if (label === void 0) {
        label = "label";
      }
      if (replaceChoices === void 0) {
        replaceChoices = false;
      }
      if (clearSearchFlag === void 0) {
        clearSearchFlag = true;
      }
      if (replaceItems === void 0) {
        replaceItems = false;
      }
      if (!this.initialisedOK) {
        this._warnChoicesInitFailed("setChoices");
        return this;
      }
      if (!this._isSelectElement) {
        throw new TypeError("setChoices can't be used with INPUT based Choices");
      }
      if (typeof value !== "string" || !value) {
        throw new TypeError("value parameter must be a name of 'value' field in passed objects");
      }
      if (typeof choicesArrayOrFetcher === "function") {
        var fetcher_1 = choicesArrayOrFetcher(this);
        if (typeof Promise === "function" && fetcher_1 instanceof Promise) {
          return new Promise(function(resolve) {
            return requestAnimationFrame(resolve);
          }).then(function() {
            return _this._handleLoadingState(true);
          }).then(function() {
            return fetcher_1;
          }).then(function(data) {
            return _this.setChoices(data, value, label, replaceChoices, clearSearchFlag, replaceItems);
          }).catch(function(err) {
            if (!_this.config.silent) {
              console.error(err);
            }
          }).then(function() {
            return _this._handleLoadingState(false);
          }).then(function() {
            return _this;
          });
        }
        if (!Array.isArray(fetcher_1)) {
          throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
        }
        return this.setChoices(fetcher_1, value, label, false);
      }
      if (!Array.isArray(choicesArrayOrFetcher)) {
        throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
      }
      this.containerOuter.removeLoadingState();
      this._store.withTxn(function() {
        if (clearSearchFlag) {
          _this._isSearching = false;
        }
        if (replaceChoices) {
          _this.clearChoices(true, replaceItems);
        }
        var isDefaultValue = value === "value";
        var isDefaultLabel = label === "label";
        choicesArrayOrFetcher.forEach(function(groupOrChoice) {
          if ("choices" in groupOrChoice) {
            var group = groupOrChoice;
            if (!isDefaultLabel) {
              group = __assign(__assign({}, group), { label: group[label] });
            }
            _this._addGroup(mapInputToChoice(group, true));
          } else {
            var choice = groupOrChoice;
            if (!isDefaultLabel || !isDefaultValue) {
              choice = __assign(__assign({}, choice), { value: choice[value], label: choice[label] });
            }
            var choiceFull = mapInputToChoice(choice, false);
            _this._addChoice(choiceFull);
            if (choiceFull.placeholder && !_this._hasNonChoicePlaceholder) {
              _this._placeholderValue = unwrapStringForEscaped(choiceFull.label);
            }
          }
        });
        _this.unhighlightAll();
      });
      this._searcher.reset();
      return this;
    };
    Choices2.prototype.refresh = function(withEvents, selectFirstOption, deselectAll) {
      var _this = this;
      if (withEvents === void 0) {
        withEvents = false;
      }
      if (selectFirstOption === void 0) {
        selectFirstOption = false;
      }
      if (deselectAll === void 0) {
        deselectAll = false;
      }
      if (!this._isSelectElement) {
        if (!this.config.silent) {
          console.warn("refresh method can only be used on choices backed by a <select> element");
        }
        return this;
      }
      this._store.withTxn(function() {
        var choicesFromOptions = _this.passedElement.optionsAsChoices();
        var existingItems = {};
        if (!deselectAll) {
          _this._store.items.forEach(function(choice) {
            if (choice.id && choice.active && choice.selected) {
              existingItems[choice.value] = true;
            }
          });
        }
        _this.clearStore(false);
        var updateChoice = function(choice) {
          if (deselectAll) {
            _this._store.dispatch(removeItem$1(choice));
          } else if (existingItems[choice.value]) {
            choice.selected = true;
          }
        };
        choicesFromOptions.forEach(function(groupOrChoice) {
          if ("choices" in groupOrChoice) {
            groupOrChoice.choices.forEach(updateChoice);
            return;
          }
          updateChoice(groupOrChoice);
        });
        _this._addPredefinedChoices(choicesFromOptions, selectFirstOption, withEvents);
        if (_this._isSearching) {
          _this._searchChoices(_this.input.value);
        }
      });
      return this;
    };
    Choices2.prototype.removeChoice = function(value) {
      var choice = this._store.choices.find(function(c2) {
        return c2.value === value;
      });
      if (!choice) {
        return this;
      }
      this._clearNotice();
      this._store.dispatch(removeChoice(choice));
      this._searcher.reset();
      if (choice.selected) {
        this.passedElement.triggerEvent(EventType.removeItem, this._getChoiceForOutput(choice));
      }
      return this;
    };
    Choices2.prototype.clearChoices = function(clearOptions, clearItems) {
      var _this = this;
      if (clearOptions === void 0) {
        clearOptions = true;
      }
      if (clearItems === void 0) {
        clearItems = false;
      }
      if (clearOptions) {
        if (clearItems) {
          this.passedElement.element.replaceChildren("");
        } else {
          this.passedElement.element.querySelectorAll(":not([selected])").forEach(function(el) {
            el.remove();
          });
        }
      }
      this.itemList.element.replaceChildren("");
      this.choiceList.element.replaceChildren("");
      this._clearNotice();
      this._store.withTxn(function() {
        var items2 = clearItems ? [] : _this._store.items;
        _this._store.reset();
        items2.forEach(function(item) {
          _this._store.dispatch(addChoice(item));
          _this._store.dispatch(addItem(item));
        });
      });
      this._searcher.reset();
      return this;
    };
    Choices2.prototype.clearStore = function(clearOptions) {
      if (clearOptions === void 0) {
        clearOptions = true;
      }
      this.clearChoices(clearOptions, true);
      this._stopSearch();
      this._lastAddedChoiceId = 0;
      this._lastAddedGroupId = 0;
      return this;
    };
    Choices2.prototype.clearInput = function() {
      var shouldSetInputWidth = !this._isSelectOneElement;
      this.input.clear(shouldSetInputWidth);
      this._stopSearch();
      return this;
    };
    Choices2.prototype._validateConfig = function() {
      var config = this.config;
      var invalidConfigOptions = diff(config, DEFAULT_CONFIG);
      if (invalidConfigOptions.length) {
        console.warn("Unknown config option(s) passed", invalidConfigOptions.join(", "));
      }
      if (config.allowHTML && config.allowHtmlUserInput) {
        if (config.addItems) {
          console.warn("Warning: allowHTML/allowHtmlUserInput/addItems all being true is strongly not recommended and may lead to XSS attacks");
        }
        if (config.addChoices) {
          console.warn("Warning: allowHTML/allowHtmlUserInput/addChoices all being true is strongly not recommended and may lead to XSS attacks");
        }
      }
    };
    Choices2.prototype._render = function(changes) {
      if (changes === void 0) {
        changes = { choices: true, groups: true, items: true };
      }
      if (this._store.inTxn()) {
        return;
      }
      if (this._isSelectElement) {
        if (changes.choices || changes.groups) {
          this._renderChoices();
        }
      }
      if (changes.items) {
        this._renderItems();
      }
    };
    Choices2.prototype._renderChoices = function() {
      var _this = this;
      if (!this._canAddItems()) {
        return;
      }
      var _a = this, config = _a.config, isSearching = _a._isSearching;
      var _b = this._store, activeGroups = _b.activeGroups, activeChoices = _b.activeChoices;
      var renderLimit = 0;
      if (isSearching && config.searchResultLimit > 0) {
        renderLimit = config.searchResultLimit;
      } else if (config.renderChoiceLimit > 0) {
        renderLimit = config.renderChoiceLimit;
      }
      if (this._isSelectElement) {
        var backingOptions = activeChoices.filter(function(choice) {
          return !choice.element;
        });
        if (backingOptions.length) {
          this.passedElement.addOptions(backingOptions);
        }
      }
      var fragment = document.createDocumentFragment();
      var renderableChoices = function(choices2) {
        return choices2.filter(function(choice) {
          return !choice.placeholder && (isSearching ? !!choice.rank : config.renderSelectedChoices || !choice.selected);
        });
      };
      var selectableChoices = false;
      var renderChoices = function(choices2, withinGroup, groupLabel) {
        if (isSearching) {
          choices2.sort(sortByRank);
        } else if (config.shouldSort) {
          choices2.sort(config.sorter);
        }
        var choiceLimit = choices2.length;
        choiceLimit = !withinGroup && renderLimit && choiceLimit > renderLimit ? renderLimit : choiceLimit;
        choiceLimit--;
        choices2.every(function(choice, index) {
          var dropdownItem = choice.choiceEl || _this._templates.choice(config, choice, config.itemSelectText, groupLabel);
          choice.choiceEl = dropdownItem;
          fragment.appendChild(dropdownItem);
          if (isSearching || !choice.selected) {
            selectableChoices = true;
          }
          return index < choiceLimit;
        });
      };
      if (activeChoices.length) {
        if (config.resetScrollPosition) {
          requestAnimationFrame(function() {
            return _this.choiceList.scrollToTop();
          });
        }
        if (!this._hasNonChoicePlaceholder && !isSearching && this._isSelectOneElement) {
          renderChoices(activeChoices.filter(function(choice) {
            return choice.placeholder && !choice.group;
          }), false, void 0);
        }
        if (activeGroups.length && !isSearching) {
          if (config.shouldSort) {
            activeGroups.sort(config.sorter);
          }
          renderChoices(activeChoices.filter(function(choice) {
            return !choice.placeholder && !choice.group;
          }), false, void 0);
          activeGroups.forEach(function(group) {
            var groupChoices = renderableChoices(group.choices);
            if (groupChoices.length) {
              if (group.label) {
                var dropdownGroup = group.groupEl || _this._templates.choiceGroup(_this.config, group);
                group.groupEl = dropdownGroup;
                dropdownGroup.remove();
                fragment.appendChild(dropdownGroup);
              }
              renderChoices(groupChoices, true, config.appendGroupInSearch && isSearching ? group.label : void 0);
            }
          });
        } else {
          renderChoices(renderableChoices(activeChoices), false, void 0);
        }
      }
      if (!selectableChoices && (isSearching || !fragment.children.length || !config.renderSelectedChoices)) {
        if (!this._notice) {
          this._notice = {
            text: resolveStringFunction(isSearching ? config.noResultsText : config.noChoicesText),
            type: isSearching ? NoticeTypes.noResults : NoticeTypes.noChoices
          };
        }
        fragment.replaceChildren("");
      }
      this._renderNotice(fragment);
      this.choiceList.element.replaceChildren(fragment);
      if (selectableChoices) {
        this._highlightChoice();
      }
    };
    Choices2.prototype._renderItems = function() {
      var _this = this;
      var items2 = this._store.items || [];
      var itemList = this.itemList.element;
      var config = this.config;
      var fragment = document.createDocumentFragment();
      var itemFromList = function(item) {
        return itemList.querySelector('[data-item][data-id="'.concat(item.id, '"]'));
      };
      var addItemToFragment = function(item) {
        var el = item.itemEl;
        if (el && el.parentElement) {
          return;
        }
        el = itemFromList(item) || _this._templates.item(config, item, config.removeItemButton);
        item.itemEl = el;
        fragment.appendChild(el);
      };
      items2.forEach(addItemToFragment);
      var addedItems = !!fragment.childNodes.length;
      if (this._isSelectOneElement) {
        var existingItems = itemList.children.length;
        if (addedItems || existingItems > 1) {
          var placeholder = itemList.querySelector(getClassNamesSelector(config.classNames.placeholder));
          if (placeholder) {
            placeholder.remove();
          }
        } else if (!addedItems && !existingItems && this._placeholderValue) {
          addedItems = true;
          addItemToFragment(mapInputToChoice({
            selected: true,
            value: "",
            label: this._placeholderValue,
            placeholder: true
          }, false));
        }
      }
      if (addedItems) {
        itemList.append(fragment);
        if (config.shouldSortItems && !this._isSelectOneElement) {
          items2.sort(config.sorter);
          items2.forEach(function(item) {
            var el = itemFromList(item);
            if (el) {
              el.remove();
              fragment.append(el);
            }
          });
          itemList.append(fragment);
        }
      }
      if (this._isTextElement) {
        this.passedElement.value = items2.map(function(_a) {
          var value = _a.value;
          return value;
        }).join(config.delimiter);
      }
    };
    Choices2.prototype._displayNotice = function(text, type, openDropdown) {
      if (openDropdown === void 0) {
        openDropdown = true;
      }
      var oldNotice = this._notice;
      if (oldNotice && (oldNotice.type === type && oldNotice.text === text || oldNotice.type === NoticeTypes.addChoice && (type === NoticeTypes.noResults || type === NoticeTypes.noChoices))) {
        if (openDropdown) {
          this.showDropdown(true);
        }
        return;
      }
      this._clearNotice();
      this._notice = text ? {
        text,
        type
      } : void 0;
      this._renderNotice();
      if (openDropdown && text) {
        this.showDropdown(true);
      }
    };
    Choices2.prototype._clearNotice = function() {
      if (!this._notice) {
        return;
      }
      var noticeElement = this.choiceList.element.querySelector(getClassNamesSelector(this.config.classNames.notice));
      if (noticeElement) {
        noticeElement.remove();
      }
      this._notice = void 0;
    };
    Choices2.prototype._renderNotice = function(fragment) {
      var noticeConf = this._notice;
      if (noticeConf) {
        var notice = this._templates.notice(this.config, noticeConf.text, noticeConf.type);
        if (fragment) {
          fragment.append(notice);
        } else {
          this.choiceList.prepend(notice);
        }
      }
    };
    Choices2.prototype._getChoiceForOutput = function(choice, keyCode) {
      return {
        id: choice.id,
        highlighted: choice.highlighted,
        labelClass: choice.labelClass,
        labelDescription: choice.labelDescription,
        customProperties: choice.customProperties,
        disabled: choice.disabled,
        active: choice.active,
        label: choice.label,
        placeholder: choice.placeholder,
        value: choice.value,
        groupValue: choice.group ? choice.group.label : void 0,
        element: choice.element,
        keyCode
      };
    };
    Choices2.prototype._triggerChange = function(value) {
      if (value === void 0 || value === null) {
        return;
      }
      this.passedElement.triggerEvent(EventType.change, {
        value
      });
    };
    Choices2.prototype._handleButtonAction = function(element) {
      var _this = this;
      var items2 = this._store.items;
      if (!items2.length || !this.config.removeItems || !this.config.removeItemButton) {
        return;
      }
      var id = element && parseDataSetId(element.parentElement);
      var itemToRemove = id && items2.find(function(item) {
        return item.id === id;
      });
      if (!itemToRemove) {
        return;
      }
      this._store.withTxn(function() {
        _this._removeItem(itemToRemove);
        _this._triggerChange(itemToRemove.value);
        if (_this._isSelectOneElement && !_this._hasNonChoicePlaceholder) {
          var placeholderChoice = (_this.config.shouldSort ? _this._store.choices.reverse() : _this._store.choices).find(function(choice) {
            return choice.placeholder;
          });
          if (placeholderChoice) {
            _this._addItem(placeholderChoice);
            _this.unhighlightAll();
            if (placeholderChoice.value) {
              _this._triggerChange(placeholderChoice.value);
            }
          }
        }
      });
    };
    Choices2.prototype._handleItemAction = function(element, hasShiftKey) {
      var _this = this;
      if (hasShiftKey === void 0) {
        hasShiftKey = false;
      }
      var items2 = this._store.items;
      if (!items2.length || !this.config.removeItems || this._isSelectOneElement) {
        return;
      }
      var id = parseDataSetId(element);
      if (!id) {
        return;
      }
      items2.forEach(function(item) {
        if (item.id === id && !item.highlighted) {
          _this.highlightItem(item);
        } else if (!hasShiftKey && item.highlighted) {
          _this.unhighlightItem(item);
        }
      });
      this.input.focus();
    };
    Choices2.prototype._handleChoiceAction = function(element) {
      var _this = this;
      var id = parseDataSetId(element);
      var choice = id && this._store.getChoiceById(id);
      if (!choice || choice.disabled) {
        return false;
      }
      var hasActiveDropdown = this.dropdown.isActive;
      if (!choice.selected) {
        if (!this._canAddItems()) {
          return true;
        }
        this._store.withTxn(function() {
          _this._addItem(choice, true, true);
          _this.clearInput();
          _this.unhighlightAll();
        });
        this._triggerChange(choice.value);
      }
      if (hasActiveDropdown && this.config.closeDropdownOnSelect) {
        this.hideDropdown(true);
        this.containerOuter.element.focus();
      }
      return true;
    };
    Choices2.prototype._handleBackspace = function(items2) {
      var config = this.config;
      if (!config.removeItems || !items2.length) {
        return;
      }
      var lastItem = items2[items2.length - 1];
      var hasHighlightedItems = items2.some(function(item) {
        return item.highlighted;
      });
      if (config.editItems && !hasHighlightedItems && lastItem) {
        this.input.value = lastItem.value;
        this.input.setWidth();
        this._removeItem(lastItem);
        this._triggerChange(lastItem.value);
      } else {
        if (!hasHighlightedItems) {
          this.highlightItem(lastItem, false);
        }
        this.removeHighlightedItems(true);
      }
    };
    Choices2.prototype._loadChoices = function() {
      var _a;
      var _this = this;
      var config = this.config;
      if (this._isTextElement) {
        this._presetChoices = config.items.map(function(e2) {
          return mapInputToChoice(e2, false);
        });
        if (this.passedElement.value) {
          var elementItems = this.passedElement.value.split(config.delimiter).map(function(e2) {
            return mapInputToChoice(e2, false, _this.config.allowHtmlUserInput);
          });
          this._presetChoices = this._presetChoices.concat(elementItems);
        }
        this._presetChoices.forEach(function(choice) {
          choice.selected = true;
        });
      } else if (this._isSelectElement) {
        this._presetChoices = config.choices.map(function(e2) {
          return mapInputToChoice(e2, true);
        });
        var choicesFromOptions = this.passedElement.optionsAsChoices();
        if (choicesFromOptions) {
          (_a = this._presetChoices).push.apply(_a, choicesFromOptions);
        }
      }
    };
    Choices2.prototype._handleLoadingState = function(setLoading) {
      if (setLoading === void 0) {
        setLoading = true;
      }
      var el = this.itemList.element;
      if (setLoading) {
        this.disable();
        this.containerOuter.addLoadingState();
        if (this._isSelectOneElement) {
          el.replaceChildren(this._templates.placeholder(this.config, this.config.loadingText));
        } else {
          this.input.placeholder = this.config.loadingText;
        }
      } else {
        this.enable();
        this.containerOuter.removeLoadingState();
        if (this._isSelectOneElement) {
          el.replaceChildren("");
          this._render();
        } else {
          this.input.placeholder = this._placeholderValue || "";
        }
      }
    };
    Choices2.prototype._handleSearch = function(value) {
      if (!this.input.isFocussed) {
        return;
      }
      if (value !== null && typeof value !== "undefined" && value.length >= this.config.searchFloor) {
        var resultCount = this.config.searchChoices ? this._searchChoices(value) : 0;
        if (resultCount !== null) {
          this.passedElement.triggerEvent(EventType.search, {
            value,
            resultCount
          });
        }
      } else if (this._store.choices.some(function(option) {
        return !option.active;
      })) {
        this._stopSearch();
      }
    };
    Choices2.prototype._canAddItems = function() {
      var config = this.config;
      var maxItemCount = config.maxItemCount, maxItemText = config.maxItemText;
      if (!config.singleModeForMultiSelect && maxItemCount > 0 && maxItemCount <= this._store.items.length) {
        this.choiceList.element.replaceChildren("");
        this._notice = void 0;
        this._displayNotice(typeof maxItemText === "function" ? maxItemText(maxItemCount) : maxItemText, NoticeTypes.addChoice);
        return false;
      }
      if (this._notice && this._notice.type === NoticeTypes.addChoice) {
        this._clearNotice();
      }
      return true;
    };
    Choices2.prototype._canCreateItem = function(value) {
      var config = this.config;
      var canAddItem = true;
      var notice = "";
      if (canAddItem && typeof config.addItemFilter === "function" && !config.addItemFilter(value)) {
        canAddItem = false;
        notice = resolveNoticeFunction(config.customAddItemText, value);
      }
      if (canAddItem) {
        var foundChoice = this._store.choices.find(function(choice) {
          return config.valueComparer(choice.value, value);
        });
        if (foundChoice) {
          if (this._isSelectElement) {
            this._displayNotice("", NoticeTypes.addChoice);
            return false;
          }
          if (!config.duplicateItemsAllowed) {
            canAddItem = false;
            notice = resolveNoticeFunction(config.uniqueItemText, value);
          }
        }
      }
      if (canAddItem) {
        notice = resolveNoticeFunction(config.addItemText, value);
      }
      if (notice) {
        this._displayNotice(notice, NoticeTypes.addChoice);
      }
      return canAddItem;
    };
    Choices2.prototype._searchChoices = function(value) {
      var newValue = value.trim().replace(/\s{2,}/, " ");
      if (!newValue.length || newValue === this._currentValue) {
        return null;
      }
      var searcher = this._searcher;
      if (searcher.isEmptyIndex()) {
        searcher.index(this._store.searchableChoices);
      }
      var results = searcher.search(newValue);
      this._currentValue = newValue;
      this._highlightPosition = 0;
      this._isSearching = true;
      var notice = this._notice;
      var noticeType = notice && notice.type;
      if (noticeType !== NoticeTypes.addChoice) {
        if (!results.length) {
          this._displayNotice(resolveStringFunction(this.config.noResultsText), NoticeTypes.noResults);
        } else {
          this._clearNotice();
        }
      }
      this._store.dispatch(filterChoices(results));
      return results.length;
    };
    Choices2.prototype._stopSearch = function() {
      if (this._isSearching) {
        this._currentValue = "";
        this._isSearching = false;
        this._clearNotice();
        this._store.dispatch(activateChoices(true));
        this.passedElement.triggerEvent(EventType.search, {
          value: "",
          resultCount: 0
        });
      }
    };
    Choices2.prototype._addEventListeners = function() {
      var documentElement = this._docRoot;
      var outerElement = this.containerOuter.element;
      var inputElement = this.input.element;
      documentElement.addEventListener("touchend", this._onTouchEnd, true);
      outerElement.addEventListener("keydown", this._onKeyDown, true);
      outerElement.addEventListener("mousedown", this._onMouseDown, true);
      documentElement.addEventListener("click", this._onClick, { passive: true });
      documentElement.addEventListener("touchmove", this._onTouchMove, {
        passive: true
      });
      this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
        passive: true
      });
      if (this._isSelectOneElement) {
        outerElement.addEventListener("focus", this._onFocus, {
          passive: true
        });
        outerElement.addEventListener("blur", this._onBlur, {
          passive: true
        });
      }
      inputElement.addEventListener("keyup", this._onKeyUp, {
        passive: true
      });
      inputElement.addEventListener("input", this._onInput, {
        passive: true
      });
      inputElement.addEventListener("focus", this._onFocus, {
        passive: true
      });
      inputElement.addEventListener("blur", this._onBlur, {
        passive: true
      });
      if (inputElement.form) {
        inputElement.form.addEventListener("reset", this._onFormReset, {
          passive: true
        });
      }
      this.input.addEventListeners();
    };
    Choices2.prototype._removeEventListeners = function() {
      var documentElement = this._docRoot;
      var outerElement = this.containerOuter.element;
      var inputElement = this.input.element;
      documentElement.removeEventListener("touchend", this._onTouchEnd, true);
      outerElement.removeEventListener("keydown", this._onKeyDown, true);
      outerElement.removeEventListener("mousedown", this._onMouseDown, true);
      documentElement.removeEventListener("click", this._onClick);
      documentElement.removeEventListener("touchmove", this._onTouchMove);
      this.dropdown.element.removeEventListener("mouseover", this._onMouseOver);
      if (this._isSelectOneElement) {
        outerElement.removeEventListener("focus", this._onFocus);
        outerElement.removeEventListener("blur", this._onBlur);
      }
      inputElement.removeEventListener("keyup", this._onKeyUp);
      inputElement.removeEventListener("input", this._onInput);
      inputElement.removeEventListener("focus", this._onFocus);
      inputElement.removeEventListener("blur", this._onBlur);
      if (inputElement.form) {
        inputElement.form.removeEventListener("reset", this._onFormReset);
      }
      this.input.removeEventListeners();
    };
    Choices2.prototype._onKeyDown = function(event) {
      var keyCode = event.keyCode;
      var hasActiveDropdown = this.dropdown.isActive;
      var wasPrintableChar = event.key.length === 1 || event.key.length === 2 && event.key.charCodeAt(0) >= 55296 || event.key === "Unidentified";
      if (!this._isTextElement && !hasActiveDropdown && keyCode !== KeyCodeMap.ESC_KEY && keyCode !== KeyCodeMap.TAB_KEY && keyCode !== KeyCodeMap.SHIFT_KEY) {
        this.showDropdown();
        if (!this.input.isFocussed && wasPrintableChar) {
          this.input.value += event.key;
          if (event.key === " ") {
            event.preventDefault();
          }
        }
      }
      switch (keyCode) {
        case KeyCodeMap.A_KEY:
          return this._onSelectKey(event, this.itemList.element.hasChildNodes());
        case KeyCodeMap.ENTER_KEY:
          return this._onEnterKey(event, hasActiveDropdown);
        case KeyCodeMap.ESC_KEY:
          return this._onEscapeKey(event, hasActiveDropdown);
        case KeyCodeMap.UP_KEY:
        case KeyCodeMap.PAGE_UP_KEY:
        case KeyCodeMap.DOWN_KEY:
        case KeyCodeMap.PAGE_DOWN_KEY:
          return this._onDirectionKey(event, hasActiveDropdown);
        case KeyCodeMap.DELETE_KEY:
        case KeyCodeMap.BACK_KEY:
          return this._onDeleteKey(event, this._store.items, this.input.isFocussed);
      }
    };
    Choices2.prototype._onKeyUp = function() {
      this._canSearch = this.config.searchEnabled;
    };
    Choices2.prototype._onInput = function() {
      var value = this.input.value;
      if (!value) {
        if (this._isTextElement) {
          this.hideDropdown(true);
        } else {
          this._stopSearch();
        }
        return;
      }
      if (!this._canAddItems()) {
        return;
      }
      if (this._canSearch) {
        this._handleSearch(value);
      }
      if (!this._canAddUserChoices) {
        return;
      }
      this._canCreateItem(value);
      if (this._isSelectElement) {
        this._highlightPosition = 0;
        this._highlightChoice();
      }
    };
    Choices2.prototype._onSelectKey = function(event, hasItems) {
      if ((event.ctrlKey || event.metaKey) && hasItems) {
        this._canSearch = false;
        var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
        if (shouldHightlightAll) {
          this.highlightAll();
        }
      }
    };
    Choices2.prototype._onEnterKey = function(event, hasActiveDropdown) {
      var _this = this;
      var value = this.input.value;
      var target = event.target;
      event.preventDefault();
      if (target && target.hasAttribute("data-button")) {
        this._handleButtonAction(target);
        return;
      }
      if (!hasActiveDropdown) {
        if (this._isSelectElement || this._notice) {
          this.showDropdown();
        }
        return;
      }
      var highlightedChoice = this.dropdown.element.querySelector(getClassNamesSelector(this.config.classNames.highlightedState));
      if (highlightedChoice && this._handleChoiceAction(highlightedChoice)) {
        return;
      }
      if (!target || !value) {
        this.hideDropdown(true);
        return;
      }
      if (!this._canAddItems()) {
        return;
      }
      var addedItem = false;
      this._store.withTxn(function() {
        addedItem = _this._findAndSelectChoiceByValue(value, true);
        if (!addedItem) {
          if (!_this._canAddUserChoices) {
            return;
          }
          if (!_this._canCreateItem(value)) {
            return;
          }
          _this._addChoice(mapInputToChoice(value, false, _this.config.allowHtmlUserInput), true, true);
          addedItem = true;
        }
        _this.clearInput();
        _this.unhighlightAll();
      });
      if (!addedItem) {
        return;
      }
      this._triggerChange(value);
      if (this.config.closeDropdownOnSelect) {
        this.hideDropdown(true);
      }
    };
    Choices2.prototype._onEscapeKey = function(event, hasActiveDropdown) {
      if (hasActiveDropdown) {
        event.stopPropagation();
        this.hideDropdown(true);
        this._stopSearch();
        this.containerOuter.element.focus();
      }
    };
    Choices2.prototype._onDirectionKey = function(event, hasActiveDropdown) {
      var keyCode = event.keyCode;
      if (hasActiveDropdown || this._isSelectOneElement) {
        this.showDropdown();
        this._canSearch = false;
        var directionInt = keyCode === KeyCodeMap.DOWN_KEY || keyCode === KeyCodeMap.PAGE_DOWN_KEY ? 1 : -1;
        var skipKey = event.metaKey || keyCode === KeyCodeMap.PAGE_DOWN_KEY || keyCode === KeyCodeMap.PAGE_UP_KEY;
        var nextEl = void 0;
        if (skipKey) {
          if (directionInt > 0) {
            nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type"));
          } else {
            nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
          }
        } else {
          var currentEl = this.dropdown.element.querySelector(getClassNamesSelector(this.config.classNames.highlightedState));
          if (currentEl) {
            nextEl = getAdjacentEl(currentEl, selectableChoiceIdentifier, directionInt);
          } else {
            nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
          }
        }
        if (nextEl) {
          if (!isScrolledIntoView(nextEl, this.choiceList.element, directionInt)) {
            this.choiceList.scrollToChildElement(nextEl, directionInt);
          }
          this._highlightChoice(nextEl);
        }
        event.preventDefault();
      }
    };
    Choices2.prototype._onDeleteKey = function(event, items2, hasFocusedInput) {
      if (!this._isSelectOneElement && !event.target.value && hasFocusedInput) {
        this._handleBackspace(items2);
        event.preventDefault();
      }
    };
    Choices2.prototype._onTouchMove = function() {
      if (this._wasTap) {
        this._wasTap = false;
      }
    };
    Choices2.prototype._onTouchEnd = function(event) {
      var target = (event || event.touches[0]).target;
      var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
      if (touchWasWithinContainer) {
        var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
        if (containerWasExactTarget) {
          if (this._isTextElement) {
            this.input.focus();
          } else if (this._isSelectMultipleElement) {
            this.showDropdown();
          }
        }
        event.stopPropagation();
      }
      this._wasTap = true;
    };
    Choices2.prototype._onMouseDown = function(event) {
      var target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      if (IS_IE11 && this.choiceList.element.contains(target)) {
        var firstChoice = this.choiceList.element.firstElementChild;
        this._isScrollingOnIe = this._direction === "ltr" ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
      }
      if (target === this.input.element) {
        return;
      }
      var item = target.closest("[data-button],[data-item],[data-choice]");
      if (item instanceof HTMLElement) {
        if ("button" in item.dataset) {
          this._handleButtonAction(item);
        } else if ("item" in item.dataset) {
          this._handleItemAction(item, event.shiftKey);
        } else if ("choice" in item.dataset) {
          this._handleChoiceAction(item);
        }
      }
      event.preventDefault();
    };
    Choices2.prototype._onMouseOver = function(_a) {
      var target = _a.target;
      if (target instanceof HTMLElement && "choice" in target.dataset) {
        this._highlightChoice(target);
      }
    };
    Choices2.prototype._onClick = function(_a) {
      var target = _a.target;
      var containerOuter = this.containerOuter;
      var clickWasWithinContainer = containerOuter.element.contains(target);
      if (clickWasWithinContainer) {
        if (!this.dropdown.isActive && !containerOuter.isDisabled) {
          if (this._isTextElement) {
            if (document.activeElement !== this.input.element) {
              this.input.focus();
            }
          } else {
            this.showDropdown();
            containerOuter.element.focus();
          }
        } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
          this.hideDropdown();
        }
      } else {
        containerOuter.removeFocusState();
        this.hideDropdown(true);
        this.unhighlightAll();
      }
    };
    Choices2.prototype._onFocus = function(_a) {
      var target = _a.target;
      var containerOuter = this.containerOuter;
      var focusWasWithinContainer = target && containerOuter.element.contains(target);
      if (!focusWasWithinContainer) {
        return;
      }
      var targetIsInput = target === this.input.element;
      if (this._isTextElement) {
        if (targetIsInput) {
          containerOuter.addFocusState();
        }
      } else if (this._isSelectMultipleElement) {
        if (targetIsInput) {
          this.showDropdown(true);
          containerOuter.addFocusState();
        }
      } else {
        containerOuter.addFocusState();
        if (targetIsInput) {
          this.showDropdown(true);
        }
      }
    };
    Choices2.prototype._onBlur = function(_a) {
      var target = _a.target;
      var containerOuter = this.containerOuter;
      var blurWasWithinContainer = target && containerOuter.element.contains(target);
      if (blurWasWithinContainer && !this._isScrollingOnIe) {
        if (target === this.input.element) {
          containerOuter.removeFocusState();
          this.hideDropdown(true);
          if (this._isTextElement || this._isSelectMultipleElement) {
            this.unhighlightAll();
          }
        } else if (target === this.containerOuter.element) {
          containerOuter.removeFocusState();
          if (!this._canSearch) {
            this.hideDropdown(true);
          }
        }
      } else {
        this._isScrollingOnIe = false;
        this.input.element.focus();
      }
    };
    Choices2.prototype._onFormReset = function() {
      var _this = this;
      this._store.withTxn(function() {
        _this.clearInput();
        _this.hideDropdown();
        _this.refresh(false, false, true);
        if (_this._initialItems.length) {
          _this.setChoiceByValue(_this._initialItems);
        }
      });
    };
    Choices2.prototype._highlightChoice = function(el) {
      if (el === void 0) {
        el = null;
      }
      var choices2 = Array.from(this.dropdown.element.querySelectorAll(selectableChoiceIdentifier));
      if (!choices2.length) {
        return;
      }
      var passedEl = el;
      var highlightedState = this.config.classNames.highlightedState;
      var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(getClassNamesSelector(highlightedState)));
      highlightedChoices.forEach(function(choice) {
        removeClassesFromElement(choice, highlightedState);
        choice.setAttribute("aria-selected", "false");
      });
      if (passedEl) {
        this._highlightPosition = choices2.indexOf(passedEl);
      } else {
        if (choices2.length > this._highlightPosition) {
          passedEl = choices2[this._highlightPosition];
        } else {
          passedEl = choices2[choices2.length - 1];
        }
        if (!passedEl) {
          passedEl = choices2[0];
        }
      }
      addClassesToElement(passedEl, highlightedState);
      passedEl.setAttribute("aria-selected", "true");
      this.passedElement.triggerEvent(EventType.highlightChoice, {
        el: passedEl
      });
      if (this.dropdown.isActive) {
        this.input.setActiveDescendant(passedEl.id);
        this.containerOuter.setActiveDescendant(passedEl.id);
      }
    };
    Choices2.prototype._addItem = function(item, withEvents, userTriggered) {
      if (withEvents === void 0) {
        withEvents = true;
      }
      if (userTriggered === void 0) {
        userTriggered = false;
      }
      if (!item.id) {
        throw new TypeError("item.id must be set before _addItem is called for a choice/item");
      }
      if (this.config.singleModeForMultiSelect || this._isSelectOneElement) {
        this.removeActiveItems(item.id);
      }
      this._store.dispatch(addItem(item));
      if (withEvents) {
        this.passedElement.triggerEvent(EventType.addItem, this._getChoiceForOutput(item));
        if (userTriggered) {
          this.passedElement.triggerEvent(EventType.choice, this._getChoiceForOutput(item));
        }
      }
    };
    Choices2.prototype._removeItem = function(item) {
      if (!item.id) {
        return;
      }
      this._store.dispatch(removeItem$1(item));
      var notice = this._notice;
      if (notice && notice.type === NoticeTypes.noChoices) {
        this._clearNotice();
      }
      this.passedElement.triggerEvent(EventType.removeItem, this._getChoiceForOutput(item));
    };
    Choices2.prototype._addChoice = function(choice, withEvents, userTriggered) {
      if (withEvents === void 0) {
        withEvents = true;
      }
      if (userTriggered === void 0) {
        userTriggered = false;
      }
      if (choice.id) {
        throw new TypeError("Can not re-add a choice which has already been added");
      }
      var config = this.config;
      if (!config.duplicateItemsAllowed && this._store.choices.find(function(c2) {
        return config.valueComparer(c2.value, choice.value);
      })) {
        return;
      }
      this._lastAddedChoiceId++;
      choice.id = this._lastAddedChoiceId;
      choice.elementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choice.id);
      var prependValue = config.prependValue, appendValue = config.appendValue;
      if (prependValue) {
        choice.value = prependValue + choice.value;
      }
      if (appendValue) {
        choice.value += appendValue.toString();
      }
      if ((prependValue || appendValue) && choice.element) {
        choice.element.value = choice.value;
      }
      this._clearNotice();
      this._store.dispatch(addChoice(choice));
      if (choice.selected) {
        this._addItem(choice, withEvents, userTriggered);
      }
    };
    Choices2.prototype._addGroup = function(group, withEvents) {
      var _this = this;
      if (withEvents === void 0) {
        withEvents = true;
      }
      if (group.id) {
        throw new TypeError("Can not re-add a group which has already been added");
      }
      this._store.dispatch(addGroup(group));
      if (!group.choices) {
        return;
      }
      this._lastAddedGroupId++;
      group.id = this._lastAddedGroupId;
      group.choices.forEach(function(item) {
        item.group = group;
        if (group.disabled) {
          item.disabled = true;
        }
        _this._addChoice(item, withEvents);
      });
    };
    Choices2.prototype._createTemplates = function() {
      var _this = this;
      var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
      var userTemplates = {};
      if (typeof callbackOnCreateTemplates === "function") {
        userTemplates = callbackOnCreateTemplates.call(this, strToEl, escapeForTemplate, getClassNames);
      }
      var templating = {};
      Object.keys(this._templates).forEach(function(name) {
        if (name in userTemplates) {
          templating[name] = userTemplates[name].bind(_this);
        } else {
          templating[name] = _this._templates[name].bind(_this);
        }
      });
      this._templates = templating;
    };
    Choices2.prototype._createElements = function() {
      var templating = this._templates;
      var _a = this, config = _a.config, isSelectOneElement = _a._isSelectOneElement;
      var position = config.position, classNames = config.classNames;
      var elementType = this._elementType;
      this.containerOuter = new Container({
        element: templating.containerOuter(config, this._direction, this._isSelectElement, isSelectOneElement, config.searchEnabled, elementType, config.labelId),
        classNames,
        type: elementType,
        position
      });
      this.containerInner = new Container({
        element: templating.containerInner(config),
        classNames,
        type: elementType,
        position
      });
      this.input = new Input({
        element: templating.input(config, this._placeholderValue),
        classNames,
        type: elementType,
        preventPaste: !config.paste
      });
      this.choiceList = new List({
        element: templating.choiceList(config, isSelectOneElement)
      });
      this.itemList = new List({
        element: templating.itemList(config, isSelectOneElement)
      });
      this.dropdown = new Dropdown({
        element: templating.dropdown(config),
        classNames,
        type: elementType
      });
    };
    Choices2.prototype._createStructure = function() {
      var _a = this, containerInner = _a.containerInner, containerOuter = _a.containerOuter, passedElement = _a.passedElement;
      var dropdownElement = this.dropdown.element;
      passedElement.conceal();
      containerInner.wrap(passedElement.element);
      containerOuter.wrap(containerInner.element);
      if (this._isSelectOneElement) {
        this.input.placeholder = this.config.searchPlaceholderValue || "";
      } else {
        if (this._placeholderValue) {
          this.input.placeholder = this._placeholderValue;
        }
        this.input.setWidth();
      }
      containerOuter.element.appendChild(containerInner.element);
      containerOuter.element.appendChild(dropdownElement);
      containerInner.element.appendChild(this.itemList.element);
      dropdownElement.appendChild(this.choiceList.element);
      if (!this._isSelectOneElement) {
        containerInner.element.appendChild(this.input.element);
      } else if (this.config.searchEnabled) {
        dropdownElement.insertBefore(this.input.element, dropdownElement.firstChild);
      }
      this._highlightPosition = 0;
      this._isSearching = false;
    };
    Choices2.prototype._initStore = function() {
      var _this = this;
      this._store.subscribe(this._render).withTxn(function() {
        _this._addPredefinedChoices(_this._presetChoices, _this._isSelectOneElement && !_this._hasNonChoicePlaceholder, false);
      });
      if (!this._store.choices.length || this._isSelectOneElement && this._hasNonChoicePlaceholder) {
        this._render();
      }
    };
    Choices2.prototype._addPredefinedChoices = function(choices2, selectFirstOption, withEvents) {
      var _this = this;
      if (selectFirstOption === void 0) {
        selectFirstOption = false;
      }
      if (withEvents === void 0) {
        withEvents = true;
      }
      if (selectFirstOption) {
        var noSelectedChoices = choices2.findIndex(function(choice) {
          return choice.selected;
        }) === -1;
        if (noSelectedChoices) {
          choices2.some(function(choice) {
            if (choice.disabled || "choices" in choice) {
              return false;
            }
            choice.selected = true;
            return true;
          });
        }
      }
      choices2.forEach(function(item) {
        if ("choices" in item) {
          if (_this._isSelectElement) {
            _this._addGroup(item, withEvents);
          }
        } else {
          _this._addChoice(item, withEvents);
        }
      });
    };
    Choices2.prototype._findAndSelectChoiceByValue = function(value, userTriggered) {
      var _this = this;
      if (userTriggered === void 0) {
        userTriggered = false;
      }
      var foundChoice = this._store.choices.find(function(choice) {
        return _this.config.valueComparer(choice.value, value);
      });
      if (foundChoice && !foundChoice.disabled && !foundChoice.selected) {
        this._addItem(foundChoice, true, userTriggered);
        return true;
      }
      return false;
    };
    Choices2.prototype._generatePlaceholderValue = function() {
      var config = this.config;
      if (!config.placeholder) {
        return null;
      }
      if (this._hasNonChoicePlaceholder) {
        return config.placeholderValue;
      }
      if (this._isSelectElement) {
        var placeholderOption = this.passedElement.placeholderOption;
        return placeholderOption ? placeholderOption.text : null;
      }
      return null;
    };
    Choices2.prototype._warnChoicesInitFailed = function(caller) {
      if (this.config.silent) {
        return;
      }
      if (!this.initialised) {
        throw new TypeError("".concat(caller, " called on a non-initialised instance of Choices"));
      } else if (!this.initialisedOK) {
        throw new TypeError("".concat(caller, " called for an element which has multiple instances of Choices initialised on it"));
      }
    };
    Choices2.version = "11.1.0";
    return Choices2;
  }()
);
/*! License details at fancyapps.com/license */
const t$7 = (t2) => "string" == typeof t2;
/*! License details at fancyapps.com/license */
const n$8 = (n2) => n2 && null !== n2 && n2 instanceof Element && "nodeType" in n2;
/*! License details at fancyapps.com/license */
const e$8 = function(e2) {
  if (!(e2 && e2 instanceof Element && e2.offsetParent)) return false;
  let n2 = false, i2 = false;
  if (e2.scrollWidth > e2.clientWidth) {
    const i3 = window.getComputedStyle(e2).overflowX, t2 = -1 !== i3.indexOf("hidden"), o2 = -1 !== i3.indexOf("clip"), d2 = -1 !== i3.indexOf("visible");
    n2 = !t2 && !o2 && !d2;
  }
  if (e2.scrollHeight > e2.clientHeight) {
    const n3 = window.getComputedStyle(e2).overflowY, t2 = -1 !== n3.indexOf("hidden"), o2 = -1 !== n3.indexOf("clip"), d2 = -1 !== n3.indexOf("visible");
    i2 = !t2 && !o2 && !d2;
  }
  return n2 || i2;
}, n$7 = function(i2, t2 = void 0) {
  return !i2 || i2 === document.body || t2 && i2 === t2 ? null : e$8(i2) ? i2 : n$7(i2.parentElement, t2);
};
/*! License details at fancyapps.com/license */
const e$7 = function(e2) {
  var t2 = new DOMParser().parseFromString(e2, "text/html").body;
  if (t2.childElementCount > 1) {
    for (var n2 = document.createElement("div"); t2.firstChild; ) n2.appendChild(t2.firstChild);
    return n2;
  }
  let r2 = t2.firstChild;
  return !r2 || r2 instanceof HTMLElement ? r2 : ((n2 = document.createElement("div")).appendChild(r2), n2);
};
/*! License details at fancyapps.com/license */
const t$6 = function(t2 = 0, n2 = 0, a2 = 0) {
  return Math.max(Math.min(n2, a2), t2);
};
/*! License details at fancyapps.com/license */
const t$5 = (t2) => "object" == typeof t2 && null !== t2 && t2.constructor === Object && "[object Object]" === Object.prototype.toString.call(t2);
/*! License details at fancyapps.com/license */
function e$6(e2) {
  return t$5(e2) || Array.isArray(e2);
}
function n$6(t2, r2) {
  const o2 = Object.keys(t2), c2 = Object.keys(r2);
  return o2.length === c2.length && o2.every((o3) => {
    const c3 = t2[o3], i2 = r2[o3];
    return "function" == typeof c3 ? `${c3}` == `${i2}` : e$6(c3) && e$6(i2) ? n$6(c3, i2) : c3 === i2;
  });
}
/*! License details at fancyapps.com/license */
const e$5 = function(n2) {
  for (const t2 of s$9) t2.getState() === i$6.Running && t2.tick(a$5 ? n2 - a$5 : 0);
  a$5 = n2, u$4 = window.requestAnimationFrame(e$5);
};
var i$6, o$8, r$5;
!function(n2) {
  n2[n2.Initializing = 0] = "Initializing", n2[n2.Running = 1] = "Running", n2[n2.Paused = 2] = "Paused", n2[n2.Completed = 3] = "Completed", n2[n2.Destroyed = 4] = "Destroyed";
}(i$6 || (i$6 = {})), function(n2) {
  n2[n2.Spring = 0] = "Spring", n2[n2.Ease = 1] = "Ease";
}(o$8 || (o$8 = {})), function(n2) {
  n2[n2.Loop = 0] = "Loop", n2[n2.Reverse = 1] = "Reverse";
}(r$5 || (r$5 = {}));
const s$9 = /* @__PURE__ */ new Set();
let u$4 = null, a$5 = 0;
function c$4() {
  let a2 = i$6.Initializing, f2 = o$8.Ease, l2 = 0, g2 = 0, p2 = c$4.Easings.Linear, m2 = 500, d2 = 0, b2 = 0, S2 = 0, h2 = 0, y2 = 1 / 0, E2 = 0.01, R2 = 0.01, M2 = false, j2 = {}, w2 = null, v2 = {}, O2 = {}, C = {}, L = 0, I2 = 0, D2 = r$5.Loop, z2 = c$4.Easings.Linear;
  const N2 = /* @__PURE__ */ new Map();
  function V(n2, ...t2) {
    for (const e2 of N2.get(n2) || []) e2(...t2);
  }
  function q2(n2) {
    return g2 = 0, n2 ? w2 = setTimeout(() => {
      x2();
    }, n2) : x2(), F2;
  }
  function x2() {
    a2 = i$6.Running, V("start", v2, O2);
  }
  function A2() {
    if (a2 = i$6.Completed, C = {}, V("end", v2), a2 === i$6.Completed) if (l2 < L) {
      if (l2++, D2 === r$5.Reverse) {
        const n2 = Object.assign({}, j2);
        j2 = Object.assign({}, O2), O2 = n2;
      }
      q2(I2);
    } else l2 = 0;
    return F2;
  }
  const F2 = { getState: function() {
    return a2;
  }, easing: function(n2) {
    return p2 = n2, f2 = o$8.Ease, C = {}, F2;
  }, duration: function(n2) {
    return m2 = n2, F2;
  }, spring: function(n2 = {}) {
    f2 = o$8.Spring;
    const t2 = { velocity: 0, mass: 1, tension: 170, friction: 26, restDelta: 0.1, restSpeed: 0.1, maxSpeed: 1 / 0, clamp: true }, { velocity: e2, mass: i2, tension: r2, friction: s2, restDelta: u2, restSpeed: a3, maxSpeed: c2, clamp: l3 } = Object.assign(Object.assign({}, t2), n2);
    return d2 = e2, b2 = i2, S2 = r2, h2 = s2, R2 = u2, E2 = a3, y2 = c2, M2 = l3, C = {}, F2;
  }, isRunning: function() {
    return a2 === i$6.Running;
  }, isSpring: function() {
    return f2 === o$8.Spring;
  }, from: function(n2) {
    return v2 = Object.assign({}, n2), F2;
  }, to: function(n2) {
    return O2 = n2, F2;
  }, repeat: function(n2, t2 = 0, e2 = r$5.Loop, i2) {
    return L = n2, I2 = t2, D2 = e2, z2 = i2 || p2, F2;
  }, on: function(n2, t2) {
    var e2, i2;
    return e2 = n2, i2 = t2, N2.set(e2, [...N2.get(e2) || [], i2]), F2;
  }, off: function(n2, t2) {
    var e2, i2;
    return e2 = n2, i2 = t2, N2.has(e2) && N2.set(e2, N2.get(e2).filter((n3) => n3 !== i2)), F2;
  }, start: function(n2) {
    return n$6(v2, O2) || (a2 = i$6.Initializing, j2 = Object.assign({}, v2), s$9.add(this), u$4 || (u$4 = window.requestAnimationFrame(e$5)), q2(n2)), F2;
  }, pause: function() {
    return w2 && (clearTimeout(w2), w2 = null), a2 === i$6.Running && (a2 = i$6.Paused, V("pause", v2)), F2;
  }, end: A2, tick: function(e2) {
    e2 > 50 && (e2 = 50), g2 += e2;
    let s2 = 0, u2 = false;
    if (a2 !== i$6.Running) return F2;
    if (f2 === o$8.Ease) {
      s2 = t$6(0, g2 / m2, 1), u2 = 1 === s2;
      const t2 = D2 === r$5.Reverse ? z2 : p2;
      for (const n2 in v2) v2[n2] = j2[n2] + (O2[n2] - j2[n2]) * t2(s2);
    }
    if (f2 === o$8.Spring) {
      const t2 = 1e-3 * e2;
      let i2 = 0;
      for (const e3 in v2) {
        const o2 = O2[e3];
        let r2 = v2[e3];
        if ("number" != typeof o2 || isNaN(o2) || "number" != typeof r2 || isNaN(r2)) continue;
        if (Math.abs(o2 - r2) <= R2) {
          v2[e3] = o2, C[e3] = 0;
          continue;
        }
        C[e3] || ("object" == typeof d2 && "number" == typeof d2[e3] ? C[e3] = d2[e3] : C[e3] = "number" == typeof d2 ? d2 : 0);
        let s3 = C[e3];
        s3 = t$6(-1 * Math.abs(y2), s3, Math.abs(y2));
        const u3 = s3 * b2 * h2;
        s3 += ((r2 > o2 ? -1 : 1) * (Math.abs(o2 - r2) * S2) - u3) / b2 * t2, r2 += s3 * t2;
        const a3 = v2[e3] > o2 ? r2 < o2 : r2 > o2;
        let c3 = Math.abs(s3) < E2 && Math.abs(o2 - r2) <= R2;
        M2 && a3 && (c3 = true), c3 ? (r2 = o2, s3 = 0) : i2++, v2[e3] = r2, C[e3] = s3;
      }
      u2 = !i2;
    }
    const c2 = Object.assign({}, O2);
    return V("step", v2, j2, O2, s2), u2 && a2 === i$6.Running && n$6(O2, c2) && (a2 = i$6.Completed, A2()), F2;
  }, getStartValues: function() {
    return j2;
  }, getCurrentValues: function() {
    return v2;
  }, getCurrentVelocities: function() {
    return C;
  }, getEndValues: function() {
    return O2;
  }, destroy: function() {
    a2 = i$6.Destroyed, w2 && (clearTimeout(w2), w2 = null), j2 = v2 = O2 = {}, s$9.delete(this);
  } };
  return F2;
}
c$4.destroy = () => {
  for (const n2 of s$9) n2.destroy();
  u$4 && (cancelAnimationFrame(u$4), u$4 = null);
}, c$4.Easings = { Linear: function(n2) {
  return n2;
}, EaseIn: function(n2) {
  return 0 === n2 ? 0 : Math.pow(2, 10 * n2 - 10);
}, EaseOut: function(n2) {
  return 1 === n2 ? 1 : 1 - Math.pow(2, -10 * n2);
}, EaseInOut: function(n2) {
  return 0 === n2 ? 0 : 1 === n2 ? 1 : n2 < 0.5 ? Math.pow(2, 20 * n2 - 10) / 2 : (2 - Math.pow(2, -20 * n2 + 10)) / 2;
} };
/*! License details at fancyapps.com/license */
function e$4(e2) {
  return "undefined" != typeof TouchEvent && e2 instanceof TouchEvent;
}
function t$4(t2, n2) {
  const o2 = [], s2 = e$4(t2) ? t2[n2] : t2 instanceof MouseEvent && ("changedTouches" === n2 || "mouseup" !== t2.type) ? [t2] : [];
  for (const e2 of s2) o2.push({ x: e2.clientX, y: e2.clientY, ts: Date.now() });
  return o2;
}
function n$5(e2) {
  return t$4(e2, "touches");
}
function o$7(e2) {
  return t$4(e2, "targetTouches");
}
function s$8(e2) {
  return t$4(e2, "changedTouches");
}
function i$5(e2) {
  const t2 = e2[0], n2 = e2[1] || t2;
  return { x: (t2.x + n2.x) / 2, y: (t2.y + n2.y) / 2, ts: n2.ts };
}
function r$4(e2) {
  const t2 = e2[0], n2 = e2[1] || e2[0];
  return t2 && n2 ? -1 * Math.sqrt((n2.x - t2.x) * (n2.x - t2.x) + (n2.y - t2.y) * (n2.y - t2.y)) : 0;
}
const c$3 = (e2) => {
  e2.cancelable && e2.preventDefault();
}, a$4 = { passive: false }, u$3 = { panThreshold: 5, swipeThreshold: 3, ignore: ["textarea", "input", "select", "[contenteditable]", "[data-selectable]", "[data-draggable]"] };
let l$6 = false, d$1 = true;
const f$1 = (e2, t2) => {
  let f2, h2, v2, g2 = Object.assign(Object.assign({}, u$3), t2), p2 = [], m2 = [], E2 = [], w2 = false, y2 = false, T = false, b2 = false, M2 = 0, L = 0, x2 = 0, P = 0, D2 = 0, X = 0, Y = 0, j2 = 0, k2 = 0, R2 = [], z2 = 0, A2 = 0;
  const O2 = /* @__PURE__ */ new Map();
  function S2(e3) {
    const t3 = r$4(m2), n2 = r$4(E2), o2 = t3 && n2 ? t3 / n2 : 0, s2 = Math.abs(Y) > Math.abs(j2) ? Y : j2, i2 = { srcEvent: f2, isPanRecognized: w2, isSwipeRecognized: y2, firstTouch: p2, previousTouch: E2, currentTouch: m2, deltaX: x2, deltaY: P, offsetX: D2, offsetY: X, velocityX: Y, velocityY: j2, velocity: s2, angle: k2, axis: v2, scale: o2, center: h2 };
    for (const t4 of O2.get(e3) || []) t4(i2);
  }
  function q2(e3) {
    const t3 = e3.target, n2 = e3.composedPath()[0], o2 = g2.ignore.join(","), s2 = (e4) => e4 && e4 instanceof HTMLElement && (e4.matches(o2) || e4.closest(o2));
    if (s2(t3) || s2(n2)) return false;
  }
  function C(e3) {
    const t3 = Date.now();
    if (R2 = R2.filter((e4) => !e4.ts || e4.ts > t3 - 100), e3 && R2.push(e3), Y = 0, j2 = 0, R2.length > 3) {
      const e4 = R2[0], t4 = R2[R2.length - 1];
      if (e4 && t4) {
        const n2 = t4.x - e4.x, o2 = t4.y - e4.y, s2 = e4.ts && t4.ts ? t4.ts - e4.ts : 0;
        s2 > 0 && (Y = Math.abs(n2) > 3 ? n2 / (s2 / 30) : 0, j2 = Math.abs(o2) > 3 ? o2 / (s2 / 30) : 0);
      }
    }
  }
  function H2(e3) {
    if (false === q2(e3)) return;
    if ("undefined" != typeof MouseEvent && e3 instanceof MouseEvent) {
      if (l$6) return;
    } else l$6 = true;
    if ("undefined" != typeof MouseEvent && e3 instanceof MouseEvent) {
      if (!e3.buttons || 0 !== e3.button) return;
      c$3(e3);
    }
    e3 instanceof MouseEvent && (window.addEventListener("mousemove", I2), window.addEventListener("mouseup", B2)), window.addEventListener("blur", F2), f2 = e3, m2 = o$7(e3), p2 = [...m2], E2 = [], L = m2.length, h2 = i$5(m2), 1 === L && (w2 = false, y2 = false, T = false), L && C(i$5(m2));
    const t3 = Date.now(), n2 = t3 - (M2 || t3);
    b2 = n2 > 0 && n2 <= 250 && 1 === L, M2 = t3, clearTimeout(z2), S2("start");
  }
  function I2(e3) {
    var t3;
    if (!p2.length) return;
    if (e3.defaultPrevented) return;
    if (false === q2(e3)) return;
    f2 = e3, E2 = [...m2], m2 = n$5(e3);
    const o2 = i$5(E2), s2 = i$5(n$5(e3));
    if (C(s2), L = m2.length, h2 = s2, E2.length === m2.length ? (x2 = s2.x - o2.x, P = s2.y - o2.y) : (x2 = 0, P = 0), p2.length) {
      const e4 = i$5(p2);
      D2 = s2.x - e4.x, X = s2.y - e4.y;
    }
    if (m2.length > 1) {
      const e4 = r$4(m2), t4 = r$4(E2);
      Math.abs(e4 - t4) >= 0.1 && (T = true, S2("pinch"));
    }
    w2 || (w2 = Math.abs(D2) > g2.panThreshold || Math.abs(X) > g2.panThreshold, w2 && (d$1 = false, clearTimeout(A2), A2 = 0, k2 = Math.abs(180 * Math.atan2(X, D2) / Math.PI), v2 = k2 > 45 && k2 < 135 ? "y" : "x", p2 = [...m2], E2 = [...m2], D2 = 0, X = 0, x2 = 0, P = 0, null === (t3 = window.getSelection()) || void 0 === t3 || t3.removeAllRanges(), S2("panstart"))), w2 && (x2 || P) && S2("pan"), S2("move");
  }
  function B2(e3) {
    if (f2 = e3, !p2.length) return;
    const t3 = o$7(e3), n2 = s$8(e3);
    if (L = t3.length, h2 = i$5(n2), n2.length && C(i$5(n2)), E2 = [...m2], m2 = [...t3], p2 = [...t3], L > 0) S2("end"), w2 = false, y2 = false, R2 = [];
    else {
      const e4 = g2.swipeThreshold;
      (Math.abs(Y) > e4 || Math.abs(j2) > e4) && (y2 = true), w2 && S2("panend"), y2 && S2("swipe"), w2 || y2 || T || (S2("tap"), b2 ? S2("doubleTap") : z2 = setTimeout(function() {
        S2("singleTap");
      }, 250)), S2("end"), G();
    }
  }
  function F2() {
    clearTimeout(z2), G(), w2 && S2("panend"), S2("end");
  }
  function G() {
    l$6 = false, w2 = false, y2 = false, b2 = false, L = 0, R2 = [], m2 = [], E2 = [], p2 = [], x2 = 0, P = 0, D2 = 0, X = 0, Y = 0, j2 = 0, k2 = 0, v2 = void 0, window.removeEventListener("mousemove", I2), window.removeEventListener("mouseup", B2), window.removeEventListener("blur", F2), d$1 || A2 || (A2 = setTimeout(() => {
      d$1 = true, A2 = 0;
    }, 100));
  }
  function J(e3) {
    const t3 = e3.target;
    l$6 = false, t3 && !e3.defaultPrevented && (d$1 || (c$3(e3), e3.stopPropagation()));
  }
  const K = { init: function() {
    return e2 && (e2.addEventListener("click", J, a$4), e2.addEventListener("mousedown", H2, a$4), e2.addEventListener("touchstart", H2, a$4), e2.addEventListener("touchmove", I2, a$4), e2.addEventListener("touchend", B2), e2.addEventListener("touchcancel", B2)), K;
  }, on: function(e3, t3) {
    return function(e4, t4) {
      O2.set(e4, [...O2.get(e4) || [], t4]);
    }(e3, t3), K;
  }, off: function(e3, t3) {
    return O2.has(e3) && O2.set(e3, O2.get(e3).filter((e4) => e4 !== t3)), K;
  }, isPointerDown: () => L > 0, destroy: function() {
    clearTimeout(z2), clearTimeout(A2), A2 = 0, e2 && (e2.removeEventListener("click", J, a$4), e2.removeEventListener("mousedown", H2, a$4), e2.removeEventListener("touchstart", H2, a$4), e2.removeEventListener("touchmove", I2, a$4), e2.removeEventListener("touchend", B2), e2.removeEventListener("touchcancel", B2)), e2 = null, G();
  } };
  return K;
};
f$1.isClickAllowed = () => d$1;
/*! License details at fancyapps.com/license */
const e$3 = { IMAGE_ERROR: "This image couldn't be loaded. <br /> Please try again later.", MOVE_UP: "Move up", MOVE_DOWN: "Move down", MOVE_LEFT: "Move left", MOVE_RIGHT: "Move right", ZOOM_IN: "Zoom in", ZOOM_OUT: "Zoom out", TOGGLE_FULL: "Toggle zoom level", TOGGLE_1TO1: "Toggle zoom level", ITERATE_ZOOM: "Toggle zoom level", ROTATE_CCW: "Rotate counterclockwise", ROTATE_CW: "Rotate clockwise", FLIP_X: "Flip horizontally", FLIP_Y: "Flip vertically", RESET: "Reset", TOGGLE_FS: "Toggle fullscreen" };
/*! License details at fancyapps.com/license */
const s$7 = (s2, t2 = "") => {
  s2 && s2.classList && t2.split(" ").forEach((t3) => {
    t3 && s2.classList.add(t3);
  });
};
/*! License details at fancyapps.com/license */
const s$6 = (s2, t2 = "") => {
  s2 && s2.classList && t2.split(" ").forEach((t3) => {
    t3 && s2.classList.remove(t3);
  });
};
/*! License details at fancyapps.com/license */
const s$5 = (s2, t2 = "", c2) => {
  s2 && s2.classList && t2.split(" ").forEach((t3) => {
    t3 && s2.classList.toggle(t3, c2 || false);
  });
};
/*! License details at fancyapps.com/license */
const h$2 = (e2) => {
  e2.cancelable && e2.preventDefault();
}, m$1 = (e2, t2 = 1e4) => (e2 = parseFloat(e2 + "") || 0, Math.round((e2 + Number.EPSILON) * t2) / t2), p = (e2) => e2 instanceof HTMLImageElement;
var v$1, b$1;
!function(e2) {
  e2.Reset = "reset", e2.Zoom = "zoom", e2.ZoomIn = "zoomIn", e2.ZoomOut = "zoomOut", e2.ZoomTo = "zoomTo", e2.ToggleCover = "toggleCover", e2.ToggleFull = "toggleFull", e2.ToggleMax = "toggleMax", e2.IterateZoom = "iterateZoom", e2.Pan = "pan", e2.Swipe = "swipe", e2.Move = "move", e2.MoveLeft = "moveLeft", e2.MoveRight = "moveRight", e2.MoveUp = "moveUp", e2.MoveDown = "moveDown", e2.RotateCCW = "rotateCCW", e2.RotateCW = "rotateCW", e2.FlipX = "flipX", e2.FlipY = "flipY", e2.ToggleFS = "toggleFS";
}(v$1 || (v$1 = {})), function(e2) {
  e2.Cover = "cover", e2.Full = "full", e2.Max = "max";
}(b$1 || (b$1 = {}));
const y$1 = { x: 0, y: 0, scale: 1, angle: 0, flipX: 1, flipY: 1 }, x = { bounds: true, classes: { container: "f-panzoom", wrapper: "f-panzoom__wrapper", content: "f-panzoom__content", viewport: "f-panzoom__viewport" }, clickAction: v$1.ToggleFull, dblClickAction: false, gestures: {}, height: "auto", l10n: e$3, maxScale: 4, minScale: 1, mouseMoveFactor: 1, panMode: "drag", protected: false, singleClickAction: false, spinnerTpl: '<div class="f-spinner"></div>', wheelAction: v$1.Zoom, width: "auto" };
let w$1, M$1 = 0, j = 0, E$1 = 0;
const S = (c2, b2 = {}, S2 = {}) => {
  let k2, O2, T, A2, C, F2, Z, L, P = 0, X = Object.assign(Object.assign({}, x), b2), Y = {}, R2 = Object.assign({}, y$1), z2 = Object.assign({}, y$1);
  const D2 = [];
  function I2(e2) {
    let t2 = X[e2];
    return t2 && "function" == typeof t2 ? t2(je) : t2;
  }
  function W() {
    return c2 && c2.parentElement && k2 && 3 === P;
  }
  const $ = /* @__PURE__ */ new Map();
  function q2(e2, ...t2) {
    const n2 = [...$.get(e2) || []];
    X.on && n2.push(X.on[e2]);
    for (const e3 of n2) e3 && e3 instanceof Function && e3(je, ...t2);
    "*" !== e2 && q2("*", e2, ...t2);
  }
  function H2(e2) {
    if (!W()) return;
    const t2 = e2.target;
    if (n$7(t2)) return;
    const o2 = Date.now(), s2 = [-e2.deltaX || 0, -e2.deltaY || 0, -e2.detail || 0].reduce(function(e3, t3) {
      return Math.abs(t3) > Math.abs(e3) ? t3 : e3;
    }), a2 = t$6(-1, s2, 1);
    q2("wheel", e2, a2);
    const r2 = I2("wheelAction");
    if (!r2) return;
    if (e2.defaultPrevented) return;
    const l2 = z2.scale;
    let c3 = l2 * (a2 > 0 ? 1.5 : 0.5);
    if (r2 === v$1.Zoom) {
      const t3 = Math.abs(e2.deltaY) < 100 && Math.abs(e2.deltaX) < 100;
      if (o2 - j < (t3 ? 200 : 45)) return void h$2(e2);
      j = o2;
      const n2 = ne(), s3 = se();
      if (m$1(c3) < m$1(n2) && m$1(l2) <= m$1(n2) ? (E$1 += Math.abs(a2), c3 = n2) : m$1(c3) > m$1(s3) && m$1(l2) >= m$1(s3) ? (E$1 += Math.abs(a2), c3 = s3) : (E$1 = 0, c3 = t$6(n2, c3, s3)), E$1 > 7) return;
    }
    switch (h$2(e2), r2) {
      case v$1.Pan:
        ce(r2, { srcEvent: e2, deltaX: 2 * -e2.deltaX, deltaY: 2 * -e2.deltaY });
        break;
      case v$1.Zoom:
        ce(v$1.ZoomTo, { srcEvent: e2, scale: c3, center: { x: e2.clientX, y: e2.clientY } });
        break;
      default:
        ce(r2, { srcEvent: e2 });
    }
  }
  function _2(e2) {
    var n2, o2;
    const i2 = e2.composedPath()[0];
    if (!f$1.isClickAllowed()) return;
    if (!n$8(i2) || e2.defaultPrevented) return;
    if (!(null == c2 ? void 0 : c2.contains(i2))) return;
    if (i2.hasAttribute("disabled") || i2.hasAttribute("aria-disabled") || i2.hasAttribute("data-carousel-go-prev") || i2.hasAttribute("data-carousel-go-next")) return;
    const s2 = i2.closest("[data-panzoom-action]"), a2 = null === (n2 = null == s2 ? void 0 : s2.dataset) || void 0 === n2 ? void 0 : n2.panzoomAction, r2 = (null === (o2 = null == s2 ? void 0 : s2.dataset) || void 0 === o2 ? void 0 : o2.panzoomValue) || "";
    if (a2) {
      switch (h$2(e2), a2) {
        case v$1.ZoomTo:
        case v$1.ZoomIn:
        case v$1.ZoomOut:
          ce(a2, { scale: parseFloat(r2 || "") || void 0 });
          break;
        case v$1.MoveLeft:
        case v$1.MoveRight:
          ce(a2, { deltaX: parseFloat(r2 || "") || void 0 });
          break;
        case v$1.MoveUp:
        case v$1.MoveDown:
          ce(a2, { deltaY: parseFloat(r2 || "") || void 0 });
          break;
        case v$1.ToggleFS:
          we();
          break;
        default:
          ce(a2);
      }
      return;
    }
    if (!(null == k2 ? void 0 : k2.contains(i2))) return;
    const u2 = { srcEvent: e2 };
    if (ce(I2("clickAction"), u2), I2("dblClickAction")) {
      const e3 = Date.now(), t2 = e3 - (M$1 || e3);
      M$1 = e3, t2 > 0 && t2 <= 250 ? (w$1 && (clearTimeout(w$1), w$1 = void 0), ce(I2("dblClickAction"), u2)) : w$1 = setTimeout(() => {
        ce(I2("singleClickAction"), u2);
      }, 250);
    }
  }
  function B2(e2) {
    if (L = e2, !W() || !Q()) return;
    if (R2.scale <= 1 || z2.scale <= 1) return;
    if (((null == k2 ? void 0 : k2.dataset.animationName) || "").indexOf("zoom") > -1) return;
    const t2 = ee(z2.scale);
    if (!t2) return;
    const { x: n2, y: o2 } = t2;
    ce(v$1.Pan, { deltaX: n2 - z2.x, deltaY: o2 - z2.y });
  }
  function N2() {
    var e2;
    c2 && (s$6(c2, "is-loading"), null === (e2 = c2.querySelector(".f-spinner")) || void 0 === e2 || e2.remove());
  }
  function V() {
    if (!c2 || !O2) return;
    if (N2(), p(O2) && (!O2.complete || !O2.naturalWidth)) return P = 2, null == k2 || k2.classList.add("has-error"), void q2("error");
    q2("loaded");
    const { width: e2, height: t2 } = J();
    p(O2) && (O2.setAttribute("width", e2 + ""), O2.setAttribute("height", t2 + "")), k2 && (s$6(k2, "has-error"), p(O2) && (k2.setAttribute("width", e2 + ""), k2.setAttribute("height", t2 + ""), k2.style.aspectRatio = `${e2 / t2 || ""}`)), F2 = c$4().on("start", (e3, t3) => {
      void 0 !== t3.angle && (t3.angle = 90 * Math.round(t3.angle / 90)), void 0 !== t3.flipX && (t3.flipX = t3.flipX > 0 ? 1 : -1), void 0 !== t3.flipY && (t3.flipY = t3.flipY > 0 ? 1 : -1), z2 = Object.assign(Object.assign({}, y$1), t3), le(), q2("animationStart");
    }).on("pause", (e3) => {
      z2 = Object.assign(Object.assign({}, y$1), e3);
    }).on("step", (e3) => {
      if (!W()) return void (null == F2 || F2.end());
      if (R2 = Object.assign(Object.assign({}, y$1), e3), Q() || !I2("bounds") || be() || z2.scale > R2.scale || z2.scale < oe()) return void ue();
      const t3 = ae(z2.scale);
      let n3 = false, o2 = false, s2 = false, a2 = false;
      R2.x < t3.x[0] && (n3 = true), R2.x > t3.x[1] && (o2 = true), R2.y < t3.y[0] && (a2 = true), R2.y > t3.y[1] && (s2 = true);
      let r2 = false, l2 = false, c3 = false, u2 = false;
      z2.x < t3.x[0] && (r2 = true), z2.x > t3.x[1] && (l2 = true), z2.y < t3.y[0] && (u2 = true), z2.y > t3.y[1] && (c3 = true);
      let d2 = false;
      (o2 && l2 || n3 && r2) && (z2.x = t$6(t3.x[0], z2.x, t3.x[1]), d2 = true), (s2 && c3 || a2 && u2) && (z2.y = t$6(t3.y[0], z2.y, t3.y[1]), d2 = true), d2 && F2 && F2.spring({ tension: 94, friction: 17, maxSpeed: 555 * z2.scale, restDelta: 0.1, restSpeed: 0.1, velocity: F2.getCurrentVelocities() }).from(R2).to(z2).start(), ue();
    }).on("end", () => {
      (null == C ? void 0 : C.isPointerDown()) || re(), (null == F2 ? void 0 : F2.isRunning()) || (le(), q2("animationEnd"));
    }), function() {
      const e3 = I2("gestures");
      if (!e3) return;
      if (!A2 || !O2) return;
      let t3 = false;
      C = f$1(A2, e3).on("start", (e4) => {
        if (!I2("gestures")) return;
        if (!F2) return;
        if (!W() || Q()) return;
        const n3 = e4.srcEvent;
        (R2.scale > 1 || e4.currentTouch.length > 1) && (null == n3 || n3.stopPropagation(), F2.pause(), t3 = true), 1 === e4.currentTouch.length && q2("touchStart");
      }).on("move", (e4) => {
        var n3;
        t3 && (1 !== z2.scale || e4.currentTouch.length > 1) && (h$2(e4.srcEvent), null === (n3 = e4.srcEvent) || void 0 === n3 || n3.stopPropagation());
      }).on("pan", (e4) => {
        if (!t3) return;
        const n3 = e4.srcEvent;
        (1 !== z2.scale || e4.currentTouch.length > 1) && (h$2(n3), ce(v$1.Pan, e4));
      }).on("swipe", (e4) => {
        t3 && z2.scale > 1 && ce(v$1.Swipe, e4);
      }).on("tap", (e4) => {
        q2("click", e4);
      }).on("singleTap", (e4) => {
        q2("singleClick", e4);
      }).on("doubleTap", (e4) => {
        q2("dblClick", e4);
      }).on("pinch", (e4) => {
        t3 && (e4.scale > oe() ? ce(v$1.ZoomIn, e4) : e4.scale < oe() ? ce(v$1.ZoomOut, e4) : ce(v$1.Pan, e4));
      }).on("end", (e4) => {
        t3 && (e4.currentTouch.length ? (e4.srcEvent.stopPropagation(), h$2(e4.srcEvent), null == F2 || F2.end()) : (t3 = false, le(), re(), q2("touchEnd")));
      }).init();
    }(), A2 && (A2.addEventListener("wheel", H2, { passive: false }), D2.push(() => {
      null == A2 || A2.removeEventListener("wheel", H2, { passive: false });
    })), null == c2 || c2.addEventListener("click", _2), null === document || void 0 === document || document.addEventListener("mousemove", B2), D2.push(() => {
      null == c2 || c2.removeEventListener("click", _2), null === document || void 0 === document || document.removeEventListener("mousemove", B2);
    });
    const n2 = U();
    R2 = Object.assign({}, n2), z2 = Object.assign({}, n2), P = 3, ue(), le(), q2("ready"), requestAnimationFrame(() => {
      3 === P && (N2(), A2 && (A2.style.visibility = ""));
    });
  }
  function U() {
    const e2 = Object.assign({}, I2("startPos") || {});
    let t2 = e2.scale, n2 = 1;
    n2 = "string" == typeof t2 ? te(t2) : "number" == typeof t2 ? t2 : oe();
    const o2 = Object.assign(Object.assign(Object.assign({}, y$1), e2), { scale: n2 }), i2 = Q() ? ee(n2) : void 0;
    if (i2) {
      const { x: e3, y: t3 } = i2;
      o2.x = e3, o2.y = t3;
    }
    return o2;
  }
  function G() {
    const e2 = { top: 0, left: 0, width: 0, height: 0 };
    if (k2) {
      const t2 = k2.getBoundingClientRect();
      z2.angle % 180 == 90 ? (e2.top = t2.top + 0.5 * t2.height - 0.5 * t2.width, e2.left = t2.left + 0.5 * t2.width - 0.5 * t2.height, e2.width = t2.height, e2.height = t2.width) : (e2.top = t2.top, e2.left = t2.left, e2.width = t2.width, e2.height = t2.height);
    }
    return e2;
  }
  function J() {
    let t2 = I2("width"), n2 = I2("height");
    if (O2 && "auto" === t2) {
      const e2 = O2.getAttribute("width");
      t2 = e2 ? parseFloat(e2 + "") : void 0 !== O2.dataset.width ? parseFloat(O2.dataset.width + "") : p(A2) ? A2.naturalWidth : p(O2) ? O2.naturalWidth : (null == k2 ? void 0 : k2.getBoundingClientRect().width) || 0;
    } else t2 = t$7(t2) ? parseFloat(t2) : t2;
    if (O2 && "auto" === n2) {
      const e2 = O2.getAttribute("height");
      n2 = e2 ? parseFloat(e2 + "") : void 0 !== O2.dataset.height ? parseFloat(O2.dataset.height + "") : p(A2) ? A2.naturalHeight : p(O2) ? O2.naturalHeight : (null == k2 ? void 0 : k2.getBoundingClientRect().height) || 0;
    } else n2 = t$7(n2) ? parseFloat(n2) : n2;
    return { width: t2, height: n2 };
  }
  function K() {
    const e2 = G();
    return { width: e2.width, height: e2.height };
  }
  function Q() {
    return "mousemove" === I2("panMode") && matchMedia("(hover: hover)").matches;
  }
  function ee(e2) {
    const t2 = L || I2("event"), n2 = null == k2 ? void 0 : k2.getBoundingClientRect();
    if (!t2 || !n2 || e2 <= 1) return { x: 0, y: 0 };
    const o2 = (t2.clientX || 0) - n2.left, s2 = (t2.clientY || 0) - n2.top, { width: a2, height: r2 } = K(), l2 = ae(e2);
    if (e2 > 1) {
      const t3 = I2("mouseMoveFactor");
      t3 > 1 && (e2 *= t3);
    }
    let c3 = a2 * e2, u2 = r2 * e2, d2 = 0.5 * (c3 - a2) - o2 / a2 * 100 / 100 * (c3 - a2), f2 = 0.5 * (u2 - r2) - s2 / r2 * 100 / 100 * (u2 - r2);
    return d2 = t$6(l2.x[0], d2, l2.x[1]), f2 = t$6(l2.y[0], f2, l2.y[1]), { x: d2, y: f2 };
  }
  function te(e2) {
    if (!e2) return z2.scale;
    if (!c2) return 1;
    const t2 = c2.getBoundingClientRect(), n2 = G(), { width: o2, height: s2 } = J(), a2 = (e3) => {
      if ("number" == typeof e3) return e3;
      switch (e3) {
        case "min":
        case "base":
          return 1;
        case "cover":
          return Math.max(t2.height / n2.height, t2.width / n2.width) || 1;
        case "full":
        case "max": {
          const e4 = z2.angle % 180 == 90 ? s2 : o2;
          return e4 && n2.width ? e4 / n2.width : 1;
        }
      }
    }, r2 = I2("minScale"), l2 = I2("maxScale"), u2 = Math.min(a2("full"), a2(r2)), d2 = "number" == typeof l2 ? a2("full") * l2 : Math.min(a2("full"), a2(l2));
    switch (e2) {
      case "min":
        return u2;
      case "base":
        return t$6(u2, 1, d2);
      case "cover":
        return a2("cover");
      case "full":
        return Math.min(d2, a2("full"));
      case "max":
        return d2;
    }
  }
  function ne() {
    return te("min");
  }
  function oe() {
    return te("base");
  }
  function ie() {
    return te("full");
  }
  function se() {
    return te("max");
  }
  function ae(e2) {
    const t2 = { x: [0, 0], y: [0, 0] }, n2 = null == c2 ? void 0 : c2.getBoundingClientRect();
    if (!n2) return t2;
    const o2 = G(), i2 = n2.width, s2 = n2.height;
    let a2 = o2.width, r2 = o2.height, l2 = e2 = void 0 === e2 ? z2.scale : e2, u2 = e2;
    if (Q() && e2 > 1) {
      const t3 = I2("mouseMoveFactor");
      t3 > 1 && (a2 * e2 > i2 + 0.01 && (l2 *= t3), r2 * e2 > s2 + 0.01 && (u2 *= t3));
    }
    return a2 *= l2, r2 *= u2, e2 > 1 && (a2 > i2 && (t2.x[0] = 0.5 * (i2 - a2), t2.x[1] = 0.5 * (a2 - i2)), t2.x[0] -= 0.5 * (o2.left - n2.left), t2.x[1] -= 0.5 * (o2.left - n2.left), t2.x[0] -= 0.5 * (o2.left + o2.width - n2.right), t2.x[1] -= 0.5 * (o2.left + o2.width - n2.right), r2 > s2 && (t2.y[0] = 0.5 * (s2 - r2), t2.y[1] = 0.5 * (r2 - s2)), t2.y[0] -= 0.5 * (o2.top - n2.top), t2.y[1] -= 0.5 * (o2.top - n2.top), t2.y[0] -= 0.5 * (o2.top + o2.height - n2.bottom), t2.y[1] -= 0.5 * (o2.top + o2.height - n2.bottom)), t2;
  }
  function re() {
    if (!W()) return;
    if (!I2("bounds")) return;
    if (!F2) return;
    const e2 = ne(), t2 = se(), n2 = t$6(e2, z2.scale, t2);
    if (z2.scale < e2 - 0.01 || z2.scale > t2 + 0.01) return void ce(v$1.ZoomTo, { scale: n2 });
    if (F2.isRunning()) return;
    if (be()) return;
    const o2 = ae(n2);
    z2.x < o2.x[0] || z2.x > o2.x[1] || z2.y < o2.y[0] || z2.y > o2.y[1] ? (z2.x = t$6(o2.x[0], z2.x, o2.x[1]), z2.y = t$6(o2.y[0], z2.y, o2.y[1]), F2.spring({ tension: 170, friction: 17, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0, velocity: F2.getCurrentVelocities() }), F2.from(R2).to(z2).start()) : ue();
  }
  function le(e2) {
    var t2;
    if (!W()) return;
    const n2 = ve(), o2 = be(), i2 = ye(), s2 = xe(), a2 = fe(), r2 = ge();
    s$5(k2, "is-fullsize", s2), s$5(k2, "is-expanded", i2), s$5(k2, "is-dragging", o2), s$5(k2, "can-drag", n2), s$5(k2, "will-zoom-in", a2), s$5(k2, "will-zoom-out", r2);
    const l2 = me(), u2 = pe(), d2 = he(), g2 = !W();
    for (const n3 of (null === (t2 = e2 || c2) || void 0 === t2 ? void 0 : t2.querySelectorAll("[data-panzoom-action]")) || []) {
      const e3 = n3.dataset.panzoomAction;
      let t3 = false;
      if (g2) t3 = true;
      else switch (e3) {
        case v$1.ZoomIn:
          l2 || (t3 = true);
          break;
        case v$1.ZoomOut:
          d2 || (t3 = true);
          break;
        case v$1.ToggleFull: {
          u2 || d2 || (t3 = true);
          const e4 = n3.querySelector("g");
          e4 && (e4.style.display = s2 && !t3 ? "none" : "");
          break;
        }
        case v$1.IterateZoom: {
          l2 || d2 || (t3 = true);
          const e4 = n3.querySelector("g");
          e4 && (e4.style.display = l2 || t3 ? "" : "none");
          break;
        }
        case v$1.ToggleCover:
        case v$1.ToggleMax:
          l2 || d2 || (t3 = true);
      }
      t3 ? (n3.setAttribute("aria-disabled", ""), n3.setAttribute("tabindex", "-1")) : (n3.removeAttribute("aria-disabled"), n3.removeAttribute("tabindex"));
    }
  }
  function ce(e2, t2) {
    var n2;
    if (!(e2 && c2 && O2 && F2 && W())) return;
    if (e2 === v$1.Swipe && Math.abs(F2.getCurrentVelocities().scale) > 0.01) return;
    const o2 = Object.assign({}, z2);
    let s2 = Object.assign({}, z2), l2 = ae(Q() ? o2.scale : R2.scale);
    const u2 = F2.getCurrentVelocities(), d2 = G(), f2 = ((null === (n2 = (t2 = t2 || {}).currentTouch) || void 0 === n2 ? void 0 : n2.length) || 0) > 1, h2 = t2.velocityX || 0, m2 = t2.velocityY || 0;
    let p2 = t2.center;
    t2.srcEvent && (p2 = i$5(s$8(t2.srcEvent)));
    let b3 = t2.deltaX || 0, x2 = t2.deltaY || 0;
    switch (e2) {
      case v$1.MoveRight:
        b3 = t2.deltaX || 100;
        break;
      case v$1.MoveLeft:
        b3 = t2.deltaX || -100;
        break;
      case v$1.MoveUp:
        x2 = t2.deltaY || -100;
        break;
      case v$1.MoveDown:
        x2 = t2.deltaY || 100;
    }
    let w2 = [];
    if ("number" == typeof e2) s2.scale = e2;
    else switch (e2) {
      case v$1.Reset:
        s2 = Object.assign({}, y$1), s2.scale = oe();
        break;
      case v$1.ZoomTo:
      case v$1.ZoomIn:
      case v$1.ZoomOut:
      case v$1.ToggleCover:
      case v$1.ToggleFull:
      case v$1.ToggleMax:
      case v$1.IterateZoom:
      case v$1.Zoom:
        s2.scale = de(e2, t2);
        break;
      case v$1.Pan:
      case v$1.Move:
      case v$1.MoveLeft:
      case v$1.MoveRight:
      case v$1.MoveUp:
      case v$1.MoveDown:
        if (be()) {
          let e3 = 1, t3 = 1;
          s2.x <= l2.x[0] && h2 <= 0 && (e3 = Math.max(0.01, 1 - Math.abs(1 / d2.width * Math.abs(s2.x - l2.x[0]))), e3 *= 0.2), s2.x >= l2.x[1] && h2 >= 0 && (e3 = Math.max(0.01, 1 - Math.abs(1 / d2.width * Math.abs(s2.x - l2.x[1]))), e3 *= 0.2), s2.y <= l2.y[0] && m2 <= 0 && (t3 = Math.max(0.01, 1 - Math.abs(1 / d2.height * Math.abs(s2.y - l2.y[0]))), t3 *= 0.2), s2.y >= l2.y[1] && m2 >= 0 && (t3 = Math.max(0.01, 1 - Math.abs(1 / d2.height * Math.abs(s2.y - l2.y[1]))), t3 *= 0.2), s2.x += b3 * e3, s2.y += x2 * t3;
        } else s2.x = t$6(l2.x[0], s2.x + b3, l2.x[1]), s2.y = t$6(l2.y[0], s2.y + x2, l2.y[1]);
        break;
      case v$1.Swipe:
        const n3 = (e3 = 0) => Math.sign(e3) * Math.pow(Math.abs(e3), 1.5);
        s2.x += t$6(-1e3, n3(h2), 1e3), s2.y += t$6(-1e3, n3(m2), 1e3), m2 && !h2 && (s2.x = t$6(l2.x[0], s2.x, l2.x[1])), !m2 && h2 && (s2.y = t$6(l2.y[0], s2.y, l2.y[1])), u2.x = h2, u2.y = m2;
        break;
      case v$1.RotateCW:
        s2.angle += 90;
        break;
      case v$1.RotateCCW:
        s2.angle -= 90;
        break;
      case v$1.FlipX:
        s2.flipX *= -1;
        break;
      case v$1.FlipY:
        s2.flipY *= -1;
    }
    if (void 0 !== R2.angle && Math.abs(R2.angle) >= 360 && (s2.angle -= 360 * Math.floor(R2.angle / 360), R2.angle -= 360 * Math.floor(R2.angle / 360)), w2.length) {
      const e3 = w2.findIndex((e4) => e4 > s2.scale + 1e-4);
      s2.scale = w2[e3] || w2[0];
    }
    if (f2 && (s2.scale = t$6(ne() * (f2 ? 0.8 : 1), s2.scale, se() * (f2 ? 1.6 : 1))), Q()) {
      const e3 = ee(s2.scale);
      if (e3) {
        const { x: t3, y: n3 } = e3;
        s2.x = t3, s2.y = n3;
      }
    } else if (Math.abs(s2.scale - o2.scale) > 1e-4) {
      let e3 = 0, t3 = 0;
      if (p2) e3 = p2.x, t3 = p2.y;
      else {
        const n4 = c2.getBoundingClientRect();
        e3 = n4.x + 0.5 * n4.width, t3 = n4.y + 0.5 * n4.height;
      }
      let n3 = e3 - d2.left, a2 = t3 - d2.top;
      n3 -= 0.5 * d2.width, a2 -= 0.5 * d2.height;
      const r2 = (n3 - o2.x) / o2.scale, u3 = (a2 - o2.y) / o2.scale;
      s2.x = n3 - r2 * s2.scale, s2.y = a2 - u3 * s2.scale, !f2 && I2("bounds") && (l2 = ae(s2.scale), s2.x = t$6(l2.x[0], s2.x, l2.x[1]), s2.y = t$6(l2.y[0], s2.y, l2.y[1]));
    }
    if (e2 === v$1.Swipe) {
      let e3 = 94, t3 = 17, n3 = 500 * s2.scale, o3 = u2;
      F2.spring({ tension: e3, friction: t3, maxSpeed: n3, restDelta: 0.1, restSpeed: 0.1, velocity: o3 });
    } else e2 === v$1.Pan || f2 ? F2.spring({ tension: 900, friction: 17, restDelta: 0.01, restSpeed: 0.01, maxSpeed: 1 }) : F2.spring({ tension: 170, friction: 17, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0, velocity: u2 });
    if (0 === t2.velocity || n$6(R2, s2)) R2 = Object.assign({}, s2), z2 = Object.assign({}, s2), F2.end(), ue(), le();
    else {
      if (n$6(z2, s2)) return;
      F2.from(R2).to(s2).start();
    }
    q2("action", e2);
  }
  function ue() {
    if (!O2 || !k2 || !A2) return;
    const { width: e2, height: t2 } = J();
    Object.assign(k2.style, { maxWidth: `min(${e2}px, 100%)`, maxHeight: `min(${t2}px, 100%)` });
    const n2 = function() {
      const { width: e3, height: t3 } = J(), { width: n3, height: o3 } = K();
      if (!c2) return { x: 0, y: 0, width: 0, height: 0, scale: 0, flipX: 0, flipY: 0, angle: 0, fitWidth: n3, fitHeight: o3, fullWidth: e3, fullHeight: t3 };
      let { x: i3, y: s3, scale: a3, angle: r3, flipX: l3, flipY: u3 } = R2, d3 = 1 / ie(), f3 = e3, g2 = t3, h2 = R2.scale * d3, m2 = z2.scale * d3;
      const p2 = Math.max(n3, o3), v2 = Math.min(n3, o3);
      e3 > t3 ? (f3 = p2, g2 = v2) : (f3 = v2, g2 = p2);
      h2 = e3 > t3 ? p2 * a3 / e3 || 1 : p2 * a3 / t3 || 1;
      let b3 = f3 ? e3 * m2 : 0, y2 = g2 ? t3 * m2 : 0, x2 = f3 && g2 ? e3 * h2 / b3 : 0;
      return i3 = i3 + 0.5 * f3 - 0.5 * b3, s3 = s3 + 0.5 * g2 - 0.5 * y2, { x: i3, y: s3, width: b3, height: y2, scale: x2, flipX: l3, flipY: u3, angle: r3, fitWidth: n3, fitHeight: o3, fullWidth: e3, fullHeight: t3 };
    }(), { x: o2, y: i2, width: s2, height: a2, scale: r2, angle: l2, flipX: u2, flipY: d2 } = n2;
    let f2 = `translate(${m$1(o2)}px, ${m$1(i2)}px)`;
    f2 += 1 !== u2 || 1 !== d2 ? ` scaleX(${m$1(r2 * u2)}) scaleY(${m$1(r2 * d2)})` : ` scale(${m$1(r2)})`, 0 !== l2 && (f2 += ` rotate(${l2}deg)`), A2.style.width = `${m$1(s2)}px`, A2.style.height = `${m$1(a2)}px`, A2.style.transform = `${f2}`, q2("render");
  }
  function de(e2 = I2("clickAction"), t2 = {}) {
    let n2 = z2.scale, o2 = oe(), s2 = [];
    if ("number" == typeof e2) o2 = e2;
    else if (e2) {
      switch (e2) {
        case v$1.ZoomTo:
          o2 = t2.scale || 1;
          break;
        case v$1.ZoomIn:
          o2 = n2 * (t2.scale || 2);
          break;
        case v$1.ZoomOut:
          o2 = n2 * (t2.scale || 0.5);
          break;
        case v$1.ToggleCover:
          s2 = [oe(), te("cover")];
          break;
        case v$1.ToggleFull:
          s2 = [oe(), ie()];
          break;
        case v$1.ToggleMax:
          s2 = [oe(), se()];
          break;
        case v$1.IterateZoom:
          s2 = [oe(), ie(), se()];
          break;
        case v$1.Zoom:
          const e3 = ie();
          o2 = n2 >= e3 - 0.05 ? oe() : Math.min(e3, n2 * (t2.scale || 2));
      }
      if (s2.length) {
        const e3 = s2.findIndex((e4) => e4 > n2 + 1e-4);
        o2 = s2[e3] || oe();
      }
    }
    return e2 !== v$1.ZoomTo && (o2 = t$6(ne(), o2, se())), o2;
  }
  function fe() {
    return !!(W() && de() > z2.scale);
  }
  function ge() {
    return !!(W() && de() < z2.scale);
  }
  function he() {
    return !!(W() && z2.scale > ne());
  }
  function me() {
    return !!(W() && z2.scale < se());
  }
  function pe() {
    return !!(W() && z2.scale < ie());
  }
  function ve() {
    return !(!(W() && ye() && C) || Q());
  }
  function be() {
    return !(!W() || !(null == C ? void 0 : C.isPointerDown()) || Q());
  }
  function ye() {
    return !!(W() && z2.scale > oe());
  }
  function xe() {
    return !!(W() && z2.scale >= ie());
  }
  function we() {
    const e2 = "in-fullscreen", t2 = "with-panzoom-in-fullscreen";
    null == c2 || c2.classList.toggle(e2);
    const n2 = null == c2 ? void 0 : c2.classList.contains(e2);
    n2 ? (document.documentElement.classList.add(t2), document.addEventListener("keydown", Me, true)) : (document.documentElement.classList.remove(t2), document.removeEventListener("keydown", Me, true)), ue(), q2(n2 ? "enterFS" : "exitFS");
  }
  function Me(e2) {
    "Escape" !== e2.key || e2.defaultPrevented || we();
  }
  const je = { canDrag: ve, canZoomIn: me, canZoomOut: he, canZoomToFull: pe, destroy: function() {
    q2("destroy");
    for (const e2 of Object.values(Y)) null == e2 || e2.destroy(je);
    for (const e2 of D2) e2();
    return k2 && (k2.style.aspectRatio = "", k2.style.maxWidth = "", k2.style.maxHeight = ""), A2 && (A2.style.width = "", A2.style.height = "", A2.style.transform = ""), k2 = void 0, O2 = void 0, A2 = void 0, R2 = Object.assign({}, y$1), z2 = Object.assign({}, y$1), null == F2 || F2.destroy(), F2 = void 0, null == C || C.destroy(), C = void 0, P = 4, je;
  }, emit: q2, execute: ce, getBoundaries: ae, getContainer: function() {
    return c2;
  }, getContent: function() {
    return O2;
  }, getFullDim: J, getGestures: function() {
    return C;
  }, getMousemovePos: ee, getOptions: function() {
    return X;
  }, getPlugins: function() {
    return Y;
  }, getScale: te, getStartPosition: U, getState: function() {
    return P;
  }, getTransform: function(e2) {
    return true === e2 ? z2 : R2;
  }, getTween: function() {
    return F2;
  }, getViewport: function() {
    return A2;
  }, getWrapper: function() {
    return k2;
  }, init: function() {
    return P = 0, q2("init"), function() {
      for (const [e2, t2] of Object.entries(Object.assign(Object.assign({}, S2), X.plugins || {}))) if (e2 && !Y[e2] && t2 instanceof Function) {
        const n2 = t2();
        n2.init(je), Y[e2] = n2;
      }
      q2("initPlugins");
    }(), function() {
      var e2, t2, n2;
      const o2 = Object.assign(Object.assign({}, x.classes), I2("classes"));
      if (!c2) return;
      s$7(c2, o2.container);
      const i2 = null === (e2 = o2.content) || void 0 === e2 ? void 0 : e2.split(" ").shift();
      i2 && (O2 = c2.querySelector(`.${i2}`));
      if (!O2) return;
      O2.setAttribute("draggable", "false");
      const s2 = null === (t2 = o2.wrapper) || void 0 === t2 ? void 0 : t2.split(" ").shift();
      s2 && (k2 = c2.querySelector(`.${s2}`));
      k2 || (k2 = document.createElement("div"), s$7(k2, o2.wrapper), O2.insertAdjacentElement("beforebegin", k2), k2.insertAdjacentElement("afterbegin", O2));
      const a2 = null === (n2 = o2.viewport) || void 0 === n2 ? void 0 : n2.split(" ").shift();
      a2 && (A2 = c2.querySelector(`.${a2}`));
      A2 || (A2 = document.createElement("div"), s$7(A2, o2.viewport), A2.insertAdjacentElement("afterbegin", O2), k2.insertAdjacentElement("beforeend", A2));
      T = O2.cloneNode(true), T.removeAttribute("id"), k2.insertAdjacentElement("afterbegin", T), O2 instanceof HTMLPictureElement && (O2 = O2.querySelector("img"));
      T instanceof HTMLPictureElement && (T = T.querySelector("img"));
      A2 instanceof HTMLPictureElement && (A2 = A2.querySelector("img"));
      if (A2 && (A2.style.visibility = "hidden", I2("protected"))) {
        A2.addEventListener("contextmenu", (e4) => {
          h$2(e4);
        });
        const e3 = document.createElement("div");
        s$7(e3, "f-panzoom__protected"), A2.appendChild(e3);
      }
      q2("initLayout");
    }(), function() {
      if (c2 && k2 && !Z) {
        let e2 = null;
        Z = new ResizeObserver(() => {
          W() && (e2 = e2 || requestAnimationFrame(() => {
            W() && (le(), re(), q2("refresh")), e2 = null;
          }));
        }), Z.observe(k2), D2.push(() => {
          null == Z || Z.disconnect(), Z = void 0, e2 && (cancelAnimationFrame(e2), e2 = null);
        });
      }
    }(), function() {
      if (!c2 || !O2) return;
      if (!p(O2) || !p(T)) return void V();
      const e2 = () => {
        O2 && p(O2) && O2.decode().then(() => {
          V();
        }).catch(() => {
          V();
        });
      };
      if (P = 1, c2.classList.add("is-loading"), q2("loading"), T.src && T.complete) return void e2();
      (function() {
        if (!c2) return;
        if (null == c2 ? void 0 : c2.querySelector(".f-spinner")) return;
        const e3 = I2("spinnerTpl"), t2 = e$7(e3);
        t2 && (t2.classList.add("f-spinner"), c2.classList.add("is-loading"), null == k2 || k2.insertAdjacentElement("afterbegin", t2));
      })(), T.addEventListener("load", e2, false), T.addEventListener("error", e2, false), D2.push(() => {
        null == T || T.removeEventListener("load", e2, false), null == T || T.removeEventListener("error", e2, false);
      });
    }(), je;
  }, isDragging: be, isExpanded: ye, isFullsize: xe, isMousemoveMode: Q, localize: function(e2, t2 = []) {
    const n2 = I2("l10n") || {};
    e2 = String(e2).replace(/\{\{(\w+)\}\}/g, (e3, t3) => n2[t3] || e3);
    for (let n3 = 0; n3 < t2.length; n3++) e2 = e2.split(t2[n3][0]).join(t2[n3][1]);
    return e2 = e2.replace(/\{\{(.*?)\}\}/g, (e3, t3) => t3);
  }, off: function(e2, t2) {
    for (const n2 of e2 instanceof Array ? e2 : [e2]) $.has(n2) && $.set(n2, $.get(n2).filter((e3) => e3 !== t2));
    return je;
  }, on: function(e2, t2) {
    for (const n2 of e2 instanceof Array ? e2 : [e2]) $.set(n2, [...$.get(n2) || [], t2]);
    return je;
  }, toggleFS: we, updateControls: le, version: "6.1.11", willZoomIn: fe, willZoomOut: ge };
  return je;
};
S.l10n = { en_EN: e$3 }, S.getDefaults = () => x;
/*! License details at fancyapps.com/license */
const e$2 = (e2, o2) => {
  let t2 = [];
  return e2.childNodes.forEach((e3) => {
    e3.nodeType !== Node.ELEMENT_NODE || o2 && !e3.matches(o2) || t2.push(e3);
  }), t2;
};
/*! License details at fancyapps.com/license */
const r$3 = (t2, ...e2) => {
  const n2 = e2.length;
  for (let c2 = 0; c2 < n2; c2++) {
    const n3 = e2[c2] || {};
    Object.entries(n3).forEach(([e3, n4]) => {
      const c3 = Array.isArray(n4) ? [] : {};
      t2[e3] || Object.assign(t2, { [e3]: c3 }), t$5(n4) ? Object.assign(t2[e3], r$3(t2[e3], n4)) : Array.isArray(n4) ? Object.assign(t2, { [e3]: [...n4] }) : Object.assign(t2, { [e3]: n4 });
    });
  }
  return t2;
};
/*! License details at fancyapps.com/license */
const t$3 = function(t2 = 0, n2 = 0, r2 = 0, c2 = 0, m2 = 0, p2 = false) {
  const s2 = (t2 - n2) / (r2 - n2) * (m2 - c2) + c2;
  return p2 ? c2 < m2 ? t$6(c2, s2, m2) : t$6(m2, s2, c2) : s2;
};
/*! License details at fancyapps.com/license */
const o$6 = Object.assign(Object.assign({}, e$3), { ERROR: "Something went wrong. <br /> Please try again later.", NEXT: "Next page", PREV: "Previous page", GOTO: "Go to page #%d", DOWNLOAD: "Download", TOGGLE_FULLSCREEN: "Toggle full-screen mode", TOGGLE_EXPAND: "Toggle full-size mode", TOGGLE_THUMBS: "Toggle thumbnails", TOGGLE_AUTOPLAY: "Toggle slideshow" });
/*! License details at fancyapps.com/license */
const m = (t2) => {
  t2.cancelable && t2.preventDefault();
}, h$1 = { adaptiveHeight: false, center: true, classes: { container: "f-carousel", isEnabled: "is-enabled", isLTR: "is-ltr", isRTL: "is-rtl", isHorizontal: "is-horizontal", isVertical: "is-vertical", hasAdaptiveHeight: "has-adaptive-height", viewport: "f-carousel__viewport", slide: "f-carousel__slide", isSelected: "is-selected" }, dragFree: false, enabled: true, errorTpl: '<div class="f-html">{{ERROR}}</div>', fill: false, infinite: true, initialPage: 0, l10n: o$6, rtl: false, slides: [], slidesPerPage: "auto", spinnerTpl: '<div class="f-spinner"></div>', transition: "fade", tween: { clamp: true, mass: 1, tension: 160, friction: 25, restDelta: 1, restSpeed: 1, velocity: 0 }, vertical: false };
let b, y = 0;
const E = (g2, x2 = {}, M2 = {}) => {
  y++;
  let w2, S2, j2, A2, L, P = 0, T = Object.assign({}, h$1), O2 = Object.assign({}, h$1), R2 = {}, H2 = null, V = null, C = 0, D2 = 0, $ = 0, q2 = false, I2 = false, F2 = false, z2 = "height", k2 = 0, N2 = true, B2 = 0, _2 = 0, G = 0, X = 0, Y = "*", W = [], J = [];
  const K = /* @__PURE__ */ new Set();
  let Q = [], U = [], Z = 0, tt = 0, et = 0;
  function nt(t2, ...e2) {
    let n2 = O2[t2];
    return n2 && n2 instanceof Function ? n2(It, ...e2) : n2;
  }
  function it(t2, e2 = []) {
    const n2 = nt("l10n") || {};
    t2 = String(t2).replace(/\{\{(\w+)\}\}/g, (t3, e3) => n2[e3] || t3);
    for (let n3 = 0; n3 < e2.length; n3++) t2 = t2.split(e2[n3][0]).join(e2[n3][1]);
    return t2 = t2.replace(/\{\{(.*?)\}\}/g, (t3, e3) => e3);
  }
  const ot = /* @__PURE__ */ new Map();
  function st(t2, ...e2) {
    const n2 = [...ot.get(t2) || []];
    O2.on && n2.push(O2.on[t2]);
    for (const t3 of n2) t3 && t3 instanceof Function && t3(It, ...e2);
    "*" !== t2 && st("*", t2, ...e2);
  }
  function rt() {
    var e2, n2;
    const i2 = r$3({}, h$1, T);
    r$3(i2, h$1, T);
    let r2 = "";
    const l2 = T.breakpoints || {};
    if (l2) for (const [t2, e3] of Object.entries(l2)) window.matchMedia(t2).matches && (r2 += t2, r$3(i2, e3));
    if (void 0 === L || r2 !== L) {
      if (L = r2, 0 !== P) {
        let t2 = null === (n2 = null === (e2 = U[B2]) || void 0 === e2 ? void 0 : e2.slides[0]) || void 0 === n2 ? void 0 : n2.index;
        void 0 === t2 && (t2 = O2.initialSlide), i2.initialSlide = t2, i2.slides = [];
        for (const t3 of W) t3.isVirtual && i2.slides.push(t3);
      }
      Dt(), O2 = i2, false !== nt("enabled") && (P = 0, st("init"), function() {
        for (const [t2, e3] of Object.entries(Object.assign(Object.assign({}, M2), O2.plugins || {}))) if (t2 && !R2[t2] && e3 instanceof Function) {
          const n3 = e3();
          n3.init(It, E), R2[t2] = n3;
        }
        st("initPlugins");
      }(), function() {
        if (!H2) return;
        const e3 = nt("classes") || {};
        s$7(H2, e3.container);
        const n3 = nt("style");
        if (n3 && t$5(n3)) for (const [t2, e4] of Object.entries(n3)) H2.style.setProperty(t2, e4);
        V = H2.querySelector(`.${e3.viewport}`), V || (V = document.createElement("div"), s$7(V, e3.viewport), V.append(...e$2(H2, `.${e3.slide}`)), H2.insertAdjacentElement("afterbegin", V)), H2.carousel = It, st("initLayout");
      }(), function() {
        if (!V) return;
        const t2 = nt("classes") || {};
        W = [], [...e$2(V, `.${t2.slide}`)].forEach((t3) => {
          if (t3.parentElement) {
            const e3 = yt(Object.assign({ el: t3, isVirtual: false }, t3.dataset || {}));
            st("createSlide", e3), W.push(e3);
          }
        }), wt();
        for (const t3 of W) st("addSlide", t3);
        bt(nt("slides"));
        for (const t3 of W) {
          const e3 = t3.el;
          (null == e3 ? void 0 : e3.parentElement) === V && (s$7(e3, O2.classes.slide), s$7(e3, t3.class), Rt(t3), st("attachSlideEl", t3));
        }
        st("initSlides");
      }(), St(), P = 1, s$7(H2, (nt("classes") || {}).isEnabled || ""), Ct(), ut(), S2 = c$4().on("start", () => {
        w2 && w2.isPointerDown() || (dt(), Ct());
      }).on("step", (t2) => {
        const e3 = k2;
        k2 = t2.pos, k2 !== e3 && (N2 = false, Ct());
      }).on("end", (t2) => {
        (null == w2 ? void 0 : w2.isPointerDown()) || (k2 = t2.pos, S2 && !q2 && (k2 < G || k2 > X) ? S2.spring({ clamp: true, mass: 1, tension: 200, friction: 25, velocity: 0, restDelta: 1, restSpeed: 1 }).from({ pos: k2 }).to({ pos: t$6(G, k2, X) }).start() : N2 || (N2 = true, st("settle")));
      }), at(), function() {
        if (!H2 || !V) return;
        H2.addEventListener("click", Pt), document.addEventListener("mousemove", lt);
        const t2 = V.getBoundingClientRect();
        if (Z = t2.height, tt = t2.width, !j2) {
          let t3 = null;
          j2 = new ResizeObserver(() => {
            t3 || (t3 = requestAnimationFrame(() => {
              !function() {
                if (1 !== P || !V) return;
                const t4 = U.length, e3 = V.getBoundingClientRect(), n3 = e3.height, i3 = e3.width;
                t4 > 1 && (F2 && Math.abs(n3 - Z) < 0.5 || !F2 && Math.abs(i3 - tt) < 0.5) || (St(), at(), Z = n3, tt = i3, F2 && !Z || !F2 && !tt || H2 && V && (t4 === U.length && (null == w2 ? void 0 : w2.isPointerDown()) || (nt("dragFree") && (q2 || k2 > G && k2 < X) ? (dt(), Ct()) : Ht(B2, { transition: false }))));
              }(), t3 = null;
            }));
          }), j2.observe(V);
        }
      }(), st("ready"));
    }
  }
  function lt(t2) {
    b = t2;
  }
  function at() {
    false === nt("gestures") ? w2 && (w2.destroy(), w2 = void 0) : w2 || function() {
      const t2 = nt("gestures");
      !w2 && false !== t2 && V && (w2 = f$1(V, t2).on("start", (t3) => {
        var e2, n2;
        if (!S2) return;
        if (false === nt("gestures", t3)) return;
        const { srcEvent: o2 } = t3;
        F2 && e$4(o2) && !n$7(o2.target) && m(o2), S2.pause(), S2.getCurrentVelocities().pos = 0;
        const s2 = null === (e2 = U[B2]) || void 0 === e2 ? void 0 : e2.slides[0], r2 = null == s2 ? void 0 : s2.el;
        s2 && K.has(s2.index) && r2 && (k2 = s2.offset || 0, k2 += (function(t4) {
          const e3 = window.getComputedStyle(t4), n3 = new DOMMatrixReadOnly(e3.transform);
          return { width: n3.m41 || 0, height: n3.m42 || 0 };
        }(r2)[z2] || 0) * (I2 && !F2 ? 1 : -1)), At(), q2 || (k2 < G || k2 > X) && S2.spring({ clamp: true, mass: 1, tension: 500, friction: 25, velocity: (null === (n2 = S2.getCurrentVelocities()) || void 0 === n2 ? void 0 : n2.pos) || 0, restDelta: 1, restSpeed: 1 }).from({ pos: k2 }).to({ pos: t$6(G, k2, X) }).start();
      }).on("move", (t3) => {
        var e2, n2;
        if (false === nt("gestures", t3)) return;
        const { srcEvent: o2, axis: s2, deltaX: r2, deltaY: l2 } = t3;
        if (e$4(o2) && (null === (e2 = o2.touches) || void 0 === e2 ? void 0 : e2.length) > 1) return;
        const a2 = o2.target, c2 = n$7(a2), d2 = c2 ? c2.scrollHeight > c2.clientHeight ? "y" : "x" : void 0;
        if (c2 && c2 !== V && (!s2 || s2 === d2)) return;
        if (!s2) return m(o2), o2.stopPropagation(), void o2.stopImmediatePropagation();
        if ("y" === s2 && !F2 || "x" === s2 && F2) return;
        if (m(o2), o2.stopPropagation(), !S2) return;
        const u2 = I2 && !F2 ? 1 : -1, f2 = F2 ? l2 : r2;
        let v2 = (null == S2 ? void 0 : S2.isRunning()) ? S2.getEndValues().pos : k2, g3 = 1;
        q2 || (v2 <= G && f2 * u2 < 0 ? (g3 = Math.max(0.01, 1 - (Math.abs(1 / gt() * Math.abs(v2 - G)) || 0)), g3 *= 0.2) : v2 >= X && f2 * u2 > 0 && (g3 = Math.max(0.01, 1 - (Math.abs(1 / gt() * Math.abs(v2 - X)) || 0)), g3 *= 0.2)), v2 += f2 * g3 * u2, S2.spring({ clamp: true, mass: 1, tension: 700, friction: 25, velocity: (null === (n2 = S2.getCurrentVelocities()) || void 0 === n2 ? void 0 : n2.pos) || 0, restDelta: 1, restSpeed: 1 }).from({ pos: k2 }).to({ pos: v2 }).start();
      }).on("panstart", (t3) => {
        false !== nt("gestures", t3) && (null == t3 ? void 0 : t3.axis) === (F2 ? "y" : "x") && s$7(V, "is-dragging");
      }).on("panend", (t3) => {
        false !== nt("gestures", t3) && s$6(V, "is-dragging");
      }).on("end", (t3) => {
        var e2, n2;
        if (false === nt("gestures", t3)) return;
        const { srcEvent: o2, axis: s2, velocityX: r2, velocityY: l2, currentTouch: c2 } = t3;
        if (c2.length > 0 || !S2) return;
        const d2 = o2.target, u2 = n$7(d2), f2 = u2 ? u2.scrollHeight > u2.clientHeight ? "y" : "x" : void 0, v2 = u2 && (!s2 || s2 === f2);
        F2 && e$4(o2) && !s2 && Pt(o2);
        const g3 = U.length, m2 = nt("dragFree");
        if (!g3) return;
        let h2 = v2 ? 0 : nt("vertical") ? l2 : r2;
        s2 !== (F2 ? "y" : "x") && (h2 = 0);
        let b2 = (null == S2 ? void 0 : S2.isRunning()) ? S2.getEndValues().pos : k2;
        const y2 = I2 && !F2 ? 1 : -1;
        if (v2 || (b2 += h2 * (m2 ? 5 : 1) * y2), !q2 && (h2 * y2 <= 0 && b2 < G || h2 * y2 >= 0 && b2 > X)) {
          let t4 = 0;
          return Math.abs(h2) > 0 && (t4 = 2 * Math.abs(h2), t4 = Math.min(0.3 * gt(), t4)), b2 = t$6(G + -1 * t4, b2, X + t4), void S2.spring({ clamp: true, mass: 1, tension: 380, friction: 25, velocity: -1 * h2, restDelta: 1, restSpeed: 1 }).from({ pos: k2 }).to({ pos: b2 }).start();
        }
        if (m2 || (null === (e2 = R2.Autoscroll) || void 0 === e2 ? void 0 : e2.isEnabled())) return void (Math.abs(h2) > 10 ? S2.spring({ clamp: true, mass: 1, tension: 150, friction: 25, velocity: -1 * h2, restDelta: 1, restSpeed: 1 }).from({ pos: k2 }).to({ pos: b2 }).start() : S2.isRunning() || N2 || (N2 = true, st("settle")));
        if (!m2 && !(null === (n2 = R2.Autoscroll) || void 0 === n2 ? void 0 : n2.isEnabled()) && (!t3.offsetX && !t3.offsetY || "y" === s2 && !F2 || "x" === s2 && F2)) return void Ht(B2, { transition: "tween" });
        let E2 = vt(b2);
        Math.abs(h2) > 10 && E2 === B2 && (E2 += h2 > 0 ? I2 && !F2 ? 1 : -1 : I2 && !F2 ? -1 : 1), Ht(E2, { transition: "tween", tween: { velocity: -1 * h2 } });
      }).init());
    }(), s$5(V, "is-draggable", !!w2 && U.length > 0);
  }
  function ct(t2 = "*") {
    var e2;
    const n2 = [];
    for (const i2 of W) ("*" === t2 || i2.class && i2.class.includes(t2) || i2.el && (null === (e2 = i2.el) || void 0 === e2 ? void 0 : e2.classList.contains(t2))) && n2.push(i2);
    A2 = void 0, Y = t2, J = [...n2];
  }
  function dt() {
    if (!S2) return;
    const t2 = vt((null == S2 ? void 0 : S2.isRunning()) ? S2.getEndValues().pos : k2);
    t2 !== B2 && (A2 = B2, B2 = t2, Rt(), ut(), ft(), st("change", B2, A2));
  }
  function ut() {
    var t2, e2;
    if (!H2) return;
    for (const t3 of H2.querySelectorAll("[data-carousel-index]")) t3.innerHTML = B2 + "";
    for (const t3 of H2.querySelectorAll("[data-carousel-page]")) t3.innerHTML = B2 + 1 + "";
    for (const t3 of H2.querySelectorAll("[data-carousel-pages]")) t3.innerHTML = U.length + "";
    for (const e3 of H2.querySelectorAll("[data-carousel-go-to]")) {
      parseInt((null === (t2 = e3.dataset) || void 0 === t2 ? void 0 : t2.carouselGoTo) || "-1", 10) === B2 ? e3.setAttribute("aria-current", "true") : e3.removeAttribute("aria-current");
    }
    for (const t3 of H2.querySelectorAll("[data-carousel-go-prev]")) t3.toggleAttribute("aria-disabled", !$t()), $t() ? t3.removeAttribute("tabindex") : t3.setAttribute("tabindex", "-1");
    for (const t3 of H2.querySelectorAll("[data-carousel-go-next]")) t3.toggleAttribute("aria-disabled", !qt()), qt() ? t3.removeAttribute("tabindex") : t3.setAttribute("tabindex", "-1");
    let n2 = false;
    const i2 = null === (e2 = U[B2]) || void 0 === e2 ? void 0 : e2.slides[0];
    i2 && (i2.downloadSrc || "image" === i2.type && i2.src) && (n2 = true);
    for (const t3 of H2.querySelectorAll("[data-carousel-download]")) t3.toggleAttribute("aria-disabled", !n2);
  }
  function ft(t2) {
    var e2;
    t2 || (t2 = null === (e2 = U[B2]) || void 0 === e2 ? void 0 : e2.slides[0]);
    const n2 = null == t2 ? void 0 : t2.el;
    if (n2) for (const e3 of n2.querySelectorAll("[data-slide-index]")) e3.innerHTML = t2.index + 1 + "";
  }
  function vt(t2) {
    var e2, n2, i2;
    if (!U.length) return 0;
    const o2 = mt();
    let s2 = t2;
    q2 ? s2 -= Math.floor((t2 - (null === (e2 = U[0]) || void 0 === e2 ? void 0 : e2.pos)) / o2) * o2 || 0 : s2 = t$6(null === (n2 = U[0]) || void 0 === n2 ? void 0 : n2.pos, t2, null === (i2 = U[U.length - 1]) || void 0 === i2 ? void 0 : i2.pos);
    const r2 = /* @__PURE__ */ new Map();
    let l2 = 0;
    for (const t3 of U) {
      const e3 = Math.abs(t3.pos - s2), n3 = Math.abs(t3.pos - s2 - o2), i3 = Math.abs(t3.pos - s2 + o2), a2 = Math.min(e3, n3, i3);
      r2.set(l2, a2), l2++;
    }
    const c2 = r2.size > 0 ? [...r2.entries()].reduce((t3, e3) => e3[1] < t3[1] ? e3 : t3) : [B2, 0];
    return parseInt(c2[0]);
  }
  function pt() {
    return et;
  }
  function gt() {
    return C;
  }
  function mt(t2 = true) {
    return J.length ? J.reduce((t3, e2) => t3 + e2.dim, 0) + (J.length - (q2 && t2 ? 0 : 1)) * et : 0;
  }
  function ht(t2) {
    const e2 = mt(), n2 = gt();
    if (!e2 || !V || !n2) return [];
    const i2 = [];
    t2 = void 0 === t2 ? k2 : t2, q2 && (t2 -= Math.floor(t2 / e2) * e2 || 0);
    let o2 = 0;
    for (let s2 of J) {
      const r2 = (e3 = 0) => {
        i2.indexOf(s2) > -1 || (s2.pos = o2 - t2 + e3 || 0, s2.offset + e3 > t2 - s2.dim - D2 + 0.51 && s2.offset + e3 < t2 + n2 + $ - 0.51 && i2.push(s2));
      };
      s2.offset = o2, q2 && (r2(e2), r2(-1 * e2)), r2(), o2 += s2.dim + et;
    }
    return i2;
  }
  function bt(t2, e2) {
    const n2 = [];
    for (const e3 of Array.isArray(t2) ? t2 : [t2]) {
      const t3 = yt(Object.assign(Object.assign({}, e3), { isVirtual: true }));
      t3.el || (t3.el = document.createElement("div")), st("createSlide", t3), n2.push(t3);
    }
    W.splice(void 0 === e2 ? W.length : e2, 0, ...n2), wt();
    for (const t3 of n2) st("addSlide", t3), Et(t3);
    return ct(Y), n2;
  }
  function yt(t2) {
    return (t$7(t2) || t2 instanceof HTMLElement) && (t2 = { html: t2 }), Object.assign({ index: -1, el: void 0, class: "", isVirtual: true, dim: 0, pos: 0, offset: 0, html: "", src: "" }, t2);
  }
  function Et(t2) {
    let e2 = t2.el;
    if (!t2 || !e2) return;
    const n2 = t2.html ? t2.html instanceof HTMLElement ? t2.html : e$7(t2.html) : void 0;
    n2 && (s$7(n2, "f-html"), t2.htmlEl = n2, s$7(e2, "has-html"), e2.append(n2), st("contentReady", t2));
  }
  function xt(t2) {
    if (!V || !t2) return;
    let e2 = t2.el;
    if (e2) {
      if (e2.setAttribute("index", t2.index + ""), e2.parentElement !== V) {
        let n2;
        s$7(e2, O2.classes.slide), s$7(e2, t2.class), Rt(t2);
        for (const e3 of W) if (e3.index > t2.index) {
          n2 = e3.el;
          break;
        }
        V.insertBefore(e2, n2 && V.contains(n2) ? n2 : null), st("attachSlideEl", t2);
      }
      return ft(t2), e2;
    }
  }
  function Mt(t2) {
    const e2 = null == t2 ? void 0 : t2.el;
    e2 && (e2.remove(), jt(e2), st("detachSlideEl", t2));
  }
  function wt() {
    for (let t2 = 0; t2 < W.length; t2++) {
      const e2 = W[t2], n2 = e2.el;
      n2 && (e2.index !== t2 && jt(n2), n2.setAttribute("index", `${t2}`)), e2.index = t2;
    }
  }
  function St() {
    var t2, n2, i2, o2, s2;
    if (!H2 || !V) return;
    I2 = nt("rtl"), F2 = nt("vertical"), z2 = F2 ? "height" : "width";
    const r2 = nt("classes");
    if (s$5(H2, r2.isLTR, !I2), s$5(H2, r2.isRTL, I2), s$5(H2, r2.isHorizontal, !F2), s$5(H2, r2.isVertical, F2), s$5(H2, r2.hasAdaptiveHeight, nt("adaptiveHeight")), C = 0, D2 = 0, $ = 0, et = 0, V) {
      V.childElementCount || (V.style.display = "grid");
      const t3 = V.getBoundingClientRect();
      C = V.getBoundingClientRect()[z2] || 0;
      const e2 = window.getComputedStyle(V);
      et = parseFloat(e2.getPropertyValue("--f-carousel-gap")) || 0;
      "visible" === e2.getPropertyValue("overflow-" + (F2 ? "y" : "x")) && (D2 = Math.abs(t3[F2 ? "top" : "left"]), $ = Math.abs(window[F2 ? "innerHeight" : "innerWidth"] - t3[F2 ? "bottom" : "right"])), V.style.display = "";
    }
    if (!C) return;
    const l2 = function() {
      let t3 = 0;
      if (V) {
        let e2 = document.createElement("div");
        e2.style.display = "block", s$7(e2, O2.classes.slide), V.appendChild(e2), t3 = e2.getBoundingClientRect()[z2], e2.remove(), e2 = void 0;
      }
      return t3;
    }();
    for (const n3 of J) {
      const i3 = n3.el;
      let o3 = 0;
      if (!n3.isVirtual && i3 && n$8(i3)) {
        let e2 = false;
        i3.parentElement && i3.parentElement === V || (V.appendChild(i3), e2 = true), o3 = i3.getBoundingClientRect()[z2], e2 && (null === (t2 = i3.parentElement) || void 0 === t2 || t2.removeChild(i3));
      } else o3 = l2;
      n3.dim = o3;
    }
    if (q2 = false, nt("infinite")) {
      q2 = true;
      const t3 = mt();
      let e2 = C + D2 + $;
      for (let i3 = 0; i3 < J.length; i3++) {
        const o3 = (null === (n2 = J[i3]) || void 0 === n2 ? void 0 : n2.dim) + et;
        if (t3 - o3 < e2 && t3 - o3 - e2 < o3) {
          q2 = false;
          break;
        }
      }
    }
    !function() {
      var t3;
      if (!H2) return;
      const e2 = gt(), n3 = mt(false);
      let i3 = nt("slidesPerPage");
      i3 = "auto" === i3 ? 1 / 0 : parseFloat(i3 + ""), U = [];
      let o3 = 0, s3 = 0;
      for (const n4 of J) (!U.length || o3 + n4.dim - e2 > 0.05 || s3 >= i3) && (U.push({ index: U.length, slides: [], dim: 0, offset: 0, pos: 0 }), o3 = 0, s3 = 0), null === (t3 = U[U.length - 1]) || void 0 === t3 || t3.slides.push(n4), o3 += n4.dim + et, s3++;
      const r3 = nt("center"), l3 = nt("fill");
      let c2 = 0;
      for (const t4 of U) {
        t4.dim = (t4.slides.length - 1) * et;
        for (const e3 of t4.slides) t4.dim += e3.dim;
        t4.offset = c2, t4.pos = c2, false !== r3 && (t4.pos -= 0.5 * (e2 - t4.dim)), l3 && !q2 && n3 > e2 && (t4.pos = t$6(0, t4.pos, n3 - e2)), c2 += t4.dim + et;
      }
      const d2 = [];
      let u2;
      for (const t4 of U) {
        const e3 = Object.assign({}, t4);
        u2 && Math.abs(e3.pos - u2.pos) < 0.1 ? (u2.dim += e3.dim, u2.slides = [...u2.slides, ...e3.slides]) : (u2 = e3, e3.index = d2.length, d2.push(e3));
      }
      U = d2, B2 = t$6(0, B2, U.length - 1);
    }(), G = (null === (i2 = U[0]) || void 0 === i2 ? void 0 : i2.pos) || 0, X = (null === (o2 = U[U.length - 1]) || void 0 === o2 ? void 0 : o2.pos) || 0, 0 === P ? function() {
      var t3;
      A2 = void 0, B2 = nt("initialPage");
      const e2 = nt("initialSlide") || void 0;
      void 0 !== e2 && (B2 = It.getPageIndex(e2) || 0), B2 = t$6(0, B2, U.length - 1), k2 = (null === (t3 = U[B2]) || void 0 === t3 ? void 0 : t3.pos) || 0, _2 = k2;
    }() : _2 = (null === (s2 = U[B2 || 0]) || void 0 === s2 ? void 0 : s2.pos) || 0, st("refresh"), ut();
  }
  function jt(t2) {
    if (!t2 || !n$8(t2)) return;
    const n2 = parseInt(t2.getAttribute("index") || "-1");
    let i2 = "";
    for (const e2 of Array.from(t2.classList)) {
      const t3 = e2.match(/^f-(\w+)(Out|In)$/);
      t3 && t3[1] && (i2 = t3[1] + "");
    }
    if (!t2 || !i2) return;
    const o2 = [`f-${i2}Out`, `f-${i2}In`, "to-prev", "to-next", "from-prev", "from-next"];
    t2.removeEventListener("animationend", Lt), s$6(t2, o2.join(" ")), K.delete(n2);
  }
  function At() {
    if (!V) return;
    const t2 = K.size > 0;
    for (const t3 of J) jt(t3.el);
    K.clear(), t2 && Ct();
  }
  function Lt(t2) {
    var e2;
    "f-" === (null === (e2 = t2.animationName) || void 0 === e2 ? void 0 : e2.substring(0, 2)) && (jt(t2.target), K.size || (s$6(H2, "in-transition"), !N2 && Math.abs(It.getPosition(true) - _2) < 0.5 && (N2 = true, st("settle"))), Ct());
  }
  function Pt(t2) {
    var e2;
    if (t2.defaultPrevented) return;
    const n2 = t2.composedPath()[0];
    if (n2.closest("[data-carousel-go-prev]")) return m(t2), void It.prev();
    if (n2.closest("[data-carousel-go-next]")) return m(t2), void It.next();
    const i2 = n2.closest("[data-carousel-go-to]");
    if (i2) return m(t2), void It.goTo(parseFloat(i2.dataset.carouselGoTo || "") || 0);
    if (n2.closest("[data-carousel-download]")) {
      m(t2);
      const n3 = null === (e2 = U[B2]) || void 0 === e2 ? void 0 : e2.slides[0];
      if (n3 && (n3.downloadSrc || "image" === n3.type && n3.src)) {
        const t3 = n3.downloadFilename, e3 = document.createElement("a"), i3 = n3.downloadSrc || n3.src || "";
        e3.href = i3, e3.target = "_blank", e3.download = t3 || i3, e3.click();
      }
      return;
    }
    st("click", t2);
  }
  function Tt(t2) {
    var e2;
    const n2 = t2.el;
    n2 && (null === (e2 = n2.querySelector(".f-spinner")) || void 0 === e2 || e2.remove());
  }
  function Ot(t2) {
    var e2;
    const n2 = t2.el;
    n2 && (null === (e2 = n2.querySelector(".f-html.is-error")) || void 0 === e2 || e2.remove(), s$6(n2, "has-error"));
  }
  function Rt(t2) {
    var e2;
    t2 || (t2 = null === (e2 = U[B2]) || void 0 === e2 ? void 0 : e2.slides[0]);
    const i2 = null == t2 ? void 0 : t2.el;
    if (!i2) return;
    let o2 = nt("formatCaption", t2);
    void 0 === o2 && (o2 = t2.caption), o2 = o2 || "";
    const s2 = nt("captionEl");
    if (s2 && s2 instanceof HTMLElement) {
      if (t2.index !== B2) return;
      if (t$7(o2) && (s2.innerHTML = it(o2 + "")), o2 instanceof HTMLElement) {
        if (o2.parentElement === s2) return;
        s2.innerHTML = "", o2.parentElement && (o2 = o2.cloneNode(true)), s2.append(o2);
      }
      return;
    }
    if (!o2) return;
    let r2 = t2.captionEl || i2.querySelector(".f-caption");
    !r2 && o2 instanceof HTMLElement && o2.classList.contains("f-caption") && (r2 = o2), r2 || (r2 = document.createElement("div"), s$7(r2, "f-caption"), t$7(o2) ? r2.innerHTML = it(o2 + "") : o2 instanceof HTMLElement && (o2.parentElement && (o2 = o2.cloneNode(true)), r2.append(o2)));
    const l2 = `f-caption-${y}_${t2.index}`;
    r2.setAttribute("id", l2), r2.dataset.selectable = "true", s$7(i2, "has-caption"), i2.setAttribute("aria-labelledby", l2), t2.captionEl = r2, i2.insertAdjacentElement("beforeend", r2);
  }
  function Ht(e2, i2 = {}) {
    var o2, r2;
    let { transition: l2, tween: u2 } = Object.assign({ transition: O2.transition, tween: O2.tween }, i2 || {});
    if (!H2 || !S2) return;
    const f2 = U.length;
    if (!f2) return;
    if (function(t2, e3) {
      var i3, o3, s2;
      if (!(H2 && C && S2 && e3 && t$7(e3) && "tween" !== e3)) return false;
      for (const t3 of Q) if (C - t3.dim > 0.5) return false;
      if (D2 > 0.5 || $ > 0.5) return;
      const r3 = U.length;
      let l3 = t2 > B2 ? 1 : -1;
      t2 = q2 ? (t2 % r3 + r3) % r3 : t$6(0, t2, r3 - 1), I2 && (l3 *= -1);
      const u3 = null === (i3 = U[B2]) || void 0 === i3 ? void 0 : i3.slides[0], f3 = null == u3 ? void 0 : u3.index, v3 = null === (o3 = U[t2]) || void 0 === o3 ? void 0 : o3.slides[0], p3 = null == v3 ? void 0 : v3.index, g3 = null === (s2 = U[t2]) || void 0 === s2 ? void 0 : s2.pos;
      if (void 0 === p3 || void 0 === f3 || f3 === p3 || k2 === g3 || Math.abs(C - ((null == v3 ? void 0 : v3.dim) || 0)) > 1) return false;
      N2 = false, S2.pause(), At(), s$7(H2, "in-transition"), k2 = _2 = g3;
      const m2 = xt(u3), h2 = xt(v3);
      return dt(), m2 && (K.add(f3), m2.style.transform = "", m2.addEventListener("animationend", Lt), s$6(m2, O2.classes.isSelected), m2.inert = false, s$7(m2, `f-${e3}Out to-${l3 > 0 ? "next" : "prev"}`)), h2 && (K.add(p3), h2.style.transform = "", h2.addEventListener("animationend", Lt), s$7(h2, O2.classes.isSelected), h2.inert = false, s$7(h2, `f-${e3}In from-${l3 > 0 ? "prev" : "next"}`)), Ct(), true;
    }(e2, l2)) return;
    e2 = q2 ? (e2 % f2 + f2) % f2 : t$6(0, e2, f2 - 1);
    const v2 = (null === (o2 = U[e2 || 0]) || void 0 === o2 ? void 0 : o2.pos) || 0;
    _2 = v2;
    const p2 = S2.isRunning() ? S2.getEndValues().pos : k2;
    if (Math.abs(_2 - p2) < 1) return k2 = _2, B2 !== e2 && (Rt(), A2 = B2, B2 = e2, ut(), ft(), st("change", B2, A2)), Ct(), void (N2 || (N2 = true, st("settle")));
    if (S2.pause(), At(), q2) {
      const t2 = mt(), e3 = Math.floor((p2 - (null === (r2 = U[0]) || void 0 === r2 ? void 0 : r2.pos)) / t2) || 0, n2 = _2 + e3 * t2;
      _2 = [n2 + t2, n2, n2 - t2].reduce(function(t3, e4) {
        return Math.abs(e4 - p2) < Math.abs(t3 - p2) ? e4 : t3;
      });
    }
    false !== l2 && t$5(u2) ? S2.spring(r$3({}, O2.tween, u2)).from({ pos: k2 }).to({ pos: _2 }).start() : (k2 = _2, dt(), Ct(), N2 || (N2 = true, st("settle")));
  }
  function Vt(t2) {
    var e2;
    let n2 = k2;
    if (q2 && true !== t2) {
      const t3 = mt();
      n2 -= (Math.floor((k2 - (null === (e2 = U[0]) || void 0 === e2 ? void 0 : e2.pos) || 0) / t3) || 0) * t3;
    }
    return n2;
  }
  function Ct() {
    var t2;
    if (!H2 || !V) return;
    Q = ht();
    const e2 = /* @__PURE__ */ new Set(), n2 = [], i2 = U[B2], s2 = O2.setTransform;
    let l2;
    for (const o2 of J) {
      const s3 = K.has(o2.index), r2 = Q.indexOf(o2) > -1, a2 = (null === (t2 = null == i2 ? void 0 : i2.slides) || void 0 === t2 ? void 0 : t2.indexOf(o2)) > -1;
      if (o2.isVirtual && !s3 && !r2) continue;
      let c2 = xt(o2);
      if (c2 && (n2.push(o2), a2 && e2.add(c2), nt("adaptiveHeight") && a2)) {
        const t3 = (c2.firstElementChild || c2).getBoundingClientRect().height;
        l2 = null == l2 ? t3 : Math.max(l2, t3);
      }
    }
    V && l2 && (V.style.height = `${l2}px`), [...e$2(V, `.${O2.classes.slide}`)].forEach((t3) => {
      s$5(t3, O2.classes.isSelected, e2.has(t3));
      const n3 = W[parseInt(t3.getAttribute("index") || "-1")];
      if (!n3) return t3.remove(), void jt(t3);
      const i3 = K.has(n3.index), o2 = Q.indexOf(n3) > -1;
      if (n3.isVirtual && !i3 && !o2) return void Mt(n3);
      if (t3.inert = !o2, false === s2) return;
      let l3 = n3.pos ? Math.round(1e4 * n3.pos) / 1e4 : 0, a2 = 0, c2 = 0, d2 = 0, f2 = 0;
      i3 || (a2 = F2 ? 0 : I2 ? -1 * l3 : l3, c2 = F2 ? l3 : 0, d2 = t$3(a2, 0, n3.dim, 0, 100), f2 = t$3(c2, 0, n3.dim, 0, 100)), s2 instanceof Function && !i3 ? s2(It, n3, { x: a2, y: c2, xPercent: d2, yPercent: f2 }) : t3.style.transform = a2 || c2 ? `translate3d(${d2}%, ${f2}%,0)` : "";
    }), st("render", n2);
  }
  function Dt() {
    null == H2 || H2.removeEventListener("click", Pt), document.removeEventListener("mousemove", lt), K.clear(), null == j2 || j2.disconnect(), j2 = void 0;
    for (const t2 of W) {
      let n2 = t2.el;
      n2 && n$8(n2) && (t2.state = void 0, Tt(t2), Ot(t2), t2.isVirtual ? (Mt(t2), t2.el = void 0) : (jt(n2), n2.style.transform = "", V && !V.contains(n2) && V.appendChild(n2)));
    }
    for (const t2 of Object.values(R2)) null == t2 || t2.destroy();
    R2 = {}, null == w2 || w2.destroy(), w2 = void 0, null == S2 || S2.destroy(), S2 = void 0;
    for (const [t2, e2] of Object.entries(O2.classes || {})) "container" !== t2 && s$6(H2, e2);
    s$6(V, "is-draggable");
  }
  function $t() {
    return q2 || B2 > 0;
  }
  function qt() {
    return q2 || B2 < U.length - 1;
  }
  const It = { add: function(t2, e2) {
    var n2;
    let i2 = k2;
    const o2 = B2, s2 = mt(), r2 = (null == S2 ? void 0 : S2.isRunning()) ? S2.getEndValues().pos : k2, l2 = s2 && Math.floor((r2 - ((null === (n2 = U[0]) || void 0 === n2 ? void 0 : n2.pos) || 0)) / s2) || 0;
    return bt(t2, e2), ct(Y), St(), S2 && s2 && (o2 === B2 && (i2 -= l2 * s2), i2 === _2 ? k2 = _2 : S2.spring({ clamp: true, mass: 1, tension: 300, friction: 25, restDelta: 1, restSpeed: 1 }).from({ pos: i2 }).to({ pos: _2 }).start()), Ct(), It;
  }, canGoPrev: $t, canGoNext: qt, destroy: function() {
    return st("destroy"), window.removeEventListener("resize", rt), Dt(), ot.clear(), H2 = null, U = [], W = [], O2 = Object.assign({}, h$1), R2 = {}, J = [], L = void 0, Y = "*", P = 2, It;
  }, emit: st, filter: function(t2 = "*") {
    return ct(t2), St(), k2 = t$6(G, k2, X), Ct(), st("filter", t2), It;
  }, getContainer: function() {
    return H2;
  }, getGapDim: pt, getGestures: function() {
    return w2;
  }, getLastMouseMove: function() {
    return b;
  }, getOption: function(t2) {
    return nt(t2);
  }, getOptions: function() {
    return O2;
  }, getPage: function() {
    return U[B2];
  }, getPageIndex: function(t2) {
    if (void 0 !== t2) {
      for (const e2 of U || []) for (const n2 of e2.slides) if (n2.index === t2) return e2.index;
      return -1;
    }
    return B2;
  }, getPageIndexFromPosition: vt, getPageProgress: function(t2, e2) {
    var n2;
    void 0 === t2 && (t2 = B2);
    const i2 = U[t2];
    if (!i2) return t2 > B2 ? -1 : 1;
    const o2 = mt(), s2 = pt();
    let r2 = i2.pos, l2 = Vt();
    if (q2 && true !== e2) {
      const t3 = Math.floor((l2 - (null === (n2 = U[0]) || void 0 === n2 ? void 0 : n2.pos)) / o2) || 0;
      l2 -= t3 * o2, r2 = [r2 + o2, r2, r2 - o2].reduce(function(t4, e3) {
        return Math.abs(e3 - l2) < Math.abs(t4 - l2) ? e3 : t4;
      });
    }
    return (l2 - r2) / (i2.dim + s2) || 0;
  }, getPageVisibility: function(t2) {
    var e2;
    void 0 === t2 && (t2 = B2);
    const n2 = U[t2];
    if (!n2) return t2 > B2 ? -1 : 1;
    const i2 = Vt(), o2 = gt();
    let s2 = n2.pos;
    if (q2) {
      const t3 = mt(), n3 = s2 + (Math.floor((i2 - (null === (e2 = U[0]) || void 0 === e2 ? void 0 : e2.pos)) / t3) || 0) * t3;
      s2 = [n3 + t3, n3, n3 - t3].reduce(function(t4, e3) {
        return Math.abs(e3 - i2) < Math.abs(t4 - i2) ? e3 : t4;
      });
    }
    return s2 > i2 && s2 + n2.dim < i2 + o2 ? 1 : s2 < i2 ? (s2 + n2.dim - i2) / n2.dim || 0 : s2 + n2.dim > i2 + o2 && (i2 + o2 - s2) / n2.dim || 0;
  }, getPages: function() {
    return U;
  }, getPlugins: function() {
    return R2;
  }, getPosition: Vt, getSlides: function() {
    return W;
  }, getState: function() {
    return P;
  }, getTotalSlideDim: mt, getTween: function() {
    return S2;
  }, getViewport: function() {
    return V;
  }, getViewportDim: gt, getVisibleSlides: function(t2) {
    return void 0 === t2 ? Q : ht(t2);
  }, goTo: Ht, hasNavigated: function() {
    return void 0 !== A2;
  }, hideError: Ot, hideLoading: Tt, init: function() {
    if (!g2 || !n$8(g2)) throw new Error("No Element found");
    return 0 !== P && (Dt(), P = 0), H2 = g2, T = x2, window.removeEventListener("resize", rt), T.breakpoints && window.addEventListener("resize", rt), rt(), It;
  }, isInfinite: function() {
    return q2;
  }, isInTransition: function() {
    return K.size > 0;
  }, isRTL: function() {
    return I2;
  }, isSettled: function() {
    return N2;
  }, isVertical: function() {
    return F2;
  }, localize: it, next: function(t2 = {}) {
    return Ht(B2 + 1, t2), It;
  }, off: function(t2, e2) {
    for (const n2 of t2 instanceof Array ? t2 : [t2]) ot.has(n2) && ot.set(n2, ot.get(n2).filter((t3) => t3 !== e2));
    return It;
  }, on: function(t2, e2) {
    for (const n2 of t2 instanceof Array ? t2 : [t2]) ot.set(n2, [...ot.get(n2) || [], e2]);
    return It;
  }, prev: function(t2 = {}) {
    return Ht(B2 - 1, t2), It;
  }, reInit: function(e2 = {}, n2) {
    return Dt(), P = 0, L = void 0, Y = "*", x2 = e2, T = e2, t$5(n2) && (M2 = n2), rt(), It;
  }, remove: function(t2) {
    void 0 === t2 && (t2 = W.length - 1);
    const e2 = W[t2];
    return e2 && (st("removeSlide", e2), e2.el && (jt(e2.el), e2.el.remove(), e2.el = void 0), W.splice(t2, 1), ct(Y), St(), k2 = t$6(G, k2, X), Ct()), It;
  }, setPosition: function(t2) {
    k2 = t2, dt(), Ct();
  }, showError: function(t2, e2) {
    if (1 === P) {
      Tt(t2), Ot(t2);
      const n2 = t2.el;
      if (n2) {
        const i2 = document.createElement("div");
        s$7(i2, "f-html"), s$7(i2, "is-error"), i2.innerHTML = it(e2 || "<p>{{ERROR}}</p>"), t2.htmlEl = i2, s$7(n2, "has-html has-error"), n2.insertAdjacentElement("afterbegin", i2), st("contentReady", t2);
      }
    }
    return It;
  }, showLoading: function(t2) {
    const e2 = t2.el, n2 = null == e2 ? void 0 : e2.querySelector(".f-spinner");
    if (!e2 || n2) return It;
    const i2 = nt("spinnerTpl"), o2 = e$7(i2);
    return o2 && (s$7(o2, "f-spinner"), e2.insertAdjacentElement("beforeend", o2)), It;
  }, version: "6.1.11" };
  return It;
};
E.l10n = { en_EN: o$6 }, E.getDefaults = () => h$1;
/*! License details at fancyapps.com/license */
const t$2 = (t2 = true, e2 = "--f-scrollbar-compensate", s2 = "--f-body-margin", o2 = "hide-scrollbar") => {
  const n2 = document, r2 = n2.body, l2 = n2.documentElement;
  if (t2) {
    if (r2.classList.contains(o2)) return;
    let t3 = window.innerWidth - l2.getBoundingClientRect().width;
    t3 < 0 && (t3 = 0), l2.style.setProperty(e2, `${t3}px`);
    const n3 = parseFloat(window.getComputedStyle(r2).marginRight);
    n3 && r2.style.setProperty(s2, `${n3}px`), r2.classList.add(o2);
  } else r2.classList.remove(o2), r2.style.setProperty(s2, ""), n2.documentElement.style.setProperty(e2, "");
};
/*! License details at fancyapps.com/license */
function e$1() {
  return !("undefined" == typeof window || !window.document || !window.document.createElement);
}
/*! License details at fancyapps.com/license */
const n$4 = function(n2 = "", t2 = "", o2 = "") {
  return n2.split(t2).join(o2);
};
/*! License details at fancyapps.com/license */
const a$3 = { tpl: (t2) => `<img class="f-panzoom__content" 
    ${t2.srcset ? 'data-lazy-srcset="{{srcset}}"' : ""} 
    ${t2.sizes ? 'data-lazy-sizes="{{sizes}}"' : ""} 
    data-lazy-src="{{src}}" alt="{{alt}}" />` }, s$4 = () => {
  let s2;
  function l2(e2, o2) {
    const n2 = null == s2 ? void 0 : s2.getOptions().Zoomable;
    let i2 = (t$5(n2) ? Object.assign(Object.assign({}, a$3), n2) : a$3)[e2];
    return i2 && "function" == typeof i2 && o2 ? i2(o2) : i2;
  }
  function c2() {
    s2 && false !== s2.getOptions().Zoomable && (s2.on("addSlide", f2), s2.on("removeSlide", u2), s2.on("attachSlideEl", g2), s2.on("click", d2), s2.on("change", r2), s2.on("ready", r2));
  }
  function r2() {
    m2();
    const t2 = (null == s2 ? void 0 : s2.getVisibleSlides()) || [];
    if (t2.length > 1 || "slide" === (null == s2 ? void 0 : s2.getOption("transition"))) for (const e2 of t2) {
      const t3 = e2.panzoomRef;
      t3 && ((null == s2 ? void 0 : s2.getPage().slides) || []).indexOf(e2) < 0 && t3.execute(v$1.ZoomTo, Object.assign({}, t3.getStartPosition()));
    }
  }
  function d2(t2, e2) {
    const o2 = e2.target;
    o2 && !e2.defaultPrevented && o2.dataset.panzoomAction && p2(o2.dataset.panzoomAction);
  }
  function f2(t2, i2) {
    const a2 = i2.el;
    if (!s2 || !a2 || i2.panzoomRef) return;
    const c3 = i2.src || i2.lazySrc || "", r3 = i2.alt || i2.caption || `Image #${i2.index}`, d3 = i2.srcset || i2.lazySrcset || "", f3 = i2.sizes || i2.lazySizes || "";
    if (c3 && t$7(c3) && !i2.html && (!i2.type || "image" === i2.type)) {
      i2.type = "image", i2.thumbSrc = i2.thumbSrc || c3;
      let t3 = l2("tpl", i2);
      t3 = n$4(t3, "{{src}}", c3 + ""), t3 = n$4(t3, "{{srcset}}", d3 + ""), t3 = n$4(t3, "{{sizes}}", f3 + ""), a2.insertAdjacentHTML("afterbegin", t3);
    }
    const u3 = a2.querySelector(".f-panzoom__content");
    if (!u3) return;
    u3.setAttribute("alt", r3 + "");
    const g3 = i2.width && "auto" !== i2.width ? parseFloat(i2.width + "") : "auto", p3 = i2.height && "auto" !== i2.height ? parseFloat(i2.height + "") : "auto", z2 = S(a2, Object.assign({ width: g3, height: p3, classes: { container: "f-zoomable" }, event: () => null == s2 ? void 0 : s2.getLastMouseMove(), spinnerTpl: () => (null == s2 ? void 0 : s2.getOption("spinnerTpl")) || "" }, l2("Panzoom")));
    z2.on("*", (t3, e2, ...o2) => {
      s2 && ("loading" === e2 && (i2.state = 0), "loaded" === e2 && (i2.state = 1), "error" === e2 && (i2.state = 2, null == s2 || s2.showError(i2, "{{IMAGE_ERROR}}")), s2.emit(`panzoom:${e2}`, i2, ...o2), "loading" === e2 && s2.emit("contentLoading", i2), "ready" === e2 && s2.emit("contentReady", i2), i2.index === (null == s2 ? void 0 : s2.getPageIndex()) && m2());
    }), i2.panzoomRef = z2;
  }
  function u2(t2, e2) {
    e2.panzoomRef && (e2.panzoomRef.destroy(), e2.panzoomRef = void 0);
  }
  function g2(t2, e2) {
    const o2 = e2.panzoomRef;
    if (o2) switch (o2.getState()) {
      case 0:
        o2.init();
        break;
      case 3:
        o2.execute(v$1.ZoomTo, Object.assign(Object.assign({}, o2.getStartPosition()), { velocity: 0 }));
    }
  }
  function m2() {
    var t2, e2;
    const o2 = (null == s2 ? void 0 : s2.getContainer()) || void 0, n2 = null === (e2 = null === (t2 = null == s2 ? void 0 : s2.getPage()) || void 0 === t2 ? void 0 : t2.slides[0]) || void 0 === e2 ? void 0 : e2.panzoomRef;
    if (o2) if (n2) n2.updateControls(o2);
    else for (const t3 of o2.querySelectorAll("[data-panzoom-action]") || []) t3.setAttribute("aria-disabled", ""), t3.setAttribute("tabindex", "-1");
  }
  function p2(t2, ...e2) {
    var o2;
    null === (o2 = null == s2 ? void 0 : s2.getPage().slides[0].panzoomRef) || void 0 === o2 || o2.execute(t2, ...e2);
  }
  return { init: function(t2) {
    s2 = t2, s2.on("initPlugins", c2);
  }, destroy: function() {
    if (s2) {
      s2.off("initPlugins", c2), s2.off("addSlide", f2), s2.off("removeSlide", u2), s2.off("attachSlideEl", g2), s2.off("click", d2), s2.off("change", r2), s2.off("ready", r2);
      for (const t2 of s2.getSlides()) u2(0, t2);
    }
    s2 = void 0;
  }, execute: p2 };
};
/*! License details at fancyapps.com/license */
const e = { syncOnChange: false, syncOnClick: true, syncOnHover: false }, i$4 = () => {
  let i2, t2;
  function o2() {
    const t3 = null == i2 ? void 0 : i2.getOptions().Sync;
    return t$5(t3) ? Object.assign(Object.assign({}, e), t3) : e;
  }
  function s2(n2) {
    var e2, s3, l3;
    i2 && n2 && (t2 = n2, i2.getOptions().classes = Object.assign(Object.assign({}, i2.getOptions().classes), { isSelected: "" }), i2.getOptions().initialSlide = (null === (s3 = null === (e2 = t2.getPage()) || void 0 === e2 ? void 0 : e2.slides[0]) || void 0 === s3 ? void 0 : s3.index) || 0, o2().syncOnChange && i2.on("change", c2), o2().syncOnClick && i2.on("click", g2), o2().syncOnHover && (null === (l3 = i2.getViewport()) || void 0 === l3 || l3.addEventListener("mouseover", u2)), function() {
      if (!i2 || !t2) return;
      i2.on("ready", d2), i2.on("refresh", a2), t2.on("change", r2), t2.on("filter", f2);
    }());
  }
  function l2() {
    const n2 = o2().target;
    i2 && n2 && s2(n2);
  }
  function d2() {
    v2();
  }
  function c2() {
    var n2;
    if (i2 && t2) {
      const e2 = (null === (n2 = i2.getPage()) || void 0 === n2 ? void 0 : n2.slides) || [], o3 = t2.getPageIndex(e2[0].index || 0);
      o3 > -1 && t2.goTo(o3, i2.hasNavigated() ? void 0 : { tween: false, transition: false }), v2();
    }
  }
  function r2() {
    var n2;
    if (i2 && t2) {
      const e2 = i2.getPageIndex((null === (n2 = t2.getPage()) || void 0 === n2 ? void 0 : n2.slides[0].index) || 0);
      e2 > -1 && i2.goTo(e2, t2.hasNavigated() ? void 0 : { tween: false, transition: false }), v2();
    }
  }
  function g2(n2, e2) {
    var o3;
    if (!i2 || !t2) return;
    if (null === (o3 = i2.getTween()) || void 0 === o3 ? void 0 : o3.isRunning()) return;
    const s3 = null == i2 ? void 0 : i2.getOptions().classes.slide;
    if (!s3) return;
    const l3 = s3 ? e2.target.closest(`.${s3}`) : null;
    if (l3) {
      const n3 = parseInt(l3.getAttribute("index") || "") || 0, e3 = t2.getPageIndex(n3);
      t2.goTo(e3);
    }
  }
  function u2(n2) {
    i2 && g2(0, n2);
  }
  function a2() {
    var n2;
    if (i2 && t2) {
      const e2 = i2.getPageIndex((null === (n2 = t2.getPage()) || void 0 === n2 ? void 0 : n2.slides[0].index) || 0);
      e2 > -1 && i2.goTo(e2, { tween: false, transition: false }), v2();
    }
  }
  function f2(n2, e2) {
    i2 && t2 && (i2.filter(e2), r2());
  }
  function v2() {
    var n2, e2, o3;
    if (!t2) return;
    const s3 = (null === (e2 = null === (n2 = t2.getPage()) || void 0 === n2 ? void 0 : n2.slides[0]) || void 0 === e2 ? void 0 : e2.index) || 0;
    for (const n3 of (null == i2 ? void 0 : i2.getSlides()) || []) null === (o3 = n3.el) || void 0 === o3 || o3.classList.toggle("is-selected", n3.index === s3);
  }
  return { init: function(n2) {
    i2 = n2, i2.on("initSlides", l2);
  }, destroy: function() {
    var n2;
    null == i2 || i2.off("ready", d2), null == i2 || i2.off("refresh", a2), null == i2 || i2.off("change", c2), null == i2 || i2.off("click", g2), null === (n2 = null == i2 ? void 0 : i2.getViewport()) || void 0 === n2 || n2.removeEventListener("mouseover", u2), null == t2 || t2.off("change", r2), null == t2 || t2.off("filter", f2), t2 = void 0, null == i2 || i2.off("initSlides", l2), i2 = void 0;
  }, getTarget: function() {
    return t2;
  } };
};
/*! License details at fancyapps.com/license */
const s$3 = { showLoading: true, preload: 1 }, n$3 = "is-lazyloading", o$5 = "is-lazyloaded", l$5 = "has-lazyerror", i$3 = () => {
  let i2;
  function d2() {
    const e2 = null == i2 ? void 0 : i2.getOptions().Lazyload;
    return t$5(e2) ? Object.assign(Object.assign({}, s$3), e2) : s$3;
  }
  function r2(t2) {
    var s2;
    const r3 = t2.el;
    if (!r3) return;
    const c3 = "[data-lazy-src],[data-lazy-srcset],[data-lazy-bg]", u2 = Array.from(r3.querySelectorAll(c3));
    r3.matches(c3) && u2.push(r3);
    for (const r4 of u2) {
      const c4 = r4.dataset.lazySrc, u3 = r4.dataset.lazySrcset, f2 = r4.dataset.lazySizes, m2 = r4.dataset.lazyBg, y2 = (r4 instanceof HTMLImageElement || r4 instanceof HTMLSourceElement) && (c4 || u3), z2 = r4 instanceof HTMLElement && m2;
      if (!y2 && !z2) continue;
      const g2 = c4 || u3 || m2;
      if (g2) {
        if (y2 && g2) {
          const m3 = null === (s2 = r4.parentElement) || void 0 === s2 ? void 0 : s2.classList.contains("f-panzoom__wrapper");
          d2().showLoading && (null == i2 || i2.showLoading(t2)), r4.addEventListener("load", () => {
            null == i2 || i2.hideLoading(t2), s$6(r4, l$5), r4 instanceof HTMLImageElement ? r4.decode().then(() => {
              s$6(r4, n$3), s$7(r4, o$5);
            }).catch(() => {
              s$6(r4, n$3), s$7(r4, o$5);
            }) : (s$6(r4, n$3), s$7(r4, o$5)), m3 || null == i2 || i2.emit("lazyLoad:loaded", t2, r4, g2);
          }), r4.addEventListener("error", () => {
            null == i2 || i2.hideLoading(t2), s$6(r4, n$3), s$7(r4, l$5), m3 || null == i2 || i2.emit("lazyLoad:error", t2, r4, g2);
          }), r4.classList.add("f-lazyload"), r4.classList.add(n$3), m3 || null == i2 || i2.emit("lazyLoad:load", t2, r4, g2), c4 && (r4.src = c4), u3 && (r4.srcset = u3), f2 && (r4.sizes = f2);
        } else if (z2) {
          if (!document.body.contains(r4)) {
            document.createElement("img").src = m2;
          }
          r4.style.backgroundImage = `url('${m2}')`;
        }
        delete r4.dataset.lazySrc, delete r4.dataset.lazySrcset, delete r4.dataset.lazySizes, delete r4.dataset.lazyBg;
      }
    }
  }
  function c2() {
    if (!i2) return;
    const e2 = [...i2.getVisibleSlides()], t2 = d2().preload;
    if (t2 > 0) {
      const a2 = i2.getPosition(), s2 = i2.getViewportDim();
      e2.push(...i2.getVisibleSlides(a2 + s2 * t2), ...i2.getVisibleSlides(a2 - s2 * t2));
    }
    for (const t3 of e2) r2(t3);
  }
  return { init: function(e2) {
    i2 = e2, i2.on("render", c2);
  }, destroy: function() {
    null == i2 || i2.off("render", c2), i2 = void 0;
  } };
};
/*! License details at fancyapps.com/license */
const r$2 = '<svg width="24" height="24" viewBox="0 0 24 24" tabindex="-1">', i$2 = "</svg>", s$2 = { prevTpl: r$2 + '<path d="M15 3l-9 9 9 9"></path>' + i$2, nextTpl: r$2 + '<path d="M9 3l9 9-9 9"></path>' + i$2 }, l$4 = () => {
  let r2, i2, l2;
  function a2() {
    const t2 = null == r2 ? void 0 : r2.getOptions().Arrows;
    return t$5(t2) ? Object.assign(Object.assign({}, s$2), t2) : s$2;
  }
  function u2(e2) {
    if (!r2) return;
    const o2 = `<button data-carousel-go-${e2} tabindex="0" class="f-button is-arrow is-${e2}" title="{{${e2.toUpperCase()}}}">` + a2()[`${e2}Tpl`] + "</button", i3 = e$7(r2.localize(o2)) || void 0;
    return i3 && s$7(i3, a2()[`${e2}Class`]), i3;
  }
  function c2() {
    var t2;
    null == i2 || i2.remove(), i2 = void 0, null == l2 || l2.remove(), l2 = void 0, null === (t2 = null == r2 ? void 0 : r2.getContainer()) || void 0 === t2 || t2.classList.remove("has-arrows");
  }
  function d2() {
    r2 && false !== r2.getOptions().Arrows && r2.getPages().length > 1 ? (!function() {
      if (!r2) return;
      const t2 = r2.getViewport();
      t2 && (i2 || (i2 = u2("prev"), i2 && t2.insertAdjacentElement("beforebegin", i2)), l2 || (l2 = u2("next"), l2 && t2.insertAdjacentElement("afterend", l2)), s$5(r2.getContainer(), "has-arrows", !(!i2 && !l2)));
    }(), r2 && (null == i2 || i2.toggleAttribute("aria-disabled", !r2.canGoPrev()), null == l2 || l2.toggleAttribute("aria-disabled", !r2.canGoNext()))) : c2();
  }
  return { init: function(t2) {
    r2 = t2.on(["change", "refresh"], d2);
  }, destroy: function() {
    c2(), null == r2 || r2.off(["change", "refresh"], d2), r2 = void 0;
  } };
};
/*! License details at fancyapps.com/license */
const t$1 = '<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/>', M = '<g><line x1="11" y1="8" x2="11" y2="14"></line></g>' + t$1, o$4 = { moveLeft: ["moveLeft", "MOVE_LEFT", '<path d="M5 12h14M5 12l6 6M5 12l6-6"/>'], moveRight: ["moveRight", "MOVE_RIGHT", '<path d="M5 12h14M13 18l6-6M13 6l6 6"/>'], moveUp: ["moveUp", "MOVE_UP", '<path d="M12 5v14M18 11l-6-6M6 11l6-6"/>'], moveDown: ["moveDown", "MOVE_DOWN", '<path d="M12 5v14M18 13l-6 6M6 13l6 6"/>'], zoomOut: ["zoomOut", "ZOOM_OUT", t$1], zoomIn: ["zoomIn", "ZOOM_IN", M], toggleFull: ["toggleFull", "TOGGLE_FULL", M], iterateZoom: ["iterateZoom", "ITERATE_ZOOM", M], toggle1to1: ["toggleFull", "TOGGLE_FULL", '<path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/>'], rotateCCW: ["rotateCCW", "ROTATE_CCW", '<path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/>'], rotateCW: ["rotateCW", "ROTATE_CW", '<path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/>'], flipX: ["flipX", "FLIP_X", '<path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/>'], flipY: ["flipY", "FLIP_Y", '<path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/>'], reset: ["reset", "RESET", '<path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>'], toggleFS: ["toggleFS", "TOGGLE_FS", '<g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g>'] }, v = {};
for (const [t2, M2] of Object.entries(o$4)) v[t2] = { tpl: `<button data-panzoom-action="${M2[0]}" class="f-button" title="{{${M2[1]}}}"><svg>${M2[2]}</svg></button>` };
/*! License details at fancyapps.com/license */
var a$2;
!function(t2) {
  t2.Left = "left", t2.middle = "middle", t2.right = "right";
}(a$2 || (a$2 = {}));
const r$1 = Object.assign({ counter: { tpl: '<div class="f-counter"><span data-carousel-page></span>/<span data-carousel-pages></span></div>' }, download: { tpl: '<button data-carousel-download class="f-button" title="{{DOWNLOAD}}"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></button>' }, autoplay: { tpl: '<button data-autoplay-action="toggle" class="f-button" title="{{TOGGLE_AUTOPLAY}}"><svg><g><path d="M5 3.5 19 12 5 20.5Z"/></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>' }, thumbs: { tpl: '<button data-thumbs-action="toggle" class="f-button" title="{{TOGGLE_THUMBS}}"><svg><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1M9 21h1M14 21h1M19 21h1"/></svg></button>' } }, v), u$2 = { absolute: false, display: { left: [], middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY", "reset"], right: [] }, enabled: "auto", items: {} }, c$2 = () => {
  let a2, c2;
  function d2(e2) {
    const o2 = null == a2 ? void 0 : a2.getOptions().Toolbar;
    let n2 = (t$5(o2) ? Object.assign(Object.assign({}, u$2), o2) : u$2)[e2];
    return n2 && "function" == typeof n2 && a2 ? n2(a2) : n2;
  }
  function f2() {
    var s2;
    if (!(null == a2 ? void 0 : a2.getOptions().Toolbar)) return;
    if (!a2 || c2) return;
    const u2 = a2.getContainer();
    if (!u2) return;
    let f3 = d2("enabled");
    if (!f3) return;
    const p2 = d2("absolute"), g2 = a2.getSlides().length > 1;
    let b2 = false, m2 = false;
    for (const t2 of a2.getSlides()) t2.panzoomRef && (b2 = true), (t2.downloadSrc || "image" === t2.type && t2.src) && (m2 = true);
    const v$12 = (null === (s2 = a2.getPlugins().Thumbs) || void 0 === s2 ? void 0 : s2.isEnabled()) || false, h2 = g2 && a2.getPlugins().Autoplay || false, j2 = a2.getPlugins().Fullscreen && (document.fullscreenEnabled || document.webkitFullscreenEnabled);
    if ("auto" === f3 && (f3 = b2), !f3) return;
    c2 = u2.querySelector(".f-carousel__toolbar") || void 0, c2 || (c2 = document.createElement("div"), s$7(c2, "f-carousel__toolbar"));
    const E2 = d2("display"), y2 = r$3({}, r$1, d2("items"));
    for (const l2 of ["left", "middle", "right"]) {
      const s3 = E2[l2] || [], r2 = document.createElement("div");
      s$7(r2, `f-carousel__toolbar__column is-${l2}`);
      for (const l3 of s3) {
        let i2;
        if (t$7(l3)) {
          if ("counter" === l3 && !g2) continue;
          if ("autoplay" === l3 && !h2) continue;
          if (v[l3] && !b2) continue;
          if ("fullscreen" === l3 && !j2) continue;
          if ("thumbs" === l3 && !v$12) continue;
          if ("download" === l3 && !m2) continue;
          i2 = y2[l3];
        }
        if (t$5(l3) && (i2 = l3), i2 && i2.tpl) {
          let t2 = a2.localize(i2.tpl);
          t2 = t2.split("<svg>").join('<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24">');
          const e2 = e$7(t2);
          e2 && ("function" == typeof i2.click && a2 && e2.addEventListener("click", (t3) => {
            t3.preventDefault(), t3.stopPropagation(), "function" == typeof i2.click && a2 && i2.click(a2, t3);
          }), r2.append(e2));
        }
      }
      c2.append(r2);
    }
    if (c2.childElementCount) {
      if (p2 && s$7(c2, "is-absolute"), !c2.parentElement) {
        const t2 = d2("parentEl");
        t2 ? t2.insertAdjacentElement("afterbegin", c2) : u2.insertAdjacentElement("afterbegin", c2);
      }
      u2.contains(c2) && (s$7(u2, "has-toolbar"), p2 && s$7(u2, "has-absolute-toolbar"));
    }
  }
  return { init: function(t2) {
    a2 = t2, null == a2 || a2.on("initSlides", f2);
  }, destroy: function() {
    null == a2 || a2.off("initSlides", f2), s$6(null == a2 ? void 0 : a2.getContainer(), "has-toolbar has-absolute-toolbar"), null == c2 || c2.remove(), c2 = void 0;
  }, add: function(t2, e2) {
    r$1[t2] = e2;
  }, isEnabled: function() {
    return !!c2;
  } };
};
/*! License details at fancyapps.com/license */
const n$2 = { autoStart: true, pauseOnHover: true, showProgressbar: true, timeout: 2e3 }, o$3 = () => {
  let o2, i2, a2 = false, s2 = false, l2 = false, r2 = null;
  function u2(e2) {
    const i3 = null == o2 ? void 0 : o2.getOptions().Autoplay;
    let a3 = (t$5(i3) ? Object.assign(Object.assign({}, n$2), i3) : n$2)[e2];
    return a3 && "function" == typeof a3 && o2 ? a3(o2) : a3;
  }
  function f2() {
    clearTimeout(i2), i2 = void 0;
  }
  function g2() {
    if (!o2 || !a2 || l2 || s2 || i2 || !o2.isSettled() || function() {
      var t3;
      const e2 = (null === (t3 = null == o2 ? void 0 : o2.getPage()) || void 0 === t3 ? void 0 : t3.slides) || [];
      for (const t4 of e2) if (0 === t4.state) return true;
      return false;
    }()) return;
    !function() {
      var t3, n2, i3, a3;
      if (!o2) return;
      if (v2(), !u2("showProgressbar")) return;
      let s3 = u2("progressbarParentEl");
      !s3 && (null === (t3 = o2.getPlugins().Toolbar) || void 0 === t3 ? void 0 : t3.isEnabled()) && (s3 = o2.getContainer());
      if (!s3 && true !== (null === (n2 = o2.getPlugins().Toolbar) || void 0 === n2 ? void 0 : n2.isEnabled())) {
        const t4 = (null === (i3 = o2.getPages()[0]) || void 0 === i3 ? void 0 : i3.slides) || [], e2 = (null === (a3 = o2.getPage()) || void 0 === a3 ? void 0 : a3.slides) || [];
        1 === t4.length && 1 === e2.length && (s3 = e2[0].el);
      }
      s3 || (s3 = o2.getViewport());
      if (!s3) return;
      r2 = document.createElement("div"), s$7(r2, "f-progressbar"), s3.prepend(r2);
      const l3 = u2("timeout") || 1e3;
      r2.style.animationDuration = `${l3}ms`;
    }();
    const t2 = u2("timeout");
    i2 = setTimeout(() => {
      o2 && a2 && !s2 && (o2.isInfinite() || o2.getPageIndex() !== o2.getPages().length - 1 ? o2.next() : o2.goTo(0));
    }, t2);
  }
  function c2() {
    var t2;
    if (!o2 || o2.getPages().length < 2 || false === o2.getOptions().Autoplay) return;
    if (a2) return;
    a2 = true, o2.emit("autoplay:start", u2("timeout")), s$7(o2.getContainer(), "has-autoplay"), null === (t2 = o2.getTween()) || void 0 === t2 || t2.on("start", b2);
    const n2 = null == o2 ? void 0 : o2.getContainer();
    n2 && u2("pauseOnHover") && matchMedia("(hover: hover)").matches && (n2.addEventListener("mouseenter", E2, false), n2.addEventListener("mouseleave", w2, false)), o2.on("change", P), o2.on("settle", y2), o2.on("contentReady", p2), o2.on("panzoom:touchStart", d2), o2.on("panzoom:wheel", d2), o2.isSettled() && g2();
  }
  function d2() {
    var t2;
    if (f2(), v2(), o2) {
      if (a2) {
        o2.emit("autoplay:end"), null === (t2 = o2.getTween()) || void 0 === t2 || t2.off("start", b2);
        const e2 = o2.getContainer();
        e2 && (e2.classList.remove("has-autoplay"), e2.removeEventListener("mouseenter", E2, false), e2.removeEventListener("mouseleave", w2, false));
      }
      o2.off("change", P), o2.off("settle", y2), o2.off("contentReady", p2), o2.off("panzoom:touchStart", d2), o2.off("panzoom:wheel", d2);
    }
    a2 = false, s2 = false;
  }
  function v2() {
    r2 && (r2.remove(), r2 = null);
  }
  function m2() {
    o2 && o2.getPages().length > 1 && u2("autoStart") && c2();
  }
  function p2() {
    g2();
  }
  function h2(t2, e2) {
    const n2 = e2.target;
    n2 && !e2.defaultPrevented && "toggle" === n2.dataset.autoplayAction && O2.toggle();
  }
  function P() {
    !o2 || !(null == o2 ? void 0 : o2.isInfinite()) && o2.getPageIndex() === o2.getPages().length - 1 ? d2() : (v2(), f2());
  }
  function y2() {
    g2();
  }
  function b2() {
    f2(), v2();
  }
  function E2() {
    l2 = true, a2 && (v2(), f2());
  }
  function w2() {
    l2 = false, a2 && !s2 && (null == o2 ? void 0 : o2.isSettled()) && g2();
  }
  const O2 = { init: function(t2) {
    o2 = t2, o2.on("ready", m2), o2.on("click", h2);
  }, destroy: function() {
    d2(), null == o2 || o2.off("ready", m2), null == o2 || o2.off("click", h2), o2 = void 0;
  }, isEnabled: () => a2, pause: function() {
    s2 = true, f2();
  }, resume: function() {
    s2 = false, a2 && !l2 && g2();
  }, start() {
    c2();
  }, stop() {
    d2();
  }, toggle() {
    a2 ? d2() : c2();
  } };
  return O2;
};
/*! License details at fancyapps.com/license */
const u$1 = { Carousel: { Lazyload: { showLoading: false } }, minCount: 2, showOnStart: true, thumbTpl: '<button aria-label="Slide to #{{page}}"><img draggable="false" alt="{{alt}}" data-lazy-src="{{src}}" /></button>', type: "modern" };
let a$1;
const c$1 = () => {
  let c2, d2, f2, m2, g2, h2 = 0, v2 = 0, p2 = true;
  function b2(e2) {
    const n2 = null == c2 ? void 0 : c2.getOptions().Thumbs;
    let o2 = (t$5(n2) ? Object.assign(Object.assign({}, u$1), n2) : u$1)[e2];
    return o2 && "function" == typeof o2 && c2 ? o2(c2) : o2;
  }
  function y2() {
    if (!c2) return false;
    if (false === (null == c2 ? void 0 : c2.getOptions().Thumbs)) return false;
    let t2 = 0;
    for (const e2 of c2.getSlides()) e2.thumbSrc && t2++;
    return t2 >= b2("minCount");
  }
  function x2() {
    return "modern" === b2("type");
  }
  function S2() {
    return "scrollable" === b2("type");
  }
  function C() {
    const t2 = [], e2 = (null == c2 ? void 0 : c2.getSlides()) || [];
    for (const n2 of e2) t2.push({ index: n2.index, class: n2.thumbClass, html: T(n2) });
    return t2;
  }
  function T(t2) {
    const e2 = t2.thumb ? t2.thumb instanceof HTMLImageElement ? t2.thumb.src : t2.thumb : t2.thumbSrc || void 0, o2 = void 0 === t2.thumbAlt ? `Thumbnail #${(t2.index || 0) + 1}` : t2.thumbAlt + "";
    let i2 = b2("thumbTpl");
    return i2 = n$4(i2, "{{alt}}", o2), i2 = n$4(i2, "{{src}}", e2 + ""), i2 = n$4(i2, "{{index}}", `${t2.index || 0}`), i2 = n$4(i2, "{{page}}", `${(t2.index || 0) + 1}`), i2;
  }
  function L(t2) {
    return `<div index="${t2.index || 0}" class="f-thumbs__slide ${t2.class || ""}">${t2.html || ""}</div>`;
  }
  function E2(t2 = false) {
    var e2;
    const n2 = null == c2 ? void 0 : c2.getContainer();
    if (!c2 || !n2 || f2 || !y2()) return;
    const o2 = (null === (e2 = b2("Carousel")) || void 0 === e2 ? void 0 : e2.classes) || {};
    if (o2.container = o2.container || "f-thumbs", !f2) {
      const t3 = n2.nextElementSibling;
      (null == t3 ? void 0 : t3.classList.contains(o2.container)) && (f2 = t3);
    }
    if (!f2) {
      f2 = document.createElement("div");
      const t3 = b2("parentEl");
      t3 ? t3.insertAdjacentElement("beforeend", f2) : n2.insertAdjacentElement("afterend", f2);
    }
    s$7(f2, o2.container), s$7(f2, "f-thumbs"), s$7(f2, `is-${b2("type")}`), t2 && s$7(f2, "is-hidden");
  }
  function P() {
    if (!f2 || !S2()) return;
    m2 = document.createElement("div"), s$7(m2, "f-thumbs__viewport");
    let t2 = "";
    for (const e2 of C()) {
      "string" == typeof (e2.html || "") && (t2 += L(e2));
    }
    m2.innerHTML = t2, f2.append(m2), f2.addEventListener("click", (t3) => {
      t3.preventDefault();
      const e2 = t3.target.closest("[index]"), n2 = parseInt((null == e2 ? void 0 : e2.getAttribute("index")) || "-1");
      c2 && n2 > -1 && c2.goTo(n2);
    }), g2 = new IntersectionObserver((t3) => {
      t3.forEach((t4) => {
        t4.isIntersecting && t4.target instanceof HTMLImageElement && (t4.target.src = t4.target.getAttribute("data-lazy-src") + "", t4.target.removeAttribute("data-lazy-src"), null == g2 || g2.unobserve(t4.target));
      });
    }, { root: m2, rootMargin: "100px" }), f2.querySelectorAll("[data-lazy-src]").forEach((t3) => {
      null == g2 || g2.observe(t3);
    }), null == c2 || c2.emit("thumbs:ready");
  }
  function w2() {
    var t2;
    if (!a$1 || !c2 || !f2 || S2() || d2) return;
    const n2 = C();
    if (!n2.length) return;
    const o2 = r$3({}, { Sync: { target: c2 }, Lazyload: { preload: 1 }, slides: n2, classes: { container: "f-thumbs", viewport: "f-thumbs__viewport", slide: "f-thumbs__slide" }, center: true, fill: !x2(), infinite: false, dragFree: true, rtl: c2.getOptions().rtl || false, slidesPerPage: (t3) => {
      let e2 = 0;
      return x2() && (!function() {
        if (!x2()) return;
        if (!f2) return;
        const t4 = (t5) => f2 && parseFloat(getComputedStyle(f2).getPropertyValue("--f-thumb-" + t5)) || 0;
        h2 = t4("width"), v2 = t4("clip-width");
      }(), e2 = 4 * (h2 - v2)), t3 && t3.getTotalSlideDim() <= t3.getViewportDim() - e2 ? 1 / 0 : 1;
    } }, u$1.Carousel || {}, b2("Carousel") || {});
    d2 = a$1(f2, o2, { Sync: i$4, Lazyload: i$3 }), d2.on("ready", () => {
      s$7(f2, "is-syncing"), null == c2 || c2.emit("thumbs:ready"), x2() && (null == c2 || c2.on("render", $));
    }), d2.on("destroy", () => {
      null == c2 || c2.emit("thumbs:destroy");
    }), d2.init(), null === (t2 = d2.getGestures()) || void 0 === t2 || t2.on("start", () => {
      p2 = false;
    }), d2.on("click", (t3, e2) => {
      const n3 = e2.target;
      if (n3) {
        const t4 = n3.matches("button") ? n3 : n3.firstElementChild;
        t4 && t4.matches("button") && (e2.preventDefault(), t4.focus({ preventScroll: true }));
      }
    }), s$7(c2.getContainer(), "has-thumbs"), R2();
  }
  function j2() {
    y2() && b2("showOnStart") && (E2(), P());
  }
  function A2() {
    var t2;
    y2() && (w2(), null == c2 || c2.on("addSlide", z2), null == c2 || c2.on("removeSlide", _2), null == c2 || c2.on("click", I2), null == c2 || c2.on("refresh", q2), null === (t2 = null == c2 ? void 0 : c2.getGestures()) || void 0 === t2 || t2.on("start", M2), D2(true));
  }
  function M2() {
    var t2, e2;
    p2 = true;
    (null === (t2 = document.activeElement) || void 0 === t2 ? void 0 : t2.closest(".f-thumbs")) && (null === (e2 = document.activeElement) || void 0 === e2 || e2.blur());
  }
  function $() {
    var t2, e2;
    null == f2 || f2.classList.toggle("is-syncing", false === (null == c2 ? void 0 : c2.hasNavigated()) || (null === (t2 = null == c2 ? void 0 : c2.getTween()) || void 0 === t2 ? void 0 : t2.isRunning())), R2(), (null === (e2 = null == c2 ? void 0 : c2.getGestures()) || void 0 === e2 ? void 0 : e2.isPointerDown()) && function() {
      if (!x2()) return;
      if (!c2 || !d2) return;
      if (!p2) return;
      const t3 = d2.getTween(), e3 = d2.getPages(), n2 = c2.getPageIndex() || 0, i2 = c2.getPageProgress() || 0;
      if (!(c2 && e3 && e3[n2] && t3)) return;
      const l2 = t3.isRunning() ? t3.getCurrentValues().pos : d2.getPosition();
      if (void 0 === l2) return;
      let r2 = e3[n2].pos + i2 * (h2 - v2);
      r2 = t$6(e3[0].pos, r2, e3[e3.length - 1].pos), t3.from({ pos: l2 }).to({ pos: r2 }).start();
    }();
  }
  function O2() {
    p2 = true, D2();
  }
  function z2(t2, e2) {
    const n2 = { html: T(e2) };
    if (d2) d2.add(n2, e2.index);
    else if (m2) {
      const t3 = e$7(L(n2));
      if (t3) {
        m2.append(t3);
        const e3 = t3.querySelector("img");
        e3 && (null == g2 || g2.observe(e3));
      }
    }
  }
  function _2(t2, e2) {
    var n2;
    d2 ? d2.remove(e2.index) : m2 && (null === (n2 = m2.querySelector(`[index="${e2.index}"]`)) || void 0 === n2 || n2.remove());
  }
  function I2(t2, e2) {
    var n2;
    const o2 = e2.target;
    e2.defaultPrevented || "toggle" !== (null === (n2 = null == o2 ? void 0 : o2.dataset) || void 0 === n2 ? void 0 : n2.thumbsAction) || (f2 || (E2(true), P(), w2()), f2 && f2.classList.toggle("is-hidden"));
  }
  function q2() {
    D2();
  }
  function D2(t2 = false) {
    if (!c2 || !m2 || !S2()) return;
    const e2 = c2.getPageIndex();
    m2.querySelectorAll(".is-selected").forEach((t3) => {
      t3.classList.remove("is-selected");
    });
    const n2 = m2.querySelector(`[index="${e2}"]`);
    if (n2) {
      n2.classList.add("is-selected");
      const e3 = m2.getBoundingClientRect(), o2 = n2.getBoundingClientRect(), i2 = n2.offsetTop - m2.offsetTop - 0.5 * e3.height + 0.5 * o2.height, l2 = n2.scrollLeft - m2.scrollLeft - 0.5 * e3.width + 0.5 * o2.width;
      m2.scrollTo({ top: i2, left: l2, behavior: t2 ? "instant" : "smooth" });
    }
  }
  function R2() {
    if (!x2()) return;
    if (!c2 || !d2) return;
    const t2 = (null == d2 ? void 0 : d2.getSlides()) || [];
    let e2 = -0.5 * h2;
    for (const n2 of t2) {
      const t3 = n2.el;
      if (!t3) continue;
      let o2 = c2.getPageProgress(n2.index) || 0;
      o2 = Math.max(-1, Math.min(1, o2)), o2 > -1 && o2 < 1 && (e2 += 0.5 * h2 * (1 - Math.abs(o2))), o2 = Math.round(1e4 * o2) / 1e4, e2 = Math.round(1e4 * e2) / 1e4, t3.style.setProperty("--progress", `${Math.abs(o2)}`), t3.style.setProperty("--shift", `${(null == c2 ? void 0 : c2.isRTL()) ? -1 * e2 : e2}px`), o2 > -1 && o2 < 1 && (e2 += 0.5 * h2 * (1 - Math.abs(o2)));
    }
  }
  return { init: function(t2, e2) {
    a$1 = e2, c2 = t2, c2.on("ready", A2), c2.on("initSlides", j2), c2.on("change", O2);
  }, destroy: function() {
    var t2, e2;
    S2() && (null == c2 || c2.emit("thumbs:destroy")), null == c2 || c2.off("ready", A2), null == c2 || c2.off("initSlides", j2), null == c2 || c2.off("change", O2), null == c2 || c2.off("render", $), null == c2 || c2.off("addSlide", z2), null == c2 || c2.off("click", I2), null == c2 || c2.off("refresh", q2), null === (t2 = null == c2 ? void 0 : c2.getGestures()) || void 0 === t2 || t2.off("start", M2), null === (e2 = null == c2 ? void 0 : c2.getContainer()) || void 0 === e2 || e2.classList.remove("has-thumbs"), c2 = void 0, null == d2 || d2.destroy(), d2 = void 0, null == f2 || f2.remove(), f2 = void 0;
  }, getCarousel: function() {
    return d2;
  }, getContainer: function() {
    return f2;
  }, getType: function() {
    return b2("type");
  }, isEnabled: y2 };
};
/*! License details at fancyapps.com/license */
const o$2 = { autosize: false, iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" }, preload: false }, l$3 = () => {
  let l2;
  function n2() {
    const e2 = null == l2 ? void 0 : l2.getOptions().Html;
    return t$5(e2) ? Object.assign(Object.assign({}, o$2), e2) : o$2;
  }
  function s2(t2, e2) {
    let i2 = t2[e2];
    return void 0 === i2 && (i2 = n2()[e2]), "true" === i2 || "false" !== i2 && i2;
  }
  function r2(t2, i2) {
    let a2 = i2.type, o2 = i2.src;
    if (!a2 && t$7(o2)) {
      if ("#" === o2.charAt(0) ? a2 = "inline" : o2.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.((a)?png|avif|gif|jp(g|eg)|pjp(eg)?|jfif|svg|webp|bmp|ico|tif(f)?)((\?|#).*)?$)/i) ? a2 = "image" : o2.match(/\.(pdf)((\?|#).*)?$/i) ? a2 = "pdf" : o2.match(/\.(html|php)((\?|#).*)?$/i) && (a2 = "iframe"), !a2) {
        const t3 = o2.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i);
        t3 && (o2 = `https://maps.google.${t3[1]}/?ll=${(t3[2] ? t3[2] + "&z=" + Math.floor(parseFloat(t3[3])) + (t3[4] ? t3[4].replace(/^\//, "&") : "") : t3[4] + "").replace(/\?/, "&")}&output=${t3[4] && t3[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, a2 = "gmap");
      }
      if (!a2) {
        const t3 = o2.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i);
        t3 && (o2 = `https://maps.google.${t3[1]}/maps?q=${t3[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, a2 = "gmap");
      }
      a2 && (i2.src = o2, i2.type = a2);
    }
  }
  function d2(t2, e2) {
    "iframe" !== e2.type && "pdf" !== e2.type && "gmap" !== e2.type || function(t3) {
      const e3 = t3.el, o2 = t3.src;
      if (!l2 || !e3 || !o2) return;
      const r3 = document.createElement("iframe");
      s$7(r3, "f-iframe");
      for (const [t4, e4] of Object.entries(n2().iframeAttr || {})) r3.setAttribute(t4, e4);
      r3.onerror = () => {
        t3.state = 2, null == l2 || l2.showError(t3, "{{IFRAME_ERROR}}");
      };
      const d3 = document.createElement("div");
      if (s$7(d3, "f-html"), d3.append(r3), t3.width) {
        let e4 = `${t3.width}`;
        e4.match(/^\d+$/) && (e4 += "px"), d3.style.maxWidth = `${e4}`;
      }
      if (t3.height) {
        let e4 = `${t3.height}`;
        e4.match(/^\d+$/) && (e4 += "px"), d3.style.maxHeight = `${e4}`;
      }
      if (t3.aspectRatio) {
        const i2 = e3.getBoundingClientRect();
        d3.style.aspectRatio = `${t3.aspectRatio}`, d3.style[i2.width > i2.height ? "width" : "height"] = "auto", d3.style[i2.width > i2.height ? "maxWidth" : "maxHeight"] = "none";
      }
      t3.htmlEl = d3, t3.contentEl = r3, s$7(e3, `has-html has-iframe has-${t3.type}`), e3.prepend(d3);
      const c3 = s2(t3, "preload"), p2 = s2(t3, "autosize");
      "iframe" === t3.type && (c3 || p2) ? (t3.state = 0, l2.showLoading(t3), s$7(e3, "is-loading"), r3.onload = () => {
        if (!l2 || 1 !== l2.getState() || !r3.src.length) return;
        t3.state = 1;
        const i2 = "true" !== r3.dataset.ready;
        r3.dataset.ready = "true", function(t4) {
          const e4 = t4.contentEl, i3 = null == e4 ? void 0 : e4.parentElement, a2 = null == i3 ? void 0 : i3.style;
          let o3 = s2(t4, "autosize"), l3 = t4.width || 0, n3 = t4.height || 0;
          l3 && n3 && (o3 = false);
          if (!(e4 && i3 && a2 && o3)) return;
          try {
            const t5 = window.getComputedStyle(i3), o4 = parseFloat(t5.paddingLeft) + parseFloat(t5.paddingRight), s3 = parseFloat(t5.paddingTop) + parseFloat(t5.paddingBottom), r4 = e4.contentWindow;
            if (r4) {
              const t6 = r4.document, e5 = t6.getElementsByTagName("html")[0], i4 = t6.body;
              a2.width = "";
              const d4 = window.getComputedStyle(i4), c4 = parseFloat(d4.marginLeft) + parseFloat(d4.marginRight), p3 = i4.style.overflow || "";
              i4.style.overflow = "hidden", l3 = l3 || i4.scrollWidth + c4 + o4, a2.flex = "0 0 auto", a2.width = `${l3}px`, a2.height = `${i4.scrollHeight}px`, i4.style.overflow = p3;
              n3 = Math.max(e5.scrollHeight, Math.ceil(e5.getBoundingClientRect().height)) + s3;
            }
          } catch (t5) {
          }
          if (l3 || n3) {
            const t5 = { flex: "0 1 auto", width: "", height: "" };
            l3 && "auto" !== l3 && (t5.width = `${l3}px`), n3 && "auto" !== n3 && (t5.height = `${n3}px`), Object.assign(a2, t5);
          }
        }(t3), l2.hideLoading(t3), i2 && l2.emit("contentReady", t3), s$6(e3, "is-loading");
      }, r3.src = `${o2}`) : (r3.src = `${o2}`, l2.emit("contentReady", t3));
    }(e2);
  }
  function c2(t2, e2) {
    var i2, a2;
    "iframe" !== e2.type && "pdf" !== e2.type && "gmap" !== e2.type || (null == l2 || l2.hideError(e2), null === (i2 = e2.contentEl) || void 0 === i2 || i2.remove(), e2.contentEl = void 0, null === (a2 = e2.htmlEl) || void 0 === a2 || a2.remove(), e2.htmlEl = void 0);
  }
  return { init: function(t2) {
    l2 = t2, l2.on("addSlide", r2), l2.on("attachSlideEl", d2), l2.on("detachSlideEl", c2);
  }, destroy: function() {
    null == l2 || l2.off("addSlide", r2), null == l2 || l2.off("attachSlideEl", d2), null == l2 || l2.off("detachSlideEl", c2), l2 = void 0;
  } };
};
/*! License details at fancyapps.com/license */
const i$1 = (t2, e2 = {}) => {
  const o2 = new URL(t2), n2 = new URLSearchParams(o2.search), i2 = new URLSearchParams();
  for (const [t3, o3] of [...n2, ...Object.entries(e2)]) {
    let e3 = o3 + "";
    if ("t" === t3) {
      let t4 = e3.match(/((\d*)m)?(\d*)s?/);
      t4 && i2.set("start", 60 * parseInt(t4[2] || "0") + parseInt(t4[3] || "0") + "");
    } else i2.set(t3, e3);
  }
  let l2 = i2 + "", s2 = t2.match(/#t=((.*)?\d+s)/);
  return s2 && (l2 += `#t=${s2[1]}`), l2;
}, l$2 = { autoplay: false, html5videoTpl: `<video class="f-html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
    <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`, iframeAttr: { allow: "autoplay; fullscreen", scrolling: "no", referrerPolicy: "strict-origin-when-cross-origin", credentialless: "" }, vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 }, youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 } }, s$1 = () => {
  let s2, r2 = false;
  function c2() {
    const t2 = null == s2 ? void 0 : s2.getOptions().Video;
    return t$5(t2) ? Object.assign(Object.assign({}, l$2), t2) : l$2;
  }
  function a2() {
    var t2;
    return null === (t2 = null == s2 ? void 0 : s2.getPage()) || void 0 === t2 ? void 0 : t2.slides[0];
  }
  const d2 = (t2) => {
    var e2;
    try {
      let o2 = JSON.parse(t2.data);
      if ("https://player.vimeo.com" === t2.origin) {
        if ("ready" === o2.event) for (let o3 of Array.from((null === (e2 = null == s2 ? void 0 : s2.getContainer()) || void 0 === e2 ? void 0 : e2.getElementsByClassName("f-iframe")) || [])) o3 instanceof HTMLIFrameElement && o3.contentWindow === t2.source && (o3.dataset.ready = "true");
      } else if (t2.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === o2.event) {
        const t3 = document.getElementById(o2.id);
        t3 && (t3.dataset.ready = "true");
      }
    } catch (t3) {
    }
  };
  function m2(t2, e2) {
    const n2 = e2.src;
    if (!t$7(n2)) return;
    let l2 = e2.type;
    if (!l2 || "html5video" === l2) {
      const t3 = n2.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i);
      t3 && (l2 = "html5video", e2.html5videoFormat = e2.html5videoFormat || "video/" + ("ogv" === t3[1] ? "ogg" : t3[1]));
    }
    if (!l2 || "youtube" === l2) {
      const t3 = n2.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i);
      if (t3) {
        const o2 = Object.assign(Object.assign({}, c2().youtube), e2.youtube || {}), s3 = `www.youtube${o2.nocookie ? "-nocookie" : ""}.com`, r3 = i$1(n2, o2), a3 = encodeURIComponent(t3[2]);
        e2.videoId = a3, e2.src = `https://${s3}/embed/${a3}?${r3}`, e2.thumb = e2.thumb || `https://i.ytimg.com/vi/${a3}/mqdefault.jpg`, l2 = "youtube";
      }
    }
    if (!l2 || "vimeo" === l2) {
      const t3 = n2.match(/^.+vimeo.com\/(?:\/)?(video\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/);
      if (t3) {
        const o2 = Object.assign(Object.assign({}, c2().vimeo), e2.vimeo || {}), s3 = i$1(n2, o2), r3 = encodeURIComponent(t3[2]), a3 = t3[5] || "";
        e2.videoId = r3, e2.src = `https://player.vimeo.com/video/${r3}?${a3 ? `h=${a3}${s3 ? "&" : ""}` : ""}${s3}`, l2 = "vimeo";
      }
    }
    e2.type = l2;
  }
  function u2(e2, i2) {
    "html5video" === i2.type && function(e3) {
      const i3 = e3.el, l2 = e3.src;
      if (!s2 || !i3 || !l2) return;
      const r3 = e3.html5videoTpl || c2().html5videoTpl, a3 = e3.html5videoFormat || c2().html5videoFormat;
      if (!r3) return;
      const d3 = e3.poster || (e3.thumb && t$7(e3.thumb) ? e3.thumb : ""), m3 = e$7(r3.replace(/\{\{src\}\}/gi, l2 + "").replace(/\{\{format\}\}/gi, a3 || "").replace(/\{\{poster\}\}/gi, d3 + ""));
      if (!m3) return;
      const u3 = document.createElement("div");
      s$7(u3, "f-html"), u3.append(m3), e3.contentEl = m3, e3.htmlEl = u3, s$7(i3, `has-${e3.type}`), i3.prepend(u3), v2(e3), s2.emit("contentReady", e3);
    }(i2), "youtube" !== i2.type && "vimeo" !== i2.type || function(e3) {
      const o2 = e3.el, n2 = e3.src;
      if (!s2 || !o2 || !n2) return;
      const i3 = document.createElement("iframe");
      s$7(i3, "f-iframe"), i3.setAttribute("id", `f-iframe_${e3.videoId}`);
      for (const [t2, e4] of Object.entries(c2().iframeAttr || {})) i3.setAttribute(t2, e4);
      "youtube" === e3.type && (i3.onload = () => {
        var t2;
        1 === (null == s2 ? void 0 : s2.getState()) && (null === (t2 = i3.contentWindow) || void 0 === t2 || t2.postMessage(JSON.stringify({ event: "listening", id: i3.getAttribute("id") }), "*"));
      }), i3.onerror = () => {
        null == s2 || s2.showError(e3, "{{IFRAME_ERROR}}");
      };
      const l2 = document.createElement("div");
      s$7(l2, "f-html"), l2.append(i3), e3.contentEl = i3, e3.htmlEl = l2, s$7(o2, `has-html has-iframe has-${e3.type}`), i3.src = `${e3.src}`, o2.prepend(l2), v2(e3), s2.emit("contentReady", e3);
    }(i2);
  }
  function f2(t2, e2) {
    var o2, n2;
    "html5video" !== e2.type && "youtube" !== e2.type && "vimeo" !== e2.type || (null === (o2 = e2.contentEl) || void 0 === o2 || o2.remove(), e2.contentEl = void 0, null === (n2 = e2.htmlEl) || void 0 === n2 || n2.remove(), e2.htmlEl = void 0), e2.poller && clearTimeout(e2.poller);
  }
  function p2() {
    r2 = false;
  }
  function h2() {
    if (r2) return;
    r2 = true;
    const t2 = a2();
    (t2 && void 0 !== t2.autoplay ? t2.autoplay : c2().autoplay) && (function() {
      var t3;
      const e2 = a2(), o2 = null == e2 ? void 0 : e2.el;
      if (o2 && "html5video" === (null == e2 ? void 0 : e2.type)) try {
        const t4 = o2.querySelector("video");
        if (t4) {
          const e3 = t4.play();
          void 0 !== e3 && e3.then(() => {
          }).catch((e4) => {
            t4.muted = true, t4.play();
          });
        }
      } catch (t4) {
      }
      const n2 = null == e2 ? void 0 : e2.htmlEl;
      n2 instanceof HTMLIFrameElement && (null === (t3 = n2.contentWindow) || void 0 === t3 || t3.postMessage('{"event":"command","func":"stopVideo","args":""}', "*"));
    }(), function() {
      const t3 = a2(), e2 = null == t3 ? void 0 : t3.type;
      if (!(null == t3 ? void 0 : t3.el) || "youtube" !== e2 && "vimeo" !== e2) return;
      const o2 = () => {
        if (t3.contentEl && t3.contentEl instanceof HTMLIFrameElement && t3.contentEl.contentWindow) {
          let e3;
          if ("true" === t3.contentEl.dataset.ready) return e3 = "youtube" === t3.type ? { event: "command", func: "playVideo" } : { method: "play", value: "true" }, e3 && t3.contentEl.contentWindow.postMessage(JSON.stringify(e3), "*"), void (t3.poller = void 0);
          "youtube" === t3.type && (e3 = { event: "listening", id: t3.contentEl.getAttribute("id") }, t3.contentEl.contentWindow.postMessage(JSON.stringify(e3), "*"));
        }
        t3.poller = setTimeout(o2, 250);
      };
      o2();
    }());
  }
  function v2(t2) {
    const e2 = null == t2 ? void 0 : t2.htmlEl;
    if (t2 && e2 && ("html5video" === t2.type || "youtube" === t2.type || "vimeo" === t2.type)) {
      if (e2.style.aspectRatio = "", e2.style.width = "", e2.style.height = "", e2.style.maxWidth = "", e2.style.maxHeight = "", t2.width) {
        let o2 = `${t2.width}`;
        o2.match(/^\d+$/) && (o2 += "px"), e2.style.maxWidth = `${o2}`;
      }
      if (t2.height) {
        let o2 = `${t2.height}`;
        o2.match(/^\d+$/) && (o2 += "px"), e2.style.maxHeight = `${o2}`;
      }
      if (t2.aspectRatio) {
        const o2 = t2.aspectRatio.split("/"), n2 = parseFloat(o2[0].trim()), i2 = o2[1] ? parseFloat(o2[1].trim()) : 0, l2 = n2 && i2 ? n2 / i2 : n2;
        e2.offsetHeight;
        const s3 = e2.getBoundingClientRect(), r3 = l2 < (s3.width || 1) / (s3.height || 1);
        e2.style.aspectRatio = `${t2.aspectRatio}`, e2.style.width = r3 ? "auto" : "", e2.style.height = r3 ? "" : "auto";
      }
    }
  }
  function y2() {
    v2(a2());
  }
  return { init: function(t2) {
    s2 = t2, s2.on("addSlide", m2), s2.on("attachSlideEl", u2), s2.on("detachSlideEl", f2), s2.on("ready", h2), s2.on("change", p2), s2.on("settle", h2), s2.on("refresh", y2), window.addEventListener("message", d2);
  }, destroy: function() {
    null == s2 || s2.off("addSlide", m2), null == s2 || s2.off("attachSlideEl", u2), null == s2 || s2.off("detachSlideEl", f2), null == s2 || s2.off("ready", h2), null == s2 || s2.off("change", p2), null == s2 || s2.off("settle", h2), null == s2 || s2.off("refresh", y2), window.removeEventListener("message", d2), s2 = void 0;
  } };
};
/*! License details at fancyapps.com/license */
const n$1 = { autoStart: false, btnTpl: '<button data-fullscreen-action="toggle" class="f-button" title="{{TOGGLE_FULLSCREEN}}"><svg><g><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>' }, t = "in-fullscreen-mode", l$1 = () => {
  let l2;
  function u2(t2) {
    const u3 = null == l2 ? void 0 : l2.getOptions().Fullscreen;
    let o3 = (t$5(u3) ? Object.assign(Object.assign({}, n$1), u3) : n$1)[t2];
    return o3 && "function" == typeof o3 && l2 ? o3(l2) : o3;
  }
  function o2() {
    var e2;
    null === (e2 = null == l2 ? void 0 : l2.getPlugins().Toolbar) || void 0 === e2 || e2.add("fullscreen", { tpl: u2("btnTpl") });
  }
  function c2() {
    if (u2("autoStart")) {
      const e2 = s2();
      e2 && a2(e2);
    }
  }
  function i2(e2, n2) {
    const t2 = n2.target;
    t2 && !n2.defaultPrevented && "toggle" === t2.dataset.fullscreenAction && d2();
  }
  function s2() {
    return u2("el") || (null == l2 ? void 0 : l2.getContainer()) || void 0;
  }
  function r2() {
    const e2 = document;
    return e2.fullscreenEnabled ? !!e2.fullscreenElement : !!e2.webkitFullscreenEnabled && !!e2.webkitFullscreenElement;
  }
  function a2(e2) {
    const n2 = document;
    let l3;
    return e2 || (e2 = n2.documentElement), n2.fullscreenEnabled ? l3 = e2.requestFullscreen() : n2.webkitFullscreenEnabled && (l3 = e2.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)), l3 && l3.then(() => {
      e2.classList.add(t);
    }), l3;
  }
  function f2() {
    const e2 = document;
    let n2;
    return e2.fullscreenEnabled ? n2 = e2.fullscreenElement && e2.exitFullscreen() : e2.webkitFullscreenEnabled && (n2 = e2.webkitFullscreenElement && e2.webkitExitFullscreen()), n2 && n2.then(() => {
      var e3;
      null === (e3 = s2()) || void 0 === e3 || e3.classList.remove(t);
    }), n2;
  }
  function d2() {
    if (r2()) f2();
    else {
      const e2 = s2();
      e2 && a2(e2);
    }
  }
  return { init: function(e2) {
    l2 = e2, l2.on("initPlugins", o2), l2.on("ready", c2), l2.on("click", i2);
  }, destroy: function() {
    null == l2 || l2.off("initPlugins", o2), null == l2 || l2.off("ready", c2), null == l2 || l2.off("click", i2);
  }, exit: f2, inFullscreen: r2, request: a2, toggle: d2 };
};
/*! License details at fancyapps.com/license */
let o$1, n, r = false, i = false, l = false, s = false;
const a = () => {
  const t2 = new URL(document.URL).hash, e2 = t2.slice(1).split("-"), o2 = e2[e2.length - 1], n2 = o2 && /^\+?\d+$/.test(o2) && parseInt(e2.pop() || "1", 10) || 1;
  return { urlHash: t2, urlSlug: e2.join("-"), urlIndex: n2 };
}, u = () => {
  const t2 = null == o$1 ? void 0 : o$1.getInstance(), e2 = null == t2 ? void 0 : t2.getState();
  return !(!t2 || 0 !== e2 && 1 !== e2);
}, c = () => {
  if (!o$1) return;
  if (u()) return;
  const { urlSlug: t2, urlIndex: e2 } = a();
  if (!t2) return;
  let n2 = document.querySelector(`[data-slug="${t2}"]`);
  n2 && o$1.fromTriggerEl(n2), u() || (n2 = document.querySelectorAll(`[data-fancybox="${t2}"]`)[e2 - 1], n2 && o$1.fromTriggerEl(n2, { startIndex: e2 - 1 })), u() && n2 && !n2.closest("[inert]") && n2.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
}, d = (t2) => {
  const o2 = t2.getOptions().Hash, n2 = t2.getSlide();
  return n2 && (n2.slug || n2.fancybox || (t$5(o2) ? o2.slug : "")) || "";
}, g = (t2) => {
  var e2, o2;
  const n2 = d(t2), r2 = t2.getSlide();
  if (!r2 || !n2) return "";
  let i2 = parseInt(r2.index + "", 10) + 1, l2 = r2.slug ? `#${r2.slug}` : `#${n2}-${i2}`;
  return ((null === (o2 = null === (e2 = t2.getCarousel()) || void 0 === e2 ? void 0 : e2.getPages()) || void 0 === o2 ? void 0 : o2.length) || 0) < 2 && (l2 = `#${n2}`), l2;
}, f = () => {
  if (!o$1) return;
  if (l) return;
  const t2 = null == o$1 ? void 0 : o$1.getInstance(), n2 = null == t2 ? void 0 : t2.getCarousel(), { urlSlug: r2, urlIndex: u2 } = a(), d2 = null == t2 ? void 0 : t2.getOptions().Hash;
  if (false !== d2) {
    if (t2 && 1 === t2.getState() && n2) {
      const o2 = n2.getSlides();
      for (const t3 of o2 || []) if (t3.slug === r2 || (t3.fancybox === r2 || t$5(d2) && d2.slug === r2) && t3.index === u2 - 1) return i = false, void n2.goTo(t3.index);
      s = true, t2.close(), s = false;
    }
    c();
  }
}, h = () => {
  o$1 && (n = setTimeout(() => {
    r = true, c(), r = false;
  }, 300), window.addEventListener("hashchange", f, false));
}, w = () => {
  let t2, e2 = "auto", o2 = "";
  function u2() {
    var n2;
    if (!t2 || !t2.isTopMost() || false === t2.getOptions().Hash) return;
    if (r) {
      const e3 = t2.getOptions().sync;
      e3 && e3.goTo((null === (n2 = null == t2 ? void 0 : t2.getCarousel()) || void 0 === n2 ? void 0 : n2.getPageIndex()) || 0, { transition: false, tween: false });
    }
    const l2 = t2.getCarousel();
    if (!l2) return;
    if (!t2.getSlide()) return;
    const s2 = d(t2);
    if (!s2) return;
    const { urlHash: u3, urlSlug: f3 } = a(), h2 = g(t2);
    u3 !== h2 && (o2 = u3), history.scrollRestoration && (e2 = history.scrollRestoration, history.scrollRestoration = "manual"), l2.on("change", c2);
    const w2 = s2 !== f3;
    try {
      window.history[w2 ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + h2), w2 && (i = true);
    } catch (t3) {
    }
  }
  function c2() {
    if (!t2 || !t2.isTopMost() || false === t2.getOptions().Hash) return;
    if (!t2.getSlide()) return;
    if (!d(t2)) return;
    const e3 = g(t2);
    l = true;
    try {
      window.history.replaceState({}, document.title, window.location.pathname + window.location.search + e3);
    } catch (t3) {
    }
    l = false;
  }
  function f2() {
    var e3;
    if (!t2 || !t2.isTopMost() || false === t2.getOptions().Hash || s) return;
    if (d(t2)) {
      l = true;
      try {
        i && !function() {
          if (window.parent === window) return false;
          try {
            var t3 = window.frameElement;
          } catch (e4) {
            t3 = null;
          }
          return null === t3 ? "data:" === location.protocol : t3.hasAttribute("sandbox");
        }() && "IFRAME" !== (null === (e3 = document.activeElement) || void 0 === e3 ? void 0 : e3.nodeName) ? window.history.back() : window.history.replaceState({}, document.title, window.location.pathname + window.location.search + o2);
      } catch (t3) {
      }
      l = false;
    }
  }
  return { init: function(e3) {
    clearTimeout(n), t2 = e3, t2.on("ready", u2), t2.on("close", f2);
  }, destroy: function() {
    null == t2 || t2.off("ready", u2), null == t2 || t2.off("close", f2);
    const o3 = null == t2 ? void 0 : t2.getCarousel();
    o3 && o3.off("change", c2), t2 = void 0, history.scrollRestoration && e2 && (history.scrollRestoration = e2);
  } };
};
w.getInfoFromURL = a, w.startFromUrl = c, w.setup = function(e2) {
  o$1 || (o$1 = e2, e$1() && (/complete|interactive|loaded/.test(document.readyState) ? h() : document.addEventListener("DOMContentLoaded", h)));
};
/*! License details at fancyapps.com/license */
const o = Object.assign(Object.assign({}, o$6), { CLOSE: "Close", NEXT: "Next", PREV: "Previous", MODAL: "You can close this modal content with the ESC key", ELEMENT_NOT_FOUND: "HTML Element Not Found", IFRAME_ERROR: "Error Loading Page", NO_CAPTION: "No Caption", TOGGLE_SIDEBAR: "Toggle sidebar" });
/*! License details at fancyapps.com/license */
const A = '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path d="M19.286 4.714 4.714 19.286M4.714 4.714l14.572 14.572" /></svg></button>';
c$2().add("close", { tpl: A });
const k = (e2) => {
  e2.cancelable && e2.preventDefault();
};
const R = (e2 = null, t2 = "", n2) => {
  if (!e2 || !e2.parentElement || !t2) return void (n2 && n2());
  O(e2);
  const o2 = (i2) => {
    i2.target === e2 && e2.dataset.animationName && (e2.removeEventListener("animationend", o2), delete e2.dataset.animationName, n2 && n2(), e2.classList.remove(t2));
  };
  e2.dataset.animationName = t2, e2.addEventListener("animationend", o2), s$7(e2, t2);
}, O = (e2) => {
  e2 && e2.dispatchEvent(new CustomEvent("animationend", { bubbles: false, cancelable: true, currentTarget: e2 }));
};
var _;
!function(e2) {
  e2[e2.Init = 0] = "Init", e2[e2.Ready = 1] = "Ready", e2[e2.Closing = 2] = "Closing", e2[e2.Destroyed = 3] = "Destroyed";
}(_ || (_ = {}));
const I = { ajax: null, backdropClick: "close", Carousel: {}, closeButton: "auto", closeButtonTpl: A, closeExisting: false, delegateEl: void 0, dragToClose: true, fadeEffect: true, groupAll: false, groupAttr: "data-fancybox", hideClass: "f-fadeOut", hideScrollbar: true, id: void 0, idle: false, keyboard: { Escape: "close", Delete: "close", Backspace: "close", PageUp: "next", PageDown: "prev", ArrowUp: "prev", ArrowDown: "next", ArrowRight: "next", ArrowLeft: "prev" }, l10n: o, mainClass: "", mainStyle: {}, mainTpl: '<dialog class="fancybox__dialog">\n    <div class="fancybox__container" tabindex="0" aria-label="{{MODAL}}">\n      <div class="fancybox__backdrop"></div>\n      <div class="fancybox__carousel"></div>\n    </div>\n  </dialog>', modal: true, on: {}, parentEl: void 0, placeFocusBack: true, showClass: "f-zoomInUp", startIndex: 0, sync: void 0, theme: "dark", triggerEl: void 0, triggerEvent: void 0, zoomEffect: true }, z = /* @__PURE__ */ new Map();
let H = 0;
const B = "with-fancybox", D = () => {
  let r2, C, M2, A2, D2, q2, N2, V = _.Init, W = Object.assign({}, I), $ = -1, K = {}, U = [], X = false, G = true, Y = 0;
  function Z(e2, ...t2) {
    let n2 = W[e2];
    return n2 && "function" == typeof n2 ? n2(Re, ...t2) : n2;
  }
  function J(e2, t2 = []) {
    const n2 = Z("l10n") || {};
    e2 = String(e2).replace(/\{\{(\w+)\}\}/g, (e3, t3) => n2[t3] || e3);
    for (let n3 = 0; n3 < t2.length; n3++) e2 = e2.split(t2[n3][0]).join(t2[n3][1]);
    return e2 = e2.replace(/\{\{(.*?)\}\}/g, (e3, t3) => t3);
  }
  const Q = /* @__PURE__ */ new Map();
  function ee(e2, ...t2) {
    const n2 = [...Q.get(e2) || []];
    for (const [t3, o2] of Object.entries(W.on || {})) (t3 === e2 || t3.split(" ").indexOf(e2) > -1) && n2.push(o2);
    for (const e3 of n2) e3 && "function" == typeof e3 && e3(Re, ...t2);
    "*" !== e2 && ee("*", e2, ...t2);
  }
  function te() {
    s$6(C, "is-revealing");
    try {
      if (document.activeElement === r2) {
        ((null == C ? void 0 : C.querySelector("[autofocus]")) || C).focus();
      }
    } catch (e2) {
    }
  }
  function ne(e2, n2) {
    var o2;
    ve(n2), de(), null === (o2 = n2.el) || void 0 === o2 || o2.addEventListener("click", ie), "inline" !== n2.type && "clone" !== n2.type || function(e3) {
      if (!A2 || !e3 || !e3.el) return;
      let n3 = null;
      if (t$7(e3.src)) {
        const t2 = e3.src.split("#", 2).pop();
        n3 = t2 ? document.getElementById(t2) : null;
      }
      if (n3) {
        if (s$7(n3, "f-html"), "clone" === e3.type || n3.closest(".fancybox__carousel")) {
          n3 = n3.cloneNode(true);
          const t2 = n3.dataset.animationName;
          t2 && (n3.classList.remove(t2), delete n3.dataset.animationName);
          let o3 = n3.getAttribute("id");
          o3 = o3 ? `${o3}--clone` : `clone-${$}-${e3.index}`, n3.setAttribute("id", o3);
        } else if (n3.parentNode) {
          const t2 = document.createElement("div");
          t2.inert = true, n3.parentNode.insertBefore(t2, n3), e3.placeholderEl = t2;
        }
        e3.htmlEl = n3, s$7(e3.el, "has-html"), e3.el.prepend(n3), n3.classList.remove("hidden"), "none" === n3.style.display && (n3.style.display = ""), "none" === getComputedStyle(n3).getPropertyValue("display") && (n3.style.display = n3.dataset.display || "flex"), null == A2 || A2.emit("contentReady", e3);
      } else null == A2 || A2.showError(e3, "{{ELEMENT_NOT_FOUND}}");
    }(n2), "ajax" === n2.type && function(e3) {
      const t2 = e3.el;
      if (!t2) return;
      if (e3.htmlEl || e3.xhr) return;
      null == A2 || A2.showLoading(e3), e3.state = 0;
      const n3 = new XMLHttpRequest();
      n3.onreadystatechange = function() {
        if (n3.readyState === XMLHttpRequest.DONE && V === _.Ready) if (null == A2 || A2.hideLoading(e3), e3.state = 1, 200 === n3.status) {
          let o4 = n3.responseText + "", i2 = null, s2 = null;
          if (e3.filter) {
            const t3 = document.createElement("div");
            t3.innerHTML = o4, s2 = t3.querySelector(e3.filter + "");
          }
          s2 && s2 instanceof HTMLElement ? i2 = s2 : (i2 = document.createElement("div"), i2.innerHTML = o4), i2.classList.add("f-html"), e3.htmlEl = i2, t2.classList.add("has-html"), t2.classList.add("has-ajax"), t2.prepend(i2), null == A2 || A2.emit("contentReady", e3);
        } else null == A2 || A2.showError(e3);
      };
      const o3 = Z("ajax") || null;
      n3.open(o3 ? "POST" : "GET", e3.src + ""), n3.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n3.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n3.send(o3), e3.xhr = n3;
    }(n2);
  }
  function oe(e2, t2) {
    var n2;
    ye(t2), null === (n2 = t2.el) || void 0 === n2 || n2.removeEventListener("click", ie), "inline" !== t2.type && "clone" !== t2.type || function(e3) {
      const t3 = e3.htmlEl, n3 = e3.placeholderEl;
      t3 && ("none" !== getComputedStyle(t3).getPropertyValue("display") && (t3.style.display = "none"), t3.offsetHeight);
      n3 && (t3 && n3.parentNode && n3.parentNode.insertBefore(t3, n3), n3.remove());
      e3.htmlEl = void 0, e3.placeholderEl = void 0;
    }(t2), t2.xhr && (t2.xhr.abort(), t2.xhr = void 0);
  }
  function ie(e2) {
    if (!be()) return;
    if (V !== _.Ready) return k(e2), void e2.stopPropagation();
    if (e2.defaultPrevented) return;
    if (!f$1.isClickAllowed()) return;
    const t2 = e2.composedPath()[0];
    t2.closest(".fancybox__carousel") && t2.classList.contains("fancybox__slide") && fe(e2);
  }
  function se() {
    G = false, C && A2 && C.classList.remove("is-revealing"), de();
    const e2 = Z("sync");
    if (A2 && e2) {
      const t2 = e2.getPageIndex(A2.getPageIndex()) || 0;
      e2.goTo(t2, { transition: false, tween: false });
    }
  }
  function le() {
    var e2;
    !function() {
      const e3 = null == A2 ? void 0 : A2.getViewport();
      if (!Z("dragToClose") || !A2 || !e3) return;
      if (D2 = f$1(e3).init(), !D2) return;
      let t3 = false, n2 = 0, o2 = 0, s2 = {}, l2 = 1;
      function r3() {
        var e4, t4;
        null == q2 || q2.spring({ clamp: true, mass: 1, tension: 0 === o2 ? 140 : 960, friction: 17, restDelta: 0.1, restSpeed: 0.1, maxSpeed: 1 / 0 }).from({ y: n2 }).to({ y: o2 }).start();
        const i2 = (null === (e4 = null == A2 ? void 0 : A2.getViewport()) || void 0 === e4 ? void 0 : e4.getBoundingClientRect().height) || 0, s3 = null === (t4 = Ee()) || void 0 === t4 ? void 0 : t4.panzoomRef;
        if (i2 && s3) if (0 === o2) s3.execute(v$1.Reset);
        else {
          const e5 = t$3(Math.abs(n2), 0, 0.33 * i2, l2, 0.77 * l2, false);
          s3.execute(v$1.ZoomTo, { scale: e5 });
        }
      }
      const c2 = (e4) => {
        var t4;
        const n3 = e4.srcEvent, o3 = n3.target;
        return A2 && !(e$4(n3) && (null === (t4 = n3.touches) || void 0 === t4 ? void 0 : t4.length) > 1) && o3 && !n$7(o3);
      };
      q2 = c$4().on("step", (t4) => {
        if (C && e3 && V === _.Ready) {
          const o3 = e3.getBoundingClientRect().height;
          n2 = Math.min(o3, Math.max(-1 * o3, t4.y));
          const i2 = t$3(Math.abs(n2), 0, 0.65 * o3, 1, 0.2, true);
          C.style.setProperty("--f-drag-opacity", i2 + ""), C.style.setProperty("--f-drag-offset", n2 + "px");
        }
      }), D2.on("start", function() {
        t3 || (null == q2 || q2.pause(), o2 = n2);
      }).on("panstart", (e4) => {
        var n3, o3;
        if (!t3 && c2(e4) && "y" === e4.axis) {
          k(e4.srcEvent), t3 = true, Ce(), null === (n3 = null == A2 ? void 0 : A2.getViewport()) || void 0 === n3 || n3.classList.add("is-dragging");
          const i2 = null === (o3 = Ee()) || void 0 === o3 ? void 0 : o3.panzoomRef;
          if (i2) {
            l2 = i2.getTransform().scale || 1;
            const e5 = i2.getOptions();
            s2 = Object.assign({}, e5), e5.bounds = false, e5.gestures = false;
          }
        } else t3 = false;
      }).on("pan", function(e4) {
        t3 && c2(e4) && (k(e4.srcEvent), e4.srcEvent.stopPropagation(), "y" === e4.axis && (o2 += e4.deltaY, r3()));
      }).on("end", (e4) => {
        var i2, l3, a2;
        if (null === (i2 = null == A2 ? void 0 : A2.getViewport()) || void 0 === i2 || i2.classList.remove("is-dragging"), t3) {
          const t4 = null === (l3 = Ee()) || void 0 === l3 ? void 0 : l3.panzoomRef;
          if (t4) {
            null === (a2 = t4.getTween()) || void 0 === a2 || a2.end();
            const e5 = t4.getOptions();
            e5.bounds = s2.bounds || false, e5.gestures = s2.gestures || false;
          }
          c2(e4) && "y" === e4.axis && (Math.abs(e4.velocityY) > 5 || Math.abs(n2) > 50) && Me(e4.srcEvent, "f-throwOut" + (e4.velocityY > 0 ? "Down" : "Up"));
        }
        t3 = false, V === _.Ready && 0 !== n2 && (o2 = 0, r3());
      });
    }(), document.body.addEventListener("click", pe), document.body.addEventListener("keydown", ge, { passive: false, capture: true }), de(), je();
    const t2 = Z("sync");
    A2 && t2 && (null === (e2 = t2.getTween()) || void 0 === e2 || e2.start()), he(Ee());
  }
  function re() {
    (null == A2 ? void 0 : A2.canGoNext()) ? je() : Te();
  }
  function ae(e2, t2) {
    ve(t2);
  }
  function ce(e2, t2) {
    ve(t2), he(t2);
  }
  function ue() {
    var e2;
    const t2 = null == A2 ? void 0 : A2.getPlugins().Thumbs;
    s$5(C, "has-thumbs", (null == t2 ? void 0 : t2.isEnabled()) || false), s$5(C, "has-vertical-thumbs", !!t2 && ("scrollable" === t2.getType() || true === (null === (e2 = t2.getCarousel()) || void 0 === e2 ? void 0 : e2.isVertical())));
  }
  function de() {
    if (C) {
      const e2 = (null == A2 ? void 0 : A2.getPages()) || [], t2 = (null == A2 ? void 0 : A2.getPageIndex()) || 0;
      for (const e3 of C.querySelectorAll("[data-fancybox-index]")) e3.innerHTML = t2 + "";
      for (const e3 of C.querySelectorAll("[data-fancybox-page]")) e3.innerHTML = t2 + 1 + "";
      for (const t3 of C.querySelectorAll("[data-fancybox-pages]")) t3.innerHTML = e2.length + "";
    }
  }
  function fe(e2) {
    if (!!e2.composedPath()[0].closest("[data-fancybox-close]")) return void Me(e2);
    if (ee("backdropClick", e2), e2.defaultPrevented) return;
    Z("backdropClick") && Me(e2);
  }
  function me() {
    Pe();
  }
  function ge(e2) {
    if (!be()) return;
    if (V !== _.Ready) return;
    const t2 = e2.key, o2 = Z("keyboard");
    if (!o2) return;
    if (e2.ctrlKey || e2.altKey || e2.shiftKey) return;
    const i2 = e2.composedPath()[0];
    if (!n$8(i2)) return;
    if ("Escape" !== t2 && ((e3) => {
      const t3 = ["input", "textarea", "select", "option", "video", "iframe", "[contenteditable]", "[data-selectable]", "[data-draggable]"].join(",");
      return e3.matches(t3) || e3.closest(t3);
    })(i2)) return;
    if (ee("keydown", e2), e2.defaultPrevented) return;
    const s2 = o2[t2];
    if (s2) switch (s2) {
      case "close":
        Me(e2);
        break;
      case "next":
        k(e2), null == A2 || A2.next();
        break;
      case "prev":
        k(e2), null == A2 || A2.prev();
    }
  }
  function pe(e2) {
    if (!be()) return;
    if (V !== _.Ready) return;
    if (Pe(), e2.defaultPrevented) return;
    const t2 = e2.composedPath()[0], n2 = !!t2.closest("[data-fancybox-close]"), o2 = t2.classList.contains("fancybox__backdrop");
    (n2 || o2) && fe(e2);
  }
  function ve(e2) {
    var t2;
    const { el: n2, htmlEl: i2, panzoomRef: s2, closeButtonEl: l2 } = e2, r3 = s2 ? s2.getWrapper() : i2;
    if (!n2 || !n2.parentElement || !r3) return;
    let a2 = Z("closeButton");
    if ("auto" === a2 && (a2 = true !== (null === (t2 = null == A2 ? void 0 : A2.getPlugins().Toolbar) || void 0 === t2 ? void 0 : t2.isEnabled())), a2) {
      if (!l2) {
        const t3 = e$7(J(Z("closeButtonTpl")));
        t3 && (s$7(t3, "is-close-button"), e2.closeButtonEl = r3.insertAdjacentElement("afterbegin", t3), s$7(n2, "has-close-btn"));
      }
    } else ye(e2);
  }
  function ye(e2) {
    e2.closeButtonEl && (e2.closeButtonEl.remove(), e2.closeButtonEl = void 0), s$6(e2.el, "has-close-btn");
  }
  function he(e2) {
    if (!(G && A2 && 1 === A2.getState() && e2 && e2.index === A2.getOptions().initialPage && e2.el && e2.el.parentElement)) return;
    if (void 0 !== e2.state && 1 !== e2.state) return;
    G = false;
    const t2 = e2.panzoomRef, n2 = null == t2 ? void 0 : t2.getTween(), o2 = Z("zoomEffect") && n2 ? we(e2) : void 0;
    if (t2 && n2 && o2) {
      const { x: e3, y: i3, scale: s2 } = t2.getStartPosition();
      return void n2.spring({ tension: 215, friction: 25, restDelta: 1e-3, restSpeed: 1e-3, maxSpeed: 1 / 0 }).from(o2).to({ x: e3, y: i3, scale: s2 }).start();
    }
    const i2 = (null == t2 ? void 0 : t2.getContent()) || e2.htmlEl;
    i2 && R(i2, Z("showClass", e2));
  }
  function be() {
    var e2;
    return (null === (e2 = F.getInstance()) || void 0 === e2 ? void 0 : e2.getId()) === $;
  }
  function Ee() {
    var e2;
    return null === (e2 = null == A2 ? void 0 : A2.getPage()) || void 0 === e2 ? void 0 : e2.slides[0];
  }
  function xe() {
    const e2 = Ee();
    return e2 ? e2.triggerEl || Z("triggerEl") : void 0;
  }
  function we(e2) {
    var t2, n2;
    const o2 = e2.thumbEl;
    if (!o2 || !((e3) => {
      const t3 = e3.getBoundingClientRect(), n3 = e3.closest("[style]"), o3 = null == n3 ? void 0 : n3.parentElement;
      if (n3 && n3.style.transform && o3) {
        const e4 = o3.getBoundingClientRect();
        if (t3.left < e4.left || t3.left > e4.left + e4.width - t3.width) return false;
        if (t3.top < e4.top || t3.top > e4.top + e4.height - t3.height) return false;
      }
      const i3 = Math.max(document.documentElement.clientHeight, window.innerHeight), s3 = Math.max(document.documentElement.clientWidth, window.innerWidth);
      return !(t3.bottom < 0 || t3.top - i3 >= 0 || t3.right < 0 || t3.left - s3 >= 0);
    })(o2)) return;
    const i2 = null === (n2 = null === (t2 = e2.panzoomRef) || void 0 === t2 ? void 0 : t2.getWrapper()) || void 0 === n2 ? void 0 : n2.getBoundingClientRect(), s2 = null == i2 ? void 0 : i2.width, l2 = null == i2 ? void 0 : i2.height;
    if (!s2 || !l2) return;
    const r3 = o2.getBoundingClientRect();
    let a2 = r3.width, c2 = r3.height, u2 = r3.left, d2 = r3.top;
    if (!r3 || !a2 || !c2) return;
    if (o2 instanceof HTMLImageElement) {
      const e3 = window.getComputedStyle(o2).getPropertyValue("object-fit");
      if ("contain" === e3 || "scale-down" === e3) {
        const { width: t3, height: n3 } = ((e4, t4, n4, o3, i3 = "contain") => {
          if ("contain" === i3 || e4 > n4 || t4 > o3) {
            const i4 = n4 / e4, s3 = o3 / t4, l3 = Math.min(i4, s3);
            e4 *= l3, t4 *= l3;
          }
          return { width: e4, height: t4 };
        })(o2.naturalWidth, o2.naturalHeight, a2, c2, e3);
        u2 += 0.5 * (a2 - t3), d2 += 0.5 * (c2 - n3), a2 = t3, c2 = n3;
      }
    }
    if (Math.abs(s2 / l2 - a2 / c2) > 0.1) return;
    return { x: u2 + 0.5 * a2 - (i2.left + 0.5 * s2), y: d2 + 0.5 * c2 - (i2.top + 0.5 * l2), scale: a2 / s2 };
  }
  function Le() {
    N2 && clearTimeout(N2), N2 = void 0, document.removeEventListener("mousemove", me);
  }
  function je() {
    if (X) return;
    if (N2) return;
    const e2 = Z("idle");
    e2 && (N2 = setTimeout(Se, e2));
  }
  function Se() {
    C && (Le(), s$7(C, "is-idle"), document.addEventListener("mousemove", me), X = true);
  }
  function Pe() {
    X && (Te(), je());
  }
  function Te() {
    Le(), null == C || C.classList.remove("is-idle"), X = false;
  }
  function Ce() {
    const e2 = xe();
    var t2;
    !e2 || (t2 = e2.getBoundingClientRect()).bottom > 0 && t2.right > 0 && t2.left < (window.innerWidth || document.documentElement.clientWidth) && t2.top < (window.innerHeight || document.documentElement.clientHeight) || e2.closest("[inert]") || e2.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
  }
  function Me(e2, t2) {
    var n2, o2, i2, s2, r3;
    if (V === _.Closing || V === _.Destroyed) return;
    const a2 = new Event("shouldClose", { bubbles: true, cancelable: true });
    if (ee("shouldClose", a2, e2), a2.defaultPrevented) return;
    if (Le(), e2) {
      if (e2.defaultPrevented) return;
      k(e2), e2.stopPropagation(), e2.stopImmediatePropagation();
    }
    if (V = _.Closing, null == q2 || q2.pause(), null == D2 || D2.destroy(), A2) {
      null === (n2 = A2.getGestures()) || void 0 === n2 || n2.destroy(), null === (o2 = A2.getTween()) || void 0 === o2 || o2.pause();
      for (const e3 of A2.getSlides()) {
        const t3 = e3.panzoomRef;
        t3 && (r$3(t3.getOptions(), { clickAction: false, dblClickAction: false, wheelAction: false, bounds: false, minScale: 0, maxScale: 1 / 0 }), null === (i2 = t3.getGestures()) || void 0 === i2 || i2.destroy(), null === (s2 = t3.getTween()) || void 0 === s2 || s2.pause());
      }
    }
    const c2 = null == A2 ? void 0 : A2.getPlugins();
    null === (r3 = null == c2 ? void 0 : c2.Autoplay) || void 0 === r3 || r3.stop();
    const u2 = null == c2 ? void 0 : c2.Fullscreen;
    u2 && u2.inFullscreen() ? Promise.resolve(u2.exit()).then(() => {
      setTimeout(() => {
        Ae(e2, t2);
      }, 150);
    }) : Ae(e2, t2);
  }
  function Ae(e2, t2) {
    var n2, o2;
    if (V !== _.Closing) return;
    ee("close", e2), G = false, document.body.removeEventListener("click", pe), document.body.removeEventListener("keydown", ge, { passive: false, capture: true }), Z("placeFocusBack") && Ce();
    const i2 = document.activeElement;
    i2 && (null == r2 ? void 0 : r2.contains(i2)) && i2.blur(), Z("fadeEffect") && (null == C || C.classList.remove("is-ready"), null == C || C.classList.add("is-hiding")), null == C || C.classList.add("is-closing");
    const s2 = Ee(), l2 = null == s2 ? void 0 : s2.el, a2 = null == s2 ? void 0 : s2.panzoomRef, c2 = null === (n2 = null == s2 ? void 0 : s2.panzoomRef) || void 0 === n2 ? void 0 : n2.getTween(), u2 = t2 || Z("hideClass");
    let d2 = false, m2 = false;
    if (A2 && s2 && l2 && a2 && c2) {
      let e3;
      if (Z("zoomEffect") && 1 === s2.state && (e3 = we(s2)), e3) {
        d2 = true;
        const t3 = () => {
          e3 = we(s2), e3 ? c2.to(Object.assign(Object.assign({}, y$1), e3)) : ke();
        };
        a2.on("refresh", () => {
          t3();
        }), c2.easing(c$4.Easings.EaseOut).duration(350).from(Object.assign({}, a2.getTransform())).to(Object.assign(Object.assign({}, y$1), e3)).start(), (null == l2 ? void 0 : l2.getAnimations()) && (l2.style.animationPlayState = "paused", requestAnimationFrame(() => {
          t3();
        }));
      }
    }
    const g2 = (null == s2 ? void 0 : s2.htmlEl) || (null === (o2 = null == s2 ? void 0 : s2.panzoomRef) || void 0 === o2 ? void 0 : o2.getWrapper());
    g2 && O(g2), !d2 && u2 && g2 && (m2 = true, R(g2, u2, () => {
      ke();
    })), d2 || m2 ? setTimeout(() => {
      ke();
    }, 350) : ke();
  }
  function ke() {
    var e2, t2, n2, o2, i2;
    if (V === _.Destroyed) return;
    V = _.Destroyed;
    const l2 = xe();
    ee("destroy"), null === (t2 = null === (e2 = Z("sync")) || void 0 === e2 ? void 0 : e2.getPlugins().Autoplay) || void 0 === t2 || t2.resume(), null === (o2 = null === (n2 = Z("sync")) || void 0 === n2 ? void 0 : n2.getPlugins().Autoscroll) || void 0 === o2 || o2.resume(), r2 instanceof HTMLDialogElement && r2.close(), null === (i2 = null == A2 ? void 0 : A2.getContainer()) || void 0 === i2 || i2.classList.remove("is-idle"), null == A2 || A2.destroy();
    for (const e3 of Object.values(K)) null == e3 || e3.destroy();
    if (K = {}, null == r2 || r2.remove(), r2 = void 0, C = void 0, A2 = void 0, z.delete($), !z.size && (t$2(false), document.documentElement.classList.remove(B), Z("placeFocusBack") && l2 && !l2.closest("[inert]"))) try {
      null == l2 || l2.focus({ preventScroll: true });
    } catch (e3) {
    }
  }
  const Re = { close: Me, destroy: ke, getCarousel: function() {
    return A2;
  }, getContainer: function() {
    return C;
  }, getId: function() {
    return $;
  }, getOptions: function() {
    return W;
  }, getPlugins: function() {
    return K;
  }, getSlide: function() {
    return Ee();
  }, getState: function() {
    return V;
  }, init: function(t2 = [], n2 = {}) {
    V !== _.Init && (Re.destroy(), V = _.Init), W = r$3({}, I, n2), $ = Z("id") || "fancybox-" + ++H;
    const a2 = z.get($);
    if (a2 && a2.destroy(), z.set($, Re), ee("init"), function() {
      for (const [e2, t3] of Object.entries(Object.assign(Object.assign({}, F.Plugins), W.plugins || {}))) if (e2 && !K[e2] && t3 instanceof Function) {
        const n3 = t3();
        n3.init(Re), K[e2] = n3;
      }
      ee("initPlugins");
    }(), function(e2 = []) {
      ee("initSlides", e2), U = [...e2];
    }(t2), function() {
      const t3 = Z("parentEl") || document.body;
      if (!(t3 && t3 instanceof HTMLElement)) return;
      const n3 = J(Z("mainTpl") || "");
      if (r2 = e$7(n3) || void 0, !r2) return;
      if (C = r2.querySelector(".fancybox__container"), !(C && C instanceof HTMLElement)) return;
      const l2 = Z("mainClass");
      l2 && s$7(C, l2);
      const a3 = Z("mainStyle");
      if (a3 && t$5(a3)) for (const [e2, t4] of Object.entries(a3)) C.style.setProperty(e2, t4);
      const u2 = Z("theme"), d2 = "auto" === u2 ? window.matchMedia("(prefers-color-scheme:light)").matches : "light" === u2;
      C.setAttribute("theme", d2 ? "light" : "dark"), r2.setAttribute("id", `${$}`), r2.addEventListener("keydown", (e2) => {
        "Escape" === e2.key && k(e2);
      }), r2.addEventListener("wheel", (e2) => {
        const t4 = e2.target;
        let n4 = Z("wheel", e2);
        t4.closest(".f-thumbs") && (n4 = "slide");
        const o2 = "slide" === n4, s2 = [-e2.deltaX || 0, -e2.deltaY || 0, -e2.detail || 0].reduce(function(e3, t5) {
          return Math.abs(t5) > Math.abs(e3) ? t5 : e3;
        }), l3 = Math.max(-1, Math.min(1, s2)), r3 = Date.now();
        Y && r3 - Y < 300 ? o2 && k(e2) : (Y = r3, ee("wheel", e2, l3), e2.defaultPrevented || ("close" === n4 ? Me(e2) : "slide" === n4 && A2 && !n$7(t4) && (k(e2), A2[l3 > 0 ? "prev" : "next"]())));
      }, { capture: true, passive: false }), r2.addEventListener("cancel", (e2) => {
        Me(e2);
      }), t3.append(r2), 1 === z.size && (Z("hideScrollbar") && t$2(true), document.documentElement.classList.add(B));
      ee("initLayout"), r2 instanceof HTMLDialogElement && (Z("modal") ? r2.showModal() : r2.show());
    }(), function() {
      if (M2 = (null == r2 ? void 0 : r2.querySelector(".fancybox__carousel")) || void 0, !M2) return;
      M2.fancybox = Re;
      const e2 = r$3({}, { Autoplay: { autoStart: false, pauseOnHover: false, progressbarParentEl: (e3) => {
        const t3 = e3.getContainer();
        return (null == t3 ? void 0 : t3.querySelector(".f-carousel__toolbar [data-autoplay-action]")) || t3;
      } }, Fullscreen: { el: C }, Toolbar: { absolute: true, items: { counter: { tpl: '<div class="f-counter"><span data-fancybox-page></span>/<span data-fancybox-pages></span></div>' } }, display: { left: ["counter"], right: ["toggleFull", "autoplay", "fullscreen", "thumbs", "close"] } }, Video: { autoplay: true }, Thumbs: { minCount: 2, Carousel: { classes: { container: "fancybox__thumbs" } } }, classes: { container: "fancybox__carousel", viewport: "fancybox__viewport", slide: "fancybox__slide" }, spinnerTpl: '<div class="f-spinner" data-fancybox-close></div>', dragFree: false, slidesPerPage: 1, plugins: { Sync: i$4, Arrows: l$4, Lazyload: i$3, Zoomable: s$4, Html: l$3, Video: s$1, Autoplay: o$3, Fullscreen: l$1, Thumbs: c$1, Toolbar: c$2 } }, Z("Carousel") || {}, { slides: U, enabled: true, initialPage: Z("startIndex") || 0, l10n: Z("l10n") });
      A2 = E(M2, e2), ee("initCarousel", A2), A2.on("*", (e3, t3, ...n3) => {
        ee(`Carousel.${t3}`, e3, ...n3);
      }), A2.on("attachSlideEl", ne), A2.on("detachSlideEl", oe), A2.on("contentLoading", ae), A2.on("contentReady", ce), A2.on("ready", le), A2.on("change", se), A2.on("settle", re), A2.on("thumbs:ready", ue), A2.on("thumbs:destroy", ue), A2.init();
    }(), r2 && C) {
      if (Z("closeExisting")) for (const [e2, t3] of z.entries()) e2 !== $ && t3.close();
      Z("fadeEffect") ? (setTimeout(() => {
        te();
      }, 500), s$7(C, "is-revealing")) : te(), C.classList.add("is-ready"), V = _.Ready, ee("ready");
    }
  }, isCurrentSlide: function(e2) {
    const t2 = Ee();
    return !(!e2 || !t2) && t2.index === e2.index;
  }, isTopMost: function() {
    return be();
  }, localize: J, off: function(e2, t2) {
    return Q.has(e2) && Q.set(e2, Q.get(e2).filter((e3) => e3 !== t2)), Re;
  }, on: function(e2, t2) {
    return Q.set(e2, [...Q.get(e2) || [], t2]), Re;
  }, toggleIdle(e2) {
    (X || true === e2) && Se(), X && false !== e2 || Te();
  } };
  return Re;
};
function q() {
  for (const e2 of Object.values(F.Plugins)) {
    const t2 = e2.setup;
    "function" == typeof t2 && t2(F);
  }
}
function N(e2, t2 = {}) {
  var n2, o2, i2;
  if (!(e2 && e2 instanceof Element)) return;
  let s2, r2, a2, c2, u2 = {};
  for (const [t3, n3] of F.openers) if (t3.contains(e2)) for (const [o3, i3] of n3) {
    let n4;
    if (o3) {
      for (const i4 of t3.querySelectorAll(o3)) if (i4.contains(e2)) {
        n4 = i4;
        break;
      }
      if (!n4) continue;
    }
    for (const [o4, d3] of i3) {
      let i4 = null;
      try {
        i4 = e2.closest(o4);
      } catch (e3) {
      }
      i4 && (r2 = t3, a2 = n4, s2 = i4, c2 = o4, r$3(u2, d3 || {}));
    }
  }
  if (!r2 || !c2 || !s2) return;
  const d2 = r$3({}, I, t2, u2, { triggerEl: s2 });
  let f2 = [].slice.call((a2 || r2).querySelectorAll(c2));
  const m2 = s2.closest(".f-carousel"), g2 = null == m2 ? void 0 : m2.carousel;
  if (g2 && (!a2 || !m2.contains(a2))) {
    const e3 = [];
    for (const t3 of null == g2 ? void 0 : g2.getSlides()) {
      const n3 = t3.el;
      n3 && (n3.matches(c2) ? e3.push(n3) : e3.push(...[].slice.call(n3.querySelectorAll(c2))));
    }
    e3.length && (f2 = [...e3], null === (n2 = g2.getPlugins().Autoplay) || void 0 === n2 || n2.pause(), null === (o2 = g2.getPlugins().Autoscroll) || void 0 === o2 || o2.pause(), d2.sync = g2);
  }
  if (false === d2.groupAll) {
    const e3 = d2.groupAttr, t3 = e3 && s2 ? s2.getAttribute(`${e3}`) : "";
    f2 = e3 && t3 ? f2.filter((n3) => n3.getAttribute(`${e3}`) === t3) : [s2];
  }
  if (!f2.length) return;
  null === (i2 = d2.triggerEvent) || void 0 === i2 || i2.preventDefault();
  const p2 = F.getInstance(), v2 = null == p2 ? void 0 : p2.getState();
  if (p2 && (v2 === _.Init || v2 === _.Ready)) {
    const e3 = p2.getOptions().triggerEl;
    if (e3 && f2.indexOf(e3) > -1) return;
  }
  return Object.assign({}, d2.Carousel || {}).rtl && (f2 = f2.reverse()), s2 && void 0 === t2.startIndex && (d2.startIndex = f2.indexOf(s2)), F.fromNodes(f2, d2);
}
const F = { Plugins: { Hash: w }, version: "6.1.11", openers: /* @__PURE__ */ new Map(), bind: function(e2, n2, o2, i2) {
  if (!e$1()) return;
  let s2 = document.body, l2 = null, a2 = "[data-fancybox]", c2 = {};
  e2 instanceof Element && (s2 = e2), t$7(e2) && t$7(n2) ? (l2 = e2, a2 = n2) : t$7(n2) && t$7(o2) ? (l2 = n2, a2 = o2) : t$7(n2) ? a2 = n2 : t$7(e2) && (a2 = e2), "object" == typeof n2 && (c2 = n2 || {}), "object" == typeof o2 && (c2 = o2 || {}), "object" == typeof i2 && (c2 = i2 || {}), function(e3, t2, n3, o3 = {}) {
    if (!(e3 && e3 instanceof Element && n3)) return;
    const i3 = F.openers.get(e3) || /* @__PURE__ */ new Map(), s3 = i3.get(t2) || /* @__PURE__ */ new Map();
    s3.set(n3, o3), i3.set(t2, s3), F.openers.set(e3, i3), 1 === i3.size && e3.addEventListener("click", F.fromEvent), q();
  }(s2, l2, a2, c2);
}, close: function(e2 = true, ...t2) {
  if (e2) for (const e3 of z.values()) e3.close(...t2);
  else {
    const e3 = F.getInstance();
    e3 && e3.close(...t2);
  }
}, destroy: function() {
  let e2;
  for (; e2 = F.getInstance(); ) e2.destroy();
  for (const e3 of F.openers.keys()) e3.removeEventListener("click", F.fromEvent);
  F.openers.clear();
}, fromEvent: function(e2) {
  if (e2.defaultPrevented) return;
  if (e2.button && 0 !== e2.button) return;
  if (e2.ctrlKey || e2.metaKey || e2.shiftKey) return;
  let t2 = e2.composedPath()[0];
  const n2 = { triggerEvent: e2 };
  if (t2.closest(".fancybox__container.is-hiding")) return k(e2), void e2.stopPropagation();
  const o2 = t2.closest("[data-fancybox-delegate]") || void 0;
  if (o2) {
    const e3 = o2.dataset.fancyboxDelegate || "", i2 = document.querySelectorAll(`[data-fancybox="${e3}"]`), s2 = parseInt(o2.dataset.fancyboxIndex || "", 10) || 0;
    t2 = i2[s2] || i2[0], r$3(n2, { delegateEl: o2, startIndex: s2 });
  }
  return N(t2, n2);
}, fromNodes: function(e2, t2) {
  t2 = r$3({}, I, t2 || {});
  const n2 = [], o2 = (e3) => e3 instanceof HTMLImageElement ? e3 : e3 instanceof HTMLElement ? e3.querySelector("img:not([aria-hidden])") : void 0;
  for (const i2 of e2) {
    const s2 = i2.dataset || {}, l2 = t2.delegateEl && e2.indexOf(i2) === t2.startIndex ? t2.delegateEl : void 0, r2 = o2(l2) || o2(i2) || void 0, a2 = s2.src || i2.getAttribute("href") || i2.getAttribute("currentSrc") || i2.getAttribute("src") || void 0, c2 = s2.thumb || s2.thumbSrc || (null == r2 ? void 0 : r2.getAttribute("currentSrc")) || (null == r2 ? void 0 : r2.getAttribute("src")) || (null == r2 ? void 0 : r2.dataset.lazySrc) || void 0, u2 = { src: a2, alt: s2.alt || (null == r2 ? void 0 : r2.getAttribute("alt")) || void 0, thumbSrc: c2, thumbEl: r2, triggerEl: i2, delegateEl: l2 };
    for (const e3 in s2) {
      let t3 = s2[e3] + "";
      t3 = "false" !== t3 && ("true" === t3 || t3), u2[e3] = t3;
    }
    n2.push(u2);
  }
  return F.show(n2, t2);
}, fromSelector: function(e2, n2, o2, i2) {
  if (!e$1()) return;
  let s2 = document.body, l2 = null, a2 = "[data-fancybox]", c2 = {};
  e2 instanceof Element && (s2 = e2), t$7(e2) && t$7(n2) ? (l2 = e2, a2 = n2) : t$7(n2) && t$7(o2) ? (l2 = n2, a2 = o2) : t$7(n2) ? a2 = n2 : t$7(e2) && (a2 = e2), "object" == typeof n2 && (c2 = n2 || {}), "object" == typeof o2 && (c2 = o2 || {}), "object" == typeof i2 && (c2 = i2 || {});
  for (const [e3, t2] of F.openers) for (const [n3, o3] of t2) for (const [t3, i3] of o3) if (e3 === s2 && n3 === l2) {
    const e4 = s2.querySelector((n3 ? `${n3} ` : "") + a2);
    if (e4 && e4.matches(t3)) return F.fromTriggerEl(e4, c2);
  }
}, fromTriggerEl: N, getCarousel: function() {
  var e2;
  return (null === (e2 = F.getInstance()) || void 0 === e2 ? void 0 : e2.getCarousel()) || void 0;
}, getDefaults: function() {
  return I;
}, getInstance: function(e2) {
  if (e2) {
    const t2 = z.get(e2);
    return t2 && t2.getState() !== _.Destroyed ? t2 : void 0;
  }
  return Array.from(z.values()).reverse().find((e3) => {
    if (e3.getState() !== _.Destroyed) return e3;
  }) || void 0;
}, getSlide: function() {
  var e2;
  return (null === (e2 = F.getInstance()) || void 0 === e2 ? void 0 : e2.getSlide()) || void 0;
}, show: function(e2 = [], t2 = {}) {
  return q(), D().init(e2, t2);
}, unbind: function(e2, n2, o2) {
  if (!e$1()) return;
  let i2 = document.body, s2 = null, l2 = "[data-fancybox]";
  e2 instanceof Element && (i2 = e2), t$7(e2) && t$7(n2) ? (s2 = e2, l2 = n2) : t$7(n2) && t$7(o2) ? (s2 = n2, l2 = o2) : t$7(n2) ? l2 = n2 : t$7(e2) && (l2 = e2), function(e3, t2, n3) {
    if (!(e3 && e3 instanceof Element && n3)) return;
    const o3 = F.openers.get(e3) || /* @__PURE__ */ new Map(), i3 = o3.get(t2) || /* @__PURE__ */ new Map();
    i3 && n3 && i3.delete(n3), i3.size && n3 || o3.delete(t2), o3.size || (F.openers.delete(e3), e3.removeEventListener("click", F.fromEvent));
  }(i2, s2, l2);
} };
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var airDatepicker$1 = { exports: {} };
var airDatepicker = airDatepicker$1.exports;
var hasRequiredAirDatepicker;
function requireAirDatepicker() {
  if (hasRequiredAirDatepicker) return airDatepicker$1.exports;
  hasRequiredAirDatepicker = 1;
  (function(module, exports) {
    !function(e2, t2) {
      module.exports = t2();
    }(airDatepicker, function() {
      return function() {
        var e2 = { d: function(t3, i3) {
          for (var s3 in i3) e2.o(i3, s3) && !e2.o(t3, s3) && Object.defineProperty(t3, s3, { enumerable: true, get: i3[s3] });
        }, o: function(e3, t3) {
          return Object.prototype.hasOwnProperty.call(e3, t3);
        } }, t2 = {};
        e2.d(t2, { default: function() {
          return R2;
        } });
        var i2 = { days: "days", months: "months", years: "years", day: "day", month: "month", year: "year", eventChangeViewDate: "changeViewDate", eventChangeCurrentView: "changeCurrentView", eventChangeFocusDate: "changeFocusDate", eventChangeSelectedDate: "changeSelectedDate", eventChangeTime: "changeTime", eventChangeLastSelectedDate: "changeLastSelectedDate", actionSelectDate: "selectDate", actionUnselectDate: "unselectDate", cssClassWeekend: "-weekend-" }, s2 = { classes: "", inline: false, locale: { days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"], daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"], daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"], today: "Сегодня", clear: "Очистить", dateFormat: "dd.MM.yyyy", timeFormat: "HH:mm", firstDay: 1 }, startDate: /* @__PURE__ */ new Date(), firstDay: "", weekends: [6, 0], dateFormat: "", altField: "", altFieldDateFormat: "T", toggleSelected: true, keyboardNav: true, selectedDates: false, container: "", isMobile: false, visible: false, position: "bottom left", offset: 12, view: i2.days, minView: i2.days, showOtherMonths: true, selectOtherMonths: true, moveToOtherMonthsOnSelect: true, showOtherYears: true, selectOtherYears: true, moveToOtherYearsOnSelect: true, minDate: "", maxDate: "", disableNavWhenOutOfRange: true, multipleDates: false, multipleDatesSeparator: ", ", range: false, dynamicRange: true, buttons: false, monthsField: "monthsShort", showEvent: "focus", autoClose: false, fixedHeight: false, prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>', nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>', navTitles: { days: "MMMM, <i>yyyy</i>", months: "yyyy", years: "yyyy1 - yyyy2" }, timepicker: false, onlyTimepicker: false, dateTimeSeparator: " ", timeFormat: "", minHours: 0, maxHours: 24, minMinutes: 0, maxMinutes: 59, hoursStep: 1, minutesStep: 1, onSelect: false, onChangeViewDate: false, onChangeView: false, onRenderCell: false, onShow: false, onHide: false, onClickDayName: false };
        function a2(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
          return "string" == typeof e3 ? t3.querySelector(e3) : e3;
        }
        function n2() {
          let { tagName: e3 = "div", className: t3 = "", innerHtml: i3 = "", id: s3 = "", attrs: a3 = {} } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n3 = document.createElement(e3);
          return t3 && n3.classList.add(...t3.split(" ")), s3 && (n3.id = s3), i3 && (n3.innerHTML = i3), a3 && r2(n3, a3), n3;
        }
        function r2(e3, t3) {
          for (let [i3, s3] of Object.entries(t3)) void 0 !== s3 && e3.setAttribute(i3, s3);
          return e3;
        }
        function h2(e3) {
          return new Date(e3.getFullYear(), e3.getMonth() + 1, 0).getDate();
        }
        function o2(e3) {
          let t3 = e3.getHours(), { hours: i3, dayPeriod: s3 } = l2(t3);
          return { year: e3.getFullYear(), month: e3.getMonth(), fullMonth: e3.getMonth() + 1 < 10 ? "0" + (e3.getMonth() + 1) : e3.getMonth() + 1, date: e3.getDate(), fullDate: e3.getDate() < 10 ? "0" + e3.getDate() : e3.getDate(), day: e3.getDay(), hours: t3, fullHours: d2(t3), hours12: i3, dayPeriod: s3, fullHours12: d2(i3), minutes: e3.getMinutes(), fullMinutes: e3.getMinutes() < 10 ? "0" + e3.getMinutes() : e3.getMinutes() };
        }
        function l2(e3) {
          return { dayPeriod: e3 > 11 ? "pm" : "am", hours: e3 % 12 == 0 ? 12 : e3 % 12 };
        }
        function d2(e3) {
          return e3 < 10 ? "0" + e3 : e3;
        }
        function c2(e3) {
          let t3 = 10 * Math.floor(e3.getFullYear() / 10);
          return [t3, t3 + 9];
        }
        function u2() {
          let e3 = [];
          for (var t3 = arguments.length, i3 = new Array(t3), s3 = 0; s3 < t3; s3++) i3[s3] = arguments[s3];
          return i3.forEach((t4) => {
            if ("object" == typeof t4) for (let i4 in t4) t4[i4] && e3.push(i4);
            else t4 && e3.push(t4);
          }), e3.join(" ");
        }
        function p2(e3, t3) {
          let s3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i2.days;
          if (!e3 || !t3) return false;
          let a3 = o2(e3), n3 = o2(t3);
          return { [i2.days]: a3.date === n3.date && a3.month === n3.month && a3.year === n3.year, [i2.months]: a3.month === n3.month && a3.year === n3.year, [i2.years]: a3.year === n3.year }[s3];
        }
        function m2(e3, t3, i3) {
          let s3 = g2(e3, false).getTime(), a3 = g2(t3, false).getTime();
          return i3 ? s3 >= a3 : s3 > a3;
        }
        function v2(e3, t3) {
          return !m2(e3, t3, true);
        }
        function g2(e3) {
          let t3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i3 = new Date(e3.getTime());
          return "boolean" != typeof t3 || t3 || function(e4) {
            e4.setHours(0, 0, 0, 0);
          }(i3), i3;
        }
        function D2(e3, t3, i3) {
          e3.length ? e3.forEach((e4) => {
            e4.addEventListener(t3, i3);
          }) : e3.addEventListener(t3, i3);
        }
        function y2(e3, t3) {
          return !(!e3 || e3 === document || e3 instanceof DocumentFragment) && (e3.matches(t3) ? e3 : y2(e3.parentNode, t3));
        }
        function f2(e3, t3, i3) {
          return e3 > i3 ? i3 : e3 < t3 ? t3 : e3;
        }
        function w2(e3) {
          for (var t3 = arguments.length, i3 = new Array(t3 > 1 ? t3 - 1 : 0), s3 = 1; s3 < t3; s3++) i3[s3 - 1] = arguments[s3];
          return i3.filter((e4) => e4).forEach((t4) => {
            for (let [i4, s4] of Object.entries(t4)) if (void 0 !== s4 && "[object Object]" === s4.toString()) {
              let t5 = void 0 !== e3[i4] ? e3[i4].toString() : void 0, a3 = s4.toString(), n3 = Array.isArray(s4) ? [] : {};
              e3[i4] = e3[i4] ? t5 !== a3 ? n3 : e3[i4] : n3, w2(e3[i4], s4);
            } else e3[i4] = s4;
          }), e3;
        }
        function b2(e3) {
          let t3 = e3;
          return e3 instanceof Date || ("string" == typeof e3 && /^\d{4}-\d{2}-\d{2}$/.test(e3) && (e3 += "T00:00:00"), t3 = new Date(e3)), isNaN(t3.getTime()) && (console.log(`Unable to convert value "${e3}" to Date object`), t3 = false), t3;
        }
        function $(e3) {
          let t3 = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
          return new RegExp("(^|>|" + t3 + ")(" + e3 + ")($|<|" + t3 + ")", "g");
        }
        function k2(e3, t3, i3) {
          return (t3 = function(e4) {
            var t4 = function(e5, t5) {
              if ("object" != typeof e5 || null === e5) return e5;
              var i4 = e5[Symbol.toPrimitive];
              if (void 0 !== i4) {
                var s3 = i4.call(e5, "string");
                if ("object" != typeof s3) return s3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e5);
            }(e4);
            return "symbol" == typeof t4 ? t4 : String(t4);
          }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e3[t3] = i3, e3;
        }
        class C {
          constructor() {
            let { type: e3, date: t3, dp: i3, opts: s3, body: a3 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            k2(this, "focus", () => {
              this.$cell.classList.add("-focus-"), this.focused = true;
            }), k2(this, "removeFocus", () => {
              this.$cell.classList.remove("-focus-"), this.focused = false;
            }), k2(this, "select", () => {
              this.$cell.classList.add("-selected-"), this.selected = true;
            }), k2(this, "removeSelect", () => {
              this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), this.selected = false;
            }), k2(this, "onChangeSelectedDate", () => {
              this.isDisabled || (this._handleSelectedStatus(), this.opts.range && this._handleRangeStatus());
            }), k2(this, "onChangeFocusDate", (e4) => {
              if (!e4) return void (this.focused && this.removeFocus());
              let t4 = p2(e4, this.date, this.type);
              t4 ? this.focus() : !t4 && this.focused && this.removeFocus(), this.opts.range && this._handleRangeStatus();
            }), k2(this, "render", () => (this.$cell.innerHTML = this._getHtml(), this._handleClasses(), this.$cell)), this.type = e3, this.singleType = this.type.slice(0, -1), this.date = t3, this.dp = i3, this.opts = s3, this.body = a3, this.customData = false, this.init();
          }
          init() {
            var e3, t3;
            let { onRenderCell: i3 } = this.opts;
            i3 && (this.customData = i3({ date: this.date, cellType: this.singleType, datepicker: this.dp })), this._createElement(), this._bindDatepickerEvents(), null !== (e3 = this.customData) && void 0 !== e3 && e3.disabled ? this.dp.disableDate(this.date) : false === (null === (t3 = this.customData) || void 0 === t3 ? void 0 : t3.disabled) && this.dp.enableDate(this.date);
          }
          _bindDatepickerEvents() {
            this.dp.on(i2.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i2.eventChangeFocusDate, this.onChangeFocusDate);
          }
          unbindDatepickerEvents() {
            this.dp.off(i2.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i2.eventChangeFocusDate, this.onChangeFocusDate);
          }
          _createElement() {
            var e3;
            let { year: t3, month: i3, fullMonth: s3, date: a3, fullDate: r3 } = o2(this.date), h3 = (null === (e3 = this.customData) || void 0 === e3 ? void 0 : e3.attrs) || {};
            this.$cell = n2({ attrs: { "data-year": t3, "data-month": i3, "data-date": a3, "data-iso-date": `${t3}-${s3}-${r3}`, ...h3 } }), this.$cell.adpCell = this;
          }
          _getClassName() {
            var e3;
            let t3 = /* @__PURE__ */ new Date(), { selectOtherMonths: s3, selectOtherYears: a3 } = this.opts, { minDate: n3, maxDate: r3, isDateDisabled: h3 } = this.dp, { day: l3 } = o2(this.date), d3 = this._isOutOfMinMaxRange(), c3 = h3(this.date), m3 = u2("air-datepicker-cell", `-${this.singleType}-`, { "-current-": p2(t3, this.date, this.type), "-min-date-": n3 && p2(n3, this.date, this.type), "-max-date-": r3 && p2(r3, this.date, this.type) }), v3 = "";
            switch (this.type) {
              case i2.days:
                v3 = u2({ "-weekend-": this.dp.isWeekend(l3), "-other-month-": this.isOtherMonth, "-disabled-": this.isOtherMonth && !s3 || d3 || c3 });
                break;
              case i2.months:
                v3 = u2({ "-disabled-": d3 });
                break;
              case i2.years:
                v3 = u2({ "-other-decade-": this.isOtherDecade, "-disabled-": d3 || this.isOtherDecade && !a3 });
            }
            return u2(m3, v3, null === (e3 = this.customData) || void 0 === e3 ? void 0 : e3.classes).split(" ");
          }
          _getHtml() {
            var e3;
            let { year: t3, month: s3, date: a3 } = o2(this.date), { showOtherMonths: n3, showOtherYears: r3 } = this.opts;
            if (null !== (e3 = this.customData) && void 0 !== e3 && e3.html) return this.customData.html;
            switch (this.type) {
              case i2.days:
                return !n3 && this.isOtherMonth ? "" : a3;
              case i2.months:
                return this.dp.locale[this.opts.monthsField][s3];
              case i2.years:
                return !r3 && this.isOtherDecade ? "" : t3;
            }
          }
          _isOutOfMinMaxRange() {
            let { minDate: e3, maxDate: t3 } = this.dp, { type: s3, date: a3 } = this, { month: n3, year: r3, date: h3 } = o2(a3), l3 = s3 === i2.days, d3 = s3 === i2.years, c3 = !!e3 && new Date(r3, d3 ? e3.getMonth() : n3, l3 ? h3 : e3.getDate()), u3 = !!t3 && new Date(r3, d3 ? t3.getMonth() : n3, l3 ? h3 : t3.getDate());
            return e3 && t3 ? v2(c3, e3) || m2(u3, t3) : e3 ? v2(c3, e3) : t3 ? m2(u3, t3) : void 0;
          }
          destroy() {
            this.unbindDatepickerEvents();
          }
          _handleRangeStatus() {
            const { selectedDates: e3, focusDate: t3, rangeDateTo: i3, rangeDateFrom: s3 } = this.dp, a3 = e3.length;
            if (this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), !a3) return;
            let n3 = s3, r3 = i3;
            if (1 === a3 && t3) {
              const i4 = m2(t3, e3[0]);
              n3 = i4 ? e3[0] : t3, r3 = i4 ? t3 : e3[0];
            }
            let h3 = u2({ "-in-range-": n3 && r3 && (o3 = this.date, l3 = n3, d3 = r3, m2(o3, l3) && v2(o3, d3)), "-range-from-": n3 && p2(this.date, n3, this.type), "-range-to-": r3 && p2(this.date, r3, this.type) });
            var o3, l3, d3;
            h3 && this.$cell.classList.add(...h3.split(" "));
          }
          _handleSelectedStatus() {
            let e3 = this.dp._checkIfDateIsSelected(this.date, this.type);
            e3 ? this.select() : !e3 && this.selected && this.removeSelect();
          }
          _handleInitialFocusStatus() {
            p2(this.dp.focusDate, this.date, this.type) && this.focus();
          }
          _handleClasses() {
            this.$cell.setAttribute("class", ""), this._handleInitialFocusStatus(), this.dp.hasSelectedDates && (this._handleSelectedStatus(), this.dp.opts.range && this._handleRangeStatus()), this.$cell.classList.add(...this._getClassName());
          }
          get isDisabled() {
            return this.$cell.matches(".-disabled-");
          }
          get isOtherMonth() {
            return this.dp.isOtherMonth(this.date);
          }
          get isOtherDecade() {
            return this.dp.isOtherDecade(this.date);
          }
        }
        function _2(e3, t3, i3) {
          return (t3 = function(e4) {
            var t4 = function(e5, t5) {
              if ("object" != typeof e5 || null === e5) return e5;
              var i4 = e5[Symbol.toPrimitive];
              if (void 0 !== i4) {
                var s3 = i4.call(e5, "string");
                if ("object" != typeof s3) return s3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e5);
            }(e4);
            return "symbol" == typeof t4 ? t4 : String(t4);
          }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e3[t3] = i3, e3;
        }
        let M2 = { [i2.days]: `<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i2.days}-"></div>`, [i2.months]: `<div class="air-datepicker-body--cells -${i2.months}-"></div>`, [i2.years]: `<div class="air-datepicker-body--cells -${i2.years}-"></div>` };
        const S2 = ".air-datepicker-cell";
        class T {
          constructor(e3) {
            let { dp: t3, type: s3, opts: a3 } = e3;
            _2(this, "handleClick", (e4) => {
              let t4 = e4.target.closest(S2).adpCell;
              if (t4.isDisabled) return;
              if (!this.dp.isMinViewReached) return void this.dp.down();
              let i3 = this.dp._checkIfDateIsSelected(t4.date, t4.type);
              i3 ? this.dp._handleAlreadySelectedDates(i3, t4.date) : this.dp.selectDate(t4.date);
            }), _2(this, "handleDayNameClick", (e4) => {
              let t4 = e4.target.getAttribute("data-day-index");
              this.opts.onClickDayName({ dayIndex: Number(t4), datepicker: this.dp });
            }), _2(this, "onChangeCurrentView", (e4) => {
              e4 !== this.type ? this.hide() : (this.show(), this.render());
            }), _2(this, "onMouseOverCell", (e4) => {
              let t4 = y2(e4.target, S2);
              this.dp.setFocusDate(!!t4 && t4.adpCell.date);
            }), _2(this, "onMouseOutCell", () => {
              this.dp.setFocusDate(false);
            }), _2(this, "onClickBody", (e4) => {
              let { onClickDayName: t4 } = this.opts, i3 = e4.target;
              i3.closest(S2) && this.handleClick(e4), t4 && i3.closest(".air-datepicker-body--day-name") && this.handleDayNameClick(e4);
            }), _2(this, "onMouseDown", (e4) => {
              this.pressed = true;
              let t4 = y2(e4.target, S2), i3 = t4 && t4.adpCell;
              p2(i3.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = true), p2(i3.date, this.dp.rangeDateTo) && (this.rangeToFocused = true);
            }), _2(this, "onMouseMove", (e4) => {
              if (!this.pressed || !this.dp.isMinViewReached) return;
              e4.preventDefault();
              let t4 = y2(e4.target, S2), i3 = t4 && t4.adpCell, { selectedDates: s4, rangeDateTo: a4, rangeDateFrom: n3 } = this.dp;
              if (!i3 || i3.isDisabled) return;
              let { date: r3 } = i3;
              if (2 === s4.length) {
                if (this.rangeFromFocused && !m2(r3, a4)) {
                  let { hours: e5, minutes: t5 } = o2(n3);
                  r3.setHours(e5), r3.setMinutes(t5), this.dp.rangeDateFrom = r3, this.dp.replaceDate(n3, r3);
                }
                if (this.rangeToFocused && !v2(r3, n3)) {
                  let { hours: e5, minutes: t5 } = o2(a4);
                  r3.setHours(e5), r3.setMinutes(t5), this.dp.rangeDateTo = r3, this.dp.replaceDate(a4, r3);
                }
              }
            }), _2(this, "onMouseUp", () => {
              this.pressed = false, this.rangeFromFocused = false, this.rangeToFocused = false;
            }), _2(this, "onChangeViewDate", (e4, t4) => {
              if (!this.isVisible) return;
              let s4 = c2(e4), a4 = c2(t4);
              switch (this.dp.currentView) {
                case i2.days:
                  if (p2(e4, t4, i2.months)) return;
                  break;
                case i2.months:
                  if (p2(e4, t4, i2.years)) return;
                  break;
                case i2.years:
                  if (s4[0] === a4[0] && s4[1] === a4[1]) return;
              }
              this.render();
            }), _2(this, "render", () => {
              this.destroyCells(), this._generateCells(), this.cells.forEach((e4) => {
                this.$cells.appendChild(e4.render());
              });
            }), this.dp = t3, this.type = s3, this.opts = a3, this.cells = [], this.$el = "", this.pressed = false, this.isVisible = true, this.init();
          }
          init() {
            this._buildBaseHtml(), this.type === i2.days && this.renderDayNames(), this.render(), this._bindEvents(), this._bindDatepickerEvents();
          }
          _bindEvents() {
            let { range: e3, dynamicRange: t3 } = this.opts;
            D2(this.$el, "mouseover", this.onMouseOverCell), D2(this.$el, "mouseout", this.onMouseOutCell), D2(this.$el, "click", this.onClickBody), e3 && t3 && (D2(this.$el, "mousedown", this.onMouseDown), D2(this.$el, "mousemove", this.onMouseMove), D2(window.document, "mouseup", this.onMouseUp));
          }
          _bindDatepickerEvents() {
            this.dp.on(i2.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i2.eventChangeCurrentView, this.onChangeCurrentView);
          }
          _buildBaseHtml() {
            this.$el = n2({ className: `air-datepicker-body -${this.type}-`, innerHtml: M2[this.type] }), this.$names = a2(".air-datepicker-body--day-names", this.$el), this.$cells = a2(".air-datepicker-body--cells", this.$el);
          }
          _getDayNamesHtml() {
            let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay, t3 = "", s3 = this.dp.isWeekend, { onClickDayName: a3 } = this.opts, n3 = e3, r3 = 0;
            for (; r3 < 7; ) {
              let e4 = n3 % 7;
              t3 += `<div class="${u2("air-datepicker-body--day-name", { [i2.cssClassWeekend]: s3(e4), "-clickable-": !!a3 })}" data-day-index='${e4}'>${this.dp.locale.daysMin[e4]}</div>`, r3++, n3++;
            }
            return t3;
          }
          renderDayNames() {
            this.$names.innerHTML = this._getDayNamesHtml();
          }
          _generateCell(e3) {
            let { type: t3, dp: i3, opts: s3 } = this;
            return new C({ type: t3, dp: i3, opts: s3, date: e3, body: this });
          }
          _generateCells() {
            T.getDatesFunction(this.type)(this.dp, (e3) => {
              this.cells.push(this._generateCell(e3));
            });
          }
          show() {
            this.isVisible = true, this.$el.classList.remove("-hidden-");
          }
          hide() {
            this.isVisible = false, this.$el.classList.add("-hidden-");
          }
          destroyCells() {
            this.cells.forEach((e3) => e3.destroy()), this.cells = [], this.$cells.innerHTML = "";
          }
          destroy() {
            this.destroyCells(), this.dp.off(i2.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i2.eventChangeCurrentView, this.onChangeCurrentView);
          }
          static getDaysDates(e3, t3) {
            let { viewDate: i3, opts: { fixedHeight: s3 }, locale: { firstDay: a3 } } = e3, n3 = h2(i3), { year: r3, month: l3 } = o2(i3), d3 = new Date(r3, l3, 1), c3 = new Date(r3, l3, n3), u3 = d3.getDay() - a3, p3 = 6 - c3.getDay() + a3;
            u3 = u3 < 0 ? u3 + 7 : u3, p3 = p3 > 6 ? p3 - 7 : p3;
            let m3 = function(e4, t4) {
              let { year: i4, month: s4, date: a4 } = o2(e4);
              return new Date(i4, s4, a4 - t4);
            }(d3, u3), v3 = n3 + u3 + p3, g3 = m3.getDate(), { year: D3, month: y3 } = o2(m3), f3 = 0;
            s3 && (v3 = 42);
            const w3 = [];
            for (; f3 < v3; ) {
              let e4 = new Date(D3, y3, g3 + f3);
              t3 && t3(e4), w3.push(e4), f3++;
            }
            return w3;
          }
          static getMonthsDates(e3, t3) {
            let { year: i3 } = e3.parsedViewDate, s3 = 0, a3 = [];
            for (; s3 < 12; ) {
              const e4 = new Date(i3, s3);
              a3.push(e4), t3 && t3(e4), s3++;
            }
            return a3;
          }
          static getYearsDates(e3, t3) {
            let i3 = c2(e3.viewDate), s3 = i3[0] - 1, a3 = i3[1] + 1, n3 = s3, r3 = [];
            for (; n3 <= a3; ) {
              const e4 = new Date(n3, 0);
              r3.push(e4), t3 && t3(e4), n3++;
            }
            return r3;
          }
          static getDatesFunction() {
            let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i2.days;
            return { [i2.days]: T.getDaysDates, [i2.months]: T.getMonthsDates, [i2.years]: T.getYearsDates }[e3];
          }
        }
        function F2(e3, t3, i3) {
          return (t3 = function(e4) {
            var t4 = function(e5, t5) {
              if ("object" != typeof e5 || null === e5) return e5;
              var i4 = e5[Symbol.toPrimitive];
              if (void 0 !== i4) {
                var s3 = i4.call(e5, "string");
                if ("object" != typeof s3) return s3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e5);
            }(e4);
            return "symbol" == typeof t4 ? t4 : String(t4);
          }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e3[t3] = i3, e3;
        }
        class V {
          constructor(e3) {
            let { dp: t3, opts: i3 } = e3;
            F2(this, "onClickNav", (e4) => {
              let t4 = y2(e4.target, ".air-datepicker-nav--action");
              if (!t4) return;
              let i4 = t4.dataset.action;
              this.dp[i4]();
            }), F2(this, "onChangeViewDate", () => {
              this.render(), this._resetNavStatus(), this.handleNavStatus();
            }), F2(this, "onChangeCurrentView", () => {
              this.render(), this._resetNavStatus(), this.handleNavStatus();
            }), F2(this, "onClickNavTitle", () => {
              this.dp.isFinalView || this.dp.up();
            }), F2(this, "update", () => {
              let { prevHtml: e4, nextHtml: t4 } = this.opts;
              this.$prev.innerHTML = e4, this.$next.innerHTML = t4, this._resetNavStatus(), this.render(), this.handleNavStatus();
            }), F2(this, "renderDelay", () => {
              setTimeout(this.render);
            }), F2(this, "render", () => {
              this.$title.innerHTML = this._getTitle(), function(e4, t4) {
                for (let i4 in t4) t4[i4] ? e4.classList.add(i4) : e4.classList.remove(i4);
              }(this.$title, { "-disabled-": this.dp.isFinalView });
            }), this.dp = t3, this.opts = i3, this.init();
          }
          init() {
            this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
          }
          _defineDOM() {
            this.$title = a2(".air-datepicker-nav--title", this.$el), this.$prev = a2('[data-action="prev"]', this.$el), this.$next = a2('[data-action="next"]', this.$el);
          }
          _bindEvents() {
            this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
          }
          _bindDatepickerEvents() {
            this.dp.on(i2.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i2.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.on(i2.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.on(i2.eventChangeTime, this.render));
          }
          destroy() {
            this.dp.off(i2.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i2.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.off(i2.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.off(i2.eventChangeTime, this.render));
          }
          _createElement() {
            this.$el = n2({ tagName: "nav", className: "air-datepicker-nav" });
          }
          _getTitle() {
            let { dp: e3, opts: t3 } = this, i3 = t3.navTitles[e3.currentView];
            return "function" == typeof i3 ? i3(e3) : e3.formatDate(e3.viewDate, i3);
          }
          handleNavStatus() {
            let { disableNavWhenOutOfRange: e3 } = this.opts, { minDate: t3, maxDate: s3 } = this.dp;
            if (!t3 && !s3 || !e3) return;
            let { year: a3, month: n3 } = this.dp.parsedViewDate, r3 = !!t3 && o2(t3), h3 = !!s3 && o2(s3);
            switch (this.dp.currentView) {
              case i2.days:
                t3 && r3.month >= n3 && r3.year >= a3 && this._disableNav("prev"), s3 && h3.month <= n3 && h3.year <= a3 && this._disableNav("next");
                break;
              case i2.months:
                t3 && r3.year >= a3 && this._disableNav("prev"), s3 && h3.year <= a3 && this._disableNav("next");
                break;
              case i2.years: {
                let e4 = c2(this.dp.viewDate);
                t3 && r3.year >= e4[0] && this._disableNav("prev"), s3 && h3.year <= e4[1] && this._disableNav("next");
                break;
              }
            }
          }
          _disableNav(e3) {
            a2('[data-action="' + e3 + '"]', this.$el).classList.add("-disabled-");
          }
          _resetNavStatus() {
            !function(e3) {
              for (var t3 = arguments.length, i3 = new Array(t3 > 1 ? t3 - 1 : 0), s3 = 1; s3 < t3; s3++) i3[s3 - 1] = arguments[s3];
              e3.length ? e3.forEach((e4) => {
                e4.classList.remove(...i3);
              }) : e3.classList.remove(...i3);
            }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
          }
          _buildBaseHtml() {
            let { prevHtml: e3, nextHtml: t3 } = this.opts;
            this.$el.innerHTML = `<div class="air-datepicker-nav--action" data-action="prev">${e3}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t3}</div>`;
          }
          get isNavIsFunction() {
            let { navTitles: e3 } = this.opts;
            return Object.keys(e3).find((t3) => "function" == typeof e3[t3]);
          }
        }
        var x2 = { today: { content: (e3) => e3.locale.today, onClick: (e3) => e3.setViewDate(/* @__PURE__ */ new Date()) }, clear: { content: (e3) => e3.locale.clear, onClick: (e3) => e3.clear() } };
        class H2 {
          constructor(e3) {
            let { dp: t3, opts: i3 } = e3;
            this.dp = t3, this.opts = i3, this.init();
          }
          init() {
            this.createElement(), this.render();
          }
          createElement() {
            this.$el = n2({ className: "air-datepicker-buttons" });
          }
          destroy() {
            this.$el.parentNode.removeChild(this.$el);
          }
          clearHtml() {
            return this.$el.innerHTML = "", this;
          }
          generateButtons() {
            let { buttons: e3 } = this.opts;
            Array.isArray(e3) || (e3 = [e3]), e3.forEach((e4) => {
              let t3 = e4;
              "string" == typeof e4 && x2[e4] && (t3 = x2[e4]);
              let i3 = this.createButton(t3);
              t3.onClick && this.attachEventToButton(i3, t3.onClick), this.$el.appendChild(i3);
            });
          }
          attachEventToButton(e3, t3) {
            e3.addEventListener("click", () => {
              t3(this.dp);
            });
          }
          createButton(e3) {
            let { content: t3, className: i3, tagName: s3 = "button", attrs: a3 = {} } = e3;
            return n2({ tagName: s3, innerHtml: `<span tabindex='-1'>${"function" == typeof t3 ? t3(this.dp) : t3}</span>`, className: u2("air-datepicker-button", i3), attrs: a3 });
          }
          render() {
            this.generateButtons();
          }
        }
        function E2(e3, t3, i3) {
          return (t3 = function(e4) {
            var t4 = function(e5, t5) {
              if ("object" != typeof e5 || null === e5) return e5;
              var i4 = e5[Symbol.toPrimitive];
              if (void 0 !== i4) {
                var s3 = i4.call(e5, "string");
                if ("object" != typeof s3) return s3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e5);
            }(e4);
            return "symbol" == typeof t4 ? t4 : String(t4);
          }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e3[t3] = i3, e3;
        }
        class L {
          constructor() {
            let { opts: e3, dp: t3 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            E2(this, "toggleTimepickerIsActive", (e4) => {
              this.dp.timepickerIsActive = e4;
            }), E2(this, "onChangeSelectedDate", (e4) => {
              let { date: t4, updateTime: i3 = false } = e4;
              t4 && (this.setMinMaxTime(t4), this.setCurrentTime(!!i3 && t4), this.addTimeToDate(t4));
            }), E2(this, "onChangeLastSelectedDate", (e4) => {
              e4 && (this.setTime(e4), this.render());
            }), E2(this, "onChangeInputRange", (e4) => {
              let t4 = e4.target;
              this[t4.getAttribute("name")] = t4.value, this.updateText(), this.dp.trigger(i2.eventChangeTime, { hours: this.hours, minutes: this.minutes });
            }), E2(this, "onMouseEnterLeave", (e4) => {
              let t4 = e4.target.getAttribute("name"), i3 = this.$minutesText;
              "hours" === t4 && (i3 = this.$hoursText), i3.classList.toggle("-focus-");
            }), E2(this, "onFocus", () => {
              this.toggleTimepickerIsActive(true);
            }), E2(this, "onBlur", () => {
              this.toggleTimepickerIsActive(false);
            }), this.opts = e3, this.dp = t3;
            let { timeFormat: s3 } = this.dp.locale;
            s3 && (s3.match($("h")) || s3.match($("hh"))) && (this.ampm = true), this.init();
          }
          init() {
            this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), this.bindDOMEvents();
          }
          bindDatepickerEvents() {
            this.dp.on(i2.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i2.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
          }
          bindDOMEvents() {
            let e3 = "input";
            navigator.userAgent.match(/trident/gi) && (e3 = "change"), D2(this.$ranges, e3, this.onChangeInputRange), D2(this.$ranges, "mouseenter", this.onMouseEnterLeave), D2(this.$ranges, "mouseleave", this.onMouseEnterLeave), D2(this.$ranges, "focus", this.onFocus), D2(this.$ranges, "mousedown", this.onFocus), D2(this.$ranges, "blur", this.onBlur);
          }
          createElement() {
            this.$el = n2({ className: u2("air-datepicker-time", { "-am-pm-": this.dp.ampm }) });
          }
          destroy() {
            this.dp.off(i2.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i2.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), this.$el.parentNode.removeChild(this.$el);
          }
          buildHtml() {
            let { ampm: e3, hours: t3, displayHours: i3, minutes: s3, minHours: a3, minMinutes: n3, maxHours: r3, maxMinutes: h3, dayPeriod: o3, opts: { hoursStep: l3, minutesStep: c3 } } = this;
            this.$el.innerHTML = `<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d2(i3)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d2(s3)}</span>   ` + (e3 ? `<span class='air-datepicker-time--current-ampm'>${o3}</span>` : "") + `</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">      <input type="range" name="hours" value="${t3}" min="${a3}" max="${r3}" step="${l3}"/>   </div>   <div class="air-datepicker-time--row">      <input type="range" name="minutes" value="${s3}" min="${n3}" max="${h3}" step="${c3}"/>   </div></div>`;
          }
          defineDOM() {
            let e3 = (e4) => a2(e4, this.$el);
            this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e3('[name="hours"]'), this.$minutes = e3('[name="minutes"]'), this.$hoursText = e3(".air-datepicker-time--current-hours"), this.$minutesText = e3(".air-datepicker-time--current-minutes"), this.$ampm = e3(".air-datepicker-time--current-ampm");
          }
          setTime(e3) {
            this.setMinMaxTime(e3), this.setCurrentTime(e3);
          }
          addTimeToDate(e3) {
            e3 && (e3.setHours(this.hours), e3.setMinutes(this.minutes));
          }
          setMinMaxTime(e3) {
            if (this.setMinMaxTimeFromOptions(), e3) {
              let { minDate: t3, maxDate: i3 } = this.dp;
              t3 && p2(e3, t3) && this.setMinTimeFromMinDate(t3), i3 && p2(e3, i3) && this.setMaxTimeFromMaxDate(i3);
            }
          }
          setCurrentTime(e3) {
            let { hours: t3, minutes: i3 } = e3 ? o2(e3) : this;
            this.hours = f2(t3, this.minHours, this.maxHours), this.minutes = f2(i3, this.minMinutes, this.maxMinutes);
          }
          setMinMaxTimeFromOptions() {
            let { minHours: e3, minMinutes: t3, maxHours: i3, maxMinutes: s3 } = this.opts;
            this.minHours = f2(e3, 0, 23), this.minMinutes = f2(t3, 0, 59), this.maxHours = f2(i3, 0, 23), this.maxMinutes = f2(s3, 0, 59);
          }
          setMinTimeFromMinDate(e3) {
            let { lastSelectedDate: t3 } = this.dp;
            this.minHours = e3.getHours(), t3 && t3.getHours() > e3.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e3.getMinutes();
          }
          setMaxTimeFromMaxDate(e3) {
            let { lastSelectedDate: t3 } = this.dp;
            this.maxHours = e3.getHours(), t3 && t3.getHours() < e3.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e3.getMinutes();
          }
          updateSliders() {
            r2(this.$hours, { min: this.minHours, max: this.maxHours }).value = this.hours, r2(this.$minutes, { min: this.minMinutes, max: this.maxMinutes }).value = this.minutes;
          }
          updateText() {
            this.$hoursText.innerHTML = d2(this.displayHours), this.$minutesText.innerHTML = d2(this.minutes), this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
          }
          set hours(e3) {
            this._hours = e3;
            let { hours: t3, dayPeriod: i3 } = l2(e3);
            this.displayHours = this.ampm ? t3 : e3, this.dayPeriod = i3;
          }
          get hours() {
            return this._hours;
          }
          render() {
            this.updateSliders(), this.updateText();
          }
        }
        function A2(e3, t3, i3) {
          return (t3 = function(e4) {
            var t4 = function(e5, t5) {
              if ("object" != typeof e5 || null === e5) return e5;
              var i4 = e5[Symbol.toPrimitive];
              if (void 0 !== i4) {
                var s3 = i4.call(e5, "string");
                if ("object" != typeof s3) return s3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e5);
            }(e4);
            return "symbol" == typeof t4 ? t4 : String(t4);
          }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e3[t3] = i3, e3;
        }
        class O2 {
          constructor(e3) {
            let { dp: t3, opts: i3 } = e3;
            A2(this, "pressedKeys", /* @__PURE__ */ new Set()), A2(this, "hotKeys", /* @__PURE__ */ new Map([[[["Control", "ArrowRight"], ["Control", "ArrowUp"]], (e4) => e4.month++], [[["Control", "ArrowLeft"], ["Control", "ArrowDown"]], (e4) => e4.month--], [[["Shift", "ArrowRight"], ["Shift", "ArrowUp"]], (e4) => e4.year++], [[["Shift", "ArrowLeft"], ["Shift", "ArrowDown"]], (e4) => e4.year--], [[["Alt", "ArrowRight"], ["Alt", "ArrowUp"]], (e4) => e4.year += 10], [[["Alt", "ArrowLeft"], ["Alt", "ArrowDown"]], (e4) => e4.year -= 10], [["Control", "Shift", "ArrowUp"], (e4, t4) => t4.up()]])), A2(this, "handleHotKey", (e4) => {
              let t4 = this.hotKeys.get(e4), i4 = o2(this.getInitialFocusDate());
              t4(i4, this.dp);
              let { year: s3, month: a3, date: n3 } = i4, r3 = h2(new Date(s3, a3));
              r3 < n3 && (n3 = r3);
              let l3 = this.dp.getClampedDate(new Date(s3, a3, n3));
              this.dp.setFocusDate(l3, { viewDateTransition: true });
            }), A2(this, "isHotKeyPressed", () => {
              let e4 = false, t4 = this.pressedKeys.size, i4 = (e5) => this.pressedKeys.has(e5);
              for (let [s3] of this.hotKeys) {
                if (e4) break;
                if (Array.isArray(s3[0])) s3.forEach((a3) => {
                  e4 || t4 !== a3.length || (e4 = a3.every(i4) && s3);
                });
                else {
                  if (t4 !== s3.length) continue;
                  e4 = s3.every(i4) && s3;
                }
              }
              return e4;
            }), A2(this, "isArrow", (e4) => e4 >= 37 && e4 <= 40), A2(this, "onKeyDown", (e4) => {
              if (!this.dp.visible && !this.dp.treatAsInline) return;
              let { key: t4, which: i4 } = e4, { dp: s3, dp: { focusDate: a3 }, opts: n3 } = this;
              this.registerKey(t4);
              let r3 = this.isHotKeyPressed();
              if (r3) return e4.preventDefault(), void this.handleHotKey(r3);
              if (this.isArrow(i4)) return e4.preventDefault(), void this.focusNextCell(t4);
              if ("Enter" === t4) {
                if (s3.currentView !== n3.minView) return void s3.down();
                if (a3) {
                  let e5 = s3._checkIfDateIsSelected(a3);
                  return void (e5 ? s3._handleAlreadySelectedDates(e5, a3) : s3.selectDate(a3));
                }
              }
              "Escape" === t4 && this.dp.hide();
            }), A2(this, "onKeyUp", (e4) => {
              this.removeKey(e4.key);
            }), this.dp = t3, this.opts = i3, this.init();
          }
          init() {
            this.bindKeyboardEvents();
          }
          bindKeyboardEvents() {
            let { $el: e3 } = this.dp;
            e3.addEventListener("keydown", this.onKeyDown), e3.addEventListener("keyup", this.onKeyUp);
          }
          destroy() {
            let { $el: e3 } = this.dp;
            e3.removeEventListener("keydown", this.onKeyDown), e3.removeEventListener("keyup", this.onKeyUp), this.hotKeys = null, this.pressedKeys = null;
          }
          getInitialFocusDate() {
            let { focusDate: e3, currentView: t3, selectedDates: s3, parsedViewDate: { year: a3, month: n3 } } = this.dp, r3 = e3 || s3[s3.length - 1];
            if (!r3) switch (t3) {
              case i2.days:
                r3 = new Date(a3, n3, (/* @__PURE__ */ new Date()).getDate());
                break;
              case i2.months:
                r3 = new Date(a3, n3, 1);
                break;
              case i2.years:
                r3 = new Date(a3, 0, 1);
            }
            return r3;
          }
          focusNextCell(e3) {
            let t3 = this.getInitialFocusDate(), { currentView: s3 } = this.dp, { days: a3, months: n3, years: r3 } = i2, h3 = o2(t3), l3 = h3.year, d3 = h3.month, c3 = h3.date;
            switch (e3) {
              case "ArrowLeft":
                s3 === a3 && (c3 -= 1), s3 === n3 && (d3 -= 1), s3 === r3 && (l3 -= 1);
                break;
              case "ArrowUp":
                s3 === a3 && (c3 -= 7), s3 === n3 && (d3 -= 3), s3 === r3 && (l3 -= 4);
                break;
              case "ArrowRight":
                s3 === a3 && (c3 += 1), s3 === n3 && (d3 += 1), s3 === r3 && (l3 += 1);
                break;
              case "ArrowDown":
                s3 === a3 && (c3 += 7), s3 === n3 && (d3 += 3), s3 === r3 && (l3 += 4);
            }
            let u3 = this.dp.getClampedDate(new Date(l3, d3, c3));
            this.dp.setFocusDate(u3, { viewDateTransition: true });
          }
          registerKey(e3) {
            this.pressedKeys.add(e3);
          }
          removeKey(e3) {
            this.pressedKeys.delete(e3);
          }
        }
        let N2 = { on(e3, t3) {
          this.__events || (this.__events = {}), this.__events[e3] ? this.__events[e3].push(t3) : this.__events[e3] = [t3];
        }, off(e3, t3) {
          this.__events && this.__events[e3] && (this.__events[e3] = this.__events[e3].filter((e4) => e4 !== t3));
        }, removeAllEvents() {
          this.__events = {};
        }, trigger(e3) {
          for (var t3 = arguments.length, i3 = new Array(t3 > 1 ? t3 - 1 : 0), s3 = 1; s3 < t3; s3++) i3[s3 - 1] = arguments[s3];
          this.__events && this.__events[e3] && this.__events[e3].forEach((e4) => {
            e4(...i3);
          });
        } };
        function I2(e3, t3, i3) {
          return (t3 = function(e4) {
            var t4 = function(e5, t5) {
              if ("object" != typeof e5 || null === e5) return e5;
              var i4 = e5[Symbol.toPrimitive];
              if (void 0 !== i4) {
                var s3 = i4.call(e5, "string");
                if ("object" != typeof s3) return s3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e5);
            }(e4);
            return "symbol" == typeof t4 ? t4 : String(t4);
          }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e3[t3] = i3, e3;
        }
        let P = "", j2 = "", B2 = false;
        class R2 {
          static buildGlobalContainer(e3) {
            B2 = true, P = n2({ className: e3, id: e3 }), a2("body").appendChild(P);
          }
          constructor(e3, t3) {
            var r3 = this;
            if (I2(this, "viewIndexes", [i2.days, i2.months, i2.years]), I2(this, "next", () => {
              let { year: e4, month: t4 } = this.parsedViewDate;
              switch (this.currentView) {
                case i2.days:
                  this.setViewDate(new Date(e4, t4 + 1, 1));
                  break;
                case i2.months:
                  this.setViewDate(new Date(e4 + 1, t4, 1));
                  break;
                case i2.years:
                  this.setViewDate(new Date(e4 + 10, 0, 1));
              }
            }), I2(this, "prev", () => {
              let { year: e4, month: t4 } = this.parsedViewDate;
              switch (this.currentView) {
                case i2.days:
                  this.setViewDate(new Date(e4, t4 - 1, 1));
                  break;
                case i2.months:
                  this.setViewDate(new Date(e4 - 1, t4, 1));
                  break;
                case i2.years:
                  this.setViewDate(new Date(e4 - 10, 0, 1));
              }
            }), I2(this, "_finishHide", () => {
              this.hideAnimation = false, this._destroyComponents(), this.$container.removeChild(this.$datepicker);
            }), I2(this, "setPosition", function(e4) {
              let t4 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if ("function" == typeof (e4 = e4 || r3.opts.position)) return void (r3.customHide = e4({ $datepicker: r3.$datepicker, $target: r3.$el, $pointer: r3.$pointer, isViewChange: t4, done: r3._finishHide }));
              let i3, s3, { isMobile: a3 } = r3.opts, n3 = r3.$el.getBoundingClientRect(), h4 = r3.$el.getBoundingClientRect(), o3 = r3.$datepicker.offsetParent, l4 = r3.$el.offsetParent, d3 = r3.$datepicker.getBoundingClientRect(), c3 = e4.split(" "), u3 = window.scrollY, p3 = window.scrollX, m3 = r3.opts.offset, v3 = c3[0], g3 = c3[1];
              if (a3) r3.$datepicker.style.cssText = "left: 50%; top: 50%";
              else {
                if (o3 === l4 && o3 !== document.body && (h4 = { top: r3.$el.offsetTop, left: r3.$el.offsetLeft, width: n3.width, height: r3.$el.offsetHeight }, u3 = 0, p3 = 0), o3 !== l4 && o3 !== document.body) {
                  let e5 = o3.getBoundingClientRect();
                  h4 = { top: n3.top - e5.top, left: n3.left - e5.left, width: n3.width, height: n3.height }, u3 = 0, p3 = 0;
                }
                switch (v3) {
                  case "top":
                    i3 = h4.top - d3.height - m3;
                    break;
                  case "right":
                    s3 = h4.left + h4.width + m3;
                    break;
                  case "bottom":
                    i3 = h4.top + h4.height + m3;
                    break;
                  case "left":
                    s3 = h4.left - d3.width - m3;
                }
                switch (g3) {
                  case "top":
                    i3 = h4.top;
                    break;
                  case "right":
                    s3 = h4.left + h4.width - d3.width;
                    break;
                  case "bottom":
                    i3 = h4.top + h4.height - d3.height;
                    break;
                  case "left":
                    s3 = h4.left;
                    break;
                  case "center":
                    /left|right/.test(v3) ? i3 = h4.top + h4.height / 2 - d3.height / 2 : s3 = h4.left + h4.width / 2 - d3.width / 2;
                }
                r3.$datepicker.style.cssText = `left: ${s3 + p3}px; top: ${i3 + u3}px`;
              }
            }), I2(this, "_setInputValue", () => {
              let { opts: e4, $altField: t4, locale: { dateFormat: i3 } } = this, { altFieldDateFormat: s3, altField: a3 } = e4;
              a3 && t4 && (t4.value = this._getInputValue(s3)), this.$el.value = this._getInputValue(i3), this.$el.dispatchEvent(new Event("change"));
            }), I2(this, "_getInputValue", (e4) => {
              let { selectedDates: t4, opts: i3 } = this, { multipleDates: s3, multipleDatesSeparator: a3 } = i3;
              if (!t4.length) return "";
              let n3 = "function" == typeof e4, r4 = n3 ? e4(s3 ? t4 : t4[0]) : t4.map((t5) => this.formatDate(t5, e4));
              return r4 = n3 ? r4 : r4.join(a3), r4;
            }), I2(this, "_checkIfDateIsSelected", function(e4) {
              let t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i2.days, s3 = false;
              return r3.selectedDates.some((i3) => {
                let a3 = p2(e4, i3, t4);
                return s3 = a3 && i3, a3;
              }), s3;
            }), I2(this, "_scheduleCallAfterTransition", (e4) => {
              this._cancelScheduledCall(), e4 && e4(false), this._onTransitionEnd = () => {
                e4 && e4(true);
              }, this.$datepicker.addEventListener("transitionend", this._onTransitionEnd, { once: true });
            }), I2(this, "_cancelScheduledCall", () => {
              this.$datepicker.removeEventListener("transitionend", this._onTransitionEnd);
            }), I2(this, "setViewDate", (e4) => {
              if (!((e4 = b2(e4)) instanceof Date)) return;
              if (p2(e4, this.viewDate)) return;
              let t4 = this.viewDate;
              this.viewDate = e4;
              let { onChangeViewDate: s3 } = this.opts;
              if (s3) {
                let { month: e5, year: t5 } = this.parsedViewDate;
                s3({ month: e5, year: t5, decade: this.curDecade });
              }
              this.trigger(i2.eventChangeViewDate, e4, t4);
            }), I2(this, "setFocusDate", function(e4) {
              let t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              (!e4 || (e4 = b2(e4)) instanceof Date) && (r3.focusDate = e4, r3.trigger(i2.eventChangeFocusDate, e4, t4));
            }), I2(this, "setCurrentView", function(e4) {
              let t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (r3.viewIndexes.includes(e4)) {
                if (r3.currentView = e4, r3.elIsInput && r3.visible && r3.setPosition(void 0, true), r3.trigger(i2.eventChangeCurrentView, e4), !r3.views[e4]) {
                  let t5 = r3.views[e4] = new T({ dp: r3, opts: r3.opts, type: e4 });
                  r3.shouldUpdateDOM && r3.$content.appendChild(t5.$el);
                }
                r3.opts.onChangeView && !t4.silent && r3.opts.onChangeView(e4);
              }
            }), I2(this, "_updateLastSelectedDate", (e4) => {
              this.lastSelectedDate = e4, this.trigger(i2.eventChangeLastSelectedDate, e4);
            }), I2(this, "destroy", () => {
              if (this.isDestroyed) return;
              let { showEvent: e4, isMobile: t4 } = this.opts, i3 = this.$datepicker.parentNode;
              i3 && i3.removeChild(this.$datepicker), this.$el.removeEventListener(e4, this._onFocus), this.$el.removeEventListener("blur", this._onBlur), window.removeEventListener("resize", this._onResize), t4 && this._removeMobileAttributes(), this.keyboardNav && this.keyboardNav.destroy(), this.views = null, this.nav = null, this.$datepicker = null, this.opts = {}, this.$customContainer = null, this.viewDate = null, this.focusDate = null, this.selectedDates = [], this.rangeDateFrom = null, this.rangeDateTo = null, this.isDestroyed = true;
            }), I2(this, "update", function() {
              let e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s3 = w2({}, r3.opts), { silent: a3 } = t4;
              w2(r3.opts, e4);
              let { timepicker: n3, buttons: h4, range: o3, selectedDates: l4, isMobile: d3 } = r3.opts, c3 = r3.visible || r3.treatAsInline;
              r3._createMinMaxDates(), r3._limitViewDateByMaxMinDates(), r3._handleLocale(), l4 && (r3.selectedDates = [], r3.selectDate(l4, { silent: a3 })), e4.view && r3.setCurrentView(e4.view, { silent: a3 }), r3._setInputValue(), s3.range && !o3 ? (r3.rangeDateTo = false, r3.rangeDateFrom = false) : !s3.range && o3 && r3.selectedDates.length && (r3.rangeDateFrom = r3.selectedDates[0], r3.rangeDateTo = r3.selectedDates[1]), s3.timepicker && !n3 ? (c3 && r3.timepicker.destroy(), r3.timepicker = false, r3.$timepicker.parentNode.removeChild(r3.$timepicker)) : !s3.timepicker && n3 && r3._addTimepicker(), !s3.buttons && h4 ? r3._addButtons() : s3.buttons && !h4 ? (r3.buttons.destroy(), r3.$buttons.parentNode.removeChild(r3.$buttons)) : c3 && s3.buttons && h4 && r3.buttons.clearHtml().render(), !s3.isMobile && d3 ? (r3.treatAsInline || j2 || r3._createMobileOverlay(), r3._addMobileAttributes(), r3.visible && r3._showMobileOverlay()) : s3.isMobile && !d3 && (r3._removeMobileAttributes(), r3.visible && (j2.classList.remove("-active-"), "function" != typeof r3.opts.position && r3.setPosition())), c3 && (r3.nav.update(), r3.views[r3.currentView].render(), r3.currentView === i2.days && r3.views[r3.currentView].renderDayNames());
            }), I2(this, "disableDate", (e4, t4) => {
              (Array.isArray(e4) ? e4 : [e4]).forEach((e5) => {
                let i3 = b2(e5);
                if (!i3) return;
                let s3 = t4 ? "delete" : "add";
                this.disabledDates[s3](this.formatDate(i3, "yyyy-MM-dd"));
                let a3 = this.getCell(i3, this.currentViewSingular);
                a3 && a3.adpCell.render();
              }, []);
            }), I2(this, "enableDate", (e4) => {
              this.disableDate(e4, true);
            }), I2(this, "isDateDisabled", (e4) => {
              let t4 = b2(e4);
              return this.disabledDates.has(this.formatDate(t4, "yyyy-MM-dd"));
            }), I2(this, "isOtherMonth", (e4) => {
              let { month: t4 } = o2(e4);
              return t4 !== this.parsedViewDate.month;
            }), I2(this, "isOtherYear", (e4) => {
              let { year: t4 } = o2(e4);
              return t4 !== this.parsedViewDate.year;
            }), I2(this, "isOtherDecade", (e4) => {
              let { year: t4 } = o2(e4), [i3, s3] = c2(this.viewDate);
              return t4 < i3 || t4 > s3;
            }), I2(this, "_onChangeSelectedDate", (e4) => {
              let { silent: t4 } = e4;
              setTimeout(() => {
                this._setInputValue(), this.opts.onSelect && !t4 && this._triggerOnSelect();
              });
            }), I2(this, "_onChangeFocusedDate", function(e4) {
              let { viewDateTransition: t4 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (!e4) return;
              let i3 = false;
              t4 && (i3 = r3.isOtherMonth(e4) || r3.isOtherYear(e4) || r3.isOtherDecade(e4)), i3 && r3.setViewDate(e4), r3.opts.onFocus && r3.opts.onFocus({ datepicker: r3, date: e4 });
            }), I2(this, "_onChangeTime", (e4) => {
              let { hours: t4, minutes: i3 } = e4, s3 = /* @__PURE__ */ new Date(), { lastSelectedDate: a3, opts: { onSelect: n3 } } = this, r4 = a3;
              a3 || (r4 = s3);
              let h4 = this.getCell(r4, this.currentViewSingular), o3 = h4 && h4.adpCell;
              o3 && o3.isDisabled || (r4.setHours(t4), r4.setMinutes(i3), a3 ? (this._setInputValue(), n3 && this._triggerOnSelect()) : this.selectDate(r4));
            }), I2(this, "_onFocus", (e4) => {
              this.visible || this.show();
            }), I2(this, "_onBlur", (e4) => {
              this.inFocus || !this.visible || this.opts.isMobile || this.hide();
            }), I2(this, "_onMouseDown", (e4) => {
              this.inFocus = true;
            }), I2(this, "_onMouseUp", (e4) => {
              this.inFocus = false, this.$el.focus();
            }), I2(this, "_onResize", () => {
              this.visible && "function" != typeof this.opts.position && this.setPosition();
            }), I2(this, "_onClickOverlay", () => {
              this.visible && this.hide();
            }), I2(this, "getViewDates", function() {
              let e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i2.days;
              return T.getDatesFunction(e4)(r3);
            }), I2(this, "isWeekend", (e4) => this.opts.weekends.includes(e4)), I2(this, "getClampedDate", (e4) => {
              let { minDate: t4, maxDate: i3 } = this, s3 = e4;
              return i3 && m2(e4, i3) ? s3 = i3 : t4 && v2(e4, t4) && (s3 = t4), s3;
            }), this.$el = a2(e3), !this.$el) return;
            this.$datepicker = n2({ className: "air-datepicker" }), this.opts = w2({}, s2, t3), this.$customContainer = !!this.opts.container && a2(this.opts.container), this.$altField = a2(this.opts.altField || false);
            let { view: h3, startDate: l3 } = this.opts;
            l3 || (this.opts.startDate = /* @__PURE__ */ new Date()), "INPUT" === this.$el.nodeName && (this.elIsInput = true), this.inited = false, this.visible = false, this.viewDate = b2(this.opts.startDate), this.focusDate = false, this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = false, this.currentView = h3, this.selectedDates = [], this.disabledDates = /* @__PURE__ */ new Set(), this.isDestroyed = false, this.views = {}, this.keys = [], this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = false, this.treatAsInline = this.opts.inline || !this.elIsInput, this.init();
          }
          init() {
            let { opts: e3, treatAsInline: t3, opts: { inline: i3, isMobile: s3, selectedDates: n3, keyboardNav: r3, onlyTimepicker: h3 } } = this, o3 = a2("body");
            (!B2 || B2 && P && !o3.contains(P)) && !i3 && this.elIsInput && !this.$customContainer && R2.buildGlobalContainer(R2.defaultGlobalContainerId), !s3 || j2 || t3 || this._createMobileOverlay(), this._handleLocale(), this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this.elIsInput && (i3 || this._bindEvents(), r3 && !h3 && (this.keyboardNav = new O2({ dp: this, opts: e3 }))), n3 && this.selectDate(n3, { silent: true }), this.opts.visible && !t3 && this.show(), s3 && !t3 && this.$el.setAttribute("readonly", true), t3 && this._createComponents();
          }
          _createMobileOverlay() {
            j2 = n2({ className: "air-datepicker-overlay" }), P.appendChild(j2);
          }
          _createComponents() {
            let { opts: e3, treatAsInline: t3, opts: { inline: i3, buttons: s3, timepicker: a3, position: n3, classes: r3, onlyTimepicker: h3, isMobile: o3 } } = this;
            this._buildBaseHtml(), this.elIsInput && (i3 || this._setPositionClasses(n3)), !i3 && this.elIsInput || this.$datepicker.classList.add("-inline-"), r3 && this.$datepicker.classList.add(...r3.split(" ")), h3 && this.$datepicker.classList.add("-only-timepicker-"), o3 && !t3 && this._addMobileAttributes(), this.views[this.currentView] = new T({ dp: this, type: this.currentView, opts: e3 }), this.nav = new V({ dp: this, opts: e3 }), a3 && this._addTimepicker(), s3 && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), this.$nav.appendChild(this.nav.$el);
          }
          _destroyComponents() {
            for (let e3 in this.views) this.views[e3].destroy();
            this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
          }
          _addMobileAttributes() {
            j2.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), this.$el.setAttribute("readonly", true);
          }
          _removeMobileAttributes() {
            j2.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
          }
          _createMinMaxDates() {
            let { minDate: e3, maxDate: t3 } = this.opts;
            this.minDate = !!e3 && b2(e3), this.maxDate = !!t3 && b2(t3);
          }
          _addTimepicker() {
            this.$timepicker = n2({ className: "air-datepicker--time" }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L({ dp: this, opts: this.opts }), this.$timepicker.appendChild(this.timepicker.$el);
          }
          _addButtons() {
            this.$buttons = n2({ className: "air-datepicker--buttons" }), this.$datepicker.appendChild(this.$buttons), this.buttons = new H2({ dp: this, opts: this.opts }), this.$buttons.appendChild(this.buttons.$el);
          }
          _bindSubEvents() {
            this.on(i2.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i2.eventChangeFocusDate, this._onChangeFocusedDate), this.on(i2.eventChangeTime, this._onChangeTime);
          }
          _buildBaseHtml() {
            let { inline: e3 } = this.opts;
            var t3, i3;
            this.elIsInput ? e3 ? (t3 = this.$datepicker, (i3 = this.$el).parentNode.insertBefore(t3, i3.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', this.$content = a2(".air-datepicker--content", this.$datepicker), this.$pointer = a2(".air-datepicker--pointer", this.$datepicker), this.$nav = a2(".air-datepicker--navigation", this.$datepicker);
          }
          _handleLocale() {
            let { locale: e3, dateFormat: t3, firstDay: i3, timepicker: s3, onlyTimepicker: a3, timeFormat: n3, dateTimeSeparator: r3 } = this.opts;
            var h3;
            this.locale = (h3 = e3, JSON.parse(JSON.stringify(h3))), t3 && (this.locale.dateFormat = t3), void 0 !== n3 && "" !== n3 && (this.locale.timeFormat = n3);
            let { timeFormat: o3 } = this.locale;
            if ("" !== i3 && (this.locale.firstDay = i3), s3 && "function" != typeof t3) {
              let e4 = o3 ? r3 : "";
              this.locale.dateFormat = [this.locale.dateFormat, o3 || ""].join(e4);
            }
            a3 && "function" != typeof t3 && (this.locale.dateFormat = this.locale.timeFormat);
          }
          _setPositionClasses(e3) {
            if ("function" == typeof e3) return void this.$datepicker.classList.add("-custom-position-");
            let t3 = (e3 = e3.split(" "))[0], i3 = `air-datepicker -${t3}-${e3[1]}- -from-${t3}-`;
            this.$datepicker.classList.add(...i3.split(" "));
          }
          _bindEvents() {
            this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), window.addEventListener("resize", this._onResize);
          }
          _limitViewDateByMaxMinDates() {
            let { viewDate: e3, minDate: t3, maxDate: i3 } = this;
            i3 && m2(e3, i3) && this.setViewDate(i3), t3 && v2(e3, t3) && this.setViewDate(t3);
          }
          formatDate() {
            let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate, t3 = arguments.length > 1 ? arguments[1] : void 0;
            if (e3 = b2(e3), !(e3 instanceof Date)) return;
            let i3 = t3, s3 = this.locale, a3 = o2(e3), n3 = a3.dayPeriod, r3 = c2(e3), h3 = R2.replacer, l3 = { T: e3.getTime(), m: a3.minutes, mm: a3.fullMinutes, h: a3.hours12, hh: a3.fullHours12, H: a3.hours, HH: a3.fullHours, aa: n3, AA: n3.toUpperCase(), E: s3.daysShort[a3.day], EEEE: s3.days[a3.day], d: a3.date, dd: a3.fullDate, M: a3.month + 1, MM: a3.fullMonth, MMM: s3.monthsShort[a3.month], MMMM: s3.months[a3.month], yy: a3.year.toString().slice(-2), yyyy: a3.year, yyyy1: r3[0], yyyy2: r3[1] };
            for (let [e4, t4] of Object.entries(l3)) i3 = h3(i3, $(e4), t4);
            return i3;
          }
          down(e3) {
            this._handleUpDownActions(e3, "down");
          }
          up(e3) {
            this._handleUpDownActions(e3, "up");
          }
          selectDate(e3) {
            let t3, s3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { currentView: a3, parsedViewDate: n3, selectedDates: r3 } = this, { updateTime: h3, silent: o3 } = s3, { moveToOtherMonthsOnSelect: l3, moveToOtherYearsOnSelect: d3, multipleDates: c3, range: u3, autoClose: p3, onBeforeSelect: v3 } = this.opts, g3 = r3.length;
            if (Array.isArray(e3)) return e3.forEach((e4) => {
              this.selectDate(e4, s3);
            }), new Promise((e4) => {
              setTimeout(e4);
            });
            if ((e3 = b2(e3)) instanceof Date) {
              if (v3 && !o3 && !v3({ date: e3, datepicker: this })) return Promise.resolve();
              if (a3 === i2.days && e3.getMonth() !== n3.month && l3 && (t3 = new Date(e3.getFullYear(), e3.getMonth(), 1)), a3 === i2.years && e3.getFullYear() !== n3.year && d3 && (t3 = new Date(e3.getFullYear(), 0, 1)), t3 && this.setViewDate(t3), c3 && !u3) {
                if (g3 === c3) return;
                this._checkIfDateIsSelected(e3) || r3.push(e3);
              } else if (u3) switch (g3) {
                case 1:
                  r3.push(e3), this.rangeDateTo || (this.rangeDateTo = e3), m2(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, this.rangeDateFrom = e3), this.selectedDates = [this.rangeDateFrom, this.rangeDateTo];
                  break;
                case 2:
                  this.selectedDates = [e3], this.rangeDateFrom = e3, this.rangeDateTo = "";
                  break;
                default:
                  this.selectedDates = [e3], this.rangeDateFrom = e3;
              }
              else this.selectedDates = [e3];
              return this.trigger(i2.eventChangeSelectedDate, { action: i2.actionSelectDate, silent: null == s3 ? void 0 : s3.silent, date: e3, updateTime: h3 }), this._updateLastSelectedDate(e3), p3 && !this.timepickerIsActive && this.visible && (c3 || u3 ? u3 && 1 === g3 && this.hide() : this.hide()), new Promise((e4) => {
                setTimeout(e4);
              });
            }
          }
          unselectDate(e3) {
            let t3 = this.selectedDates, s3 = this;
            if ((e3 = b2(e3)) instanceof Date) return t3.some((a3, n3) => {
              if (p2(a3, e3)) return t3.splice(n3, 1), s3.selectedDates.length ? (s3.rangeDateTo = "", s3.rangeDateFrom = t3[0], s3._updateLastSelectedDate(s3.selectedDates[s3.selectedDates.length - 1])) : (s3.rangeDateFrom = "", s3.rangeDateTo = "", s3._updateLastSelectedDate(false)), this.trigger(i2.eventChangeSelectedDate, { action: i2.actionUnselectDate, date: e3 }), true;
            });
          }
          replaceDate(e3, t3) {
            let s3 = this.selectedDates.find((t4) => p2(t4, e3, this.currentView)), a3 = this.selectedDates.indexOf(s3);
            a3 < 0 || p2(this.selectedDates[a3], t3, this.currentView) || (this.selectedDates[a3] = t3, this.trigger(i2.eventChangeSelectedDate, { action: i2.actionSelectDate, date: t3, updateTime: true }), this._updateLastSelectedDate(t3));
          }
          clear() {
            let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this.selectedDates = [], this.rangeDateFrom = false, this.rangeDateTo = false, this.lastSelectedDate = false, this.trigger(i2.eventChangeSelectedDate, { action: i2.actionUnselectDate, silent: e3.silent }), new Promise((e4) => {
              setTimeout(e4);
            });
          }
          show() {
            let { onShow: e3, isMobile: t3 } = this.opts;
            this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), this.visible = true, e3 && this._scheduleCallAfterTransition(e3), t3 && this._showMobileOverlay();
          }
          hide() {
            let { onHide: e3, isMobile: t3 } = this.opts, i3 = this._hasTransition();
            this.visible = false, this.hideAnimation = true, this.$datepicker.classList.remove("-active-"), this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition((t4) => {
              !this.customHide && (t4 && i3 || !t4 && !i3) && this._finishHide(), e3 && e3(t4);
            }), t3 && j2.classList.remove("-active-");
          }
          _triggerOnSelect() {
            let e3 = [], t3 = [], { selectedDates: i3, locale: s3, opts: { onSelect: a3, multipleDates: n3, range: r3 } } = this, h3 = n3 || r3, o3 = "function" == typeof s3.dateFormat;
            i3.length && (e3 = i3.map(g2), t3 = o3 ? n3 ? s3.dateFormat(e3) : e3.map((e4) => s3.dateFormat(e4)) : e3.map((e4) => this.formatDate(e4, s3.dateFormat))), a3({ date: h3 ? e3 : e3[0], formattedDate: h3 ? t3 : t3[0], datepicker: this });
          }
          _handleAlreadySelectedDates(e3, t3) {
            let { selectedDates: i3, rangeDateFrom: s3, rangeDateTo: a3 } = this, { range: n3, toggleSelected: r3 } = this.opts, h3 = i3.length, o3 = "function" == typeof r3 ? r3({ datepicker: this, date: t3 }) : r3, l3 = Boolean(n3 && 1 === h3 && e3), d3 = l3 ? g2(t3) : t3;
            n3 && !o3 && (2 !== h3 && this.selectDate(d3), 2 === h3 && p2(s3, a3)) || (o3 ? this.unselectDate(d3) : this._updateLastSelectedDate(l3 ? d3 : e3));
          }
          _handleUpDownActions(e3, t3) {
            if (!((e3 = b2(e3 || this.focusDate || this.viewDate)) instanceof Date)) return;
            let i3 = "up" === t3 ? this.viewIndex + 1 : this.viewIndex - 1;
            i3 > 2 && (i3 = 2), i3 < 0 && (i3 = 0), this.setViewDate(new Date(e3.getFullYear(), e3.getMonth(), 1)), this.setCurrentView(this.viewIndexes[i3]);
          }
          getCell(e3) {
            let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i2.day;
            if (!((e3 = b2(e3)) instanceof Date)) return;
            let { year: s3, month: a3, date: n3 } = o2(e3), r3 = `[data-year="${s3}"]`, h3 = `[data-month="${a3}"]`, l3 = { [i2.day]: `${r3}${h3}[data-date="${n3}"]`, [i2.month]: `${r3}${h3}`, [i2.year]: `${r3}` };
            return this.views[this.currentView] ? this.views[this.currentView].$el.querySelector(l3[t3]) : void 0;
          }
          _showMobileOverlay() {
            j2.classList.add("-active-");
          }
          _hasTransition() {
            return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce((e3, t3) => parseFloat(t3) + e3, 0) > 0;
          }
          get shouldUpdateDOM() {
            return this.visible || this.treatAsInline;
          }
          get parsedViewDate() {
            return o2(this.viewDate);
          }
          get currentViewSingular() {
            return this.currentView.slice(0, -1);
          }
          get curDecade() {
            return c2(this.viewDate);
          }
          get viewIndex() {
            return this.viewIndexes.indexOf(this.currentView);
          }
          get isFinalView() {
            return this.currentView === i2.years;
          }
          get hasSelectedDates() {
            return this.selectedDates.length > 0;
          }
          get isMinViewReached() {
            return this.currentView === this.opts.minView || this.currentView === i2.days;
          }
          get $container() {
            return this.$customContainer || P;
          }
          static replacer(e3, t3, i3) {
            return e3.replace(t3, function(e4, t4, s3, a3) {
              return t4 + i3 + a3;
            });
          }
        }
        var K;
        return I2(R2, "defaults", s2), I2(R2, "version", "3.6.0"), I2(R2, "defaultGlobalContainerId", "air-datepicker-global-container"), K = R2.prototype, Object.assign(K, N2), t2.default;
      }();
    });
  })(airDatepicker$1);
  return airDatepicker$1.exports;
}
var airDatepickerExports = requireAirDatepicker();
const AirDatepicker = /* @__PURE__ */ getDefaultExportFromCjs(airDatepickerExports);
var en = {};
var hasRequiredEn;
function requireEn() {
  if (hasRequiredEn) return en;
  hasRequiredEn = 1;
  Object.defineProperty(en, "__esModule", {
    value: true
  });
  en.default = void 0;
  var _default = {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    clear: "Clear",
    dateFormat: "MM/dd/yyyy",
    timeFormat: "hh:mm aa",
    firstDay: 0
  };
  en.default = _default;
  return en;
}
var enExports = requireEn();
const localeEn = /* @__PURE__ */ getDefaultExportFromCjs(enExports);
export {
  Autoplay as A,
  Bowser as B,
  Choices as C,
  EffectFade as E,
  F,
  Navigation as N,
  Pagination as P,
  Swiper as S,
  Scrollbar as a,
  AirDatepicker as b,
  localeEn as l
};
