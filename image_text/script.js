class ImageTextSection extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section class="section">
        <div class="section__image-wrapper">
          <img 
            class="section__image" 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" 
            alt="Team working"
          />
        </div>
        <div class="section__content">
          <div class="section__inner">
            <div class="section__description">
              <p>
                We deliver smart solutions to modern problems. Our team works tirelessly to bring innovation into every project.
              </p>
            </div>
            <div class="section__text">
              <p>
                We deliver smart solutions to modern problems. Our team works tirelessly to bring innovation into every project.
              </p>
            </div>
            <button class="section__toggle">Learn more</button>
          </div>
        </div>
      </section>
    `;

    const section = this.querySelector('.section');
    const toggleBtn = section.querySelector('.section__toggle');
    const textBlock = section.querySelector('.section__text');
    
    toggleBtn.addEventListener('click', () => {
      textBlock.classList.add('section__text--open');
      toggleBtn.style.display = 'none';
    });


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('section--visible');
          } else {
            section.classList.remove('section--visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
  }
}

customElements.define('image-text-section', ImageTextSection);
