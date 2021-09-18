function ColTag({ textstrong1 , textstrong2 , textstrong3 , textspan4 , textspan5 , textspan6 }) {
  return (
	  <address className="col-lg-6">
	    <ul>
	      <li><strong> {textstrong1}</strong><span> {textspan4}</span></li>
	      <li><strong> {textstrong2}</strong><span> {textspan5}</span></li>
	      <li><strong> {textstrong3}</strong><span> {textspan6}</span></li>
	    </ul>
	  </address>
  )
}

export default ColTag