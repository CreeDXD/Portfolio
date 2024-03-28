import imageList from '../data/data'
import ImageStack from './ImageStack'

function MaStack() {
  return (
    <div className="maStack">
      <h1>Ma Stack</h1>

      <section>
        {imageList.map((image, index) => (
          <ImageStack key={index} title={image.name} path={image.path} />
        ))}
      </section>
    </div>
  )
}

export default MaStack
