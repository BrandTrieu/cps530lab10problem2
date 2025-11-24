import './App.css'

export default function App() {

  return (
    <div className="container">
      <h1>CPS 530 - Lab 10 - Problem 2</h1>

      <section>
        <h2>How the Framework Was Installed</h2>
        <p>This page was created using React with Vite. Installation involved creating a project directory and running:</p>
        <pre>{`npm create vite@latest cps530lab10project2 -- --template react`}</pre>
        <p>Since the page is simple, no other dependencies had to be manually installed. Testing the webpage involved running: <code>npm run dev</code> and then opening up the localhost URL</p>
      </section>

      <section>
        <h2>How the Page Was Built</h2>
        <p>This page was built by editing the <code>App.jsx</code> file (which has similar syntax to HTML) inside the Vite React project, which was generated when React was installed.</p>
        <p>This page is also hosted for free using Cloudflare.</p>
      </section>

      <section>
        <h2>Difficulties Encountered</h2>
        <p>One challenge was ensuring that the folder structure was correct for Vite and React as the framework requires specific file placements and multiple files to function properly.</p>
        <p>Since React is often used with backend frameworks as well, the setup for the website was a bit more complex than usual</p>
      </section>
    </div>
  )
}