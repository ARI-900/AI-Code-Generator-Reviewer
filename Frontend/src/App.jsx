import React, { useEffect, useState } from 'react'

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Import theme (You can change this)

// Import language-specific components
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-c";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";

import Editor from "react-simple-code-editor";
import axios from "axios";
import ReactMarkdown from "react-markdown";


function App() {

  const [code, setCode] = useState(`
def firstCode():
  print("Hello, World!")
                `);

    const [result, setResult] = useState(``);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, result]);

  async function reviewCode() {
    try {
      const response = await axios.post("http://localhost:4000/ai/get/code-review", {code})
      
      // console.log(response.data);
      setResult(response.data);
    }
    catch(err) {
      console.log("Error Occured");
      console.warn(err.message);
    }
  }

  return (
    <>
      <div className='heading'>
        Code Reviewer
      </div>
      <main>

        {/* left part */}
        <div className="left">
          <div className="code">

            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => Prism.highlight(code, Prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                height: "100%",
                width: "100%",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            />
            
          </div>
          <div id="review"
            onClick={reviewCode}
          >
            Review
          </div>
        </div>

        {/* right part */}
        <div className="right" style={{ color: "white", padding: "20px", background: "#222", borderRadius: "8px" }}>
      <ReactMarkdown id="styles">{result}</ReactMarkdown>
    </div>

      </main>
    </>
  )
}

export default App
