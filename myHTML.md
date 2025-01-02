## HTML - Hyper Text Markup Language

* &lt;!DOCTYPE html&gt;, &lt;html&gt;, &lt;head&gt; & meta attributes, &lt;body&gt; [Root element, head element and body element]
* heading tags, paragraph tag, anchor tag (&lt;a href=#&gt;)
* HTML elements with body and empty elements like break &lt;br/&gt; and horizontal rule &lt;hr/&gt;.
* HTML tags are not case sensitive. But, standard practice is to use lower case letters for the tags.
* All html elements have attributes(name="value" pairs), they provide additional information about elements. Attributes are always specified in the start tag of the element not in the end tag.
* style attribute is also name="value" pair, but the value is again property:value; pairs separated by the comma. [property and value belongs to CSS]
    * &lt;p style="color:red;"&gt;Red Paragraph&lt;/p&gt;
    * &lt;p title="paragraph2"&gt;This is second paragraph&lt;/p&gt;
    * &lt;h1 style="font-size:60px;"&gt;Heading 1&lt;/h1&gt;
* &lt;pre&gt; element defines preformatted text, it preserves both spaces and line breaks inside the content of the element. And displayed in a fixed width font(courier).
* style attribute of html elements.
    <pre>
    &lt;body style="background-color:powderblue;"&gt;
    &lt;p style="background-color:tomato;"&gt;
    * The background-color property of CSS defines the background color of the HTML element.
    * The color property of CSS defines the text color of the HTML element.
    &lt;h1 style="color:blue;"&gt;This a blue heading&lt/h1&gt;
    &lt;p style="color:red;"&gt;This a blue paragraph&lt/p&gt;
    * The  CSS font-family property defines the font to be used for an HTML element.
    &lt;p style="font-family:courier"Paragraph&lt;/p&gt;
    * font-size property defines the text size for an HTML element.("font-size:150%")
    * text-align property defines the horizontal text alignment for an HTML element. ("text-align:center;")
    </pre>
* Formatting elements were defined to display special types of text
    <pre>
    &lt;b&gt; - Bold text
    <b>Bold Text</b>
    &lt;strong&gt; - Important text
    <strong>Strong Text</strong>
    &lt;i&gt; - Italic text
    <i>Iatalic Text</i>
    &lt;em&gt; - Emphasized text
    <em>Emphasized Text</em>
    &lt;mark&gt; - Marked text
    <mark>Marked Text</mark>
    &lt;small&gt; - Smaller text
    <small>Smaller Text</small>
    &lt;del&gt; - Deleted text
    <del>Deleted Text</del>
    &lt;ins&gt; - Insterted text
    <ins>Inserted Text</ins>
    &lt;sub&gt; - Subscript text
    H<sub>2</sub>O
    &lt;sup&gt; - Superscript text
    a<sup>b</sup>
    </pre>
* HTML Quotation and Citation Elements
    <pre>
    &lt;blockquote cite="source_website.html"&gt; - section that is quoted from another sourece
    &lt;q&gt; - ""
    &lt;abbr&gt; - defines abbreviation or an acronym, like "HTML", "CSS",.. when hovered over the html element.
    &lt;address&gt; - defines contact information for the author/owner of a document.
    </pre>
* HTML Comments
    <pre>
        &lt;!-- comments --&gt;
    </pre>
* Colors in HTML can be specified using names (supports 140 standard color names), RGB values(rgb(255, 99, 71)), HEX values (#ff5347) and hsla values.
* CSS - Cascading style sheets
    * CSS is used to format the layout of a webpage.
    * With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!
    * In a HTML document, CSS can be added in 3 ways:
        1. Inline - by using the style attribute inside the HTML elements
        > &lt;p style="color:blue;"&gt;A blue paragraph&lt;/p&gt;
        2. Internal - by using a &lt;style&gt; element in the &lt;head&gt; section.
        <pre>
        &lt;!DOCTYPE html&gt;
        &lt;html&gt;
        &lt;head&gt;
        &lt;style&gt;
        body{
            background-color: powderblue;
        }
        h1{
            color: blue;
        }
        p{
            color: red;
        }
        &lt;/style&gt;
        &lt;/head&gt;
        &lt;body&gt;
        &lt;h1&gt;This a heading&lt;/h1&gt;
        &lt;p&gt;This a paragraph&lt;/p&gt;
        &lt;/body&gt;
        &lt;/html&gt;
        </pre>
        3. External - by using a &lt;link&gt; element to link to an external CSS file.
        <pre>
        &lt;!DOCTYPE html&gt;
        &lt;html&gt;
        &lt;head&gt;
        &lt;link rel="stylesheet" href="style.css"/&gt;
        &lt;/head&gt;
        &lt;body&gt;
        &lt;h1&gt;This a heading&lt;/h1&gt;
        &lt;p&gt;This a paragraph&lt;/p&gt;
        &lt;/body&gt;
        &lt;/html&gt;
        style.css
        ---------
        body{
            background-color: powderblue;
        }
        h1{
            color: blue;
            border: 2px solid blue;
            padding: 30px;
        }
        p{
            color: red;
        }
        * border property defines a border around an HTML element
        * padding property defines a padding(space) between the text and the border.
        * margin property defines a margin(space) outside the border.
        </pre>
* HTML links are Hyperlinks. When you move the mouse over a link, the mouse arrow will turn into a little hand.
    * A link doesn't have to be a text, A link can be an image or any other HTML element!
    * By default, links will apprear as follows in all browsers:
        1. An unvisited link is underlined and blue
        2. A visited link is underlined and purple
        3. An active link is underlined and red
    <pre>
    &lt;a href="destination page address" target="where to open the destination" title="tooltip text when hovered"&gt;Any HTML element&lt/a&gt;
    * target="_self/_blank/_parent/_top"
    * Link to an email address: use mailto: inside the href attribute to create a link that opens the user's email app.
    &lt;a href="mailto:vignesh@gmail.com"&gt;Send email&lt;/a&gt;
    
    style.css
    ---------
    a:link{
        color:green;
        background-color:transparent;
        text-decoration:none;
    }
    a:visited{
        color:pink;
        background-color:transparent;
        text-decoration:none;
    }
    a:hover{
        color:yellow;
        background-color:transparent;
        text-decoration:underline;
    }
    a:active{
        color:red;
        background-color:transparent;
        text-decoration:underline;
    }

    * Styling a link to simulate button
    a:link, a:visited{
        background-color: #f44336;
        color: white;
        padding: 15px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }
    a:hover, a:active{
        background-color:red;
    }
    </pre>

        * Using anchor tag to jump within a page. [Bookmarks]
        * Use id attribute to define bookmark an element in a page
        * Then, use the href attribute of a tag to link to the bookmark.     

    * HTML &lt;head&gt;
        * The head element is a container for the following elements: &lt;title&gt;, &lt;style&gt;, &lt;meta&gt;, &lt;link&gt;, &lt;script&gt; and &lt;base&gt;
        * &lt;link rel="stylesheet" href="style.css"&gt;
    
    * HTML Images
    
        * It is an empty element which doesn't have a end tag or a content.
        <pre>
        &lt;img src=".jpg/.gif" alt="alternate text" style="width:200px;height:200px;"/&gt;
        or
        &lt;img src=".jpg/.gif" alt="alternate text" width="200" height="200"/&gt;
        </pre>
        * Always specify width and height of the image or else the web page might flicker while the image loads.
        * Instead of width and height attributes of the img tag, use css style width and height propertis properties to not get into ambiguity, some times you may use both.
        <pre>
        img{
            width: 100%;
            height: 100%;
        }</pre>
        * Use CSS float property to let the image float to the right or to the left of a text
        <pre>
        &lt;p&gt;&lt;img src="smiley.gif" alt="smiley face" style="float:right;width:42px;height:42px;"&gt; The image will float to the right of this text.&lt;/p&gt;
        </pre>
        * Common image formats: jpg, png, gif, ico, svg
        * Image Maps
        <pre>
            &lt;img src="" alt="" usemap="#workmap"&gt;
            &lt;map name="workmap"&gt;
                &lt;area shape="rect" coords="34,44,270,350" alt="item1" href=""/&gt;
            &lt;/map&gt;
        </pre>
        * Background Images
        <pre>
            body {
                background-image:url(".jpg");
            }
            div {
                background-image:url(".jpg");
            }
        * If the image is smaller than the element's background, the image will repeat itself bydefault, horizontally and vertically, until it reaches the end of the element.
        * To avoid the background image from repeating itself, set the background-repeat property to no-repeat
            body {
                background-image:url(".jpg");
                background-repeat: no-repeat;
                background-attachment: fixed;
                background-size: cover;
            }
        * Set the background-size property to cover if you want the background image to cover the entire element
        * Set the background-attachment property to fixed if you want to make sure the entire element is always covered.
            
        This way the background image will cover the entire element, with no streching i.e the image will keep its original proportions
        * If you want the background image to stretch to fit the entire element, you can set the background-size property to 100% 100% (both width and height)
        </pre>
    
    * &lt;picture&gt; element allows you to display different pictures for different devices and screen sizes 

    * Favicon
        *  A favicon is a small image displayed next to the page title in the browser tab.
        <pre>
        &lt;head&gt;
        &lt;link rel="icon" type="image/x-icon" href=".ico"/&gt;
        &lt;/head&gt;
    * Page Title
        * Every web page should have a title to describe the meaning of the page.
        <pre>
        &lt;head&gt;
        &lt;title&gt;Home&lt;/title&gt;
        &lt;/head&gt;
    * Tables
        * Allows to arrange data into rows and columns
        * &lt;table&gt;,&lt;tr&gt;,&lt;th&gt; and &lt;td&gt;
        * Bydefault, td elements are bold and centered, but you can customize them too with CSS.
        * some other table tags: &lt;caption&gt;, &lt;colgroup&gt;, &lt;col&gt;, &lt;thead&gt; &lt;tbody&gt; and &lt;tfoot&gt;
        * Styles (borders and cell sizes)
        <pre>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }
        th, td {
            background-color: #96D4D4;
            width: 100%;
            height: 7px;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 20px;
            padding-right: 20px;
            border-spcaing: 30px; //between cells
        }
        td: hover {
            background-color: #D5EEEE;
        }

        instead of solid you can have dotted, dashed, double, groove, none, hidden,...
        // You can write it as border-style property separately.
        </pre>
        * colspan and rowspan attributes for spanning.
        * nth-child(even) selector for styling.
    * Lists
        * Unordered Lists: &lt;ul&gt;, &lt;li&gt;
        * Ordered Lists: &lt;ol&gt;, &lt;li&gt;
        * Description Lists: &lt;dl&gt;, &lt;dt&gt; and &lt;dd&gt;
        * Applying styles to list symbols
    * HTML block-level elements
        * &lt;div&gt;, &lt;table&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;pre&gt;, &lt;form&gt;, &lt;nav&gt;, &lt;p&gt;, &lt;h1-h6&gt;,...
        * div element is used as a container for other HTML elements.
        * style, class and id are the most common attributes of div element.
    * HTML inline-level elements
        * An Inline element does not start on a new line, it only takes up as much width as necessary.
        * &lt;span&gt;, &lt;a&gt;, &lt;img&gt;,...
    * class attribute
        * It is used to specify a class for an HTML element, and multiple elements can share the same class.
        * class attribute is often used to point a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.
        * Note: The class name is case sensitive
        * styling a class (i.e all elements belong to that class)
        <pre>
        &lt;h2 class="city"&gt;London&lt;/h2&gt;
        style.css
        ---------
        .city {
            background-color: tomato;
            color: white;
            padding: 10px;
        }
        i.e period followed by the class name to define style for that class
        </pre>

        * An element can belong to more than one class at a time.
        <pre>
        &lt;h2 class="city main"&gt;London&lt;/h2&gt;
        &lt;p class="city"&gt;Paris&lt;/p&gt;
        </pre>
        * getElementsByClassName() in JavaScript.
    * id attribute
        * It is used to specify a unique id for an HTML element. You cannot have more than one element with the same id in an HTML document.
        * styling based on id of an element
        <pre>
        &lt;h1 id="myHeader"&gt;My Header&lt;/h1&gt;
        style.css
        ---------
        #myHeader {
            background-color: lightblue;
            color: black;
            padding: 40px;
            text-align: center;
        }
        </pre>
        * The id name is case sensitive
        * getElementById() in JavaScript.
    * JavaScript
        * JavaScript makes HTML pages more dynamic and interactive.
        * &lt;script src="" type=""/&gt; tag in HTML
        * script tag with content
        * &lt;noscript&gt; tag in HTML
    * File paths in HTML
        * src="file" => file is in the same folder as the current page
        * src="docs/file" => file is located in the docs folder in the current folder
        * src="/docs/file" => file in docs folder which is at the root of the current web.
        * src="../file" => file is located in the folder one level up from the current folder or two levels up from the current page
    * HTML Video
        * It is used to show a video on a web page.
        <pre>
        &lt;video width="320" height="240" controls autoplay muted>
            &lt;source src="movie.mp4" type="video/mp4"/&gt;
        &lt;/video&gt;
        </pre>
    * HTML Audio
        * It is used to show a video on a web page.
        <pre>
        &lt;audio controls autoplay muted>
            &lt;source src="movie.mp3" type="audio/mp4"/&gt;
        &lt;/audio&gt;
        </pre>
    * YouTube video in HTML
        
        <pre>
            &lt;iframe width="420" height="315"
                src="https://www.youtube.com/embed/thgfkd"
            &lt;/iframe&gt;
        </pre>
    
    * HTML Layout Elements
        * &lt;header&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;, &lt;details&gt; and &lt;summary&gt;
        * There are four different techniques to create multicolumn layouts. Each technique has its pros and cons.
            1. CSS framework
            2. CSS float property
                * Cons: Floating elements are tied to the document flow, which may harm the flexibility.
                <pre>
                    &lt;header&gt;
                    &lt;/header&gt;<br/>
                    &lt;section&gt;
                        &lt;nav&gt;
                        &lt;article&gt;
                    &lt;/section&gt;<br/>
                    &lt;footer&gt;
                    &lt;/footer&gt;
                style.css
                ---------
                *{
                    box-sizing: border-box;
                }
                nav{
                    float: left;
                }
                article{
                    float: left;/*why this one also left?*/
                }
                /* clear floats after the colums
                section::after{
                    content:"";
                    display: table;
                    clear: both;
                }
                </pre>
            3. CSS flexbox (refer flexbox in CSS)
            4. CSS grid (refer grid in CSS)
    * Responsive Web Design in HTML
        * A responsive web design will automatically adjust for different screen sizes and viewports
        * &lt;meta name="viewport" content="width=device-width,initial-scale=1.0"&gt;
        * &lt;img src="" style="max-width:100%;height:auto;"&gt;
            * width vs max-width attribute
        <pre>
        @media only screen and (max-width: 620px) {
            /* For mobile phones */
            .menu, .main, .right {
                width: 100%;
            }
        }
        </pres>
    * HTML Form, elements and attributes.
        * Form input type: button, checkbox, date, datetime-local, email, password, file, hidden, image, color, number, search, time, text, submit, radio,... 