import routes from '../../routes'
const { Link } = routes

const NextRoutes = () => {
  return (
    <div>
      <h1>this is test 'next-routes' page!</h1>
      <div>
        goBack <Link route="/demo"><a>/demo</a></Link> page
      </div>
    </div>
  )
}

export default NextRoutes
