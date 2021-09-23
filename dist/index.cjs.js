'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) {
    return function (theme) {
        return get__default['default'](theme, path, fallback);
    };
};

var rotate$1 = styled.keyframes(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Svg = styled__default['default'].svg(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$P, templateObject_2$h, templateObject_3$9;

var Icon$1b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$19 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$18 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space, styledSystem.typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$O;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$5 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$3 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var _a$4, _b$1;
var scaleVariants$1 = (_a$4 = {},
    _a$4[scales$5.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a$4[scales$5.SM] = {
        height: "32px",
        padding: "0 16px",
    },
    _a$4[scales$5.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$4);
var styleVariants$2 = (_b$1 = {},
    _b$1[variants$3.PRIMARY] = {
        backgroundColor: "primary",
        color: "text",
    },
    _b$1[variants$3.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$1[variants$3.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b$1[variants$3.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "text",
    },
    _b$1[variants$3.DANGER] = {
        backgroundColor: "failure",
        color: "text",
    },
    _b$1[variants$3.SUCCESS] = {
        backgroundColor: "success",
        color: "text",
    },
    _b$1[variants$3.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b$1);

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton$1 = styled__default['default'].button(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled):not(.moonwalker-button--disabled):not(.moonwalker-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.moonwalker-button--disabled):not(.moonwalker-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled):not(.moonwalker-button--disabled):not(.moonwalker-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.moonwalker-button--disabled):not(.moonwalker-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$1,
}), styledSystem.variant({
    variants: styleVariants$2,
}), styledSystem.layout, styledSystem.space);
var templateObject_1$N;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("moonwalker-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("moonwalker-button--disabled");
    }
    return (React__default['default'].createElement(StyledButton$1, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React__default['default'].createElement(React__default['default'].Fragment, null,
            React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            React.isValidElement(endIcon) &&
                React.cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$3.PRIMARY,
    scale: scales$5.MD,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$M;

var Icon$17 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$16 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$15 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$13 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$_ = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default['default'].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#mask0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default['default'].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React__default['default'].createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React__default['default'].createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React__default['default'].createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React__default['default'].createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React__default['default'].createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6020 10381 c0 -6 26 -23 58 -37 43 -20 79 -28 145 -32 58 -3 87 -1\n87 6 0 16 -20 25 -75 34 -27 4 -70 12 -95 17 -112 23 -120 24 -120 12z" }),
        React__default['default'].createElement("path", { d: "M5743 10253 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" }),
        React__default['default'].createElement("path", { d: "M3502 10190 c-13 -11 -21 -24 -17 -30 9 -15 25 -12 25 4 0 7 10 21\n23 29 15 11 17 16 7 16 -8 0 -25 -8 -38 -19z" }),
        React__default['default'].createElement("path", { d: "M3818 10203 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M4060 10200 c-24 -15 -7 -18 20 -3 14 7 18 13 10 13 -8 0 -22 -4 -30\n-10z" }),
        React__default['default'].createElement("path", { d: "M3598 10183 c-10 -2 -18 -9 -18 -14 0 -12 3 -12 36 6 28 14 19 18\n-18 8z" }),
        React__default['default'].createElement("path", { d: "M4020 10179 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0\n-10 -5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M3869 10164 c-12 -14 -11 -16 5 -13 11 2 21 10 24 17 5 17 -13 15\n-29 -4z" }),
        React__default['default'].createElement("path", { d: "M3373 10140 c-18 -11 -33 -24 -33 -30 0 -5 -11 -10 -24 -10 -13 0\n-30 -8 -37 -17 -13 -15 -11 -16 18 -10 34 7 109 54 117 75 7 17 -4 15 -41 -8z" }),
        React__default['default'].createElement("path", { d: "M3387 10095 c-4 -8 -30 -26 -59 -41 -29 -15 -69 -40 -89 -55 -20 -16\n-45 -29 -55 -29 -14 0 -9 9 21 40 44 45 38 53 -11 15 -18 -14 -37 -25 -42 -25\n-5 0 -22 -12 -37 -26 -17 -15 -35 -24 -46 -21 -15 4 -21 -2 -27 -26 -7 -24\n-14 -31 -28 -29 -11 3 -27 -7 -41 -24 -24 -31 -45 -25 -25 6 8 13 8 20 2 20\n-9 0 -49 -22 -70 -38 -2 -1 2 -7 9 -11 10 -7 8 -14 -10 -32 -24 -24 -41 -11\n-19 16 28 34 -21 13 -85 -36 -70 -53 -122 -79 -142 -72 -18 6 -16 -16 1 -23 8\n-3 17 -13 20 -21 5 -13 4 -14 -8 -3 -13 10 -20 7 -40 -15 -21 -22 -23 -30 -13\n-46 10 -15 7 -23 -18 -49 -28 -30 -55 -39 -55 -20 0 6 9 18 20 27 30 26 24 38\n-7 18 -16 -10 -22 -12 -15 -4 6 7 12 22 12 33 -1 18 -2 19 -13 6 -15 -19 -68\n-54 -86 -56 -7 -2 -20 -13 -29 -26 -9 -13 -38 -45 -64 -71 -26 -26 -55 -62\n-64 -80 -29 -54 -68 -98 -101 -112 -18 -8 -33 -19 -33 -24 0 -6 -4 -11 -10\n-11 -19 0 -10 19 26 53 20 19 35 40 33 46 -3 7 -41 -18 -91 -61 -48 -40 -99\n-81 -113 -91 -14 -10 -25 -23 -25 -30 0 -7 -10 -19 -22 -27 -13 -8 -62 -53\n-110 -100 -47 -47 -92 -90 -100 -97 -39 -35 -98 -102 -98 -112 0 -6 -5 -11\n-11 -11 -18 0 -219 -231 -219 -252 0 -6 -18 -30 -40 -54 -22 -24 -40 -50 -40\n-57 0 -7 -8 -22 -18 -33 -33 -36 -162 -245 -162 -262 0 -4 -32 -59 -71 -122\n-138 -222 -279 -558 -388 -919 -16 -53 -43 -131 -60 -173 -46 -116 -85 -290\n-96 -428 -2 -19 -13 -71 -24 -115 -12 -44 -38 -204 -58 -355 -32 -243 -37\n-301 -37 -500 -1 -356 20 -670 64 -933 16 -94 49 -295 75 -446 47 -283 54\n-312 102 -421 32 -73 46 -117 63 -205 7 -33 18 -69 25 -80 7 -11 15 -34 19\n-51 4 -16 16 -45 28 -64 12 -19 37 -64 56 -100 19 -36 47 -83 63 -105 16 -22\n42 -66 59 -99 17 -32 40 -60 49 -63 22 -5 38 -37 57 -111 8 -29 21 -64 30 -77\n9 -14 20 -44 25 -67 6 -23 19 -48 29 -55 11 -8 20 -21 20 -28 0 -19 83 -168\n116 -208 58 -71 100 -120 113 -130 51 -42 142 -143 147 -163 3 -12 12 -25 20\n-28 17 -6 19 -46 3 -46 -7 0 14 -26 46 -57 31 -32 64 -70 73 -85 9 -16 22 -28\n28 -28 6 0 24 -16 38 -35 15 -19 34 -35 42 -35 23 0 194 -174 194 -197 0 -12\n11 -28 25 -37 14 -9 46 -38 72 -64 26 -26 51 -48 55 -48 5 -1 13 -2 18 -3 6 0\n10 -4 10 -9 0 -27 163 -175 410 -371 41 -33 89 -72 105 -87 17 -15 66 -44 110\n-64 44 -21 91 -47 104 -59 13 -11 30 -21 37 -21 7 0 30 -12 51 -26 65 -44 151\n-85 155 -72 5 13 57 -12 77 -36 8 -9 18 -16 24 -16 5 0 25 -11 43 -25 18 -14\n39 -25 46 -25 26 0 88 -27 110 -47 25 -21 95 -53 187 -83 31 -11 74 -26 96\n-34 26 -9 44 -11 52 -4 8 6 21 5 40 -5 15 -7 61 -24 100 -36 40 -12 75 -26 78\n-32 11 -17 119 -61 160 -65 22 -2 51 -8 65 -14 14 -5 67 -14 119 -19 51 -6 98\n-14 105 -20 6 -5 67 -14 136 -21 68 -6 129 -14 134 -18 14 -8 67 -3 80 7 7 6\n19 4 30 -5 27 -20 64 -18 77 5 10 15 18 17 48 9 20 -5 46 -12 57 -15 12 -3 24\n0 28 5 3 5 -5 13 -18 16 -24 6 -40 31 -30 47 3 5 15 3 27 -6 24 -17 51 -20 42\n-6 -7 13 96 25 140 17 27 -5 35 -4 35 8 0 18 33 30 60 21 15 -5 22 -1 29 17 6\n13 10 17 10 11 1 -17 39 -39 78 -48 28 -5 32 -4 27 9 -3 9 -15 16 -26 16 -30\n0 -11 20 20 21 22 0 23 2 9 8 -17 6 -17 8 -3 20 12 10 19 11 30 2 11 -9 17 -6\n27 19 9 20 20 29 34 28 11 0 31 0 45 1 24 2 23 3 -8 16 -18 8 -31 19 -27 25\n11 18 59 11 123 -20 69 -33 82 -36 82 -19 0 16 -41 47 -73 55 -27 5 -29 9 -25\n45 4 46 0 48 -32 14 -13 -14 -31 -25 -40 -25 -27 0 -51 35 -48 66 2 24 -1 30\n-19 32 -13 2 -23 -1 -23 -7 0 -6 -7 -11 -15 -11 -18 0 -20 31 -3 48 7 7 20 12\n31 12 32 0 16 34 -17 37 -16 1 -35 4 -43 7 -7 3 -13 1 -13 -4 0 -6 5 -10 10\n-10 6 0 10 -11 10 -25 0 -23 -3 -25 -49 -25 -28 0 -53 5 -56 11 -4 6 -13 8\n-20 5 -15 -5 -49 39 -41 53 10 15 -49 -2 -61 -18 -6 -9 -15 -13 -19 -9 -4 4\n-1 14 6 23 8 10 9 15 1 15 -6 0 -11 7 -11 15 0 10 -10 15 -30 15 -30 0 -42 21\n-20 35 7 4 7 13 0 26 -12 22 -5 23 39 8 65 -23 152 26 175 99 8 25 36 30 36 7\n0 -10 7 -15 18 -13 12 2 18 -5 20 -24 2 -18 -1 -28 -10 -28 -14 0 -68 -63 -68\n-79 0 -6 6 -11 13 -11 8 0 7 -3 -3 -10 -10 -6 -12 -12 -4 -20 15 -15 104 -1\n104 16 0 8 9 14 20 14 11 0 20 5 20 10 0 17 -33 11 -55 -10 -17 -16 -27 -18\n-45 -12 l-24 9 23 6 c18 4 21 10 15 33 -7 26 -6 27 23 21 20 -4 38 0 53 10 17\n12 25 13 28 5 2 -8 28 -12 72 -12 53 0 69 -4 74 -16 3 -9 4 -20 0 -25 -3 -5 0\n-9 5 -9 6 0 11 11 11 25 0 14 5 25 10 25 13 0 59 51 60 66 0 6 7 25 15 42 9\n17 18 53 22 81 7 63 18 78 63 86 49 8 59 -3 70 -71 23 -144 30 -164 60 -179\n34 -18 152 -20 199 -4 57 20 62 53 32 194 -11 50 -23 128 -27 175 -3 47 -11\n93 -16 103 -5 10 -14 52 -19 95 -14 103 -25 174 -38 250 -12 70 -26 155 -36\n222 -8 56 -41 215 -61 296 -12 48 -21 64 -45 78 -16 9 -29 21 -29 26 0 15 39\n32 60 25 22 -7 35 9 17 23 -8 7 -11 27 -9 52 3 34 8 41 21 37 18 -4 21 4 22\n51 1 12 5 22 10 22 5 0 9 7 9 15 0 8 -7 15 -16 15 -10 0 -14 5 -10 15 3 9 -3\n20 -14 27 -26 17 -25 45 3 68 19 17 20 21 9 40 -11 19 -11 25 3 40 10 11 12\n20 6 24 -5 3 4 20 20 36 17 16 27 34 24 40 -9 15 -25 2 -18 -15 3 -10 -1 -15\n-14 -15 -13 0 -22 11 -28 33 -8 26 -16 33 -42 35 -45 4 -60 25 -45 65 10 25 9\n34 -2 45 -14 14 -41 8 -31 -8 3 -4 -2 -13 -10 -20 -22 -18 -19 -50 5 -50 24 0\n26 -13 4 -31 -11 -9 -14 -22 -10 -43 6 -28 5 -28 -12 -13 -14 13 -21 14 -30 5\n-7 -7 -12 -17 -12 -24 0 -6 -20 -21 -45 -33 -25 -12 -45 -26 -45 -31 0 -6 -11\n-10 -25 -10 -15 0 -25 6 -25 15 0 8 -16 19 -38 25 -68 18 -78 41 -132 285 -5\n22 -16 72 -25 110 -8 39 -28 126 -43 194 -15 69 -31 126 -37 128 -5 2 -18 -30\n-28 -70 -18 -74 -22 -115 -10 -104 9 9 33 -12 33 -29 0 -8 -7 -14 -15 -14 -8\n0 -15 5 -15 11 0 22 -24 2 -32 -27 -11 -37 -85 -319 -104 -398 -8 -33 -20 -66\n-26 -73 -11 -14 -184 -19 -204 -5 -13 8 -34 78 -58 192 -9 41 -30 118 -46 170\n-16 52 -31 107 -35 123 -3 15 -12 27 -20 27 -18 0 -20 37 -3 42 12 4 11 12\n-27 223 -12 67 -31 152 -77 350 -21 91 -34 195 -25 195 3 0 41 7 84 15 43 8\n95 15 116 15 26 0 37 4 37 15 0 8 -7 15 -15 15 -19 0 -19 9 0 34 11 15 22 17\n55 12 32 -5 40 -3 40 9 0 13 3 13 19 3 16 -10 23 -9 39 5 17 16 20 16 32 2 15\n-18 10 -25 -40 -52 l-36 -18 31 -21 c30 -20 33 -20 53 -3 14 11 20 23 16 34\n-5 13 -2 16 12 13 11 -2 19 -12 19 -23 0 -13 8 -21 23 -23 22 -3 23 -4 7 -28\n-17 -26 -13 -84 6 -84 5 0 9 -9 9 -20 0 -24 -38 -28 -46 -5 -10 25 -34 17 -34\n-10 l0 -26 -25 26 c-27 26 -40 31 -49 16 -8 -12 -62 -7 -81 9 -20 17 -20 3 4\n-118 11 -53 27 -137 36 -187 9 -49 26 -124 37 -165 11 -41 25 -97 29 -125 5\n-27 13 -63 17 -80 l9 -30 10 35 c29 95 86 379 88 440 1 25 6 56 12 70 6 14 14\n50 18 80 10 80 35 149 57 161 15 8 17 14 8 24 -14 17 5 31 23 16 17 -14 124\n-23 132 -12 3 5 -4 16 -16 24 -18 13 -20 21 -14 57 l7 41 -45 -32 c-40 -28\n-50 -31 -91 -25 -33 5 -51 15 -66 34 -11 15 -24 32 -29 38 -5 6 -22 38 -39 72\n-17 33 -42 78 -56 99 -14 20 -26 43 -26 50 0 12 -13 17 -32 14 -5 0 -8 13 -8\n30 0 31 -19 69 -152 307 -37 67 -68 124 -68 126 0 2 -22 42 -50 90 -27 48 -50\n89 -50 92 0 2 -10 21 -23 42 -13 20 -45 78 -72 127 -26 50 -55 104 -65 120\n-45 77 -252 464 -385 720 -49 94 -106 201 -127 238 -21 38 -38 71 -38 74 0 3\n-33 66 -74 141 -40 76 -104 196 -141 267 -38 72 -81 150 -96 175 -27 44 -28\n44 -37 20 -5 -14 -13 -59 -16 -100 -4 -41 -11 -100 -16 -130 -48 -299 -64\n-548 -90 -1365 -6 -165 -13 -335 -16 -377 -6 -84 1 -95 34 -53 39 50 90 42\n168 -25 56 -50 68 -68 54 -85 -14 -17 -50 -21 -50 -5 0 6 -6 10 -13 10 -18 0\n-37 -43 -37 -83 0 -46 -13 -62 -37 -49 -12 7 -24 7 -29 2 -5 -5 -34 -13 -64\n-17 l-55 -8 -7 -80 c-12 -138 -27 -512 -28 -705 0 -102 -7 -243 -16 -315 -8\n-71 -19 -173 -24 -225 -12 -136 -45 -202 -133 -257 -59 -37 -111 -53 -227 -68\n-268 -37 -542 -2 -628 78 -56 52 -67 92 -65 227 2 137 15 277 38 415 9 55 19\n226 25 445 5 195 15 384 21 420 16 99 67 660 84 920 4 58 8 123 10 145 7 93\n16 265 25 490 6 151 18 284 30 360 42 244 48 305 60 520 6 121 15 267 20 325\n21 247 32 520 24 620 -5 58 -7 114 -6 125 3 33 20 173 36 290 23 177 44 675\n29 675 -4 0 -32 -23 -61 -50 -30 -28 -56 -50 -59 -50 -2 0 -2 14 2 30 4 19 3\n30 -4 30 -6 0 -11 7 -11 15 0 8 -9 15 -20 15 -11 0 -20 4 -20 8 0 5 9 17 20\n27 11 10 20 26 20 35 0 10 7 23 15 30 8 7 15 23 15 36 0 12 5 26 10 29 6 3 10\n17 10 31 0 13 5 24 10 24 6 0 10 -9 10 -20 0 -27 12 -25 40 5 13 14 32 25 41\n25 10 0 25 14 34 30 15 30 15 30 -10 30 -30 0 -85 -26 -85 -40 0 -6 -8 -10\n-17 -10 -24 -1 -56 -28 -79 -68 -11 -18 -30 -35 -44 -39 -14 -3 -33 -12 -42\n-21 -20 -17 -48 -10 -48 12 0 16 9 25 65 71 20 16 46 47 57 67 12 21 24 38 28\n38 3 0 14 16 24 35 23 42 36 45 36 8 l0 -26 25 23 c33 31 39 55 21 82 -11 16\n-13 25 -4 35 13 16 44 17 53 3 5 -8 11 -8 20 0 7 5 34 12 61 13 62 4 111 32\n118 69 4 19 13 29 31 34 28 7 29 8 15 34 -7 13 -7 21 1 25 6 4 13 -3 16 -14 5\n-20 7 -21 24 -5 10 9 22 13 28 10 5 -3 22 -1 37 4 21 8 29 8 35 -2 5 -8 8 -2\n6 17 -1 21 3 30 16 33 10 2 17 0 16 -5 -1 -4 -1 -18 0 -31 2 -34 26 -21 27 14\n1 41 22 77 40 70 22 -8 31 25 10 36 -17 9 -17 11 0 29 9 10 25 19 34 19 10 0\n20 7 24 15 7 18 33 20 38 3 3 -7 11 2 19 20 8 19 25 36 41 41 47 16 31 20 -27\n6 -46 -10 -55 -10 -55 1 0 18 -16 18 -23 -1z m-107 -113 c0 -21 -18 -42 -37\n-42 -18 0 -16 20 4 42 21 23 33 23 33 0z m-110 -26 c0 -3 -4 -8 -10 -11 -5 -3\n-10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-150 -116 c0 -5 7 -7 15 -4 8\n4 15 1 15 -5 0 -6 -4 -11 -10 -11 -5 0 -10 -6 -10 -12 0 -7 -12 -21 -26 -31\nl-25 -19 7 39 c4 21 9 41 11 46 6 10 23 9 23 -3z m-118 -70 c-45 -32 -52 -35\n-52 -21 0 12 61 51 79 51 8 0 -5 -13 -27 -30z m48 -24 c0 -7 -11 -16 -25 -19\n-25 -4 -25 -4 -9 14 20 22 34 24 34 5z m-70 -41 c-7 -8 -22 -14 -34 -14 -20 1\n-20 2 -1 6 11 3 24 9 30 14 15 14 19 10 5 -6z m-110 -30 c0 -8 -7 -15 -15 -15\n-16 0 -20 12 -8 23 11 12 23 8 23 -8z m-58 -41 c-24 -17 -39 -14 -27 5 3 6 16\n11 28 11 l21 0 -22 -16z m-226 -119 c-7 -18 -26 -20 -26 -2 0 18 24 41 28 27\n2 -6 1 -17 -2 -25z m-146 -94 c-11 -21 -30 -37 -30 -25 0 8 30 44 37 44 2 0\n-1 -9 -7 -19z m77 -53 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z\nm70 5 c-9 -9 -19 -14 -23 -11 -10 10 6 28 24 28 15 0 15 -1 -1 -17z m-354\n-280 c-35 -57 -63 -80 -63 -51 0 14 60 78 72 78 5 0 1 -12 -9 -27z m-103 -23\nc0 -14 -49 -44 -58 -35 -4 3 4 15 17 26 26 21 41 24 41 9z m670 -14 c0 -2 -6\n-16 -14 -30 -12 -24 -14 -25 -19 -7 -2 11 0 24 6 30 11 11 27 15 27 7z m-550\n-20 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z\nm-39 -87 c-10 -23 -10 -23 -10 7 -1 17 2 34 7 38 11 12 14 -18 3 -45z m619\n-19 c0 -11 -7 -20 -15 -20 -18 0 -19 12 -3 28 16 16 18 15 18 -8z m-758 -32\nc-7 -7 -12 -20 -12 -30 0 -18 -11 -24 -23 -12 -10 10 15 54 32 54 12 0 12 -3\n3 -12z m-58 -83 c-4 -8 -8 -15 -10 -15 -2 0 -4 7 -4 15 0 8 4 15 10 15 5 0 7\n-7 4 -15z m-254 -90 c0 -8 -77 -85 -84 -85 -10 0 10 32 39 63 23 24 45 35 45\n22z m-10 -95 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4\n-10z m740 -45 c0 -8 -7 -15 -15 -15 -16 0 -20 12 -8 23 11 12 23 8 23 -8z\nm-334 -97 c-3 -7 -9 -21 -12 -30 -4 -10 -13 -18 -20 -18 -18 0 -18 10 2 38 16\n23 40 31 30 10z m674 -58 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11\n10 2 0 4 -4 4 -10z m-327 -106 c8 -9 -11 -44 -23 -44 -6 0 -10 8 -10 18 0 27\n18 41 33 26z m-43 -94 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10\n6 0 10 -4 10 -10z m280 -95 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15\n15 15 8 0 15 -7 15 -15z m-510 -64 c0 -20 -17 -37 -27 -28 -7 8 7 47 18 47 5\n0 9 -9 9 -19z m-210 -211 c0 -11 -4 -20 -10 -20 -5 0 -10 9 -10 20 0 11 5 20\n10 20 6 0 10 -9 10 -20z m214 -46 c10 -25 7 -34 -9 -34 -9 0 -15 9 -15 25 0\n28 15 34 24 9z m-47 -110 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13\n-5z m-325 -106 c-9 -9 -12 -7 -12 12 0 19 3 21 12 12 9 -9 9 -15 0 -24z m268\n23 c0 -6 -4 -13 -10 -16 -5 -3 -10 1 -10 9 0 9 5 16 10 16 6 0 10 -4 10 -9z\nm-13 -183 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-587 -1748\nc0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m44\n-156 c20 -19 19 -94 -1 -101 -38 -15 -72 74 -41 105 16 16 23 15 42 -4z m-82\n-136 c-7 -7 -12 -8 -12 -2 0 14 12 26 19 19 2 -3 -1 -11 -7 -17z m845 -500\nc-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m1537 -60 c-3 -5 -14 -2\n-26 8 -18 17 -19 19 -1 31 15 12 18 11 25 -8 5 -11 5 -25 2 -31z m821 -268 c3\n-5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m440 -200\nc3 -5 -1 -10 -9 -10 -9 0 -16 5 -16 10 0 6 4 10 9 10 6 0 13 -4 16 -10z\nm-2672 -70 c3 -13 0 -20 -9 -20 -8 0 -14 9 -14 20 0 11 4 20 9 20 5 0 11 -9\n14 -20z m1705 -55 c5 -22 -18 -37 -35 -23 -17 13 -17 35 0 41 19 8 32 2 35\n-18z m522 -20 c0 -8 -4 -15 -9 -15 -13 0 -22 16 -14 24 11 11 23 6 23 -9z\nm-60 -45 c0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9 0 16 -4 16\n-10z m758 -81 c3 -18 -29 -31 -48 -19 -7 4 -10 16 -7 25 9 21 51 16 55 -6z\nm-780 -172 c2 -10 -3 -17 -12 -17 -10 0 -16 9 -16 21 0 24 23 21 28 -4z m572\n-13 c0 -8 -9 -14 -20 -14 -19 0 -27 19 -14 33 10 9 34 -4 34 -19z m-960 -264\nc0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z\nm435 -31 c11 -17 0 -20 -21 -4 -17 13 -17 14 -2 15 9 0 20 -5 23 -11z m115\n-54 c0 -27 -8 -29 -59 -19 -17 4 -31 13 -31 21 0 8 4 11 10 8 5 -3 18 -1 27 4\n32 19 53 13 53 -14z m155 -164 c3 -5 1 -12 -5 -16 -5 -3 -10 1 -10 9 0 18 6\n21 15 7z m-1276 -145 c9 -11 9 -15 -1 -19 -19 -6 -38 3 -38 19 0 18 24 18 39\n0z m38 8 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m701 -376 c18\n-18 14 -38 -7 -38 -23 0 -35 15 -27 35 7 18 18 19 34 3z m1672 -38 c0 -5 -4\n-10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9 0 16 -4 16 -10z m70 -5 c0 -8\n-7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m-1942 -6\nc-2 -6 -8 -10 -13 -10 -5 0 -11 4 -13 10 -2 6 4 11 13 11 9 0 15 -5 13 -11z\nm1830 -20 c-2 -6 -8 -10 -13 -10 -5 0 -11 4 -13 10 -2 6 4 11 13 11 9 0 15 -5\n13 -11z m110 -26 c2 -8 -5 -13 -17 -13 -12 0 -21 6 -21 16 0 18 31 15 38 -3z\nm-2958 -134 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10\n10 -16z m1510 -185 c0 -8 9 -14 20 -14 13 0 20 7 20 20 0 23 35 28 43 6 7 -18\n-1 -26 -25 -26 -10 0 -18 -4 -18 -10 0 -15 -43 -12 -65 4 -16 12 -17 16 -6 30\n15 18 31 13 31 -10z m-1422 -79 c14 -29 -2 -34 -18 -6 -12 24 -13 31 -2 31 5\n0 14 -11 20 -25z m-1305 -69 c4 -10 1 -13 -9 -9 -7 3 -14 9 -14 14 0 14 17 10\n23 -5z m2397 -47 c53 -12 104 -49 126 -90 21 -42 30 -160 15 -198 -14 -33 -61\n-48 -103 -32 -29 11 -38 29 -38 77 0 65 -63 96 -109 53 -48 -45 -65 -137 -39\n-220 13 -45 73 -110 157 -172 72 -53 138 -127 162 -182 42 -94 47 -271 13\n-393 -20 -72 -99 -155 -164 -172 -115 -31 -248 35 -289 143 -25 67 -45 206\n-37 251 7 38 20 46 76 46 47 0 70 -27 70 -80 0 -55 29 -143 53 -162 12 -10 37\n-18 55 -18 66 0 105 74 104 202 -1 55 -7 78 -33 128 -18 35 -46 71 -64 83 -64\n43 -144 107 -173 138 -73 78 -103 199 -83 334 21 137 75 216 175 254 60 23 67\n24 126 10z m-310 -19 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10\n8 0 15 -4 15 -10z m804 1 c8 -12 33 -148 51 -281 9 -63 27 -168 41 -233 13\n-64 24 -121 24 -125 1 -19 30 35 30 56 0 14 4 41 10 61 5 20 16 88 25 151 35\n244 56 354 68 362 19 12 74 9 84 -4 11 -14 23 -74 54 -273 34 -223 62 -356 73\n-352 17 6 33 88 77 407 19 135 39 218 55 224 9 3 33 6 54 6 51 0 61 -18 50\n-95 -30 -213 -39 -287 -45 -345 -4 -36 -15 -128 -26 -205 -11 -77 -24 -171\n-29 -210 -5 -38 -18 -140 -29 -225 -11 -85 -21 -163 -21 -172 0 -33 -37 -58\n-82 -58 -77 0 -79 5 -117 260 -38 251 -50 310 -62 310 -5 0 -11 -12 -14 -27\n-4 -16 -11 -48 -17 -73 -5 -25 -14 -72 -20 -105 -10 -58 -14 -84 -37 -240 -13\n-91 -19 -105 -48 -116 -37 -14 -68 -11 -93 9 -22 18 -27 50 -130 902 -6 52\n-18 134 -26 183 -8 48 -14 116 -14 152 l0 65 54 0 c30 0 57 -4 60 -9z m1200\n-19 c14 -27 49 -180 67 -287 4 -27 12 -77 17 -110 10 -61 67 -422 77 -485 3\n-19 10 -57 15 -85 24 -133 43 -284 37 -299 -6 -14 -18 -16 -74 -14 l-68 3 -20\n95 c-35 157 -59 182 -167 167 -63 -8 -85 -37 -112 -151 -13 -54 -30 -102 -37\n-107 -8 -5 -38 -9 -67 -9 -64 0 -68 7 -53 93 11 68 29 181 42 267 4 30 14 98\n23 150 34 212 45 281 66 420 33 220 59 340 80 365 9 11 33 15 86 15 71 0 74\n-1 88 -28z m-2796 -6 c3 -12 -1 -17 -10 -14 -7 3 -15 13 -16 22 -3 12 1 17 10\n14 7 -3 15 -13 16 -22z m-48 -117 c0 -20 -24 -26 -35 -9 -4 6 -4 17 -1 25 7\n20 36 7 36 -16z m2488 -71 c42 -23 42 -23 42 -79 0 -60 -9 -75 -49 -81 -14 -1\n-26 -9 -29 -17 -3 -10 3 -12 26 -6 l31 6 -5 -102 c-2 -56 -10 -120 -18 -143\n-8 -22 -17 -62 -21 -89 -4 -26 -11 -50 -16 -53 -5 -2 -6 -17 -3 -32 5 -27 -15\n-170 -36 -252 -6 -25 -12 -72 -13 -104 -2 -66 -23 -89 -33 -38 -4 22 -11 29\n-21 25 -12 -5 -12 -7 -1 -14 11 -8 11 -10 0 -18 -8 -4 -12 -16 -10 -26 2 -14\n-5 -18 -35 -22 -35 -3 -38 -2 -35 19 2 17 11 24 31 26 28 3 36 25 14 39 -17\n10 -29 41 -18 45 5 2 6 24 1 51 -5 34 -3 55 8 75 8 15 15 56 16 92 1 61 3 65\n26 68 29 3 71 62 45 62 -8 0 -15 -6 -15 -14 0 -22 -38 -27 -45 -5 -8 23 4 110\n17 125 5 7 10 56 13 110 5 121 11 177 26 221 10 32 12 33 50 27 32 -5 39 -4\n39 10 0 8 -10 18 -23 21 -14 4 -26 18 -33 39 -19 61 2 71 74 34z m-2668 -38\nc0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9 0 16 -4 16 -10z m104\n-16 c4 -15 4 -29 1 -32 -10 -10 -37 12 -46 36 -7 19 -5 22 15 22 17 0 26 -7\n30 -26z m-754 -184 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0\n11 -4 11 -10z m927 -129 c3 -12 17 -23 34 -26 16 -4 29 -13 29 -20 0 -11 -6\n-12 -30 -3 -40 14 -79 68 -49 68 6 0 13 -9 16 -19z m-102 -2 c11 -17 -1 -21\n-15 -4 -8 9 -8 15 -2 15 6 0 14 -5 17 -11z m1345 -24 c7 -9 10 -19 6 -22 -8\n-9 -38 9 -44 25 -5 17 23 15 38 -3z m-1870 -103 c-19 -7 -60 28 -60 50 0 20 3\n19 35 -12 20 -19 31 -36 25 -38z m315 -32 c14 -16 15 -20 4 -20 -16 0 -39 19\n-39 32 0 14 16 9 35 -12z m-579 -37 c-4 -4 -11 -1 -16 7 -16 25 -11 35 7 17 9\n-9 13 -20 9 -24z m146 7 c32 -30 15 -35 -18 -6 -16 14 -23 26 -16 26 7 0 22\n-9 34 -20z m2098 -6 c0 -17 -22 -14 -28 4 -2 7 3 12 12 12 9 0 16 -7 16 -16z\nm-1485 -24 c3 -6 -4 -14 -17 -19 -13 -6 -17 -10 -9 -10 8 -1 12 -4 8 -7 -13\n-14 -27 7 -17 27 12 21 25 25 35 9z m545 -15 c0 -8 -4 -15 -9 -15 -5 0 -14 7\n-21 15 -10 13 -9 15 9 15 12 0 21 -6 21 -15z m-410 -75 c6 -11 17 -20 24 -20\n8 0 16 -7 20 -15 8 -21 -10 -19 -43 6 -16 12 -34 18 -40 15 -7 -5 -11 4 -11\n24 0 27 2 30 20 20 11 -6 24 -19 30 -30z m198 18 c16 -16 15 -28 -2 -28 -17 0\n-38 24 -29 33 9 10 17 9 31 -5z m-353 -38 c3 -5 2 -10 -4 -10 -5 0 -13 5 -16\n10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m-111 -46 c3 -8 2 -12 -4 -9 -6 3 -10\n10 -10 16 0 14 7 11 14 -7z m376 -4 c0 -13 -5 -18 -15 -14 -8 4 -15 12 -15 20\n0 8 7 14 15 14 8 0 15 -9 15 -20z m150 -19 c13 -26 13 -31 -5 -31 -8 0 -15 -4\n-15 -10 0 -5 5 -10 10 -10 6 0 10 -4 10 -10 0 -5 -8 -10 -18 -10 -10 0 -23 -5\n-30 -12 -8 -8 -15 -8 -27 2 -20 16 -19 30 1 30 13 0 15 7 11 29 -4 19 -2 31 6\n35 26 10 47 5 57 -13z m70 -7 c0 -8 -4 -14 -9 -14 -11 0 -22 26 -14 34 9 9 23\n-3 23 -20z m-360 2 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6\n0 10 -2 10 -4z m425 -32 c34 -22 32 -44 -3 -44 -32 0 -52 16 -52 42 0 22 23\n23 55 2z m1061 -79 c18 -14 18 -14 -8 -15 -18 0 -28 5 -28 15 0 19 11 19 36 0z\nm-18 -57 c-3 -7 -17 -13 -33 -13 -16 0 -30 6 -32 13 -3 8 7 12 32 12 25 0 35\n-4 33 -12z m397 -67 c-10 -9 -25 14 -24 37 l1 27 13 -30 c7 -16 12 -32 10 -34z\nm-1317 -10 c3 -8 -1 -12 -9 -9 -7 2 -15 10 -17 17 -3 8 1 12 9 9 7 -2 15 -10\n17 -17z m959 -3 c20 -2 25 -32 7 -45 -14 -10 -21 -7 -45 17 -36 36 -36 44 -1\n36 15 -4 32 -7 39 -8z m-907 -26 c0 -13 -12 -22 -22 -16 -10 6 -1 24 13 24 5\n0 9 -4 9 -8z m1274 -38 c9 -8 16 -20 16 -25 0 -5 9 -18 20 -29 23 -23 12 -25\n-34 -6 -22 9 -38 11 -50 4 -26 -14 -29 -5 -12 36 16 39 35 45 60 20z m-524 -9\nc0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z\nm193 -23 c10 -10 14 -21 11 -25 -9 -9 -44 16 -44 30 0 18 14 16 33 -5z m-153\n-2 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m368\n-73 c38 -40 5 -40 -58 1 -5 3 21 22 31 22 3 0 15 -10 27 -23z m192 3 c0 -11\n-7 -20 -15 -20 -9 0 -15 -6 -13 -12 2 -7 0 -14 -5 -15 -33 -12 -44 23 -15 48\n30 24 48 24 48 -1z m-383 -12 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1\n-19z m115 -3 c0 -5 -5 -11 -11 -13 -6 -2 -11 4 -11 13 0 9 5 15 11 13 6 -2 11\n-8 11 -13z m-748 -20 c11 -8 17 -18 14 -21 -11 -10 -48 7 -48 22 0 18 10 17\n34 -1z m706 -16 c0 -5 -9 -9 -20 -9 -19 0 -26 11 -14 23 8 8 34 -3 34 -14z\nm-1676 -5 c5 -14 4 -15 -9 -4 -17 14 -19 20 -6 20 5 0 12 -7 15 -16z m1603\n-10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m303 -40 c0 -9 -7\n-14 -17 -12 -25 5 -28 28 -4 28 12 0 21 -6 21 -16z m50 -20 c0 -2 -7 -4 -15\n-4 -8 0 -15 4 -15 10 0 5 7 7 15 4 8 -4 15 -8 15 -10z m-270 -10 c0 -8 -4 -12\n-10 -9 -5 3 -10 10 -10 16 0 5 5 9 10 9 6 0 10 -7 10 -16z m395 -24 c3 -5 -3\n-10 -15 -10 -12 0 -18 5 -15 10 3 6 10 10 15 10 5 0 12 -4 15 -10z m150 -40\nc3 -5 13 -6 21 -3 19 7 64 -16 64 -34 0 -7 7 -13 15 -13 8 0 15 -2 15 -4 0\n-10 -30 -60 -40 -66 -16 -10 -1 -40 20 -40 26 0 35 -19 14 -27 -10 -4 -19 -2\n-22 5 -2 7 -15 12 -28 12 -19 0 -24 5 -24 24 0 18 -7 25 -31 30 -18 3 -28 10\n-24 17 4 6 18 8 30 5 13 -3 27 -1 30 5 4 6 14 8 22 5 20 -8 33 2 26 20 -7 20\n-61 47 -80 40 -17 -7 -53 10 -53 24 0 13 37 13 45 0z m-177 -88 c34 -7 46 -30\n12 -24 -8 1 -41 5 -73 9 -32 3 -60 10 -63 14 -3 5 -19 9 -35 9 -17 0 -28 4\n-25 8 5 8 111 -1 184 -16z m136 -21 c3 -4 -1 -17 -9 -27 -15 -19 -15 -19 -30\n0 -17 22 -11 36 15 36 10 0 21 -4 24 -9z m-584 -86 c0 -9 -6 -12 -15 -9 -8 4\n-15 10 -15 15 0 5 7 9 15 9 8 0 15 -7 15 -15z m-210 -75 c13 -8 13 -10 -2 -10\n-9 0 -20 5 -23 10 -8 13 5 13 25 0z m338 -7 l37 -17 -33 -4 c-32 -3 -62 11\n-62 29 0 13 16 11 58 -8z m257 -3 c-3 -5 -12 -7 -20 -3 -21 7 -19 13 6 13 11\n0 18 -4 14 -10z m-530 -10 c18 -8 17 -9 -7 -9 -16 -1 -28 4 -28 9 0 12 8 12\n35 0z m182 -42 c-7 -4 -20 -8 -30 -8 -15 0 -16 3 -7 20 9 17 14 18 30 8 14 -9\n16 -14 7 -20z m183 12 c0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10\n9 0 16 -4 16 -10z" }),
        React__default['default'].createElement("path", { d: "M5837 1903 c-21 -76 -57 -334 -57 -405 0 -49 3 -59 26 -77 34 -27 78\n-27 105 0 19 19 20 29 16 98 -3 42 -12 121 -20 176 -9 55 -19 123 -23 150 -9\n67 -36 100 -47 58z m32 -406 c1 -27 -3 -37 -11 -35 -16 5 -22 51 -13 87 7 24\n8 25 15 6 5 -11 9 -37 9 -58z" }),
        React__default['default'].createElement("path", { d: "M5418 1123 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M4226 10083 c-38 -28 -39 -28 -13 -31 35 -4 67 14 67 38 0 26 -8 25\n-54 -7z" }),
        React__default['default'].createElement("path", { d: "M4320 10094 c0 -9 7 -14 17 -12 25 5 28 28 4 28 -12 0 -21 -6 -21\n-16z" }),
        React__default['default'].createElement("path", { d: "M6025 10029 c-4 -6 -20 -7 -38 -3 -28 6 -30 5 -18 -10 7 -9 24 -16\n37 -16 14 0 24 -6 24 -15 0 -27 129 -34 138 -7 2 6 -3 12 -11 12 -8 0 -17 7\n-21 15 -3 9 -18 15 -40 15 -19 0 -38 5 -41 10 -8 13 -22 13 -30 -1z" }),
        React__default['default'].createElement("path", { d: "M3476 10005 c-3 -8 -1 -15 4 -15 6 0 10 7 10 15 0 8 -2 15 -4 15 -2\n0 -6 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M3050 9989 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M4590 9980 c0 -5 9 -10 20 -10 11 0 20 5 20 10 0 6 -9 10 -20 10 -11\n0 -20 -4 -20 -10z" }),
        React__default['default'].createElement("path", { d: "M2981 9963 c-13 -12 -18 -23 -13 -31 6 -9 12 -6 22 12 7 14 20 27 29\n29 14 4 14 5 0 6 -9 0 -26 -7 -38 -16z" }),
        React__default['default'].createElement("path", { d: "M4693 9963 c9 -9 19 -14 23 -11 10 10 -6 28 -24 28 -15 0 -15 -1 1\n-17z" }),
        React__default['default'].createElement("path", { d: "M6434 9969 c-7 -12 -5 -15 24 -23 27 -9 28 -5 2 16 -12 11 -22 13\n-26 7z" }),
        React__default['default'].createElement("path", { d: "M4410 9885 c-10 -12 -10 -15 3 -15 8 0 20 7 27 15 10 12 10 15 -3 15\n-8 0 -20 -7 -27 -15z" }),
        React__default['default'].createElement("path", { d: "M4215 9883 c-52 -8 -51 -22 1 -19 65 5 64 4 64 16 0 10 -10 11 -65 3z" }),
        React__default['default'].createElement("path", { d: "M6628 9873 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M6436 9861 c-4 -6 -16 -11 -27 -11 -10 0 -19 -4 -19 -10 0 -5 12 -10\n26 -10 22 0 25 -4 24 -27 -5 -66 -1 -75 23 -67 12 4 39 7 59 6 26 -1 41 4 47\n16 8 14 13 15 30 5 28 -17 31 -16 31 7 0 23 6 24 46 10 16 -6 34 -20 39 -33 9\n-19 22 -23 98 -32 102 -13 110 -4 51 50 -27 25 -44 33 -72 32 -20 0 -65 3 -99\n8 -54 7 -63 5 -69 -9 -8 -22 -31 -20 -43 3 -13 23 -66 32 -89 15 -26 -21 -42\n-16 -42 11 0 18 5 25 19 25 11 0 21 -6 24 -12 2 -7 8 -10 12 -5 12 10 -4 24\n-36 32 -16 4 -30 2 -33 -4z" }),
        React__default['default'].createElement("path", { d: "M7034 9834 c1 -27 7 -39 22 -44 11 -4 25 -15 32 -23 10 -11 21 -13\n41 -7 16 4 35 4 42 -1 18 -11 39 -11 39 0 0 14 -75 61 -98 61 -26 0 -29 25 -4\n39 13 8 7 10 -29 11 l-46 0 1 -36z" }),
        React__default['default'].createElement("path", { d: "M4594 9839 c-18 -20 -18 -20 11 -14 50 11 57 14 50 25 -10 17 -41 11\n-61 -11z" }),
        React__default['default'].createElement("path", { d: "M6072 9828 c5 -15 37 -18 41 -3 1 6 -9 12 -22 13 -16 3 -22 -1 -19\n-10z" }),
        React__default['default'].createElement("path", { d: "M4403 9800 c-20 -12 -33 -28 -33 -40 0 -15 -7 -20 -27 -20 -35 0 -65\n-17 -43 -23 8 -2 29 -8 45 -14 27 -8 33 -7 48 13 16 22 16 23 0 33 -19 10 -15\n21 9 25 18 3 58 29 58 38 0 14 -24 9 -57 -12z" }),
        React__default['default'].createElement("path", { d: "M5060 9806 c0 -18 17 -29 30 -21 8 5 7 11 -1 21 -15 18 -29 18 -29 0z" }),
        React__default['default'].createElement("path", { d: "M5220 9809 c0 -8 -11 -9 -31 -5 -26 5 -29 3 -20 -7 14 -18 2 -30 -16\n-15 -17 14 -30 2 -35 -32 -3 -23 -6 -25 -54 -22 -45 3 -54 0 -69 -20 -11 -15\n-19 -19 -22 -10 -7 19 -33 14 -53 -10 -16 -20 -26 -23 -78 -20 -57 2 -60 1\n-96 -38 -39 -42 -60 -50 -70 -25 -7 19 -46 20 -46 0 0 -8 9 -19 20 -25 39 -21\n20 -52 -37 -65 -26 -5 -33 -3 -33 9 0 9 -5 16 -11 16 -7 0 -9 9 -6 23 9 35 -6\n51 -42 44 -38 -8 -47 5 -21 28 15 14 23 15 34 6 7 -6 21 -8 30 -5 13 5 14 9 4\n21 -10 12 -9 18 5 28 9 7 17 15 17 19 0 11 -28 6 -42 -7 -20 -20 -41 -25 -60\n-16 -10 6 -19 5 -23 -1 -5 -8 -11 -8 -19 -1 -18 15 -58 2 -54 -18 2 -10 15\n-17 36 -19 17 -2 32 -7 32 -12 0 -14 -35 -21 -61 -12 -18 7 -27 5 -35 -7 -10\n-12 -15 -13 -27 -2 -13 10 -17 9 -27 -9 -14 -25 -8 -36 26 -44 20 -5 33 -1 50\n15 24 22 32 17 15 -10 -13 -20 -2 -44 14 -31 9 7 16 6 25 -5 20 -24 8 -27 -61\n-15 -54 9 -69 9 -94 -4 -37 -20 -64 -20 -89 -1 -10 8 -23 12 -28 9 -5 -3 -15\n2 -22 12 -17 23 -46 12 -39 -15 4 -17 1 -21 -17 -21 -15 0 -20 -5 -17 -15 5\n-12 2 -12 -19 -3 -18 9 -27 9 -36 0 -9 -9 -7 -12 10 -12 12 0 22 -4 22 -9 0\n-18 -18 -21 -45 -9 -22 10 -32 9 -60 -6 -19 -10 -41 -16 -50 -13 -27 11 -29 8\n-30 -34 -1 -27 4 -43 13 -47 12 -4 11 -8 -4 -19 -22 -16 -51 -17 -56 -2 -5 16\n-75 41 -131 46 -40 4 -46 3 -41 -11 7 -19 31 -21 37 -3 3 9 7 9 20 -1 13 -11\n14 -18 4 -35 -7 -12 -16 -25 -21 -28 -8 -7 16 -57 106 -214 88 -154 147 -250\n172 -281 14 -18 26 -37 26 -43 0 -6 7 -11 15 -11 9 0 14 8 12 23 -2 18 4 23\n31 25 18 2 32 -1 32 -7 0 -6 11 -11 24 -11 13 0 27 -8 31 -17 7 -16 9 -15 14\n7 4 14 22 32 41 43 33 17 38 17 73 2 40 -17 45 -26 22 -45 -20 -17 -19 -40 3\n-40 14 0 13 -4 -7 -19 -32 -25 -19 -49 15 -27 34 23 47 20 66 -15 13 -22 23\n-29 37 -24 24 7 35 -19 15 -35 -18 -15 -19 -50 -1 -50 18 0 37 21 37 40 0 11\n13 16 50 18 41 2 49 0 44 -12 -11 -28 25 -29 79 -2 45 22 53 24 63 11 6 -8 16\n-15 23 -15 6 0 11 -4 11 -8 0 -16 -55 -70 -75 -73 -25 -5 -34 -49 -10 -49 9 0\n26 5 37 11 13 7 24 7 30 1 16 -16 48 -2 48 21 0 12 14 36 32 54 26 27 29 35\n19 47 -7 8 -10 20 -6 26 3 5 1 10 -4 10 -6 0 -11 -7 -11 -15 0 -26 -40 -17\n-68 15 -15 17 -34 30 -44 30 -12 0 -18 8 -18 23 0 13 -6 29 -12 36 -11 10 -10\n15 4 25 21 15 78 9 85 -10 2 -7 11 -10 19 -7 27 10 65 -7 76 -35 l11 -27 6 30\nc6 31 41 49 41 21 0 -9 5 -16 10 -16 13 0 13 13 -1 27 -16 16 -2 33 27 33 17\n0 24 6 24 18 0 13 12 22 39 30 50 15 61 15 61 -2 0 -27 69 -36 89 -12 10 12 7\n15 -16 18 -20 2 -29 9 -31 26 -2 12 -10 22 -18 22 -8 0 -14 7 -14 15 0 8 -17\n19 -42 26 -24 6 -49 13 -55 15 -23 6 -13 22 18 29 22 5 34 3 42 -9 10 -13 19\n-14 49 -6 21 6 39 19 43 29 3 10 17 23 32 30 24 11 25 13 8 25 -18 13 -17 15\n4 50 16 25 30 36 47 36 14 0 24 -6 24 -15 0 -8 10 -19 21 -26 20 -10 21 -9 16\n11 -4 14 -2 20 7 17 6 -3 20 1 31 9 15 11 16 14 3 14 -9 0 -18 9 -21 21 -3 11\n-15 23 -26 26 -12 3 -21 10 -21 15 0 13 51 58 66 58 18 0 18 -14 0 -30 -8 -6\n-12 -18 -9 -26 4 -10 9 -12 18 -4 7 6 29 8 50 5 31 -4 38 -1 42 15 3 11 9 20\n14 20 16 0 10 28 -7 34 -13 5 -15 15 -11 42 5 29 4 34 -8 24 -30 -25 -23 9 9\n42 26 27 38 33 55 27 24 -10 28 3 6 21 -19 16 -10 30 21 30 33 0 32 -32 -3\n-60 -24 -19 -27 -27 -26 -81 1 -34 6 -66 12 -72 15 -15 14 -32 -4 -47 -11 -9\n-14 -22 -10 -42 8 -35 -10 -38 -19 -3 -6 24 -26 36 -26 15 0 -5 5 -10 11 -10\n8 0 7 -5 -2 -16 -7 -8 -20 -13 -30 -11 -12 3 -16 0 -12 -10 3 -8 -4 -28 -16\n-44 -12 -16 -20 -37 -17 -47 4 -12 -4 -21 -26 -32 -18 -8 -34 -21 -36 -27 -6\n-20 33 -15 53 7 16 18 20 18 45 5 16 -8 30 -23 32 -32 5 -21 -49 -93 -69 -93\n-8 0 -11 -4 -8 -10 8 -13 52 -13 61 1 3 6 17 8 31 4 15 -3 34 0 47 8 34 22 77\n27 102 10 19 -12 21 -18 11 -33 -8 -13 -18 -18 -33 -14 -12 3 -25 1 -28 -5\n-11 -17 -44 -13 -55 7 -8 15 -11 14 -20 -10 -6 -16 -18 -28 -28 -29 -11 0 -13\n-3 -5 -6 6 -2 12 -11 12 -19 0 -12 -8 -13 -35 -8 -28 5 -35 3 -35 -10 0 -11 9\n-16 30 -16 31 0 39 -17 19 -37 -9 -9 -3 -16 25 -29 26 -13 35 -23 31 -34 -3\n-10 1 -23 9 -30 14 -11 14 -14 1 -27 -8 -8 -15 -21 -15 -29 0 -12 4 -12 21 -4\n11 6 33 9 49 5 17 -4 31 -2 35 5 4 7 18 9 31 6 16 -4 29 0 43 16 23 24 38 19\n26 -9 -5 -10 -7 -26 -6 -35 1 -11 -4 -18 -14 -18 -28 0 -11 -24 23 -32 36 -10\n48 -23 27 -32 -8 -3 -21 1 -29 9 -17 17 -36 20 -36 5 0 -5 5 -10 11 -10 5 0 7\n-4 4 -10 -3 -5 -15 -10 -25 -10 -30 0 -34 -19 -9 -46 12 -13 21 -26 18 -28\n-10 -9 -79 -16 -79 -8 0 13 -33 11 -50 -2 -41 -32 -67 -39 -90 -23 -19 13 -25\n13 -51 0 -21 -10 -44 -13 -71 -9 -25 4 -46 2 -54 -5 -8 -7 -17 -9 -21 -6 -11\n12 -33 -15 -33 -39 0 -21 -5 -24 -35 -24 -41 0 -53 -19 -37 -55 7 -15 8 -26 2\n-30 -7 -4 -7 -13 0 -24 11 -21 -5 -41 -32 -41 -10 0 -18 -4 -18 -10 0 -5 -14\n-10 -31 -10 -16 0 -28 -4 -25 -9 3 -5 15 -7 26 -4 15 4 20 0 20 -15 0 -23 -19\n-33 -49 -25 -12 3 -21 1 -21 -6 0 -6 12 -13 28 -16 15 -4 35 -10 44 -16 10 -5\n24 -9 32 -9 22 0 28 -57 9 -93 -9 -18 -16 -44 -14 -58 2 -20 -3 -28 -21 -33\n-36 -9 -41 -7 -36 12 4 15 0 17 -23 14 -33 -5 -41 20 -11 37 14 9 11 10 -16\n11 -25 0 -35 -6 -44 -25 -15 -32 -32 -27 -35 11 -5 68 -16 95 -40 105 -18 6\n-23 14 -18 28 4 13 -2 23 -19 34 -21 14 -24 23 -21 56 3 28 0 41 -10 45 -20 7\n-19 26 0 26 20 0 19 19 0 26 -10 4 -12 11 -7 18 11 14 3 158 -9 150 -5 -3 -9\n-13 -9 -23 0 -37 -103 -61 -121 -29 -7 13 -17 16 -41 11 -20 -4 -29 -2 -25 4\n10 16 -29 45 -55 41 -27 -4 -38 -37 -11 -34 13 1 19 -7 21 -26 2 -17 11 -28\n25 -32 60 -16 106 -98 63 -112 -27 -9 -96 -5 -118 7 -25 13 -22 45 5 64 21 15\n21 17 5 29 -10 7 -18 18 -18 25 0 6 -16 26 -35 44 -42 38 -43 50 -10 89 29 34\n28 46 -1 62 -10 6 -22 16 -26 21 -5 6 -8 6 -8 -2 0 -6 4 -14 9 -17 9 -6 8 -48\n-4 -83 -9 -27 -9 -27 -34 -11 -15 9 -26 9 -45 0 -19 -9 -27 -8 -33 1 -15 23\n-33 82 -33 110 0 31 -13 34 -38 9 -32 -32 -51 -34 -58 -7 -3 14 -10 25 -15 25\n-12 0 -12 -25 0 -48 5 -9 28 -57 52 -105 45 -94 43 -93 77 -42 7 11 58 45 67\n45 3 0 5 -7 5 -15 0 -8 -7 -15 -15 -15 -8 0 -15 -8 -15 -19 0 -10 7 -24 15\n-31 21 -17 19 -27 -7 -36 -12 -3 -29 -16 -39 -27 -16 -21 -14 -27 56 -167 39\n-80 91 -184 114 -232 23 -48 53 -100 66 -116 14 -17 25 -35 25 -42 0 -6 5 -8\n10 -5 19 11 30 -5 18 -25 -10 -16 -7 -31 21 -89 19 -38 44 -82 57 -98 20 -25\n25 -26 43 -15 33 20 37 14 8 -16 l-26 -27 35 -70 c20 -39 43 -77 51 -85 13\n-13 16 -13 28 4 15 19 35 14 35 -10 0 -8 -9 -14 -20 -14 -14 0 -20 -7 -20 -21\n0 -24 81 -187 117 -236 12 -17 23 -36 23 -42 0 -5 12 -22 28 -38 15 -15 32\n-39 38 -53 35 -74 47 -99 70 -135 13 -22 29 -51 34 -65 14 -34 14 -34 63 -125\n126 -235 190 -335 214 -335 10 0 30 17 44 38 28 39 91 170 103 212 4 14 19 50\n33 80 28 60 26 55 78 185 50 122 95 207 192 362 46 73 83 135 83 137 0 3 53\n114 119 248 176 360 204 418 238 478 81 148 183 349 183 363 0 8 6 17 13 20\n18 6 -8 35 -36 39 -24 3 -43 64 -26 85 11 13 -5 53 -21 53 -5 0 -9 8 -9 18 -1\n9 -2 30 -3 47 -2 22 2 30 16 33 11 2 24 -2 30 -9 18 -23 73 -49 90 -43 9 3 23\n1 31 -6 8 -7 21 -10 28 -7 18 7 99 173 97 200 -4 42 0 52 36 89 20 22 36 50\n37 65 2 28 -13 36 -100 50 -18 3 -33 11 -33 18 0 8 -7 21 -16 29 -8 9 -13 24\n-10 34 4 12 -1 20 -17 27 -12 6 -24 19 -26 30 -2 11 -11 28 -21 37 -10 9 -20\n21 -21 26 -2 5 -14 12 -26 16 -24 8 -35 -7 -47 -66 -7 -32 -22 -34 -90 -16\n-30 8 -48 19 -55 35 -16 35 -15 36 29 29 63 -10 90 1 90 36 0 26 -3 29 -22 23\n-25 -7 -63 -22 -91 -37 -10 -5 -27 -6 -37 -3 -13 4 -19 0 -22 -12 -2 -12 -13\n-18 -36 -19 -43 -2 -52 -12 -28 -30 19 -13 19 -14 2 -14 -15 0 -16 -3 -6 -15\n7 -8 21 -15 31 -15 10 0 21 -4 24 -10 3 -5 -1 -10 -9 -10 -11 0 -16 -9 -16\n-27 0 -20 -7 -31 -26 -40 -26 -12 -26 -11 -20 17 5 28 4 29 -14 18 -20 -13\n-23 -10 -61 45 -8 11 -29 1 -29 -14 0 -5 7 -9 15 -9 8 0 15 -7 15 -16 0 -14\n-7 -15 -39 -10 -22 3 -42 2 -46 -4 -3 -5 -29 -12 -56 -16 l-51 -7 4 -43 c2\n-27 -1 -43 -7 -40 -5 2 -18 -1 -28 -6 -13 -7 -26 -5 -43 7 -29 19 -32 39 -4\n30 22 -7 24 -2 10 25 -7 13 -7 21 0 25 20 12 10 45 -15 51 -41 10 -58 -2 -50\n-36 7 -33 1 -36 -39 -20 -34 12 -36 50 -3 50 14 1 36 18 62 50 22 28 48 50 58\n50 10 0 15 5 12 10 -4 6 -15 8 -26 5 -15 -5 -19 -1 -19 14 0 12 -4 21 -10 21\n-5 0 -10 9 -10 20 0 13 -7 20 -19 20 -27 0 -34 15 -16 33 28 28 12 77 -24 77\n-11 0 -17 11 -18 35 -1 19 -8 48 -16 65 -9 16 -13 39 -10 50 4 14 -1 22 -18\n29 -17 7 -19 10 -7 10 9 1 20 6 23 11 9 15 -45 55 -75 55 -24 0 -25 2 -23 70\n2 116 2 115 22 115 36 0 43 25 16 54 -13 14 -25 26 -27 26 -2 0 -3 -15 -3 -32\n0 -29 -4 -33 -27 -36 -21 -3 -26 0 -22 11 6 17 -52 107 -69 107 -16 -1 -47\n-25 -47 -37 0 -5 18 -18 40 -29 22 -10 40 -22 40 -25 0 -18 -87 -15 -193 6\n-24 5 -53 3 -77 -5 -21 -7 -46 -10 -54 -7 -27 10 3 47 37 47 23 0 58 15 87 38\n7 5 -32 32 -47 32 -7 0 -13 -5 -13 -11z m-221 -148 c17 -11 5 -31 -19 -31 -21\n0 -34 15 -25 30 8 12 25 13 44 1z m-487 -88 c26 -23 22 -31 -12 -28 -38 3 -46\n11 -30 30 16 19 19 19 42 -2z m256 -25 c-7 -19 -38 -22 -38 -4 0 10 9 16 21\n16 12 0 19 -5 17 -12z m-355 -72 c5 -14 -31 -36 -58 -36 -35 0 1 49 36 50 9 0\n19 -6 22 -14z m377 -45 c0 -11 -39 -25 -47 -18 -3 3 -2 10 2 16 8 13 45 15 45\n2z m-790 -20 c0 -5 -7 -11 -15 -15 -9 -3 -15 0 -15 9 0 8 7 15 15 15 8 0 15\n-4 15 -9z m70 -22 c0 -5 -7 -9 -15 -9 -15 0 -20 12 -9 23 8 8 24 -1 24 -14z\nm177 5 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m296 -1 c8 -7\n-11 -33 -24 -33 -5 0 -9 9 -9 20 0 19 20 27 33 13z m1045 -76 c4 -20 -25 -34\n-40 -19 -15 15 -1 44 19 40 10 -2 19 -11 21 -21z m-1609 4 c23 -15 5 -41 -29\n-41 -16 0 -30 4 -30 9 0 5 -3 16 -6 25 -5 12 0 16 22 16 16 0 35 -4 43 -9z\nm611 -21 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10\n-10z m-743 -62 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m97 -13\nc-9 -23 -54 -19 -54 4 0 11 6 21 13 24 19 7 47 -12 41 -28z m1226 9 c0 -8 -4\n-12 -10 -9 -5 3 -10 10 -10 16 0 5 5 9 10 9 6 0 10 -7 10 -16z m-872 -11 c2\n-8 -6 -13 -22 -13 -25 0 -33 10 -19 24 10 10 36 3 41 -11z m682 -38 c15 -18 5\n-35 -21 -35 -14 0 -19 7 -19 25 0 28 21 33 40 10z m-132 -33 c12 3 29 0 39 -7\n10 -7 30 -15 43 -17 22 -3 26 -9 30 -50 3 -26 4 -45 1 -43 -2 3 -10 -4 -18\n-15 -8 -11 -23 -20 -34 -20 -10 0 -34 -16 -53 -36 -25 -27 -40 -35 -55 -31\n-12 3 -21 1 -21 -4 0 -5 -4 -9 -10 -9 -5 0 -10 11 -10 25 0 28 -12 32 -30 10\n-16 -19 -30 -19 -30 0 0 9 -7 29 -15 45 -16 31 -11 60 11 60 17 0 18 12 3 27\n-13 13 -6 18 71 56 25 12 48 18 51 13 4 -5 16 -6 27 -4z m-423 -3 c11 -17 -1\n-21 -15 -4 -8 9 -8 15 -2 15 6 0 14 -5 17 -11z m638 -39 c6 0 4 -7 -5 -16 -18\n-18 -38 -11 -38 13 0 10 6 13 16 9 9 -3 21 -6 27 -6z m606 -14 c24 -13 61 -55\n61 -71 0 -3 -9 -5 -20 -5 -11 0 -20 4 -20 9 0 6 -12 3 -27 -5 -35 -18 -97 -18\n-112 0 -16 19 3 64 31 76 33 13 55 12 87 -4z m-649 -45 c0 -5 9 -11 20 -14 23\n-6 25 -15 5 -41 -12 -16 -16 -17 -35 -3 -14 10 -18 17 -10 22 6 4 8 15 5 26\n-4 11 -2 19 4 19 6 0 11 -4 11 -9z m-580 -97 c0 -16 11 -36 25 -50 17 -15 23\n-29 18 -40 -5 -14 -8 -15 -11 -4 -3 8 -16 25 -28 39 -23 25 -24 25 -54 8 -36\n-21 -62 -12 -30 10 12 8 25 26 30 39 13 34 50 33 50 -2z m165 -14 c3 -5 -1\n-10 -10 -10 -9 0 -13 5 -10 10 3 6 8 10 10 10 2 0 7 -4 10 -10z m1185 -31 c0\n-5 -7 -9 -15 -9 -15 0 -20 12 -9 23 8 8 24 -1 24 -14z m-1662 -31 c-2 -26 2\n-35 20 -43 12 -5 22 -15 22 -22 0 -18 -23 -21 -47 -5 -26 16 -32 69 -11 90 17\n17 18 16 16 -20z m262 -13 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15\n15 15 8 0 15 -7 15 -15z m1726 -16 c4 -7 24 -9 50 -6 l43 4 -15 -29 c-18 -36\n-14 -43 22 -34 20 5 25 12 21 26 -7 26 7 33 49 25 40 -7 41 -24 0 -43 -17 -9\n-29 -24 -33 -43 -3 -16 -9 -29 -14 -29 -5 0 -6 6 -3 14 3 8 -3 19 -15 25 -27\n15 -35 14 -61 -9 -13 -11 -34 -20 -47 -20 -14 0 -23 -6 -23 -15 0 -8 -7 -15\n-15 -15 -18 0 -19 12 -3 28 16 16 17 50 1 56 -7 3 -13 10 -13 17 0 6 7 9 15 5\n17 -6 21 9 5 19 -5 3 -10 13 -10 21 0 17 36 19 46 3z m-401 -19 c0 -22 -29\n-18 -33 3 -3 14 1 18 15 15 10 -2 18 -10 18 -18z m325 10 c0 -5 -9 -10 -21\n-10 -11 0 -17 5 -14 10 3 6 13 10 21 10 8 0 14 -4 14 -10z m-162 -88 c2 -7 -3\n-12 -12 -12 -9 0 -16 7 -16 16 0 17 22 14 28 -4z m-363 -22 c4 -6 -7 -10 -24\n-10 -17 0 -31 5 -31 10 0 6 11 10 24 10 14 0 28 -4 31 -10z m115 -45 c0 -8 -4\n-15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m570 -26 c0\n-6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10 -11 10 -16z m148\n-35 c25 -18 29 -39 7 -48 -9 -3 -15 0 -15 10 0 12 -7 15 -25 12 -30 -6 -42 7\n-25 27 16 19 30 19 58 -1z m-808 -46 c0 -21 -18 -34 -31 -21 -5 5 -4 19 3 35\n13 27 28 20 28 -14z m420 -32 c0 -20 -19 -31 -32 -18 -6 6 -7 15 -4 21 10 16\n36 13 36 -3z m377 -32 c8 -21 -13 -42 -28 -27 -13 13 -5 43 11 43 6 0 13 -7\n17 -16z m-420 -88 c-9 -23 -59 -45 -65 -28 -6 19 -22 14 -22 -8 0 -13 -7 -20\n-20 -20 -11 0 -20 3 -20 6 0 12 49 52 55 45 4 -3 12 1 18 10 25 33 67 29 54\n-5z m-1682 -26 c3 -5 -1 -10 -10 -10 -9 0 -13 5 -10 10 3 6 8 10 10 10 2 0 7\n-4 10 -10z m193 -230 c18 -30 5 -43 -20 -21 -11 11 -17 24 -13 30 9 16 19 13\n33 -9z m52 10 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11\n-4 11 -10z m272 -214 c22 -33 0 -57 -44 -50 -38 7 -52 23 -42 48 10 27 69 28\n86 2z m-167 -55 c7 -12 -12 -24 -25 -16 -11 7 -4 25 10 25 5 0 11 -4 15 -9z\nm349 -170 c3 -5 -1 -11 -9 -15 -9 -3 -15 0 -15 9 0 16 16 20 24 6z m61 -30 c3\n-6 -4 -15 -15 -21 -16 -8 -20 -8 -20 3 0 25 23 36 35 18z m80 -1 c3 -5 1 -10\n-4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-25 -59 c0 -4 -9\n-16 -19 -25 -17 -15 -19 -26 -14 -68 5 -41 3 -50 -8 -46 -8 3 -14 13 -14 24 0\n10 -6 29 -13 41 -20 36 -15 78 11 90 22 11 57 1 57 -16z m-15 -359 c-6 -4 -17\n-20 -25 -35 -11 -23 -12 -30 -1 -36 9 -6 6 -10 -11 -14 -12 -4 -26 -7 -30 -7\n-24 0 15 86 42 94 26 7 36 6 25 -2z m85 -22 c0 -5 -2 -10 -4 -10 -3 0 -8 5\n-11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-74 -115 c-6 -25 -67 -62 -85 -51\n-24 15 23 80 64 88 24 4 29 -5 21 -37z m191 -72 c4 -12 -34 -29 -44 -19 -3 3\n-3 12 1 21 7 18 37 17 43 -2z m-77 -141 c0 -20 -39 -72 -55 -72 -23 0 -34 57\n-14 77 15 15 69 11 69 -5z m-175 -12 c3 -5 15 -10 26 -10 23 0 26 -28 4 -36\n-20 -8 -75 15 -75 31 0 12 13 22 32 24 4 1 10 -3 13 -9z m593 -138 c2 -7 -3\n-12 -12 -12 -9 0 -16 7 -16 16 0 17 22 14 28 -4z" }),
        React__default['default'].createElement("path", { d: "M4760 9116 c0 -15 24 -28 34 -19 7 7 -13 33 -25 33 -5 0 -9 -6 -9\n-14z" }),
        React__default['default'].createElement("path", { d: "M4835 9100 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z" }),
        React__default['default'].createElement("path", { d: "M4055 9790 c-13 -6 -15 -9 -5 -9 8 0 22 4 30 9 18 12 2 12 -25 0z" }),
        React__default['default'].createElement("path", { d: "M5328 9793 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M3150 9766 c0 -9 7 -16 16 -16 17 0 14 22 -4 28 -7 2 -12 -3 -12 -12z" }),
        React__default['default'].createElement("path", { d: "M4515 9773 c-58 -8 -74 -59 -20 -65 27 -3 36 0 41 14 3 10 14 23 25\n28 10 6 19 15 19 20 0 10 -10 10 -65 3z" }),
        React__default['default'].createElement("path", { d: "M3940 9757 l-25 -10 23 -5 c26 -4 36 1 31 16 -3 6 -14 5 -29 -1z" }),
        React__default['default'].createElement("path", { d: "M4674 9697 c-16 -14 -24 -29 -20 -35 12 -19 44 -14 60 10 34 49 7 65\n-40 25z" }),
        React__default['default'].createElement("path", { d: "M7020 9706 c0 -8 4 -17 10 -21 11 -7 2 -35 -12 -35 -5 0 -18 10 -27\n21 -13 17 -22 20 -35 12 -16 -9 -16 -10 1 -25 10 -8 37 -18 60 -22 40 -6 42\n-5 48 26 6 24 3 35 -11 45 -23 17 -34 17 -34 -1z" }),
        React__default['default'].createElement("path", { d: "M3860 9688 c0 -15 60 -38 99 -38 30 0 63 19 55 31 -3 5 -29 9 -57 9\n-29 -1 -62 2 -74 5 -17 5 -23 3 -23 -7z" }),
        React__default['default'].createElement("path", { d: "M4628 9693 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M6635 9690 c-8 -13 53 -72 66 -65 5 4 9 14 9 24 0 20 -66 56 -75 41z" }),
        React__default['default'].createElement("path", { d: "M6780 9665 c-7 -8 -8 -15 -2 -15 5 0 15 7 22 15 7 8 8 15 2 15 -5 0\n-15 -7 -22 -15z" }),
        React__default['default'].createElement("path", { d: "M4190 9659 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M2841 9621 c-13 -23 -14 -31 -3 -31 13 0 32 39 22 45 -5 3 -14 -3\n-19 -14z" }),
        React__default['default'].createElement("path", { d: "M2970 9620 c-12 -23 -6 -40 16 -40 9 0 14 11 14 30 0 35 -14 39 -30\n10z" }),
        React__default['default'].createElement("path", { d: "M3986 9631 c-3 -5 1 -12 10 -15 27 -10 44 -7 44 9 0 16 -45 21 -54 6z" }),
        React__default['default'].createElement("path", { d: "M4071 9621 c-11 -7 -9 -10 8 -16 25 -8 36 -2 26 14 -8 13 -15 14 -34\n2z" }),
        React__default['default'].createElement("path", { d: "M5608 9613 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M7680 9603 c0 -13 13 -27 52 -55 20 -15 44 -35 53 -45 17 -16 17 -16\n10 7 -13 40 -46 78 -78 90 -36 12 -37 12 -37 3z" }),
        React__default['default'].createElement("path", { d: "M3060 9580 c0 -19 11 -26 23 -14 8 8 -3 34 -14 34 -5 0 -9 -9 -9 -20z" }),
        React__default['default'].createElement("path", { d: "M3907 9580 c8 -30 38 -43 53 -24 11 12 10 17 -6 29 -29 22 -53 19\n-47 -5z" }),
        React__default['default'].createElement("path", { d: "M5648 9570 c-3 -20 0 -30 9 -30 7 0 13 3 13 8 0 4 3 17 6 30 5 16 2\n22 -9 22 -9 0 -16 -12 -19 -30z" }),
        React__default['default'].createElement("path", { d: "M7164 9581 c11 -11 31 -21 45 -21 22 0 23 2 11 14 -8 8 -28 18 -45\n22 l-30 7 19 -22z" }),
        React__default['default'].createElement("path", { d: "M2877 9583 c-4 -3 -7 -13 -7 -21 0 -12 3 -12 15 -2 8 7 15 16 15 21\n0 11 -14 12 -23 2z" }),
        React__default['default'].createElement("path", { d: "M2986 9551 c-10 -11 -16 -26 -14 -34 2 -9 11 -2 25 19 24 37 17 46\n-11 15z" }),
        React__default['default'].createElement("path", { d: "M6188 9563 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M4002 9547 c-9 -11 -10 -17 -2 -22 15 -9 23 -1 18 21 -3 15 -4 16\n-16 1z" }),
        React__default['default'].createElement("path", { d: "M3770 9532 c-20 -16 -21 -20 -7 -25 11 -4 21 1 28 14 15 29 6 33 -21\n11z" }),
        React__default['default'].createElement("path", { d: "M3843 9538 c0 -7 -4 -21 -8 -30 -5 -13 -2 -18 9 -18 23 0 32 29 14\n46 -11 11 -15 12 -15 2z" }),
        React__default['default'].createElement("path", { d: "M2759 9512 c-26 -12 -69 -49 -69 -61 0 -16 20 -13 26 4 4 8 12 15 18\n15 7 0 22 11 34 25 22 25 20 29 -9 17z" }),
        React__default['default'].createElement("path", { d: "M6778 9483 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M7910 9481 c0 -5 7 -12 16 -15 22 -9 24 -8 18 9 -7 16 -34 21 -34 6z" }),
        React__default['default'].createElement("path", { d: "M3710 9465 c-7 -8 -20 -15 -29 -15 -9 0 8 -14 38 -30 60 -33 97 -39\n87 -15 -4 10 3 19 19 27 13 6 26 17 29 24 4 10 -6 12 -45 8 -27 -2 -58 0 -68\n6 -14 7 -22 6 -31 -5z" }),
        React__default['default'].createElement("path", { d: "M3890 9459 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M6920 9450 c-8 -5 -34 -10 -57 -10 -24 0 -43 -4 -43 -8 0 -12 49 -34\n60 -27 5 3 18 0 28 -6 16 -10 25 -8 55 17 25 19 32 31 24 36 -17 11 -49 10\n-67 -2z" }),
        React__default['default'].createElement("path", { d: "M5970 9420 c0 -25 8 -25 40 0 l25 20 -32 0 c-26 0 -33 -4 -33 -20z" }),
        React__default['default'].createElement("path", { d: "M5879 9363 c0 -5 -3 -20 -5 -34 -3 -18 3 -32 17 -45 l22 -19 -6 34\nc-4 18 -7 42 -7 52 0 18 -19 28 -21 12z" }),
        React__default['default'].createElement("path", { d: "M6140 9360 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0\n-16 -4 -16 -10z" }),
        React__default['default'].createElement("path", { d: "M6912 9348 c3 -7 15 -15 27 -16 16 -3 22 1 19 10 -3 7 -15 15 -27 16\n-16 3 -22 -1 -19 -10z" }),
        React__default['default'].createElement("path", { d: "M7892 9348 c3 -7 13 -15 22 -16 12 -3 17 1 14 10 -3 7 -13 15 -22 16\n-12 3 -17 -1 -14 -10z" }),
        React__default['default'].createElement("path", { d: "M2792 9330 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M2757 9320 c3 -11 7 -20 9 -20 2 0 4 9 4 20 0 11 -4 20 -9 20 -5 0\n-7 -9 -4 -20z" }),
        React__default['default'].createElement("path", { d: "M6190 9325 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0\n-10 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M6120 9317 c0 -3 5 -18 12 -32 14 -32 59 -37 51 -5 -3 11 -13 20 -22\n20 -9 0 -22 5 -29 12 -7 7 -12 9 -12 5z" }),
        React__default['default'].createElement("path", { d: "M6323 9313 c-7 -3 -13 -10 -13 -16 0 -6 -7 -19 -17 -29 -9 -11 -11\n-18 -5 -18 7 0 12 5 12 10 0 12 32 13 46 1 13 -12 64 -23 64 -13 0 8 -29 37\n-60 59 -8 6 -21 8 -27 6z" }),
        React__default['default'].createElement("path", { d: "M7960 9305 c7 -9 15 -13 17 -11 7 7 -7 26 -19 26 -6 0 -6 -6 2 -15z" }),
        React__default['default'].createElement("path", { d: "M2709 9288 c-1 -2 -3 -12 -4 -23 -2 -11 -6 -27 -9 -36 -4 -9 2 -23\n15 -35 21 -19 21 -19 45 9 13 16 24 32 24 38 0 12 -17 12 -25 -1 -3 -5 -13\n-10 -21 -10 -13 0 -12 4 1 30 15 29 15 30 -5 30 -11 0 -21 -1 -21 -2z" }),
        React__default['default'].createElement("path", { d: "M5820 9286 c0 -9 30 -14 35 -6 4 6 -3 10 -14 10 -12 0 -21 -2 -21 -4z" }),
        React__default['default'].createElement("path", { d: "M7900 9273 c0 -12 93 -74 99 -67 9 8 -66 74 -84 74 -8 0 -15 -3 -15\n-7z" }),
        React__default['default'].createElement("path", { d: "M5979 9256 c-24 -23 -58 -29 -65 -12 -8 20 -24 20 -50 2 -18 -14 -18\n-15 9 -36 22 -18 25 -25 16 -36 -6 -8 -20 -14 -30 -14 -25 0 -24 -15 2 -51 16\n-23 24 -27 38 -20 10 6 27 7 39 4 12 -3 22 -1 22 5 0 14 -33 75 -45 84 -6 5\n-3 8 7 8 27 0 48 -11 48 -26 0 -19 16 -18 24 1 3 8 10 15 16 15 17 0 24 -31 9\n-40 -16 -11 -12 -15 24 -24 16 -4 27 -2 27 4 0 5 -7 10 -15 10 -8 0 -15 7 -15\n16 0 13 7 15 43 9 23 -4 44 -11 45 -16 6 -15 22 1 22 22 0 10 7 19 15 19 8 0\n15 5 15 10 0 6 -9 10 -20 10 -11 0 -20 3 -20 8 0 4 -7 16 -15 27 -15 19 -15\n19 -30 -2 -11 -15 -25 -21 -50 -20 -29 1 -35 5 -35 23 0 29 -13 37 -31 20z\nm-59 -120 c0 -11 -19 -15 -25 -6 -3 5 1 10 9 10 9 0 16 -2 16 -4z" }),
        React__default['default'].createElement("path", { d: "M6045 9259 c-10 -15 3 -25 16 -12 7 7 7 13 1 17 -6 3 -14 1 -17 -5z" }),
        React__default['default'].createElement("path", { d: "M8070 9245 c0 -14 7 -28 15 -32 21 -8 24 -3 18 30 -7 34 -33 36 -33\n2z" }),
        React__default['default'].createElement("path", { d: "M6895 9250 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0\n-12 -4 -9 -10z" }),
        React__default['default'].createElement("path", { d: "M6202 9230 c-17 -28 -16 -30 21 -29 17 1 24 3 15 6 -21 5 -24 29 -5\n36 8 4 7 6 -3 6 -8 1 -21 -8 -28 -19z" }),
        React__default['default'].createElement("path", { d: "M6327 9210 c-17 -24 -17 -25 0 -29 10 -2 25 -8 33 -15 12 -9 13 -8 3\n4 -6 8 -13 26 -15 40 l-3 25 -18 -25z" }),
        React__default['default'].createElement("path", { d: "M7920 9196 c0 -9 4 -16 9 -16 5 0 22 -14 38 -31 39 -42 82 -64 97\n-49 12 12 -7 30 -35 30 -8 0 -28 12 -45 28 -53 50 -64 57 -64 38z" }),
        React__default['default'].createElement("path", { d: "M6642 9119 c-13 -5 -20 -13 -17 -19 8 -12 25 -13 45 0 23 14 0 30\n-28 19z" }),
        React__default['default'].createElement("path", { d: "M6830 9086 c0 -9 7 -16 16 -16 9 0 14 5 12 12 -6 18 -28 21 -28 4z" }),
        React__default['default'].createElement("path", { d: "M7275 9090 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0\n-13 -4 -16 -10z" }),
        React__default['default'].createElement("path", { d: "M6030 9055 c0 -8 -7 -15 -15 -15 -8 0 -15 -7 -15 -15 0 -12 12 -15\n56 -14 l55 2 -30 20 c-17 10 -28 23 -25 28 3 5 -2 9 -10 9 -9 0 -16 -7 -16\n-15z" }),
        React__default['default'].createElement("path", { d: "M5288 9043 c-31 -16 -38 -43 -10 -43 13 0 49 49 39 55 -1 1 -14 -5\n-29 -12z" }),
        React__default['default'].createElement("path", { d: "M3243 9042 c-20 -13 -40 -97 -53 -219 -11 -108 -9 -140 10 -128 16\n10 23 -18 8 -29 -16 -12 -39 -101 -32 -121 3 -6 0 -31 -5 -55 -6 -25 -6 -49\n-1 -55 5 -6 2 -18 -6 -30 -20 -27 -18 -186 2 -178 22 8 16 -23 -7 -39 -20 -13\n-23 -29 -35 -213 -13 -191 -22 -297 -43 -519 -14 -137 -28 -303 -46 -536 -8\n-107 -20 -247 -25 -310 -6 -63 -15 -216 -20 -340 -12 -289 -20 -397 -30 -440\n-17 -69 -32 -299 -35 -535 -2 -136 -10 -283 -18 -340 -8 -55 -15 -163 -16\n-239 -1 -75 -4 -143 -6 -149 -3 -7 -9 -84 -15 -172 -6 -88 -17 -236 -25 -330\n-9 -93 -18 -224 -22 -290 -5 -105 -3 -122 11 -134 13 -11 22 -11 39 -3 12 6\n39 13 60 17 64 10 70 33 82 290 3 61 9 164 14 230 5 73 5 143 0 179 -7 43 -6\n79 5 140 18 97 25 175 31 361 2 77 9 188 15 246 6 59 10 149 9 200 -1 52 6\n171 14 264 8 94 18 242 22 330 3 88 15 221 26 295 14 102 20 215 25 465 5 337\n7 357 70 805 8 58 19 137 24 175 10 74 36 324 44 435 5 62 -8 113 -21 83 -6\n-17 -30 -16 -36 1 -8 20 2 26 33 19 34 -6 36 0 46 125 5 73 4 92 -7 92 -8 0\n-5 6 6 14 16 12 20 29 23 96 l4 82 -31 -16 c-41 -22 -39 -5 4 35 23 22 35 42\n35 61 0 15 4 29 8 32 15 9 50 -31 57 -66 11 -50 54 -138 70 -144 17 -7 45 -60\n45 -85 0 -17 63 -143 223 -449 189 -361 240 -454 259 -471 10 -9 18 -25 18\n-36 0 -12 7 -26 15 -33 8 -7 20 -30 25 -51 6 -22 35 -74 63 -117 29 -42 77\n-126 106 -187 81 -168 101 -207 191 -380 46 -88 112 -216 147 -285 77 -152\n102 -196 162 -280 25 -36 101 -175 168 -310 125 -250 227 -446 244 -466 5 -6\n20 -9 34 -6 14 2 32 -1 40 -8 13 -11 12 -16 -5 -40 -11 -16 -16 -31 -11 -34 5\n-3 11 1 15 9 7 20 36 19 36 0 0 -9 -7 -18 -15 -21 -23 -9 -18 -36 13 -69 79\n-85 148 -106 196 -59 14 15 29 38 32 51 10 38 -4 101 -27 124 -14 14 -18 24\n-11 31 12 12 32 2 32 -15 0 -17 39 -49 50 -42 4 3 21 38 35 78 33 87 52 134\n68 166 9 19 9 25 -1 28 -8 3 -1 18 21 43 18 21 38 55 46 75 7 21 37 88 66 149\n30 61 72 156 95 211 23 55 52 123 65 150 12 28 34 77 49 110 14 33 33 71 41\n85 9 14 29 54 46 89 17 36 49 101 70 144 21 44 39 85 39 92 0 6 -11 18 -25 25\n-31 17 -23 30 19 30 19 0 38 6 43 13 6 6 63 111 128 232 65 121 135 249 155\n285 150 259 352 704 351 773 -1 85 -15 113 -45 87 -10 -7 -16 -8 -21 0 -3 5\n-9 10 -13 10 -11 0 -54 -78 -162 -290 -29 -58 -77 -145 -105 -195 -65 -111\n-158 -292 -210 -405 -21 -47 -72 -155 -113 -240 -41 -85 -91 -191 -112 -235\n-42 -91 -101 -216 -136 -290 -13 -28 -24 -58 -24 -67 0 -23 -56 -132 -76 -149\n-14 -12 -283 -541 -339 -667 -18 -41 -18 -45 -1 -72 16 -28 16 -30 -3 -49 -12\n-12 -27 -18 -36 -15 -11 4 -15 0 -15 -17 -1 -16 -16 -37 -46 -63 -25 -21 -47\n-37 -49 -35 -11 11 -87 153 -156 289 -43 85 -100 193 -128 240 -27 47 -77 133\n-112 193 -59 102 -79 125 -79 92 0 -8 -9 -15 -20 -15 -25 0 -27 37 -3 55 16\n12 15 17 -12 66 -16 29 -41 78 -56 109 -22 42 -35 56 -55 60 -26 5 -27 6 -10\n23 13 13 15 21 8 30 -6 7 -77 143 -158 302 -80 160 -150 295 -154 300 -13 17\n-215 421 -320 639 -55 114 -113 228 -130 253 -16 24 -30 47 -30 51 0 5 -19 39\n-43 77 -23 39 -74 125 -111 192 -43 75 -78 125 -93 132 -14 6 -20 16 -17 25 7\n17 -155 348 -166 341 -4 -3 -10 17 -14 43 -8 58 -62 142 -114 177 -40 26 -118\n42 -139 27z m214 -238 c3 -9 0 -20 -8 -25 -21 -13 -29 -11 -29 9 0 33 26 44\n37 16z m-112 -104 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8\n-4 11 -10z m210 -90 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0\n8 -4 11 -10z m-275 -138 c0 -16 7 -37 15 -48 23 -31 17 -36 -15 -12 -29 21\n-41 64 -23 81 14 14 23 6 23 -21z m18 -266 c-7 -8 -15 -12 -17 -11 -5 6 10 25\n20 25 5 0 4 -6 -3 -14z m3537 -144 c-9 -9 -35 8 -35 24 0 16 2 16 20 -1 11\n-10 18 -20 15 -23z m-2121 -1728 c3 -7 -3 -18 -14 -24 -18 -10 -20 -7 -20 19\n0 22 4 29 14 25 8 -3 17 -12 20 -20z m846 -804 c0 -5 -4 -10 -10 -10 -5 0 -10\n5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-337 -6 c9 -10 -4 -34 -19 -34 -8\n0 -14 9 -14 20 0 19 19 27 33 14z m277 -109 c0 -8 -4 -15 -10 -15 -5 0 -10 7\n-10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m-240 -59 c0 -3 -4 -8 -10 -11 -5 -3\n-10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m90 -216 c0 -5 -5 -10 -11 -10\n-5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m80 5 c0 -3 -9 -14 -20 -25\n-11 -11 -20 -18 -20 -16 0 2 -3 11 -6 19 -3 10 2 17 13 20 27 7 33 7 33 2z" }),
        React__default['default'].createElement("path", { d: "M6821 9034 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M8477 9044 c-10 -11 -8 -44 2 -44 6 0 13 4 16 10 8 12 -9 43 -18 34z" }),
        React__default['default'].createElement("path", { d: "M5860 8990 c0 -15 5 -20 18 -18 9 2 17 10 17 18 0 8 -8 16 -17 18\n-13 2 -18 -3 -18 -18z" }),
        React__default['default'].createElement("path", { d: "M6095 8989 c-4 -6 -5 -12 -2 -15 7 -7 37 7 37 17 0 13 -27 11 -35 -2z" }),
        React__default['default'].createElement("path", { d: "M8330 8946 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3\n-10 -1 -10 -9z" }),
        React__default['default'].createElement("path", { d: "M8425 8900 c9 -18 23 -30 35 -30 27 0 25 6 -7 35 -38 33 -47 31 -28\n-5z" }),
        React__default['default'].createElement("path", { d: "M5190 8910 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\n-4 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M6606 8911 c-3 -5 1 -11 9 -15 15 -6 29 7 18 18 -9 9 -21 8 -27 -3z" }),
        React__default['default'].createElement("path", { d: "M8623 8881 c-16 -25 -17 -51 -3 -51 14 0 22 23 18 50 -3 21 -3 21\n-15 1z" }),
        React__default['default'].createElement("path", { d: "M8505 8870 c-7 -12 30 -55 79 -91 21 -16 34 -29 28 -29 -17 0 -15\n-21 8 -65 21 -42 19 -60 -4 -29 -12 15 -18 17 -33 8 -23 -14 -61 -1 -69 23\n-23 68 -54 108 -54 68 0 -18 -16 -20 -26 -4 -4 7 -8 30 -9 51 -3 41 -25 80\n-25 43 0 -10 -7 -27 -16 -37 -15 -16 -15 -18 -1 -24 21 -8 10 -34 -13 -34 -11\n0 -22 -5 -25 -11 -9 -14 22 -47 48 -51 28 -4 36 -38 9 -38 -11 0 -25 6 -31 14\n-7 8 -23 17 -36 20 -14 4 -25 11 -25 17 0 8 -4 8 -14 0 -11 -9 -18 -8 -30 4\n-12 12 -16 13 -16 3 0 -7 13 -22 29 -32 32 -22 57 -82 37 -89 -13 -5 -48 11\n-58 27 -4 6 -11 7 -15 2 -4 -4 2 -15 15 -23 23 -16 29 -47 11 -59 -7 -4 -10\n-25 -7 -55 4 -42 2 -48 -16 -53 -33 -9 -39 -7 -33 9 7 18 -5 26 -22 16 -10 -7\n-10 -14 3 -39 20 -38 32 -112 18 -112 -5 0 -12 -9 -15 -20 -3 -10 -2 -19 2\n-18 27 3 32 -4 25 -37 -5 -27 -3 -36 11 -41 11 -5 15 -16 13 -38 -3 -26 1 -32\n21 -34 13 -2 31 -10 38 -18 8 -8 25 -14 38 -14 24 0 42 -30 30 -50 -4 -6 -3\n-25 0 -42 7 -30 8 -31 21 -14 12 18 15 18 38 2 27 -17 106 -143 106 -168 0\n-23 -51 -20 -77 5 -13 11 -26 17 -30 13 -11 -10 49 -57 64 -51 7 2 20 -3 28\n-12 12 -12 19 -13 28 -4 16 16 27 13 27 -8 0 -12 11 -23 28 -29 15 -6 42 -24\n61 -42 26 -24 36 -28 43 -18 6 10 13 7 29 -15 l21 -28 24 27 c20 21 27 24 39\n14 8 -7 15 -23 15 -36 0 -29 20 -42 32 -20 10 18 52 13 79 -11 10 -9 26 -12\n42 -8 14 4 28 2 31 -4 11 -17 26 -13 26 8 0 10 7 22 16 25 16 6 16 29 -1 69\n-5 13 -2 17 13 17 15 0 19 -5 15 -20 -4 -14 0 -20 12 -20 13 0 16 6 13 24 -4\n19 1 26 29 37 18 7 33 19 33 26 0 7 -6 10 -15 7 -22 -9 -32 26 -12 38 10 5 17\n21 17 37 0 35 16 51 50 51 20 0 9 19 -12 22 -19 2 -23 9 -23 36 0 18 -6 37\n-14 41 -7 5 -11 13 -7 19 7 12 -35 79 -64 102 -21 17 -39 90 -21 90 6 0 11 -4\n11 -10 0 -5 5 -10 11 -10 6 0 8 7 5 16 -4 11 1 18 14 21 24 6 24 12 5 37 -19\n26 -19 42 0 26 8 -7 15 -19 15 -27 0 -7 6 -16 14 -19 8 -3 17 -20 20 -38 4\n-18 15 -41 26 -51 19 -17 20 -17 20 2 0 10 -17 48 -39 84 -21 35 -42 79 -46\n97 -5 25 -12 32 -31 32 -14 0 -30 10 -39 24 -9 13 -25 26 -35 29 -20 5 -28 27\n-10 27 18 0 10 18 -11 23 -11 3 -23 15 -26 26 -3 12 -11 21 -19 21 -7 0 -22\n17 -33 38 -23 44 -78 99 -88 88 -5 -4 0 -13 10 -20 9 -7 17 -19 17 -27 0 -9\n-3 -10 -8 -3 -4 6 -17 16 -30 23 -28 15 -52 70 -41 93 13 25 11 58 -5 74 -20\n20 -23 18 -29 -16 -4 -16 -10 -30 -15 -30 -11 0 -72 60 -72 71 0 5 -20 9 -45\n9 -41 0 -48 3 -73 40 -28 41 -37 47 -47 30z m169 -155 c4 -10 -1 -15 -14 -15\n-20 0 -26 11 -13 23 10 11 20 8 27 -8z m51 -35 c3 -5 11 -7 18 -4 9 3 13 -6\n13 -31 0 -23 -5 -35 -14 -35 -18 0 -51 40 -52 63 0 18 25 24 35 7z m48 -985\nc7 -16 -8 -29 -23 -20 -15 9 -12 35 4 35 8 0 16 -7 19 -15z" }),
        React__default['default'].createElement("path", { d: "M8260 8840 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0\n-16 -4 -16 -10z" }),
        React__default['default'].createElement("path", { d: "M8707 8809 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 -14 6 -15 5 -6 -5z" }),
        React__default['default'].createElement("path", { d: "M5347 8793 c-15 -14 -6 -31 13 -26 11 3 20 12 20 19 0 14 -22 19 -33\n7z" }),
        React__default['default'].createElement("path", { d: "M8168 8789 c-2 -8 1 -30 8 -49 10 -31 12 -32 18 -12 8 24 -18 84 -26\n61z" }),
        React__default['default'].createElement("path", { d: "M4206 8763 c-3 -10 -15 -33 -26 -52 -29 -47 -16 -52 24 -8 19 20 39\n37 45 37 6 0 11 9 11 20 0 26 -45 28 -54 3z" }),
        React__default['default'].createElement("path", { d: "M7950 8760 c0 -12 11 -32 25 -46 21 -21 31 -24 58 -19 44 10 49 14\n42 34 -4 9 -8 23 -9 30 -2 8 -9 17 -16 19 -9 3 -11 -1 -6 -13 5 -15 2 -17 -26\n-11 -18 4 -34 11 -36 16 -7 19 -32 10 -32 -10z" }),
        React__default['default'].createElement("path", { d: "M5206 8755 c-17 -13 -17 -15 -3 -21 22 -8 50 3 45 18 -6 18 -21 19\n-42 3z" }),
        React__default['default'].createElement("path", { d: "M5156 8735 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0\n-7 -7 -4 -15z" }),
        React__default['default'].createElement("path", { d: "M8841 8734 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M4056 8711 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4\n-12 2 -15 -3z" }),
        React__default['default'].createElement("path", { d: "M4710 8700 c-8 -5 -11 -12 -7 -16 4 -4 13 -2 19 4 15 15 7 24 -12 12z" }),
        React__default['default'].createElement("path", { d: "M5162 8683 c2 -18 10 -29 22 -31 13 -3 16 0 10 10 -9 13 -10 18 -13\n38 0 6 -6 10 -12 10 -6 0 -9 -12 -7 -27z" }),
        React__default['default'].createElement("path", { d: "M4220 8680 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0\n-15 -4 -15 -10z" }),
        React__default['default'].createElement("path", { d: "M8210 8659 c0 -11 5 -17 10 -14 6 3 10 13 10 21 0 8 -4 14 -10 14 -5\n0 -10 -9 -10 -21z" }),
        React__default['default'].createElement("path", { d: "M8890 8665 c0 -10 10 -15 32 -15 30 0 31 1 12 15 -25 19 -44 19 -44\n0z" }),
        React__default['default'].createElement("path", { d: "M4065 8651 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z" }),
        React__default['default'].createElement("path", { d: "M4107 8632 c-25 -28 -21 -55 16 -89 38 -37 50 -52 62 -78 8 -19 9\n-19 12 2 3 17 14 24 45 30 37 7 41 11 43 41 2 21 -1 32 -9 29 -6 -2 -11 -11\n-11 -20 0 -16 -32 -46 -50 -46 -5 0 -19 6 -29 14 -16 12 -17 17 -6 30 10 12\n10 18 0 30 -17 21 -30 19 -30 -5 0 -11 -7 -20 -15 -20 -9 0 -12 6 -8 16 3 9 0\n20 -8 25 -12 7 -12 12 -1 30 17 27 10 34 -11 11z" }),
        React__default['default'].createElement("path", { d: "M4845 8630 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0\n-13 -4 -16 -10z" }),
        React__default['default'].createElement("path", { d: "M5252 8628 c3 -7 13 -15 22 -16 12 -3 17 1 14 10 -3 7 -13 15 -22 16\n-12 3 -17 -1 -14 -10z" }),
        React__default['default'].createElement("path", { d: "M4335 8620 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\n-8 -4 -11 -10z" }),
        React__default['default'].createElement("path", { d: "M8920 8600 c10 -18 40 -29 40 -14 0 10 -28 34 -40 34 -8 0 -8 -6 0\n-20z" }),
        React__default['default'].createElement("path", { d: "M5315 8559 c-9 -39 4 -53 37 -40 38 14 43 29 14 43 -14 6 -26 15 -26\n20 0 22 -19 4 -25 -23z" }),
        React__default['default'].createElement("path", { d: "M4360 8555 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0\n-10 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M8046 8562 c-4 -6 -2 -20 3 -30 11 -21 10 -92 -1 -92 -20 0 -5 -32\n18 -40 18 -7 24 -15 20 -26 -7 -17 33 -76 46 -68 14 9 9 34 -12 51 -11 10 -20\n27 -20 38 0 11 -5 27 -10 35 -6 10 -4 20 6 31 13 14 12 19 -6 41 -11 15 -24\n36 -28 49 -6 14 -11 18 -16 11z" }),
        React__default['default'].createElement("path", { d: "M7990 8546 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3\n-10 -1 -10 -9z" }),
        React__default['default'].createElement("path", { d: "M4608 8543 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" }),
        React__default['default'].createElement("path", { d: "M4406 8524 c-10 -25 -7 -34 9 -28 8 4 15 15 15 25 0 23 -16 25 -24 3z" }),
        React__default['default'].createElement("path", { d: "M4535 8529 c-10 -15 1 -23 20 -15 9 3 13 10 10 16 -8 13 -22 13 -30\n-1z" }),
        React__default['default'].createElement("path", { d: "M4497 8483 c-27 -14 -27 -15 -10 -38 21 -27 37 -18 48 28 8 30 3 32\n-38 10z" }),
        React__default['default'].createElement("path", { d: "M5080 8476 c0 -26 -15 -42 -45 -47 -13 -3 -22 -16 -26 -39 -7 -30 -4\n-38 18 -57 30 -26 43 -27 98 -8 22 8 48 15 58 15 12 0 17 8 17 31 0 31 -1 31\n-39 25 -34 -5 -39 -3 -44 15 -6 23 -27 17 -27 -7 0 -8 -7 -14 -15 -14 -22 0\n-18 37 5 43 15 4 20 14 20 36 0 17 -4 31 -10 31 -5 0 -10 -11 -10 -24z m-30\n-96 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z" }),
        React__default['default'].createElement("path", { d: "M9200 8495 c0 -11 24 -55 30 -55 3 0 15 -8 26 -18 35 -33 74 -55 74\n-42 0 21 -21 51 -31 44 -6 -3 -26 12 -45 35 -31 36 -54 51 -54 36z" }),
        React__default['default'].createElement("path", { d: "M4866 8472 c-2 -4 2 -15 9 -25 11 -16 16 -16 34 -5 25 15 26 24 5 32\n-21 8 -42 8 -48 -2z" }),
        React__default['default'].createElement("path", { d: "M5440 8464 c0 -8 5 -12 10 -9 6 4 8 11 5 16 -9 14 -15 11 -15 -7z" }),
        React__default['default'].createElement("path", { d: "M6390 8470 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0\n-16 -4 -16 -10z" }),
        React__default['default'].createElement("path", { d: "M8135 8470 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\n-7 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M4765 8438 c4 -23 2 -28 -14 -28 -11 0 -24 7 -29 16 -11 19 -27 12\n-34 -13 -4 -13 7 -24 39 -41 43 -22 43 -22 60 -2 10 11 25 20 35 20 17 0 16 2\n-2 20 -11 11 -23 20 -26 20 -4 0 -13 8 -21 18 -13 15 -14 15 -8 -10z" }),
        React__default['default'].createElement("path", { d: "M5534 8435 c-4 -9 -4 -18 -1 -21 10 -10 48 7 44 19 -6 19 -36 20 -43\n2z" }),
        React__default['default'].createElement("path", { d: "M7975 8440 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0\n-12 -4 -9 -10z" }),
        React__default['default'].createElement("path", { d: "M4350 8415 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0\n-10 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M6433 8423 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" }),
        React__default['default'].createElement("path", { d: "M4600 8380 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0\n-15 -4 -15 -10z" }),
        React__default['default'].createElement("path", { d: "M7970 8370 c0 -13 5 -20 13 -17 6 2 12 10 12 17 0 7 -6 15 -12 18 -8\n2 -13 -5 -13 -18z" }),
        React__default['default'].createElement("path", { d: "M5417 8373 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3\n-9 2 -12 -2z" }),
        React__default['default'].createElement("path", { d: "M6470 8370 c0 -5 5 -10 10 -10 6 0 10 -12 10 -27 1 -24 2 -25 11 -11\n7 12 6 24 -1 38 -11 21 -30 27 -30 10z" }),
        React__default['default'].createElement("path", { d: "M4470 8350 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n-10 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M9350 8342 c0 -11 28 -36 58 -52 21 -10 23 -9 20 6 -4 24 -78 67 -78\n46z" }),
        React__default['default'].createElement("path", { d: "M5420 8309 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M4811 8214 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6826 8193 c-3 -4 -6 -13 -6 -22 0 -11 3 -10 14 5 14 18 15 18 21 2\n9 -23 38 -24 33 -1 -3 17 -49 29 -62 16z" }),
        React__default['default'].createElement("path", { d: "M4899 8156 c0 0 -2 -11 -5 -23 -3 -16 1 -23 11 -23 8 0 15 5 15 11 0\n7 11 9 30 6 25 -5 30 -3 30 12 0 15 -8 18 -40 18 -22 0 -40 0 -41 -1z" }),
        React__default['default'].createElement("path", { d: "M9141 8124 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M9255 8131 c-8 -13 41 -97 61 -105 29 -11 27 25 -3 67 -33 44 -47 54\n-58 38z" }),
        React__default['default'].createElement("path", { d: "M4810 8089 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M6860 8090 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0\n-15 -4 -15 -10z" }),
        React__default['default'].createElement("path", { d: "M9221 8084 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M4978 8083 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M4925 8000 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\n-8 -4 -11 -10z" }),
        React__default['default'].createElement("path", { d: "M7488 8004 c-3 -5 -8 -21 -12 -36 -7 -32 -39 -38 -54 -12 -17 31 -26\n-6 -23 -100 1 -57 7 -99 16 -112 8 -12 11 -25 8 -28 -9 -8 -12 -48 -12 -126 0\n-58 2 -67 26 -87 26 -21 25 -38 0 -38 -17 0 -10 -153 14 -304 11 -69 22 -127\n24 -130 1 -3 6 -44 9 -91 4 -47 9 -101 12 -120 2 -19 9 -98 14 -175 5 -77 17\n-201 25 -275 9 -74 20 -196 25 -270 5 -74 17 -178 25 -230 9 -52 19 -121 22\n-152 3 -32 12 -63 19 -69 8 -6 14 -8 14 -4 0 4 7 2 15 -5 8 -7 15 -25 15 -40\n0 -32 40 -86 71 -95 11 -4 24 -16 29 -28 l9 -22 0 23 c1 12 -5 38 -13 57 -8\n18 -12 35 -10 38 2 2 -5 134 -16 292 -11 158 -20 318 -20 354 0 36 -10 113\n-22 171 -16 78 -22 141 -22 245 -1 77 -4 145 -8 151 -8 13 -20 84 -49 299 -21\n164 -26 196 -54 395 -8 63 -20 160 -25 215 -26 262 -38 334 -52 309z" }),
        React__default['default'].createElement("path", { d: "M9420 7978 c0 -6 27 -37 60 -67 32 -31 64 -68 69 -83 14 -38 32 -35\n29 5 -2 38 -14 58 -32 51 -7 -3 -25 13 -39 35 -28 42 -87 82 -87 59z" }),
        React__default['default'].createElement("path", { d: "M4880 7965 c0 -9 5 -15 11 -13 6 2 11 8 11 13 0 5 -5 11 -11 13 -6 2\n-11 -4 -11 -13z" }),
        React__default['default'].createElement("path", { d: "M9465 7871 c-5 -17 -10 -19 -25 -11 -12 7 -21 7 -25 0 -10 -17 19\n-134 39 -154 15 -15 18 -28 13 -74 -5 -49 -3 -60 22 -96 16 -23 43 -65 61 -93\n19 -29 38 -53 44 -53 6 0 21 -3 34 -6 37 -10 26 20 -28 76 -42 44 -50 57 -49\n88 1 21 3 30 6 20 4 -17 30 -31 43 -23 4 2 10 -9 14 -26 4 -22 11 -29 24 -27\n11 2 26 -3 35 -11 31 -25 20 26 -13 61 -16 17 -30 34 -30 38 0 15 14 19 31 9\n16 -8 19 -6 19 15 0 14 -4 28 -10 31 -5 3 -10 21 -10 38 0 25 -9 39 -38 63\n-21 17 -52 35 -70 39 -35 7 -62 38 -62 70 0 11 -4 26 -9 34 -7 11 -10 9 -16\n-8z m15 -116 c0 -9 -6 -12 -15 -9 -8 4 -12 10 -9 15 8 14 24 10 24 -6z m65\n-23 c29 -20 87 -103 81 -117 -10 -26 -26 -16 -26 15 0 19 -5 30 -14 30 -12 0\n-66 60 -66 74 0 8 13 7 25 -2z" }),
        React__default['default'].createElement("path", { d: "M9217 7793 c-12 -11 -8 -22 20 -48 29 -26 68 -34 61 -12 -3 6 -14 16\n-26 22 -12 5 -22 18 -22 27 0 18 -20 24 -33 11z" }),
        React__default['default'].createElement("path", { d: "M9620 7781 c0 -15 6 -21 21 -21 14 0 19 5 17 17 -5 26 -38 29 -38 4z" }),
        React__default['default'].createElement("path", { d: "M9385 7781 c-3 -5 -1 -12 5 -16 5 -3 10 1 10 9 0 18 -6 21 -15 7z" }),
        React__default['default'].createElement("path", { d: "M9288 7652 c-21 -4 -23 -13 -7 -29 9 -9 9 -20 0 -44 -15 -43 1 -61\n27 -31 24 27 38 28 54 2 14 -22 43 -27 50 -7 7 18 -19 75 -40 86 -11 6 -24 6\n-32 1 -10 -6 -18 -4 -25 8 -5 10 -18 16 -27 14z" }),
        React__default['default'].createElement("path", { d: "M8251 7614 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M9116 7611 c-3 -5 5 -11 19 -13 28 -6 34 6 9 16 -20 8 -22 8 -28 -3z" }),
        React__default['default'].createElement("path", { d: "M8049 7503 c-12 -31 5 -58 21 -33 8 12 10 11 10 -7 0 -12 3 -28 6\n-37 5 -12 0 -16 -20 -16 -30 0 -33 -12 -9 -36 13 -13 14 -19 5 -22 -20 -6 -11\n-146 23 -367 8 -49 19 -142 24 -205 6 -63 13 -135 15 -160 3 -25 10 -99 16\n-165 20 -216 39 -273 70 -215 13 24 43 26 61 4 10 -12 10 -22 2 -45 -9 -23 -9\n-29 2 -29 8 0 18 -8 24 -17 8 -16 14 -13 45 22 19 22 35 46 36 53 0 18 16 15\n31 -8 11 -16 21 -19 45 -14 30 6 32 8 27 45 -6 39 11 56 23 24 4 -10 13 -13\n26 -9 22 7 48 -11 48 -34 0 -14 27 -41 43 -42 13 0 7 37 -8 50 -22 18 -18 32\n7 28 28 -4 36 24 17 58 -15 29 -8 38 26 30 17 -4 25 -13 25 -28 0 -12 6 -29\n14 -37 7 -9 16 -48 18 -88 4 -56 2 -75 -11 -87 -14 -15 -14 -19 3 -47 13 -21\n16 -40 12 -64 -4 -19 -2 -36 4 -40 5 -3 10 -15 10 -26 0 -10 7 -19 15 -19 8 0\n15 -7 15 -15 0 -8 -4 -15 -10 -15 -5 0 -10 -9 -10 -20 0 -11 -5 -29 -12 -40\n-15 -24 -4 -37 17 -20 12 10 17 8 27 -15 11 -25 13 -25 25 -9 17 23 16 34 -1\n34 -18 0 -39 27 -31 40 10 16 44 -7 61 -43 17 -35 53 -57 93 -57 13 0 39 -5\n56 -11 l31 -12 -23 -25 c-18 -20 -26 -23 -35 -14 -17 17 -23 15 -36 -13 -16\n-36 -15 -90 3 -105 26 -21 37 -1 15 30 -17 24 -18 29 -5 40 15 12 16 11 19\n-12 0 -7 12 -15 25 -16 21 -3 23 -1 17 21 -5 23 -2 25 41 31 29 4 49 2 53 -4\n8 -12 18 -1 40 43 14 28 25 34 35 17 3 -5 16 -10 29 -10 28 0 52 -25 67 -69\nl12 -34 17 23 c10 13 22 20 28 16 11 -7 5 -46 -8 -46 -4 0 -27 -16 -51 -35\n-25 -20 -55 -35 -70 -35 -30 0 -77 33 -89 64 -7 17 -9 13 -9 -20 -1 -32 6 -49\n25 -72 24 -27 30 -29 57 -20 25 9 32 8 46 -9 9 -11 28 -23 43 -27 20 -5 30\n-15 36 -38 11 -44 32 -48 32 -6 0 19 -5 39 -10 44 -6 6 -7 25 -4 42 5 25 12\n32 29 32 13 0 25 7 29 15 11 29 33 16 84 -49 17 -22 25 -27 34 -18 8 8 8 18 1\n34 -13 29 -6 48 15 48 10 0 22 10 27 21 12 26 30 22 31 -6 1 -47 44 -81 44\n-35 0 11 3 20 8 20 4 0 12 12 19 26 9 20 9 26 -3 30 -8 2 -21 6 -30 9 -8 3\n-14 13 -12 22 2 14 11 17 33 14 32 -3 48 -18 40 -38 -2 -6 2 -29 10 -50 8 -21\n17 -55 20 -75 4 -24 11 -38 20 -38 18 0 19 -14 3 -41 -12 -18 -9 -24 20 -48\n17 -15 32 -33 32 -39 0 -21 -16 -13 -28 13 -6 14 -20 25 -30 25 -39 0 -50 -80\n-17 -120 25 -30 27 -58 6 -72 -12 -7 -21 -18 -21 -25 0 -7 -4 -13 -8 -13 -10\n0 -32 60 -32 89 0 41 -17 12 -29 -48 -7 -33 -16 -63 -21 -66 -6 -4 -10 -15\n-10 -27 0 -11 -13 -32 -29 -47 -27 -26 -28 -27 -8 -27 18 1 22 -4 20 -27 -2\n-24 1 -27 15 -22 9 4 23 8 29 9 18 2 63 -98 52 -115 -5 -8 -8 -27 -8 -44 0\n-17 3 -23 6 -15 4 8 13 20 22 27 9 6 13 15 8 19 -4 4 12 19 36 33 87 53 86 51\n79 111 -6 47 -4 62 16 100 19 35 22 48 13 62 -6 10 -11 26 -12 35 0 11 -3 13\n-6 6 -9 -23 -33 -14 -33 12 0 17 6 25 17 25 15 0 15 1 -1 19 -19 21 -14 44 17\n78 17 19 19 31 14 78 -3 30 -1 57 4 60 5 4 9 -18 9 -50 0 -31 7 -69 16 -86 8\n-16 12 -39 9 -50 -4 -11 0 -26 11 -36 15 -16 17 -16 31 3 7 10 13 28 11 39 -1\n11 1 26 5 33 7 10 -8 53 -44 124 -12 25 -11 39 5 57 19 23 10 141 -11 141 -11\n0 -13 4 -5 13 14 18 24 81 26 172 1 75 0 80 -20 80 -25 0 -54 22 -54 41 0 8\n-7 14 -15 14 -10 0 -15 -10 -15 -32 l0 -33 -19 28 c-16 24 -19 26 -31 12 -18\n-22 -30 -18 -30 10 0 18 5 25 20 25 14 0 20 7 20 21 0 16 -4 19 -21 14 -15 -5\n-19 -4 -15 4 4 6 16 11 27 11 10 0 19 6 19 14 0 8 -8 13 -17 12 -28 -2 -34 70\n-10 112 14 24 20 51 19 93 -1 33 5 71 14 86 7 16 14 38 14 51 0 15 8 26 25 32\n14 5 25 16 25 25 0 8 7 15 15 15 18 0 19 14 3 43 -6 12 -13 49 -14 82 -4 90\n-8 122 -16 131 -5 4 -8 2 -8 -4 0 -7 -7 -12 -16 -12 -13 0 -15 8 -9 51 5 39 4\n50 -5 44 -6 -4 -9 -13 -6 -20 6 -17 -38 -39 -61 -30 -16 6 -16 8 6 16 21 8 23\n14 17 48 -5 34 -3 41 15 46 12 4 26 2 32 -4 6 -6 15 -11 19 -11 14 0 8 64 -7\n84 -13 17 -15 18 -15 3 0 -24 -5 -22 -43 19 -31 34 -35 35 -56 23 -20 -12 -24\n-12 -37 5 -18 25 -3 42 24 27 27 -14 32 -14 32 4 0 25 17 17 39 -20 23 -39 41\n-46 41 -15 0 14 7 20 24 20 20 0 24 6 30 42 4 24 3 45 -4 52 -5 5 -10 20 -10\n33 0 14 -6 23 -15 23 -16 0 -18 -6 -15 -64 2 -34 0 -38 -13 -28 -8 7 -20 34\n-26 60 -14 55 -41 112 -52 112 -5 0 -20 24 -33 54 -15 32 -40 66 -61 81 -42\n33 -54 29 -25 -8 24 -31 27 -77 4 -77 -13 0 -12 -4 5 -25 11 -14 22 -40 26\n-58 3 -18 11 -44 17 -60 9 -22 7 -31 -7 -47 -21 -24 -31 -19 -38 17 -7 43 -30\n96 -50 115 -17 18 -20 18 -53 2 -42 -20 -43 -50 -2 -47 19 1 28 -4 32 -20 11\n-41 7 -48 -19 -41 -15 4 -32 1 -41 -7 -14 -11 -18 -11 -29 4 -13 19 -35 23\n-35 7 0 -6 -11 -15 -25 -20 -19 -7 -25 -17 -25 -39 0 -16 -4 -33 -10 -36 -5\n-3 -10 -2 -10 4 0 5 -15 11 -32 13 -28 2 -35 9 -44 38 -6 19 -21 41 -34 49\n-21 14 -22 14 -18 -25 2 -31 -1 -39 -15 -42 -9 -2 -20 3 -23 12 -3 8 -18 17\n-33 21 -15 3 -42 19 -60 35 -24 23 -42 30 -72 30 -48 0 -76 13 -106 49 l-22\n26 -1 -23 c0 -39 -34 -23 -40 18 l-5 35 -80 0 c-44 0 -91 -6 -105 -12 -34 -17\n-40 -16 -40 5 0 10 -14 37 -31 60 -17 23 -28 49 -25 57 3 9 0 15 -8 15 -8 0\n-16 6 -19 13 -2 6 -7 -3 -11 -21 -8 -35 -22 -34 -36 4 -5 13 -14 24 -20 24 -6\n0 -8 -4 -5 -10 3 -5 1 -19 -5 -31 -15 -27 -58 -20 -94 16 -14 14 -30 25 -36\n25 -5 0 -10 7 -10 16 0 8 -4 12 -10 9 -5 -3 -10 -15 -10 -26 0 -22 -35 -27\n-44 -6 -4 6 -4 2 -2 -10 3 -15 -4 -27 -22 -39 -23 -15 -25 -15 -19 0 5 12 -1\n19 -17 26 -19 7 -25 21 -35 72 -7 35 -18 69 -23 76 -18 21 -48 14 -59 -15z\nm54 -148 c4 -8 2 -17 -3 -20 -6 -4 -10 -4 -10 -1 0 2 -3 11 -6 20 -3 9 -2 16\n4 16 5 0 12 -7 15 -15z m397 -74 c0 -20 6 -30 20 -34 11 -3 20 -12 20 -21 0\n-10 -6 -13 -15 -10 -8 4 -15 10 -15 15 0 5 -9 9 -20 9 -21 0 -27 30 -14 64 9\n24 24 9 24 -23z m-100 -132 c0 -4 16 -17 35 -29 29 -18 35 -28 35 -56 0 -31\n-2 -33 -22 -25 -32 12 -46 4 -41 -23 3 -13 0 -34 -7 -46 -9 -17 -14 -19 -25\n-10 -10 8 -12 18 -6 29 18 34 11 133 -10 147 -13 8 -11 42 4 47 11 4 37 -19\n37 -34z m1150 -78 c0 -11 -4 -23 -10 -26 -5 -3 -10 -2 -10 4 0 5 -3 16 -6 25\n-4 11 -1 16 10 16 9 0 16 -8 16 -19z m-1414 -59 c-10 -10 -29 15 -21 28 6 9\n10 8 17 -4 6 -10 7 -20 4 -24z m669 -12 c14 -27 25 -55 25 -63 0 -25 -25 -66\n-47 -78 -19 -10 -27 -7 -60 18 -21 17 -47 32 -58 34 -14 3 -20 12 -20 29 0 34\n24 36 67 6 22 -15 45 -22 57 -19 20 5 20 6 -5 54 -15 27 -28 49 -31 49 -2 0\n-1 -5 3 -11 3 -6 0 -15 -7 -20 -22 -14 -49 -11 -49 5 0 25 30 46 66 46 30 0\n36 -5 59 -50z m896 -120 c11 -50 -11 -59 -34 -14 -19 37 -15 57 11 52 9 -2 19\n-18 23 -38z m-101 -11 c6 -11 10 -25 8 -31 -5 -14 -38 19 -38 38 0 21 18 17\n30 -7z m-1230 -8 c0 -6 -4 -13 -10 -16 -5 -3 -10 1 -10 9 0 9 5 16 10 16 6 0\n10 -4 10 -9z m240 -12 c0 -11 -4 -17 -10 -14 -5 3 -10 13 -10 21 0 8 5 14 10\n14 6 0 10 -9 10 -21z m27 -181 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12\n1 -19z m98 -19 c13 -20 -5 -81 -26 -86 -10 -3 -19 -9 -19 -14 0 -5 -5 -9 -11\n-9 -16 0 -5 65 16 96 17 26 30 30 40 13z m1055 1 c0 -5 -4 -10 -10 -10 -5 0\n-10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-1040 -161 c0 -5 -4 -9 -10\n-9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10 10 -16z m-96 -15 c11 -29 6\n-44 -14 -44 -11 0 -20 6 -20 14 0 21 11 46 20 46 4 0 11 -7 14 -16z m-79 -94\nc-10 -16 -22 -11 -28 12 -9 32 3 43 20 19 8 -12 11 -26 8 -31z m145 -9 c0 -29\n-2 -32 -15 -21 -15 13 -21 61 -8 73 11 12 23 -15 23 -52z m897 18 c-6 -10 -13\n-15 -15 -9 -6 17 7 42 18 35 6 -4 5 -13 -3 -26z m-517 6 c0 -8 -4 -15 -10 -15\n-5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m-30 -35 c0 -5 -7 -10\n-15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m-215 -322 c17\n-7 38 -21 47 -33 15 -18 17 -18 18 -2 0 21 10 22 35 3 12 -8 16 -19 11 -31 -4\n-11 0 -25 10 -36 15 -16 14 -19 -5 -40 -26 -28 -39 -18 -21 15 11 21 10 27 -4\n42 -16 16 -18 15 -32 -5 -8 -11 -23 -21 -33 -21 -10 0 -29 -10 -43 -23 -26\n-24 -48 -25 -48 -1 0 8 -4 14 -8 14 -4 0 -13 15 -20 33 -10 29 -9 39 7 73 17\n35 18 41 5 55 -12 14 -13 18 -2 21 7 3 22 -8 33 -23 11 -16 34 -34 50 -41z\nm970 -188 c20 0 28 -17 17 -37 -7 -11 -6 -21 3 -30 9 -9 11 -23 5 -49 -18 -81\n-40 -52 -45 62 -2 49 -2 81 1 72 3 -10 12 -18 19 -18z m-713 -42 c-12 -12 -35\n-1 -27 12 3 5 13 6 21 3 10 -4 12 -9 6 -15z m119 -41 c-1 -12 -15 -9 -19 4 -3\n6 1 10 8 8 6 -3 11 -8 11 -12z m209 -68 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16\n0 8 5 12 10 9 6 -3 10 -10 10 -16z m-120 -145 c0 -8 -4 -14 -10 -14 -5 0 -10\n9 -10 21 0 11 5 17 10 14 6 -3 10 -13 10 -21z m488 -422 c2 -7 -3 -12 -12 -12\n-9 0 -16 7 -16 16 0 17 22 14 28 -4z m-119 -106 c-5 -6 -9 10 -8 40 l1 49 8\n-40 c5 -22 4 -44 -1 -49z m-49 54 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6\n5 10 10 10 6 0 10 -4 10 -10z m80 -152 c0 -5 -4 -8 -10 -8 -5 0 -10 10 -10 23\n0 18 2 19 10 7 5 -8 10 -18 10 -22z" }),
        React__default['default'].createElement("path", { d: "M9787 7491 c-3 -12 1 -22 9 -25 9 -3 14 2 14 14 0 26 -17 34 -23 11z" }),
        React__default['default'].createElement("path", { d: "M8130 7485 c0 -8 8 -15 18 -15 9 0 25 -12 34 -27 10 -16 17 -21 17\n-13 0 18 -44 70 -59 70 -5 0 -10 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M9190 7479 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M9666 7452 c-7 -12 17 -66 34 -77 6 -3 10 4 10 18 0 30 -34 75 -44\n59z" }),
        React__default['default'].createElement("path", { d: "M9480 7440 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n-10 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M9815 7425 c-32 -31 -31 -35 5 -70 17 -16 30 -35 30 -43 0 -7 6 -12\n13 -9 12 4 13 29 2 105 -7 48 -16 52 -50 17z" }),
        React__default['default'].createElement("path", { d: "M8215 7420 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\n-7 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M9740 7411 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z" }),
        React__default['default'].createElement("path", { d: "M9526 7402 c-3 -6 -1 -14 5 -17 15 -10 25 3 12 16 -7 7 -13 7 -17 1z" }),
        React__default['default'].createElement("path", { d: "M9673 7335 c-3 -9 2 -24 12 -35 10 -11 28 -42 41 -70 13 -28 30 -50\n39 -50 18 0 20 36 2 47 -7 4 -28 34 -46 66 -18 31 -35 57 -37 57 -3 0 -7 -7\n-11 -15z" }),
        React__default['default'].createElement("path", { d: "M9400 7313 c0 -30 21 -59 33 -46 13 12 7 40 -13 58 -20 18 -20 17\n-20 -12z" }),
        React__default['default'].createElement("path", { d: "M9491 7284 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6857 7148 c-28 -34 -337 -642 -337 -663 0 -7 -6 -18 -14 -24 -17\n-15 -59 -148 -52 -167 3 -7 15 -14 27 -14 22 0 22 0 3 -18 -17 -16 -20 -17\n-30 -4 -15 21 -28 -1 -29 -50 -1 -43 -21 -71 -34 -50 -10 16 -55 -56 -65 -105\n-6 -25 -4 -32 11 -36 15 -3 13 -6 -10 -15 -30 -13 -28 -32 4 -32 10 0 19 -4\n19 -10 0 -5 -9 -10 -20 -10 -23 0 -24 -3 -8 -30 18 -28 -2 -47 -29 -29 -31 19\n-49 5 -78 -56 -20 -40 -25 -63 -20 -86 6 -28 9 -30 38 -24 18 4 39 14 47 24\n12 14 21 16 43 8 15 -5 35 -6 45 -2 14 5 11 9 -15 20 -37 16 -39 21 -18 49 8\n11 12 29 9 43 -5 17 -2 23 9 23 9 0 19 -4 22 -10 16 -26 74 13 75 50 0 9 6 22\n13 29 10 10 9 15 -5 25 -10 7 -18 25 -18 39 0 23 2 24 33 17 17 -4 39 -11 47\n-14 9 -4 25 2 37 14 31 28 40 25 45 -16 3 -26 0 -38 -11 -42 -8 -3 -17 1 -20\n9 -2 8 -9 -6 -16 -31 -10 -40 -9 -48 9 -74 18 -27 20 -27 32 -11 9 11 19 15\n31 11 17 -7 17 -8 0 -17 -12 -7 -15 -17 -11 -33 4 -17 0 -28 -14 -37 -11 -8\n-22 -32 -26 -57 -6 -41 -5 -42 14 -32 11 6 20 15 20 20 0 6 7 10 15 10 8 0 15\n-9 15 -20 0 -11 -4 -20 -10 -20 -5 0 -7 -13 -3 -30 5 -28 4 -30 -25 -30 -30 0\n-51 -27 -38 -49 8 -13 55 -5 75 13 22 20 38 20 57 1 9 -8 29 -15 45 -15 22 0\n32 -7 41 -25 7 -16 18 -24 32 -22 13 1 21 -4 21 -13 0 -24 18 -30 42 -14 22\n14 23 13 23 -11 0 -14 6 -25 13 -25 6 0 22 -3 35 -6 18 -5 22 -2 22 16 0 45\n44 -5 64 -73 3 -10 11 -15 16 -12 8 5 8 11 0 19 -5 7 -13 33 -16 57 -5 34 -2\n48 9 57 13 11 18 8 32 -23 26 -53 35 -52 35 4 0 36 -5 53 -16 59 -12 7 -14 15\n-8 33 11 32 7 162 -11 334 -7 77 -17 187 -20 245 -10 168 -21 237 -81 505 -7\n33 -16 110 -19 170 -4 61 -11 133 -17 160 -14 70 -40 155 -48 155 -3 0 -18\n-15 -33 -32z m33 -212 c0 -2 -3 -12 -6 -20 -5 -13 -9 -14 -20 -5 -16 13 -9 29\n12 29 8 0 14 -2 14 -4z m-469 -837 c10 -33 10 -42 -1 -49 -9 -6 -20 0 -33 17\n-17 21 -18 28 -7 49 19 34 27 30 41 -17z m269 -153 c0 -11 -19 -15 -25 -6 -3\n5 1 10 9 10 9 0 16 -2 16 -4z m-82 -29 c2 -10 -3 -17 -12 -17 -10 0 -16 9 -16\n21 0 24 23 21 28 -4z m272 -71 c0 -17 -24 -38 -33 -29 -15 15 -6 43 13 43 11\n0 20 -6 20 -14z m-197 -39 c9 -23 -8 -40 -22 -23 -13 15 -7 36 9 36 4 0 10 -6\n13 -13z m77 -27 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11\n-4 11 -10z m191 -50 c29 -16 26 -73 -5 -89 -34 -19 -63 -6 -68 30 -8 53 28 82\n73 59z m-216 -11 c10 -14 -24 -49 -41 -42 -8 3 -14 16 -14 29 0 19 5 24 24 24\n14 0 28 -5 31 -11z m5 -69 c0 -5 -9 -14 -20 -20 -15 -8 -20 -8 -20 3 0 8 3 17\n7 20 10 10 33 8 33 -3z m280 -94 c-26 -26 -44 -10 -44 40 0 53 24 62 46 16 18\n-35 18 -37 -2 -56z m-137 24 c6 -24 -1 -25 -24 -4 -21 18 -15 51 6 34 7 -6 15\n-20 18 -30z m49 -42 c-6 -6 -14 -9 -17 -6 -3 3 -3 13 1 22 5 12 10 14 17 7 8\n-8 8 -14 -1 -23z" }),
        React__default['default'].createElement("path", { d: "M9846 7158 c4 -13 11 -34 17 -48 6 -14 11 -38 11 -55 1 -22 6 -30 19\n-29 9 1 17 -3 17 -10 0 -6 7 2 15 18 17 32 13 45 -8 28 -18 -15 -27 -5 -27 27\n0 25 -33 91 -46 91 -3 0 -2 -10 2 -22z" }),
        React__default['default'].createElement("path", { d: "M9850 6972 c0 -23 26 -59 36 -50 8 9 -15 68 -27 68 -5 0 -9 -8 -9\n-18z" }),
        React__default['default'].createElement("path", { d: "M9890 6835 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0\n-10 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M9930 6797 c0 -11 -5 -14 -15 -11 -11 5 -13 2 -9 -10 3 -9 10 -16 14\n-16 11 0 24 40 16 47 -3 4 -6 -1 -6 -10z" }),
        React__default['default'].createElement("path", { d: "M9976 6755 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0\n-7 -7 -4 -15z" }),
        React__default['default'].createElement("path", { d: "M10026 6725 c-9 -23 -8 -25 9 -25 17 0 19 9 6 28 -7 11 -10 10 -15\n-3z" }),
        React__default['default'].createElement("path", { d: "M9914 6698 c3 -18 9 -52 12 -76 l7 -42 13 25 c18 34 1 125 -23 125\n-12 0 -14 -7 -9 -32z" }),
        React__default['default'].createElement("path", { d: "M9985 6710 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0\n-13 -4 -16 -10z" }),
        React__default['default'].createElement("path", { d: "M10035 6659 c-4 -6 -5 -13 -2 -16 7 -7 27 6 27 18 0 12 -17 12 -25\n-2z" }),
        React__default['default'].createElement("path", { d: "M9879 6575 c-5 -53 13 -84 46 -77 19 3 25 10 24 31 0 26 0 26 -11 4\n-15 -31 -26 -29 -34 5 -3 15 -9 38 -14 52 -7 23 -8 21 -11 -15z" }),
        React__default['default'].createElement("path", { d: "M9875 6461 c-7 -12 12 -24 25 -16 11 7 4 25 -10 25 -5 0 -11 -4 -15\n-9z" }),
        React__default['default'].createElement("path", { d: "M8201 6184 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M8546 6181 c-8 -12 14 -71 25 -71 10 0 11 25 3 58 -7 23 -19 29 -28\n13z" }),
        React__default['default'].createElement("path", { d: "M8500 6150 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\n-4 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M8588 6101 c-40 -9 -21 -35 21 -29 21 3 31 0 31 -8 0 -19 20 -28 33\n-15 9 9 4 18 -17 36 -16 14 -32 24 -35 24 -3 -1 -18 -4 -33 -8z" }),
        React__default['default'].createElement("path", { d: "M8595 6030 c-3 -5 1 -10 10 -10 9 0 13 5 10 10 -3 6 -8 10 -10 10 -2\n0 -7 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M8257 5980 c8 -31 23 -34 23 -6 0 16 -6 26 -14 26 -9 0 -12 -7 -9\n-20z" }),
        React__default['default'].createElement("path", { d: "M8448 5993 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M8362 5905 c13 -29 23 -32 32 -9 8 21 -1 34 -24 34 -17 0 -18 -3 -8\n-25z" }),
        React__default['default'].createElement("path", { d: "M8250 5846 c0 -22 6 -36 16 -40 13 -5 15 -2 9 21 -4 16 -8 34 -8 41\n-1 29 -17 9 -17 -22z" }),
        React__default['default'].createElement("path", { d: "M8537 5863 c-12 -11 -8 -23 8 -23 8 0 15 7 15 15 0 16 -12 20 -23 8z" }),
        React__default['default'].createElement("path", { d: "M6457 5793 c7 -57 20 -78 38 -63 35 29 19 110 -21 110 -22 0 -23 -3\n-17 -47z" }),
        React__default['default'].createElement("path", { d: "M8477 5783 c-4 -3 -7 -12 -7 -20 0 -15 26 -18 34 -4 7 11 -18 33 -27\n24z" }),
        React__default['default'].createElement("path", { d: "M9997 5756 c-4 -10 -5 -21 -2 -24 9 -9 17 6 13 25 -3 17 -4 17 -11\n-1z" }),
        React__default['default'].createElement("path", { d: "M6166 5715 c-9 -25 -7 -35 7 -35 6 0 22 -16 35 -35 13 -21 30 -35 43\n-35 11 0 17 5 14 10 -3 6 -14 10 -24 10 -18 0 -36 32 -43 74 -4 25 -24 32 -32\n11z" }),
        React__default['default'].createElement("path", { d: "M6278 5713 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M10060 5680 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5\n0 -10 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M6455 5670 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0\n-13 -4 -16 -10z" }),
        React__default['default'].createElement("path", { d: "M9157 5652 c-10 -10 -17 -29 -17 -42 0 -23 1 -23 17 -8 15 15 18 15\n27 2 15 -19 42 -9 50 18 10 41 -47 63 -77 30z" }),
        React__default['default'].createElement("path", { d: "M6126 5635 c-3 -8 -1 -15 4 -15 6 0 10 7 10 15 0 8 -2 15 -4 15 -2 0\n-6 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M10010 5640 c-6 -4 -12 -31 -13 -61 -1 -30 -6 -59 -10 -66 -4 -6 -2\n-24 4 -40 10 -27 11 -27 21 -8 24 44 52 46 43 4 -10 -44 16 -34 31 11 11 34\n34 53 34 29 0 -10 3 -10 12 -1 8 8 8 15 -2 27 -7 9 -10 28 -7 48 3 19 2 39 -2\n46 -8 13 -93 22 -111 11z" }),
        React__default['default'].createElement("path", { d: "M6727 5564 c-8 -14 8 -37 22 -33 8 3 8 10 -2 23 -8 11 -17 15 -20 10z" }),
        React__default['default'].createElement("path", { d: "M9965 5540 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\n-7 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M6090 5524 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0\n-10 -7 -10 -16z" }),
        React__default['default'].createElement("path", { d: "M9590 5479 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M9168 5452 c-7 -24 1 -42 18 -42 18 0 18 46 0 53 -8 3 -16 -2 -18\n-11z" }),
        React__default['default'].createElement("path", { d: "M6030 5425 c0 -9 -7 -27 -16 -41 -16 -23 -16 -26 2 -39 23 -17 38\n-19 29 -4 -4 6 1 17 11 25 17 13 18 15 2 24 -10 6 -14 18 -11 30 3 11 0 20 -6\n20 -6 0 -11 -7 -11 -15z" }),
        React__default['default'].createElement("path", { d: "M7685 5401 c-3 -6 3 -24 15 -39 19 -23 20 -27 6 -30 -9 -2 -16 -9\n-16 -17 0 -7 -7 -15 -15 -19 -9 -3 -15 -18 -15 -36 0 -27 2 -30 25 -24 19 5\n25 2 25 -10 0 -20 19 -21 27 0 4 12 11 8 34 -18 l28 -33 1 79 c0 95 -15 146\n-45 146 -11 0 -30 3 -41 6 -12 3 -25 1 -29 -5z" }),
        React__default['default'].createElement("path", { d: "M9470 5380 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0\n-15 -4 -15 -10z" }),
        React__default['default'].createElement("path", { d: "M9510 5375 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0\n-10 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M9947 5353 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3\n-9 2 -12 -2z" }),
        React__default['default'].createElement("path", { d: "M6102 5321 c16 -25 31 -27 26 -4 -2 10 -11 19 -21 21 -16 3 -17 1 -5\n-17z" }),
        React__default['default'].createElement("path", { d: "M9157 5301 c-21 -35 -22 -52 -3 -45 12 5 31 62 23 70 -2 2 -11 -10\n-20 -25z" }),
        React__default['default'].createElement("path", { d: "M8729 5313 c-1 -4 0 -18 1 -30 1 -18 -4 -23 -22 -23 -13 -1 -34 -7\n-48 -15 -31 -18 -71 -19 -69 -2 3 26 -1 47 -10 47 -5 0 -11 -10 -13 -22 -2\n-18 -10 -23 -31 -23 -18 0 -36 -9 -49 -25 -15 -17 -22 -21 -26 -12 -3 10 -8 7\n-19 -7 -15 -22 -52 -21 -82 3 -12 9 -13 6 -7 -17 6 -24 4 -28 -11 -25 -10 2\n-17 9 -16 16 4 16 -24 3 -31 -15 -7 -16 10 -43 25 -43 5 0 27 -12 49 -26 41\n-27 66 -28 154 -8 28 7 28 6 21 -27 -4 -19 -14 -51 -23 -71 -13 -31 -19 -37\n-38 -32 -19 5 -26 0 -40 -30 l-18 -36 29 -24 c32 -28 29 -58 -5 -49 -16 4 -29\n-2 -48 -22 -24 -26 -26 -27 -39 -9 -16 22 -16 12 -2 -39 8 -31 14 -37 32 -35\n20 3 22 -1 22 -47 0 -39 4 -50 18 -53 9 -2 17 1 17 7 0 6 5 11 10 11 17 0 11\n-17 -15 -41 -13 -13 -25 -27 -25 -31 0 -17 39 -7 64 17 24 22 26 23 26 5 0\n-23 4 -24 31 -10 17 9 19 7 21 -20 0 -16 1 -36 2 -42 1 -7 -8 -12 -20 -11 -25\n3 -26 -26 -1 -51 9 -10 17 -22 17 -27 0 -5 7 -9 15 -9 22 0 40 50 25 73 -10\n16 -7 18 30 13 23 -2 51 -11 64 -19 15 -10 27 -12 39 -5 10 5 27 6 40 1 22 -8\n31 -10 54 -12 7 0 22 -11 33 -23 31 -33 53 -14 63 53 13 87 17 99 28 99 5 0\n15 -13 22 -29 10 -24 16 -28 30 -19 10 5 30 7 44 3 22 -5 25 -3 20 15 -6 25\n16 38 37 21 11 -9 15 -7 19 11 8 27 1 38 -23 38 -21 0 -40 28 -33 48 3 7 0 18\n-5 25 -5 7 -10 25 -10 40 0 16 -9 41 -20 56 -11 16 -24 44 -27 64 -4 19 -20\n48 -36 63 -25 24 -33 27 -49 16 -11 -7 -21 -8 -25 -2 -3 5 -12 7 -20 3 -8 -3\n-22 -3 -30 1 -13 5 -13 8 2 26 10 11 23 20 31 20 22 0 26 30 6 44 -16 13 -17\n17 -5 40 8 14 22 26 31 26 9 0 21 5 28 12 9 9 7 17 -10 35 l-21 23 23 25 c21\n22 22 27 9 39 -20 20 -79 9 -79 -14 0 -21 -29 -35 -44 -20 -5 5 -18 10 -28 10\n-24 0 -61 41 -48 54 13 13 13 43 0 51 -5 3 -10 3 -11 -2z m-187 -135 c-6 -6\n-16 -7 -22 -3 -9 6 -9 9 1 16 17 10 34 0 21 -13z m-29 -248 c6 0 1 -7 -12 -16\n-19 -14 -25 -14 -31 -3 -11 18 -2 32 17 25 8 -3 20 -6 26 -6z m387 -18 c0 -16\n-32 -52 -46 -52 -22 0 -16 34 9 46 28 15 37 16 37 6z m-450 -127 c-14 -17 -40\n-20 -40 -6 0 5 10 12 23 14 12 2 24 5 26 6 2 0 -2 -6 -9 -14z m347 -141 c3 -8\n1 -20 -6 -27 -14 -14 -47 15 -37 32 10 16 36 13 43 -5z m243 -34 c0 -5 -4 -10\n-10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z" }),
        React__default['default'].createElement("path", { d: "M9317 5294 c-10 -10 -9 -62 1 -68 13 -8 44 33 40 52 -3 18 -29 27\n-41 16z" }),
        React__default['default'].createElement("path", { d: "M8310 5271 c0 -26 9 -30 43 -24 l28 6 -28 18 c-36 24 -43 24 -43 0z" }),
        React__default['default'].createElement("path", { d: "M6010 5271 c0 -5 7 -14 15 -21 12 -10 15 -10 15 3 0 8 -7 17 -15 21\n-8 3 -15 2 -15 -3z" }),
        React__default['default'].createElement("path", { d: "M9241 5264 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M8615 5260 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\n-8 -4 -11 -10z" }),
        React__default['default'].createElement("path", { d: "M9534 5234 c-4 -17 -2 -29 7 -35 15 -10 31 -8 30 4 -1 4 -1 18 -1 32\n0 34 -28 33 -36 -1z" }),
        React__default['default'].createElement("path", { d: "M7711 5184 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M7786 5145 c-3 -9 -6 -24 -6 -33 0 -15 1 -15 16 0 12 11 13 21 7 33\n-9 16 -10 16 -17 0z" }),
        React__default['default'].createElement("path", { d: "M9516 5125 c-7 -37 1 -63 14 -48 5 4 12 25 15 46 6 29 4 37 -8 37 -9\n0 -17 -14 -21 -35z" }),
        React__default['default'].createElement("path", { d: "M9264 5086 c-3 -8 -3 -20 0 -25 4 -6 -11 -19 -34 -31 -22 -11 -40\n-24 -40 -28 0 -4 14 -16 30 -25 24 -15 28 -22 21 -36 -14 -26 2 -47 21 -28 13\n13 14 10 14 -26 -1 -31 3 -42 14 -42 23 0 34 95 13 110 -20 15 -11 45 13 45\n16 0 16 2 1 18 -8 9 -17 30 -19 46 -3 33 -25 46 -34 22z" }),
        React__default['default'].createElement("path", { d: "M7790 5080 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\n-4 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M8930 4990 c0 -13 7 -20 20 -20 18 0 19 3 10 20 -6 11 -15 20 -20 20\n-6 0 -10 -9 -10 -20z" }),
        React__default['default'].createElement("path", { d: "M3606 4985 c-3 -8 -1 -15 4 -15 13 0 22 18 11 24 -5 3 -11 -1 -15 -9z" }),
        React__default['default'].createElement("path", { d: "M5850 4981 c0 -11 -4 -23 -10 -26 -5 -3 -10 -32 -10 -63 -1 -49 -2\n-55 -14 -40 -10 13 -15 15 -24 6 -7 -7 -12 -18 -12 -24 0 -7 -6 -19 -14 -26\n-7 -8 -24 -36 -38 -63 -44 -90 -120 -230 -130 -242 -5 -7 -7 -26 -3 -44 5 -22\n3 -34 -6 -40 -10 -6 -6 -9 14 -9 20 0 30 -7 37 -26 9 -22 13 -24 25 -14 15 13\n13 22 -12 52 -9 10 -11 18 -4 22 5 4 15 -3 21 -14 6 -11 17 -20 25 -20 21 0\n28 -19 15 -35 -10 -12 -10 -15 2 -15 7 0 19 13 25 29 12 34 2 51 -33 51 -12 0\n-24 7 -28 15 -8 23 40 19 64 -5 11 -11 20 -16 20 -10 0 5 10 12 23 15 16 4 23\n14 24 37 1 17 -2 37 -8 44 -6 8 -6 14 0 18 5 4 27 -9 47 -28 27 -25 41 -32 46\n-23 13 21 9 29 -12 22 -11 -3 -20 -3 -20 0 0 12 45 44 63 45 28 0 19 17 -13\n24 -18 3 -30 12 -30 21 0 8 3 15 8 16 55 5 99 19 59 19 -13 0 -17 9 -17 40 0\n22 -4 40 -10 40 -5 0 -10 -7 -10 -15 0 -8 -7 -15 -15 -15 -16 0 -20 27 -6 49\n5 8 16 11 30 6 13 -4 21 -2 21 5 0 7 8 9 19 5 13 -4 20 0 23 12 10 39 -15 60\n-27 23 -3 -11 -15 -20 -26 -20 -12 0 -19 7 -19 20 0 11 -4 20 -10 20 -15 0\n-61 102 -54 122 3 12 15 18 33 18 34 0 44 9 30 27 -18 21 -59 17 -59 -6z m10\n-307 c0 -8 -5 -12 -10 -9 -6 4 -8 11 -5 16 9 14 15 11 15 -7z m-140 -114 c18\n-11 13 -16 -23 -25 -20 -5 -27 -3 -27 7 0 28 22 36 50 18z m60 -15 c10 -13 10\n-19 -3 -33 -8 -9 -17 -26 -20 -37 -2 -11 -4 4 -4 33 0 54 6 62 27 37z" }),
        React__default['default'].createElement("path", { d: "M9602 4890 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M9412 4879 c-7 -10 -18 -19 -26 -19 -7 0 -19 -7 -26 -16 -11 -12 -10\n-18 4 -32 16 -16 18 -16 33 3 15 20 15 20 10 -2 -6 -26 -3 -27 24 -13 22 12\n25 56 6 82 -12 15 -14 15 -25 -3z" }),
        React__default['default'].createElement("path", { d: "M9501 4784 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M9444 4757 c-8 -21 2 -35 16 -21 5 5 6 15 0 24 -8 12 -10 12 -16 -3z" }),
        React__default['default'].createElement("path", { d: "M9170 4635 c0 -8 -8 -20 -18 -26 -12 -8 -17 -20 -14 -35 5 -26 17\n-31 28 -13 8 14 16 89 9 89 -3 0 -5 -7 -5 -15z" }),
        React__default['default'].createElement("path", { d: "M6020 4562 c0 -6 6 -15 14 -19 8 -4 16 -19 18 -32 l3 -23 19 21 c18\n20 18 21 0 27 -11 4 -27 14 -36 22 -11 9 -18 11 -18 4z" }),
        React__default['default'].createElement("path", { d: "M5927 4541 c-2 -10 -1 -25 4 -32 6 -10 9 -4 9 19 0 36 -5 42 -13 13z" }),
        React__default['default'].createElement("path", { d: "M8465 4510 c3 -5 2 -18 -4 -28 -14 -26 2 -50 22 -34 24 20 27 51 7\n62 -24 13 -33 13 -25 0z" }),
        React__default['default'].createElement("path", { d: "M9185 4510 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\n-7 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M6077 4468 c-4 -12 -4 -24 -1 -27 8 -9 37 27 30 38 -11 17 -23 13\n-29 -11z" }),
        React__default['default'].createElement("path", { d: "M9151 4469 c-12 -11 -21 -24 -19 -27 2 -4 10 -19 17 -34 17 -33 51\n-38 51 -8 0 23 21 72 35 82 5 4 -6 8 -26 8 -22 0 -44 -8 -58 -21z" }),
        React__default['default'].createElement("path", { d: "M5860 4440 c0 -21 4 -30 13 -27 6 2 12 14 12 27 0 13 -6 25 -12 28\n-9 2 -13 -7 -13 -28z" }),
        React__default['default'].createElement("path", { d: "M6126 4445 c-3 -8 -1 -15 4 -15 6 0 10 7 10 15 0 8 -2 15 -4 15 -2 0\n-6 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M5948 4444 c-4 -6 -4 -31 0 -55 4 -24 10 -39 13 -34 7 15 -5 101 -13\n89z" }),
        React__default['default'].createElement("path", { d: "M8699 4387 c-14 -12 -29 -30 -33 -41 -4 -11 -12 -16 -21 -12 -10 3\n-17 -3 -21 -20 -9 -35 -1 -39 59 -25 30 6 62 9 72 5 24 -10 45 20 45 64 0 26\n-3 32 -12 25 -7 -6 -26 -13 -43 -16 -16 -4 -24 -4 -17 -1 13 6 17 44 5 44 -5\n-1 -20 -11 -34 -23z" }),
        React__default['default'].createElement("path", { d: "M5803 4380 c-2 -23 15 -36 28 -23 6 6 3 16 -9 26 -17 15 -18 15 -19\n-3z" }),
        React__default['default'].createElement("path", { d: "M5872 4376 c7 -8 15 -12 17 -11 5 6 -10 25 -20 25 -5 0 -4 -6 3 -14z" }),
        React__default['default'].createElement("path", { d: "M5542 4366 c2 -10 16 -28 31 -40 23 -17 29 -18 37 -6 12 19 3 31 -17\n23 -10 -4 -23 3 -35 18 -16 20 -19 21 -16 5z" }),
        React__default['default'].createElement("path", { d: "M6107 4328 c-5 -16 10 -48 24 -48 14 0 7 52 -7 57 -7 2 -14 -2 -17\n-9z" }),
        React__default['default'].createElement("path", { d: "M5850 4321 c0 -6 0 -14 -1 -18 0 -5 10 -11 23 -15 l23 -6 -23 -1\nc-25 -1 -40 -27 -25 -42 6 -6 20 -2 38 12 31 25 58 17 63 -19 3 -16 -5 -25\n-34 -37 -20 -8 -47 -15 -59 -15 -13 0 -25 -7 -29 -15 -6 -16 -48 -36 -79 -39\n-10 0 -22 -7 -26 -15 -5 -8 -26 -17 -47 -20 -33 -5 -41 -11 -50 -39 -6 -19\n-15 -37 -20 -40 -5 -4 -10 -38 -11 -77 0 -38 1 -62 4 -52 2 9 9 17 14 17 15 0\n52 -41 71 -79 18 -35 18 -36 -3 -56 -15 -14 -23 -16 -26 -7 -6 17 -33 15 -33\n-2 0 -8 5 -18 10 -21 6 -3 10 -21 10 -38 0 -18 5 -39 10 -47 9 -13 14 -11 34\n12 13 15 26 32 28 39 8 25 28 -2 22 -29 -6 -25 -48 -72 -64 -72 -9 0 8 -107\n20 -131 6 -10 10 -28 10 -41 1 -13 7 -34 14 -48 13 -22 14 -19 21 55 6 65 5\n85 -9 108 -16 29 -22 67 -10 67 12 0 33 -35 35 -55 2 -37 17 31 22 102 4 47 2\n73 -7 85 -7 10 -16 15 -19 11 -9 -9 -37 17 -37 34 0 12 7 14 31 9 52 -10 64 4\n83 101 9 48 21 103 26 122 6 23 5 39 -3 53 -10 16 -9 22 8 34 11 9 19 19 18\n23 -1 4 16 8 38 10 58 3 89 17 89 40 0 11 -9 23 -20 26 -23 7 -27 25 -5 25 24\n0 18 27 -12 55 -18 17 -37 25 -54 23 -15 -1 -34 4 -43 11 -10 9 -16 10 -16 2z" }),
        React__default['default'].createElement("path", { d: "M5746 4305 c6 -16 44 -41 44 -30 0 4 -5 15 -10 26 -13 23 -42 26 -34\n4z" }),
        React__default['default'].createElement("path", { d: "M5490 4270 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n-10 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M5563 4258 c-21 -25 -19 -53 4 -75 24 -23 30 -43 13 -43 -5 0 -10 -7\n-10 -15 0 -18 4 -19 33 -2 42 23 49 54 20 83 -10 9 -25 28 -34 41 -12 19 -18\n21 -26 11z" }),
        React__default['default'].createElement("path", { d: "M5493 4243 c-16 -6 -5 -33 13 -33 8 0 14 6 14 14 0 18 -11 25 -27 19z" }),
        React__default['default'].createElement("path", { d: "M6132 4228 c-6 -14 -19 -31 -28 -36 -16 -9 -16 -10 2 -16 10 -3 32\n-24 48 -47 15 -22 31 -37 34 -34 4 3 0 10 -7 14 -9 6 -11 18 -7 36 4 15 2 33\n-4 40 -6 8 -15 26 -19 42 l-8 28 -11 -27z m28 -42 c0 -11 -19 -15 -25 -6 -3 5\n1 10 9 10 9 0 16 -2 16 -4z" }),
        React__default['default'].createElement("path", { d: "M5760 4170 c0 -19 11 -26 23 -14 8 8 -3 34 -14 34 -5 0 -9 -9 -9 -20z" }),
        React__default['default'].createElement("path", { d: "M6358 4155 c-16 -13 -28 -29 -28 -34 0 -6 -8 -15 -18 -20 -14 -7 -21\n-5 -31 11 -13 21 -14 21 -24 2 -6 -10 -10 -21 -10 -24 1 -3 -5 -13 -14 -22\n-21 -24 -10 -48 19 -41 13 3 29 10 36 16 7 5 15 7 19 3 3 -3 13 3 21 15 14 20\n14 20 38 -6 20 -21 27 -24 44 -15 24 13 26 33 5 50 -8 7 -15 19 -15 26 0 8 7\n14 15 14 18 0 20 21 3 38 -17 17 -29 15 -60 -13z m-68 -85 c0 -5 -7 -10 -16\n-10 -8 0 -12 5 -9 10 3 6 10 10 16 10 5 0 9 -4 9 -10z" }),
        React__default['default'].createElement("path", { d: "M5112 4101 c2 -7 7 -12 11 -12 12 1 9 15 -3 20 -7 2 -11 -2 -8 -8z" }),
        React__default['default'].createElement("path", { d: "M5571 4034 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6112 4027 c-7 -16 -12 -39 -12 -53 0 -13 -4 -32 -9 -42 -5 -9 -15\n-57 -22 -106 l-13 -89 25 -21 c28 -25 54 -80 44 -96 -6 -9 31 -49 46 -50 4 0\n9 9 12 21 8 30 42 21 42 -11 0 -17 -7 -26 -25 -30 -24 -6 -24 -7 -5 -17 11 -6\n27 -8 35 -5 8 3 0 -7 -18 -23 -22 -19 -32 -34 -29 -47 3 -10 1 -18 -4 -18 -5\n0 -9 -7 -9 -15 0 -22 21 -18 27 5 3 11 14 20 25 20 15 0 17 -3 9 -19 -13 -23\n-3 -35 16 -19 18 15 26 4 27 -37 1 -26 5 -35 16 -33 10 2 17 20 21 53 7 53 -1\n72 -36 85 -16 6 -21 17 -22 49 -1 23 2 41 8 41 16 0 10 19 -11 37 -21 18 -26\n49 -11 72 5 7 14 11 20 7 20 -13 51 13 51 43 0 21 -6 30 -22 34 -28 8 -71 -36\n-63 -64 8 -23 -17 -26 -35 -4 -11 13 -10 23 0 56 12 35 12 44 -4 70 -15 25\n-15 29 -2 29 9 0 16 7 16 15 0 8 -6 12 -14 9 -8 -3 -17 0 -22 7 -4 7 -3 14 3\n16 7 3 6 14 -4 33 -17 34 -28 37 -42 13 -9 -16 -10 -16 -11 -2 0 9 9 28 21 43\n11 14 16 26 10 26 -5 0 -11 10 -14 23 -3 21 -4 21 -15 -6z m-5 -263 c-12 -12\n-37 5 -30 21 5 15 7 15 21 1 9 -9 13 -18 9 -22z m38 -73 c-3 -6 -11 -8 -17 -5\n-6 4 -5 9 3 15 16 10 23 4 14 -10z" }),
        React__default['default'].createElement("path", { d: "M6417 4015 c-5 -10 0 -15 14 -15 12 0 19 5 17 12 -6 18 -25 20 -31 3z" }),
        React__default['default'].createElement("path", { d: "M4874 3988 c3 -12 17 -77 31 -143 14 -66 33 -151 41 -190 26 -124 47\n-200 57 -210 6 -6 7 -3 3 10 -9 30 -25 112 -36 183 -6 34 -18 95 -29 135 -10\n39 -27 107 -36 150 -10 43 -22 80 -27 83 -5 3 -7 -5 -4 -18z" }),
        React__default['default'].createElement("path", { d: "M5417 4003 c-13 -12 -7 -31 8 -29 22 3 27 12 12 24 -8 7 -17 9 -20 5z" }),
        React__default['default'].createElement("path", { d: "M6243 3973 c-21 -14 -22 -17 -7 -44 16 -32 20 -34 49 -16 28 17 31\n53 6 66 -24 13 -21 14 -48 -6z m27 -23 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10\n-3 6 -1 10 4 10 6 0 11 -4 11 -10z" }),
        React__default['default'].createElement("path", { d: "M6357 3957 c-2 -12 -8 -30 -12 -39 -5 -14 -2 -18 14 -18 17 0 21 6\n21 34 0 40 -15 56 -23 23z" }),
        React__default['default'].createElement("path", { d: "M6590 3919 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M6636 3915 c-3 -8 -1 -15 4 -15 6 0 10 7 10 15 0 8 -2 15 -4 15 -2 0\n-6 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M5614 3838 c3 -13 6 -26 6 -30 0 -5 4 -8 8 -8 5 0 7 14 4 30 -2 17\n-9 30 -14 30 -6 0 -8 -10 -4 -22z" }),
        React__default['default'].createElement("path", { d: "M6375 3760 c-3 -5 -17 -10 -31 -10 -30 0 -31 -16 -2 -39 l22 -18 -22\n-28 c-26 -33 -28 -45 -6 -45 9 0 18 -8 21 -18 2 -10 13 -23 23 -30 16 -10 20\n-8 25 9 5 16 9 18 21 8 8 -6 18 -9 22 -5 4 4 -1 13 -11 20 -9 7 -17 21 -17 31\n0 13 -5 16 -25 11 -42 -11 -28 11 18 26 51 18 61 47 22 68 -14 7 -25 17 -25\n22 0 11 -28 10 -35 -2z m33 -31 c-2 -6 -8 -10 -13 -10 -5 0 -11 4 -13 10 -2 6\n4 11 13 11 9 0 15 -5 13 -11z" }),
        React__default['default'].createElement("path", { d: "M5342 3715 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z" }),
        React__default['default'].createElement("path", { d: "M5522 3660 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6260 3654 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0\n-10 -7 -10 -16z" }),
        React__default['default'].createElement("path", { d: "M6441 3644 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6030 3611 c0 -27 4 -41 13 -41 9 0 12 11 9 35 -6 50 -22 54 -22 6z" }),
        React__default['default'].createElement("path", { d: "M6850 3630 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\n-4 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M6900 3609 l-25 -21 25 6 c14 3 28 6 31 6 4 0 9 7 13 15 8 21 -15 18\n-44 -6z" }),
        React__default['default'].createElement("path", { d: "M5312 3580 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6090 3590 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n-10 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M6286 3575 c-6 -17 9 -29 24 -20 14 9 12 22 -4 28 -8 3 -17 -1 -20\n-8z" }),
        React__default['default'].createElement("path", { d: "M6910 3569 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M5292 3510 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z" }),
        React__default['default'].createElement("path", { d: "M5552 3520 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6038 3533 c-35 -9 -48 -113 -13 -113 7 0 18 -7 25 -15 7 -8 15 -15\n19 -15 8 0 6 58 -2 67 -4 3 -2 12 3 18 7 9 7 21 0 39 -5 14 -11 25 -12 25 -2\n-1 -10 -3 -20 -6z" }),
        React__default['default'].createElement("path", { d: "M6926 3515 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0\n-7 -7 -4 -15z" }),
        React__default['default'].createElement("path", { d: "M6852 3470 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z" }),
        React__default['default'].createElement("path", { d: "M5572 3455 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z" }),
        React__default['default'].createElement("path", { d: "M5257 3382 c-10 -43 -30 -126 -44 -187 -45 -198 -49 -210 -64 -210\n-17 0 -38 59 -79 225 -36 150 -59 222 -59 193 -1 -17 4 -44 10 -60 7 -15 15\n-46 19 -68 13 -68 80 -316 90 -336 22 -40 44 -7 65 96 11 53 24 108 46 195 20\n80 43 219 37 225 -2 2 -11 -31 -21 -73z" }),
        React__default['default'].createElement("path", { d: "M6866 3407 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z" }),
        React__default['default'].createElement("path", { d: "M6364 3375 c-11 -27 1 -33 19 -9 16 21 16 24 2 24 -9 0 -18 -7 -21\n-15z" }),
        React__default['default'].createElement("path", { d: "M6430 3355 c-8 -9 -8 -15 -2 -15 12 0 26 19 19 26 -2 2 -10 -2 -17\n-11z" }),
        React__default['default'].createElement("path", { d: "M5601 3324 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6300 3315 c0 -14 -8 -29 -20 -35 -11 -6 -20 -20 -20 -31 0 -11 -10\n-24 -24 -30 -23 -11 -43 -59 -25 -59 14 0 33 -44 31 -72 -2 -21 2 -28 16 -28\n10 0 24 6 31 13 11 10 13 9 8 -5 -9 -26 29 -24 45 2 7 11 20 20 29 20 20 0 76\n28 85 42 4 6 -3 18 -16 28 -18 14 -20 20 -12 37 8 14 8 23 0 31 -13 13 0 35\n18 28 13 -5 18 11 12 32 -2 4 -30 7 -63 7 -56 0 -60 1 -58 23 2 16 -2 22 -17\n22 -15 0 -20 -7 -20 -25z m30 -109 c0 -14 -29 -31 -38 -21 -6 6 18 35 29 35 5\n0 9 -6 9 -14z" }),
        React__default['default'].createElement("path", { d: "M6385 3320 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0\n-12 -4 -9 -10z" }),
        React__default['default'].createElement("path", { d: "M6560 3286 c0 -23 2 -24 33 -13 17 6 34 13 37 15 9 6 -25 22 -47 22\n-18 0 -23 -6 -23 -24z" }),
        React__default['default'].createElement("path", { d: "M6035 3289 c-4 -6 -5 -13 -2 -16 7 -7 27 6 27 18 0 12 -17 12 -25 -2z" }),
        React__default['default'].createElement("path", { d: "M6496 3291 c-4 -5 -3 -17 0 -26 4 -10 1 -21 -6 -25 -17 -10 -4 -31\n15 -23 10 3 15 19 15 44 0 36 -12 51 -24 30z" }),
        React__default['default'].createElement("path", { d: "M6680 3271 c0 -14 -8 -21 -27 -23 -28 -3 -45 -28 -19 -28 9 0 16 5\n16 10 0 6 11 10 25 10 20 0 25 5 25 25 0 14 -4 25 -10 25 -5 0 -10 -9 -10 -19z" }),
        React__default['default'].createElement("path", { d: "M5621 3264 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M5950 3222 c0 -15 -5 -33 -12 -40 -6 -6 -8 -15 -4 -19 4 -4 10 -2 14\n4 5 8 13 9 22 3 8 -6 26 -10 40 -10 23 0 23 1 -8 17 -19 9 -32 23 -31 32 2 28\n-1 41 -11 41 -5 0 -10 -13 -10 -28z" }),
        React__default['default'].createElement("path", { d: "M6777 3233 c-12 -11 -8 -23 8 -23 8 0 15 7 15 15 0 16 -12 20 -23 8z" }),
        React__default['default'].createElement("path", { d: "M6620 3195 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0\n-15 -7 -15 -15z" }),
        React__default['default'].createElement("path", { d: "M6805 3159 c-4 -6 -5 -12 -2 -15 7 -7 37 7 37 17 0 13 -27 11 -35 -2z" }),
        React__default['default'].createElement("path", { d: "M5930 3109 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M6050 3099 c0 -11 4 -18 10 -14 5 3 7 12 3 20 -7 21 -13 19 -13 -6z" }),
        React__default['default'].createElement("path", { d: "M5925 3069 c-10 -14 -1 -21 19 -13 9 3 13 10 10 15 -7 12 -21 11 -29\n-2z" }),
        React__default['default'].createElement("path", { d: "M6314 2965 c-9 -28 -8 -37 2 -46 18 -14 18 -29 1 -29 -7 0 -21 -10\n-31 -21 -14 -16 -20 -19 -26 -9 -4 7 -13 9 -19 6 -17 -11 20 -55 45 -56 17 0\n21 -7 22 -31 1 -35 21 -63 29 -41 3 6 18 12 33 12 16 0 32 5 35 10 3 6 -3 10\n-13 10 -16 0 -20 9 -25 48 -4 35 -2 50 9 59 14 10 13 13 -5 23 -20 10 -20 12\n-5 41 12 24 13 34 3 45 -20 25 -43 16 -55 -21z" }),
        React__default['default'].createElement("path", { d: "M5690 2984 c0 -13 18 -39 24 -34 2 3 -2 14 -10 24 -8 11 -14 16 -14\n10z" }),
        React__default['default'].createElement("path", { d: "M6787 2969 c-19 -21 -23 -49 -7 -49 6 0 10 7 10 15 0 8 7 15 15 15 8\n0 15 6 15 14 0 24 -15 26 -33 5z" }),
        React__default['default'].createElement("path", { d: "M6127 2876 c-4 -10 -5 -21 -2 -24 9 -9 17 6 13 25 -3 17 -4 17 -11\n-1z" }),
        React__default['default'].createElement("path", { d: "M6161 2844 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6268 2753 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M6125 2607 c-4 -10 -5 -21 -1 -24 10 -10 18 4 13 24 -4 17 -4 17 -12\n0z" }),
        React__default['default'].createElement("path", { d: "M6117 2563 c-14 -13 -6 -23 18 -23 14 0 25 -5 25 -11 0 -5 5 -7 10\n-4 17 10 11 21 -15 33 -30 14 -30 14 -38 5z" }),
        React__default['default'].createElement("path", { d: "M6384 2435 c-18 -14 -18 -14 9 -15 15 0 27 4 27 9 0 18 -17 20 -36 6z" }),
        React__default['default'].createElement("path", { d: "M6462 2330 c-52 -12 -90 -55 -102 -115 -7 -33 -11 -275 -13 -663 l-2\n-612 26 -26 c24 -23 34 -26 97 -25 126 1 142 21 142 187 0 113 4 122 62 143\n65 25 83 37 139 91 114 111 183 323 173 529 -2 41 -8 89 -13 106 -6 16 -13 53\n-17 80 -16 119 -134 258 -258 301 -41 15 -179 17 -234 4z m222 -63 c94 -41\n185 -138 198 -212 3 -17 13 -56 22 -88 19 -67 22 -248 5 -311 -29 -114 -44\n-156 -72 -209 -33 -63 -114 -142 -156 -152 -47 -12 -109 -47 -119 -69 -6 -11\n-12 -71 -14 -133 -2 -62 -8 -116 -13 -121 -15 -14 -98 -23 -114 -13 -13 8 -14\n98 -12 613 1 341 6 619 12 639 12 49 32 63 98 69 87 8 123 5 165 -13z" }),
        React__default['default'].createElement("path", { d: "M6569 2093 c-11 -12 -15 -73 -17 -272 -4 -331 7 -370 85 -321 36 22\n70 72 98 145 29 74 26 257 -5 338 -31 81 -73 127 -115 127 -18 0 -39 -7 -46\n-17z m88 -96 c44 -85 55 -221 27 -318 -20 -67 -53 -117 -65 -98 -4 7 -6 94 -4\n194 2 99 4 199 4 223 1 48 12 48 38 -1z" }),
        React__default['default'].createElement("path", { d: "M5583 820 c-4 -16 -11 -20 -28 -16 -30 8 -35 0 -22 -34 9 -24 13 -26\n24 -14 11 10 20 11 33 4 25 -14 60 -13 60 2 0 6 3 9 6 6 3 -4 -2 -17 -11 -31\n-11 -17 -13 -27 -5 -32 6 -3 8 -10 5 -15 -6 -9 25 -30 43 -30 18 0 21 40 4 49\n-15 9 -15 11 1 28 23 26 22 30 -12 36 -23 5 -30 12 -33 34 -2 22 -9 29 -31 31\n-22 3 -30 -1 -34 -18z" }),
        React__default['default'].createElement("path", { d: "M5312 800 c-12 -20 -12 -21 13 -4 28 18 31 24 12 24 -7 0 -18 -9 -25\n-20z" }),
        React__default['default'].createElement("path", { d: "M5795 810 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7\n-4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M5300 736 c0 -2 7 -6 15 -10 8 -3 15 -1 15 4 0 6 -7 10 -15 10 -8 0\n-15 -2 -15 -4z" }),
        React__default['default'].createElement("path", { d: "M5542 707 c-12 -14 7 -47 27 -47 6 0 11 -4 11 -10 0 -5 5 -10 11 -10\n8 0 7 5 -1 15 -11 13 -9 19 8 36 12 11 22 22 22 24 0 11 -68 4 -78 -8z" }),
        React__default['default'].createElement("path", { d: "M5740 675 c-8 -9 -8 -15 -2 -15 12 0 26 19 19 26 -2 2 -10 -2 -17\n-11z" }),
        React__default['default'].createElement("path", { d: "M5766 631 c-3 -5 -3 -16 0 -24 6 -17 -27 -40 -49 -35 -7 2 -12 -1\n-12 -7 0 -5 11 -8 23 -6 22 2 23 0 17 -28 l-7 -31 59 6 c32 4 64 11 70 16 16\n13 43 3 43 -16 0 -8 -8 -17 -17 -19 -16 -4 -16 -5 -1 -6 26 -2 51 28 37 45\n-14 17 -40 18 -75 2 -22 -11 -28 -10 -40 6 -8 12 -19 16 -30 12 -13 -5 -14 -3\n-7 6 17 21 21 67 7 78 -7 7 -14 7 -18 1z" }),
        React__default['default'].createElement("path", { d: "M5688 613 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M5850 602 c0 -6 9 -12 20 -15 11 -3 20 -3 20 -1 0 2 -9 8 -20 14 -11\n6 -20 7 -20 2z" }),
        React__default['default'].createElement("path", { d: "M5630 480 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n-10 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M5732 463 c-10 -4 -10 -8 -1 -19 17 -21 51 -18 47 3 -3 18 -24 25\n-46 16z" }),
        React__default['default'].createElement("path", { d: "M5593 433 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" }),
        React__default['default'].createElement("path", { d: "M5670 431 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5 3\n-10 2 -10 -4z" }),
        React__default['default'].createElement("path", { d: "M5828 433 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" }),
        React__default['default'].createElement("path", { d: "M5815 350 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z" }),
        React__default['default'].createElement("path", { d: "M5328 329 c-24 -13 -23 -29 1 -29 10 0 21 9 24 20 6 22 0 24 -25 9z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React__default['default'].createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React__default['default'].createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React__default['default'].createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React__default['default'].createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React__default['default'].createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React__default['default'].createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React__default['default'].createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React__default['default'].createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React__default['default'].createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React__default['default'].createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default['default'].createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default['default'].createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default['default'].createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React__default['default'].createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React__default['default'].createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React__default['default'].createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default['default'].createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default['default'].createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$I = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default['default'].createElement("g", { mask: "url(#A)" },
            React__default['default'].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default['default'].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default['default'].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default['default'].createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#9F4A08" }),
                React__default['default'].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default['default'].createElement("circle", { cx: "45", cy: "45", r: "45", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.7703 49.9442C15.7626 50.1122 15.7587 50.2809 15.7587 50.4501C15.7587 51.0897 15.8144 51.7214 15.923 52.3435H15.7587V53.3228C15.7587 53.8008 15.7898 54.2744 15.8508 54.7428C17.0423 63.8844 29.6377 71.0772 45 71.0772C60.3623 71.0772 72.9577 63.8844 74.1492 54.7428C74.2102 54.2744 74.2413 53.8008 74.2413 53.3228V52.3435H74.077C74.1856 51.7214 74.2413 51.0897 74.2413 50.4501C74.2413 50.2809 74.2374 50.1122 74.2297 49.9442C73.7886 40.3727 60.8709 32.6957 45 32.6957C29.1291 32.6957 16.2114 40.3727 15.7703 49.9442ZM13.3688 49.9442C13.5863 44.1042 17.5547 39.1986 23.0781 35.845C28.8037 32.3686 36.5601 30.2964 45 30.2964C53.4399 30.2964 61.1964 32.3686 66.9219 35.845C72.4453 39.1986 76.4137 44.1042 76.6312 49.9442H76.6406V53.3228C76.6406 59.3853 72.6041 64.4779 66.9219 67.9279C61.1964 71.4043 53.4399 73.4765 45 73.4765C36.5601 73.4765 28.8037 71.4043 23.0781 67.9279C17.3959 64.4779 13.3594 59.3853 13.3594 53.3228V49.9442H13.3688Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M74.2412 53.3233C74.2412 63.1287 61.1494 71.0776 44.9999 71.0776C28.8503 71.0776 15.7585 63.1287 15.7585 53.3233V50.5127H74.2412V53.3233Z", fill: "#BEBEBE" }),
        React__default['default'].createElement("path", { d: "M74.2412 50.4502C74.2412 60.2557 61.1494 68.2046 44.9999 68.2046C28.8503 68.2046 15.7585 60.2557 15.7585 50.4502C15.7585 40.6447 28.8503 32.6958 44.9999 32.6958C61.1494 32.6958 74.2412 40.6447 74.2412 50.4502Z", fill: "#FAF9FA" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.2578 45.4345C20.2577 45.4456 20.2577 45.4567 20.2577 45.4679C20.2577 46.2752 20.3747 47.0659 20.5989 47.8338H20.2574V48.8736C20.2574 49.3326 20.2953 49.7861 20.3691 50.2332C21.4839 56.9839 30.8104 62.2532 42.1508 62.2532C53.4912 62.2532 62.8178 56.9839 63.9326 50.2332C64.0064 49.7861 64.0442 49.3326 64.0442 48.8736V47.8338H63.7032C63.9213 47.0868 64.038 46.3183 64.0442 45.5339C64.0444 45.5119 64.0445 45.4899 64.0445 45.4679C64.0445 45.4567 64.0444 45.4456 64.0444 45.4345C64.015 38.0605 54.2243 32.0883 42.1511 32.0883C30.0779 32.0883 20.2872 38.0605 20.2578 45.4345ZM17.8585 45.4345H17.8582V48.8736C17.8582 53.7204 21.0631 57.7199 25.4188 60.3817C29.8156 63.0687 35.7372 64.6525 42.1508 64.6525C48.5644 64.6525 54.4861 63.0687 58.8829 60.3817C63.2385 57.7199 66.4435 53.7204 66.4435 48.8736V45.5428C66.4437 45.5178 66.4438 45.4928 66.4438 45.4679C66.4438 40.621 63.2388 36.6216 58.8832 33.9598C54.4863 31.2728 48.5647 29.689 42.1511 29.689C35.7375 29.689 29.8158 31.2728 25.419 33.9598C21.0734 36.6155 17.8731 40.6027 17.8585 45.4345Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M64.0441 48.8738C64.0441 56.2631 54.2421 62.2534 42.1507 62.2534C30.0593 62.2534 20.2573 56.2631 20.2573 48.8738V45.7346H64.0441V48.8738Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M64.0441 45.4679C64.0441 52.8573 54.2421 58.8475 42.1507 58.8475C30.0593 58.8475 20.2573 52.8573 20.2573 45.4679C20.2573 38.0786 30.0593 32.0884 42.1507 32.0884C54.2421 32.0884 64.0441 38.0786 64.0441 45.4679Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.8557 38.2365C26.8556 38.2476 26.8556 38.2587 26.8556 38.2699C26.8556 39.0772 26.9726 39.8679 27.1968 40.6359H26.8553V41.6756C26.8553 42.1346 26.8932 42.5881 26.967 43.0352C28.0818 49.7859 37.4083 55.0552 48.7487 55.0552C60.0891 55.0552 69.4157 49.7859 70.5305 43.0352C70.6043 42.5881 70.6421 42.1346 70.6421 41.6756V40.6359H70.3011C70.5192 39.8888 70.6359 39.1203 70.6421 38.3359C70.6423 38.3139 70.6424 38.2919 70.6424 38.2699C70.6424 38.2587 70.6423 38.2476 70.6423 38.2365C70.6129 30.8625 60.8222 24.8903 48.749 24.8903C36.6758 24.8903 26.8851 30.8625 26.8557 38.2365ZM24.4564 38.2365H24.4561V41.6756C24.4561 46.5224 27.661 50.5219 32.0167 53.1837C36.4135 55.8707 42.3351 57.4545 48.7487 57.4545C55.1623 57.4545 61.084 55.8707 65.4808 53.1837C69.8364 50.5219 73.0414 46.5224 73.0414 41.6756V38.3448C73.0416 38.3198 73.0417 38.2948 73.0417 38.2699C73.0417 33.4231 69.8367 29.4236 65.4811 26.7618C61.0842 24.0748 55.1626 22.491 48.749 22.491C42.3354 22.491 36.4137 24.0748 32.0169 26.7618C27.6713 29.4175 24.471 33.4047 24.4564 38.2365Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M70.6422 41.6758C70.6422 49.0651 60.8402 55.0554 48.7488 55.0554C36.6575 55.0554 26.8555 49.0651 26.8555 41.6758V38.5366H70.6422V41.6758Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M70.6422 38.2699C70.6422 45.6593 60.8402 51.6495 48.7488 51.6495C36.6575 51.6495 26.8555 45.6593 26.8555 38.2699C26.8555 30.8806 36.6575 24.8904 48.7488 24.8904C60.8402 24.8904 70.6422 30.8806 70.6422 38.2699Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.2578 31.0385C20.2577 31.0496 20.2577 31.0607 20.2577 31.0719C20.2577 31.8792 20.3747 32.6699 20.5989 33.4379H20.2574V34.4776C20.2574 34.9366 20.2953 35.3901 20.3691 35.8372C21.4839 42.5879 30.8104 47.8572 42.1508 47.8572C53.4912 47.8572 62.8178 42.5879 63.9326 35.8372C64.0064 35.3901 64.0442 34.9366 64.0442 34.4776V33.4379H63.7032C63.9213 32.6908 64.038 31.9223 64.0442 31.1379C64.0444 31.1159 64.0445 31.0939 64.0445 31.0719C64.0445 31.0607 64.0444 31.0496 64.0444 31.0385C64.015 23.6645 54.2243 17.6923 42.1511 17.6923C30.0779 17.6923 20.2872 23.6645 20.2578 31.0385ZM17.8585 31.0385H17.8582V34.4776C17.8582 39.3244 21.0631 43.3239 25.4188 45.9857C29.8156 48.6727 35.7372 50.2565 42.1508 50.2565C48.5644 50.2565 54.4861 48.6727 58.8829 45.9857C63.2385 43.3239 66.4435 39.3244 66.4435 34.4776V31.1468C66.4437 31.1218 66.4438 31.0968 66.4438 31.0719C66.4438 26.2251 63.2388 22.2256 58.8832 19.5638C54.4863 16.8768 48.5647 15.293 42.1511 15.293C35.7375 15.293 29.8158 16.8768 25.419 19.5638C21.0734 22.2195 17.8731 26.2067 17.8585 31.0385Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M64.0441 34.4778C64.0441 41.8671 54.2421 47.8574 42.1507 47.8574C30.0593 47.8574 20.2573 41.8671 20.2573 34.4778V31.3386H64.0441V34.4778Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M64.0441 31.0719C64.0441 38.4613 54.2421 44.4515 42.1507 44.4515C30.0593 44.4515 20.2573 38.4613 20.2573 31.0719C20.2573 23.6826 30.0593 17.6924 42.1507 17.6924C54.2421 17.6924 64.0441 23.6826 64.0441 31.0719Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.4361 31.9044C25.4361 34.3714 27.2287 36.5809 30.0567 38.0676L28.0973 41.4614L28.0977 41.4617H28.0973V50.0509C28.0973 51.1867 29.018 52.1075 30.1538 52.1075C31.2896 52.1075 32.2104 51.1867 32.2104 50.0509V43.22L34.3184 39.5686C35.6663 39.8545 37.1133 40.0097 38.6192 40.0097C45.9 40.0097 51.8022 36.3808 51.8022 31.9044C51.8022 27.428 45.9 23.7991 38.6192 23.7991C31.3383 23.7991 25.4361 27.428 25.4361 31.9044Z", fill: "url(#paint1_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0569 38.0676C29.7437 37.9029 29.4431 37.7294 29.1563 37.5476C26.8538 36.0883 25.4363 34.0982 25.4363 31.9045C25.4363 27.428 31.3386 23.7991 38.6194 23.7991C45.9002 23.7991 51.8025 27.428 51.8025 31.9045C51.8025 36.3809 45.9002 40.0098 38.6194 40.0098C37.1135 40.0098 35.6666 39.8545 34.3187 39.5687L32.2106 43.22V50.0509C32.2106 51.1868 31.2899 52.1075 30.1541 52.1075C29.0183 52.1075 28.0975 51.1868 28.0975 50.0509V41.4617L30.0569 38.0676ZM25.9981 41.4978V50.0509C25.9981 52.3462 27.8588 54.2069 30.1541 54.2069C32.4493 54.2069 34.31 52.3462 34.31 50.0509V43.7826L35.4034 41.8887C36.4418 42.0334 37.5181 42.1092 38.6194 42.1092C42.584 42.1092 46.2738 41.1254 49.0408 39.4242C51.7735 37.7441 53.9019 35.1446 53.9019 31.9045C53.9019 28.6643 51.7735 26.0648 49.0408 24.3847C46.2738 22.6835 42.584 21.6997 38.6194 21.6997C34.6548 21.6997 30.965 22.6835 28.198 24.3847C25.4652 26.0648 23.3369 28.6643 23.3369 31.9045C23.3369 34.7481 24.9657 37.0898 27.2286 38.7677L26.2939 40.3867C26.2048 40.5358 26.1337 40.697 26.0835 40.8672C26.0221 41.0746 25.9943 41.2873 25.9981 41.4978Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M29.5544 28.4894C29.5544 30.8083 32.5084 32.6882 36.1524 32.6882C39.7964 32.6882 42.7505 30.8083 42.7505 28.4894C42.7505 26.1704 39.7964 24.2905 36.1524 24.2905C32.5084 24.2905 29.5544 26.1704 29.5544 28.4894Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M29.5547 26.6899H42.7508V28.4894H29.5547V26.6899Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M29.5544 26.6898C29.5544 29.0088 32.5084 30.8887 36.1524 30.8887C39.7964 30.8887 42.7505 29.0088 42.7505 26.6898C42.7505 24.3709 39.7964 22.491 36.1524 22.491C32.5084 22.491 29.5544 24.3709 29.5544 26.6898Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M33.6489 26.1838L35.5086 25.0003C35.9016 24.7502 36.4038 24.7502 36.7968 25.0003L38.6565 26.1838C39.0269 26.4195 39.0269 26.9602 38.6565 27.1959L36.7968 28.3794C36.4038 28.6295 35.9016 28.6295 35.5086 28.3794L33.6489 27.1959C33.2785 26.9602 33.2785 26.4195 33.6489 26.1838Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.3599 21.9496C31.9392 20.9446 33.9929 20.3916 36.1525 20.3916C38.3121 20.3916 40.3658 20.9446 41.9451 21.9496C43.4996 22.9389 44.8499 24.5636 44.8499 26.6899V28.4894C44.8499 30.6156 43.4996 32.2404 41.9451 33.2296C40.3658 34.2347 38.3121 34.7876 36.1525 34.7876C33.9929 34.7876 31.9392 34.2347 30.3599 33.2296C28.8054 32.2404 27.4551 30.6156 27.4551 28.4894V26.6899C27.4551 24.5636 28.8054 22.9389 30.3599 21.9496ZM36.1525 22.491C32.5085 22.491 29.5545 24.3709 29.5545 26.6899V28.4894C29.5545 30.8083 32.5085 32.6882 36.1525 32.6882C39.7965 32.6882 42.7505 30.8083 42.7505 28.4894V26.6899C42.7505 24.3709 39.7965 22.491 36.1525 22.491Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "45", y1: "0", x2: "45", y2: "90", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "38.7618", y1: "24.0704", x2: "38.7618", y2: "51.8948", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#9F4A08" }),
                React__default['default'].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default['default'].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default['default'].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default['default'].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4436 4388 c-56 -33 -78 -79 -73 -151 3 -46 9 -63 33 -88 56 -60 119-73 190 -38 106 51 119 202 23 270 -47 33 -123 36 -173 7z" }),
        React__default['default'].createElement("path", { d: "M578 4376 c-58 -21 -85 -42 -113 -91 -19 -32 -27 -59 -27 -97 -1-123 82 -209 203 -210 182 -1 274 218 145 347 -61 60 -133 78 -208 51z" }),
        React__default['default'].createElement("path", { d: "M2570 4335 c-111 -25 -244 -98 -328 -180 l-73 -72 -85 29 c-279 96\n            -578 34 -790 -165 -148 -138 -232 -306 -250 -502 l-6 -70 -107 -1 c-83 0 -120\n            -5 -171 -23 -173 -60 -312 -197 -370 -364 -31 -87 -38 -240 -15 -327 28 -109\n            73 -188 150 -266 38 -39 81 -77 93 -85 l24 -14 -17 -59 c-13 -43 -16 -85 -13\n            -161 3 -94 6 -108 42 -179 65 -133 189 -232 326 -259 l60 -13 4 -124 c4 -134\n            25 -229 71 -334 84 -190 238 -349 428 -441 128 -61 190 -76 347 -82 154 -6\n            239 7 365 56 l76 29 54 -54 c36 -36 81 -67 131 -91 69 -33 87 -37 178 -41 85\n            -3 111 -1 166 18 118 39 217 122 279 233 l26 47 155 3 c137 3 165 7 240 32\n            306 100 519 323 603 630 18 66 22 106 21 225 -1 127 -4 156 -27 233 -15 48\n            -44 122 -66 164 l-38 76 80 60 c103 78 185 178 247 302 72 144 93 229 93 395\n            1 150 -13 223 -64 346 -104 250 -320 440 -584 515 -65 19 -105 23 -215 24 -74\n            0 -156 -4 -181 -8 l-46 -8 -18 53 c-67 207 -230 367 -440 434 -101 33 -258 41\n            -355 19z m266 -199 c85 -22 170 -74 233 -142 72 -76 109 -152 127 -258 12 -69\n            19 -85 45 -109 36 -33 45 -33 173 2 104 28 244 28 350 1 121 -31 208 -82 307\n            -180 95 -94 134 -155 175 -275 25 -70 28 -95 28 -205 1 -104 -3 -138 -22 -200\n            -56 -181 -176 -327 -337 -411 -78 -41 -103 -65 -111 -105 -7 -36 2 -56 54\n            -123 83 -108 132 -259 132 -412 1 -405 -375 -737 -768 -679 -154 23 -158 23\n            -186 5 -18 -12 -31 -35 -42 -74 -40 -136 -106 -203 -230 -231 -99 -22 -220 31\n            -275 119 -77 127 -92 131 -232 62 -133 -66 -206 -85 -332 -84 -118 0 -199 19\n            -302 70 -281 140 -436 462 -367 764 27 121 -8 166 -123 156 -84 -8 -146 6\n            -204 45 -129 87 -162 254 -76 384 35 53 42 109 17 139 -8 10 -44 32 -80 49\n            -82 38 -162 117 -198 193 -24 51 -27 70 -27 158 0 89 3 107 28 161 84 182 293\n            268 487 200 62 -22 79 -24 106 -16 57 19 66 46 58 168 -8 136 6 213 58 321 95\n            198 306 330 529 331 77 0 200 -33 276 -75 65 -36 109 -43 143 -25 11 6 37 37\n            59 69 119 175 333 259 527 207z" }),
        React__default['default'].createElement("path", { d: "M2117 3620 c-66 -52 -31 -149 54 -150 76 0 113 96 55 146 -33 29 -75\n            31 -109 4z" }),
        React__default['default'].createElement("path", { d: "M2734 3481 c-53 -24 -100 -82 -114 -142 -30 -125 70 -249 200 -249\n            130 0 230 124 200 249 -22 93 -106 161 -200 161 -25 0 -63 -9 -86 -19z" }),
        React__default['default'].createElement("path", { d: "M1740 3098 c-49 -34 -72 -71 -77 -125 -10 -116 103 -200 213 -158 66\n            25 99 73 99 146 0 43 -5 65 -21 86 -35 48 -82 73 -134 73 -32 0 -57 -7 -80\n            -22z" }),
        React__default['default'].createElement("path", { d: "M3676 2830 c-73 -22 -127 -118 -106 -190 22 -78 76 -120 155 -120 92\n            0 155 62 155 153 0 76 -39 132 -109 156 -39 13 -54 13 -95 1z" }),
        React__default['default'].createElement("path", { d: "M2649 2578 c-115 -66 -99 -236 25 -283 78 -30 159 1 197 76 71 140\n            -87 286 -222 207z" }),
        React__default['default'].createElement("path", { d: "M1263 2549 c-45 -13 -73 -53 -73 -105 0 -112 143 -155 201 -60 55 90\n            -25 194 -128 165z" }),
        React__default['default'].createElement("path", { d: "M2045 2165 c-35 -34 -33 -78 4 -116 31 -31 59 -36 94 -17 80 42 52\n            158 -38 158 -25 0 -44 -8 -60 -25z" }),
        React__default['default'].createElement("path", { d: "M3393 1982 c-30 -5 -63 -48 -63 -83 0 -36 37 -77 76 -85 24 -4 37 0\n            62 21 71 60 19 162 -75 147z" }),
        React__default['default'].createElement("path", { d: "M1907 1656 c-55 -15 -100 -53 -129 -110 -29 -57 -22 -149 15 -203 74\n            -107 222 -121 313 -29 121 120 54 323 -116 349 -19 3 -57 0 -83 -7z" }),
        React__default['default'].createElement("path", { d: "M2764 1466 c-74 -33 -63 -144 16 -161 98 -21 146 123 54 161 -39 16\n            -32 16 -70 0z" }),
        React__default['default'].createElement("path", { d: "M3671 4314 c-62 -51 -26 -146 54 -146 79 0 113 86 56 143 -36 36 -70\n            37 -110 3z" }),
        React__default['default'].createElement("path", { d: "M4549 2170 c-131 -22 -204 -177 -141 -297 70 -134 266 -147 348 -23\n            103 156 -24 351 -207 320z" }),
        React__default['default'].createElement("path", { d: "M644 1456 c-76 -34 -111 -130 -76 -208 28 -64 72 -92 143 -93 91 0\n            149 55 157 147 4 58 -17 102 -70 141 -34 25 -113 32 -154 13z" }),
        React__default['default'].createElement("path", { d: "M464 956 c-74 -33 -63 -144 16 -161 98 -21 146 123 54 161 -39 16\n            -32 16 -70 0z" }),
        React__default['default'].createElement("path", { d: "M952 750 c-13 -5 -29 -26 -38 -45 -30 -73 33 -138 109 -112 55 18 71\n            102 28 141 -22 20 -70 28 -99 16z" }),
        React__default['default'].createElement("path", { d: "M3543 718 c-29 -6 -52 -20 -77 -48 -62 -69 -58 -155 9 -220 30 -29\n            43 -34 95 -38 52 -4 66 -1 99 21 115 76 83 257 -50 286 -19 4 -53 3 -76 -1z" }),
        React__default['default'].createElement("path", { d: "M4315 695 c-52 -51 -16 -145 55 -145 43 0 65 14 80 49 36 88 -69 163\n            -135 96z" })));
};

var Box = styled__default['default'].div(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styledSystem.background, styledSystem.border, styledSystem.layout, styledSystem.position, styledSystem.space);
var templateObject_1$L;

var Flex = styled__default['default'](Box)(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), styledSystem.flexbox);
var templateObject_1$K;

var variants$2 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$2.INFO : _b;
    switch (variant) {
        case variants$2.DANGER:
            return theme.colors.failure;
        case variants$2.WARNING:
            return theme.colors.warning;
        case variants$2.SUCCESS:
            return theme.colors.success;
        case variants$2.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$2.INFO; }
    switch (variant) {
        case variants$2.DANGER:
            return Icon$19;
        case variants$2.WARNING:
            return Icon$1a;
        case variants$2.SUCCESS:
            return Icon$1b;
        case variants$2.INFO:
        default:
            return Icon$18;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$S, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$J, templateObject_2$g, templateObject_3$8, templateObject_4$4;

var Separator = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$U, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$I, templateObject_2$f;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$3.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$H;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$5.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$3.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$3.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary", colorKey: variant === variants$3.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$G;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow$1 = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 8px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 8px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$F;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$E;

var CardHeader = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$D;

var CardFooter = styled__default['default'].div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$C;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$B;

var scales$4 = {
    SM: "sm",
    MD: "md",
};

var getScale$2 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$4.SM:
            return "24px";
        case scales$4.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$2, getScale$2, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$4.MD,
};
var templateObject_1$A;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$4 = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container$4, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$z, templateObject_2$e;

var bunnyFall = styled.keyframes(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
styled__default['default'].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var module$1 = module;
var templateObject_1$y, templateObject_2$d;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$3;
var style = (_a$3 = {},
    _a$3[sizes.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$3[sizes.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$3[sizes.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$3[sizes.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$3);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$x;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$1 = styled__default['default'].div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$w;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper$1, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper$1, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$v, templateObject_2$c;

var scales$3 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b;
    switch (scale) {
        case scales$3.SM:
            return "32px";
        case scales$3.LG:
            return "48px";
        case scales$3.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled__default['default'].input(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$3.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$u;

var GridLayout$1 = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$t;

var GridLayout = styled__default['default'](GridLayout$1)(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$s;

var NotificationDotRoot = styled__default['default'].span(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled__default['default'].span(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React__default['default'].createElement(NotificationDotRoot, null,
        React.Children.map(children, function (child) { return React.cloneElement(child, props); }),
        React__default['default'].createElement(Dot, { show: show })));
};
var templateObject_1$r, templateObject_2$b;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$q;

var variants$1 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    POLYGON: "polygon",
    FAILURE: "failure",
};
var scales$1 = {
    MD: "md",
    SM: "sm",
};

var _a$2, _b;
var scaleVariants = (_a$2 = {},
    _a$2[scales$1.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a$2[scales$1.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a$2);
var styleVariants$1 = (_b = {},
    _b[variants$1.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants$1.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants$1.SUCCESS] = {
        backgroundColor: "success",
    },
    _b[variants$1.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants$1.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants$1.POLYGON] = {
        backgroundColor: "polygon",
    },
    _b[variants$1.FAILURE] = {
        backgroundColor: "failure",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants$1.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants$1[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: " + color + ";\n      background: transparent;\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled__default['default'].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"])), styledSystem.variant({
    prop: "scale",
    variants: scaleVariants,
}), styledSystem.variant({
    variants: styleVariants$1,
}), styledSystem.space, getOutlineStyles);
var templateObject_1$p;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$1.MD,
    outline: false,
};

var StyledLink$1 = styled__default['default'](Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$H, { color: "primary", ml: "4px" })));
};

var variants = {
    ROUND: "round",
    FLAT: "flat",
};

var _a$1;
var styleVariants = (_a$1 = {},
    _a$1[variants.ROUND] = {
        borderRadius: "32px",
    },
    _a$1[variants.FLAT] = {
        borderRadius: 0,
    },
    _a$1);

var Bar = styled__default['default'].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants.FLAT ? "0" : "32px");
}, styledSystem.variant({
    variants: styleVariants,
}), styledSystem.space);
var templateObject_1$n, templateObject_2$a;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$m;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants.ROUND : _b, _c = _a.primaryStep, primaryStep = _c === void 0 ? 0 : _c, _d = _a.secondaryStep, secondaryStep = _d === void 0 ? null : _d, _e = _a.showProgressBunny, showProgressBunny = _e === void 0 ? false : _e;
    return (React__default['default'].createElement(StyledProgress, { variant: variant },
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$A, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var bunnyHeadMain = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20y%3D%2218%22%20width%3D%2217%22%20height%3D%2210%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M7.50675%2023.7056C6.14677%2025.0656%207.73758%2027.2292%209.75419%2029.2458C11.7708%2031.2624%2013.9344%2032.8532%2015.2944%2031.4933C16.6543%2030.1333%2015.9641%2027.0691%2013.9475%2025.0525C11.9309%2023.0359%208.86673%2022.3457%207.50675%2023.7056Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M13.507%2021.706C12.1463%2023.0666%2013.7379%2025.2313%2015.7555%2027.2489C17.7731%2029.2665%2019.9378%2030.8581%2021.2984%2029.4974C22.6591%2028.1368%2021.9685%2025.0711%2019.9509%2023.0535C17.9333%2021.0359%2014.8676%2020.3453%2013.507%2021.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.7694%205.63421C11.8457%206.02664%2011.9158%206.4375%2011.9836%206.85716C11.6151%206.85766%2011.2482%206.87522%2010.8839%206.90895C10.6029%206.29464%2010.2694%205.67199%209.88441%205.05277C7.39613%201.05079%205.06199%200.901096%202.98861%202.01265C0.915239%203.12421%200.810677%205.89597%203.28297%208.59188C3.57049%208.90541%203.86254%209.23841%204.15744%209.58036C1.66027%2011.5156%200%2014.291%200%2017.2695C0%2022.8292%205.78518%2024%2012%2024C18.2148%2024%2024%2022.8292%2024%2017.2695C24%2013.8488%2021.8101%2010.6958%2018.6776%208.77602C18.8852%207.81022%2019%206.74856%2019%205.63421C19%201.17171%2017.159%200%2014.888%200C12.6171%200%2011.1155%202.27116%2011.7694%205.63421Z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cpath%20d%3D%22M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2212%22%20y1%3D%220%22%20x2%3D%2212%22%20y2%3D%2224%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyHeadMax = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20y%3D%2218%22%20width%3D%2217%22%20height%3D%2210%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M7.50675%2023.7056C6.14677%2025.0656%207.73758%2027.2292%209.75419%2029.2458C11.7708%2031.2624%2013.9344%2032.8532%2015.2944%2031.4933C16.6543%2030.1333%2015.9641%2027.0691%2013.9475%2025.0525C11.9309%2023.0359%208.86673%2022.3457%207.50675%2023.7056Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M13.507%2021.706C12.1463%2023.0666%2013.7379%2025.2313%2015.7555%2027.2489C17.7731%2029.2665%2019.9378%2030.8581%2021.2984%2029.4974C22.6591%2028.1368%2021.9685%2025.0711%2019.9509%2023.0535C17.9333%2021.0359%2014.8676%2020.3453%2013.507%2021.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.146%205.75159C12.2105%206.10896%2012.2703%206.48131%2012.3281%206.86164C12.2189%206.85865%2012.1095%206.85714%2012%206.85714C11.3803%206.85714%2010.7648%206.90539%2010.159%206.99779C9.87904%206.41458%209.55472%205.82246%209.18725%205.23145C6.69897%201.22947%204.53826%200.986793%202.67882%201.98366C0.819381%202.98052%200.856278%205.67644%203.26696%208.40538C3.58076%208.76061%203.90097%209.13983%204.2247%209.52859C1.69013%2011.4659%200%2014.2644%200%2017.2695C0%2022.8292%205.78518%2024%2012%2024C18.2148%2024%2024%2022.8292%2024%2017.2695C24%2013.8658%2021.8318%2010.7272%2018.7243%208.80476C18.9022%207.86044%2019%206.83019%2019%205.75159C19%201.19612%2017.2549%200%2015.1022%200C12.9495%200%2011.5261%202.31847%2012.146%205.75159Z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20d%3D%22M9.50467%2015.0634C8.94352%2013.4456%206.79685%2013.4456%206.08131%2015.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M18.8894%2015.0634C18.3283%2013.4456%2016.1816%2013.4456%2015.4661%2015.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M11.4505%2019.0787C11.4505%2020.5097%2013.955%2020.5097%2013.955%2019.0787%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2212%22%20y1%3D%220%22%20x2%3D%2212%22%20y2%3D%2224%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var SliderContainer = styled__default['default'](Box)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  position: relative;\n  height: 48px;\n"], ["\n  position: relative;\n  height: 48px;\n"])));
var SliderLabel = styled__default['default'].label(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  margin-left: 16px; // offset the bunny butt width\n  left: calc(", "%);\n"], ["\n  position: absolute;\n  bottom: 0;\n  margin-left: 16px; // offset the bunny butt width\n  left: calc(", "%);\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
styled__default['default'].img(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  position: absolute;\n"], ["\n  position: absolute;\n"])));
var BunnySlider = styled__default['default'].div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: 100%;\n"], ["\n  position: absolute;\n  left: 14px;\n  width: 100%;\n"])));
var StyledInput = styled__default['default'].input(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  height: 32px;\n  position: relative;\n  cursor: pointer;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transition: 0.1s all;\n    transform: translate(-2px, -2px);\n    // custom moz reset\n    background-color: transparent;\n    border: 0;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-ms-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n"], ["\n  height: 32px;\n  position: relative;\n  cursor: pointer;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transition: 0.1s all;\n    transform: translate(-2px, -2px);\n    // custom moz reset\n    background-color: transparent;\n    border: 0;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-ms-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n"])), function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
}, function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
}, function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
});
var BarBackground = styled__default['default'].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  top: 18px;\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  top: 18px;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
});
var BarProgress = styled__default['default'].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  width: ", ";\n  height: 10px;\n  top: 18px;\n\n  background: ", ";\n"], ["\n  position: absolute;\n  width: ", ";\n  height: 10px;\n  top: 18px;\n\n  background: ", ";\n"])), function (_a) {
    var progress = _a.progress, isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? "calc(100% - 16px)" : progress + "%");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var templateObject_1$l, templateObject_2$9, templateObject_3$7, templateObject_4$3, templateObject_5$3, templateObject_6, templateObject_7;

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 32", width: 15, height: 32 }, props),
        React__default['default'].createElement("path", { d: "M9.58803 20.8649C7.72935 21.3629 8.02539 24.0334 8.76388 26.7895C9.50238 29.5456 10.5812 32.0062 12.4399 31.5082C14.2986 31.0102 15.2334 28.0099 14.4949 25.2538C13.7564 22.4978 11.4467 20.3669 9.58803 20.8649Z", fill: "#0098A1" }),
        React__default['default'].createElement("path", { d: "M1 24.4516C1 20.8885 3.88849 18 7.45161 18H15V28H4.54839C2.58867 28 1 26.4113 1 24.4516Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M6.11115 17.2246C6.79693 18.4124 5.77784 19.3343 4.52793 20.0559C3.27802 20.7776 1.97011 21.1992 1.28433 20.0114C0.598546 18.8236 1.1635 17.1151 2.41341 16.3935C3.66332 15.6718 5.42537 16.0368 6.11115 17.2246Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M1.64665 23.6601C0.285995 25.0207 1.87759 27.1854 3.89519 29.203C5.91279 31.2206 8.07743 32.8122 9.43808 31.4515C10.7987 30.0909 10.1082 27.0252 8.09058 25.0076C6.07298 22.99 3.0073 22.2994 1.64665 23.6601Z", fill: "#1FC7D4" })));
};

// We need to adjust the offset as the percentage increases, as 100% really is 100% - label width. The number 10 is arbitrary, but seems to work...
var MOVING_SLIDER_LABEL_OFFSET_FACTOR = 10;
var Slider = function (_a) {
    var min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, props = __rest(_a, ["min", "max", "value", "onValueChanged", "valueLabel"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseInt(target.value, 10));
    };
    var progressPercentage = (value / max) * 100;
    var isCurrentValueMaxValue = value === max;
    var labelOffset = progressPercentage - progressPercentage / MOVING_SLIDER_LABEL_OFFSET_FACTOR;
    return (React__default['default'].createElement(SliderContainer, __assign({}, props),
        React__default['default'].createElement(Icon$p, { style: { position: "absolute" } }),
        React__default['default'].createElement(BunnySlider, null,
            React__default['default'].createElement(BarBackground, null),
            React__default['default'].createElement(BarProgress, { isCurrentValueMaxValue: isCurrentValueMaxValue, progress: progressPercentage }),
            React__default['default'].createElement(StyledInput, { type: "range", min: min, max: max, value: value, onChange: handleChange, isCurrentValueMaxValue: isCurrentValueMaxValue })),
        valueLabel && React__default['default'].createElement(SliderLabel, { progress: labelOffset }, valueLabel)));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 256 256" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z", fill: "#464649" }),
        React__default['default'].createElement("path", { d: "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z", fill: "#464649" }),
        React__default['default'].createElement("path", { d: "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z", fill: "#979797" }),
        React__default['default'].createElement("path", { d: "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z", fill: "#464649" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z", fill: "#737373" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z", fill: "#606063" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("circle", { cx: "12", cy: "12", r: "12", fill: "#373737" }),
        React__default['default'].createElement("path", { d: "M15.3302 12.6702C16.1863 12.6702 16.9853 12.6702 17.8131 12.6702C17.6974 13.2244 17.5892 13.7432 17.4799 14.2619C17.4422 14.441 17.3871 14.6181 17.3677 14.7992C17.3488 14.9753 17.2634 15.0133 17.105 15.0118C16.4267 15.0058 15.7478 15.0188 15.07 15.0048C14.8674 15.0008 14.8023 15.0788 14.7636 15.2619C14.5257 16.3839 14.2779 17.504 14.0336 18.625C14.0252 18.6645 14.0147 18.7041 13.9988 18.7676C13.9159 18.7676 13.835 18.7676 13.7545 18.7676C11.355 18.7646 8.95596 18.7636 6.55643 18.7571C6.11 18.7556 5.66356 18.7306 5.21713 18.7161C5.09497 18.7121 4.97628 18.7041 5.00409 18.5255C5.1193 17.7871 5.23302 17.0488 5.3517 16.2824C5.83886 16.2824 6.30019 16.2849 6.76152 16.2819C8.44944 16.2709 10.1369 16.2534 11.8248 16.2514C12.0448 16.2509 12.1202 16.1818 12.1629 15.9682C12.367 14.9498 12.592 13.9358 12.806 12.9193C13.1055 11.4961 13.4054 10.0729 13.6949 8.64723C13.7351 8.44814 13.8042 8.3806 14.0157 8.3821C15.7285 8.39261 17.4412 8.38811 19.1539 8.38811C19.2423 8.38811 19.3312 8.38811 19.4405 8.38811C19.2831 9.13947 19.1291 9.86131 18.9816 10.5847C18.9469 10.7562 18.8227 10.7242 18.712 10.7242C17.8186 10.7257 16.9247 10.7327 16.0314 10.7197C15.8039 10.7162 15.7086 10.7933 15.6684 11.0119C15.5681 11.5476 15.4509 12.0814 15.3302 12.6702Z", fill: "#FEC803" }),
        React__default['default'].createElement("path", { d: "M10.2371 8.42114C11.0367 8.42114 11.8178 8.42114 12.6317 8.42114C12.6084 8.59172 12.5964 8.73779 12.5676 8.87986C12.2344 10.5257 11.8977 12.1704 11.5635 13.8157C11.4707 14.2719 11.3783 14.7282 11.2934 15.1859C11.2641 15.343 11.1956 15.4105 11.0292 15.4095C10.3921 15.406 9.75496 15.414 9.11783 15.4205C8.94452 15.422 8.85613 15.376 8.89735 15.1704C9.34428 12.9373 9.78525 10.7027 10.2371 8.42114Z", fill: "#FEC803" }),
        React__default['default'].createElement("path", { d: "M9.02652 10.4357C8.93415 10.8964 8.84874 11.3256 8.76184 11.7543C8.53092 12.8934 8.29504 14.0314 8.07158 15.1714C8.03731 15.3455 7.96878 15.4101 7.79597 15.4101C7.14295 15.4086 6.48994 15.4126 5.83742 15.4246C5.61941 15.4286 5.55734 15.3335 5.59856 15.1334C5.71923 14.5481 5.83245 13.9619 5.95908 13.3781C6.15424 12.4777 6.36082 11.5797 6.55499 10.6788C6.59422 10.4967 6.66771 10.4252 6.86635 10.4302C7.49404 10.4457 8.12273 10.4362 8.75091 10.4362C8.83136 10.4357 8.9123 10.4357 9.02652 10.4357Z", fill: "#FEC803" }),
        React__default['default'].createElement("path", { d: "M13.9745 7.81787C14.0893 7.18307 14.195 6.59679 14.3033 6C15.143 6 15.9664 6 16.7982 6C16.6974 6.57077 16.6 7.13504 16.4933 7.69731C16.4843 7.74384 16.4128 7.81237 16.3696 7.81237C15.586 7.81987 14.8019 7.81787 13.9745 7.81787Z", fill: "#FEC803" })));
};

var rotate = styled.keyframes(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = styled.keyframes(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$3 = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
styled__default['default'](Icon$n)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
styled__default['default'](Icon$o)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b, img = _a.img;
    return (React__default['default'].createElement(Container$3, null,
        React__default['default'].createElement("img", { src: img, width: size + "px" })));
};
var templateObject_1$k, templateObject_2$8, templateObject_3$6, templateObject_4$2, templateObject_5$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$j, templateObject_2$7, templateObject_3$5, templateObject_4$1, templateObject_5$1;

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales$4.MD : _b;
        return scaleKeyValues[scale][property];
    };
};
var Handle = styled__default['default'].div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled__default['default'].input(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$i, templateObject_2$6, templateObject_3$4;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked, scale: scale },
        React__default['default'].createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales.MD,
};

var byTextAscending = function (getTextProperty) {
    return function (objectA, objectB) {
        var upperA = getTextProperty(objectA).toUpperCase();
        var upperB = getTextProperty(objectB).toUpperCase();
        if (upperA < upperB) {
            return -1;
        }
        if (upperA > upperB) {
            return 1;
        }
        return 0;
    };
};
var byTextDescending = function (getTextProperty) {
    return function (objectA, objectB) {
        var upperA = getTextProperty(objectA).toUpperCase();
        var upperB = getTextProperty(objectB).toUpperCase();
        if (upperA > upperB) {
            return -1;
        }
        if (upperA < upperB) {
            return 1;
        }
        return 0;
    };
};

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () {
    return function (state, action) {
        var rows = [];
        var nextPage = 0;
        var prevPage = 0;
        var isAscending = null;
        var sortedRows = [];
        var columnCopy = [];
        var filteredRows = [];
        var selectedRowsById = {};
        var stateCopy = __assign({}, state);
        var rowIds = {};
        switch (action.type) {
            case "SET_ROWS":
                rows = __spreadArray([], action.data);
                // preserve sorting if a sort is already enabled when data changes
                if (state.sortColumn) {
                    rows = sortByColumn(action.data, state.sortColumn, state.columns);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                columnCopy = state.columns.map(function (column) {
                    if (state.sortColumn === column.name) {
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: column.sorted.asc,
                            } });
                    }
                    return column;
                });
                return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
            case "NEXT_PAGE":
                nextPage = state.pagination.page + 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
            case "PREV_PAGE":
                prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
            case "TOGGLE_SORT":
                if (!(action.columnName in state.columnsByName)) {
                    throw new Error("Invalid column, " + action.columnName + " not found");
                }
                // loop through all columns and set the sort parameter to off unless
                // it's the specified column (only one column at a time for )
                columnCopy = state.columns.map(function (column) {
                    // if the row was found
                    if (action.columnName === column.name) {
                        if (action.isAscOverride !== undefined) {
                            // force the sort order
                            isAscending = action.isAscOverride;
                        }
                        else {
                            // if it's undefined, start by setting to ascending, otherwise toggle
                            isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                        }
                        if (column.sort) {
                            sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                            // default to sort by string
                        }
                        else {
                            sortedRows = isAscending
                                ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                                : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                        }
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: isAscending,
                            } });
                    }
                    // set sorting to false for all other columns
                    return __assign(__assign({}, column), { sorted: {
                            on: false,
                            asc: false,
                        } });
                });
                return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
            case "GLOBAL_FILTER":
                filteredRows = action.filter(state.originalRows);
                selectedRowsById = {};
                state.selectedRows.forEach(function (row) {
                    var _a;
                    selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
                });
                return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                        return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                    }), filterOn: true });
            case "SELECT_ROW":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
                stateCopy.toggleAllState =
                    stateCopy.selectedRows.length === stateCopy.rows.length
                        ? (stateCopy.toggleAllState = true)
                        : (stateCopy.toggleAllState = false);
                return stateCopy;
            case "SEARCH_STRING":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                    return (row.cells.filter(function (cell) {
                        if (cell.value.includes(action.searchString)) {
                            return true;
                        }
                        return false;
                    }).length > 0);
                });
                return stateCopy;
            case "TOGGLE_ALL":
                if (state.selectedRows.length < state.rows.length) {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = true;
                        return __assign(__assign({}, row), { selected: true });
                    });
                    stateCopy.toggleAllState = true;
                }
                else {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = false;
                        return __assign(__assign({}, row), { selected: false });
                    });
                    stateCopy.toggleAllState = false;
                }
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
                return stateCopy;
            default:
                throw new Error("Invalid reducer action");
        }
    };
};
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(254, 200, 3, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    React.useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var StyledModal = styled__default['default'].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 8px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 8px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled__default['default'](Flex)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React__default['default'].createElement(StyledModal, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$16, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$S, { color: "primary" })))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$h, templateObject_2$5, templateObject_3$3;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #343434;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #343434;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$g;

var ModalWrapper = styled__default['default'].div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$f;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React__default['default'].createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo$2 = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6020 10381 c0 -6 26 -23 58 -37 43 -20 79 -28 145 -32 58 -3 87 -1\n87 6 0 16 -20 25 -75 34 -27 4 -70 12 -95 17 -112 23 -120 24 -120 12z" }),
        React__default['default'].createElement("path", { d: "M5743 10253 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" }),
        React__default['default'].createElement("path", { d: "M3502 10190 c-13 -11 -21 -24 -17 -30 9 -15 25 -12 25 4 0 7 10 21\n23 29 15 11 17 16 7 16 -8 0 -25 -8 -38 -19z" }),
        React__default['default'].createElement("path", { d: "M3818 10203 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M4060 10200 c-24 -15 -7 -18 20 -3 14 7 18 13 10 13 -8 0 -22 -4 -30\n-10z" }),
        React__default['default'].createElement("path", { d: "M3598 10183 c-10 -2 -18 -9 -18 -14 0 -12 3 -12 36 6 28 14 19 18\n-18 8z" }),
        React__default['default'].createElement("path", { d: "M4020 10179 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0\n-10 -5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M3869 10164 c-12 -14 -11 -16 5 -13 11 2 21 10 24 17 5 17 -13 15\n-29 -4z" }),
        React__default['default'].createElement("path", { d: "M3373 10140 c-18 -11 -33 -24 -33 -30 0 -5 -11 -10 -24 -10 -13 0\n-30 -8 -37 -17 -13 -15 -11 -16 18 -10 34 7 109 54 117 75 7 17 -4 15 -41 -8z" }),
        React__default['default'].createElement("path", { d: "M3387 10095 c-4 -8 -30 -26 -59 -41 -29 -15 -69 -40 -89 -55 -20 -16\n-45 -29 -55 -29 -14 0 -9 9 21 40 44 45 38 53 -11 15 -18 -14 -37 -25 -42 -25\n-5 0 -22 -12 -37 -26 -17 -15 -35 -24 -46 -21 -15 4 -21 -2 -27 -26 -7 -24\n-14 -31 -28 -29 -11 3 -27 -7 -41 -24 -24 -31 -45 -25 -25 6 8 13 8 20 2 20\n-9 0 -49 -22 -70 -38 -2 -1 2 -7 9 -11 10 -7 8 -14 -10 -32 -24 -24 -41 -11\n-19 16 28 34 -21 13 -85 -36 -70 -53 -122 -79 -142 -72 -18 6 -16 -16 1 -23 8\n-3 17 -13 20 -21 5 -13 4 -14 -8 -3 -13 10 -20 7 -40 -15 -21 -22 -23 -30 -13\n-46 10 -15 7 -23 -18 -49 -28 -30 -55 -39 -55 -20 0 6 9 18 20 27 30 26 24 38\n-7 18 -16 -10 -22 -12 -15 -4 6 7 12 22 12 33 -1 18 -2 19 -13 6 -15 -19 -68\n-54 -86 -56 -7 -2 -20 -13 -29 -26 -9 -13 -38 -45 -64 -71 -26 -26 -55 -62\n-64 -80 -29 -54 -68 -98 -101 -112 -18 -8 -33 -19 -33 -24 0 -6 -4 -11 -10\n-11 -19 0 -10 19 26 53 20 19 35 40 33 46 -3 7 -41 -18 -91 -61 -48 -40 -99\n-81 -113 -91 -14 -10 -25 -23 -25 -30 0 -7 -10 -19 -22 -27 -13 -8 -62 -53\n-110 -100 -47 -47 -92 -90 -100 -97 -39 -35 -98 -102 -98 -112 0 -6 -5 -11\n-11 -11 -18 0 -219 -231 -219 -252 0 -6 -18 -30 -40 -54 -22 -24 -40 -50 -40\n-57 0 -7 -8 -22 -18 -33 -33 -36 -162 -245 -162 -262 0 -4 -32 -59 -71 -122\n-138 -222 -279 -558 -388 -919 -16 -53 -43 -131 -60 -173 -46 -116 -85 -290\n-96 -428 -2 -19 -13 -71 -24 -115 -12 -44 -38 -204 -58 -355 -32 -243 -37\n-301 -37 -500 -1 -356 20 -670 64 -933 16 -94 49 -295 75 -446 47 -283 54\n-312 102 -421 32 -73 46 -117 63 -205 7 -33 18 -69 25 -80 7 -11 15 -34 19\n-51 4 -16 16 -45 28 -64 12 -19 37 -64 56 -100 19 -36 47 -83 63 -105 16 -22\n42 -66 59 -99 17 -32 40 -60 49 -63 22 -5 38 -37 57 -111 8 -29 21 -64 30 -77\n9 -14 20 -44 25 -67 6 -23 19 -48 29 -55 11 -8 20 -21 20 -28 0 -19 83 -168\n116 -208 58 -71 100 -120 113 -130 51 -42 142 -143 147 -163 3 -12 12 -25 20\n-28 17 -6 19 -46 3 -46 -7 0 14 -26 46 -57 31 -32 64 -70 73 -85 9 -16 22 -28\n28 -28 6 0 24 -16 38 -35 15 -19 34 -35 42 -35 23 0 194 -174 194 -197 0 -12\n11 -28 25 -37 14 -9 46 -38 72 -64 26 -26 51 -48 55 -48 5 -1 13 -2 18 -3 6 0\n10 -4 10 -9 0 -27 163 -175 410 -371 41 -33 89 -72 105 -87 17 -15 66 -44 110\n-64 44 -21 91 -47 104 -59 13 -11 30 -21 37 -21 7 0 30 -12 51 -26 65 -44 151\n-85 155 -72 5 13 57 -12 77 -36 8 -9 18 -16 24 -16 5 0 25 -11 43 -25 18 -14\n39 -25 46 -25 26 0 88 -27 110 -47 25 -21 95 -53 187 -83 31 -11 74 -26 96\n-34 26 -9 44 -11 52 -4 8 6 21 5 40 -5 15 -7 61 -24 100 -36 40 -12 75 -26 78\n-32 11 -17 119 -61 160 -65 22 -2 51 -8 65 -14 14 -5 67 -14 119 -19 51 -6 98\n-14 105 -20 6 -5 67 -14 136 -21 68 -6 129 -14 134 -18 14 -8 67 -3 80 7 7 6\n19 4 30 -5 27 -20 64 -18 77 5 10 15 18 17 48 9 20 -5 46 -12 57 -15 12 -3 24\n0 28 5 3 5 -5 13 -18 16 -24 6 -40 31 -30 47 3 5 15 3 27 -6 24 -17 51 -20 42\n-6 -7 13 96 25 140 17 27 -5 35 -4 35 8 0 18 33 30 60 21 15 -5 22 -1 29 17 6\n13 10 17 10 11 1 -17 39 -39 78 -48 28 -5 32 -4 27 9 -3 9 -15 16 -26 16 -30\n0 -11 20 20 21 22 0 23 2 9 8 -17 6 -17 8 -3 20 12 10 19 11 30 2 11 -9 17 -6\n27 19 9 20 20 29 34 28 11 0 31 0 45 1 24 2 23 3 -8 16 -18 8 -31 19 -27 25\n11 18 59 11 123 -20 69 -33 82 -36 82 -19 0 16 -41 47 -73 55 -27 5 -29 9 -25\n45 4 46 0 48 -32 14 -13 -14 -31 -25 -40 -25 -27 0 -51 35 -48 66 2 24 -1 30\n-19 32 -13 2 -23 -1 -23 -7 0 -6 -7 -11 -15 -11 -18 0 -20 31 -3 48 7 7 20 12\n31 12 32 0 16 34 -17 37 -16 1 -35 4 -43 7 -7 3 -13 1 -13 -4 0 -6 5 -10 10\n-10 6 0 10 -11 10 -25 0 -23 -3 -25 -49 -25 -28 0 -53 5 -56 11 -4 6 -13 8\n-20 5 -15 -5 -49 39 -41 53 10 15 -49 -2 -61 -18 -6 -9 -15 -13 -19 -9 -4 4\n-1 14 6 23 8 10 9 15 1 15 -6 0 -11 7 -11 15 0 10 -10 15 -30 15 -30 0 -42 21\n-20 35 7 4 7 13 0 26 -12 22 -5 23 39 8 65 -23 152 26 175 99 8 25 36 30 36 7\n0 -10 7 -15 18 -13 12 2 18 -5 20 -24 2 -18 -1 -28 -10 -28 -14 0 -68 -63 -68\n-79 0 -6 6 -11 13 -11 8 0 7 -3 -3 -10 -10 -6 -12 -12 -4 -20 15 -15 104 -1\n104 16 0 8 9 14 20 14 11 0 20 5 20 10 0 17 -33 11 -55 -10 -17 -16 -27 -18\n-45 -12 l-24 9 23 6 c18 4 21 10 15 33 -7 26 -6 27 23 21 20 -4 38 0 53 10 17\n12 25 13 28 5 2 -8 28 -12 72 -12 53 0 69 -4 74 -16 3 -9 4 -20 0 -25 -3 -5 0\n-9 5 -9 6 0 11 11 11 25 0 14 5 25 10 25 13 0 59 51 60 66 0 6 7 25 15 42 9\n17 18 53 22 81 7 63 18 78 63 86 49 8 59 -3 70 -71 23 -144 30 -164 60 -179\n34 -18 152 -20 199 -4 57 20 62 53 32 194 -11 50 -23 128 -27 175 -3 47 -11\n93 -16 103 -5 10 -14 52 -19 95 -14 103 -25 174 -38 250 -12 70 -26 155 -36\n222 -8 56 -41 215 -61 296 -12 48 -21 64 -45 78 -16 9 -29 21 -29 26 0 15 39\n32 60 25 22 -7 35 9 17 23 -8 7 -11 27 -9 52 3 34 8 41 21 37 18 -4 21 4 22\n51 1 12 5 22 10 22 5 0 9 7 9 15 0 8 -7 15 -16 15 -10 0 -14 5 -10 15 3 9 -3\n20 -14 27 -26 17 -25 45 3 68 19 17 20 21 9 40 -11 19 -11 25 3 40 10 11 12\n20 6 24 -5 3 4 20 20 36 17 16 27 34 24 40 -9 15 -25 2 -18 -15 3 -10 -1 -15\n-14 -15 -13 0 -22 11 -28 33 -8 26 -16 33 -42 35 -45 4 -60 25 -45 65 10 25 9\n34 -2 45 -14 14 -41 8 -31 -8 3 -4 -2 -13 -10 -20 -22 -18 -19 -50 5 -50 24 0\n26 -13 4 -31 -11 -9 -14 -22 -10 -43 6 -28 5 -28 -12 -13 -14 13 -21 14 -30 5\n-7 -7 -12 -17 -12 -24 0 -6 -20 -21 -45 -33 -25 -12 -45 -26 -45 -31 0 -6 -11\n-10 -25 -10 -15 0 -25 6 -25 15 0 8 -16 19 -38 25 -68 18 -78 41 -132 285 -5\n22 -16 72 -25 110 -8 39 -28 126 -43 194 -15 69 -31 126 -37 128 -5 2 -18 -30\n-28 -70 -18 -74 -22 -115 -10 -104 9 9 33 -12 33 -29 0 -8 -7 -14 -15 -14 -8\n0 -15 5 -15 11 0 22 -24 2 -32 -27 -11 -37 -85 -319 -104 -398 -8 -33 -20 -66\n-26 -73 -11 -14 -184 -19 -204 -5 -13 8 -34 78 -58 192 -9 41 -30 118 -46 170\n-16 52 -31 107 -35 123 -3 15 -12 27 -20 27 -18 0 -20 37 -3 42 12 4 11 12\n-27 223 -12 67 -31 152 -77 350 -21 91 -34 195 -25 195 3 0 41 7 84 15 43 8\n95 15 116 15 26 0 37 4 37 15 0 8 -7 15 -15 15 -19 0 -19 9 0 34 11 15 22 17\n55 12 32 -5 40 -3 40 9 0 13 3 13 19 3 16 -10 23 -9 39 5 17 16 20 16 32 2 15\n-18 10 -25 -40 -52 l-36 -18 31 -21 c30 -20 33 -20 53 -3 14 11 20 23 16 34\n-5 13 -2 16 12 13 11 -2 19 -12 19 -23 0 -13 8 -21 23 -23 22 -3 23 -4 7 -28\n-17 -26 -13 -84 6 -84 5 0 9 -9 9 -20 0 -24 -38 -28 -46 -5 -10 25 -34 17 -34\n-10 l0 -26 -25 26 c-27 26 -40 31 -49 16 -8 -12 -62 -7 -81 9 -20 17 -20 3 4\n-118 11 -53 27 -137 36 -187 9 -49 26 -124 37 -165 11 -41 25 -97 29 -125 5\n-27 13 -63 17 -80 l9 -30 10 35 c29 95 86 379 88 440 1 25 6 56 12 70 6 14 14\n50 18 80 10 80 35 149 57 161 15 8 17 14 8 24 -14 17 5 31 23 16 17 -14 124\n-23 132 -12 3 5 -4 16 -16 24 -18 13 -20 21 -14 57 l7 41 -45 -32 c-40 -28\n-50 -31 -91 -25 -33 5 -51 15 -66 34 -11 15 -24 32 -29 38 -5 6 -22 38 -39 72\n-17 33 -42 78 -56 99 -14 20 -26 43 -26 50 0 12 -13 17 -32 14 -5 0 -8 13 -8\n30 0 31 -19 69 -152 307 -37 67 -68 124 -68 126 0 2 -22 42 -50 90 -27 48 -50\n89 -50 92 0 2 -10 21 -23 42 -13 20 -45 78 -72 127 -26 50 -55 104 -65 120\n-45 77 -252 464 -385 720 -49 94 -106 201 -127 238 -21 38 -38 71 -38 74 0 3\n-33 66 -74 141 -40 76 -104 196 -141 267 -38 72 -81 150 -96 175 -27 44 -28\n44 -37 20 -5 -14 -13 -59 -16 -100 -4 -41 -11 -100 -16 -130 -48 -299 -64\n-548 -90 -1365 -6 -165 -13 -335 -16 -377 -6 -84 1 -95 34 -53 39 50 90 42\n168 -25 56 -50 68 -68 54 -85 -14 -17 -50 -21 -50 -5 0 6 -6 10 -13 10 -18 0\n-37 -43 -37 -83 0 -46 -13 -62 -37 -49 -12 7 -24 7 -29 2 -5 -5 -34 -13 -64\n-17 l-55 -8 -7 -80 c-12 -138 -27 -512 -28 -705 0 -102 -7 -243 -16 -315 -8\n-71 -19 -173 -24 -225 -12 -136 -45 -202 -133 -257 -59 -37 -111 -53 -227 -68\n-268 -37 -542 -2 -628 78 -56 52 -67 92 -65 227 2 137 15 277 38 415 9 55 19\n226 25 445 5 195 15 384 21 420 16 99 67 660 84 920 4 58 8 123 10 145 7 93\n16 265 25 490 6 151 18 284 30 360 42 244 48 305 60 520 6 121 15 267 20 325\n21 247 32 520 24 620 -5 58 -7 114 -6 125 3 33 20 173 36 290 23 177 44 675\n29 675 -4 0 -32 -23 -61 -50 -30 -28 -56 -50 -59 -50 -2 0 -2 14 2 30 4 19 3\n30 -4 30 -6 0 -11 7 -11 15 0 8 -9 15 -20 15 -11 0 -20 4 -20 8 0 5 9 17 20\n27 11 10 20 26 20 35 0 10 7 23 15 30 8 7 15 23 15 36 0 12 5 26 10 29 6 3 10\n17 10 31 0 13 5 24 10 24 6 0 10 -9 10 -20 0 -27 12 -25 40 5 13 14 32 25 41\n25 10 0 25 14 34 30 15 30 15 30 -10 30 -30 0 -85 -26 -85 -40 0 -6 -8 -10\n-17 -10 -24 -1 -56 -28 -79 -68 -11 -18 -30 -35 -44 -39 -14 -3 -33 -12 -42\n-21 -20 -17 -48 -10 -48 12 0 16 9 25 65 71 20 16 46 47 57 67 12 21 24 38 28\n38 3 0 14 16 24 35 23 42 36 45 36 8 l0 -26 25 23 c33 31 39 55 21 82 -11 16\n-13 25 -4 35 13 16 44 17 53 3 5 -8 11 -8 20 0 7 5 34 12 61 13 62 4 111 32\n118 69 4 19 13 29 31 34 28 7 29 8 15 34 -7 13 -7 21 1 25 6 4 13 -3 16 -14 5\n-20 7 -21 24 -5 10 9 22 13 28 10 5 -3 22 -1 37 4 21 8 29 8 35 -2 5 -8 8 -2\n6 17 -1 21 3 30 16 33 10 2 17 0 16 -5 -1 -4 -1 -18 0 -31 2 -34 26 -21 27 14\n1 41 22 77 40 70 22 -8 31 25 10 36 -17 9 -17 11 0 29 9 10 25 19 34 19 10 0\n20 7 24 15 7 18 33 20 38 3 3 -7 11 2 19 20 8 19 25 36 41 41 47 16 31 20 -27\n6 -46 -10 -55 -10 -55 1 0 18 -16 18 -23 -1z m-107 -113 c0 -21 -18 -42 -37\n-42 -18 0 -16 20 4 42 21 23 33 23 33 0z m-110 -26 c0 -3 -4 -8 -10 -11 -5 -3\n-10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-150 -116 c0 -5 7 -7 15 -4 8\n4 15 1 15 -5 0 -6 -4 -11 -10 -11 -5 0 -10 -6 -10 -12 0 -7 -12 -21 -26 -31\nl-25 -19 7 39 c4 21 9 41 11 46 6 10 23 9 23 -3z m-118 -70 c-45 -32 -52 -35\n-52 -21 0 12 61 51 79 51 8 0 -5 -13 -27 -30z m48 -24 c0 -7 -11 -16 -25 -19\n-25 -4 -25 -4 -9 14 20 22 34 24 34 5z m-70 -41 c-7 -8 -22 -14 -34 -14 -20 1\n-20 2 -1 6 11 3 24 9 30 14 15 14 19 10 5 -6z m-110 -30 c0 -8 -7 -15 -15 -15\n-16 0 -20 12 -8 23 11 12 23 8 23 -8z m-58 -41 c-24 -17 -39 -14 -27 5 3 6 16\n11 28 11 l21 0 -22 -16z m-226 -119 c-7 -18 -26 -20 -26 -2 0 18 24 41 28 27\n2 -6 1 -17 -2 -25z m-146 -94 c-11 -21 -30 -37 -30 -25 0 8 30 44 37 44 2 0\n-1 -9 -7 -19z m77 -53 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z\nm70 5 c-9 -9 -19 -14 -23 -11 -10 10 6 28 24 28 15 0 15 -1 -1 -17z m-354\n-280 c-35 -57 -63 -80 -63 -51 0 14 60 78 72 78 5 0 1 -12 -9 -27z m-103 -23\nc0 -14 -49 -44 -58 -35 -4 3 4 15 17 26 26 21 41 24 41 9z m670 -14 c0 -2 -6\n-16 -14 -30 -12 -24 -14 -25 -19 -7 -2 11 0 24 6 30 11 11 27 15 27 7z m-550\n-20 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z\nm-39 -87 c-10 -23 -10 -23 -10 7 -1 17 2 34 7 38 11 12 14 -18 3 -45z m619\n-19 c0 -11 -7 -20 -15 -20 -18 0 -19 12 -3 28 16 16 18 15 18 -8z m-758 -32\nc-7 -7 -12 -20 -12 -30 0 -18 -11 -24 -23 -12 -10 10 15 54 32 54 12 0 12 -3\n3 -12z m-58 -83 c-4 -8 -8 -15 -10 -15 -2 0 -4 7 -4 15 0 8 4 15 10 15 5 0 7\n-7 4 -15z m-254 -90 c0 -8 -77 -85 -84 -85 -10 0 10 32 39 63 23 24 45 35 45\n22z m-10 -95 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4\n-10z m740 -45 c0 -8 -7 -15 -15 -15 -16 0 -20 12 -8 23 11 12 23 8 23 -8z\nm-334 -97 c-3 -7 -9 -21 -12 -30 -4 -10 -13 -18 -20 -18 -18 0 -18 10 2 38 16\n23 40 31 30 10z m674 -58 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11\n10 2 0 4 -4 4 -10z m-327 -106 c8 -9 -11 -44 -23 -44 -6 0 -10 8 -10 18 0 27\n18 41 33 26z m-43 -94 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10\n6 0 10 -4 10 -10z m280 -95 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15\n15 15 8 0 15 -7 15 -15z m-510 -64 c0 -20 -17 -37 -27 -28 -7 8 7 47 18 47 5\n0 9 -9 9 -19z m-210 -211 c0 -11 -4 -20 -10 -20 -5 0 -10 9 -10 20 0 11 5 20\n10 20 6 0 10 -9 10 -20z m214 -46 c10 -25 7 -34 -9 -34 -9 0 -15 9 -15 25 0\n28 15 34 24 9z m-47 -110 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13\n-5z m-325 -106 c-9 -9 -12 -7 -12 12 0 19 3 21 12 12 9 -9 9 -15 0 -24z m268\n23 c0 -6 -4 -13 -10 -16 -5 -3 -10 1 -10 9 0 9 5 16 10 16 6 0 10 -4 10 -9z\nm-13 -183 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-587 -1748\nc0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m44\n-156 c20 -19 19 -94 -1 -101 -38 -15 -72 74 -41 105 16 16 23 15 42 -4z m-82\n-136 c-7 -7 -12 -8 -12 -2 0 14 12 26 19 19 2 -3 -1 -11 -7 -17z m845 -500\nc-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m1537 -60 c-3 -5 -14 -2\n-26 8 -18 17 -19 19 -1 31 15 12 18 11 25 -8 5 -11 5 -25 2 -31z m821 -268 c3\n-5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m440 -200\nc3 -5 -1 -10 -9 -10 -9 0 -16 5 -16 10 0 6 4 10 9 10 6 0 13 -4 16 -10z\nm-2672 -70 c3 -13 0 -20 -9 -20 -8 0 -14 9 -14 20 0 11 4 20 9 20 5 0 11 -9\n14 -20z m1705 -55 c5 -22 -18 -37 -35 -23 -17 13 -17 35 0 41 19 8 32 2 35\n-18z m522 -20 c0 -8 -4 -15 -9 -15 -13 0 -22 16 -14 24 11 11 23 6 23 -9z\nm-60 -45 c0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9 0 16 -4 16\n-10z m758 -81 c3 -18 -29 -31 -48 -19 -7 4 -10 16 -7 25 9 21 51 16 55 -6z\nm-780 -172 c2 -10 -3 -17 -12 -17 -10 0 -16 9 -16 21 0 24 23 21 28 -4z m572\n-13 c0 -8 -9 -14 -20 -14 -19 0 -27 19 -14 33 10 9 34 -4 34 -19z m-960 -264\nc0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z\nm435 -31 c11 -17 0 -20 -21 -4 -17 13 -17 14 -2 15 9 0 20 -5 23 -11z m115\n-54 c0 -27 -8 -29 -59 -19 -17 4 -31 13 -31 21 0 8 4 11 10 8 5 -3 18 -1 27 4\n32 19 53 13 53 -14z m155 -164 c3 -5 1 -12 -5 -16 -5 -3 -10 1 -10 9 0 18 6\n21 15 7z m-1276 -145 c9 -11 9 -15 -1 -19 -19 -6 -38 3 -38 19 0 18 24 18 39\n0z m38 8 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m701 -376 c18\n-18 14 -38 -7 -38 -23 0 -35 15 -27 35 7 18 18 19 34 3z m1672 -38 c0 -5 -4\n-10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9 0 16 -4 16 -10z m70 -5 c0 -8\n-7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m-1942 -6\nc-2 -6 -8 -10 -13 -10 -5 0 -11 4 -13 10 -2 6 4 11 13 11 9 0 15 -5 13 -11z\nm1830 -20 c-2 -6 -8 -10 -13 -10 -5 0 -11 4 -13 10 -2 6 4 11 13 11 9 0 15 -5\n13 -11z m110 -26 c2 -8 -5 -13 -17 -13 -12 0 -21 6 -21 16 0 18 31 15 38 -3z\nm-2958 -134 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10\n10 -16z m1510 -185 c0 -8 9 -14 20 -14 13 0 20 7 20 20 0 23 35 28 43 6 7 -18\n-1 -26 -25 -26 -10 0 -18 -4 -18 -10 0 -15 -43 -12 -65 4 -16 12 -17 16 -6 30\n15 18 31 13 31 -10z m-1422 -79 c14 -29 -2 -34 -18 -6 -12 24 -13 31 -2 31 5\n0 14 -11 20 -25z m-1305 -69 c4 -10 1 -13 -9 -9 -7 3 -14 9 -14 14 0 14 17 10\n23 -5z m2397 -47 c53 -12 104 -49 126 -90 21 -42 30 -160 15 -198 -14 -33 -61\n-48 -103 -32 -29 11 -38 29 -38 77 0 65 -63 96 -109 53 -48 -45 -65 -137 -39\n-220 13 -45 73 -110 157 -172 72 -53 138 -127 162 -182 42 -94 47 -271 13\n-393 -20 -72 -99 -155 -164 -172 -115 -31 -248 35 -289 143 -25 67 -45 206\n-37 251 7 38 20 46 76 46 47 0 70 -27 70 -80 0 -55 29 -143 53 -162 12 -10 37\n-18 55 -18 66 0 105 74 104 202 -1 55 -7 78 -33 128 -18 35 -46 71 -64 83 -64\n43 -144 107 -173 138 -73 78 -103 199 -83 334 21 137 75 216 175 254 60 23 67\n24 126 10z m-310 -19 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10\n8 0 15 -4 15 -10z m804 1 c8 -12 33 -148 51 -281 9 -63 27 -168 41 -233 13\n-64 24 -121 24 -125 1 -19 30 35 30 56 0 14 4 41 10 61 5 20 16 88 25 151 35\n244 56 354 68 362 19 12 74 9 84 -4 11 -14 23 -74 54 -273 34 -223 62 -356 73\n-352 17 6 33 88 77 407 19 135 39 218 55 224 9 3 33 6 54 6 51 0 61 -18 50\n-95 -30 -213 -39 -287 -45 -345 -4 -36 -15 -128 -26 -205 -11 -77 -24 -171\n-29 -210 -5 -38 -18 -140 -29 -225 -11 -85 -21 -163 -21 -172 0 -33 -37 -58\n-82 -58 -77 0 -79 5 -117 260 -38 251 -50 310 -62 310 -5 0 -11 -12 -14 -27\n-4 -16 -11 -48 -17 -73 -5 -25 -14 -72 -20 -105 -10 -58 -14 -84 -37 -240 -13\n-91 -19 -105 -48 -116 -37 -14 -68 -11 -93 9 -22 18 -27 50 -130 902 -6 52\n-18 134 -26 183 -8 48 -14 116 -14 152 l0 65 54 0 c30 0 57 -4 60 -9z m1200\n-19 c14 -27 49 -180 67 -287 4 -27 12 -77 17 -110 10 -61 67 -422 77 -485 3\n-19 10 -57 15 -85 24 -133 43 -284 37 -299 -6 -14 -18 -16 -74 -14 l-68 3 -20\n95 c-35 157 -59 182 -167 167 -63 -8 -85 -37 -112 -151 -13 -54 -30 -102 -37\n-107 -8 -5 -38 -9 -67 -9 -64 0 -68 7 -53 93 11 68 29 181 42 267 4 30 14 98\n23 150 34 212 45 281 66 420 33 220 59 340 80 365 9 11 33 15 86 15 71 0 74\n-1 88 -28z m-2796 -6 c3 -12 -1 -17 -10 -14 -7 3 -15 13 -16 22 -3 12 1 17 10\n14 7 -3 15 -13 16 -22z m-48 -117 c0 -20 -24 -26 -35 -9 -4 6 -4 17 -1 25 7\n20 36 7 36 -16z m2488 -71 c42 -23 42 -23 42 -79 0 -60 -9 -75 -49 -81 -14 -1\n-26 -9 -29 -17 -3 -10 3 -12 26 -6 l31 6 -5 -102 c-2 -56 -10 -120 -18 -143\n-8 -22 -17 -62 -21 -89 -4 -26 -11 -50 -16 -53 -5 -2 -6 -17 -3 -32 5 -27 -15\n-170 -36 -252 -6 -25 -12 -72 -13 -104 -2 -66 -23 -89 -33 -38 -4 22 -11 29\n-21 25 -12 -5 -12 -7 -1 -14 11 -8 11 -10 0 -18 -8 -4 -12 -16 -10 -26 2 -14\n-5 -18 -35 -22 -35 -3 -38 -2 -35 19 2 17 11 24 31 26 28 3 36 25 14 39 -17\n10 -29 41 -18 45 5 2 6 24 1 51 -5 34 -3 55 8 75 8 15 15 56 16 92 1 61 3 65\n26 68 29 3 71 62 45 62 -8 0 -15 -6 -15 -14 0 -22 -38 -27 -45 -5 -8 23 4 110\n17 125 5 7 10 56 13 110 5 121 11 177 26 221 10 32 12 33 50 27 32 -5 39 -4\n39 10 0 8 -10 18 -23 21 -14 4 -26 18 -33 39 -19 61 2 71 74 34z m-2668 -38\nc0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9 0 16 -4 16 -10z m104\n-16 c4 -15 4 -29 1 -32 -10 -10 -37 12 -46 36 -7 19 -5 22 15 22 17 0 26 -7\n30 -26z m-754 -184 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0\n11 -4 11 -10z m927 -129 c3 -12 17 -23 34 -26 16 -4 29 -13 29 -20 0 -11 -6\n-12 -30 -3 -40 14 -79 68 -49 68 6 0 13 -9 16 -19z m-102 -2 c11 -17 -1 -21\n-15 -4 -8 9 -8 15 -2 15 6 0 14 -5 17 -11z m1345 -24 c7 -9 10 -19 6 -22 -8\n-9 -38 9 -44 25 -5 17 23 15 38 -3z m-1870 -103 c-19 -7 -60 28 -60 50 0 20 3\n19 35 -12 20 -19 31 -36 25 -38z m315 -32 c14 -16 15 -20 4 -20 -16 0 -39 19\n-39 32 0 14 16 9 35 -12z m-579 -37 c-4 -4 -11 -1 -16 7 -16 25 -11 35 7 17 9\n-9 13 -20 9 -24z m146 7 c32 -30 15 -35 -18 -6 -16 14 -23 26 -16 26 7 0 22\n-9 34 -20z m2098 -6 c0 -17 -22 -14 -28 4 -2 7 3 12 12 12 9 0 16 -7 16 -16z\nm-1485 -24 c3 -6 -4 -14 -17 -19 -13 -6 -17 -10 -9 -10 8 -1 12 -4 8 -7 -13\n-14 -27 7 -17 27 12 21 25 25 35 9z m545 -15 c0 -8 -4 -15 -9 -15 -5 0 -14 7\n-21 15 -10 13 -9 15 9 15 12 0 21 -6 21 -15z m-410 -75 c6 -11 17 -20 24 -20\n8 0 16 -7 20 -15 8 -21 -10 -19 -43 6 -16 12 -34 18 -40 15 -7 -5 -11 4 -11\n24 0 27 2 30 20 20 11 -6 24 -19 30 -30z m198 18 c16 -16 15 -28 -2 -28 -17 0\n-38 24 -29 33 9 10 17 9 31 -5z m-353 -38 c3 -5 2 -10 -4 -10 -5 0 -13 5 -16\n10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m-111 -46 c3 -8 2 -12 -4 -9 -6 3 -10\n10 -10 16 0 14 7 11 14 -7z m376 -4 c0 -13 -5 -18 -15 -14 -8 4 -15 12 -15 20\n0 8 7 14 15 14 8 0 15 -9 15 -20z m150 -19 c13 -26 13 -31 -5 -31 -8 0 -15 -4\n-15 -10 0 -5 5 -10 10 -10 6 0 10 -4 10 -10 0 -5 -8 -10 -18 -10 -10 0 -23 -5\n-30 -12 -8 -8 -15 -8 -27 2 -20 16 -19 30 1 30 13 0 15 7 11 29 -4 19 -2 31 6\n35 26 10 47 5 57 -13z m70 -7 c0 -8 -4 -14 -9 -14 -11 0 -22 26 -14 34 9 9 23\n-3 23 -20z m-360 2 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6\n0 10 -2 10 -4z m425 -32 c34 -22 32 -44 -3 -44 -32 0 -52 16 -52 42 0 22 23\n23 55 2z m1061 -79 c18 -14 18 -14 -8 -15 -18 0 -28 5 -28 15 0 19 11 19 36 0z\nm-18 -57 c-3 -7 -17 -13 -33 -13 -16 0 -30 6 -32 13 -3 8 7 12 32 12 25 0 35\n-4 33 -12z m397 -67 c-10 -9 -25 14 -24 37 l1 27 13 -30 c7 -16 12 -32 10 -34z\nm-1317 -10 c3 -8 -1 -12 -9 -9 -7 2 -15 10 -17 17 -3 8 1 12 9 9 7 -2 15 -10\n17 -17z m959 -3 c20 -2 25 -32 7 -45 -14 -10 -21 -7 -45 17 -36 36 -36 44 -1\n36 15 -4 32 -7 39 -8z m-907 -26 c0 -13 -12 -22 -22 -16 -10 6 -1 24 13 24 5\n0 9 -4 9 -8z m1274 -38 c9 -8 16 -20 16 -25 0 -5 9 -18 20 -29 23 -23 12 -25\n-34 -6 -22 9 -38 11 -50 4 -26 -14 -29 -5 -12 36 16 39 35 45 60 20z m-524 -9\nc0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z\nm193 -23 c10 -10 14 -21 11 -25 -9 -9 -44 16 -44 30 0 18 14 16 33 -5z m-153\n-2 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m368\n-73 c38 -40 5 -40 -58 1 -5 3 21 22 31 22 3 0 15 -10 27 -23z m192 3 c0 -11\n-7 -20 -15 -20 -9 0 -15 -6 -13 -12 2 -7 0 -14 -5 -15 -33 -12 -44 23 -15 48\n30 24 48 24 48 -1z m-383 -12 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1\n-19z m115 -3 c0 -5 -5 -11 -11 -13 -6 -2 -11 4 -11 13 0 9 5 15 11 13 6 -2 11\n-8 11 -13z m-748 -20 c11 -8 17 -18 14 -21 -11 -10 -48 7 -48 22 0 18 10 17\n34 -1z m706 -16 c0 -5 -9 -9 -20 -9 -19 0 -26 11 -14 23 8 8 34 -3 34 -14z\nm-1676 -5 c5 -14 4 -15 -9 -4 -17 14 -19 20 -6 20 5 0 12 -7 15 -16z m1603\n-10 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m303 -40 c0 -9 -7\n-14 -17 -12 -25 5 -28 28 -4 28 12 0 21 -6 21 -16z m50 -20 c0 -2 -7 -4 -15\n-4 -8 0 -15 4 -15 10 0 5 7 7 15 4 8 -4 15 -8 15 -10z m-270 -10 c0 -8 -4 -12\n-10 -9 -5 3 -10 10 -10 16 0 5 5 9 10 9 6 0 10 -7 10 -16z m395 -24 c3 -5 -3\n-10 -15 -10 -12 0 -18 5 -15 10 3 6 10 10 15 10 5 0 12 -4 15 -10z m150 -40\nc3 -5 13 -6 21 -3 19 7 64 -16 64 -34 0 -7 7 -13 15 -13 8 0 15 -2 15 -4 0\n-10 -30 -60 -40 -66 -16 -10 -1 -40 20 -40 26 0 35 -19 14 -27 -10 -4 -19 -2\n-22 5 -2 7 -15 12 -28 12 -19 0 -24 5 -24 24 0 18 -7 25 -31 30 -18 3 -28 10\n-24 17 4 6 18 8 30 5 13 -3 27 -1 30 5 4 6 14 8 22 5 20 -8 33 2 26 20 -7 20\n-61 47 -80 40 -17 -7 -53 10 -53 24 0 13 37 13 45 0z m-177 -88 c34 -7 46 -30\n12 -24 -8 1 -41 5 -73 9 -32 3 -60 10 -63 14 -3 5 -19 9 -35 9 -17 0 -28 4\n-25 8 5 8 111 -1 184 -16z m136 -21 c3 -4 -1 -17 -9 -27 -15 -19 -15 -19 -30\n0 -17 22 -11 36 15 36 10 0 21 -4 24 -9z m-584 -86 c0 -9 -6 -12 -15 -9 -8 4\n-15 10 -15 15 0 5 7 9 15 9 8 0 15 -7 15 -15z m-210 -75 c13 -8 13 -10 -2 -10\n-9 0 -20 5 -23 10 -8 13 5 13 25 0z m338 -7 l37 -17 -33 -4 c-32 -3 -62 11\n-62 29 0 13 16 11 58 -8z m257 -3 c-3 -5 -12 -7 -20 -3 -21 7 -19 13 6 13 11\n0 18 -4 14 -10z m-530 -10 c18 -8 17 -9 -7 -9 -16 -1 -28 4 -28 9 0 12 8 12\n35 0z m182 -42 c-7 -4 -20 -8 -30 -8 -15 0 -16 3 -7 20 9 17 14 18 30 8 14 -9\n16 -14 7 -20z m183 12 c0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10\n9 0 16 -4 16 -10z" }),
        React__default['default'].createElement("path", { d: "M5837 1903 c-21 -76 -57 -334 -57 -405 0 -49 3 -59 26 -77 34 -27 78\n-27 105 0 19 19 20 29 16 98 -3 42 -12 121 -20 176 -9 55 -19 123 -23 150 -9\n67 -36 100 -47 58z m32 -406 c1 -27 -3 -37 -11 -35 -16 5 -22 51 -13 87 7 24\n8 25 15 6 5 -11 9 -37 9 -58z" }),
        React__default['default'].createElement("path", { d: "M5418 1123 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M4226 10083 c-38 -28 -39 -28 -13 -31 35 -4 67 14 67 38 0 26 -8 25\n-54 -7z" }),
        React__default['default'].createElement("path", { d: "M4320 10094 c0 -9 7 -14 17 -12 25 5 28 28 4 28 -12 0 -21 -6 -21\n-16z" }),
        React__default['default'].createElement("path", { d: "M6025 10029 c-4 -6 -20 -7 -38 -3 -28 6 -30 5 -18 -10 7 -9 24 -16\n37 -16 14 0 24 -6 24 -15 0 -27 129 -34 138 -7 2 6 -3 12 -11 12 -8 0 -17 7\n-21 15 -3 9 -18 15 -40 15 -19 0 -38 5 -41 10 -8 13 -22 13 -30 -1z" }),
        React__default['default'].createElement("path", { d: "M3476 10005 c-3 -8 -1 -15 4 -15 6 0 10 7 10 15 0 8 -2 15 -4 15 -2\n0 -6 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M3050 9989 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M4590 9980 c0 -5 9 -10 20 -10 11 0 20 5 20 10 0 6 -9 10 -20 10 -11\n0 -20 -4 -20 -10z" }),
        React__default['default'].createElement("path", { d: "M2981 9963 c-13 -12 -18 -23 -13 -31 6 -9 12 -6 22 12 7 14 20 27 29\n29 14 4 14 5 0 6 -9 0 -26 -7 -38 -16z" }),
        React__default['default'].createElement("path", { d: "M4693 9963 c9 -9 19 -14 23 -11 10 10 -6 28 -24 28 -15 0 -15 -1 1\n-17z" }),
        React__default['default'].createElement("path", { d: "M6434 9969 c-7 -12 -5 -15 24 -23 27 -9 28 -5 2 16 -12 11 -22 13\n-26 7z" }),
        React__default['default'].createElement("path", { d: "M4410 9885 c-10 -12 -10 -15 3 -15 8 0 20 7 27 15 10 12 10 15 -3 15\n-8 0 -20 -7 -27 -15z" }),
        React__default['default'].createElement("path", { d: "M4215 9883 c-52 -8 -51 -22 1 -19 65 5 64 4 64 16 0 10 -10 11 -65 3z" }),
        React__default['default'].createElement("path", { d: "M6628 9873 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M6436 9861 c-4 -6 -16 -11 -27 -11 -10 0 -19 -4 -19 -10 0 -5 12 -10\n26 -10 22 0 25 -4 24 -27 -5 -66 -1 -75 23 -67 12 4 39 7 59 6 26 -1 41 4 47\n16 8 14 13 15 30 5 28 -17 31 -16 31 7 0 23 6 24 46 10 16 -6 34 -20 39 -33 9\n-19 22 -23 98 -32 102 -13 110 -4 51 50 -27 25 -44 33 -72 32 -20 0 -65 3 -99\n8 -54 7 -63 5 -69 -9 -8 -22 -31 -20 -43 3 -13 23 -66 32 -89 15 -26 -21 -42\n-16 -42 11 0 18 5 25 19 25 11 0 21 -6 24 -12 2 -7 8 -10 12 -5 12 10 -4 24\n-36 32 -16 4 -30 2 -33 -4z" }),
        React__default['default'].createElement("path", { d: "M7034 9834 c1 -27 7 -39 22 -44 11 -4 25 -15 32 -23 10 -11 21 -13\n41 -7 16 4 35 4 42 -1 18 -11 39 -11 39 0 0 14 -75 61 -98 61 -26 0 -29 25 -4\n39 13 8 7 10 -29 11 l-46 0 1 -36z" }),
        React__default['default'].createElement("path", { d: "M4594 9839 c-18 -20 -18 -20 11 -14 50 11 57 14 50 25 -10 17 -41 11\n-61 -11z" }),
        React__default['default'].createElement("path", { d: "M6072 9828 c5 -15 37 -18 41 -3 1 6 -9 12 -22 13 -16 3 -22 -1 -19\n-10z" }),
        React__default['default'].createElement("path", { d: "M4403 9800 c-20 -12 -33 -28 -33 -40 0 -15 -7 -20 -27 -20 -35 0 -65\n-17 -43 -23 8 -2 29 -8 45 -14 27 -8 33 -7 48 13 16 22 16 23 0 33 -19 10 -15\n21 9 25 18 3 58 29 58 38 0 14 -24 9 -57 -12z" }),
        React__default['default'].createElement("path", { d: "M5060 9806 c0 -18 17 -29 30 -21 8 5 7 11 -1 21 -15 18 -29 18 -29 0z" }),
        React__default['default'].createElement("path", { d: "M5220 9809 c0 -8 -11 -9 -31 -5 -26 5 -29 3 -20 -7 14 -18 2 -30 -16\n-15 -17 14 -30 2 -35 -32 -3 -23 -6 -25 -54 -22 -45 3 -54 0 -69 -20 -11 -15\n-19 -19 -22 -10 -7 19 -33 14 -53 -10 -16 -20 -26 -23 -78 -20 -57 2 -60 1\n-96 -38 -39 -42 -60 -50 -70 -25 -7 19 -46 20 -46 0 0 -8 9 -19 20 -25 39 -21\n20 -52 -37 -65 -26 -5 -33 -3 -33 9 0 9 -5 16 -11 16 -7 0 -9 9 -6 23 9 35 -6\n51 -42 44 -38 -8 -47 5 -21 28 15 14 23 15 34 6 7 -6 21 -8 30 -5 13 5 14 9 4\n21 -10 12 -9 18 5 28 9 7 17 15 17 19 0 11 -28 6 -42 -7 -20 -20 -41 -25 -60\n-16 -10 6 -19 5 -23 -1 -5 -8 -11 -8 -19 -1 -18 15 -58 2 -54 -18 2 -10 15\n-17 36 -19 17 -2 32 -7 32 -12 0 -14 -35 -21 -61 -12 -18 7 -27 5 -35 -7 -10\n-12 -15 -13 -27 -2 -13 10 -17 9 -27 -9 -14 -25 -8 -36 26 -44 20 -5 33 -1 50\n15 24 22 32 17 15 -10 -13 -20 -2 -44 14 -31 9 7 16 6 25 -5 20 -24 8 -27 -61\n-15 -54 9 -69 9 -94 -4 -37 -20 -64 -20 -89 -1 -10 8 -23 12 -28 9 -5 -3 -15\n2 -22 12 -17 23 -46 12 -39 -15 4 -17 1 -21 -17 -21 -15 0 -20 -5 -17 -15 5\n-12 2 -12 -19 -3 -18 9 -27 9 -36 0 -9 -9 -7 -12 10 -12 12 0 22 -4 22 -9 0\n-18 -18 -21 -45 -9 -22 10 -32 9 -60 -6 -19 -10 -41 -16 -50 -13 -27 11 -29 8\n-30 -34 -1 -27 4 -43 13 -47 12 -4 11 -8 -4 -19 -22 -16 -51 -17 -56 -2 -5 16\n-75 41 -131 46 -40 4 -46 3 -41 -11 7 -19 31 -21 37 -3 3 9 7 9 20 -1 13 -11\n14 -18 4 -35 -7 -12 -16 -25 -21 -28 -8 -7 16 -57 106 -214 88 -154 147 -250\n172 -281 14 -18 26 -37 26 -43 0 -6 7 -11 15 -11 9 0 14 8 12 23 -2 18 4 23\n31 25 18 2 32 -1 32 -7 0 -6 11 -11 24 -11 13 0 27 -8 31 -17 7 -16 9 -15 14\n7 4 14 22 32 41 43 33 17 38 17 73 2 40 -17 45 -26 22 -45 -20 -17 -19 -40 3\n-40 14 0 13 -4 -7 -19 -32 -25 -19 -49 15 -27 34 23 47 20 66 -15 13 -22 23\n-29 37 -24 24 7 35 -19 15 -35 -18 -15 -19 -50 -1 -50 18 0 37 21 37 40 0 11\n13 16 50 18 41 2 49 0 44 -12 -11 -28 25 -29 79 -2 45 22 53 24 63 11 6 -8 16\n-15 23 -15 6 0 11 -4 11 -8 0 -16 -55 -70 -75 -73 -25 -5 -34 -49 -10 -49 9 0\n26 5 37 11 13 7 24 7 30 1 16 -16 48 -2 48 21 0 12 14 36 32 54 26 27 29 35\n19 47 -7 8 -10 20 -6 26 3 5 1 10 -4 10 -6 0 -11 -7 -11 -15 0 -26 -40 -17\n-68 15 -15 17 -34 30 -44 30 -12 0 -18 8 -18 23 0 13 -6 29 -12 36 -11 10 -10\n15 4 25 21 15 78 9 85 -10 2 -7 11 -10 19 -7 27 10 65 -7 76 -35 l11 -27 6 30\nc6 31 41 49 41 21 0 -9 5 -16 10 -16 13 0 13 13 -1 27 -16 16 -2 33 27 33 17\n0 24 6 24 18 0 13 12 22 39 30 50 15 61 15 61 -2 0 -27 69 -36 89 -12 10 12 7\n15 -16 18 -20 2 -29 9 -31 26 -2 12 -10 22 -18 22 -8 0 -14 7 -14 15 0 8 -17\n19 -42 26 -24 6 -49 13 -55 15 -23 6 -13 22 18 29 22 5 34 3 42 -9 10 -13 19\n-14 49 -6 21 6 39 19 43 29 3 10 17 23 32 30 24 11 25 13 8 25 -18 13 -17 15\n4 50 16 25 30 36 47 36 14 0 24 -6 24 -15 0 -8 10 -19 21 -26 20 -10 21 -9 16\n11 -4 14 -2 20 7 17 6 -3 20 1 31 9 15 11 16 14 3 14 -9 0 -18 9 -21 21 -3 11\n-15 23 -26 26 -12 3 -21 10 -21 15 0 13 51 58 66 58 18 0 18 -14 0 -30 -8 -6\n-12 -18 -9 -26 4 -10 9 -12 18 -4 7 6 29 8 50 5 31 -4 38 -1 42 15 3 11 9 20\n14 20 16 0 10 28 -7 34 -13 5 -15 15 -11 42 5 29 4 34 -8 24 -30 -25 -23 9 9\n42 26 27 38 33 55 27 24 -10 28 3 6 21 -19 16 -10 30 21 30 33 0 32 -32 -3\n-60 -24 -19 -27 -27 -26 -81 1 -34 6 -66 12 -72 15 -15 14 -32 -4 -47 -11 -9\n-14 -22 -10 -42 8 -35 -10 -38 -19 -3 -6 24 -26 36 -26 15 0 -5 5 -10 11 -10\n8 0 7 -5 -2 -16 -7 -8 -20 -13 -30 -11 -12 3 -16 0 -12 -10 3 -8 -4 -28 -16\n-44 -12 -16 -20 -37 -17 -47 4 -12 -4 -21 -26 -32 -18 -8 -34 -21 -36 -27 -6\n-20 33 -15 53 7 16 18 20 18 45 5 16 -8 30 -23 32 -32 5 -21 -49 -93 -69 -93\n-8 0 -11 -4 -8 -10 8 -13 52 -13 61 1 3 6 17 8 31 4 15 -3 34 0 47 8 34 22 77\n27 102 10 19 -12 21 -18 11 -33 -8 -13 -18 -18 -33 -14 -12 3 -25 1 -28 -5\n-11 -17 -44 -13 -55 7 -8 15 -11 14 -20 -10 -6 -16 -18 -28 -28 -29 -11 0 -13\n-3 -5 -6 6 -2 12 -11 12 -19 0 -12 -8 -13 -35 -8 -28 5 -35 3 -35 -10 0 -11 9\n-16 30 -16 31 0 39 -17 19 -37 -9 -9 -3 -16 25 -29 26 -13 35 -23 31 -34 -3\n-10 1 -23 9 -30 14 -11 14 -14 1 -27 -8 -8 -15 -21 -15 -29 0 -12 4 -12 21 -4\n11 6 33 9 49 5 17 -4 31 -2 35 5 4 7 18 9 31 6 16 -4 29 0 43 16 23 24 38 19\n26 -9 -5 -10 -7 -26 -6 -35 1 -11 -4 -18 -14 -18 -28 0 -11 -24 23 -32 36 -10\n48 -23 27 -32 -8 -3 -21 1 -29 9 -17 17 -36 20 -36 5 0 -5 5 -10 11 -10 5 0 7\n-4 4 -10 -3 -5 -15 -10 -25 -10 -30 0 -34 -19 -9 -46 12 -13 21 -26 18 -28\n-10 -9 -79 -16 -79 -8 0 13 -33 11 -50 -2 -41 -32 -67 -39 -90 -23 -19 13 -25\n13 -51 0 -21 -10 -44 -13 -71 -9 -25 4 -46 2 -54 -5 -8 -7 -17 -9 -21 -6 -11\n12 -33 -15 -33 -39 0 -21 -5 -24 -35 -24 -41 0 -53 -19 -37 -55 7 -15 8 -26 2\n-30 -7 -4 -7 -13 0 -24 11 -21 -5 -41 -32 -41 -10 0 -18 -4 -18 -10 0 -5 -14\n-10 -31 -10 -16 0 -28 -4 -25 -9 3 -5 15 -7 26 -4 15 4 20 0 20 -15 0 -23 -19\n-33 -49 -25 -12 3 -21 1 -21 -6 0 -6 12 -13 28 -16 15 -4 35 -10 44 -16 10 -5\n24 -9 32 -9 22 0 28 -57 9 -93 -9 -18 -16 -44 -14 -58 2 -20 -3 -28 -21 -33\n-36 -9 -41 -7 -36 12 4 15 0 17 -23 14 -33 -5 -41 20 -11 37 14 9 11 10 -16\n11 -25 0 -35 -6 -44 -25 -15 -32 -32 -27 -35 11 -5 68 -16 95 -40 105 -18 6\n-23 14 -18 28 4 13 -2 23 -19 34 -21 14 -24 23 -21 56 3 28 0 41 -10 45 -20 7\n-19 26 0 26 20 0 19 19 0 26 -10 4 -12 11 -7 18 11 14 3 158 -9 150 -5 -3 -9\n-13 -9 -23 0 -37 -103 -61 -121 -29 -7 13 -17 16 -41 11 -20 -4 -29 -2 -25 4\n10 16 -29 45 -55 41 -27 -4 -38 -37 -11 -34 13 1 19 -7 21 -26 2 -17 11 -28\n25 -32 60 -16 106 -98 63 -112 -27 -9 -96 -5 -118 7 -25 13 -22 45 5 64 21 15\n21 17 5 29 -10 7 -18 18 -18 25 0 6 -16 26 -35 44 -42 38 -43 50 -10 89 29 34\n28 46 -1 62 -10 6 -22 16 -26 21 -5 6 -8 6 -8 -2 0 -6 4 -14 9 -17 9 -6 8 -48\n-4 -83 -9 -27 -9 -27 -34 -11 -15 9 -26 9 -45 0 -19 -9 -27 -8 -33 1 -15 23\n-33 82 -33 110 0 31 -13 34 -38 9 -32 -32 -51 -34 -58 -7 -3 14 -10 25 -15 25\n-12 0 -12 -25 0 -48 5 -9 28 -57 52 -105 45 -94 43 -93 77 -42 7 11 58 45 67\n45 3 0 5 -7 5 -15 0 -8 -7 -15 -15 -15 -8 0 -15 -8 -15 -19 0 -10 7 -24 15\n-31 21 -17 19 -27 -7 -36 -12 -3 -29 -16 -39 -27 -16 -21 -14 -27 56 -167 39\n-80 91 -184 114 -232 23 -48 53 -100 66 -116 14 -17 25 -35 25 -42 0 -6 5 -8\n10 -5 19 11 30 -5 18 -25 -10 -16 -7 -31 21 -89 19 -38 44 -82 57 -98 20 -25\n25 -26 43 -15 33 20 37 14 8 -16 l-26 -27 35 -70 c20 -39 43 -77 51 -85 13\n-13 16 -13 28 4 15 19 35 14 35 -10 0 -8 -9 -14 -20 -14 -14 0 -20 -7 -20 -21\n0 -24 81 -187 117 -236 12 -17 23 -36 23 -42 0 -5 12 -22 28 -38 15 -15 32\n-39 38 -53 35 -74 47 -99 70 -135 13 -22 29 -51 34 -65 14 -34 14 -34 63 -125\n126 -235 190 -335 214 -335 10 0 30 17 44 38 28 39 91 170 103 212 4 14 19 50\n33 80 28 60 26 55 78 185 50 122 95 207 192 362 46 73 83 135 83 137 0 3 53\n114 119 248 176 360 204 418 238 478 81 148 183 349 183 363 0 8 6 17 13 20\n18 6 -8 35 -36 39 -24 3 -43 64 -26 85 11 13 -5 53 -21 53 -5 0 -9 8 -9 18 -1\n9 -2 30 -3 47 -2 22 2 30 16 33 11 2 24 -2 30 -9 18 -23 73 -49 90 -43 9 3 23\n1 31 -6 8 -7 21 -10 28 -7 18 7 99 173 97 200 -4 42 0 52 36 89 20 22 36 50\n37 65 2 28 -13 36 -100 50 -18 3 -33 11 -33 18 0 8 -7 21 -16 29 -8 9 -13 24\n-10 34 4 12 -1 20 -17 27 -12 6 -24 19 -26 30 -2 11 -11 28 -21 37 -10 9 -20\n21 -21 26 -2 5 -14 12 -26 16 -24 8 -35 -7 -47 -66 -7 -32 -22 -34 -90 -16\n-30 8 -48 19 -55 35 -16 35 -15 36 29 29 63 -10 90 1 90 36 0 26 -3 29 -22 23\n-25 -7 -63 -22 -91 -37 -10 -5 -27 -6 -37 -3 -13 4 -19 0 -22 -12 -2 -12 -13\n-18 -36 -19 -43 -2 -52 -12 -28 -30 19 -13 19 -14 2 -14 -15 0 -16 -3 -6 -15\n7 -8 21 -15 31 -15 10 0 21 -4 24 -10 3 -5 -1 -10 -9 -10 -11 0 -16 -9 -16\n-27 0 -20 -7 -31 -26 -40 -26 -12 -26 -11 -20 17 5 28 4 29 -14 18 -20 -13\n-23 -10 -61 45 -8 11 -29 1 -29 -14 0 -5 7 -9 15 -9 8 0 15 -7 15 -16 0 -14\n-7 -15 -39 -10 -22 3 -42 2 -46 -4 -3 -5 -29 -12 -56 -16 l-51 -7 4 -43 c2\n-27 -1 -43 -7 -40 -5 2 -18 -1 -28 -6 -13 -7 -26 -5 -43 7 -29 19 -32 39 -4\n30 22 -7 24 -2 10 25 -7 13 -7 21 0 25 20 12 10 45 -15 51 -41 10 -58 -2 -50\n-36 7 -33 1 -36 -39 -20 -34 12 -36 50 -3 50 14 1 36 18 62 50 22 28 48 50 58\n50 10 0 15 5 12 10 -4 6 -15 8 -26 5 -15 -5 -19 -1 -19 14 0 12 -4 21 -10 21\n-5 0 -10 9 -10 20 0 13 -7 20 -19 20 -27 0 -34 15 -16 33 28 28 12 77 -24 77\n-11 0 -17 11 -18 35 -1 19 -8 48 -16 65 -9 16 -13 39 -10 50 4 14 -1 22 -18\n29 -17 7 -19 10 -7 10 9 1 20 6 23 11 9 15 -45 55 -75 55 -24 0 -25 2 -23 70\n2 116 2 115 22 115 36 0 43 25 16 54 -13 14 -25 26 -27 26 -2 0 -3 -15 -3 -32\n0 -29 -4 -33 -27 -36 -21 -3 -26 0 -22 11 6 17 -52 107 -69 107 -16 -1 -47\n-25 -47 -37 0 -5 18 -18 40 -29 22 -10 40 -22 40 -25 0 -18 -87 -15 -193 6\n-24 5 -53 3 -77 -5 -21 -7 -46 -10 -54 -7 -27 10 3 47 37 47 23 0 58 15 87 38\n7 5 -32 32 -47 32 -7 0 -13 -5 -13 -11z m-221 -148 c17 -11 5 -31 -19 -31 -21\n0 -34 15 -25 30 8 12 25 13 44 1z m-487 -88 c26 -23 22 -31 -12 -28 -38 3 -46\n11 -30 30 16 19 19 19 42 -2z m256 -25 c-7 -19 -38 -22 -38 -4 0 10 9 16 21\n16 12 0 19 -5 17 -12z m-355 -72 c5 -14 -31 -36 -58 -36 -35 0 1 49 36 50 9 0\n19 -6 22 -14z m377 -45 c0 -11 -39 -25 -47 -18 -3 3 -2 10 2 16 8 13 45 15 45\n2z m-790 -20 c0 -5 -7 -11 -15 -15 -9 -3 -15 0 -15 9 0 8 7 15 15 15 8 0 15\n-4 15 -9z m70 -22 c0 -5 -7 -9 -15 -9 -15 0 -20 12 -9 23 8 8 24 -1 24 -14z\nm177 5 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m296 -1 c8 -7\n-11 -33 -24 -33 -5 0 -9 9 -9 20 0 19 20 27 33 13z m1045 -76 c4 -20 -25 -34\n-40 -19 -15 15 -1 44 19 40 10 -2 19 -11 21 -21z m-1609 4 c23 -15 5 -41 -29\n-41 -16 0 -30 4 -30 9 0 5 -3 16 -6 25 -5 12 0 16 22 16 16 0 35 -4 43 -9z\nm611 -21 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10\n-10z m-743 -62 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m97 -13\nc-9 -23 -54 -19 -54 4 0 11 6 21 13 24 19 7 47 -12 41 -28z m1226 9 c0 -8 -4\n-12 -10 -9 -5 3 -10 10 -10 16 0 5 5 9 10 9 6 0 10 -7 10 -16z m-872 -11 c2\n-8 -6 -13 -22 -13 -25 0 -33 10 -19 24 10 10 36 3 41 -11z m682 -38 c15 -18 5\n-35 -21 -35 -14 0 -19 7 -19 25 0 28 21 33 40 10z m-132 -33 c12 3 29 0 39 -7\n10 -7 30 -15 43 -17 22 -3 26 -9 30 -50 3 -26 4 -45 1 -43 -2 3 -10 -4 -18\n-15 -8 -11 -23 -20 -34 -20 -10 0 -34 -16 -53 -36 -25 -27 -40 -35 -55 -31\n-12 3 -21 1 -21 -4 0 -5 -4 -9 -10 -9 -5 0 -10 11 -10 25 0 28 -12 32 -30 10\n-16 -19 -30 -19 -30 0 0 9 -7 29 -15 45 -16 31 -11 60 11 60 17 0 18 12 3 27\n-13 13 -6 18 71 56 25 12 48 18 51 13 4 -5 16 -6 27 -4z m-423 -3 c11 -17 -1\n-21 -15 -4 -8 9 -8 15 -2 15 6 0 14 -5 17 -11z m638 -39 c6 0 4 -7 -5 -16 -18\n-18 -38 -11 -38 13 0 10 6 13 16 9 9 -3 21 -6 27 -6z m606 -14 c24 -13 61 -55\n61 -71 0 -3 -9 -5 -20 -5 -11 0 -20 4 -20 9 0 6 -12 3 -27 -5 -35 -18 -97 -18\n-112 0 -16 19 3 64 31 76 33 13 55 12 87 -4z m-649 -45 c0 -5 9 -11 20 -14 23\n-6 25 -15 5 -41 -12 -16 -16 -17 -35 -3 -14 10 -18 17 -10 22 6 4 8 15 5 26\n-4 11 -2 19 4 19 6 0 11 -4 11 -9z m-580 -97 c0 -16 11 -36 25 -50 17 -15 23\n-29 18 -40 -5 -14 -8 -15 -11 -4 -3 8 -16 25 -28 39 -23 25 -24 25 -54 8 -36\n-21 -62 -12 -30 10 12 8 25 26 30 39 13 34 50 33 50 -2z m165 -14 c3 -5 -1\n-10 -10 -10 -9 0 -13 5 -10 10 3 6 8 10 10 10 2 0 7 -4 10 -10z m1185 -31 c0\n-5 -7 -9 -15 -9 -15 0 -20 12 -9 23 8 8 24 -1 24 -14z m-1662 -31 c-2 -26 2\n-35 20 -43 12 -5 22 -15 22 -22 0 -18 -23 -21 -47 -5 -26 16 -32 69 -11 90 17\n17 18 16 16 -20z m262 -13 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15\n15 15 8 0 15 -7 15 -15z m1726 -16 c4 -7 24 -9 50 -6 l43 4 -15 -29 c-18 -36\n-14 -43 22 -34 20 5 25 12 21 26 -7 26 7 33 49 25 40 -7 41 -24 0 -43 -17 -9\n-29 -24 -33 -43 -3 -16 -9 -29 -14 -29 -5 0 -6 6 -3 14 3 8 -3 19 -15 25 -27\n15 -35 14 -61 -9 -13 -11 -34 -20 -47 -20 -14 0 -23 -6 -23 -15 0 -8 -7 -15\n-15 -15 -18 0 -19 12 -3 28 16 16 17 50 1 56 -7 3 -13 10 -13 17 0 6 7 9 15 5\n17 -6 21 9 5 19 -5 3 -10 13 -10 21 0 17 36 19 46 3z m-401 -19 c0 -22 -29\n-18 -33 3 -3 14 1 18 15 15 10 -2 18 -10 18 -18z m325 10 c0 -5 -9 -10 -21\n-10 -11 0 -17 5 -14 10 3 6 13 10 21 10 8 0 14 -4 14 -10z m-162 -88 c2 -7 -3\n-12 -12 -12 -9 0 -16 7 -16 16 0 17 22 14 28 -4z m-363 -22 c4 -6 -7 -10 -24\n-10 -17 0 -31 5 -31 10 0 6 11 10 24 10 14 0 28 -4 31 -10z m115 -45 c0 -8 -4\n-15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m570 -26 c0\n-6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10 -11 10 -16z m148\n-35 c25 -18 29 -39 7 -48 -9 -3 -15 0 -15 10 0 12 -7 15 -25 12 -30 -6 -42 7\n-25 27 16 19 30 19 58 -1z m-808 -46 c0 -21 -18 -34 -31 -21 -5 5 -4 19 3 35\n13 27 28 20 28 -14z m420 -32 c0 -20 -19 -31 -32 -18 -6 6 -7 15 -4 21 10 16\n36 13 36 -3z m377 -32 c8 -21 -13 -42 -28 -27 -13 13 -5 43 11 43 6 0 13 -7\n17 -16z m-420 -88 c-9 -23 -59 -45 -65 -28 -6 19 -22 14 -22 -8 0 -13 -7 -20\n-20 -20 -11 0 -20 3 -20 6 0 12 49 52 55 45 4 -3 12 1 18 10 25 33 67 29 54\n-5z m-1682 -26 c3 -5 -1 -10 -10 -10 -9 0 -13 5 -10 10 3 6 8 10 10 10 2 0 7\n-4 10 -10z m193 -230 c18 -30 5 -43 -20 -21 -11 11 -17 24 -13 30 9 16 19 13\n33 -9z m52 10 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11\n-4 11 -10z m272 -214 c22 -33 0 -57 -44 -50 -38 7 -52 23 -42 48 10 27 69 28\n86 2z m-167 -55 c7 -12 -12 -24 -25 -16 -11 7 -4 25 10 25 5 0 11 -4 15 -9z\nm349 -170 c3 -5 -1 -11 -9 -15 -9 -3 -15 0 -15 9 0 16 16 20 24 6z m61 -30 c3\n-6 -4 -15 -15 -21 -16 -8 -20 -8 -20 3 0 25 23 36 35 18z m80 -1 c3 -5 1 -10\n-4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-25 -59 c0 -4 -9\n-16 -19 -25 -17 -15 -19 -26 -14 -68 5 -41 3 -50 -8 -46 -8 3 -14 13 -14 24 0\n10 -6 29 -13 41 -20 36 -15 78 11 90 22 11 57 1 57 -16z m-15 -359 c-6 -4 -17\n-20 -25 -35 -11 -23 -12 -30 -1 -36 9 -6 6 -10 -11 -14 -12 -4 -26 -7 -30 -7\n-24 0 15 86 42 94 26 7 36 6 25 -2z m85 -22 c0 -5 -2 -10 -4 -10 -3 0 -8 5\n-11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-74 -115 c-6 -25 -67 -62 -85 -51\n-24 15 23 80 64 88 24 4 29 -5 21 -37z m191 -72 c4 -12 -34 -29 -44 -19 -3 3\n-3 12 1 21 7 18 37 17 43 -2z m-77 -141 c0 -20 -39 -72 -55 -72 -23 0 -34 57\n-14 77 15 15 69 11 69 -5z m-175 -12 c3 -5 15 -10 26 -10 23 0 26 -28 4 -36\n-20 -8 -75 15 -75 31 0 12 13 22 32 24 4 1 10 -3 13 -9z m593 -138 c2 -7 -3\n-12 -12 -12 -9 0 -16 7 -16 16 0 17 22 14 28 -4z" }),
        React__default['default'].createElement("path", { d: "M4760 9116 c0 -15 24 -28 34 -19 7 7 -13 33 -25 33 -5 0 -9 -6 -9\n-14z" }),
        React__default['default'].createElement("path", { d: "M4835 9100 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z" }),
        React__default['default'].createElement("path", { d: "M4055 9790 c-13 -6 -15 -9 -5 -9 8 0 22 4 30 9 18 12 2 12 -25 0z" }),
        React__default['default'].createElement("path", { d: "M5328 9793 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M3150 9766 c0 -9 7 -16 16 -16 17 0 14 22 -4 28 -7 2 -12 -3 -12 -12z" }),
        React__default['default'].createElement("path", { d: "M4515 9773 c-58 -8 -74 -59 -20 -65 27 -3 36 0 41 14 3 10 14 23 25\n28 10 6 19 15 19 20 0 10 -10 10 -65 3z" }),
        React__default['default'].createElement("path", { d: "M3940 9757 l-25 -10 23 -5 c26 -4 36 1 31 16 -3 6 -14 5 -29 -1z" }),
        React__default['default'].createElement("path", { d: "M4674 9697 c-16 -14 -24 -29 -20 -35 12 -19 44 -14 60 10 34 49 7 65\n-40 25z" }),
        React__default['default'].createElement("path", { d: "M7020 9706 c0 -8 4 -17 10 -21 11 -7 2 -35 -12 -35 -5 0 -18 10 -27\n21 -13 17 -22 20 -35 12 -16 -9 -16 -10 1 -25 10 -8 37 -18 60 -22 40 -6 42\n-5 48 26 6 24 3 35 -11 45 -23 17 -34 17 -34 -1z" }),
        React__default['default'].createElement("path", { d: "M3860 9688 c0 -15 60 -38 99 -38 30 0 63 19 55 31 -3 5 -29 9 -57 9\n-29 -1 -62 2 -74 5 -17 5 -23 3 -23 -7z" }),
        React__default['default'].createElement("path", { d: "M4628 9693 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M6635 9690 c-8 -13 53 -72 66 -65 5 4 9 14 9 24 0 20 -66 56 -75 41z" }),
        React__default['default'].createElement("path", { d: "M6780 9665 c-7 -8 -8 -15 -2 -15 5 0 15 7 22 15 7 8 8 15 2 15 -5 0\n-15 -7 -22 -15z" }),
        React__default['default'].createElement("path", { d: "M4190 9659 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M2841 9621 c-13 -23 -14 -31 -3 -31 13 0 32 39 22 45 -5 3 -14 -3\n-19 -14z" }),
        React__default['default'].createElement("path", { d: "M2970 9620 c-12 -23 -6 -40 16 -40 9 0 14 11 14 30 0 35 -14 39 -30\n10z" }),
        React__default['default'].createElement("path", { d: "M3986 9631 c-3 -5 1 -12 10 -15 27 -10 44 -7 44 9 0 16 -45 21 -54 6z" }),
        React__default['default'].createElement("path", { d: "M4071 9621 c-11 -7 -9 -10 8 -16 25 -8 36 -2 26 14 -8 13 -15 14 -34\n2z" }),
        React__default['default'].createElement("path", { d: "M5608 9613 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M7680 9603 c0 -13 13 -27 52 -55 20 -15 44 -35 53 -45 17 -16 17 -16\n10 7 -13 40 -46 78 -78 90 -36 12 -37 12 -37 3z" }),
        React__default['default'].createElement("path", { d: "M3060 9580 c0 -19 11 -26 23 -14 8 8 -3 34 -14 34 -5 0 -9 -9 -9 -20z" }),
        React__default['default'].createElement("path", { d: "M3907 9580 c8 -30 38 -43 53 -24 11 12 10 17 -6 29 -29 22 -53 19\n-47 -5z" }),
        React__default['default'].createElement("path", { d: "M5648 9570 c-3 -20 0 -30 9 -30 7 0 13 3 13 8 0 4 3 17 6 30 5 16 2\n22 -9 22 -9 0 -16 -12 -19 -30z" }),
        React__default['default'].createElement("path", { d: "M7164 9581 c11 -11 31 -21 45 -21 22 0 23 2 11 14 -8 8 -28 18 -45\n22 l-30 7 19 -22z" }),
        React__default['default'].createElement("path", { d: "M2877 9583 c-4 -3 -7 -13 -7 -21 0 -12 3 -12 15 -2 8 7 15 16 15 21\n0 11 -14 12 -23 2z" }),
        React__default['default'].createElement("path", { d: "M2986 9551 c-10 -11 -16 -26 -14 -34 2 -9 11 -2 25 19 24 37 17 46\n-11 15z" }),
        React__default['default'].createElement("path", { d: "M6188 9563 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M4002 9547 c-9 -11 -10 -17 -2 -22 15 -9 23 -1 18 21 -3 15 -4 16\n-16 1z" }),
        React__default['default'].createElement("path", { d: "M3770 9532 c-20 -16 -21 -20 -7 -25 11 -4 21 1 28 14 15 29 6 33 -21\n11z" }),
        React__default['default'].createElement("path", { d: "M3843 9538 c0 -7 -4 -21 -8 -30 -5 -13 -2 -18 9 -18 23 0 32 29 14\n46 -11 11 -15 12 -15 2z" }),
        React__default['default'].createElement("path", { d: "M2759 9512 c-26 -12 -69 -49 -69 -61 0 -16 20 -13 26 4 4 8 12 15 18\n15 7 0 22 11 34 25 22 25 20 29 -9 17z" }),
        React__default['default'].createElement("path", { d: "M6778 9483 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M7910 9481 c0 -5 7 -12 16 -15 22 -9 24 -8 18 9 -7 16 -34 21 -34 6z" }),
        React__default['default'].createElement("path", { d: "M3710 9465 c-7 -8 -20 -15 -29 -15 -9 0 8 -14 38 -30 60 -33 97 -39\n87 -15 -4 10 3 19 19 27 13 6 26 17 29 24 4 10 -6 12 -45 8 -27 -2 -58 0 -68\n6 -14 7 -22 6 -31 -5z" }),
        React__default['default'].createElement("path", { d: "M3890 9459 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M6920 9450 c-8 -5 -34 -10 -57 -10 -24 0 -43 -4 -43 -8 0 -12 49 -34\n60 -27 5 3 18 0 28 -6 16 -10 25 -8 55 17 25 19 32 31 24 36 -17 11 -49 10\n-67 -2z" }),
        React__default['default'].createElement("path", { d: "M5970 9420 c0 -25 8 -25 40 0 l25 20 -32 0 c-26 0 -33 -4 -33 -20z" }),
        React__default['default'].createElement("path", { d: "M5879 9363 c0 -5 -3 -20 -5 -34 -3 -18 3 -32 17 -45 l22 -19 -6 34\nc-4 18 -7 42 -7 52 0 18 -19 28 -21 12z" }),
        React__default['default'].createElement("path", { d: "M6140 9360 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0\n-16 -4 -16 -10z" }),
        React__default['default'].createElement("path", { d: "M6912 9348 c3 -7 15 -15 27 -16 16 -3 22 1 19 10 -3 7 -15 15 -27 16\n-16 3 -22 -1 -19 -10z" }),
        React__default['default'].createElement("path", { d: "M7892 9348 c3 -7 13 -15 22 -16 12 -3 17 1 14 10 -3 7 -13 15 -22 16\n-12 3 -17 -1 -14 -10z" }),
        React__default['default'].createElement("path", { d: "M2792 9330 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M2757 9320 c3 -11 7 -20 9 -20 2 0 4 9 4 20 0 11 -4 20 -9 20 -5 0\n-7 -9 -4 -20z" }),
        React__default['default'].createElement("path", { d: "M6190 9325 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0\n-10 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M6120 9317 c0 -3 5 -18 12 -32 14 -32 59 -37 51 -5 -3 11 -13 20 -22\n20 -9 0 -22 5 -29 12 -7 7 -12 9 -12 5z" }),
        React__default['default'].createElement("path", { d: "M6323 9313 c-7 -3 -13 -10 -13 -16 0 -6 -7 -19 -17 -29 -9 -11 -11\n-18 -5 -18 7 0 12 5 12 10 0 12 32 13 46 1 13 -12 64 -23 64 -13 0 8 -29 37\n-60 59 -8 6 -21 8 -27 6z" }),
        React__default['default'].createElement("path", { d: "M7960 9305 c7 -9 15 -13 17 -11 7 7 -7 26 -19 26 -6 0 -6 -6 2 -15z" }),
        React__default['default'].createElement("path", { d: "M2709 9288 c-1 -2 -3 -12 -4 -23 -2 -11 -6 -27 -9 -36 -4 -9 2 -23\n15 -35 21 -19 21 -19 45 9 13 16 24 32 24 38 0 12 -17 12 -25 -1 -3 -5 -13\n-10 -21 -10 -13 0 -12 4 1 30 15 29 15 30 -5 30 -11 0 -21 -1 -21 -2z" }),
        React__default['default'].createElement("path", { d: "M5820 9286 c0 -9 30 -14 35 -6 4 6 -3 10 -14 10 -12 0 -21 -2 -21 -4z" }),
        React__default['default'].createElement("path", { d: "M7900 9273 c0 -12 93 -74 99 -67 9 8 -66 74 -84 74 -8 0 -15 -3 -15\n-7z" }),
        React__default['default'].createElement("path", { d: "M5979 9256 c-24 -23 -58 -29 -65 -12 -8 20 -24 20 -50 2 -18 -14 -18\n-15 9 -36 22 -18 25 -25 16 -36 -6 -8 -20 -14 -30 -14 -25 0 -24 -15 2 -51 16\n-23 24 -27 38 -20 10 6 27 7 39 4 12 -3 22 -1 22 5 0 14 -33 75 -45 84 -6 5\n-3 8 7 8 27 0 48 -11 48 -26 0 -19 16 -18 24 1 3 8 10 15 16 15 17 0 24 -31 9\n-40 -16 -11 -12 -15 24 -24 16 -4 27 -2 27 4 0 5 -7 10 -15 10 -8 0 -15 7 -15\n16 0 13 7 15 43 9 23 -4 44 -11 45 -16 6 -15 22 1 22 22 0 10 7 19 15 19 8 0\n15 5 15 10 0 6 -9 10 -20 10 -11 0 -20 3 -20 8 0 4 -7 16 -15 27 -15 19 -15\n19 -30 -2 -11 -15 -25 -21 -50 -20 -29 1 -35 5 -35 23 0 29 -13 37 -31 20z\nm-59 -120 c0 -11 -19 -15 -25 -6 -3 5 1 10 9 10 9 0 16 -2 16 -4z" }),
        React__default['default'].createElement("path", { d: "M6045 9259 c-10 -15 3 -25 16 -12 7 7 7 13 1 17 -6 3 -14 1 -17 -5z" }),
        React__default['default'].createElement("path", { d: "M8070 9245 c0 -14 7 -28 15 -32 21 -8 24 -3 18 30 -7 34 -33 36 -33\n2z" }),
        React__default['default'].createElement("path", { d: "M6895 9250 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0\n-12 -4 -9 -10z" }),
        React__default['default'].createElement("path", { d: "M6202 9230 c-17 -28 -16 -30 21 -29 17 1 24 3 15 6 -21 5 -24 29 -5\n36 8 4 7 6 -3 6 -8 1 -21 -8 -28 -19z" }),
        React__default['default'].createElement("path", { d: "M6327 9210 c-17 -24 -17 -25 0 -29 10 -2 25 -8 33 -15 12 -9 13 -8 3\n4 -6 8 -13 26 -15 40 l-3 25 -18 -25z" }),
        React__default['default'].createElement("path", { d: "M7920 9196 c0 -9 4 -16 9 -16 5 0 22 -14 38 -31 39 -42 82 -64 97\n-49 12 12 -7 30 -35 30 -8 0 -28 12 -45 28 -53 50 -64 57 -64 38z" }),
        React__default['default'].createElement("path", { d: "M6642 9119 c-13 -5 -20 -13 -17 -19 8 -12 25 -13 45 0 23 14 0 30\n-28 19z" }),
        React__default['default'].createElement("path", { d: "M6830 9086 c0 -9 7 -16 16 -16 9 0 14 5 12 12 -6 18 -28 21 -28 4z" }),
        React__default['default'].createElement("path", { d: "M7275 9090 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0\n-13 -4 -16 -10z" }),
        React__default['default'].createElement("path", { d: "M6030 9055 c0 -8 -7 -15 -15 -15 -8 0 -15 -7 -15 -15 0 -12 12 -15\n56 -14 l55 2 -30 20 c-17 10 -28 23 -25 28 3 5 -2 9 -10 9 -9 0 -16 -7 -16\n-15z" }),
        React__default['default'].createElement("path", { d: "M5288 9043 c-31 -16 -38 -43 -10 -43 13 0 49 49 39 55 -1 1 -14 -5\n-29 -12z" }),
        React__default['default'].createElement("path", { d: "M3243 9042 c-20 -13 -40 -97 -53 -219 -11 -108 -9 -140 10 -128 16\n10 23 -18 8 -29 -16 -12 -39 -101 -32 -121 3 -6 0 -31 -5 -55 -6 -25 -6 -49\n-1 -55 5 -6 2 -18 -6 -30 -20 -27 -18 -186 2 -178 22 8 16 -23 -7 -39 -20 -13\n-23 -29 -35 -213 -13 -191 -22 -297 -43 -519 -14 -137 -28 -303 -46 -536 -8\n-107 -20 -247 -25 -310 -6 -63 -15 -216 -20 -340 -12 -289 -20 -397 -30 -440\n-17 -69 -32 -299 -35 -535 -2 -136 -10 -283 -18 -340 -8 -55 -15 -163 -16\n-239 -1 -75 -4 -143 -6 -149 -3 -7 -9 -84 -15 -172 -6 -88 -17 -236 -25 -330\n-9 -93 -18 -224 -22 -290 -5 -105 -3 -122 11 -134 13 -11 22 -11 39 -3 12 6\n39 13 60 17 64 10 70 33 82 290 3 61 9 164 14 230 5 73 5 143 0 179 -7 43 -6\n79 5 140 18 97 25 175 31 361 2 77 9 188 15 246 6 59 10 149 9 200 -1 52 6\n171 14 264 8 94 18 242 22 330 3 88 15 221 26 295 14 102 20 215 25 465 5 337\n7 357 70 805 8 58 19 137 24 175 10 74 36 324 44 435 5 62 -8 113 -21 83 -6\n-17 -30 -16 -36 1 -8 20 2 26 33 19 34 -6 36 0 46 125 5 73 4 92 -7 92 -8 0\n-5 6 6 14 16 12 20 29 23 96 l4 82 -31 -16 c-41 -22 -39 -5 4 35 23 22 35 42\n35 61 0 15 4 29 8 32 15 9 50 -31 57 -66 11 -50 54 -138 70 -144 17 -7 45 -60\n45 -85 0 -17 63 -143 223 -449 189 -361 240 -454 259 -471 10 -9 18 -25 18\n-36 0 -12 7 -26 15 -33 8 -7 20 -30 25 -51 6 -22 35 -74 63 -117 29 -42 77\n-126 106 -187 81 -168 101 -207 191 -380 46 -88 112 -216 147 -285 77 -152\n102 -196 162 -280 25 -36 101 -175 168 -310 125 -250 227 -446 244 -466 5 -6\n20 -9 34 -6 14 2 32 -1 40 -8 13 -11 12 -16 -5 -40 -11 -16 -16 -31 -11 -34 5\n-3 11 1 15 9 7 20 36 19 36 0 0 -9 -7 -18 -15 -21 -23 -9 -18 -36 13 -69 79\n-85 148 -106 196 -59 14 15 29 38 32 51 10 38 -4 101 -27 124 -14 14 -18 24\n-11 31 12 12 32 2 32 -15 0 -17 39 -49 50 -42 4 3 21 38 35 78 33 87 52 134\n68 166 9 19 9 25 -1 28 -8 3 -1 18 21 43 18 21 38 55 46 75 7 21 37 88 66 149\n30 61 72 156 95 211 23 55 52 123 65 150 12 28 34 77 49 110 14 33 33 71 41\n85 9 14 29 54 46 89 17 36 49 101 70 144 21 44 39 85 39 92 0 6 -11 18 -25 25\n-31 17 -23 30 19 30 19 0 38 6 43 13 6 6 63 111 128 232 65 121 135 249 155\n285 150 259 352 704 351 773 -1 85 -15 113 -45 87 -10 -7 -16 -8 -21 0 -3 5\n-9 10 -13 10 -11 0 -54 -78 -162 -290 -29 -58 -77 -145 -105 -195 -65 -111\n-158 -292 -210 -405 -21 -47 -72 -155 -113 -240 -41 -85 -91 -191 -112 -235\n-42 -91 -101 -216 -136 -290 -13 -28 -24 -58 -24 -67 0 -23 -56 -132 -76 -149\n-14 -12 -283 -541 -339 -667 -18 -41 -18 -45 -1 -72 16 -28 16 -30 -3 -49 -12\n-12 -27 -18 -36 -15 -11 4 -15 0 -15 -17 -1 -16 -16 -37 -46 -63 -25 -21 -47\n-37 -49 -35 -11 11 -87 153 -156 289 -43 85 -100 193 -128 240 -27 47 -77 133\n-112 193 -59 102 -79 125 -79 92 0 -8 -9 -15 -20 -15 -25 0 -27 37 -3 55 16\n12 15 17 -12 66 -16 29 -41 78 -56 109 -22 42 -35 56 -55 60 -26 5 -27 6 -10\n23 13 13 15 21 8 30 -6 7 -77 143 -158 302 -80 160 -150 295 -154 300 -13 17\n-215 421 -320 639 -55 114 -113 228 -130 253 -16 24 -30 47 -30 51 0 5 -19 39\n-43 77 -23 39 -74 125 -111 192 -43 75 -78 125 -93 132 -14 6 -20 16 -17 25 7\n17 -155 348 -166 341 -4 -3 -10 17 -14 43 -8 58 -62 142 -114 177 -40 26 -118\n42 -139 27z m214 -238 c3 -9 0 -20 -8 -25 -21 -13 -29 -11 -29 9 0 33 26 44\n37 16z m-112 -104 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8\n-4 11 -10z m210 -90 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0\n8 -4 11 -10z m-275 -138 c0 -16 7 -37 15 -48 23 -31 17 -36 -15 -12 -29 21\n-41 64 -23 81 14 14 23 6 23 -21z m18 -266 c-7 -8 -15 -12 -17 -11 -5 6 10 25\n20 25 5 0 4 -6 -3 -14z m3537 -144 c-9 -9 -35 8 -35 24 0 16 2 16 20 -1 11\n-10 18 -20 15 -23z m-2121 -1728 c3 -7 -3 -18 -14 -24 -18 -10 -20 -7 -20 19\n0 22 4 29 14 25 8 -3 17 -12 20 -20z m846 -804 c0 -5 -4 -10 -10 -10 -5 0 -10\n5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-337 -6 c9 -10 -4 -34 -19 -34 -8\n0 -14 9 -14 20 0 19 19 27 33 14z m277 -109 c0 -8 -4 -15 -10 -15 -5 0 -10 7\n-10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m-240 -59 c0 -3 -4 -8 -10 -11 -5 -3\n-10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m90 -216 c0 -5 -5 -10 -11 -10\n-5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m80 5 c0 -3 -9 -14 -20 -25\n-11 -11 -20 -18 -20 -16 0 2 -3 11 -6 19 -3 10 2 17 13 20 27 7 33 7 33 2z" }),
        React__default['default'].createElement("path", { d: "M6821 9034 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M8477 9044 c-10 -11 -8 -44 2 -44 6 0 13 4 16 10 8 12 -9 43 -18 34z" }),
        React__default['default'].createElement("path", { d: "M5860 8990 c0 -15 5 -20 18 -18 9 2 17 10 17 18 0 8 -8 16 -17 18\n-13 2 -18 -3 -18 -18z" }),
        React__default['default'].createElement("path", { d: "M6095 8989 c-4 -6 -5 -12 -2 -15 7 -7 37 7 37 17 0 13 -27 11 -35 -2z" }),
        React__default['default'].createElement("path", { d: "M8330 8946 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3\n-10 -1 -10 -9z" }),
        React__default['default'].createElement("path", { d: "M8425 8900 c9 -18 23 -30 35 -30 27 0 25 6 -7 35 -38 33 -47 31 -28\n-5z" }),
        React__default['default'].createElement("path", { d: "M5190 8910 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\n-4 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M6606 8911 c-3 -5 1 -11 9 -15 15 -6 29 7 18 18 -9 9 -21 8 -27 -3z" }),
        React__default['default'].createElement("path", { d: "M8623 8881 c-16 -25 -17 -51 -3 -51 14 0 22 23 18 50 -3 21 -3 21\n-15 1z" }),
        React__default['default'].createElement("path", { d: "M8505 8870 c-7 -12 30 -55 79 -91 21 -16 34 -29 28 -29 -17 0 -15\n-21 8 -65 21 -42 19 -60 -4 -29 -12 15 -18 17 -33 8 -23 -14 -61 -1 -69 23\n-23 68 -54 108 -54 68 0 -18 -16 -20 -26 -4 -4 7 -8 30 -9 51 -3 41 -25 80\n-25 43 0 -10 -7 -27 -16 -37 -15 -16 -15 -18 -1 -24 21 -8 10 -34 -13 -34 -11\n0 -22 -5 -25 -11 -9 -14 22 -47 48 -51 28 -4 36 -38 9 -38 -11 0 -25 6 -31 14\n-7 8 -23 17 -36 20 -14 4 -25 11 -25 17 0 8 -4 8 -14 0 -11 -9 -18 -8 -30 4\n-12 12 -16 13 -16 3 0 -7 13 -22 29 -32 32 -22 57 -82 37 -89 -13 -5 -48 11\n-58 27 -4 6 -11 7 -15 2 -4 -4 2 -15 15 -23 23 -16 29 -47 11 -59 -7 -4 -10\n-25 -7 -55 4 -42 2 -48 -16 -53 -33 -9 -39 -7 -33 9 7 18 -5 26 -22 16 -10 -7\n-10 -14 3 -39 20 -38 32 -112 18 -112 -5 0 -12 -9 -15 -20 -3 -10 -2 -19 2\n-18 27 3 32 -4 25 -37 -5 -27 -3 -36 11 -41 11 -5 15 -16 13 -38 -3 -26 1 -32\n21 -34 13 -2 31 -10 38 -18 8 -8 25 -14 38 -14 24 0 42 -30 30 -50 -4 -6 -3\n-25 0 -42 7 -30 8 -31 21 -14 12 18 15 18 38 2 27 -17 106 -143 106 -168 0\n-23 -51 -20 -77 5 -13 11 -26 17 -30 13 -11 -10 49 -57 64 -51 7 2 20 -3 28\n-12 12 -12 19 -13 28 -4 16 16 27 13 27 -8 0 -12 11 -23 28 -29 15 -6 42 -24\n61 -42 26 -24 36 -28 43 -18 6 10 13 7 29 -15 l21 -28 24 27 c20 21 27 24 39\n14 8 -7 15 -23 15 -36 0 -29 20 -42 32 -20 10 18 52 13 79 -11 10 -9 26 -12\n42 -8 14 4 28 2 31 -4 11 -17 26 -13 26 8 0 10 7 22 16 25 16 6 16 29 -1 69\n-5 13 -2 17 13 17 15 0 19 -5 15 -20 -4 -14 0 -20 12 -20 13 0 16 6 13 24 -4\n19 1 26 29 37 18 7 33 19 33 26 0 7 -6 10 -15 7 -22 -9 -32 26 -12 38 10 5 17\n21 17 37 0 35 16 51 50 51 20 0 9 19 -12 22 -19 2 -23 9 -23 36 0 18 -6 37\n-14 41 -7 5 -11 13 -7 19 7 12 -35 79 -64 102 -21 17 -39 90 -21 90 6 0 11 -4\n11 -10 0 -5 5 -10 11 -10 6 0 8 7 5 16 -4 11 1 18 14 21 24 6 24 12 5 37 -19\n26 -19 42 0 26 8 -7 15 -19 15 -27 0 -7 6 -16 14 -19 8 -3 17 -20 20 -38 4\n-18 15 -41 26 -51 19 -17 20 -17 20 2 0 10 -17 48 -39 84 -21 35 -42 79 -46\n97 -5 25 -12 32 -31 32 -14 0 -30 10 -39 24 -9 13 -25 26 -35 29 -20 5 -28 27\n-10 27 18 0 10 18 -11 23 -11 3 -23 15 -26 26 -3 12 -11 21 -19 21 -7 0 -22\n17 -33 38 -23 44 -78 99 -88 88 -5 -4 0 -13 10 -20 9 -7 17 -19 17 -27 0 -9\n-3 -10 -8 -3 -4 6 -17 16 -30 23 -28 15 -52 70 -41 93 13 25 11 58 -5 74 -20\n20 -23 18 -29 -16 -4 -16 -10 -30 -15 -30 -11 0 -72 60 -72 71 0 5 -20 9 -45\n9 -41 0 -48 3 -73 40 -28 41 -37 47 -47 30z m169 -155 c4 -10 -1 -15 -14 -15\n-20 0 -26 11 -13 23 10 11 20 8 27 -8z m51 -35 c3 -5 11 -7 18 -4 9 3 13 -6\n13 -31 0 -23 -5 -35 -14 -35 -18 0 -51 40 -52 63 0 18 25 24 35 7z m48 -985\nc7 -16 -8 -29 -23 -20 -15 9 -12 35 4 35 8 0 16 -7 19 -15z" }),
        React__default['default'].createElement("path", { d: "M8260 8840 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0\n-16 -4 -16 -10z" }),
        React__default['default'].createElement("path", { d: "M8707 8809 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 -14 6 -15 5 -6 -5z" }),
        React__default['default'].createElement("path", { d: "M5347 8793 c-15 -14 -6 -31 13 -26 11 3 20 12 20 19 0 14 -22 19 -33\n7z" }),
        React__default['default'].createElement("path", { d: "M8168 8789 c-2 -8 1 -30 8 -49 10 -31 12 -32 18 -12 8 24 -18 84 -26\n61z" }),
        React__default['default'].createElement("path", { d: "M4206 8763 c-3 -10 -15 -33 -26 -52 -29 -47 -16 -52 24 -8 19 20 39\n37 45 37 6 0 11 9 11 20 0 26 -45 28 -54 3z" }),
        React__default['default'].createElement("path", { d: "M7950 8760 c0 -12 11 -32 25 -46 21 -21 31 -24 58 -19 44 10 49 14\n42 34 -4 9 -8 23 -9 30 -2 8 -9 17 -16 19 -9 3 -11 -1 -6 -13 5 -15 2 -17 -26\n-11 -18 4 -34 11 -36 16 -7 19 -32 10 -32 -10z" }),
        React__default['default'].createElement("path", { d: "M5206 8755 c-17 -13 -17 -15 -3 -21 22 -8 50 3 45 18 -6 18 -21 19\n-42 3z" }),
        React__default['default'].createElement("path", { d: "M5156 8735 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0\n-7 -7 -4 -15z" }),
        React__default['default'].createElement("path", { d: "M8841 8734 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M4056 8711 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4\n-12 2 -15 -3z" }),
        React__default['default'].createElement("path", { d: "M4710 8700 c-8 -5 -11 -12 -7 -16 4 -4 13 -2 19 4 15 15 7 24 -12 12z" }),
        React__default['default'].createElement("path", { d: "M5162 8683 c2 -18 10 -29 22 -31 13 -3 16 0 10 10 -9 13 -10 18 -13\n38 0 6 -6 10 -12 10 -6 0 -9 -12 -7 -27z" }),
        React__default['default'].createElement("path", { d: "M4220 8680 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0\n-15 -4 -15 -10z" }),
        React__default['default'].createElement("path", { d: "M8210 8659 c0 -11 5 -17 10 -14 6 3 10 13 10 21 0 8 -4 14 -10 14 -5\n0 -10 -9 -10 -21z" }),
        React__default['default'].createElement("path", { d: "M8890 8665 c0 -10 10 -15 32 -15 30 0 31 1 12 15 -25 19 -44 19 -44\n0z" }),
        React__default['default'].createElement("path", { d: "M4065 8651 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z" }),
        React__default['default'].createElement("path", { d: "M4107 8632 c-25 -28 -21 -55 16 -89 38 -37 50 -52 62 -78 8 -19 9\n-19 12 2 3 17 14 24 45 30 37 7 41 11 43 41 2 21 -1 32 -9 29 -6 -2 -11 -11\n-11 -20 0 -16 -32 -46 -50 -46 -5 0 -19 6 -29 14 -16 12 -17 17 -6 30 10 12\n10 18 0 30 -17 21 -30 19 -30 -5 0 -11 -7 -20 -15 -20 -9 0 -12 6 -8 16 3 9 0\n20 -8 25 -12 7 -12 12 -1 30 17 27 10 34 -11 11z" }),
        React__default['default'].createElement("path", { d: "M4845 8630 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0\n-13 -4 -16 -10z" }),
        React__default['default'].createElement("path", { d: "M5252 8628 c3 -7 13 -15 22 -16 12 -3 17 1 14 10 -3 7 -13 15 -22 16\n-12 3 -17 -1 -14 -10z" }),
        React__default['default'].createElement("path", { d: "M4335 8620 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\n-8 -4 -11 -10z" }),
        React__default['default'].createElement("path", { d: "M8920 8600 c10 -18 40 -29 40 -14 0 10 -28 34 -40 34 -8 0 -8 -6 0\n-20z" }),
        React__default['default'].createElement("path", { d: "M5315 8559 c-9 -39 4 -53 37 -40 38 14 43 29 14 43 -14 6 -26 15 -26\n20 0 22 -19 4 -25 -23z" }),
        React__default['default'].createElement("path", { d: "M4360 8555 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0\n-10 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M8046 8562 c-4 -6 -2 -20 3 -30 11 -21 10 -92 -1 -92 -20 0 -5 -32\n18 -40 18 -7 24 -15 20 -26 -7 -17 33 -76 46 -68 14 9 9 34 -12 51 -11 10 -20\n27 -20 38 0 11 -5 27 -10 35 -6 10 -4 20 6 31 13 14 12 19 -6 41 -11 15 -24\n36 -28 49 -6 14 -11 18 -16 11z" }),
        React__default['default'].createElement("path", { d: "M7990 8546 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3\n-10 -1 -10 -9z" }),
        React__default['default'].createElement("path", { d: "M4608 8543 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" }),
        React__default['default'].createElement("path", { d: "M4406 8524 c-10 -25 -7 -34 9 -28 8 4 15 15 15 25 0 23 -16 25 -24 3z" }),
        React__default['default'].createElement("path", { d: "M4535 8529 c-10 -15 1 -23 20 -15 9 3 13 10 10 16 -8 13 -22 13 -30\n-1z" }),
        React__default['default'].createElement("path", { d: "M4497 8483 c-27 -14 -27 -15 -10 -38 21 -27 37 -18 48 28 8 30 3 32\n-38 10z" }),
        React__default['default'].createElement("path", { d: "M5080 8476 c0 -26 -15 -42 -45 -47 -13 -3 -22 -16 -26 -39 -7 -30 -4\n-38 18 -57 30 -26 43 -27 98 -8 22 8 48 15 58 15 12 0 17 8 17 31 0 31 -1 31\n-39 25 -34 -5 -39 -3 -44 15 -6 23 -27 17 -27 -7 0 -8 -7 -14 -15 -14 -22 0\n-18 37 5 43 15 4 20 14 20 36 0 17 -4 31 -10 31 -5 0 -10 -11 -10 -24z m-30\n-96 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z" }),
        React__default['default'].createElement("path", { d: "M9200 8495 c0 -11 24 -55 30 -55 3 0 15 -8 26 -18 35 -33 74 -55 74\n-42 0 21 -21 51 -31 44 -6 -3 -26 12 -45 35 -31 36 -54 51 -54 36z" }),
        React__default['default'].createElement("path", { d: "M4866 8472 c-2 -4 2 -15 9 -25 11 -16 16 -16 34 -5 25 15 26 24 5 32\n-21 8 -42 8 -48 -2z" }),
        React__default['default'].createElement("path", { d: "M5440 8464 c0 -8 5 -12 10 -9 6 4 8 11 5 16 -9 14 -15 11 -15 -7z" }),
        React__default['default'].createElement("path", { d: "M6390 8470 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0\n-16 -4 -16 -10z" }),
        React__default['default'].createElement("path", { d: "M8135 8470 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\n-7 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M4765 8438 c4 -23 2 -28 -14 -28 -11 0 -24 7 -29 16 -11 19 -27 12\n-34 -13 -4 -13 7 -24 39 -41 43 -22 43 -22 60 -2 10 11 25 20 35 20 17 0 16 2\n-2 20 -11 11 -23 20 -26 20 -4 0 -13 8 -21 18 -13 15 -14 15 -8 -10z" }),
        React__default['default'].createElement("path", { d: "M5534 8435 c-4 -9 -4 -18 -1 -21 10 -10 48 7 44 19 -6 19 -36 20 -43\n2z" }),
        React__default['default'].createElement("path", { d: "M7975 8440 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0\n-12 -4 -9 -10z" }),
        React__default['default'].createElement("path", { d: "M4350 8415 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0\n-10 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M6433 8423 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" }),
        React__default['default'].createElement("path", { d: "M4600 8380 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0\n-15 -4 -15 -10z" }),
        React__default['default'].createElement("path", { d: "M7970 8370 c0 -13 5 -20 13 -17 6 2 12 10 12 17 0 7 -6 15 -12 18 -8\n2 -13 -5 -13 -18z" }),
        React__default['default'].createElement("path", { d: "M5417 8373 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3\n-9 2 -12 -2z" }),
        React__default['default'].createElement("path", { d: "M6470 8370 c0 -5 5 -10 10 -10 6 0 10 -12 10 -27 1 -24 2 -25 11 -11\n7 12 6 24 -1 38 -11 21 -30 27 -30 10z" }),
        React__default['default'].createElement("path", { d: "M4470 8350 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n-10 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M9350 8342 c0 -11 28 -36 58 -52 21 -10 23 -9 20 6 -4 24 -78 67 -78\n46z" }),
        React__default['default'].createElement("path", { d: "M5420 8309 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M4811 8214 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6826 8193 c-3 -4 -6 -13 -6 -22 0 -11 3 -10 14 5 14 18 15 18 21 2\n9 -23 38 -24 33 -1 -3 17 -49 29 -62 16z" }),
        React__default['default'].createElement("path", { d: "M4899 8156 c0 0 -2 -11 -5 -23 -3 -16 1 -23 11 -23 8 0 15 5 15 11 0\n7 11 9 30 6 25 -5 30 -3 30 12 0 15 -8 18 -40 18 -22 0 -40 0 -41 -1z" }),
        React__default['default'].createElement("path", { d: "M9141 8124 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M9255 8131 c-8 -13 41 -97 61 -105 29 -11 27 25 -3 67 -33 44 -47 54\n-58 38z" }),
        React__default['default'].createElement("path", { d: "M4810 8089 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M6860 8090 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0\n-15 -4 -15 -10z" }),
        React__default['default'].createElement("path", { d: "M9221 8084 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M4978 8083 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M4925 8000 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\n-8 -4 -11 -10z" }),
        React__default['default'].createElement("path", { d: "M7488 8004 c-3 -5 -8 -21 -12 -36 -7 -32 -39 -38 -54 -12 -17 31 -26\n-6 -23 -100 1 -57 7 -99 16 -112 8 -12 11 -25 8 -28 -9 -8 -12 -48 -12 -126 0\n-58 2 -67 26 -87 26 -21 25 -38 0 -38 -17 0 -10 -153 14 -304 11 -69 22 -127\n24 -130 1 -3 6 -44 9 -91 4 -47 9 -101 12 -120 2 -19 9 -98 14 -175 5 -77 17\n-201 25 -275 9 -74 20 -196 25 -270 5 -74 17 -178 25 -230 9 -52 19 -121 22\n-152 3 -32 12 -63 19 -69 8 -6 14 -8 14 -4 0 4 7 2 15 -5 8 -7 15 -25 15 -40\n0 -32 40 -86 71 -95 11 -4 24 -16 29 -28 l9 -22 0 23 c1 12 -5 38 -13 57 -8\n18 -12 35 -10 38 2 2 -5 134 -16 292 -11 158 -20 318 -20 354 0 36 -10 113\n-22 171 -16 78 -22 141 -22 245 -1 77 -4 145 -8 151 -8 13 -20 84 -49 299 -21\n164 -26 196 -54 395 -8 63 -20 160 -25 215 -26 262 -38 334 -52 309z" }),
        React__default['default'].createElement("path", { d: "M9420 7978 c0 -6 27 -37 60 -67 32 -31 64 -68 69 -83 14 -38 32 -35\n29 5 -2 38 -14 58 -32 51 -7 -3 -25 13 -39 35 -28 42 -87 82 -87 59z" }),
        React__default['default'].createElement("path", { d: "M4880 7965 c0 -9 5 -15 11 -13 6 2 11 8 11 13 0 5 -5 11 -11 13 -6 2\n-11 -4 -11 -13z" }),
        React__default['default'].createElement("path", { d: "M9465 7871 c-5 -17 -10 -19 -25 -11 -12 7 -21 7 -25 0 -10 -17 19\n-134 39 -154 15 -15 18 -28 13 -74 -5 -49 -3 -60 22 -96 16 -23 43 -65 61 -93\n19 -29 38 -53 44 -53 6 0 21 -3 34 -6 37 -10 26 20 -28 76 -42 44 -50 57 -49\n88 1 21 3 30 6 20 4 -17 30 -31 43 -23 4 2 10 -9 14 -26 4 -22 11 -29 24 -27\n11 2 26 -3 35 -11 31 -25 20 26 -13 61 -16 17 -30 34 -30 38 0 15 14 19 31 9\n16 -8 19 -6 19 15 0 14 -4 28 -10 31 -5 3 -10 21 -10 38 0 25 -9 39 -38 63\n-21 17 -52 35 -70 39 -35 7 -62 38 -62 70 0 11 -4 26 -9 34 -7 11 -10 9 -16\n-8z m15 -116 c0 -9 -6 -12 -15 -9 -8 4 -12 10 -9 15 8 14 24 10 24 -6z m65\n-23 c29 -20 87 -103 81 -117 -10 -26 -26 -16 -26 15 0 19 -5 30 -14 30 -12 0\n-66 60 -66 74 0 8 13 7 25 -2z" }),
        React__default['default'].createElement("path", { d: "M9217 7793 c-12 -11 -8 -22 20 -48 29 -26 68 -34 61 -12 -3 6 -14 16\n-26 22 -12 5 -22 18 -22 27 0 18 -20 24 -33 11z" }),
        React__default['default'].createElement("path", { d: "M9620 7781 c0 -15 6 -21 21 -21 14 0 19 5 17 17 -5 26 -38 29 -38 4z" }),
        React__default['default'].createElement("path", { d: "M9385 7781 c-3 -5 -1 -12 5 -16 5 -3 10 1 10 9 0 18 -6 21 -15 7z" }),
        React__default['default'].createElement("path", { d: "M9288 7652 c-21 -4 -23 -13 -7 -29 9 -9 9 -20 0 -44 -15 -43 1 -61\n27 -31 24 27 38 28 54 2 14 -22 43 -27 50 -7 7 18 -19 75 -40 86 -11 6 -24 6\n-32 1 -10 -6 -18 -4 -25 8 -5 10 -18 16 -27 14z" }),
        React__default['default'].createElement("path", { d: "M8251 7614 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M9116 7611 c-3 -5 5 -11 19 -13 28 -6 34 6 9 16 -20 8 -22 8 -28 -3z" }),
        React__default['default'].createElement("path", { d: "M8049 7503 c-12 -31 5 -58 21 -33 8 12 10 11 10 -7 0 -12 3 -28 6\n-37 5 -12 0 -16 -20 -16 -30 0 -33 -12 -9 -36 13 -13 14 -19 5 -22 -20 -6 -11\n-146 23 -367 8 -49 19 -142 24 -205 6 -63 13 -135 15 -160 3 -25 10 -99 16\n-165 20 -216 39 -273 70 -215 13 24 43 26 61 4 10 -12 10 -22 2 -45 -9 -23 -9\n-29 2 -29 8 0 18 -8 24 -17 8 -16 14 -13 45 22 19 22 35 46 36 53 0 18 16 15\n31 -8 11 -16 21 -19 45 -14 30 6 32 8 27 45 -6 39 11 56 23 24 4 -10 13 -13\n26 -9 22 7 48 -11 48 -34 0 -14 27 -41 43 -42 13 0 7 37 -8 50 -22 18 -18 32\n7 28 28 -4 36 24 17 58 -15 29 -8 38 26 30 17 -4 25 -13 25 -28 0 -12 6 -29\n14 -37 7 -9 16 -48 18 -88 4 -56 2 -75 -11 -87 -14 -15 -14 -19 3 -47 13 -21\n16 -40 12 -64 -4 -19 -2 -36 4 -40 5 -3 10 -15 10 -26 0 -10 7 -19 15 -19 8 0\n15 -7 15 -15 0 -8 -4 -15 -10 -15 -5 0 -10 -9 -10 -20 0 -11 -5 -29 -12 -40\n-15 -24 -4 -37 17 -20 12 10 17 8 27 -15 11 -25 13 -25 25 -9 17 23 16 34 -1\n34 -18 0 -39 27 -31 40 10 16 44 -7 61 -43 17 -35 53 -57 93 -57 13 0 39 -5\n56 -11 l31 -12 -23 -25 c-18 -20 -26 -23 -35 -14 -17 17 -23 15 -36 -13 -16\n-36 -15 -90 3 -105 26 -21 37 -1 15 30 -17 24 -18 29 -5 40 15 12 16 11 19\n-12 0 -7 12 -15 25 -16 21 -3 23 -1 17 21 -5 23 -2 25 41 31 29 4 49 2 53 -4\n8 -12 18 -1 40 43 14 28 25 34 35 17 3 -5 16 -10 29 -10 28 0 52 -25 67 -69\nl12 -34 17 23 c10 13 22 20 28 16 11 -7 5 -46 -8 -46 -4 0 -27 -16 -51 -35\n-25 -20 -55 -35 -70 -35 -30 0 -77 33 -89 64 -7 17 -9 13 -9 -20 -1 -32 6 -49\n25 -72 24 -27 30 -29 57 -20 25 9 32 8 46 -9 9 -11 28 -23 43 -27 20 -5 30\n-15 36 -38 11 -44 32 -48 32 -6 0 19 -5 39 -10 44 -6 6 -7 25 -4 42 5 25 12\n32 29 32 13 0 25 7 29 15 11 29 33 16 84 -49 17 -22 25 -27 34 -18 8 8 8 18 1\n34 -13 29 -6 48 15 48 10 0 22 10 27 21 12 26 30 22 31 -6 1 -47 44 -81 44\n-35 0 11 3 20 8 20 4 0 12 12 19 26 9 20 9 26 -3 30 -8 2 -21 6 -30 9 -8 3\n-14 13 -12 22 2 14 11 17 33 14 32 -3 48 -18 40 -38 -2 -6 2 -29 10 -50 8 -21\n17 -55 20 -75 4 -24 11 -38 20 -38 18 0 19 -14 3 -41 -12 -18 -9 -24 20 -48\n17 -15 32 -33 32 -39 0 -21 -16 -13 -28 13 -6 14 -20 25 -30 25 -39 0 -50 -80\n-17 -120 25 -30 27 -58 6 -72 -12 -7 -21 -18 -21 -25 0 -7 -4 -13 -8 -13 -10\n0 -32 60 -32 89 0 41 -17 12 -29 -48 -7 -33 -16 -63 -21 -66 -6 -4 -10 -15\n-10 -27 0 -11 -13 -32 -29 -47 -27 -26 -28 -27 -8 -27 18 1 22 -4 20 -27 -2\n-24 1 -27 15 -22 9 4 23 8 29 9 18 2 63 -98 52 -115 -5 -8 -8 -27 -8 -44 0\n-17 3 -23 6 -15 4 8 13 20 22 27 9 6 13 15 8 19 -4 4 12 19 36 33 87 53 86 51\n79 111 -6 47 -4 62 16 100 19 35 22 48 13 62 -6 10 -11 26 -12 35 0 11 -3 13\n-6 6 -9 -23 -33 -14 -33 12 0 17 6 25 17 25 15 0 15 1 -1 19 -19 21 -14 44 17\n78 17 19 19 31 14 78 -3 30 -1 57 4 60 5 4 9 -18 9 -50 0 -31 7 -69 16 -86 8\n-16 12 -39 9 -50 -4 -11 0 -26 11 -36 15 -16 17 -16 31 3 7 10 13 28 11 39 -1\n11 1 26 5 33 7 10 -8 53 -44 124 -12 25 -11 39 5 57 19 23 10 141 -11 141 -11\n0 -13 4 -5 13 14 18 24 81 26 172 1 75 0 80 -20 80 -25 0 -54 22 -54 41 0 8\n-7 14 -15 14 -10 0 -15 -10 -15 -32 l0 -33 -19 28 c-16 24 -19 26 -31 12 -18\n-22 -30 -18 -30 10 0 18 5 25 20 25 14 0 20 7 20 21 0 16 -4 19 -21 14 -15 -5\n-19 -4 -15 4 4 6 16 11 27 11 10 0 19 6 19 14 0 8 -8 13 -17 12 -28 -2 -34 70\n-10 112 14 24 20 51 19 93 -1 33 5 71 14 86 7 16 14 38 14 51 0 15 8 26 25 32\n14 5 25 16 25 25 0 8 7 15 15 15 18 0 19 14 3 43 -6 12 -13 49 -14 82 -4 90\n-8 122 -16 131 -5 4 -8 2 -8 -4 0 -7 -7 -12 -16 -12 -13 0 -15 8 -9 51 5 39 4\n50 -5 44 -6 -4 -9 -13 -6 -20 6 -17 -38 -39 -61 -30 -16 6 -16 8 6 16 21 8 23\n14 17 48 -5 34 -3 41 15 46 12 4 26 2 32 -4 6 -6 15 -11 19 -11 14 0 8 64 -7\n84 -13 17 -15 18 -15 3 0 -24 -5 -22 -43 19 -31 34 -35 35 -56 23 -20 -12 -24\n-12 -37 5 -18 25 -3 42 24 27 27 -14 32 -14 32 4 0 25 17 17 39 -20 23 -39 41\n-46 41 -15 0 14 7 20 24 20 20 0 24 6 30 42 4 24 3 45 -4 52 -5 5 -10 20 -10\n33 0 14 -6 23 -15 23 -16 0 -18 -6 -15 -64 2 -34 0 -38 -13 -28 -8 7 -20 34\n-26 60 -14 55 -41 112 -52 112 -5 0 -20 24 -33 54 -15 32 -40 66 -61 81 -42\n33 -54 29 -25 -8 24 -31 27 -77 4 -77 -13 0 -12 -4 5 -25 11 -14 22 -40 26\n-58 3 -18 11 -44 17 -60 9 -22 7 -31 -7 -47 -21 -24 -31 -19 -38 17 -7 43 -30\n96 -50 115 -17 18 -20 18 -53 2 -42 -20 -43 -50 -2 -47 19 1 28 -4 32 -20 11\n-41 7 -48 -19 -41 -15 4 -32 1 -41 -7 -14 -11 -18 -11 -29 4 -13 19 -35 23\n-35 7 0 -6 -11 -15 -25 -20 -19 -7 -25 -17 -25 -39 0 -16 -4 -33 -10 -36 -5\n-3 -10 -2 -10 4 0 5 -15 11 -32 13 -28 2 -35 9 -44 38 -6 19 -21 41 -34 49\n-21 14 -22 14 -18 -25 2 -31 -1 -39 -15 -42 -9 -2 -20 3 -23 12 -3 8 -18 17\n-33 21 -15 3 -42 19 -60 35 -24 23 -42 30 -72 30 -48 0 -76 13 -106 49 l-22\n26 -1 -23 c0 -39 -34 -23 -40 18 l-5 35 -80 0 c-44 0 -91 -6 -105 -12 -34 -17\n-40 -16 -40 5 0 10 -14 37 -31 60 -17 23 -28 49 -25 57 3 9 0 15 -8 15 -8 0\n-16 6 -19 13 -2 6 -7 -3 -11 -21 -8 -35 -22 -34 -36 4 -5 13 -14 24 -20 24 -6\n0 -8 -4 -5 -10 3 -5 1 -19 -5 -31 -15 -27 -58 -20 -94 16 -14 14 -30 25 -36\n25 -5 0 -10 7 -10 16 0 8 -4 12 -10 9 -5 -3 -10 -15 -10 -26 0 -22 -35 -27\n-44 -6 -4 6 -4 2 -2 -10 3 -15 -4 -27 -22 -39 -23 -15 -25 -15 -19 0 5 12 -1\n19 -17 26 -19 7 -25 21 -35 72 -7 35 -18 69 -23 76 -18 21 -48 14 -59 -15z\nm54 -148 c4 -8 2 -17 -3 -20 -6 -4 -10 -4 -10 -1 0 2 -3 11 -6 20 -3 9 -2 16\n4 16 5 0 12 -7 15 -15z m397 -74 c0 -20 6 -30 20 -34 11 -3 20 -12 20 -21 0\n-10 -6 -13 -15 -10 -8 4 -15 10 -15 15 0 5 -9 9 -20 9 -21 0 -27 30 -14 64 9\n24 24 9 24 -23z m-100 -132 c0 -4 16 -17 35 -29 29 -18 35 -28 35 -56 0 -31\n-2 -33 -22 -25 -32 12 -46 4 -41 -23 3 -13 0 -34 -7 -46 -9 -17 -14 -19 -25\n-10 -10 8 -12 18 -6 29 18 34 11 133 -10 147 -13 8 -11 42 4 47 11 4 37 -19\n37 -34z m1150 -78 c0 -11 -4 -23 -10 -26 -5 -3 -10 -2 -10 4 0 5 -3 16 -6 25\n-4 11 -1 16 10 16 9 0 16 -8 16 -19z m-1414 -59 c-10 -10 -29 15 -21 28 6 9\n10 8 17 -4 6 -10 7 -20 4 -24z m669 -12 c14 -27 25 -55 25 -63 0 -25 -25 -66\n-47 -78 -19 -10 -27 -7 -60 18 -21 17 -47 32 -58 34 -14 3 -20 12 -20 29 0 34\n24 36 67 6 22 -15 45 -22 57 -19 20 5 20 6 -5 54 -15 27 -28 49 -31 49 -2 0\n-1 -5 3 -11 3 -6 0 -15 -7 -20 -22 -14 -49 -11 -49 5 0 25 30 46 66 46 30 0\n36 -5 59 -50z m896 -120 c11 -50 -11 -59 -34 -14 -19 37 -15 57 11 52 9 -2 19\n-18 23 -38z m-101 -11 c6 -11 10 -25 8 -31 -5 -14 -38 19 -38 38 0 21 18 17\n30 -7z m-1230 -8 c0 -6 -4 -13 -10 -16 -5 -3 -10 1 -10 9 0 9 5 16 10 16 6 0\n10 -4 10 -9z m240 -12 c0 -11 -4 -17 -10 -14 -5 3 -10 13 -10 21 0 8 5 14 10\n14 6 0 10 -9 10 -21z m27 -181 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12\n1 -19z m98 -19 c13 -20 -5 -81 -26 -86 -10 -3 -19 -9 -19 -14 0 -5 -5 -9 -11\n-9 -16 0 -5 65 16 96 17 26 30 30 40 13z m1055 1 c0 -5 -4 -10 -10 -10 -5 0\n-10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-1040 -161 c0 -5 -4 -9 -10\n-9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10 10 -16z m-96 -15 c11 -29 6\n-44 -14 -44 -11 0 -20 6 -20 14 0 21 11 46 20 46 4 0 11 -7 14 -16z m-79 -94\nc-10 -16 -22 -11 -28 12 -9 32 3 43 20 19 8 -12 11 -26 8 -31z m145 -9 c0 -29\n-2 -32 -15 -21 -15 13 -21 61 -8 73 11 12 23 -15 23 -52z m897 18 c-6 -10 -13\n-15 -15 -9 -6 17 7 42 18 35 6 -4 5 -13 -3 -26z m-517 6 c0 -8 -4 -15 -10 -15\n-5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m-30 -35 c0 -5 -7 -10\n-15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m-215 -322 c17\n-7 38 -21 47 -33 15 -18 17 -18 18 -2 0 21 10 22 35 3 12 -8 16 -19 11 -31 -4\n-11 0 -25 10 -36 15 -16 14 -19 -5 -40 -26 -28 -39 -18 -21 15 11 21 10 27 -4\n42 -16 16 -18 15 -32 -5 -8 -11 -23 -21 -33 -21 -10 0 -29 -10 -43 -23 -26\n-24 -48 -25 -48 -1 0 8 -4 14 -8 14 -4 0 -13 15 -20 33 -10 29 -9 39 7 73 17\n35 18 41 5 55 -12 14 -13 18 -2 21 7 3 22 -8 33 -23 11 -16 34 -34 50 -41z\nm970 -188 c20 0 28 -17 17 -37 -7 -11 -6 -21 3 -30 9 -9 11 -23 5 -49 -18 -81\n-40 -52 -45 62 -2 49 -2 81 1 72 3 -10 12 -18 19 -18z m-713 -42 c-12 -12 -35\n-1 -27 12 3 5 13 6 21 3 10 -4 12 -9 6 -15z m119 -41 c-1 -12 -15 -9 -19 4 -3\n6 1 10 8 8 6 -3 11 -8 11 -12z m209 -68 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16\n0 8 5 12 10 9 6 -3 10 -10 10 -16z m-120 -145 c0 -8 -4 -14 -10 -14 -5 0 -10\n9 -10 21 0 11 5 17 10 14 6 -3 10 -13 10 -21z m488 -422 c2 -7 -3 -12 -12 -12\n-9 0 -16 7 -16 16 0 17 22 14 28 -4z m-119 -106 c-5 -6 -9 10 -8 40 l1 49 8\n-40 c5 -22 4 -44 -1 -49z m-49 54 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6\n5 10 10 10 6 0 10 -4 10 -10z m80 -152 c0 -5 -4 -8 -10 -8 -5 0 -10 10 -10 23\n0 18 2 19 10 7 5 -8 10 -18 10 -22z" }),
        React__default['default'].createElement("path", { d: "M9787 7491 c-3 -12 1 -22 9 -25 9 -3 14 2 14 14 0 26 -17 34 -23 11z" }),
        React__default['default'].createElement("path", { d: "M8130 7485 c0 -8 8 -15 18 -15 9 0 25 -12 34 -27 10 -16 17 -21 17\n-13 0 18 -44 70 -59 70 -5 0 -10 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M9190 7479 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M9666 7452 c-7 -12 17 -66 34 -77 6 -3 10 4 10 18 0 30 -34 75 -44\n59z" }),
        React__default['default'].createElement("path", { d: "M9480 7440 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n-10 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M9815 7425 c-32 -31 -31 -35 5 -70 17 -16 30 -35 30 -43 0 -7 6 -12\n13 -9 12 4 13 29 2 105 -7 48 -16 52 -50 17z" }),
        React__default['default'].createElement("path", { d: "M8215 7420 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\n-7 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M9740 7411 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z" }),
        React__default['default'].createElement("path", { d: "M9526 7402 c-3 -6 -1 -14 5 -17 15 -10 25 3 12 16 -7 7 -13 7 -17 1z" }),
        React__default['default'].createElement("path", { d: "M9673 7335 c-3 -9 2 -24 12 -35 10 -11 28 -42 41 -70 13 -28 30 -50\n39 -50 18 0 20 36 2 47 -7 4 -28 34 -46 66 -18 31 -35 57 -37 57 -3 0 -7 -7\n-11 -15z" }),
        React__default['default'].createElement("path", { d: "M9400 7313 c0 -30 21 -59 33 -46 13 12 7 40 -13 58 -20 18 -20 17\n-20 -12z" }),
        React__default['default'].createElement("path", { d: "M9491 7284 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6857 7148 c-28 -34 -337 -642 -337 -663 0 -7 -6 -18 -14 -24 -17\n-15 -59 -148 -52 -167 3 -7 15 -14 27 -14 22 0 22 0 3 -18 -17 -16 -20 -17\n-30 -4 -15 21 -28 -1 -29 -50 -1 -43 -21 -71 -34 -50 -10 16 -55 -56 -65 -105\n-6 -25 -4 -32 11 -36 15 -3 13 -6 -10 -15 -30 -13 -28 -32 4 -32 10 0 19 -4\n19 -10 0 -5 -9 -10 -20 -10 -23 0 -24 -3 -8 -30 18 -28 -2 -47 -29 -29 -31 19\n-49 5 -78 -56 -20 -40 -25 -63 -20 -86 6 -28 9 -30 38 -24 18 4 39 14 47 24\n12 14 21 16 43 8 15 -5 35 -6 45 -2 14 5 11 9 -15 20 -37 16 -39 21 -18 49 8\n11 12 29 9 43 -5 17 -2 23 9 23 9 0 19 -4 22 -10 16 -26 74 13 75 50 0 9 6 22\n13 29 10 10 9 15 -5 25 -10 7 -18 25 -18 39 0 23 2 24 33 17 17 -4 39 -11 47\n-14 9 -4 25 2 37 14 31 28 40 25 45 -16 3 -26 0 -38 -11 -42 -8 -3 -17 1 -20\n9 -2 8 -9 -6 -16 -31 -10 -40 -9 -48 9 -74 18 -27 20 -27 32 -11 9 11 19 15\n31 11 17 -7 17 -8 0 -17 -12 -7 -15 -17 -11 -33 4 -17 0 -28 -14 -37 -11 -8\n-22 -32 -26 -57 -6 -41 -5 -42 14 -32 11 6 20 15 20 20 0 6 7 10 15 10 8 0 15\n-9 15 -20 0 -11 -4 -20 -10 -20 -5 0 -7 -13 -3 -30 5 -28 4 -30 -25 -30 -30 0\n-51 -27 -38 -49 8 -13 55 -5 75 13 22 20 38 20 57 1 9 -8 29 -15 45 -15 22 0\n32 -7 41 -25 7 -16 18 -24 32 -22 13 1 21 -4 21 -13 0 -24 18 -30 42 -14 22\n14 23 13 23 -11 0 -14 6 -25 13 -25 6 0 22 -3 35 -6 18 -5 22 -2 22 16 0 45\n44 -5 64 -73 3 -10 11 -15 16 -12 8 5 8 11 0 19 -5 7 -13 33 -16 57 -5 34 -2\n48 9 57 13 11 18 8 32 -23 26 -53 35 -52 35 4 0 36 -5 53 -16 59 -12 7 -14 15\n-8 33 11 32 7 162 -11 334 -7 77 -17 187 -20 245 -10 168 -21 237 -81 505 -7\n33 -16 110 -19 170 -4 61 -11 133 -17 160 -14 70 -40 155 -48 155 -3 0 -18\n-15 -33 -32z m33 -212 c0 -2 -3 -12 -6 -20 -5 -13 -9 -14 -20 -5 -16 13 -9 29\n12 29 8 0 14 -2 14 -4z m-469 -837 c10 -33 10 -42 -1 -49 -9 -6 -20 0 -33 17\n-17 21 -18 28 -7 49 19 34 27 30 41 -17z m269 -153 c0 -11 -19 -15 -25 -6 -3\n5 1 10 9 10 9 0 16 -2 16 -4z m-82 -29 c2 -10 -3 -17 -12 -17 -10 0 -16 9 -16\n21 0 24 23 21 28 -4z m272 -71 c0 -17 -24 -38 -33 -29 -15 15 -6 43 13 43 11\n0 20 -6 20 -14z m-197 -39 c9 -23 -8 -40 -22 -23 -13 15 -7 36 9 36 4 0 10 -6\n13 -13z m77 -27 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11\n-4 11 -10z m191 -50 c29 -16 26 -73 -5 -89 -34 -19 -63 -6 -68 30 -8 53 28 82\n73 59z m-216 -11 c10 -14 -24 -49 -41 -42 -8 3 -14 16 -14 29 0 19 5 24 24 24\n14 0 28 -5 31 -11z m5 -69 c0 -5 -9 -14 -20 -20 -15 -8 -20 -8 -20 3 0 8 3 17\n7 20 10 10 33 8 33 -3z m280 -94 c-26 -26 -44 -10 -44 40 0 53 24 62 46 16 18\n-35 18 -37 -2 -56z m-137 24 c6 -24 -1 -25 -24 -4 -21 18 -15 51 6 34 7 -6 15\n-20 18 -30z m49 -42 c-6 -6 -14 -9 -17 -6 -3 3 -3 13 1 22 5 12 10 14 17 7 8\n-8 8 -14 -1 -23z" }),
        React__default['default'].createElement("path", { d: "M9846 7158 c4 -13 11 -34 17 -48 6 -14 11 -38 11 -55 1 -22 6 -30 19\n-29 9 1 17 -3 17 -10 0 -6 7 2 15 18 17 32 13 45 -8 28 -18 -15 -27 -5 -27 27\n0 25 -33 91 -46 91 -3 0 -2 -10 2 -22z" }),
        React__default['default'].createElement("path", { d: "M9850 6972 c0 -23 26 -59 36 -50 8 9 -15 68 -27 68 -5 0 -9 -8 -9\n-18z" }),
        React__default['default'].createElement("path", { d: "M9890 6835 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0\n-10 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M9930 6797 c0 -11 -5 -14 -15 -11 -11 5 -13 2 -9 -10 3 -9 10 -16 14\n-16 11 0 24 40 16 47 -3 4 -6 -1 -6 -10z" }),
        React__default['default'].createElement("path", { d: "M9976 6755 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0\n-7 -7 -4 -15z" }),
        React__default['default'].createElement("path", { d: "M10026 6725 c-9 -23 -8 -25 9 -25 17 0 19 9 6 28 -7 11 -10 10 -15\n-3z" }),
        React__default['default'].createElement("path", { d: "M9914 6698 c3 -18 9 -52 12 -76 l7 -42 13 25 c18 34 1 125 -23 125\n-12 0 -14 -7 -9 -32z" }),
        React__default['default'].createElement("path", { d: "M9985 6710 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0\n-13 -4 -16 -10z" }),
        React__default['default'].createElement("path", { d: "M10035 6659 c-4 -6 -5 -13 -2 -16 7 -7 27 6 27 18 0 12 -17 12 -25\n-2z" }),
        React__default['default'].createElement("path", { d: "M9879 6575 c-5 -53 13 -84 46 -77 19 3 25 10 24 31 0 26 0 26 -11 4\n-15 -31 -26 -29 -34 5 -3 15 -9 38 -14 52 -7 23 -8 21 -11 -15z" }),
        React__default['default'].createElement("path", { d: "M9875 6461 c-7 -12 12 -24 25 -16 11 7 4 25 -10 25 -5 0 -11 -4 -15\n-9z" }),
        React__default['default'].createElement("path", { d: "M8201 6184 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M8546 6181 c-8 -12 14 -71 25 -71 10 0 11 25 3 58 -7 23 -19 29 -28\n13z" }),
        React__default['default'].createElement("path", { d: "M8500 6150 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\n-4 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M8588 6101 c-40 -9 -21 -35 21 -29 21 3 31 0 31 -8 0 -19 20 -28 33\n-15 9 9 4 18 -17 36 -16 14 -32 24 -35 24 -3 -1 -18 -4 -33 -8z" }),
        React__default['default'].createElement("path", { d: "M8595 6030 c-3 -5 1 -10 10 -10 9 0 13 5 10 10 -3 6 -8 10 -10 10 -2\n0 -7 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M8257 5980 c8 -31 23 -34 23 -6 0 16 -6 26 -14 26 -9 0 -12 -7 -9\n-20z" }),
        React__default['default'].createElement("path", { d: "M8448 5993 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M8362 5905 c13 -29 23 -32 32 -9 8 21 -1 34 -24 34 -17 0 -18 -3 -8\n-25z" }),
        React__default['default'].createElement("path", { d: "M8250 5846 c0 -22 6 -36 16 -40 13 -5 15 -2 9 21 -4 16 -8 34 -8 41\n-1 29 -17 9 -17 -22z" }),
        React__default['default'].createElement("path", { d: "M8537 5863 c-12 -11 -8 -23 8 -23 8 0 15 7 15 15 0 16 -12 20 -23 8z" }),
        React__default['default'].createElement("path", { d: "M6457 5793 c7 -57 20 -78 38 -63 35 29 19 110 -21 110 -22 0 -23 -3\n-17 -47z" }),
        React__default['default'].createElement("path", { d: "M8477 5783 c-4 -3 -7 -12 -7 -20 0 -15 26 -18 34 -4 7 11 -18 33 -27\n24z" }),
        React__default['default'].createElement("path", { d: "M9997 5756 c-4 -10 -5 -21 -2 -24 9 -9 17 6 13 25 -3 17 -4 17 -11\n-1z" }),
        React__default['default'].createElement("path", { d: "M6166 5715 c-9 -25 -7 -35 7 -35 6 0 22 -16 35 -35 13 -21 30 -35 43\n-35 11 0 17 5 14 10 -3 6 -14 10 -24 10 -18 0 -36 32 -43 74 -4 25 -24 32 -32\n11z" }),
        React__default['default'].createElement("path", { d: "M6278 5713 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M10060 5680 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5\n0 -10 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M6455 5670 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0\n-13 -4 -16 -10z" }),
        React__default['default'].createElement("path", { d: "M9157 5652 c-10 -10 -17 -29 -17 -42 0 -23 1 -23 17 -8 15 15 18 15\n27 2 15 -19 42 -9 50 18 10 41 -47 63 -77 30z" }),
        React__default['default'].createElement("path", { d: "M6126 5635 c-3 -8 -1 -15 4 -15 6 0 10 7 10 15 0 8 -2 15 -4 15 -2 0\n-6 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M10010 5640 c-6 -4 -12 -31 -13 -61 -1 -30 -6 -59 -10 -66 -4 -6 -2\n-24 4 -40 10 -27 11 -27 21 -8 24 44 52 46 43 4 -10 -44 16 -34 31 11 11 34\n34 53 34 29 0 -10 3 -10 12 -1 8 8 8 15 -2 27 -7 9 -10 28 -7 48 3 19 2 39 -2\n46 -8 13 -93 22 -111 11z" }),
        React__default['default'].createElement("path", { d: "M6727 5564 c-8 -14 8 -37 22 -33 8 3 8 10 -2 23 -8 11 -17 15 -20 10z" }),
        React__default['default'].createElement("path", { d: "M9965 5540 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\n-7 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M6090 5524 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0\n-10 -7 -10 -16z" }),
        React__default['default'].createElement("path", { d: "M9590 5479 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M9168 5452 c-7 -24 1 -42 18 -42 18 0 18 46 0 53 -8 3 -16 -2 -18\n-11z" }),
        React__default['default'].createElement("path", { d: "M6030 5425 c0 -9 -7 -27 -16 -41 -16 -23 -16 -26 2 -39 23 -17 38\n-19 29 -4 -4 6 1 17 11 25 17 13 18 15 2 24 -10 6 -14 18 -11 30 3 11 0 20 -6\n20 -6 0 -11 -7 -11 -15z" }),
        React__default['default'].createElement("path", { d: "M7685 5401 c-3 -6 3 -24 15 -39 19 -23 20 -27 6 -30 -9 -2 -16 -9\n-16 -17 0 -7 -7 -15 -15 -19 -9 -3 -15 -18 -15 -36 0 -27 2 -30 25 -24 19 5\n25 2 25 -10 0 -20 19 -21 27 0 4 12 11 8 34 -18 l28 -33 1 79 c0 95 -15 146\n-45 146 -11 0 -30 3 -41 6 -12 3 -25 1 -29 -5z" }),
        React__default['default'].createElement("path", { d: "M9470 5380 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0\n-15 -4 -15 -10z" }),
        React__default['default'].createElement("path", { d: "M9510 5375 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0\n-10 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M9947 5353 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3\n-9 2 -12 -2z" }),
        React__default['default'].createElement("path", { d: "M6102 5321 c16 -25 31 -27 26 -4 -2 10 -11 19 -21 21 -16 3 -17 1 -5\n-17z" }),
        React__default['default'].createElement("path", { d: "M9157 5301 c-21 -35 -22 -52 -3 -45 12 5 31 62 23 70 -2 2 -11 -10\n-20 -25z" }),
        React__default['default'].createElement("path", { d: "M8729 5313 c-1 -4 0 -18 1 -30 1 -18 -4 -23 -22 -23 -13 -1 -34 -7\n-48 -15 -31 -18 -71 -19 -69 -2 3 26 -1 47 -10 47 -5 0 -11 -10 -13 -22 -2\n-18 -10 -23 -31 -23 -18 0 -36 -9 -49 -25 -15 -17 -22 -21 -26 -12 -3 10 -8 7\n-19 -7 -15 -22 -52 -21 -82 3 -12 9 -13 6 -7 -17 6 -24 4 -28 -11 -25 -10 2\n-17 9 -16 16 4 16 -24 3 -31 -15 -7 -16 10 -43 25 -43 5 0 27 -12 49 -26 41\n-27 66 -28 154 -8 28 7 28 6 21 -27 -4 -19 -14 -51 -23 -71 -13 -31 -19 -37\n-38 -32 -19 5 -26 0 -40 -30 l-18 -36 29 -24 c32 -28 29 -58 -5 -49 -16 4 -29\n-2 -48 -22 -24 -26 -26 -27 -39 -9 -16 22 -16 12 -2 -39 8 -31 14 -37 32 -35\n20 3 22 -1 22 -47 0 -39 4 -50 18 -53 9 -2 17 1 17 7 0 6 5 11 10 11 17 0 11\n-17 -15 -41 -13 -13 -25 -27 -25 -31 0 -17 39 -7 64 17 24 22 26 23 26 5 0\n-23 4 -24 31 -10 17 9 19 7 21 -20 0 -16 1 -36 2 -42 1 -7 -8 -12 -20 -11 -25\n3 -26 -26 -1 -51 9 -10 17 -22 17 -27 0 -5 7 -9 15 -9 22 0 40 50 25 73 -10\n16 -7 18 30 13 23 -2 51 -11 64 -19 15 -10 27 -12 39 -5 10 5 27 6 40 1 22 -8\n31 -10 54 -12 7 0 22 -11 33 -23 31 -33 53 -14 63 53 13 87 17 99 28 99 5 0\n15 -13 22 -29 10 -24 16 -28 30 -19 10 5 30 7 44 3 22 -5 25 -3 20 15 -6 25\n16 38 37 21 11 -9 15 -7 19 11 8 27 1 38 -23 38 -21 0 -40 28 -33 48 3 7 0 18\n-5 25 -5 7 -10 25 -10 40 0 16 -9 41 -20 56 -11 16 -24 44 -27 64 -4 19 -20\n48 -36 63 -25 24 -33 27 -49 16 -11 -7 -21 -8 -25 -2 -3 5 -12 7 -20 3 -8 -3\n-22 -3 -30 1 -13 5 -13 8 2 26 10 11 23 20 31 20 22 0 26 30 6 44 -16 13 -17\n17 -5 40 8 14 22 26 31 26 9 0 21 5 28 12 9 9 7 17 -10 35 l-21 23 23 25 c21\n22 22 27 9 39 -20 20 -79 9 -79 -14 0 -21 -29 -35 -44 -20 -5 5 -18 10 -28 10\n-24 0 -61 41 -48 54 13 13 13 43 0 51 -5 3 -10 3 -11 -2z m-187 -135 c-6 -6\n-16 -7 -22 -3 -9 6 -9 9 1 16 17 10 34 0 21 -13z m-29 -248 c6 0 1 -7 -12 -16\n-19 -14 -25 -14 -31 -3 -11 18 -2 32 17 25 8 -3 20 -6 26 -6z m387 -18 c0 -16\n-32 -52 -46 -52 -22 0 -16 34 9 46 28 15 37 16 37 6z m-450 -127 c-14 -17 -40\n-20 -40 -6 0 5 10 12 23 14 12 2 24 5 26 6 2 0 -2 -6 -9 -14z m347 -141 c3 -8\n1 -20 -6 -27 -14 -14 -47 15 -37 32 10 16 36 13 43 -5z m243 -34 c0 -5 -4 -10\n-10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z" }),
        React__default['default'].createElement("path", { d: "M9317 5294 c-10 -10 -9 -62 1 -68 13 -8 44 33 40 52 -3 18 -29 27\n-41 16z" }),
        React__default['default'].createElement("path", { d: "M8310 5271 c0 -26 9 -30 43 -24 l28 6 -28 18 c-36 24 -43 24 -43 0z" }),
        React__default['default'].createElement("path", { d: "M6010 5271 c0 -5 7 -14 15 -21 12 -10 15 -10 15 3 0 8 -7 17 -15 21\n-8 3 -15 2 -15 -3z" }),
        React__default['default'].createElement("path", { d: "M9241 5264 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M8615 5260 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\n-8 -4 -11 -10z" }),
        React__default['default'].createElement("path", { d: "M9534 5234 c-4 -17 -2 -29 7 -35 15 -10 31 -8 30 4 -1 4 -1 18 -1 32\n0 34 -28 33 -36 -1z" }),
        React__default['default'].createElement("path", { d: "M7711 5184 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M7786 5145 c-3 -9 -6 -24 -6 -33 0 -15 1 -15 16 0 12 11 13 21 7 33\n-9 16 -10 16 -17 0z" }),
        React__default['default'].createElement("path", { d: "M9516 5125 c-7 -37 1 -63 14 -48 5 4 12 25 15 46 6 29 4 37 -8 37 -9\n0 -17 -14 -21 -35z" }),
        React__default['default'].createElement("path", { d: "M9264 5086 c-3 -8 -3 -20 0 -25 4 -6 -11 -19 -34 -31 -22 -11 -40\n-24 -40 -28 0 -4 14 -16 30 -25 24 -15 28 -22 21 -36 -14 -26 2 -47 21 -28 13\n13 14 10 14 -26 -1 -31 3 -42 14 -42 23 0 34 95 13 110 -20 15 -11 45 13 45\n16 0 16 2 1 18 -8 9 -17 30 -19 46 -3 33 -25 46 -34 22z" }),
        React__default['default'].createElement("path", { d: "M7790 5080 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\n-4 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M8930 4990 c0 -13 7 -20 20 -20 18 0 19 3 10 20 -6 11 -15 20 -20 20\n-6 0 -10 -9 -10 -20z" }),
        React__default['default'].createElement("path", { d: "M3606 4985 c-3 -8 -1 -15 4 -15 13 0 22 18 11 24 -5 3 -11 -1 -15 -9z" }),
        React__default['default'].createElement("path", { d: "M5850 4981 c0 -11 -4 -23 -10 -26 -5 -3 -10 -32 -10 -63 -1 -49 -2\n-55 -14 -40 -10 13 -15 15 -24 6 -7 -7 -12 -18 -12 -24 0 -7 -6 -19 -14 -26\n-7 -8 -24 -36 -38 -63 -44 -90 -120 -230 -130 -242 -5 -7 -7 -26 -3 -44 5 -22\n3 -34 -6 -40 -10 -6 -6 -9 14 -9 20 0 30 -7 37 -26 9 -22 13 -24 25 -14 15 13\n13 22 -12 52 -9 10 -11 18 -4 22 5 4 15 -3 21 -14 6 -11 17 -20 25 -20 21 0\n28 -19 15 -35 -10 -12 -10 -15 2 -15 7 0 19 13 25 29 12 34 2 51 -33 51 -12 0\n-24 7 -28 15 -8 23 40 19 64 -5 11 -11 20 -16 20 -10 0 5 10 12 23 15 16 4 23\n14 24 37 1 17 -2 37 -8 44 -6 8 -6 14 0 18 5 4 27 -9 47 -28 27 -25 41 -32 46\n-23 13 21 9 29 -12 22 -11 -3 -20 -3 -20 0 0 12 45 44 63 45 28 0 19 17 -13\n24 -18 3 -30 12 -30 21 0 8 3 15 8 16 55 5 99 19 59 19 -13 0 -17 9 -17 40 0\n22 -4 40 -10 40 -5 0 -10 -7 -10 -15 0 -8 -7 -15 -15 -15 -16 0 -20 27 -6 49\n5 8 16 11 30 6 13 -4 21 -2 21 5 0 7 8 9 19 5 13 -4 20 0 23 12 10 39 -15 60\n-27 23 -3 -11 -15 -20 -26 -20 -12 0 -19 7 -19 20 0 11 -4 20 -10 20 -15 0\n-61 102 -54 122 3 12 15 18 33 18 34 0 44 9 30 27 -18 21 -59 17 -59 -6z m10\n-307 c0 -8 -5 -12 -10 -9 -6 4 -8 11 -5 16 9 14 15 11 15 -7z m-140 -114 c18\n-11 13 -16 -23 -25 -20 -5 -27 -3 -27 7 0 28 22 36 50 18z m60 -15 c10 -13 10\n-19 -3 -33 -8 -9 -17 -26 -20 -37 -2 -11 -4 4 -4 33 0 54 6 62 27 37z" }),
        React__default['default'].createElement("path", { d: "M9602 4890 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M9412 4879 c-7 -10 -18 -19 -26 -19 -7 0 -19 -7 -26 -16 -11 -12 -10\n-18 4 -32 16 -16 18 -16 33 3 15 20 15 20 10 -2 -6 -26 -3 -27 24 -13 22 12\n25 56 6 82 -12 15 -14 15 -25 -3z" }),
        React__default['default'].createElement("path", { d: "M9501 4784 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M9444 4757 c-8 -21 2 -35 16 -21 5 5 6 15 0 24 -8 12 -10 12 -16 -3z" }),
        React__default['default'].createElement("path", { d: "M9170 4635 c0 -8 -8 -20 -18 -26 -12 -8 -17 -20 -14 -35 5 -26 17\n-31 28 -13 8 14 16 89 9 89 -3 0 -5 -7 -5 -15z" }),
        React__default['default'].createElement("path", { d: "M6020 4562 c0 -6 6 -15 14 -19 8 -4 16 -19 18 -32 l3 -23 19 21 c18\n20 18 21 0 27 -11 4 -27 14 -36 22 -11 9 -18 11 -18 4z" }),
        React__default['default'].createElement("path", { d: "M5927 4541 c-2 -10 -1 -25 4 -32 6 -10 9 -4 9 19 0 36 -5 42 -13 13z" }),
        React__default['default'].createElement("path", { d: "M8465 4510 c3 -5 2 -18 -4 -28 -14 -26 2 -50 22 -34 24 20 27 51 7\n62 -24 13 -33 13 -25 0z" }),
        React__default['default'].createElement("path", { d: "M9185 4510 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\n-7 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M6077 4468 c-4 -12 -4 -24 -1 -27 8 -9 37 27 30 38 -11 17 -23 13\n-29 -11z" }),
        React__default['default'].createElement("path", { d: "M9151 4469 c-12 -11 -21 -24 -19 -27 2 -4 10 -19 17 -34 17 -33 51\n-38 51 -8 0 23 21 72 35 82 5 4 -6 8 -26 8 -22 0 -44 -8 -58 -21z" }),
        React__default['default'].createElement("path", { d: "M5860 4440 c0 -21 4 -30 13 -27 6 2 12 14 12 27 0 13 -6 25 -12 28\n-9 2 -13 -7 -13 -28z" }),
        React__default['default'].createElement("path", { d: "M6126 4445 c-3 -8 -1 -15 4 -15 6 0 10 7 10 15 0 8 -2 15 -4 15 -2 0\n-6 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M5948 4444 c-4 -6 -4 -31 0 -55 4 -24 10 -39 13 -34 7 15 -5 101 -13\n89z" }),
        React__default['default'].createElement("path", { d: "M8699 4387 c-14 -12 -29 -30 -33 -41 -4 -11 -12 -16 -21 -12 -10 3\n-17 -3 -21 -20 -9 -35 -1 -39 59 -25 30 6 62 9 72 5 24 -10 45 20 45 64 0 26\n-3 32 -12 25 -7 -6 -26 -13 -43 -16 -16 -4 -24 -4 -17 -1 13 6 17 44 5 44 -5\n-1 -20 -11 -34 -23z" }),
        React__default['default'].createElement("path", { d: "M5803 4380 c-2 -23 15 -36 28 -23 6 6 3 16 -9 26 -17 15 -18 15 -19\n-3z" }),
        React__default['default'].createElement("path", { d: "M5872 4376 c7 -8 15 -12 17 -11 5 6 -10 25 -20 25 -5 0 -4 -6 3 -14z" }),
        React__default['default'].createElement("path", { d: "M5542 4366 c2 -10 16 -28 31 -40 23 -17 29 -18 37 -6 12 19 3 31 -17\n23 -10 -4 -23 3 -35 18 -16 20 -19 21 -16 5z" }),
        React__default['default'].createElement("path", { d: "M6107 4328 c-5 -16 10 -48 24 -48 14 0 7 52 -7 57 -7 2 -14 -2 -17\n-9z" }),
        React__default['default'].createElement("path", { d: "M5850 4321 c0 -6 0 -14 -1 -18 0 -5 10 -11 23 -15 l23 -6 -23 -1\nc-25 -1 -40 -27 -25 -42 6 -6 20 -2 38 12 31 25 58 17 63 -19 3 -16 -5 -25\n-34 -37 -20 -8 -47 -15 -59 -15 -13 0 -25 -7 -29 -15 -6 -16 -48 -36 -79 -39\n-10 0 -22 -7 -26 -15 -5 -8 -26 -17 -47 -20 -33 -5 -41 -11 -50 -39 -6 -19\n-15 -37 -20 -40 -5 -4 -10 -38 -11 -77 0 -38 1 -62 4 -52 2 9 9 17 14 17 15 0\n52 -41 71 -79 18 -35 18 -36 -3 -56 -15 -14 -23 -16 -26 -7 -6 17 -33 15 -33\n-2 0 -8 5 -18 10 -21 6 -3 10 -21 10 -38 0 -18 5 -39 10 -47 9 -13 14 -11 34\n12 13 15 26 32 28 39 8 25 28 -2 22 -29 -6 -25 -48 -72 -64 -72 -9 0 8 -107\n20 -131 6 -10 10 -28 10 -41 1 -13 7 -34 14 -48 13 -22 14 -19 21 55 6 65 5\n85 -9 108 -16 29 -22 67 -10 67 12 0 33 -35 35 -55 2 -37 17 31 22 102 4 47 2\n73 -7 85 -7 10 -16 15 -19 11 -9 -9 -37 17 -37 34 0 12 7 14 31 9 52 -10 64 4\n83 101 9 48 21 103 26 122 6 23 5 39 -3 53 -10 16 -9 22 8 34 11 9 19 19 18\n23 -1 4 16 8 38 10 58 3 89 17 89 40 0 11 -9 23 -20 26 -23 7 -27 25 -5 25 24\n0 18 27 -12 55 -18 17 -37 25 -54 23 -15 -1 -34 4 -43 11 -10 9 -16 10 -16 2z" }),
        React__default['default'].createElement("path", { d: "M5746 4305 c6 -16 44 -41 44 -30 0 4 -5 15 -10 26 -13 23 -42 26 -34\n4z" }),
        React__default['default'].createElement("path", { d: "M5490 4270 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n-10 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M5563 4258 c-21 -25 -19 -53 4 -75 24 -23 30 -43 13 -43 -5 0 -10 -7\n-10 -15 0 -18 4 -19 33 -2 42 23 49 54 20 83 -10 9 -25 28 -34 41 -12 19 -18\n21 -26 11z" }),
        React__default['default'].createElement("path", { d: "M5493 4243 c-16 -6 -5 -33 13 -33 8 0 14 6 14 14 0 18 -11 25 -27 19z" }),
        React__default['default'].createElement("path", { d: "M6132 4228 c-6 -14 -19 -31 -28 -36 -16 -9 -16 -10 2 -16 10 -3 32\n-24 48 -47 15 -22 31 -37 34 -34 4 3 0 10 -7 14 -9 6 -11 18 -7 36 4 15 2 33\n-4 40 -6 8 -15 26 -19 42 l-8 28 -11 -27z m28 -42 c0 -11 -19 -15 -25 -6 -3 5\n1 10 9 10 9 0 16 -2 16 -4z" }),
        React__default['default'].createElement("path", { d: "M5760 4170 c0 -19 11 -26 23 -14 8 8 -3 34 -14 34 -5 0 -9 -9 -9 -20z" }),
        React__default['default'].createElement("path", { d: "M6358 4155 c-16 -13 -28 -29 -28 -34 0 -6 -8 -15 -18 -20 -14 -7 -21\n-5 -31 11 -13 21 -14 21 -24 2 -6 -10 -10 -21 -10 -24 1 -3 -5 -13 -14 -22\n-21 -24 -10 -48 19 -41 13 3 29 10 36 16 7 5 15 7 19 3 3 -3 13 3 21 15 14 20\n14 20 38 -6 20 -21 27 -24 44 -15 24 13 26 33 5 50 -8 7 -15 19 -15 26 0 8 7\n14 15 14 18 0 20 21 3 38 -17 17 -29 15 -60 -13z m-68 -85 c0 -5 -7 -10 -16\n-10 -8 0 -12 5 -9 10 3 6 10 10 16 10 5 0 9 -4 9 -10z" }),
        React__default['default'].createElement("path", { d: "M5112 4101 c2 -7 7 -12 11 -12 12 1 9 15 -3 20 -7 2 -11 -2 -8 -8z" }),
        React__default['default'].createElement("path", { d: "M5571 4034 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6112 4027 c-7 -16 -12 -39 -12 -53 0 -13 -4 -32 -9 -42 -5 -9 -15\n-57 -22 -106 l-13 -89 25 -21 c28 -25 54 -80 44 -96 -6 -9 31 -49 46 -50 4 0\n9 9 12 21 8 30 42 21 42 -11 0 -17 -7 -26 -25 -30 -24 -6 -24 -7 -5 -17 11 -6\n27 -8 35 -5 8 3 0 -7 -18 -23 -22 -19 -32 -34 -29 -47 3 -10 1 -18 -4 -18 -5\n0 -9 -7 -9 -15 0 -22 21 -18 27 5 3 11 14 20 25 20 15 0 17 -3 9 -19 -13 -23\n-3 -35 16 -19 18 15 26 4 27 -37 1 -26 5 -35 16 -33 10 2 17 20 21 53 7 53 -1\n72 -36 85 -16 6 -21 17 -22 49 -1 23 2 41 8 41 16 0 10 19 -11 37 -21 18 -26\n49 -11 72 5 7 14 11 20 7 20 -13 51 13 51 43 0 21 -6 30 -22 34 -28 8 -71 -36\n-63 -64 8 -23 -17 -26 -35 -4 -11 13 -10 23 0 56 12 35 12 44 -4 70 -15 25\n-15 29 -2 29 9 0 16 7 16 15 0 8 -6 12 -14 9 -8 -3 -17 0 -22 7 -4 7 -3 14 3\n16 7 3 6 14 -4 33 -17 34 -28 37 -42 13 -9 -16 -10 -16 -11 -2 0 9 9 28 21 43\n11 14 16 26 10 26 -5 0 -11 10 -14 23 -3 21 -4 21 -15 -6z m-5 -263 c-12 -12\n-37 5 -30 21 5 15 7 15 21 1 9 -9 13 -18 9 -22z m38 -73 c-3 -6 -11 -8 -17 -5\n-6 4 -5 9 3 15 16 10 23 4 14 -10z" }),
        React__default['default'].createElement("path", { d: "M6417 4015 c-5 -10 0 -15 14 -15 12 0 19 5 17 12 -6 18 -25 20 -31 3z" }),
        React__default['default'].createElement("path", { d: "M4874 3988 c3 -12 17 -77 31 -143 14 -66 33 -151 41 -190 26 -124 47\n-200 57 -210 6 -6 7 -3 3 10 -9 30 -25 112 -36 183 -6 34 -18 95 -29 135 -10\n39 -27 107 -36 150 -10 43 -22 80 -27 83 -5 3 -7 -5 -4 -18z" }),
        React__default['default'].createElement("path", { d: "M5417 4003 c-13 -12 -7 -31 8 -29 22 3 27 12 12 24 -8 7 -17 9 -20 5z" }),
        React__default['default'].createElement("path", { d: "M6243 3973 c-21 -14 -22 -17 -7 -44 16 -32 20 -34 49 -16 28 17 31\n53 6 66 -24 13 -21 14 -48 -6z m27 -23 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10\n-3 6 -1 10 4 10 6 0 11 -4 11 -10z" }),
        React__default['default'].createElement("path", { d: "M6357 3957 c-2 -12 -8 -30 -12 -39 -5 -14 -2 -18 14 -18 17 0 21 6\n21 34 0 40 -15 56 -23 23z" }),
        React__default['default'].createElement("path", { d: "M6590 3919 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M6636 3915 c-3 -8 -1 -15 4 -15 6 0 10 7 10 15 0 8 -2 15 -4 15 -2 0\n-6 -7 -10 -15z" }),
        React__default['default'].createElement("path", { d: "M5614 3838 c3 -13 6 -26 6 -30 0 -5 4 -8 8 -8 5 0 7 14 4 30 -2 17\n-9 30 -14 30 -6 0 -8 -10 -4 -22z" }),
        React__default['default'].createElement("path", { d: "M6375 3760 c-3 -5 -17 -10 -31 -10 -30 0 -31 -16 -2 -39 l22 -18 -22\n-28 c-26 -33 -28 -45 -6 -45 9 0 18 -8 21 -18 2 -10 13 -23 23 -30 16 -10 20\n-8 25 9 5 16 9 18 21 8 8 -6 18 -9 22 -5 4 4 -1 13 -11 20 -9 7 -17 21 -17 31\n0 13 -5 16 -25 11 -42 -11 -28 11 18 26 51 18 61 47 22 68 -14 7 -25 17 -25\n22 0 11 -28 10 -35 -2z m33 -31 c-2 -6 -8 -10 -13 -10 -5 0 -11 4 -13 10 -2 6\n4 11 13 11 9 0 15 -5 13 -11z" }),
        React__default['default'].createElement("path", { d: "M5342 3715 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z" }),
        React__default['default'].createElement("path", { d: "M5522 3660 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6260 3654 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0\n-10 -7 -10 -16z" }),
        React__default['default'].createElement("path", { d: "M6441 3644 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6030 3611 c0 -27 4 -41 13 -41 9 0 12 11 9 35 -6 50 -22 54 -22 6z" }),
        React__default['default'].createElement("path", { d: "M6850 3630 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\n-4 -4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M6900 3609 l-25 -21 25 6 c14 3 28 6 31 6 4 0 9 7 13 15 8 21 -15 18\n-44 -6z" }),
        React__default['default'].createElement("path", { d: "M5312 3580 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6090 3590 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n-10 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M6286 3575 c-6 -17 9 -29 24 -20 14 9 12 22 -4 28 -8 3 -17 -1 -20\n-8z" }),
        React__default['default'].createElement("path", { d: "M6910 3569 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M5292 3510 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z" }),
        React__default['default'].createElement("path", { d: "M5552 3520 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6038 3533 c-35 -9 -48 -113 -13 -113 7 0 18 -7 25 -15 7 -8 15 -15\n19 -15 8 0 6 58 -2 67 -4 3 -2 12 3 18 7 9 7 21 0 39 -5 14 -11 25 -12 25 -2\n-1 -10 -3 -20 -6z" }),
        React__default['default'].createElement("path", { d: "M6926 3515 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0\n-7 -7 -4 -15z" }),
        React__default['default'].createElement("path", { d: "M6852 3470 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z" }),
        React__default['default'].createElement("path", { d: "M5572 3455 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z" }),
        React__default['default'].createElement("path", { d: "M5257 3382 c-10 -43 -30 -126 -44 -187 -45 -198 -49 -210 -64 -210\n-17 0 -38 59 -79 225 -36 150 -59 222 -59 193 -1 -17 4 -44 10 -60 7 -15 15\n-46 19 -68 13 -68 80 -316 90 -336 22 -40 44 -7 65 96 11 53 24 108 46 195 20\n80 43 219 37 225 -2 2 -11 -31 -21 -73z" }),
        React__default['default'].createElement("path", { d: "M6866 3407 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z" }),
        React__default['default'].createElement("path", { d: "M6364 3375 c-11 -27 1 -33 19 -9 16 21 16 24 2 24 -9 0 -18 -7 -21\n-15z" }),
        React__default['default'].createElement("path", { d: "M6430 3355 c-8 -9 -8 -15 -2 -15 12 0 26 19 19 26 -2 2 -10 -2 -17\n-11z" }),
        React__default['default'].createElement("path", { d: "M5601 3324 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6300 3315 c0 -14 -8 -29 -20 -35 -11 -6 -20 -20 -20 -31 0 -11 -10\n-24 -24 -30 -23 -11 -43 -59 -25 -59 14 0 33 -44 31 -72 -2 -21 2 -28 16 -28\n10 0 24 6 31 13 11 10 13 9 8 -5 -9 -26 29 -24 45 2 7 11 20 20 29 20 20 0 76\n28 85 42 4 6 -3 18 -16 28 -18 14 -20 20 -12 37 8 14 8 23 0 31 -13 13 0 35\n18 28 13 -5 18 11 12 32 -2 4 -30 7 -63 7 -56 0 -60 1 -58 23 2 16 -2 22 -17\n22 -15 0 -20 -7 -20 -25z m30 -109 c0 -14 -29 -31 -38 -21 -6 6 18 35 29 35 5\n0 9 -6 9 -14z" }),
        React__default['default'].createElement("path", { d: "M6385 3320 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0\n-12 -4 -9 -10z" }),
        React__default['default'].createElement("path", { d: "M6560 3286 c0 -23 2 -24 33 -13 17 6 34 13 37 15 9 6 -25 22 -47 22\n-18 0 -23 -6 -23 -24z" }),
        React__default['default'].createElement("path", { d: "M6035 3289 c-4 -6 -5 -13 -2 -16 7 -7 27 6 27 18 0 12 -17 12 -25 -2z" }),
        React__default['default'].createElement("path", { d: "M6496 3291 c-4 -5 -3 -17 0 -26 4 -10 1 -21 -6 -25 -17 -10 -4 -31\n15 -23 10 3 15 19 15 44 0 36 -12 51 -24 30z" }),
        React__default['default'].createElement("path", { d: "M6680 3271 c0 -14 -8 -21 -27 -23 -28 -3 -45 -28 -19 -28 9 0 16 5\n16 10 0 6 11 10 25 10 20 0 25 5 25 25 0 14 -4 25 -10 25 -5 0 -10 -9 -10 -19z" }),
        React__default['default'].createElement("path", { d: "M5621 3264 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M5950 3222 c0 -15 -5 -33 -12 -40 -6 -6 -8 -15 -4 -19 4 -4 10 -2 14\n4 5 8 13 9 22 3 8 -6 26 -10 40 -10 23 0 23 1 -8 17 -19 9 -32 23 -31 32 2 28\n-1 41 -11 41 -5 0 -10 -13 -10 -28z" }),
        React__default['default'].createElement("path", { d: "M6777 3233 c-12 -11 -8 -23 8 -23 8 0 15 7 15 15 0 16 -12 20 -23 8z" }),
        React__default['default'].createElement("path", { d: "M6620 3195 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0\n-15 -7 -15 -15z" }),
        React__default['default'].createElement("path", { d: "M6805 3159 c-4 -6 -5 -12 -2 -15 7 -7 37 7 37 17 0 13 -27 11 -35 -2z" }),
        React__default['default'].createElement("path", { d: "M5930 3109 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\n-5 -10 -11z" }),
        React__default['default'].createElement("path", { d: "M6050 3099 c0 -11 4 -18 10 -14 5 3 7 12 3 20 -7 21 -13 19 -13 -6z" }),
        React__default['default'].createElement("path", { d: "M5925 3069 c-10 -14 -1 -21 19 -13 9 3 13 10 10 15 -7 12 -21 11 -29\n-2z" }),
        React__default['default'].createElement("path", { d: "M6314 2965 c-9 -28 -8 -37 2 -46 18 -14 18 -29 1 -29 -7 0 -21 -10\n-31 -21 -14 -16 -20 -19 -26 -9 -4 7 -13 9 -19 6 -17 -11 20 -55 45 -56 17 0\n21 -7 22 -31 1 -35 21 -63 29 -41 3 6 18 12 33 12 16 0 32 5 35 10 3 6 -3 10\n-13 10 -16 0 -20 9 -25 48 -4 35 -2 50 9 59 14 10 13 13 -5 23 -20 10 -20 12\n-5 41 12 24 13 34 3 45 -20 25 -43 16 -55 -21z" }),
        React__default['default'].createElement("path", { d: "M5690 2984 c0 -13 18 -39 24 -34 2 3 -2 14 -10 24 -8 11 -14 16 -14\n10z" }),
        React__default['default'].createElement("path", { d: "M6787 2969 c-19 -21 -23 -49 -7 -49 6 0 10 7 10 15 0 8 7 15 15 15 8\n0 15 6 15 14 0 24 -15 26 -33 5z" }),
        React__default['default'].createElement("path", { d: "M6127 2876 c-4 -10 -5 -21 -2 -24 9 -9 17 6 13 25 -3 17 -4 17 -11\n-1z" }),
        React__default['default'].createElement("path", { d: "M6161 2844 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" }),
        React__default['default'].createElement("path", { d: "M6268 2753 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M6125 2607 c-4 -10 -5 -21 -1 -24 10 -10 18 4 13 24 -4 17 -4 17 -12\n0z" }),
        React__default['default'].createElement("path", { d: "M6117 2563 c-14 -13 -6 -23 18 -23 14 0 25 -5 25 -11 0 -5 5 -7 10\n-4 17 10 11 21 -15 33 -30 14 -30 14 -38 5z" }),
        React__default['default'].createElement("path", { d: "M6384 2435 c-18 -14 -18 -14 9 -15 15 0 27 4 27 9 0 18 -17 20 -36 6z" }),
        React__default['default'].createElement("path", { d: "M6462 2330 c-52 -12 -90 -55 -102 -115 -7 -33 -11 -275 -13 -663 l-2\n-612 26 -26 c24 -23 34 -26 97 -25 126 1 142 21 142 187 0 113 4 122 62 143\n65 25 83 37 139 91 114 111 183 323 173 529 -2 41 -8 89 -13 106 -6 16 -13 53\n-17 80 -16 119 -134 258 -258 301 -41 15 -179 17 -234 4z m222 -63 c94 -41\n185 -138 198 -212 3 -17 13 -56 22 -88 19 -67 22 -248 5 -311 -29 -114 -44\n-156 -72 -209 -33 -63 -114 -142 -156 -152 -47 -12 -109 -47 -119 -69 -6 -11\n-12 -71 -14 -133 -2 -62 -8 -116 -13 -121 -15 -14 -98 -23 -114 -13 -13 8 -14\n98 -12 613 1 341 6 619 12 639 12 49 32 63 98 69 87 8 123 5 165 -13z" }),
        React__default['default'].createElement("path", { d: "M6569 2093 c-11 -12 -15 -73 -17 -272 -4 -331 7 -370 85 -321 36 22\n70 72 98 145 29 74 26 257 -5 338 -31 81 -73 127 -115 127 -18 0 -39 -7 -46\n-17z m88 -96 c44 -85 55 -221 27 -318 -20 -67 -53 -117 -65 -98 -4 7 -6 94 -4\n194 2 99 4 199 4 223 1 48 12 48 38 -1z" }),
        React__default['default'].createElement("path", { d: "M5583 820 c-4 -16 -11 -20 -28 -16 -30 8 -35 0 -22 -34 9 -24 13 -26\n24 -14 11 10 20 11 33 4 25 -14 60 -13 60 2 0 6 3 9 6 6 3 -4 -2 -17 -11 -31\n-11 -17 -13 -27 -5 -32 6 -3 8 -10 5 -15 -6 -9 25 -30 43 -30 18 0 21 40 4 49\n-15 9 -15 11 1 28 23 26 22 30 -12 36 -23 5 -30 12 -33 34 -2 22 -9 29 -31 31\n-22 3 -30 -1 -34 -18z" }),
        React__default['default'].createElement("path", { d: "M5312 800 c-12 -20 -12 -21 13 -4 28 18 31 24 12 24 -7 0 -18 -9 -25\n-20z" }),
        React__default['default'].createElement("path", { d: "M5795 810 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7\n-4 -4 -10z" }),
        React__default['default'].createElement("path", { d: "M5300 736 c0 -2 7 -6 15 -10 8 -3 15 -1 15 4 0 6 -7 10 -15 10 -8 0\n-15 -2 -15 -4z" }),
        React__default['default'].createElement("path", { d: "M5542 707 c-12 -14 7 -47 27 -47 6 0 11 -4 11 -10 0 -5 5 -10 11 -10\n8 0 7 5 -1 15 -11 13 -9 19 8 36 12 11 22 22 22 24 0 11 -68 4 -78 -8z" }),
        React__default['default'].createElement("path", { d: "M5740 675 c-8 -9 -8 -15 -2 -15 12 0 26 19 19 26 -2 2 -10 -2 -17\n-11z" }),
        React__default['default'].createElement("path", { d: "M5766 631 c-3 -5 -3 -16 0 -24 6 -17 -27 -40 -49 -35 -7 2 -12 -1\n-12 -7 0 -5 11 -8 23 -6 22 2 23 0 17 -28 l-7 -31 59 6 c32 4 64 11 70 16 16\n13 43 3 43 -16 0 -8 -8 -17 -17 -19 -16 -4 -16 -5 -1 -6 26 -2 51 28 37 45\n-14 17 -40 18 -75 2 -22 -11 -28 -10 -40 6 -8 12 -19 16 -30 12 -13 -5 -14 -3\n-7 6 17 21 21 67 7 78 -7 7 -14 7 -18 1z" }),
        React__default['default'].createElement("path", { d: "M5688 613 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
        React__default['default'].createElement("path", { d: "M5850 602 c0 -6 9 -12 20 -15 11 -3 20 -3 20 -1 0 2 -9 8 -20 14 -11\n6 -20 7 -20 2z" }),
        React__default['default'].createElement("path", { d: "M5630 480 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n-10 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M5732 463 c-10 -4 -10 -8 -1 -19 17 -21 51 -18 47 3 -3 18 -24 25\n-46 16z" }),
        React__default['default'].createElement("path", { d: "M5593 433 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" }),
        React__default['default'].createElement("path", { d: "M5670 431 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5 3\n-10 2 -10 -4z" }),
        React__default['default'].createElement("path", { d: "M5828 433 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" }),
        React__default['default'].createElement("path", { d: "M5815 350 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z" }),
        React__default['default'].createElement("path", { d: "M5328 329 c-24 -13 -23 -29 1 -29 10 0 21 9 24 20 6 22 0 24 -25 9z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$m,
    GroupsIcon: Icon$l,
    HamburgerIcon: Icon$k,
    HamburgerCloseIcon: Icon$j,
    HomeIcon: Icon$i,
    IfoIcon: Icon$h,
    InfoIcon: Icon$g,
    LanguageIcon: Icon$f,
    LogoIcon: Logo$2,
    MoonIcon: Icon$e,
    MoreIcon: Icon$d,
    NftIcon: Icon$c,
    PoolIcon: Icon$b,
    SunIcon: Icon$a,
    TicketIcon: Icon$9,
    TradeIcon: Icon$8,
    TwitterIcon: Icon$7
});

var MenuButton = styled__default['default'](Button)(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$e;

var StyledLink = styled__default['default'](reactRouterDom.Link)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$M, { className: "mobile-icon" }),
        React__default['default'].createElement(Logo$2, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React__default['default'].createElement(Icon$j, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$k, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink, { as: "a", href: href, "aria-label": "Polygon MoonWalkerSwap home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink, { to: href, "aria-label": "Polygon MoonWalkerSwap home page" }, innerLogo))));
};
var Logo$1 = React__default['default'].memo(Logo, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$d;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://polygon-swap.moonwalker.network",
            },
            {
                label: "Liquidity",
                href: "https://polygon-swap.moonwalker.network/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/teams",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://polygon-info.moonwalker.network",
            },
            {
                label: "Tokens",
                href: "https://polygon-info.moonwalker.network/tokens",
            },
            {
                label: "Pairs",
                href: "https://polygon-info.moonwalker.network/pairs",
            },
            {
                label: "Accounts",
                href: "https://polygon-info.moonwalker.network/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Github",
                href: "https://github.com/Moonwalkerjim",
            },
            {
                label: "Docs",
                href: "https://polygon-docs.moonwalker.network",
            },
            {
                label: "Blog",
                href: "https://moonwalker.network.medium.com",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/moonwalkerswap",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/moonwalkerjim",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = styled.keyframes(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled__default['default'].div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var LinkLabelMemo = React__default['default'].memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$c, templateObject_2$4, templateObject_3$2;

var Container$2 = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, isActive = _a.isActive;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className, isActive: isActive },
            icon,
            React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$13, null) : React__default['default'].createElement(Icon$14, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var Accordion$1 = React__default['default'].memo(Accordion, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$b, templateObject_2$3;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons$3 = IconModule;
var Container$1 = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$1, null, links.map(function (entry) {
        var Icon = Icons$3[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React__default['default'].createElement(Accordion$1, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: initialOpenState, className: calloutClass, isActive: entry.items.some(function (item) { return item.href === location.pathname; }) }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$a;

var PriceLink = styled__default['default'].a(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var PDustPrice = function (_a) {
    var PDustPriceUsd = _a.PDustPriceUsd;
    return PDustPriceUsd ? (React__default['default'].createElement(PriceLink, { href: "https://polygonscan.com/address/0x5ce9680bddc91d955a51b959f5cabaf466b0be5a", target: "_blank" },
        React__default['default'].createElement(Icon$q, { width: "24px", mr: "8px" }),
        React__default['default'].createElement(Text, { color: "textSubtle", bold: true }, "$" + PDustPriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 }));
};
var PDustPrice$1 = React__default['default'].memo(PDustPrice);
var templateObject_1$9;

var Icons$2 = IconModule;
var MoonIcon = Icons$2.MoonIcon, SunIcon = Icons$2.SunIcon;
var ThemeSwitcher = function (_a) {
    var isDark = _a.isDark, toggleTheme = _a.toggleTheme;
    return (React__default['default'].createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
        React__default['default'].createElement(Flex, { alignItems: "center" },
            React__default['default'].createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
            React__default['default'].createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
            React__default['default'].createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))));
};
var ThemeSwitcher$1 = React__default['default'].memo(ThemeSwitcher, function (prev, next) { return prev.isDark === next.isDark; });

var Icons$1 = IconModule;
var SocialLinks = function () { return (React__default['default'].createElement(Flex, null, socials.map(function (social, index) {
    var Icon = Icons$1[social.icon];
    var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
    var mr = index < socials.length - 1 ? "24px" : 0;
    if (social.items) {
        return (React__default['default'].createElement(Dropdown, { key: social.label, position: "top", target: React__default['default'].createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React__default['default'].createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
    }
    return (React__default['default'].createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
        React__default['default'].createElement(Icon, __assign({}, iconProps))));
}))); };
var SocialLinks$1 = React__default['default'].memo(SocialLinks, function () { return true; });

var Icons = IconModule;
var LanguageIcon = Icons.LanguageIcon;
var LangSelector = function (_a) {
    var currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    return (React__default['default'].createElement(Dropdown, { position: "top-right", target: React__default['default'].createElement(Button, { variant: "text", startIcon: React__default['default'].createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
            React__default['default'].createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React__default['default'].createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
        // Safari fix
        style: { minHeight: "32px", height: "auto" } }, lang.language)); })));
};
var LangSelector$1 = React__default['default'].memo(LangSelector, function (prev, next) { return prev.currentLang === next.currentLang; });

var Container = styled__default['default'].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var SettingsEntry = styled__default['default'].div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, PDustPriceUsd = _a.PDustPriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    if (!isPushed) {
        return (React__default['default'].createElement(Container, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$R, null))));
    }
    return (React__default['default'].createElement(Container, null,
        React__default['default'].createElement(SocialEntry, null,
            React__default['default'].createElement(PDustPrice$1, { PDustPriceUsd: PDustPriceUsd }),
            React__default['default'].createElement(SocialLinks$1, null)),
        React__default['default'].createElement(SettingsEntry, null,
            React__default['default'].createElement(ThemeSwitcher$1, { isDark: isDark, toggleTheme: toggleTheme }),
            React__default['default'].createElement(LangSelector$1, { currentLang: currentLang, langs: langs, setLang: setLang }))));
};
var templateObject_1$8, templateObject_2$2, templateObject_3$1;

var StyledPanel = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$7;

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M2400 3920 l0 -80 -80 0 -80 0 0 -50 0 -49 -77 -3 -78 -3 -3 -47 c-2\n-35 -8 -51 -23 -58 -25 -14 -24 -30 1 -30 17 0 20 -7 20 -40 l0 -40 -80 0 -80\n0 0 -73 0 -74 -107 -6 c-58 -4 -130 -7 -160 -7 -29 0 -53 -4 -53 -10 0 -12 -4\n-11 94 -15 53 -1 81 -7 87 -16 7 -12 9 -12 9 1 0 13 1 13 10 0 9 -13 10 -13\n10 0 0 12 2 13 9 1 7 -11 9 -11 14 0 3 8 6 2 6 -13 1 -26 -2 -28 -39 -28 -22\n0 -40 4 -40 8 0 12 -141 8 -165 -5 -11 -5 -32 -9 -47 -8 -16 1 -28 -2 -28 -7\n0 -4 18 -8 40 -8 33 0 40 -3 40 -20 0 -17 7 -20 40 -20 22 0 40 -4 40 -10 0\n-6 115 -10 325 -10 l325 0 0 -1195 0 -1195 -363 0 -364 0 -6 608 c-4 334 -7\n708 -7 831 l0 223 -287 -2 c-159 -2 -292 -2 -298 -1 -6 0 -10 90 -9 248 1 176\n-1 220 -6 153 -4 -52 -5 -143 -2 -202 4 -94 3 -108 -12 -114 -12 -5 -14 -10\n-6 -19 8 -9 6 -14 -5 -19 -11 -4 -15 1 -15 19 0 24 -2 25 -75 25 l-75 0 0\n-120 0 -120 -40 0 -40 0 0 -40 0 -40 -120 0 -120 0 0 -80 0 -80 -80 0 -80 0 0\n-80 0 -80 -80 0 -80 0 0 -80 0 -80 -80 0 -80 0 0 -880 0 -880 2000 0 2000 0 0\n2000 0 2000 -800 0 -800 0 0 -80z m-644 -652 c4 -5 -27 -8 -70 -8 -42 0 -75 4\n-72 8 6 10 132 10 142 0z m1230 -88 c32 -11 76 -34 97 -51 20 -16 42 -27 49\n-23 7 4 8 3 4 -4 -4 -6 9 -31 28 -56 66 -87 83 -210 45 -332 -18 -57 -31 -77\n-82 -129 -79 -79 -149 -108 -257 -109 -143 -2 -272 77 -335 204 -35 69 -44\n190 -21 264 8 27 12 54 9 60 -3 6 -3 8 2 4 9 -9 76 82 69 93 -2 4 1 11 7 15 8\n4 9 3 5 -4 -11 -19 9 -14 27 6 20 22 99 62 141 73 61 14 152 9 212 -11z\nm-2010 -715 c1 -8 -2 -15 -7 -15 -5 0 -9 4 -9 9 0 5 -3 18 -6 28 -6 15 -4 16\n6 6 8 -7 15 -20 16 -28z m172 -22 c-10 -2 -26 -2 -35 0 -10 3 -2 5 17 5 19 0\n27 -2 18 -5z m-151 -19 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z" }),
        React__default['default'].createElement("path", { d: "M1903 3703 c-18 -7 -16 -23 2 -23 8 0 15 7 15 15 0 8 -1 15 -2 14 -2\n0 -9 -3 -15 -6z" }),
        React__default['default'].createElement("path", { d: "M1520 3212 c0 -4 20 -8 44 -8 25 0 42 4 40 8 -3 5 -23 8 -45 8 -21 0\n-39 -3 -39 -8z" }),
        React__default['default'].createElement("path", { d: "M953 2760 c0 -25 2 -35 4 -22 2 12 2 32 0 45 -2 12 -4 2 -4 -23z" }),
        React__default['default'].createElement("path", { d: "M952 2603 c2 -20 8 -38 13 -40 7 -2 9 12 7 37 -2 22 -8 40 -14 40 -5\n0 -8 -17 -6 -37z" })));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M1990 3208 c0 -460 3 -587 13 -591 6 -3 4 -6 -7 -6 -16 -1 -232 -96\n-566 -249 -36 -16 -119 -55 -185 -85 -66 -30 -144 -65 -172 -77 -29 -12 -53\n-26 -53 -29 0 -4 38 -29 85 -56 47 -27 85 -52 85 -55 0 -3 -47 -25 -105 -49\n-58 -24 -105 -47 -105 -51 0 -5 82 -56 183 -116 100 -59 236 -139 302 -178 66\n-40 211 -125 322 -191 131 -77 203 -126 203 -136 0 -47 55 -224 95 -303 51\n-105 128 -191 202 -228 39 -19 64 -23 133 -23 117 1 143 7 198 46 78 56 118\n97 191 193 109 143 176 285 217 461 20 88 23 335 4 417 l-13 57 -81 37 c-45\n20 -93 41 -108 46 -16 6 -28 14 -28 18 0 4 36 29 80 55 44 26 82 50 84 53 4 6\n-29 63 -162 282 -25 41 -216 359 -425 705 -208 347 -381 632 -383 634 -2 2 -4\n-259 -4 -581z m230 -688 c8 -5 11 -10 5 -10 -5 0 -17 5 -25 10 -8 5 -10 10 -5\n10 6 0 17 -5 25 -10z" }),
        React__default['default'].createElement("path", { d: "M1150 351 l0 -101 34 0 c19 0 46 4 60 10 32 12 45 55 24 77 -13 12\n-13 21 -5 44 15 39 -6 60 -67 66 l-46 6 0 -102z m90 64 c20 -24 4 -45 -35 -45\n-32 0 -35 2 -35 30 0 26 3 30 29 30 16 0 34 -7 41 -15z m4 -78 c25 -18 17 -50\n-15 -61 -41 -14 -59 -2 -59 39 0 32 3 35 28 35 16 0 36 -6 46 -13z" }),
        React__default['default'].createElement("path", { d: "M1532 434 c-45 -31 -19 -67 63 -91 23 -6 30 -14 30 -33 0 -21 -5 -26\n-33 -28 -19 -2 -44 4 -57 12 -31 20 -43 3 -13 -18 27 -19 88 -21 110 -3 39 32\n21 81 -35 92 -63 13 -68 16 -65 38 2 18 11 23 41 25 21 2 44 -1 51 -7 7 -6 16\n-8 19 -4 11 11 -27 32 -58 33 -17 0 -41 -7 -53 -16z" }),
        React__default['default'].createElement("path", { d: "M1683 355 c0 -69 2 -86 6 -55 8 57 17 70 46 70 22 0 47 -27 44 -47\n-4 -25 2 -63 11 -63 16 0 12 83 -6 108 -17 24 -67 30 -81 10 -5 -8 -10 4 -14\n32 -4 30 -6 11 -6 -55z" }),
        React__default['default'].createElement("path", { d: "M2306 437 c-12 -9 -17 -23 -14 -42 3 -26 9 -31 57 -45 57 -16 71 -31\n51 -55 -16 -19 -74 -19 -90 0 -7 8 -17 12 -23 8 -17 -11 33 -43 67 -43 94 0\n101 89 8 106 -50 9 -64 21 -51 45 11 21 58 26 90 9 12 -7 19 -7 19 -1 0 28\n-82 41 -114 18z" }),
        React__default['default'].createElement("path", { d: "M2450 355 c0 -57 4 -95 10 -95 6 0 10 19 10 43 0 46 7 61 30 69 31\n11 50 -11 50 -57 0 -24 5 -47 10 -50 15 -9 12 88 -3 109 -10 14 -23 17 -50 14\n-36 -4 -37 -3 -37 29 0 18 -4 33 -10 33 -6 0 -10 -38 -10 -95z" }),
        React__default['default'].createElement("path", { d: "M2683 443 c-7 -2 -13 -13 -13 -24 0 -11 -7 -22 -15 -25 -19 -8 -20\n-24 0 -24 10 0 15 -16 18 -57 l3 -58 2 58 c2 43 6 57 17 57 8 0 15 5 15 10 0\n6 -7 10 -15 10 -8 0 -15 7 -15 15 0 9 7 18 15 21 8 4 15 10 15 15 0 10 -8 10\n-27 2z" }),
        React__default['default'].createElement("path", { d: "M2600 420 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n-10 -4 -10 -10z" }),
        React__default['default'].createElement("path", { d: "M2750 411 c0 -11 -8 -22 -17 -24 -17 -4 -17 -5 0 -6 14 -1 17 -10 17\n-49 0 -49 13 -72 40 -72 13 1 12 3 -2 14 -21 16 -25 101 -5 109 10 4 10 6 0 6\n-7 1 -13 10 -13 21 0 11 -4 20 -10 20 -5 0 -10 -9 -10 -19z" }),
        React__default['default'].createElement("path", { d: "M1402 370 c-5 -14 -16 -40 -23 -58 l-14 -33 -20 50 c-11 28 -25 51\n-31 51 -8 0 -4 -20 13 -59 27 -62 26 -111 -2 -111 -8 0 -15 -4 -15 -10 0 -19\n29 -10 44 13 21 32 67 159 62 171 -2 6 -8 0 -14 -14z" }),
        React__default['default'].createElement("path", { d: "M1837 372 c-23 -25 -21 -68 3 -92 23 -23 60 -26 78 -8 10 10 15 10\n22 -2 7 -10 10 5 10 50 l0 65 -48 3 c-37 2 -52 -2 -65 -16z m91 -36 c4 -34\n-13 -56 -44 -56 -49 0 -65 73 -20 90 32 11 61 -3 64 -34z" }),
        React__default['default'].createElement("path", { d: "M1980 296 c0 -57 4 -96 10 -96 6 0 10 19 10 42 0 33 3 39 12 30 18\n-18 63 -14 81 6 22 25 21 75 -1 95 -21 19 -67 23 -77 7 -5 -8 -11 -7 -21 1\n-12 10 -14 -3 -14 -85z m91 74 c23 -13 26 -62 5 -80 -19 -15 -56 -9 -69 11\n-14 22 -1 67 21 72 9 3 18 5 20 6 2 0 12 -4 23 -9z" }),
        React__default['default'].createElement("path", { d: "M2147 372 c-53 -58 26 -144 89 -97 17 13 16 14 -18 8 -24 -3 -43 -1\n-53 7 -27 22 -16 30 40 30 59 0 67 9 45 51 -14 26 -80 26 -103 1z m83 -7 c18\n-22 9 -27 -41 -23 -41 3 -42 4 -25 21 22 21 49 22 66 2z" }),
        React__default['default'].createElement("path", { d: "M2600 324 c0 -41 4 -63 10 -59 6 3 10 33 10 66 0 33 -4 59 -10 59 -6\n0 -10 -29 -10 -66z" })));
};

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M920 2000 l0 -1080 265 0 265 0 2 811 3 811 786 -1 c433 -1 799 1 813 5 l26 6 0 264 0 264 -1080 0 -1080 0 0 -1080z" }),
        React__default['default'].createElement("path", { d: "M2543 1992 l-533 -2 0 -265 0 -265 268 -2 267 -3 3 -267 c2 -247 4 -268 20 -268 57 0 157 26 221 57 144 69 257 220 281 378 6 41 9 187 8 355 l-3\n285 -532 -3z" })));
};

exports.ConnectorNames = void 0;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["Polygon"] = "matic";
})(exports.ConnectorNames || (exports.ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$6,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: Icon$5,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "TokenPocket",
        icon: Icon$4,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "Torus",
        icon: Icon$3,
        connectorId: exports.ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: Icon$2,
        connectorId: exports.ConnectorNames.WalletConnect,
    },
    {
        title: "Portis",
        icon: Icon$1,
        connectorId: exports.ConnectorNames.Polygon,
    },
    {
        title: "Fortmatic",
        icon: Icon,
        connectorId: exports.ConnectorNames.Polygon,
    },
];
var connectorLocalStorageKey = "connectorId";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { width: "100%", variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "text", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default['default'](Link)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default['default'].createElement(HelpLink, { href: "https://polygon-docs.moonwalker.network/faq", external: true },
            React__default['default'].createElement(Icon$O, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$6;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$P, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$5, templateObject_2$1;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://polygonscan.com/address/" + account, mr: "16px" }, "View on PolygonScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { scale: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var StyledButton = styled__default['default'](Button)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(StyledButton, { scale: "md", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(StyledButton, { scale: "md", onClick: function () {
            onPresentConnectModal();
        } }, "Connect Wallet"))));
};
var UserBlock$1 = React__default['default'].memo(UserBlock, function (prevProps, nextProps) { return prevProps.account === nextProps.account; });
var templateObject_1$4;

var Wrapper = styled__default['default'].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled__default['default'].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, PDustPriceUsd = _a.PDustPriceUsd, links = _a.links; _a.profile; var children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(Flex, null,
                React__default['default'].createElement(UserBlock$1, { account: account, login: login, logout: logout }))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, PDustPriceUsd: PDustPriceUsd, pushNav: setIsPushed, links: links }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$3, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", scale: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, scale: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants$2.INFO,
    _a[types.SUCCESS] = variants$2.SUCCESS,
    _a[types.DANGER] = variants$2.DANGER,
    _a[types.WARNING] = variants$2.WARNING,
    _a);
var StyledToast = styled__default['default'].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$2;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

var baseColors = {
    failure: "#7027A0",
    primary: "#7027A0",
    primaryBright: "#451862",
    primaryDark: "#7027A0",
    secondary: "#F0C803",
    success: "#7027A0",
    warning: "#451862",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#C7C7C7", contrast: "#FFFFFF", invertedContrast: "#FFFFFF", input: "rgba(241, 241, 241, 0.4)", inputSecondary: "#444444", tertiary: "#EFF4F5", text: "#373737", textDisabled: "#777777", textSubtle: "#373737", borderColor: "#E9EAEB", card: "#FFFFFF", extra: "#373737", button: "linear-gradient(90deg, #919191 0%, #272727 100%)", farming: "rgba(254, 200, 3, 0.1)", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#7027A0", background: "#2B2B2B", backgroundDisabled: "#C7C7C7", contrast: "#FFFFFF", invertedContrast: "#343434", input: "#444444", inputSecondary: "#444444", primaryDark: "#7027A0", tertiary: "#444444", text: "#FFFFFF", textDisabled: "#777777", textSubtle: "#FFFFFF", borderColor: "#C7C7C7", card: "#343434", extra: "#FAC504", button: "linear-gradient(90deg, #7027A0 0%, #7C6A25 100%)", farming: "rgba(255, 255, 255, 0.1)", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$5 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$3 = {
    handleBackground: lightColors.contrast,
};
var dark$3 = {
    handleBackground: darkColors.contrast,
};

var light$2 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$2 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$1 = {
    background: lightColors.card,
};
var dark$1 = {
    background: darkColors.card,
};

var light = {
    background: darkColors.card,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark = {
    background: lightColors.card,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$6, colors: darkColors, card: dark$5, toggle: dark$3, nav: dark$2, modal: dark$1, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$6, colors: lightColors, card: light$5, toggle: light$3, nav: light$2, modal: light$1, radio: light$4, tooltip: light });

exports.AddIcon = Icon$17;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$16;
exports.ArrowDownIcon = Icon$15;
exports.ArrowDropDownIcon = Icon$14;
exports.ArrowDropUpIcon = Icon$13;
exports.ArrowForwardIcon = Icon$12;
exports.ArrowUpIcon = Icon$11;
exports.AutoRenewIcon = Icon$10;
exports.BackgroundImage = BackgroundImage;
exports.BaseLayout = GridLayout$1;
exports.BinanceIcon = Icon$$;
exports.BlockIcon = Icon$19;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$_;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$Y;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$Z;
exports.CardsLayout = GridLayout;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon$1b;
exports.CheckmarkIcon = Icon$X;
exports.ChevronDownIcon = Icon$W;
exports.ChevronLeftIcon = Icon$V;
exports.ChevronRightIcon = Icon$U;
exports.ChevronUpIcon = Icon$T;
exports.CloseIcon = Icon$S;
exports.CogIcon = Icon$R;
exports.CommunityIcon = Icon$Q;
exports.CopyIcon = Icon$P;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1a;
exports.FallingBunnies = module$1;
exports.Flex = Flex;
exports.Heading = Heading;
exports.HelpIcon = Icon$O;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$18;
exports.Input = Input$1;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$N;
exports.LogoIcon = Icon$M;
exports.LogoRoundIcon = Icon$L;
exports.Menu = Menu;
exports.MetamaskIcon = Icon$K;
exports.MinusIcon = Icon$J;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.NoProfileAvatarIcon = Icon$I;
exports.NotificationDot = NotificationDot;
exports.OpenNewIcon = Icon$H;
exports.PancakeRoundIcon = Icon$F;
exports.PancakesIcon = Icon$G;
exports.PlayCircleOutlineIcon = Icon$E;
exports.PrizeIcon = Icon$D;
exports.Progress = Progress;
exports.ProgressBunny = Icon$A;
exports.Radio = Radio;
exports.RemoveIcon = Icon$C;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$u;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Spinner = Spinner;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$t;
exports.SyncAltIcon = Icon$s;
exports.Tag = Tag;
exports.Text = Text;
exports.Ticket = Icon$x;
exports.TicketRound = Icon$w;
exports.TimerIcon = Icon$v;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.VerifiedIcon = Icon$B;
exports.WaitIcon = Icon$z;
exports.WarningIcon = Icon$r;
exports.WingsIcon = Icon$q;
exports.Won = Icon$y;
exports.alertVariants = variants$2;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.connectorLocalStorageKey = connectorLocalStorageKey;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useKonamiCheatCode = useKonamiCheatCode;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;
