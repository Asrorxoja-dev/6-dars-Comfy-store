import { Link, useRouteError } from "react-router-dom"

function Error() {
  const error = useRouteError()



  if(error.status == '404'){
    return <main className="min-h-screen grid place-content-center">
      <div className="text-center">
        <h1 className="text-6xl text-primary">404</h1>
      <p className="text-5xl font-bold text-neutral mb-6">Page Not Found</p>
 <Link className="btn btn-primary" to="/">Back Home</Link>
      </div>
    </main>
  }
  return (
   <main className="min-h-screen grid place-content-center">
     <div className=" text-center">
        <h1 className="text-6xl text-primary mb-5">Upps...!</h1>
      <p className="text-5xl font-bold text-neutral mb-6">Something went to wrong !</p>
 <Link className="btn btn-primary" to="/">Back Home</Link>
      </div>
   </main>
    
  )
}

export default Error