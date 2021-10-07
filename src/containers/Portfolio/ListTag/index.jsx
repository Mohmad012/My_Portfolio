function ListTag({ text , filterMode , NameClass }) {
  return (
    <>
      <li data-filter={filterMode} className={NameClass}>{text}</li>
    </>
  )
}

export default ListTag