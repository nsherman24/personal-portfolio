<section id="projects">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Projects</h1>
      <div class="projects-container">
        <div class="card">
          <h3>Interfacing an online API</h3>
          <button onclick="togglePopup('popup1')">Description</button>
          <div id="popup1" class="popup">
            <div class="popup-content">
              <span class="close" onclick="togglePopup('popup1')">&times;</span>
              <p>Developed a program to interface an online API to access and display current weather data.</p>
            </div>
          </div>
        </div>
        <div class="card">
          <h3>Creating a website</h3>
          <button onclick="togglePopup('popup2')">Description</button>
          <div id="popup2" class="popup">
            <div class="popup-content">
              <span class="close" onclick="togglePopup('popup2')">&times;</span>
              <p>Designed and developed a responsive personal portfolio website using HTML, CSS, and JavaScript.</p>
            </div>
          </div>
        </div>
        <div class="card">
          <h3>Data visualization</h3>
          <button onclick="togglePopup('popup3')">Description</button>
          <div id="popup3" class="popup">
            <div class="popup-content">
              <span class="close" onclick="togglePopup('popup3')">&times;</span>
              <p>Created visualizations using matplotlib and Tableau to analyze trends in large datasets.</p>
            </div>
          </div>
        </div>
        <div class="card">
          <h3>Machine learning model</h3>
          <button onclick="togglePopup('popup4')">Description</button>
          <div id="popup4" class="popup">
            <div class="popup-content">
              <span class="close" onclick="togglePopup('popup4')">&times;</span>
              <p>Developed a machine learning model to predict housing prices using Python and Scikit-Learn.</p>
            </div>
          </div>
        </div>
        <div class="card">
          <h3>Game Development</h3>
          <button onclick="togglePopup('popup5')">Description</button>
          <div id="popup5" class="popup">
            <div class="popup-content">
              <span class="close" onclick="togglePopup('popup5')">&times;</span>
              <p>Developed a simple 2D game using Java and the LibGDX framework.</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#contact'"
      />
    </section>