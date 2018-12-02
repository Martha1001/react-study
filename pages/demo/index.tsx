import routes from '../routes'
const { Link } = routes

const Demo = () => {
  return (
    <div>
      <h1>this is test 'demo' page!</h1>
      <ul>
        <li>jump <Link route="/demo/nextRoutes"><a>/demo/nextRoutes</a></Link> page</li>
        <li>jump <Link route="/demo/koaFetch"><a>/demo/koaFetch</a></Link> page</li>
      </ul>
    </div>
  )
}

export default Demo
