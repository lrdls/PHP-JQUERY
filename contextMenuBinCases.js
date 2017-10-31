@charset "UTF-8";
/*!
 * jQuery contextMenu - Plugin for simple contextMenu handling
 *
 * Version: v2.6.3
 *
 * Authors: Björn Brala (SWIS.nl), Rodney Rehm, Addy Osmani (patches for FF)
 * Web: http://swisnl.github.io/jQuery-contextMenu/
 *
 * Copyright (c) 2011-2017 SWIS BV and contributors
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 * Date: 2017-10-30T19:03:13.936Z
 */
@-webkit-keyframes cm-spin {
  0% {
    -webkit-transform: translateY(-50%) rotate(0deg);
            transform: translateY(-50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translateY(-50%) rotate(359deg);
            transform: translateY(-50%) rotate(359deg);
  }
}
@-o-keyframes cm-spin {
  0% {
    -webkit-transform: translateY(-50%) rotate(0deg);
         -o-transform: translateY(-50%) rotate(0deg);
            transform: translateY(-50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translateY(-50%) rotate(359deg);
         -o-transform: translateY(-50%) rotate(359deg);
            transform: translateY(-50%) rotate(359deg);
  }
}
@keyframes cm-spin {
  0% {
    -webkit-transform: translateY(-50%) rotate(0deg);
         -o-transform: translateY(-50%) rotate(0deg);
            transform: translateY(-50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translateY(-50%) rotate(359deg);
         -o-transform: translateY(-50%) rotate(359deg);
            transform: translateY(-50%) rotate(359deg);
  }
}

@font-face {
  font-family: "context-menu-icons";
  font-style: normal;
  font-weight: normal;

  src: url("font/context-menu-icons.eot?2wp27");
  src: url("font/context-menu-icons.eot?2wp27#iefix") format("embedded-opentype"), url("font/context-menu-icons.woff2?2wp27") format("woff2"), url("font/context-menu-icons.woff?2wp27") format("woff"), url("font/context-menu-icons.ttf?2wp27") format("truetype");
}

.contextMenuCase{
    z-index: 10000;
	  position: relative;
	  top: 50%;
	  left: 0;
}

.context-menu-icon-add:before {
  content: "\EA01";
}

.context-menu-icon-copy:before {
  content: "\EA02";
}

.context-menu-icon-cut:before {
  content: "\EA03";
}

.context-menu-icon-delete:before {
  content: "\EA04";
}

.context-menu-icon-edit:before {
  content: "\EA05";
}

.context-menu-icon-loading:before {
  content: "\EA06";
}

.context-menu-icon-paste:before {
  content: "\EA07";
}

.context-menu-icon-quit:before {
  content: "\EA08";
}

.context-menu-icon::before {
  position: absolute;
  top: 50%;
  left: 0;
  width: 2em;
  font-family: "context-menu-icons";
  font-size: 1em;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  color: #2980b9;
  text-align: center;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
       -o-transform: translateY(-50%);
          transform: translateY(-50%);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.context-menu-icon.context-menu-hover:before {
  color: #fff;
}

.context-menu-icon.context-menu-disabled::before {
  color: #bbb;
}

.context-menu-icon.context-menu-icon-loading:before {
  -webkit-animation: cm-spin 2s infinite;
       -o-animation: cm-spin 2s infinite;
          animation: cm-spin 2s infinite;
}

.context-menu-icon.context-menu-icon--fa {
  display: list-item;
  font-family: inherit;
}
.context-menu-icon.context-menu-icon--fa::before {
  position: absolute;
  top: 50%;
  left: 0;
  width: 2em;
  font-family: FontAwesome;
  font-size: 1em;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  color: #2980b9;
  text-align: center;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
       -o-transform: translateY(-50%);
          transform: translateY(-50%);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.context-menu-icon.context-menu-icon--fa.context-menu-hover:before {
  color: #fff;
}
.context-menu-icon.context-menu-icon--fa.context-menu-disabled::before {
  color: #bbb;
}

.context-menu-list {
  position: absolute;
  display: inline-block;
  min-width: 13em;
  max-width: 26em;
  padding: .25em 0;
  margin: .3em;
  font-family: inherit;
  font-size: inherit;
  list-style-type: none;
  background: #fff;
  border: 1px solid #bebebe;
  border-radius: .2em;
  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
          box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
}

.context-menu-item {
  position: relative;
  padding: .2em 2em;
  color: #2f2f2f;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-color: #fff;
}

.context-menu-separator {
  padding: 0;
  margin: .35em 0;
  border-bottom: 1px solid #e6e6e6;
}

.context-menu-item > label > input,
.context-menu-item > label > textarea {
  -webkit-user-select: text;
     -moz-user-select: text;
      -ms-user-select: text;
          user-select: text;
}

.context-menu-item.context-menu-hover {
  color: #fff;
  cursor: pointer;
  background-color: #2980b9;
}

.context-menu-item.context-menu-disabled {
  color: #bbb;
  cursor: default;
  background-color: #fff;
}

.context-menu-input.context-menu-hover {
  color: #2f2f2f;
  cursor: default;
}

.context-menu-submenu:after {
  position: absolute;
  top: 50%;
  right: .5em;
  z-index: 1;
  width: 0;
  height: 0;
  content: '';
  border-color: transparent transparent transparent #2f2f2f;
  border-style: solid;
  border-width: .25em 0 .25em .25em;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
       -o-transform: translateY(-50%);
          transform: translateY(-50%);
}

/**
 * Inputs
 */
.context-menu-item.context-menu-input {
  padding: .3em .6em;
}

/* vertically align inside labels */
.context-menu-input > label > * {
  vertical-align: top;
}

/* position checkboxes and radios as icons */
.context-menu-input > label > input[type="checkbox"],
.context-menu-input > label > input[type="radio"] {
  position: relative;
  top: .12em;
  margin-right: .4em;
}

.context-menu-input > label {
  margin: 0;
}

.context-menu-input > label,
.context-menu-input > label > input[type="text"],
.context-menu-input > label > textarea,
.context-menu-input > label > select {
  display: block;
  width: 100%;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.context-menu-input > label > textarea {
  height: 7em;
}

.context-menu-item > .context-menu-list {
  top: .3em;
  /* re-positioned by js */
  right: -.3em;
  display: none;
}

.context-menu-item.context-menu-visible > .context-menu-list {
  display: block;
}

.context-menu-accesskey {
  text-decoration: underline;
}
