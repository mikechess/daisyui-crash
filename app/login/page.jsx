// "use client"

const Login = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto p-8 mt-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              placeholder="example@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full rounded-full bg-purple-500 hover:bg-purple-600"
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
