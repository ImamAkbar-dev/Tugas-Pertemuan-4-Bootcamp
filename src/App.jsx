import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import imamimg from './assets/imam.jpeg'
import people2 from './assets/People2.jpeg'
import people3 from './assets/People3.jpeg'
import people4 from './assets/People4.jpeg'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // Wrapper terluar ini yang akan memastikan warna background menyentuh tepi layar
    <div className={`theme-wrapper ${isDarkMode ? 'dark-theme' : ''}`}>
      <div className="app-container">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <div className="cards-container">
          {/* Kartu 1 */}
          <Card 
            bannerImg="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=600&auto=format&fit=crop" 
            avatarImg={imamimg}
            name="Imam Akbar Arbain" 
            username="@imamakbar_dev" 
            description="Informatics student at Universitas Tanjungpura. Specialized in Backend Development using PHP, MySQL, and Object-Oriented Programming (OOP) in Java." 
            initialLikes={2500} 
          />
          {/* Kartu 2 */}
          <Card 
            bannerImg="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" 
            avatarImg={people3}
            name="Steve" 
            username="@Steve" 
            description="I'm Steve, a product-focused UI/UX designer who blends user research, interaction design, and visual craft to build intuitive web and mobile experiences." 
            initialLikes={124000} 
          />
          {/* Kartu 3 */}
          <Card 
            bannerImg="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop" 
            avatarImg={people2}
            name="Alex" 
            username="@alex" 
            description="Frontend Enthusiast. Passionate about creating accessible, responsive, and beautiful user interfaces using modern web frameworks." 
            initialLikes={8420} 
          />
          {/* Kartu 4 */}
          <Card 
            bannerImg="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=600&auto=format&fit=crop" 
            avatarImg={people4}
            name="Sarah" 
            username="@sarah" 
            description="Data Scientist focusing on machine learning and predictive analytics. Love transforming complex data into actionable insights." 
            initialLikes={45100} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;