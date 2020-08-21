"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./select_sort"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./select_sort"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.select_sort);
    global.undefined = mod.exports;
  }
})(void 0, function () {
  "use strict";

  var _select_sort = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('[TEST SELECT SORT] -', () => {
    it('should return sorted array', () => {
      var list = [1, 3, 8, 7, 6];
      var result = (0, _select_sort.default)(list);
      expect(result).toStrictEqual([1, 3, 6, 7, 8]);
    });
    it('should return sorted array', () => {
      var list = [1, 1, 1, 8, 1, 1, 1, 1, 1];
      var result = (0, _select_sort.default)(list);
      expect(result).toStrictEqual([1, 1, 1, 1, 1, 1, 1, 1, 8]);
    });
    it('should return sorted array', () => {
      var list = [1, 2, 3];
      var result = (0, _select_sort.default)(list);
      expect(result).toStrictEqual([1, 2, 3]);
    });
  });
});
//# sourceMappingURL=select_sort.test.js.map