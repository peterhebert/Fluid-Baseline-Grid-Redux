# Fluid Baseline Grid Redux
version: 1.1 (2013-12-19)
by [Peter Hebert](http://peterhebert.com)

A CSS framework based Upon the [Fluid Baseline Grid](http://fluidbaselinegrid.com/) by [Josh Hopkins](http://twitter.com/thedayhascome) & [40 Horse](http://40horse.com/).

The original FBG system was built with typographic standards in mind and combines principals of fluid-column layouts, baseline grids and mobile-first responsive design into a resolution independent and device agnostic framework. It is packed with CSS normalization, beautiful typographic standards, corrected bugs, common browser inconsistencies and improved usability. You can finally have your cake and eat it too, all while making awesome websites.

This `Redux` version builds on the original project, and ports it to the [LESS](http://lesscss.org/) CSS framework.

## Baselines
Paragraphs are set at a 16px base with 150% (24px) line height to improve readability and improve the appearance of text.

## Multiple Grid Systems - grids.less
I have included several different grid system or column generators - you can use them or not.

### Golden Ratio Grid
Create columns based upon the the Golden Ratio. I used a 4% gutter by default, but you can supply your own widths, as they are now parametric mixins.

* **.golden-a** : 61.8% approx. minus gutter
* **.golden-b** : 38.2% approx. minus gutter
* **.golden-full** : full width of parent minus gutter

#### .golden-nest(@parent, @child)
A parametric mixin for nesting the golden grid without adding non-semantic markup to the HTML. It has two parameters:

* **@parent** : the size of the parent element
* **@child** : the ratio of the child relative to the parent.

Both default to 1 for 100%, use decimals or the `@ga` and `@gb` variables for parameters. You can alo use math in the parameters for multi-level nesting.

### Fibonacci Sequence Grid
I also added a fixed grid generator mixin for generating a column with its width based upon a number in the Fibonacci Sequence. Supply the **n**th number, the margin and padding, and the base column width, and it will give you the column styles.

* **@n** : nth number in sequence
* **@m** : margin on each side
* **@p** : padding on each side (defaults to none)
* **@b** : base column width

### Generic column generators
I have created two generic column generator mixins:

#### EM measurements - .emColumn(@cols, @m, @p, @b)
* **@cols** : column span
* **@m** : margin on each side
* **@p** : padding on each side 
* **@b** : base column width

#### percentage based - .percentColumn(@span, @cols, @m, @p)
* **@span** - width to span X number of columns
* **@cols** - based upon X total columns in parent
* **@m** = margin on each side
* **@p** = padding on each side

## Media Queries - Breakpoints based upon Golden Ratio / Fibonacci Sequence
The breakpoints have been adjusted from the original project, to be (loosely) based upon the Fibonacci  Sequence / Golden Ratio. I have also changed the media queries to use EM measurements, so that it scales better. I also used breakpoints based upon typography and content (optimal line width). Columns are just a suggestion, and are included in the example layout file as a demo only. Use whatever works for you.

* up to 36 ems : default 1 column
* 36 ems : 2 column
* 58.5 ems : 3 columns
* 94.5 ems : 4 columns (20px/30px text)
* 117 ems : 5 columns (24px/36px text)

At the largest viewport media queries, the base font size has benn bumped up an additional 125% (20px/30px) and 150% (24px/36px) respectively.

### Original FBG grids and media queries (media-queries-original)
I have also included the columns, media queries and breakpoints from the original FBG system:

* 320 px | Mobile portrait
* 480 px | Mobile landscape
* 600 px | Small tablet
* 768 px | Tablet portrait
* 1024 px | Tablet landscape/Netbook
* 1280 px & greater | Desktop

## Responsive Design
The FBG is designed for mobile first. CSS styles are scaled up from the minimum instead of scaled down from the maximum through the use of media queries. IE6/7/8 do not support media queries, so Respond.js is used to polyfill.

## Normalize CSS
Reset vs. Normalize? Most web designers use either the Eric Meyer Reset or the YUI Reset, but a reset doesn't fix cross-browser inconsistencies or preserve useful defaults. Normalizing CSS allows for the preservation of useful defaults, while correcting bugs, fixing common browser inconsistencies and improving usability. Many thanks to Nicolas Gallagher and Jonathan Neal for researching the differences between default browser styles in order to precisely target only the styles that need normalizing.

## File Structure
The file structure for FBG is straight-forward and contains only the minimum files to get started.

* less [folder]
	* fluid-baseline-grid-redux.less: master LESS stylesheet to compile from
	* variables.less: set all LESS variables used in the base style definitions and mixins
	* base.less: Base styles of FBG for layout, grid, type and media queries
	* grid.less: optional - golden, fibonacci, em and percentage column grid mixins
	* mixins.less: optional mixins for eye candy (rounded corners, borders, etc.)
	* print.less: suggested print media stylesheet from original FBG system
* css [folder] - all the stylesheets compiled to CSS3
	* media-queries-original.css - media queries and columns from original FBG system (not converted to LESS)
* JavaScript [Google CDN]
	* jQuery 1.6.2: High-speed load of the latest minimized verson of jQuery from Google CDN
*HTML5 shiv: HTML5 IE enabling script and print protector from Google CDN
* js [folder]
	* Respond.js v1.0.1: Lightweight polyfill for CSS3 Media Queries (for IE 6/7/8)
* images [folder]:
	* grid_bg.gif: Repeating background for vertical rhythm testing purposes
* index.html: Base HTML page that includes only necessary minimal markup
* robots.txt: SEO, search-crawler file

## Other notes
* I replaced the baseline grid background images to use SVG with a PNG fallback.
* I removed all icons - they were blank anyway

## [Changelog](Changelog.md)

## License:
### Components:

* LESS: Apache License
* jQuery: MIT/GPL licenses
* Respond.js MIT/GPL licenses
* HTML5shiv MIT/GPL licenses

### License:
* Same as the original project. The code and design are released into public domain and are free to use under [Unlicense](http://unlicense.org).
