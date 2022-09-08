import Link from "next/link"
const Home = () => {
  return (
    <div>
      <h2>Next JS Pre-rendering</h2> 
      <Link href='/users'><a>to Users</a></Link>
      {/* calls the fetch in run build even with hover */}
    </div>
  )
}

export default Home
