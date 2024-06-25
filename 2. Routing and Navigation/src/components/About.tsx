const About: React.FC = () => {
	return (
    <div className="container">
      <nav>
        <p className='logo'>Education</p>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <p>This is the About Page</p>
    </div>
  )
};

export default About;