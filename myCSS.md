### CSS - Cascading Style Sheets

* Selectors
    <pre>
    *selecting elements
    p {
        /@@@@@/
    }
    div {
        /@@@@@/
    }

    h1 h2 {
        /@@@@@/
    }
    *selecting classes
    .class1 {
        /@@@@@/
    }
    *selecting id
    #id3 {
        /@@@@@/
    }
    Note: An id name and class name cannot start with number
    *selecting element with class
    p.class4{
        /@@@@@/
    }
    *selecting all elements
    * {
        /@@@@@/
    }
    </pre>

* Comments in CSS: /* This a comment*/
* CSS Backgrounds
    * The CSS background properties are used to add background effects for elements
    * background-color  
        <pre>
        div {
            background-color: green;
            opacity: 0.3;
        }
        *opacity range is 0.0-1.0 [the lower the more transparent]
        *when using the opacity property to the background of an element to add transparency, all of its child elements inherit the same transparency. This can make the text inside a fully transparent element hard to read.
        *If you don not want to apply opacity to child elements, like above, use RGBA(Red-Green-Blue-Alpha) color values. 
        *Alpha specifies the opacity in RGBA
        div{
            background: rgba(0,128,0,0.3) (30% opacity)
        }
        </pre> 
    * background-image
    * background-repeat
    * background-attachment
    * background-position
    * background (a shorthand property)
        * Used to use image to use as the background of an element
        * By, default the image is repeated (both horizontally and vertically) so it covers the entire element.
        <pre>
            body{
                background-image: url(.jpg);
                background-image: repeat-x;//repeat only horizontally
                /*repeat-y for only vertical repeating*/
                /*background-repeat: no-repeat; for no repeating*/
            }
        </pre>
        * background-position:  left top, left center, left bottom, right top, right center, right bottom, center top, center center, center bottom, xpos ypos
        * background-attachment: scroll | fixed | local | initial | inherit;
* CSS Borders
    * border-style property can have from oneto four values (for the top border, right border, bottom border,and the left border)
    <pre>
        div{
            border-style: dotted | solid | dashed | double | ...;
            border-width: 25px 10px 4px 35px | 25px (for all four borders);
            border-color: red;
            border-radius: 5px; (rounded border corners)
        }
    </pre>
    * Border shorthand
        * border: 5px solid red;
* Margins
    * Margins are used to create space around elements, outside of any defined borders.
    <pre>
        p{
            margin-top: auto; (browser calculates the margin)
            margin-left: 5px;
            margin-right: 2%;
            margin-bottom: inherit; (inherit from parent)
        }
    </pre>
    * margin shorthand
        * margin: auto 5px 2% inherit;
    * margin collapse of an element's top margin which is below of an element which has bottom margin
* Padding
    * It is used to create space around an element's content, inside of any defined borders.
        * padding-top | padding-right | padding-bottom | padding-left
        * padding shorthand
* Height/ Width
    * The CSS height and width properties are used to set the height and width of an element.
    * The CSS max-width property is used to set the maximum width of an element.
    * Values: auto | px | % | initial | inherit
    * max-width can also be set to none (which is default), i.e there is no maximum width.
* Box Model
    * The term Box model is used when talking about design and layout.
    * The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins.
* CSS Outline
    * An outline is a line drawn outside the element's border.
    * outline-style | outline-color | outline-width | outline-offset | outline
* CSS Text
    * color and background-color properties
    * text-align, text-align-last, direction, unicode-bidi and vertical-align
    <pre>
        p{
            text-align: center | left | right | justify;
            text-align-last: center | left | right | justify;
        }
        img.a{
            vertical-align: baseline;
        }
        img.b{
            vertical-align: text-bottom | text-top;
        }
        img.c{
            vertical-align: sub; /*subscript*/
        }
        img.d{
            vertical-align: super;/*superscript*/
        }
    </pre>
    * text-decoration shorthand (text-decoration-line|color|style|thickness)
    * text-transform: uppercase | lowercase | capitalize;
    * text spacing and text shadow
    <pre>

    &lt;head&gt;
    &lt;link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"/&gt;
    &lt;/head&gt;

    .p1 {
        font-family: "Sofia", sans-serif;
    }
    </pre>
    
* Links
    * When setting style for several link states, there are some order rules:
    1. a: hover MUST come after a:link and a:visited
    2. a: active MUST come after a:hover
* CSS display
    * display property is used to specify how an element is shown on a web page.
    * The default display value for block-level elements is block and inline-level elements is inline
    * other values of display property
        * contents: Makes the container disappear, making the child elements children of the element the next level up in the DOM
        * flex: Displays an element as a block-level flex container
        * grid: Displays an element as a block-level grid container
        * inline-block: Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values.
        * inline-flex: Displays an element as an inline-level flex container
        * inline-grid: Displays an element as an inline-level grid container.
        * inline-table: The lement is displayed as an inline-level table.
        * list-item: Let the element behave like a &lt;li&gt; element.
        * run-in: block or inline depending upon on the context
        * table: let the element behave like table
        * none: the element is completely removed
        * visibility:hidden; also hides an element but the element still take up the same space as before.
* Position
    * Position property specifies the type of positioning method used for an element
    * values: static | relative | absolute | fixed | sticky
* Z-index
    * This property specifies stack order of an element
    * It can have positive or negative stack order
* Overflow
    *  It controls what happens to the content that is too big to fit into an area.
    * overflow: visible | hidden | scroll | auto;
* Float
    * The float property is used for positioning and formatting content e.g. let an image float left to the text in a container.
    * float: left | right | none | inherit
    * clear property specifies what should happen with the element that is next to a floating element
    * clear: none | left | right | both | inherit;
    * clearfix - If a floated element is taller than the container element, it will overflow outside of it's container. We can then add a clearfix hack to solve this problem.
        <pre>
        .clearfix:: after {
            overflow: auto;
        }
        </pre>
* Align elements
    * To horizontally center a block element, use margin: auto;
    * To center an image, set left and right margin to auto and make it into a block element (i.e display: block;)
* CSS Combinators
    * Descendant combinator (space)
    * Child combinator (>)
    * Next sibling combinator (+)
    * Subsequent-sibling combinator (~)
* CSS Pseudo classes
    * A pseudo class is used to define a special state of an element.
    * a:active
    * input:autofill
    * input:checked
    * option:checked
    * input:default
    * button:default
    * option:default
    * div:empty
    * p:first-child
    * li:first-child
    * input:focus
    * select:focus
    * button:focus-visible
    * form:focus-within
    * label:focus-within
    * a:hover
    * p:hover
    * a:link
    * p:nth-child(2) | nth-child(even)
* CSS Pseudo elements
    * A CSS pseudo element is used to style specific parts of an element.
    * p::after
    * div::after
    * p::first-line
* CSS At-rules
* Navbar
    * It can be horizontal and vertical. It is a list of links.
* Dropdowns
* Image Gallery
* Website Layout: Header, Navigation Bar, leftsife content, main content, rightside content, Footer.
* Tooltips
* Pagination
* Multiple columns
* CSS Flexbox