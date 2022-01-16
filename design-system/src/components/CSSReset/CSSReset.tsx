import { Global } from '@emotion/react';
import React from 'react';

/* 
  Either directly import the css-reset.css file
  or use this wrapped component but not both
  */
const CSSReset = () => {
  return (
    <Global
      styles={`
        /* 
        Elad Shechter's the-new-css-reset
        https://raw.githubusercontent.com/elad2412/the-new-css-reset/main/css/reset.css 
        */
        /*** The new CSS Reset - version 1.4.5 (last updated 13.1.2022) ***/
        /*
        Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
        - The "symbol *" part is to solve Firefox SVG sprite bug
        */
        *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
        all: unset;
        display: revert;
        }
        
        /* Preferred box-sizing value */
        *,
        *::before,
        *::after {
        box-sizing: border-box;
        }
        
        /* Reapply the pointer cursor for anchor tags */
        a {
        cursor: revert;
        }
        
        /* Remove list styles (bullets/numbers) */
        ol,
        ul,
        menu {
        list-style: none;
        }
        
        /* For images to not be able to exceed their container */
        img {
        max-width: 100%;
        }
        
        /* removes spacing between cells in tables */
        table {
        border-collapse: collapse;
        }
        
        /* revert the 'white-space' property for textarea elements on Safari */
        textarea {
        white-space: revert;
        }
        
        /* fix the feature of 'hidden' attribute.
        display:revert; revert to element instead of attribute */
        :where([hidden]) {
        display: none;
        }
        
        /* revert for bug in Chromium browsers
        - fix for the content editable attribute will work properly. */
        :where([contenteditable]) {
        -moz-user-modify: read-write;
        -webkit-user-modify: read-write;
        overflow-wrap: break-word;
        -webkit-line-break: after-white-space;
        }
        
        /* apply back the draggable feature - exist only in Chromium and Safari */
        :where([draggable='true']) {
        -webkit-user-drag: element;
        }
    `}
    />
  );
};

export default CSSReset;
