# Fluid Baseline Redux
Based Upon the [Fluid Baseline Grid](http://fluidbaselinegrid.com/) by [Josh Hopkins](http://twitter.com/thedayhascome) & [40 Horse](http://40horse.com/).

I will only detail changes from the original in this document - for further reference look at the [original documentation](http://fluidbaselinegrid.com/)

## Baseline Grid
Paragraphs are set at a 16px base with 150% (24px) line height to improve readability and improve the appearance of text. At the largest viewport media queries, the base font size has benn bumped up an additional 125% (20px/30px) and 150% (24px/36px) respectively.

## Golden Ratio / Fibonacci  Sequence
The breakpoints have been adjusted from the original project, to be (loosely) based upon the Fibonacci  Sequence / Golden Ratio. I have also changed the media queries to use EM measurements, so that it scales better. I also used breakpoints based upon typography and content (optimal line width). Columns are just a suggestion, and are included in the example layout file as a demo only. Use whatever works for you.

### Golden Grid
I added a separate grid stylesheet, where I have replaces the .g1, .g2, and .g3 classes to use the Golden Ratio. I used a 4% gutter by default, but you can supply your own widths, as they are now parametric mixins.

* .g1 | 61.8% approx. minus gutter
* .g2 | 38.2% approx. minus gutter
* .g3 | full width of parent minus gutter

### Fibonacci  Grid
I also added a grid generator mixin for generating a column with its width based upon a number in the Fibonacci Sequence. Supply the **n**th number, the margin and padding, and it will give you the column styles.

* .g1 | 61.8% approx. minus gutter
* .g2 | 38.2% approx. minus gutter
* .g3 | full width of parent minus gutter

### Break Points in ems
* default 1 column
* 36 ems | 2 column
* 58.5 ems | 3 columns
* 94.5 ems | 4 columns | 20px/30px text
* 117 ems | 5 columns | 24px/36px text

## Other notes
* I replaced the baseline grid background images to use SVG with a PNG fallback.
* removed all icons - they were blank anyway
* robots.txt: SEO, search-crawler file

### License:
* Same as the original project. The code and design are released into public domain and are free to use under Unlicense. [Unlicense](http://unlicense.org)