import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LinkTag({ URL , ClassLink , IcoName }) {
  return (
    <a href={URL} target="_blank" rel="noreferrer" className={ClassLink}><FontAwesomeIcon icon={IcoName} /></a>
  )
}

export default LinkTag