import React from 'react'
import Navigate from './components/Navigate'
import './app.css'
import { ArrowRight } from 'lucide-react';

const App = () => {
  return (
    <>
      <Navigate />

      <div className="hero">

        <h1>Featured Projects and Events</h1>

        <p>A curated collection of recent culinary experiences, from intimate gatherings to comprehensive workshops crafted with warmth and fresh ingredients.</p>
      
      </div>

      <div className="projects-grid">

        <div className=" featured">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900" alt="Garden wedding dinner"
          />
          <div className="card-content">

            <div className='tags'> 
            <span>Private Event</span>


            <span>Seasonal Menu</span>
            </div>


            <h3>Summer Garden Wedding</h3>
            
            
            <p>A bespoke dining experience with fresh, seasonal ingredients and elegant presentation.</p>
            
            
            
            <button>View Gallery <ArrowRight size={16} /></button>
          </div>
        </div>

        <div className="project-card">
          <img
            src="https://i.pinimg.com/1200x/42/f6/2c/42f62ccd72f8456bf96900ebda705a8c.jpg" alt="dining dish"
          
          
          />
          
          <div className="card-content">
        
        
            <span>Tasting Menu</span>
        
        
            <h3>Intimate 5-Course Tasting</h3>
        
        
            <p>An exclusive anniversary dinner featuring modern techniques and comforting flavors.</p>
        
        
          </div>
        </div>

        
        
        <div className="project-card2">
        
        
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600" alt="Cooking"
          />
        
        
          <div className="card-content">
            <span>Workshop</span>
        
        
            <h3>Corporate Wellness Workshop</h3>
        
        
            <p>A hands-on cooking class for a team, focusing on quick, nutritious meals.</p>

          </div>
        
        </div>

        
        
        <div className="horizontal-card1">
        
        
          <img
            src="https://i.pinimg.com/1200x/b6/d1/96/b6d196b643fa4e49d24b86abb1e3f19b.jpg" alt= "bread making"
          />
        
        
          <div className="card-content">

            <div className='tags'>
              <span>MasterClass</span>
              <span>Baking</span>
            </div>
            <h3>Artisan Bread Masterclass</h3>
            <p>Learn sourdough starters, hydration ratios and traditional baking techniques. </p>
        
            <button>Read Story <ArrowRight size={16} /></button>
        
          </div>
        </div>

        
        
        <div className="horizontal-card2">
        
        
          <img
            src="https://i.pinimg.com/736x/4a/b4/43/4ab4437c05eccdabec689bbd1b72a1bb.jpg" alt="Dinner event"
          />
        
        
          <div className="card-content">
            <span>Pop-up-Dinner</span>

            <h3>Autumn Harvest Dinner</h3>
            <p>A seasonal dinner featuring root vegetables and warm spices.</p>
        
            <button>Read Story <ArrowRight size={16} /></button>
          </div>
        </div>

      </div>


      <footer className='footer'>
        
        
        <div className="footer-name">Warm Hearth</div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#privacy">Privacy</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-copy">
          © 2026 Warm Hearth. Made for home cooks.
        </div>

      </footer>
      
    </>
  )
}

export default App