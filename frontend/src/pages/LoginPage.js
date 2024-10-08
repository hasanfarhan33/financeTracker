const LoginPage = () => {
    return (
        <div className="pageContainer flex h-screen">
            <div className="formContainer w-full h-full flex justify-center items-center">
                <form>
                    
                    <label for="username" className="font-bold text-2xl">Username:</label>
                    <input type="text" id="username" name="username" className="bg-gray-50 border border-gray-300 rounded-md mx-5 px-2 hover:shadow-md focus:shadow-md"></input><br></br>
                    
                    
                    <label for="password" className="font-bold text-2xl">Password:</label>
                    <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 rounded-md mx-5 px-2 hover:shadow-md focus:shadow-md"></input><br></br>                        
                
                    <button className="bg-green-600 text-2xl text-white font-bold py-2 px-5 mt-10 rounded-lg">Login</button>
                </form>
            </div>
            <div className="websiteTitle w-full h-full flex justify-center items-center">
                <p className="text-6xl font-bold group relative w-max">
                    <span className="px-1 relative z-10 group-hover:text-white"> Finance <br></br> Tracker! </span>
                    <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-green-600 z-0 group-hover:h-full"></span>
                </p>
            </div>
        </div>
    )
}

export default LoginPage; 