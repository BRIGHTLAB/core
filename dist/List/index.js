"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = require("react");
var styles = {
    card: {
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        py: '20px',
    },
};
function ContainerList(_a) {
    var _b = _a.dataP, dataP = _b === void 0 ? [] : _b, renderItem = _a.renderItem, GridStyleItem = _a.GridStyleItem, _c = _a.totalP, totalP = _c === void 0 ? 10 : _c, loadMoreP = _a.loadMoreP, _d = _a.loadingP, loadingP = _d === void 0 ? false : _d, _e = _a.id, id = _e === void 0 ? '' : _e;
    var _f = (0, react_1.useState)(dataP), data = _f[0], setData = _f[1];
    var _g = (0, react_1.useState)(totalP), total = _g[0], setTotal = _g[1];
    var _h = (0, react_1.useState)(loadingP), loading = _h[0], setLoading = _h[1];
    (0, react_1.useEffect)(function () {
        setData(dataP);
    }, [dataP]);
    (0, react_1.useEffect)(function () {
        setLoading(loadingP);
    }, [loadingP]);
    (0, react_1.useEffect)(function () {
        setTotal(totalP);
    }, [totalP]);
    return (react_1.default.createElement(material_1.Grid, { container: true, spacing: 3 },
        data.length > 0 ? (data.map(function (row, idx) { return (react_1.default.createElement(material_1.Grid, __assign({ item: true, xs: 12 }, GridStyleItem, { key: "".concat(id, "_").concat(row.id || 'rand_' + idx) }), renderItem(row, idx))); })) : (react_1.default.createElement(material_1.Grid, { item: true, xs: 12 },
            react_1.default.createElement(material_1.Card, { sx: styles.card }, loading ? react_1.default.createElement(material_1.CircularProgress, { size: 40 }) : 'NO DATA FOUND'))),
        react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sx: { textAlign: 'center', mt: '10px' } }, data.length < total && loadMoreP ? (react_1.default.createElement(material_1.Button, { variant: "contained", color: "info", size: "small", onClick: loadMoreP },
            loading ? react_1.default.createElement(material_1.CircularProgress, { size: 22, sx: { color: 'white' } }) : 'Load More', " ".concat(data.length, "/").concat(total))) : null)));
}
exports.default = ContainerList;
