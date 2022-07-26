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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var react_2 = require("@uppy/react");
var core_1 = require("@uppy/core");
var aws_s3_1 = require("@uppy/aws-s3");
function FileUpload(_a) {
    var value = _a.value, name = _a.name, handleChange = _a.handleChange, _b = _a.type, type = _b === void 0 ? 'image' : _b, grid = _a.grid, id = _a.id, error = _a.error, label = _a.label, required = _a.required, allowURL = _a.allowURL, disabled = _a.disabled, _c = _a.lang, lang = _c === void 0 ? 'en' : _c, Get = _a.Get;
    var _d = (0, react_1.useState)('false'), URL = _d[0], setURL = _d[1];
    var _e = (0, react_1.useState)(value), state = _e[0], setState = _e[1];
    var fileTypes = [];
    switch (type) {
        case 'image':
            fileTypes = ['.jpg', '.jpeg', '.png'];
            break;
        case 'video':
            fileTypes = ['.mp4'];
            break;
        case 'audio':
            fileTypes = ['.m4a', '.flac', '.mp3', '.wav', '.wma', '.acc'];
            break;
        default:
            fileTypes = ['.jpg', '.jpeg', '.png'];
    }
    var uppy = (0, react_2.useUppy)(function () {
        return new core_1.default({
            id: name,
            autoProceed: true,
            restrictions: {
                maxFileSize: type === 'image' ? 500000 : undefined,
                maxNumberOfFiles: 1,
                allowedFileTypes: fileTypes,
            },
        })
            .use(aws_s3_1.default, {
            // fields: [], // empty array
            getUploadParameters: function (file) {
                return __awaiter(this, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Get("sign_url?objectName=".concat(file.name), lang)];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, {
                                        method: 'PUT',
                                        url: response.signedUrl,
                                        fields: [],
                                    }];
                        }
                    });
                });
            },
        })
            .on('complete', function (result) {
            if (result.successful.length > 0) {
                // add the file to the main postData array
                var obj = result.successful[0];
                var filename = obj.uploadURL.split('/').pop();
                onChange(filename);
            }
            else {
                console.log('Upload error: ', result.failed); // if upload failed, let's see what went wrong
            }
        })
            .on('file-removed', function () {
            onChange('');
        });
    });
    var changeUploadType = function (e) {
        onChange('');
        setURL(e.target.value);
    };
    var onChange = function (value) { return setState(value !== null && value !== void 0 ? value : ''); };
    (0, react_1.useEffect)(function () {
        setState(value);
    }, [value]);
    (0, react_1.useEffect)(function () {
        handleChange({ target: { name: name, value: state } });
    }, [state, name]);
    return (React.createElement(material_1.Grid, __assign({ item: true }, grid, { key: id }),
        React.createElement("span", { style: {
                color: error ? '#ff1744' : 'gray',
            } },
            label,
            " ",
            required ? React.createElement("span", { className: "required" }, "*") : ''),
        state && state.includes('https://') ? (React.createElement(material_1.Grid, { container: true },
            React.createElement(material_1.Grid, { item: true, xs: 12, style: { paddingTop: '2px', display: 'flex' } },
                React.createElement(material_1.Tooltip, { title: "Delete" },
                    React.createElement(icons_material_1.Delete, { style: { color: '#f23729', cursor: 'pointer' }, onClick: function () {
                            onChange('');
                        } })),
                type == 'image' ? (React.createElement("img", { width: 400, height: 300, src: state, alt: state, placeholder: "blur" })) : (React.createElement("a", { href: state, target: "_blank" }, state))))) : (React.createElement(React.Fragment, null,
            allowURL && (React.createElement(material_1.RadioGroup, { row: true, "aria-label": "Upload type", name: "URL", value: URL, onChange: changeUploadType },
                React.createElement(material_1.FormControlLabel, { value: "false", control: React.createElement(material_1.Radio, null), label: "File Upload" }),
                React.createElement(material_1.FormControlLabel, { value: "true", control: React.createElement(material_1.Radio, null), label: "Url" }))),
            URL === 'true' ? (React.createElement(material_1.TextField, { size: "small", value: state !== null && state !== void 0 ? state : '', id: id, name: name, disabled: disabled, type: "text", error: error, fullWidth: true, required: required, inputProps: { maxLength: 255 }, label: "Url", onChange: handleChange })) : (React.createElement(react_2.Dashboard, { uppy: uppy, showRemoveButtonAfterComplete: true, hideProgressAfterFinish: true, height: 400, width: "100%" }))))));
}
exports.default = FileUpload;
