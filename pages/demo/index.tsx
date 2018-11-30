import routes from '../routes'
const { Link } = routes

const Demo = () => {
  return (
    <div>
      <h1>this is test 'demo' page!</h1>
      <ul>
        <li>jump <Link route="/demo/nextRoutes"><a>/demo/nextRoutes</a></Link> page</li>
      </ul>
    </div>
  )
}

export default Demo
