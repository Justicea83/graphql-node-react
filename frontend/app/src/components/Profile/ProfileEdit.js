export default function ProfileEdit(){
    return (
        <>
            <div className="min-h-full flex flex-col justify-center  sm:px-6 lg:px-8">
                <div className="lg:w-full sm:mx-auto sm:w-full sm:max-w-5xl">
                    <div className=" py-8 px-4 border border-gray-300 sm:rounded-lg sm:px-10">

                        <p  className="text-2xl dark:text-white my-4 text-align-start">Change Info </p>

                        <p className="text-sm dark:text-white mt-3 mb-6 text-align-start">
                            Changes will be reflected to every services
                        </p>

                        <div className="flex justify-start align-middle mb-5">
                            <div>
                                <img className="h-12 w-auto mr-2 rounded-lg"
                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt="profile"/>
                            </div>
                            <p className="text-sm uppercase self-center">Change Photo</p>
                        </div>

                        <form className="space-y-6" action="#" method="POST">
                            {/*name*/}
                            <div className="flex flex-col justify-start">
                                <label htmlFor="name" className="  mb-1 self-start text-sm text-gray-700">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        placeholder="Enter your name..."
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/*bio*/}
                            <div  className="flex flex-col justify-start">
                                <label htmlFor="bio" className="block  mb-1 self-start text-sm text-gray-700">
                                    Bio
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="bio"
                                        placeholder="Enter your bio..."
                                        rows={4}
                                        name="bio"
                                        autoComplete="bio"
                                        required
                                        className="appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/*Phone*/}
                            <div  className="flex flex-col justify-start">
                                <label htmlFor="phone" className="block float-left mb-1 self-start text-sm text-gray-700">
                                    Phone
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="phone"
                                        name="name"
                                        placeholder="Enter your phone..."
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/*email*/}
                            <div  className="flex flex-col justify-start">
                                <label htmlFor="phone" className="block float-left mb-1 self-start text-sm text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email..."
                                        type="text"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/*password*/}
                            <div  className="flex flex-col justify-start">
                                <label htmlFor="phone" className=" mb-1 self-start text-sm text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password..."
                                        type="password"
                                        autoComplete="password"
                                        required
                                        className="appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </form>

                        <div className="pt-5">
                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}