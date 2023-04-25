import './CSS/App.css';
import imgBlogSite from './imgs/myBlogSite.png'
import imgPomodoroClock from './imgs/pomodoroClock.png'
import imgCalculator from './imgs/simplyCalculator.png'
import imgDrumKit from './imgs/drumKit.png'
import imgRandomQuote from './imgs/randomQuote.png'
import imgKeepNotes from './imgs/Keeper.png'

function App() {
  return (
    <div className="App">
      <nav id="navbar" class="nav">
        <ul class="nav-list" >
            <li><a href="#welcome-section">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact me</a></li>
        </ul>
    </nav>
    <section id="welcome-section" class="welcome-section">
    <div className="welcome-section-inner">
    <h1> Armando Colmenares </h1>
        <p> Web fullstack developer.</p>
        <p> This is my own portfolio of projects that I've been creating and publishing along the way </p>
        <p> since 2023.</p>
    </div>
    </section>
    <section id="projects" class="projects-section">
        <h2 class="projects-section-header">These are some of my projects</h2>
        <div class="projects-grid">
            <a href="https://blog-posts-next-js.vercel.app/" target="_blakn" class="project project-tile">
                <img src={imgBlogSite} alt="project" class="project-image" />
                <p class="project-title">
                    <span class="code">&lt; </span>
                    Blog Posts
                    <span class="code"> /&gt;</span>
                </p>
            </a>
            <a href="https://pomodoro-clock-three-phi.vercel.app/" target="_blakn" class="project project-tile">
                <img src={imgPomodoroClock} alt="project" class="project-image" />
                <p class="project-title">
                    <span class="code">&lt; </span>
                    Pomodoro Clock
                    <span class="code"> /&gt;</span>
                </p>
            </a>
            <a href="https://simply-calculator-react-js.vercel.app/" target="_blakn" class="project project-tile">
                <img src={imgCalculator} alt="project" class="project-image" />
                <p class="project-title">
                    <span class="code">&lt; </span>
                    Simply Calculator
                    <span class="code"> /&gt;</span>
                </p>
            </a>
            <a href="https://drum-kitw-sound.vercel.app/" target="_blakn" class="project project-tile">
                <img src={imgDrumKit} alt="project" class="project-image" />
                <p class="project-title">
                    <span class="code">&lt; </span>
                    Drum Kit
                    <span class="code"> /&gt;</span>
                </p>
            </a>
            <a href="https://keep-notes-app-six.vercel.app/" target="_blakn" class="project project-tile">
                <img src={imgKeepNotes} alt="project" class="project-image" />
                <p class="project-title">
                    <span class="code">&lt; </span>
                    Keep notes to do
                    <span class="code"> /&gt;</span>
                </p>
            </a>
            <a href="https://randome-quote-machine-reactjs.vercel.app/" target="_blakn" class="project project-tile">
                <img src={imgRandomQuote} alt="project" class="project-image" />
                <p class="project-title">
                    <span class="code">&lt; </span>
                    Random quoting machine
                    <span class="code"> /&gt;</span>
                </p>
            </a>
        </div>
        <a href="https://github.com/Armwcl97?tab=repositories" class="btn-show-all btn" target="_blank">
            Show all
            <i class="fas fa-chevron-right"></i>
        </a>
    </section>
    <section class="contact-section" id="contact">
        <div contact="contact-section-header">
            <h2>Hit me up.</h2>
            <p>These are my social media so We can make an appointment:</p>
        </div>
        <div class="contact-links">
            <a href="https://www.facebook.com/armandow2/" target="_blank" class="btn contact-details">
                <i class="fab fa-facebook-square">
                </i>
                Facebook
            </a>
            <a id="profile-link" href="https://github.com/Armwcl97" target="_blank" class="btn contact-details">
                <i class="fab fa-github" >
                </i>
                GitHub
            </a>
            <a href="https://twitter.com/ArmandoCoolm" target="_blank" class="btn contact-details">
                <i class="fab fa-twitter">
                </i>
                Twitter
            </a>
            <a href="https://www.linkedin.com/in/armwcl97/" target="_blank" class="btn contact-details">
                <i class="fab fa-linkedin">  
                </i> 
                 LinkedIn
            </a>
            <a href="mailto:armandocolm11@gmail.com" target="_blank" class="btn contact-details">
                <i class="fas fa-at">
                </i>
                Send a Mail
            </a>
            <a href="tel:+58(424)129-4729" target="_blank" class="btn contact-details">
                <i class="fas fa-mobile-alt">
                </i>
                Call me
            </a>
        </div>
    </section>
    <footer>
        <p>
            
        
         © Armando Colmenares 2023
        
        
        </p>
    </footer>
    </div>
  );
}

export default App;
