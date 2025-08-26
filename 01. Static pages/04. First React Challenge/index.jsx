import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
root.render(
    <main>
        <img width="40px"
            src="images/react-logo.png"
            alt="React logo"
        />
        <h1>Fun facts about React</h1>
        <ul class="facts-list">
            <li >Was first released in 2013</li>
            <li>Was originally created by XXXXXX Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul    >
    </main>
)   

