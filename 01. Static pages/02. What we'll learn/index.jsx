import { createRoot } from "react-dom/client"
import App from "./App"

const root = createRoot(document.getElementById("root"))
root.render(<div>
    <App />
</div>)

// root.render(
//     <main>
//         <img width="40px"
//             src="images/react-logo.png"
//             alt="React logo"
//         />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by XXXXXX Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul    >
//     </main>
// )   
