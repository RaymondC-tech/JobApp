import {useLoaderData, useNavigate, useParams} from 'react-router-dom'

const EditJobPage = () => {

  const job = useLoaderData();

  return (
    <div>{job.title}</div>
  )
}

export default EditJobPage