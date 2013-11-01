# Fluid Baseline Grid Redux
version: 1.0.1 (2013-11-01)
by [Peter Hebert](http://peterhebert.com)

A CSS framework based Upon the [Fluid Baseline Grid](http://fluidbaselinegrid.com/) by [Josh Hopkins](http://twitter.com/thedayhascome) & [40 Horse](http://40horse.com/).

I will only detail changes from the original framework in this document - for further reference look at the [original documentation](http://fluidbaselinegrid.com/)

## Baseline Grid
Paragraphs are set at a 16px base with 150% (24px) line height to improve readability and improve the appearance of text. At the largest viewport media queries, the base font size has benn bumped up an additional 125% (20px/30px) and 150% (24px/36px) respectively.

## Golden Ratio / Fibonacci  Sequence
The breakpoints have been adjusted from the original project, to be (loosely) based upon the Fibonacci  Sequence / Golden Ratio. I have also changed the media queries to use EM measurements, so that it scales better. I also used breakpoints based upon typography and content (optimal line width). Columns are just a suggestion, and are included in the example layout file as a demo only. Use whatever works for you.

### Golden Grid
I added a separate grid stylesheet, where I have replaces the .g1, .g2, and .g3 classes to use the Golden Ratio. I used a 4% gutter by default, but you can supply your own widths, as they are now parametric mixins.

* .g1 : 61.8% approx. minus gutter
* .g2 : 38.2% approx. minus gutter
* .g3 : full width of parent minus gutter

I also added a parametric mixin (.gnest )for nesting the golden grid without adding non-semantic markup to the HTML. It has two parameters:

* @parent : the size of the parent element
* @child : the ratio of the child relative to the parent.

Both default to 1 for 100%, use decimals or the `@ga` and `@gb` variables for parameters. You can alo use math in the parameters for multi-level nesting.

### Fibonacci  Grid
I also added a fixed grid generator mixin for generating a column with its width based upon a number in the Fibonacci Sequence. Supply the **n**th number, the margin and padding, and the base column width, and it will give you the column styles.

* @n : nth number in sequence
* @m : margin on each side
* @p : padding on each side (defaults to none)
* @b : base column width


### Break Points in ems
(these are a sample only based upon optimum line width for the default text size, so we can add columns to the layout when more space is available. Designed for fluid grids).

* up to 36 ems : default 1 column
* 36 ems : 2 column
* 58.5 ems : 3 columns
* 94.5 ems : 4 columns (20px/30px text)
* 117 ems : 5 columns (24px/36px text)

## Other notes
* I replaced the baseline grid background images to use SVG with a PNG fallback.
* I removed all icons - they were blank anyway

## Changelog
* version 1.0.1 (2013-11-01) - changed @Phi value to hard-coded decimal (50 places long) due to the Javascript equation no longer working with LESS > 1.3.3
* version 1.0 (2013-03-12) - initial release

### License:
* Same as the original project. The code and design are released into public domain and are free to use under Unlicense. [Unlicense](http://unlicense.org)
