import routes from './routes'
const { Link } = routes

const Home = () => {
  return (
    <div>
      <h1>Welcome to next.js!</h1>
      <ul>
        <li>jump <Link route="/demo"><a>/demo</a></Link> page</li>
      </ul>
    </div>
  )
}

export default Home
