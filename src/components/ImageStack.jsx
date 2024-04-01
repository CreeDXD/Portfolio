const ImageStack = ({ title, path }) => {
  return (
    <div className="maStack--composant">
      <p>{title}</p>
      <img src={path} alt={title} />
    </div>
  )
}

export default ImageStack
