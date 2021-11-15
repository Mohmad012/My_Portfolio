const MainContent = ({ ID , NameClassSection , textP , textH , children }) => {

  return(
	    <section id={ID} className={NameClassSection}>
	      <div className="container">

	        <div className="section-title" data-aos="fade-down">
	          	<h2>{textH}</h2>
	          	<p className="font-italic">{textP}</p>
	        </div>
	        {children}
	      </div>
	    </section>
   )
};

export default MainContent;
