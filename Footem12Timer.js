!function (n) {
  function t(t, c) {
    var S = n.extend({}, n.fn.countdowntimer.defaults, c);
    var t = t;
    t.addClass("style");
    var m = "";
    var M = "";
    var h = "";
    var v = "";
    m = S.size;
    M = S.borderColor;
    h = S.fontColor;
    v = S.backgroundColor;
    if (undefined != c.regexpMatchFormat && undefined != c.regexpReplaceWith && undefined == c.timeSeparator) {
      window["regexpMatchFormat_" + t.attr("id")] = c.regexpMatchFormat;
      window["regexpReplaceWith_" + t.attr("id")] = c.regexpReplaceWith;
    }
    if (undefined != c.borderColor || undefined != c.fontColor || undefined != c.backgroundColor) {
      var g = {
        background: v,
        color: h,
        "border-color": M
      };
      t.css(g);
    } else {
      t.addClass("colorDefinition");
    }
    if (undefined != c.size) {
      switch (m) {
        case "xl":
          t.addClass("size_xl");
          break;
        case "lg":
          t.addClass("size_lg");
          break;
        case "md":
          t.addClass("size_md");
          break;
        case "sm":
          t.addClass("size_sm");
          break;
        case "xs":
          t.addClass("size_xs");
      }
    } else if ("sm" == m) {
      t.addClass("size_sm");
    }
    if (undefined != c.startDate || undefined != c.dateAndTime || undefined != c.currentTime || undefined == c.hours && undefined == c.minutes && undefined == c.seconds) {
      if (undefined != c.startDate && undefined != c.dateAndTime && undefined == c.currentTime) {
        startDate = "";
        endDate = "";
        timer_startDate = "";
        window["startDate" + t.attr("id")] = new Date(S.startDate);
        window["endDate" + t.attr("id")] = new Date(S.dateAndTime);
        var p = "withStart";
        a(t, S, p);
        window["timer_startDate" + t.attr("id")] = setInterval(function () {
          a(t, S, p);
        }, 1e3 * S.tickInterval);
      } else if (undefined == c.startDate && undefined != c.dateAndTime && undefined == c.currentTime) {
        startTime = "";
        dateTime = "";
        timer_givenDate = "";
        var I = S.startDate.getHours() < 10 ? "0" + S.startDate.getHours() : S.startDate.getHours();
        var f = S.startDate.getMinutes() < 10 ? "0" + S.startDate.getMinutes() : S.startDate.getMinutes();
        var k = S.startDate.getSeconds() < 10 ? "0" + S.startDate.getSeconds() : S.startDate.getSeconds();
        var D = S.startDate.getMonth() + 1 < 10 ? "0" + (S.startDate.getMonth() + 1) : S.startDate.getMonth() + 1;
        var T = S.startDate.getDate() < 10 ? "0" + S.startDate.getDate() : S.startDate.getDate();
        var x = S.startDate.getFullYear();
        window["startTime" + t.attr("id")] = new Date(x + "/" + D + "/" + T + " " + I + ":" + f + ":" + k);
        window["dateTime" + t.attr("id")] = new Date(S.dateAndTime);
        var p = "withnoStart";
        a(t, S, p);
        window["timer_givenDate" + t.attr("id")] = setInterval(function () {
          a(t, S, p);
        }, 1e3 * S.tickInterval);
      } else if (undefined != c.currentTime) {
        currentTime = "";
        timer_currentDate = "";
        window["currentTime" + t.attr("id")] = S.currentTime;
        _(t, S);
        window["timer_currentDate" + t.attr("id")] = setInterval(function () {
          _(t, S);
        }, 1e3 * S.tickInterval);
      } else {
        countSeconds = "";
        timer_secondsTimer = "";
        window["countSeconds" + t.attr("id")] = S.seconds;
        window["timer_secondsTimer" + t.attr("id")] = setInterval(function () {
          u(t);
        }, 1e3);
      }
    } else if (undefined != c.hours && undefined == c.minutes && undefined == c.seconds) {
      hours_H = "";
      minutes_H = "";
      seconds_H = "";
      timer_H = "";
      window["hours_H" + t.attr("id")] = S.hours;
      window["minutes_H" + t.attr("id")] = S.minutes;
      window["seconds_H" + t.attr("id")] = S.seconds;
      if (undefined != c.pauseButton) {
        l(t, "H", S, e);
      }
      if (undefined != c.stopButton) {
        H(t, "H", S, e);
      }
      e(t, S);
      window["timer_H" + t.attr("id")] = setInterval(function () {
        e(t, S);
      }, 1e3 * S.tickInterval);
    } else if (undefined == c.hours && undefined != c.minutes && undefined == c.seconds) {
      hours_M = "";
      minutes_M = "";
      seconds_M = "";
      timer_M = "";
      window["hours_M" + t.attr("id")] = S.hours;
      window["minutes_M" + t.attr("id")] = S.minutes;
      window["seconds_M" + t.attr("id")] = S.seconds;
      if (undefined != c.pauseButton) {
        l(t, "M", S, o);
      }
      if (undefined != c.stopButton) {
        H(t, "M", S, o);
      }
      o(t, S);
      window["timer_M" + t.attr("id")] = setInterval(function () {
        o(t, S);
      }, 1e3 * S.tickInterval);
    } else if (undefined == c.hours && undefined == c.minutes && undefined != c.seconds) {
      hours_S = "";
      minutes_S = "";
      seconds_S = "";
      timer_S = "";
      window["hours_S" + t.attr("id")] = S.hours;
      window["minutes_S" + t.attr("id")] = S.minutes;
      window["seconds_S" + t.attr("id")] = S.seconds;
      if (undefined != c.pauseButton) {
        l(t, "S", S, i);
      }
      if (undefined != c.stopButton) {
        H(t, "S", S, i);
      }
      i(t, S);
      window["timer_S" + t.attr("id")] = setInterval(function () {
        i(t, S);
      }, 1e3 * S.tickInterval);
    } else if (undefined != c.hours && undefined != c.minutes && undefined == c.seconds) {
      hours_HM = "";
      minutes_HM = "";
      seconds_HM = "";
      timer_HM = "";
      window["hours_HM" + t.attr("id")] = S.hours;
      window["minutes_HM" + t.attr("id")] = S.minutes;
      window["seconds_HM" + t.attr("id")] = S.seconds;
      if (undefined != c.pauseButton) {
        l(t, "HM", S, w);
      }
      if (undefined != c.stopButton) {
        H(t, "HM", S, w);
      }
      w(t, S);
      window["timer_HM" + t.attr("id")] = setInterval(function () {
        w(t, S);
      }, 1e3 * S.tickInterval);
    } else if (undefined == c.hours && undefined != c.minutes && undefined != c.seconds) {
      hours_MS = "";
      minutes_MS = "";
      seconds_MS = "";
      timer_MS = "";
      window["hours_MS" + t.attr("id")] = S.hours;
      window["minutes_MS" + t.attr("id")] = S.minutes;
      window["seconds_MS" + t.attr("id")] = S.seconds;
      if (undefined != c.pauseButton) {
        l(t, "MS", S, d);
      }
      if (undefined != c.stopButton) {
        H(t, "MS", S, d);
      }
      d(t, S);
      window["timer_MS" + t.attr("id")] = setInterval(function () {
        d(t, S);
      }, 1e3 * S.tickInterval);
    } else if (undefined != c.hours && undefined == c.minutes && undefined != c.seconds) {
      hours_HS = "";
      minutes_HS = "";
      seconds_HS = "";
      timer_HS = "";
      window["hours_HS" + t.attr("id")] = S.hours;
      window["minutes_HS" + t.attr("id")] = S.minutes;
      window["seconds_HS" + t.attr("id")] = S.seconds;
      if (undefined != c.pauseButton) {
        l(t, "HS", S, s);
      }
      if (undefined != c.stopButton) {
        H(t, "HS", S, s);
      }
      s(t, S);
      window["timer_HS" + t.attr("id")] = setInterval(function () {
        s(t, S);
      }, 1e3 * S.tickInterval);
    } else if (undefined != c.hours && undefined != c.minutes && undefined != c.seconds) {
      hours_HMS = "";
      minutes_HMS = "";
      seconds_HMS = "";
      timer_HMS = "";
      window["hours_HMS" + t.attr("id")] = S.hours;
      window["minutes_HMS" + t.attr("id")] = S.minutes;
      window["seconds_HMS" + t.attr("id")] = S.seconds;
      if (undefined != c.pauseButton) {
        l(t, "HMS", S, r);
      }
      if (undefined != c.stopButton) {
        H(t, "HMS", S, r);
      }
      r(t, S);
      window["timer_HMS" + t.attr("id")] = setInterval(function () {
        r(t, S);
      }, 1e3 * S.tickInterval);
    }
  }
  function e(n, t) {
    var e = n.attr("id");
    if (window["minutes_H" + e] == t.minutes && window["seconds_H" + e] == t.seconds && window["hours_H" + e] == t.hours) {
      if (window["hours_H" + e].toString().length < 2) {
        window["hours_H" + e] = "0" + window["hours_H" + e];
      }
      S(n, window["hours_H" + e] + t.timeSeparator + "00" + t.timeSeparator + "00");
      window["seconds_H" + e] = 60 - t.tickInterval;
      window["minutes_H" + e] = 59;
      if (0 != window["hours_H" + e]) {
        window["hours_H" + e]--;
      } else {
        delete window["hours_H" + e];
        delete window["minutes_H" + e];
        delete window["seconds_H" + e];
        clearInterval(window["timer_H" + e]);
        c(n, t);
      }
    } else {
      if (window["hours_H" + e].toString().length < 2) {
        window["hours_H" + e] = "0" + window["hours_H" + e];
      }
      if (window["minutes_H" + e].toString().length < 2) {
        window["minutes_H" + e] = "0" + window["minutes_H" + e];
      }
      if (window["seconds_H" + e].toString().length < 2) {
        window["seconds_H" + e] = "0" + window["seconds_H" + e];
      }
      S(n, window["hours_H" + e] + t.timeSeparator + window["minutes_H" + e] + t.timeSeparator + window["seconds_H" + e]);
      window["seconds_H" + e] -= t.tickInterval;
      if (0 != window["minutes_H" + e] && window["seconds_H" + e] < 0) {
        window["minutes_H" + e]--;
        window["seconds_H" + e] = 60 - t.tickInterval;
      }
      if (0 == window["minutes_H" + e] && window["seconds_H" + e] < 0 && 0 != window["hours_H" + e]) {
        window["hours_H" + e]--;
        window["minutes_H" + e] = 59;
        window["seconds_H" + e] = 60 - t.tickInterval;
      }
      if (0 == window["minutes_H" + e] && window["seconds_H" + e] < 0 && 0 == window["hours_H" + e]) {
        delete window["hours_H" + e];
        delete window["minutes_H" + e];
        delete window["seconds_H" + e];
        clearInterval(window["timer_H" + e]);
        c(n, t);
      }
    }
    e = null;
  }
  function o(n, t) {
    var e = n.attr("id");
    if (window["minutes_M" + e] == t.minutes && window["seconds_M" + e] == t.seconds) {
      if (window["minutes_M" + e].toString().length < 2) {
        window["minutes_M" + e] = "0" + window["minutes_M" + e];
      }
      S(n, window["minutes_M" + e] + t.timeSeparator + "00");
      window["seconds_M" + e] = 60 - t.tickInterval;
      if (0 != window["minutes_M" + e]) {
        window["minutes_M" + e]--;
      } else {
        delete window["hours_M" + e];
        delete window["minutes_M" + e];
        delete window["seconds_M" + e];
        clearInterval(window["timer_M" + e]);
        c(n, t);
      }
    } else {
      if (window["minutes_M" + e].toString().length < 2) {
        window["minutes_M" + e] = "0" + window["minutes_M" + e];
      }
      if (window["seconds_M" + e].toString().length < 2) {
        window["seconds_M" + e] = "0" + window["seconds_M" + e];
      }
      S(n, window["minutes_M" + e] + t.timeSeparator + window["seconds_M" + e]);
      window["seconds_M" + e] -= t.tickInterval;
      if (0 != window["minutes_M" + e] && window["seconds_M" + e] < 0) {
        window["minutes_M" + e]--;
        window["seconds_M" + e] = 60 - t.tickInterval;
      }
      if (0 == window["minutes_M" + e] && window["seconds_M" + e] < 0) {
        delete window["hours_M" + e];
        delete window["minutes_M" + e];
        delete window["seconds_M" + e];
        clearInterval(window["timer_M" + e]);
        c(n, t);
      }
    }
    e = null;
  }
  function i(n, t) {
    var e = n.attr("id");
    if (window["seconds_S" + e].toString().length < 2) {
      window["seconds_S" + e] = "0" + window["seconds_S" + e];
    }
    S(n, window["seconds_S" + e] + " sec");
    window["seconds_S" + e] -= t.tickInterval;
    if (window["seconds_S" + e] < 0) {
      delete window["hours_S" + e];
      delete window["minutes_S" + e];
      delete window["seconds_S" + e];
      clearInterval(window["timer_S" + e]);
      c(n, t);
    }
    e = null;
  }
  function w(n, t) {
    var e = n.attr("id");
    if (window["minutes_HM" + e] == t.minutes && window["hours_HM" + e] == t.hours) {
      if (window["hours_HM" + e].toString().length < 2) {
        window["hours_HM" + e] = "0" + window["hours_HM" + e];
      }
      if (window["minutes_HM" + e].toString().length < 2) {
        window["minutes_HM" + e] = "0" + window["minutes_HM" + e];
      }
      S(n, window["hours_HM" + e] + t.timeSeparator + window["minutes_HM" + e] + t.timeSeparator + "00");
      if (0 != window["hours_HM" + e] && 0 == window["minutes_HM" + e]) {
        window["hours_HM" + e]--;
        window["minutes_HM" + e] = 59;
        window["seconds_HM" + e] = 60 - t.tickInterval;
      } else if (0 == window["hours_HM" + e] && 0 != window["minutes_HM" + e]) {
        window["seconds_HM" + e] = 60 - t.tickInterval;
        window["minutes_HM" + e]--;
      } else {
        window["seconds_HM" + e] = 60 - t.tickInterval;
        window["minutes_HM" + e]--;
      }
      if (0 == window["hours_HM" + e] && 0 == window["minutes_HM" + e] && 60 == window["seconds_HM" + e]) {
        delete window["hours_HM" + e];
        delete window["minutes_HM" + e];
        delete window["seconds_HM" + e];
        clearInterval(window["timer_HM" + e]);
        c(n, t);
      }
    } else {
      if (window["hours_HM" + e].toString().length < 2) {
        window["hours_HM" + e] = "0" + window["hours_HM" + e];
      }
      if (window["minutes_HM" + e].toString().length < 2) {
        window["minutes_HM" + e] = "0" + window["minutes_HM" + e];
      }
      if (window["seconds_HM" + e].toString().length < 2) {
        window["seconds_HM" + e] = "0" + window["seconds_HM" + e];
      }
      S(n, window["hours_HM" + e] + t.timeSeparator + window["minutes_HM" + e] + t.timeSeparator + window["seconds_HM" + e]);
      window["seconds_HM" + e] -= t.tickInterval;
      if (0 != window["minutes_HM" + e] && window["seconds_HM" + e] < 0) {
        window["minutes_HM" + e]--;
        window["seconds_HM" + e] = 60 - t.tickInterval;
      }
      if (0 == window["minutes_HM" + e] && window["seconds_HM" + e] < 0 && 0 != window["hours_HM" + e]) {
        window["hours_HM" + e]--;
        window["minutes_HM" + e] = 59;
        window["seconds_HM" + e] = 60 - t.tickInterval;
      }
      if (0 == window["minutes_HM" + e] && window["seconds_HM" + e] < 0 && 0 == window["hours_HM" + e]) {
        delete window["hours_HM" + e];
        delete window["minutes_HM" + e];
        delete window["seconds_HM" + e];
        clearInterval(window["timer_HM" + e]);
        c(n, t);
      }
    }
    e = null;
  }
  function d(n, t) {
    var e = n.attr("id");
    if (window["minutes_MS" + e] == t.minutes && window["seconds_MS" + e] == t.seconds) {
      if (window["minutes_MS" + e].toString().length < 2) {
        window["minutes_MS" + e] = "0" + window["minutes_MS" + e];
      }
      if (window["seconds_MS" + e].toString().length < 2) {
        window["seconds_MS" + e] = "0" + window["seconds_MS" + e];
      }
      S(n, window["minutes_MS" + e] + t.timeSeparator + window["seconds_MS" + e]);
      if (0 != window["minutes_MS" + e] && 0 == window["seconds_MS" + e]) {
        window["minutes_MS" + e]--;
        window["seconds_MS" + e] = 60 - t.tickInterval;
      } else if (0 == window["minutes_MS" + e] && 0 == window["seconds_MS" + e]) {
        delete window["hours_MS" + e];
        delete window["minutes_MS" + e];
        delete window["seconds_MS" + e];
        clearInterval(window["timer_MS" + e]);
        c(n, t);
      } else {
        window["seconds_MS" + e] -= t.tickInterval;
      }
    } else {
      if (window["minutes_MS" + e].toString().length < 2) {
        window["minutes_MS" + e] = "0" + window["minutes_MS" + e];
      }
      if (window["seconds_MS" + e].toString().length < 2) {
        window["seconds_MS" + e] = "0" + window["seconds_MS" + e];
      }
      S(n, window["minutes_MS" + e] + t.timeSeparator + window["seconds_MS" + e]);
      window["seconds_MS" + e] -= t.tickInterval;
      if (0 != window["minutes_MS" + e] && window["seconds_MS" + e] < 0) {
        window["minutes_MS" + e]--;
        window["seconds_MS" + e] = 60 - t.tickInterval;
      }
      if (0 == window["minutes_MS" + e] && window["seconds_MS" + e] < 0) {
        delete window["hours_MS" + e];
        delete window["minutes_MS" + e];
        delete window["seconds_MS" + e];
        clearInterval(window["timer_MS" + e]);
        c(n, t);
      }
    }
    e = null;
  }
  function s(n, t) {
    var e = n.attr("id");
    if (window["seconds_HS" + e] == t.seconds && window["hours_HS" + e] == t.hours) {
      if (window["hours_HS" + e].toString().length < 2) {
        window["hours_HS" + e] = "0" + window["hours_HS" + e];
      }
      if (window["seconds_HS" + e].toString().length < 2) {
        window["seconds_HS" + e] = "0" + window["seconds_HS" + e];
      }
      S(n, window["hours_HS" + e] + t.timeSeparator + "00" + t.timeSeparator + window["seconds_HS" + e]);
      if (0 == window["hours_HS" + e] && 0 == window["seconds_HS" + e]) {
        delete window["hours_HS" + e];
        delete window["minutes_HS" + e];
        delete window["seconds_HS" + e];
        clearInterval(window["timer_HS" + e]);
        c(n, t);
      } else if (0 != window["hours_HS" + e] && 0 == window["seconds_HS" + e]) {
        window["hours_HS" + e]--;
        window["minutes_HS" + e] = 59;
        window["seconds_HS" + e] = 60 - t.tickInterval;
      } else {
        window["seconds_HS" + e] -= t.tickInterval;
      }
    } else {
      if (window["hours_HS" + e].toString().length < 2) {
        window["hours_HS" + e] = "0" + window["hours_HS" + e];
      }
      if (window["minutes_HS" + e].toString().length < 2) {
        window["minutes_HS" + e] = "0" + window["minutes_HS" + e];
      }
      if (window["seconds_HS" + e].toString().length < 2) {
        window["seconds_HS" + e] = "0" + window["seconds_HS" + e];
      }
      S(n, window["hours_HS" + e] + t.timeSeparator + window["minutes_HS" + e] + t.timeSeparator + window["seconds_HS" + e]);
      window["seconds_HS" + e] -= t.tickInterval;
      if (0 != window["minutes_HS" + e] && window["seconds_HS" + e] < 0) {
        window["minutes_HS" + e]--;
        window["seconds_HS" + e] = 60 - t.tickInterval;
      }
      if (0 == window["minutes_HS" + e] && window["seconds_HS" + e] < 0 && 0 != window["hours_HS" + e]) {
        window["hours_HS" + e]--;
        window["minutes_HS" + e] = 59;
        window["seconds_HS" + e] = 60 - t.tickInterval;
      }
      if (0 == window["minutes_HS" + e] && window["seconds_HS" + e] < 0 && 0 == window["hours_HS" + e]) {
        delete window["hours_HS" + e];
        delete window["minutes_HS" + e];
        delete window["seconds_HS" + e];
        clearInterval(window["timer_HS" + e]);
        c(n, t);
      }
    }
    e = null;
  }
  function r(n, t) {
    var e = n.attr("id");
    if (window["minutes_HMS" + e] == t.minutes && window["seconds_HMS" + e] == t.seconds && window["hours_HMS" + e] == t.hours) {
      if (window["hours_HMS" + e].toString().length < 2) {
        window["hours_HMS" + e] = "0" + window["hours_HMS" + e];
      }
      if (window["minutes_HMS" + e].toString().length < 2) {
        window["minutes_HMS" + e] = "0" + window["minutes_HMS" + e];
      }
      if (window["seconds_HMS" + e].toString().length < 2) {
        window["seconds_HMS" + e] = "0" + window["seconds_HMS" + e];
      }
      S(n, window["hours_HMS" + e] + t.timeSeparator + window["minutes_HMS" + e] + t.timeSeparator + window["seconds_HMS" + e]);
      if (0 == window["hours_HMS" + e] && 0 == window["minutes_HMS" + e] && 0 == window["seconds_HMS" + e]) {
        delete window["hours_HMS" + e];
        delete window["minutes_HMS" + e];
        delete window["seconds_HMS" + e];
        clearInterval(window["timer_HMS" + e]);
        c(n, t);
      } else if (0 != window["hours_HMS" + e] && 0 == window["minutes_HMS" + e] && 0 == window["seconds_HMS" + e]) {
        window["hours_HMS" + e]--;
        window["minutes_HMS" + e] = 59;
        window["seconds_HMS" + e] = 60 - t.tickInterval;
      } else if (0 == window["hours_HMS" + e] && 0 != window["minutes_HMS" + e] && 0 == window["seconds_HMS" + e]) {
        window["minutes_HMS" + e]--;
        window["seconds_HMS" + e] = 60 - t.tickInterval;
      } else if (0 != window["hours_HMS" + e] && 0 != window["minutes_HMS" + e] && 0 == window["seconds_HMS" + e]) {
        window["minutes_HMS" + e]--;
        window["seconds_HMS" + e] = 60 - t.tickInterval;
      } else {
        window["seconds_HMS" + e] -= t.tickInterval;
      }
    } else {
      if (window["hours_HMS" + e].toString().length < 2) {
        window["hours_HMS" + e] = "0" + window["hours_HMS" + e];
      }
      if (window["minutes_HMS" + e].toString().length < 2) {
        window["minutes_HMS" + e] = "0" + window["minutes_HMS" + e];
      }
      if (window["seconds_HMS" + e].toString().length < 2) {
        window["seconds_HMS" + e] = "0" + window["seconds_HMS" + e];
      }
      S(n, window["hours_HMS" + e] + t.timeSeparator + window["minutes_HMS" + e] + t.timeSeparator + window["seconds_HMS" + e]);
      window["seconds_HMS" + e] -= t.tickInterval;
      if (0 != window["minutes_HMS" + e] && window["seconds_HMS" + e] < 0) {
        window["minutes_HMS" + e]--;
        window["seconds_HMS" + e] = 60 - t.tickInterval;
      }
      if (0 == window["minutes_HMS" + e] && window["seconds_HMS" + e] < 0 && 0 != window["hours_HMS" + e]) {
        window["hours_HMS" + e]--;
        window["minutes_HMS" + e] = 59;
        window["seconds_HMS" + e] = 60 - t.tickInterval;
      }
      if (0 == window["minutes_HMS" + e] && window["seconds_HMS" + e] < 0 && 0 == window["hours_HMS" + e]) {
        delete window["hours_HMS" + e];
        delete window["minutes_HMS" + e];
        delete window["seconds_HMS" + e];
        clearInterval(window["timer_HMS" + e]);
        c(n, t);
      }
    }
    e = null;
  }
  function a(n, t, e) {
    var o = n.attr("id");
    var i = "withnoStart" == e ? window["dateTime" + o] : window["endDate" + o];
    var w = "withnoStart" == e ? window["startTime" + o] : window["startDate" + o];
    var d = Math.floor((i - w) / 864e5);
    var s = Math.floor((i - w) % 864e5 / 36e5);
    var r = Math.floor((i - w) % 864e5 / 6e4) % 60;
    var a = Math.floor((i - w) % 864e5 / 1e3) % 60 % 60;
    if (i - w > 0) {
      if (d.toString().length < 2) {
        d = "0" + d;
      }
      if (s.toString().length < 2) {
        s = "0" + s;
      }
      if (r.toString().length < 2) {
        r = "0" + r;
      }
      if (a.toString().length < 2) {
        a = "0" + a;
      }
      S(n, d + t.timeSeparator + s + t.timeSeparator + r + t.timeSeparator + a);
      if ("withnoStart" == e) {
        window["startTime" + o].setSeconds(window["startTime" + o].getSeconds() + t.tickInterval);
      } else {
        window["startDate" + o].setSeconds(window["startDate" + o].getSeconds() + t.tickInterval);
      }
    } else {
      S(n, "00" + t.timeSeparator + "00" + t.timeSeparator + "00" + t.timeSeparator + "00");
      if ("withnoStart" == e) {
        delete window["dateTime" + o];
        delete window["startTime" + o];
        clearInterval(window["timer_givenDate" + o]);
      } else if ("withStart" == e) {
        delete window["startDate" + o];
        delete window["endDate" + o];
        clearInterval(window["timer_startDate" + o]);
      }
      c(n, t);
    }
    o = null;
  }
  function _(n, t) {
    if (1 == window["currentTime" + n.attr("id")]) {
      var e = new Date();
      var o = e.getHours();
      var i = e.getMinutes();
      var w = e.getSeconds();
      if (o.toString().length < 2) {
        o = "0" + o;
      }
      if (i.toString().length < 2) {
        i = "0" + i;
      }
      if (w.toString().length < 2) {
        w = "0" + w;
      }
      S(n, o + t.timeSeparator + i + t.timeSeparator + w);
    } else {
      alert("Set Current Time option.");
    }
  }
  function u(n) {
    var t = n.attr("id");
    if (window["countSeconds" + t].toString().length < 2) {
      window["countSeconds" + t] = "0" + window["countSeconds" + t];
    }
    S(n, window["countSeconds" + t] + " sec");
    window["countSeconds" + t]--;
    if (-1 == window["countSeconds" + t]) {
      delete window["countSeconds" + t];
      clearInterval(window["timer_secondsTimer" + t]);
    }
    t = null;
  }
  function c(t, e) {
    if (null != e.timeUp && 1 == n.isFunction(e.timeUp)) {
      e.timeUp.apply(t, []);
    }
    if (null != e.expiryUrl) {
      window.location = e.expiryUrl;
    }
  }
  function S(n, t) {
    var e = t;
    if ("undefined" != typeof window["regexpMatchFormat_" + n.attr("id")] && "undefined" != typeof window["regexpReplaceWith_" + n.attr("id")]) {
      var o = new RegExp(window["regexpMatchFormat_" + n.attr("id")]);
      e = t.replace(o, window["regexpReplaceWith_" + n.attr("id")]);
    }
    n.html(e);
  }
  function l(t, e, o, i) {
    n("#" + o.pauseButton).click(function () {
      if ("resume" != n(this).val()) {
        n("#" + o.pauseButton).val("resume").text("Resume");
        clearInterval(window["timer_" + e + t.attr("id")]);
      } else if ("resume" == n(this).val()) {
        n("#" + o.pauseButton).val("pause").text("Pause");
        window["timer_" + e + t.attr("id")] = setInterval(function () {
          i(t, o);
        }, 1e3 * o.tickInterval);
      }
    });
  }
  function H(t, e, o, i) {
    n("#" + o.stopButton).click(function () {
      if ("start" != n(this).val()) {
        n("#" + o.stopButton).val("start").text("Start");
        clearInterval(window["timer_" + e + t.attr("id")]);
        window["hours_" + e + t.attr("id")] = o.hours;
        window["minutes_" + e + t.attr("id")] = o.minutes;
        window["seconds_" + e + t.attr("id")] = o.seconds;
        i(t, o);
      } else if ("start" == n(this).val()) {
        n("#" + o.stopButton).val("stop").text("Stop");
        window["timer_" + e + t.attr("id")] = setInterval(function () {
          i(t, o);
        }, 1e3 * o.tickInterval);
      }
    });
  }
  n.fn.countdowntimer = function (e) {
    return this.each(function () {
      t(n(this), e);
    });
  };
  n.fn.countdowntimer.defaults = {
    hours: 0,
    minutes: 0,
    seconds: 60,
    startDate: new Date(),
    dateAndTime: new Date("0000/00/00 00:00:00"),
    currentTime: false,
    size: "sm",
    borderColor: "#F0068E",
    fontColor: "#FFFFFF",
    backgroundColor: "#000000",
    timeSeparator: ":",
    tickInterval: 1,
    timeUp: null,
    expiryUrl: null,
    regexpMatchFormat: null,
    regexpReplaceWith: null,
    pauseButton: null,
    stopButton: null
  };
}(jQuery);
!function (t) {
  "use strict";

  function o(o, _) {
    var M = t.extend({}, t.fn.countdowntimer.defaults, _);
    t.extend(true, M, t.fn.countdowntimer.regionalOptions, _);
    o.data("opts", {
      opts: M
    });
    o.addClass("style");
    var S = M.size;
    var v = M.borderColor;
    var H = M.fontColor;
    var p = M.backgroundColor;
    if (undefined !== _.regexpMatchFormat && undefined !== _.regexpReplaceWith && undefined === _.timeSeparator && undefined === _.labelsFormat) {
      window["regexpMatchFormat_" + o.attr("id")] = _.regexpMatchFormat;
      window["regexpReplaceWith_" + o.attr("id")] = _.regexpReplaceWith;
    }
    if (undefined !== _.displayFormat) {
      var h = [];
      h[0] = M.displayFormat.match("Y") ? "!" : "#";
      h[1] = M.displayFormat.match("O") ? "!" : "#";
      h[2] = M.displayFormat.match("D") ? "!" : "#";
      h[3] = M.displayFormat.match("H") ? "!" : "#";
      h[4] = M.displayFormat.match("M") ? "!" : "#";
      h[5] = M.displayFormat.match("S") ? "!" : "#";
      M.displayFormat = h.join("");
    } else {
      M.displayFormat = "###!!!";
    }
    if (undefined !== _.borderColor || undefined !== _.fontColor || undefined !== _.backgroundColor) {
      var f = {
        background: p,
        color: H,
        "border-color": v
      };
      o.css(f);
    } else {
      o.addClass("colorDefinition");
    }
    if (false === M.labelsFormat) {
      if (undefined !== _.size) {
        switch (S) {
          case "xl":
            o.addClass("size_xl");
            break;
          case "lg":
            o.addClass("size_lg");
            break;
          case "md":
            o.addClass("size_md");
            break;
          case "sm":
            o.addClass("size_sm");
            break;
          case "xs":
            o.addClass("size_xs");
        }
      } else if ("sm" === S) {
        o.addClass("size_sm");
      }
    }
    if (true === M.isRTL) {
      o.addClass("lang-rtl");
    }
    if (undefined !== _.startDate || undefined !== _.dateAndTime || undefined !== _.currentTime || undefined === _.hours && undefined === _.minutes && undefined === _.seconds) {
      if (undefined !== _.startDate && undefined !== _.dateAndTime && undefined === _.currentTime) {
        window["startDate" + o.attr("id")] = new Date(M.startDate);
        window["endDate" + o.attr("id")] = null !== M.timeZone ? new Date(new Date(M.dateAndTime).getTime() + 6e4 * new Date(M.dateAndTime).getTimezoneOffset() + 6e4 * (Math.abs(M.timeZone) < 30 ? 60 * M.timeZone : M.timeZone)) : new Date(M.dateAndTime);
        if (undefined !== _.beforeExpiryTime) {
          window["beforeExpiry_withStart" + o.attr("id")] = M.beforeExpiryTime;
        }
        c(o, M, "withStart");
        window["timer_startDate" + o.attr("id")] = setInterval(function () {
          c(o, M, "withStart");
        }, 1e3 * M.tickInterval);
      } else if (undefined === _.startDate && undefined !== _.dateAndTime && undefined === _.currentTime) {
        var y = M.startDate.getHours();
        var x = M.startDate.getMinutes();
        var I = M.startDate.getSeconds();
        var g = M.startDate.getMonth() + 1;
        var b = M.startDate.getDate();
        var k = M.startDate.getFullYear();
        var D = new Date(k + "/" + g + "/" + b + " " + y + ":" + x + ":" + I);
        window["startTime" + o.attr("id")] = D;
        window["dateTime" + o.attr("id")] = null !== M.timeZone ? new Date(new Date(M.dateAndTime).getTime() + 6e4 * new Date(M.dateAndTime).getTimezoneOffset() + 6e4 * (Math.abs(M.timeZone) < 30 ? 60 * M.timeZone : M.timeZone)) : new Date(M.dateAndTime);
        if (undefined !== _.beforeExpiryTime) {
          window["beforeExpiry_withnoStart" + o.attr("id")] = M.beforeExpiryTime;
        }
        c(o, M, "withnoStart");
        window["timer_givenDate" + o.attr("id")] = setInterval(function () {
          c(o, M, "withnoStart");
        }, 1e3 * M.tickInterval);
      } else if (undefined !== _.currentTime && true === M.currentTime) {
        l(o, M);
        window["timer_currentDate" + o.attr("id")] = setInterval(function () {
          l(o, M);
        }, 1e3 * M.tickInterval);
      } else {
        window["countSeconds" + o.attr("id")] = M.seconds;
        m(o, M);
        window["timer_secondsTimer" + o.attr("id")] = setInterval(function () {
          m(o, M);
        }, 1e3);
      }
    } else if (undefined !== _.hours && undefined === _.minutes && undefined === _.seconds) {
      n(o, "H", M, i, _);
    } else if (undefined === _.hours && undefined !== _.minutes && undefined === _.seconds) {
      n(o, "M", M, d, _);
    } else if (undefined === _.hours && undefined === _.minutes && undefined !== _.seconds) {
      n(o, "S", M, s, _);
    } else if (undefined !== _.hours && undefined !== _.minutes && undefined === _.seconds) {
      n(o, "HM", M, w, _);
    } else if (undefined === _.hours && undefined !== _.minutes && undefined !== _.seconds) {
      n(o, "MS", M, r, _);
    } else if (undefined !== _.hours && undefined === _.minutes && undefined !== _.seconds) {
      n(o, "HS", M, a, _);
    } else if (undefined !== _.hours && undefined !== _.minutes && undefined !== _.seconds) {
      n(o, "HMS", M, u, _);
    }
  }
  function n(t, o, n, e, i) {
    t.data("typefunc", {
      type: o,
      func: e
    });
    window["hours_" + o + t.attr("id")] = n.hours;
    window["minutes_" + o + t.attr("id")] = n.minutes;
    window["seconds_" + o + t.attr("id")] = n.seconds;
    if (undefined !== i.beforeExpiryTime) {
      window["beforeExpiry_" + o + t.attr("id")] = n.beforeExpiryTime;
    }
    if (undefined !== i.pauseButton) {
      H(t, o, n, e);
    }
    if (undefined !== i.stopButton) {
      p(t, o, n, e);
    }
    e(t, n);
    window["timer_" + o + t.attr("id")] = setInterval(function () {
      e(t, n);
    }, 1e3 * n.tickInterval);
  }
  function i(t, o) {
    var n = t.attr("id");
    var e = "";
    if (window["minutes_H" + n] === o.minutes && window["seconds_H" + n] === o.seconds && window["hours_H" + n] === o.hours) {
      v(t, e = S(t, o, 0, 0, 0, window["hours_H" + n], 0, 0), o);
      if (undefined !== window["beforeExpiry_H" + n]) {
        M(t, o, e, "H");
      }
      window["seconds_H" + n] = 60 - o.tickInterval;
      window["minutes_H" + n] = 59;
      if (0 !== window["hours_H" + n]) {
        window["hours_H" + n]--;
      } else {
        h(t, "H", o);
      }
      if (true === t.data("countdowntimer").destroy) {
        h(t, "H", o);
      }
    } else {
      v(t, e = S(t, o, 0, 0, 0, window["hours_H" + n], window["minutes_H" + n], window["seconds_H" + n]), o);
      if (undefined !== window["beforeExpiry_H" + n]) {
        M(t, o, e, "H");
      }
      window["seconds_H" + n] -= o.tickInterval;
      if (0 !== window["minutes_H" + n] && window["seconds_H" + n] < 0) {
        window["minutes_H" + n]--;
        window["seconds_H" + n] = 60 - o.tickInterval;
      }
      if (0 === window["minutes_H" + n] && window["seconds_H" + n] < 0 && 0 !== window["hours_H" + n]) {
        window["hours_H" + n]--;
        window["minutes_H" + n] = 59;
        window["seconds_H" + n] = 60 - o.tickInterval;
      }
      if (0 === window["minutes_H" + n] && window["seconds_H" + n] < 0 && 0 === window["hours_H" + n] || true === t.data("countdowntimer").destroy) {
        h(t, "H", o);
      }
    }
    n = null;
  }
  function d(t, o) {
    var n = t.attr("id");
    var e = "";
    if (window["minutes_M" + n] === o.minutes && window["seconds_M" + n] === o.seconds) {
      v(t, e = S(t, o, 0, 0, 0, 0, window["minutes_M" + n], 0), o);
      if (undefined !== window["beforeExpiry_M" + n]) {
        M(t, o, e, "M");
      }
      window["seconds_M" + n] = 60 - o.tickInterval;
      if (0 !== window["minutes_M" + n]) {
        window["minutes_M" + n]--;
      } else {
        h(t, "M", o);
      }
      if (true === t.data("countdowntimer").destroy) {
        h(t, "M", o);
      }
    } else {
      v(t, e = S(t, o, 0, 0, 0, 0, window["minutes_M" + n], window["seconds_M" + n]), o);
      if (undefined !== window["beforeExpiry_M" + n]) {
        M(t, o, e, "M");
      }
      window["seconds_M" + n] -= o.tickInterval;
      if (0 !== window["minutes_M" + n] && window["seconds_M" + n] < 0) {
        window["minutes_M" + n]--;
        window["seconds_M" + n] = 60 - o.tickInterval;
      }
      if (0 === window["minutes_M" + n] && window["seconds_M" + n] < 0 || true === t.data("countdowntimer").destroy) {
        h(t, "M", o);
      }
    }
    n = null;
  }
  function s(t, o) {
    var n = t.attr("id");
    var e = "";
    v(t, e = S(t, o, 0, 0, 0, 0, 0, window["seconds_S" + n]), o);
    if (undefined !== window["beforeExpiry_S" + n]) {
      M(t, o, e, "S");
    }
    window["seconds_S" + n] -= o.tickInterval;
    if (window["seconds_S" + n] < 0 || true === t.data("countdowntimer").destroy) {
      h(t, "S", o);
    }
    n = null;
  }
  function w(t, o) {
    var n = t.attr("id");
    var e = "";
    if (window["minutes_HM" + n] === o.minutes && window["hours_HM" + n] === o.hours) {
      v(t, e = S(t, o, 0, 0, 0, window["hours_HM" + n], window["minutes_HM" + n], 0), o);
      if (undefined !== window["beforeExpiry_HM" + n]) {
        M(t, o, e, "HM");
      }
      if (0 !== window["hours_HM" + n] && 0 === window["minutes_HM" + n]) {
        window["hours_HM" + n]--;
        window["minutes_HM" + n] = 59;
        window["seconds_HM" + n] = 60 - o.tickInterval;
      } else {
        if (0 === window["hours_HM" + n]) {
          window["minutes_HM" + n];
        }
        window["seconds_HM" + n] = 60 - o.tickInterval;
        window["minutes_HM" + n]--;
      }
      if (0 === window["hours_HM" + n] && 0 === window["minutes_HM" + n] && 60 == window["seconds_HM" + n]) {
        h(t, "HM", o);
      }
      if (true === t.data("countdowntimer").destroy) {
        h(t, "HM", o);
      }
    } else {
      v(t, e = S(t, o, 0, 0, 0, window["hours_HM" + n], window["minutes_HM" + n], window["seconds_HM" + n]), o);
      if (undefined !== window["beforeExpiry_HM" + n]) {
        M(t, o, e, "HM");
      }
      window["seconds_HM" + n] -= o.tickInterval;
      if (0 !== window["minutes_HM" + n] && window["seconds_HM" + n] < 0) {
        window["minutes_HM" + n]--;
        window["seconds_HM" + n] = 60 - o.tickInterval;
      }
      if (0 === window["minutes_HM" + n] && window["seconds_HM" + n] < 0 && 0 !== window["hours_HM" + n]) {
        window["hours_HM" + n]--;
        window["minutes_HM" + n] = 59;
        window["seconds_HM" + n] = 60 - o.tickInterval;
      }
      if (0 === window["minutes_HM" + n] && window["seconds_HM" + n] < 0 && 0 === window["hours_HM" + n] || true === t.data("countdowntimer").destroy) {
        h(t, "HM", o);
      }
    }
    n = null;
  }
  function r(t, o) {
    var n = t.attr("id");
    var e = "";
    if (window["minutes_MS" + n] === o.minutes && window["seconds_MS" + n] === o.seconds) {
      v(t, e = S(t, o, 0, 0, 0, 0, window["minutes_MS" + n], window["seconds_MS" + n]), o);
      if (undefined !== window["beforeExpiry_MS" + n]) {
        M(t, o, e, "MS");
      }
      if (0 !== window["minutes_MS" + n] && 0 === window["seconds_MS" + n]) {
        window["minutes_MS" + n]--;
        window["seconds_MS" + n] = 60 - o.tickInterval;
      } else if (0 === window["minutes_MS" + n] && 0 === window["seconds_MS" + n]) {
        h(t, "MS", o);
      } else {
        window["seconds_MS" + n] -= o.tickInterval;
      }
      if (true === t.data("countdowntimer").destroy) {
        h(t, "MS", o);
      }
    } else {
      v(t, e = S(t, o, 0, 0, 0, 0, window["minutes_MS" + n], window["seconds_MS" + n]), o);
      if (undefined !== window["beforeExpiry_MS" + n]) {
        M(t, o, e, "MS");
      }
      window["seconds_MS" + n] -= o.tickInterval;
      if (0 !== window["minutes_MS" + n] && window["seconds_MS" + n] < 0) {
        window["minutes_MS" + n]--;
        window["seconds_MS" + n] = 60 - o.tickInterval;
      }
      if (0 === window["minutes_MS" + n] && window["seconds_MS" + n] < 0 || true === t.data("countdowntimer").destroy) {
        h(t, "MS", o);
      }
    }
    n = null;
  }
  function a(t, o) {
    var n = t.attr("id");
    var e = "";
    if (window["seconds_HS" + n] === o.seconds && window["hours_HS" + n] === o.hours) {
      v(t, e = S(t, o, 0, 0, 0, window["hours_HS" + n], 0, window["seconds_HS" + n]), o);
      if (undefined !== window["beforeExpiry_HS" + n]) {
        M(t, o, e, "HS");
      }
      if (0 === window["hours_HS" + n] && 0 === window["seconds_HS" + n]) {
        h(t, "HS", o);
      } else if (0 !== window["hours_HS" + n] && 0 === window["seconds_HS" + n]) {
        window["hours_HS" + n]--;
        window["minutes_HS" + n] = 59;
        window["seconds_HS" + n] = 60 - o.tickInterval;
      } else {
        window["seconds_HS" + n] -= o.tickInterval;
      }
      if (true === t.data("countdowntimer").destroy) {
        h(t, "HS", o);
      }
    } else {
      v(t, e = S(t, o, 0, 0, 0, window["hours_HS" + n], window["minutes_HS" + n], window["seconds_HS" + n]), o);
      if (undefined !== window["beforeExpiry_HS" + n]) {
        M(t, o, e, "HS");
      }
      window["seconds_HS" + n] -= o.tickInterval;
      if (0 !== window["minutes_HS" + n] && window["seconds_HS" + n] < 0) {
        window["minutes_HS" + n]--;
        window["seconds_HS" + n] = 60 - o.tickInterval;
      }
      if (0 === window["minutes_HS" + n] && window["seconds_HS" + n] < 0 && 0 !== window["hours_HS" + n]) {
        window["hours_HS" + n]--;
        window["minutes_HS" + n] = 59;
        window["seconds_HS" + n] = 60 - o.tickInterval;
      }
      if (0 === window["minutes_HS" + n] && window["seconds_HS" + n] < 0 && 0 === window["hours_HS" + n] || true === t.data("countdowntimer").destroy) {
        h(t, "HS", o);
      }
    }
    n = null;
  }
  function u(t, o) {
    var n = t.attr("id");
    var e = "";
    if (window["minutes_HMS" + n] === o.minutes && window["seconds_HMS" + n] === o.seconds && window["hours_HMS" + n] === o.hours) {
      v(t, e = S(t, o, 0, 0, 0, window["hours_HMS" + n], window["minutes_HMS" + n], window["seconds_HMS" + n]), o);
      if (undefined !== window["beforeExpiry_HMS" + n]) {
        M(t, o, e, "HMS");
      }
      if (0 === window["hours_HMS" + n] && 0 === window["minutes_HMS" + n] && 0 === window["seconds_HMS" + n]) {
        h(t, "HMS", o);
      } else if (0 !== window["hours_HMS" + n] && 0 === window["minutes_HMS" + n] && 0 === window["seconds_HMS" + n]) {
        window["hours_HMS" + n]--;
        window["minutes_HMS" + n] = 59;
        window["seconds_HMS" + n] = 60 - o.tickInterval;
      } else if (0 === window["hours_HMS" + n] && 0 !== window["minutes_HMS" + n] && 0 === window["seconds_HMS" + n]) {
        window["minutes_HMS" + n]--;
        window["seconds_HMS" + n] = 60 - o.tickInterval;
      } else if (0 !== window["hours_HMS" + n] && 0 !== window["minutes_HMS" + n] && 0 === window["seconds_HMS" + n]) {
        window["minutes_HMS" + n]--;
        window["seconds_HMS" + n] = 60 - o.tickInterval;
      } else {
        window["seconds_HMS" + n] -= o.tickInterval;
      }
      if (true === t.data("countdowntimer").destroy) {
        h(t, "HMS", o);
      }
    } else {
      v(t, e = S(t, o, 0, 0, 0, window["hours_HMS" + n], window["minutes_HMS" + n], window["seconds_HMS" + n]), o);
      if (undefined !== window["beforeExpiry_HMS" + n]) {
        M(t, o, e, "HMS");
      }
      window["seconds_HMS" + n] -= o.tickInterval;
      if (0 !== window["minutes_HMS" + n] && window["seconds_HMS" + n] < 0) {
        window["minutes_HMS" + n]--;
        window["seconds_HMS" + n] = 60 - o.tickInterval;
      }
      if (0 === window["minutes_HMS" + n] && window["seconds_HMS" + n] < 0 && 0 !== window["hours_HMS" + n]) {
        window["hours_HMS" + n]--;
        window["minutes_HMS" + n] = 59;
        window["seconds_HMS" + n] = 60 - o.tickInterval;
      }
      if (0 === window["minutes_HMS" + n] && window["seconds_HMS" + n] < 0 && 0 === window["hours_HMS" + n] || true === t.data("countdowntimer").destroy) {
        h(t, "HMS", o);
      }
    }
    n = null;
  }
  function c(t, o, n) {
    var e = t.attr("id");
    var i = "withnoStart" === n ? window["dateTime" + e] : window["endDate" + e];
    var d = "withnoStart" === n ? window["startTime" + e] : window["startDate" + e];
    var s = (i - d) / 1e3;
    var w = "";
    if (i - d > 0) {
      if ("withStart" === n && d > new Date()) {
        v(t, w = S(t, o, 0, 0, 0, 0, 0, 0), o);
      } else {
        v(t, w = S(t, o, 0, 0, 0, 0, 0, s), o);
        if (undefined !== window["beforeExpiry_" + n + e]) {
          M(t, o, w, n);
        }
        if ("withnoStart" == n) {
          window["startTime" + e].setSeconds(window["startTime" + e].getSeconds() + o.tickInterval);
        } else {
          window["startDate" + e].setSeconds(window["startDate" + e].getSeconds() + o.tickInterval);
        }
      }
      if (true === t.data("countdowntimer").destroy) {
        h(t, n, o);
      }
    } else {
      v(t, w = S(t, o, 0, 0, 0, 0, 0, 0), o);
      h(t, n, o);
    }
    e = null;
  }
  function l(t, o) {
    var n = null !== o.timeZone ? new Date(new Date().getTime() + 6e4 * new Date().getTimezoneOffset() + 6e4 * (Math.abs(o.timeZone) < 30 ? 60 * o.timeZone : o.timeZone)) : new Date();
    v(t, S(t, o, 0, 0, 0, n.getHours(), n.getMinutes(), n.getSeconds()), o);
  }
  function m(t, o) {
    var n = t.attr("id");
    if (window["countSeconds" + n].toString().length < 2) {
      window["countSeconds" + n] = "0" + window["countSeconds" + n];
    }
    t.html(window["countSeconds" + n] + " sec");
    window["countSeconds" + n]--;
    if (-1 == window["countSeconds" + n]) {
      delete window["countSeconds" + n];
      clearInterval(window["timer_secondsTimer" + n]);
    }
    n = null;
  }
  function _(o, n) {
    if (null !== n.timeUp && true === t.isFunction(n.timeUp)) {
      n.timeUp.apply(o, []);
    }
    if (null !== n.expiryUrl) {
      window.location = n.expiryUrl;
    }
  }
  function M(o, n, e, i) {
    var d = o.attr("id");
    var s = window["beforeExpiry_" + i + d];
    s = s.split(":");
    if ("0" === (e = e.split(n.timeSeparator))[0] && "0" === e[1]) {
      for (var w = 0; w < e.length - 2; w++) {
        e[w] = e[w + 2] < 10 ? "0" + e[w + 2] : e[w + 2];
      }
      e.splice(4, 2);
      if (s[0] === e[0] && s[1] === e[1] && s[2] === e[2] && s[3] === e[3] && null !== n.beforeExpiryTimeFunction && true === t.isFunction(n.beforeExpiryTimeFunction)) {
        n.beforeExpiryTimeFunction.apply(o, []);
      }
    }
  }
  function S(t, o, n, e, i, d, s, w) {
    if (undefined === n) {
      n = 0;
    }
    if (undefined === e) {
      e = 0;
    }
    if (undefined === i) {
      i = 0;
    }
    if (undefined === d) {
      d = 0;
    }
    if (undefined === s) {
      s = 0;
    }
    if (undefined === w) {
      w = 0;
    }
    var r = Math.round(31536e3 * n * 100) / 100 + Math.round(2628e3 * e * 100) / 100 + Math.round(86400 * i * 100) / 100 + Math.round(3600 * d * 100) / 100 + Math.round(60 * s * 100) / 100 + Math.round(100 * w) / 100;
    var a = o.displayFormat.split("");
    var u = "!" === a[0] ? Math.floor(r / 31536e3) : 0;
    var c = "!" === a[1] ? Math.round(Math.floor(r / 2628e3 - 31536e3 * u / 2628e3)) : 0;
    var l = "!" === a[2] ? Math.round(Math.floor(r / 86400 - 2628e3 * c / 86400 - 31536e3 * u / 86400)) : 0;
    var m = "!" === a[3] ? Math.round(Math.floor(r / 3600 - 2628e3 * c / 3600 - 31536e3 * u / 3600 - 86400 * l / 3600)) : 0;
    var _ = "!" === a[4] ? Math.round(Math.floor(r / 60 - 3600 * m / 60 - 86400 * l / 60 - 2628e3 * c / 60 - 31536e3 * u / 60)) : 0;
    var M = "!" === a[5] ? Math.round(Math.floor(r - 60 * _ - 3600 * m - 86400 * l - 2628e3 * c - 31536e3 * u)) : 0;
    return u + o.timeSeparator + c + o.timeSeparator + l + o.timeSeparator + m + o.timeSeparator + _ + o.timeSeparator + M;
  }
  function v(o, n, e) {
    var i = e.displayFormat.split("");
    n = n.split(e.timeSeparator);
    n = (n = t.grep([n[0], n[1], n[2], n[3], n[4], n[5]], function (t, o) {
      return t >= 0 && "!" === i[o];
    }).join(e.timeSeparator)).split(e.timeSeparator);
    for (var d = 0; d < n.length; d++) {
      if (n[d].toString().length < 2 && true === e.padZeroes) {
        n[d] = "0" + n[d];
      }
    }
    n = n.join(e.timeSeparator).toString();
    for (var s = 0; s < 10; s++) {
      var w = s.toString();
      var r = new RegExp(w, "g");
      n = n.replace(r, e.digits[s]);
    }
    if (true === e.labelsFormat && undefined === window["regexpMatchFormat_" + o.attr("id")] && undefined === window["regexpReplaceWith_" + o.attr("id")]) {
      o.addClass("labelformat");
      var a = "<span class='timerDisplay label" + (n = n.split(e.timeSeparator)).length + "'>";
      var u = [];
      for (var c = 0; c < 6; c++) {
        if ("!" === i[c]) {
          u.push(e.labels[c]);
        }
      }
      for (var l = n.length; l > 0; l--) {
        var m = n.length - l;
        a += "<span class='displaySection'><span class='numberDisplay'>" + n[m] + "</span><span class='periodDisplay'>" + u[m] + "</span></span>";
      }
      n = a += "</span>";
    } else if (false === e.labelsFormat && undefined !== window["regexpMatchFormat_" + o.attr("id")] && undefined !== window["regexpReplaceWith_" + o.attr("id")]) {
      var _ = new RegExp(window["regexpMatchFormat_" + o.attr("id")]);
      n = n.replace(_, window["regexpReplaceWith_" + o.attr("id")]);
    }
    o.html(n);
  }
  function H(o, n, e, i) {
    if ("pause" === o.data("countdowntimer").pause) {
      clearInterval(window["timer_" + n + o.attr("id")]);
    } else if ("resume" === o.data("countdowntimer").pause) {
      window["timer_" + n + o.attr("id")] = setInterval(function () {
        i(o, e);
      }, 1e3 * e.tickInterval);
    }
    t("#" + e.pauseButton).click(function () {
      if ("resume" != t(this).val()) {
        t("#" + e.pauseButton).val("resume").text("Resume");
        clearInterval(window["timer_" + n + o.attr("id")]);
      } else if ("resume" == t(this).val()) {
        t("#" + e.pauseButton).val("pause").text("Pause");
        window["timer_" + n + o.attr("id")] = setInterval(function () {
          i(o, e);
        }, 1e3 * e.tickInterval);
      }
    });
  }
  function p(o, n, e, i) {
    if ("stop" === o.data("countdowntimer").stop) {
      clearInterval(window["timer_" + n + o.attr("id")]);
      window["hours_" + n + o.attr("id")] = e.hours;
      window["minutes_" + n + o.attr("id")] = e.minutes;
      window["seconds_" + n + o.attr("id")] = e.seconds;
      i(o, e);
    } else if ("start" === o.data("countdowntimer").stop) {
      window["timer_" + n + o.attr("id")] = setInterval(function () {
        i(o, e);
      }, 1e3 * e.tickInterval);
    }
    t("#" + e.stopButton).click(function () {
      if ("start" != t(this).val()) {
        t("#" + e.stopButton).val("start").text("Start");
        clearInterval(window["timer_" + n + o.attr("id")]);
        window["hours_" + n + o.attr("id")] = e.hours;
        window["minutes_" + n + o.attr("id")] = e.minutes;
        window["seconds_" + n + o.attr("id")] = e.seconds;
        i(o, e);
      } else if ("start" == t(this).val()) {
        t("#" + e.stopButton).val("stop").text("Stop");
        window["timer_" + n + o.attr("id")] = setInterval(function () {
          i(o, e);
        }, 1e3 * e.tickInterval);
      }
    });
  }
  function h(t, o, n) {
    var e = t.attr("id");
    if ("withnoStart" === o) {
      delete window["dateTime" + e];
      delete window["startTime" + e];
      clearInterval(window["timer_givenDate" + e]);
    } else if ("withStart" === o) {
      delete window["startDate" + e];
      delete window["endDate" + e];
      clearInterval(window["timer_startDate" + e]);
    } else {
      delete window["hours_" + o + e];
      delete window["minutes_" + o + e];
      delete window["seconds_" + o + e];
      clearInterval(window["timer_" + o + e]);
    }
    if (true === t.data("countdowntimer").destroy) {
      t.empty().removeClass();
    } else {
      _(t, n);
    }
  }
  var f = {
    init: function (n) {
      return this.each(function () {
        o(t(this), n);
      });
    },
    destroy: function () {
      this.data("countdowntimer", t.extend(true, {}, t.fn.countdowntimer.defaults, {
        destroy: true
      }));
    },
    pause: function (o) {
      this.data("countdowntimer", t.extend(true, {}, t.fn.countdowntimer.defaults, {
        pause: o
      }));
      H(t(this), t(this).data("typefunc").type, t(this).data("opts").opts, t(this).data("typefunc").func);
    },
    stop: function (o) {
      this.data("countdowntimer", t.extend(true, {}, t.fn.countdowntimer.defaults, {
        stop: o
      }));
      p(t(this), t(this).data("typefunc").type, t(this).data("opts").opts, t(this).data("typefunc").func);
    }
  };
  t.fn.countdowntimer = function (o) {
    return f[o] ? f[o].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof o && o ? void t.error("Method " + o + " does not exist on jQuery.countdownTimer") : (this.data("countdowntimer", t.extend(true, {}, t.fn.countdowntimer.defaults, o)), f.init.apply(this, arguments));
  };
  t.fn.countdowntimer.defaults = {
    hours: 0,
    minutes: 0,
    seconds: 60,
    startDate: new Date(),
    dateAndTime: new Date("1970/01/01 00:00:00"),
    currentTime: false,
    size: "sm",
    borderColor: "#F0068E",
    fontColor: "#FFFFFF",
    backgroundColor: "#000000",
    timeSeparator: ":",
    tickInterval: 1,
    timeUp: null,
    expiryUrl: null,
    regexpMatchFormat: null,
    regexpReplaceWith: null,
    pauseButton: null,
    stopButton: null,
    beforeExpiryTime: null,
    beforeExpiryTimeFunction: null,
    padZeroes: true,
    displayFormat: "HMS",
    labelsFormat: false,
    timeZone: null
  };
  t.fn.countdowntimer.regionalOptions = {
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    labels: ["Years", "Months", "Days", "Hours", "Minutes", "Seconds"],
    isRTL: false
  };
}(jQuery);
$(document).ready(function () {
  $(".date").each(function () {
    var a = $(this);
    var b = a.data("start");
    var c = a.data("gameends");
    var d = moment(b, "YYYY-MM-DDTHH:mm:ss.SSS");
    var e = moment(c, "YYYY-MM-DDTHH:mm:ss");
    var f = moment.utc().format("YYYY-MM-DDTHH:mm:ss[Z]");
    var g = d.diff(f, "minutes");
    var h = e.diff(f, "minutes");
    switch (true) {
      case 1 < g:
        var i = moment.utc(b).toDate();
        i = moment(i).format("YYYY-MM-DDTHH:mm:ssZ");
        a.countdowntimer({
          dateAndTime: i
        });
        break;
      case 2 < g:
        i = moment.utc(b).toDate();
        a.html("STARTS SOON").addClass("soon");
        break;
      case 0 < h:
        a.html("LIVE NOW ").addClass("live");
        i = moment.utc(b).toDate();
        break;
      default:
        i = moment.utc(b).toDate();
        a.html("FULLTIME").addClass("end");
    }
  });
});
