function DIVFormGroup({ ClassDiv , text , nameInput , nameVal , funHandel , typeInput }) {
  return (
    <div className={ClassDiv}>
      <label htmlFor={nameInput}>{text}</label>
      <input type={typeInput} name={nameInput} className="form-control" id={nameInput} value={nameVal} onChange={funHandel} required />
      <div className="validate"></div>
    </div>
  )
}

export default DIVFormGroup