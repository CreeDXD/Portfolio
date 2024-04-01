// import { useNavigate } from 'react-router-dom'

const ViewProject = ({ project }) => {
  //   const navigate = useNavigate()
  const handleClick = () => {
    // navigate(`/${project}`)
  }
  return (
    <div>
      <button onClick={handleClick}> &gt;</button>
    </div>
  )
}
export default ViewProject
