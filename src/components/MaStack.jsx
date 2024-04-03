import imageList from '../data/data'
import ImageStack from './ImageStack'

function MaStack() {
  return (
    <div className="maStack">
      <h3>
        Voici les differentes technologies et outils de <span>ma stack</span>.
      </h3>

      <section>
        {imageList.map((image, index) => (
          <ImageStack key={index} title={image.name} path={image.path} />
        ))}
      </section>
    </div>
  )
}

export default MaStack
