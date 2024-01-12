const Home = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">
          Welcome to DaisyUI Crash Course
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 mb-2">Buttons:</p>
          <button className="btn btn-primary mr-2">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 mb-2">Alerts:</p>
          <div className="alert alert-success text-white font-bold mb-2">
            Success Alert
          </div>
          <div className="alert alert-error">Error Alert</div>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 mb-2 font-bold">Forms:</p>
          <div className="form-control">
            <label htmlFor="name" className="label">
              Name:
            </label>
            <input type="text" id="name" className="input input-bordered" />
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 mb-2">Cards:</p>
          <div className="card p-4">
            <h2 className="text-xl font-semibold">Card Title</h2>
            <p className="text-gray-600 mt-2">Card Content goes here.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home
