### Fluid Baseline Grid Redux

# Changelog

## version 1.1 (2013-12-19)
* added main stylesheet 'fluid-baseline-grid-redux.less'
* Split out variables, mixins, base and layouts into separate LESS stylesheets
* changed Golden Grid mixins to golden-a, golden-b, golden-full and golden-nest, and restored original .g1, .g2, .g3 styles from original FBG system

## 2013-11-20
* updated LESS version linked to in HTML examples to 1.5.0

### version 1.0.1 (2013-11-01)
* changed @Phi value to hard-coded decimal (50 places long) due to the Javascript equation no longer working with LESS > 1.3.3
* added variables section at top of base.less to declare base text size, baseline value, default border width
* added color variables to declare default colors, including the ability to set a base link color and have the hover, active and visited colors generated as shades of the base link color (uses LESS color functions)
* Adjusted default font stacks
* Added mixin .baseline-size to create block elements that adhere to the vertical baseline without manually calculating and typing in EM values
* Added mixins for rounded corners and bordered elements
* removed color declarations from **ins** and **mark** tags
* removed body margin from base.less and moved to example stylesheets (layout-fixed-fibonacci and layout-fluid-golden)

### version 1.0 (2013-03-12) - initial release

