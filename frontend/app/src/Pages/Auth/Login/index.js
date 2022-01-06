export default function Login() {
    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="  mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className=" py-8 px-4 border border-gray-300 sm:rounded-lg sm:px-10">

                        <p  className="text-base dark:text-white font-medium my-4 text-align-start">devchallenges </p>
                        <p  className="text-lg dark:text-white font-medium mt-2 text-align-start">Join thousands of learners from around the world </p>

                        <p className="text-base dark:text-white mt-3 mb-6 text-align-start">Master web development by making real-life projects. There are multiple paths for you to choose</p>

                        <form className="space-y-6" action="#" method="POST">
                            <div>

                                <div className="relative mt-1">
                                    <div
                                        className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <span className="material-icons">email</span>
                                    </div>
                                    <input type="text" id="email-adress-icon"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700
                                           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Email"/>
                                </div>
                            </div>

                            <div>
                                <div className="relative mt-1">
                                    <div
                                        className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <span className="material-icons">lock</span>
                                    </div>
                                    <input type="password"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700
                                           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Password"/>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white button-color focus:outline-none focus:ring-2 focus:ring-offset-2 "
                                >
                                    Start Coding now
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">

                            <div className="relative">

                                <div className="relative flex justify-center text-sm">
                                    <span
                                        className="px-2  text-gray-500">or continue with these social profile</span>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-center">
                                <a  className="m-2 border border-gray-400 p-3 full-circle" href="#"><span className="material-icons flex flex-col justify-center">lock</span></a>

                                <a className="m-2 border border-gray-400 p-3 full-circle" href="#"><span className="material-icons flex flex-col justify-center">lock</span></a>

                                <a className="m-2 border border-gray-400 p-3 full-circle" href="#"><span className="material-icons flex flex-col justify-center">lock</span></a>

                                <a className="m-2 border border-gray-400 p-3 full-circle" href="#"><span className="material-icons flex flex-col justify-center">lock</span></a>


                            </div>
                            <div className="relative mt-6">

                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 text-gray-500">Already a member? </span>
                                    <span><a href="#" className="font-normal text-indigo-600 hover:text-indigo-500">
                                        Login
                                    </a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}