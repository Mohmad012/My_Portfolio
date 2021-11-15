import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function DIVInfo({ ClassName , IcoName , textH4 , textP , SecClass }) {
  return (
    <div className={ClassName}>
      <FontAwesomeIcon icon={IcoName} />
      <h4>{textH4}</h4>
      {SecClass ? <p className="text-truncate">{textP}</p> : <p>{textP}</p>}
      
    </div>
  )
}

export default DIVInfo