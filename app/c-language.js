import React, { Component } from "react";
import BlogPage from './blog-page.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, docco } from 'react-syntax-highlighter/styles/hljs';


const cLanguage = {

    title:'C Programming',
    text: <div>
        <h3>OS X Mac (High Sierra) glib Tutorial</h3>
        <p>To being with you need to install homebrew for following this tutorial. Once setup you we need to install glib and pkg-config.</p>

    <p> <SyntaxHighlighter language='shell' style={darcula}>brew install pkg-config</SyntaxHighlighter></p>
        <p> <SyntaxHighlighter language='shell' style={darcula}>brew install glib</SyntaxHighlighter></p>

        <p>A found a great <a href="https://www.ibm.com/developerworks/linux/tutorials/l-glib/">IBM Tutorial based on UNIX</a> for this so we will follow this and get it working on Mac terminal.</p>

        <p>PKG is a tool make it easier to specify configuration locations and we will use this on Mac to make our lives much easier. To get the code to run I had to replace the quotations from &#39; to &#768;. The command to runcompile the first example is as follows: </p>
        <p> <SyntaxHighlighter language='shell' style={darcula}>gcc &#768;pkg-config --cflags --libs glib-2.0 &#768; -o ex-compile ex-compile.c</SyntaxHighlighter></p>

        <p>For some reason when compiling you will see a warning so please include &lt;stdio.h&gt; for printf.</p> <p>Lets begin with playing around with a single linked list. To define a single linked list and to add an item you can do the following:  </p>


        <p> <SyntaxHighlighter language='c' style={darcula}>GSList* list = NULL;</SyntaxHighlighter></p>
        <p> <SyntaxHighlighter language='c' style={darcula}>list = g_slist_append(list, "first");</SyntaxHighlighter></p>

        <p>This is C so lets not forget to clean the memory up once done.</p>

        <p> <SyntaxHighlighter language='c' style={darcula}>g_slist_free(list);</SyntaxHighlighter></p>

        <p>If we want to remove from the list you can do the following:</p>
        
        <p> <SyntaxHighlighter language='c' style={darcula}>list = g_slist_remove(list, "first");</SyntaxHighlighter></p>

        <p>Now we have seen a few examples we can see that the format for most code using glib is:</p>

     <p> <SyntaxHighlighter language='c' style={darcula}>g_(container name)_(function name)</SyntaxHighlighter></p>

   
    </div>,
    contents: ''

};


const CLanguagePage = (props) => {

    return (

            <BlogPage
        title={cLanguage.title}
        contents={cLanguage.contents}
        text={cLanguage.text}
        />
    );

}


export default CLanguagePage;
