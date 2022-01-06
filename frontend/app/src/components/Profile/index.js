import {useContext} from "react";
import {NavLink} from "react-router-dom";
import AuthContext from "../../context/auth-context";

export default function Profile() {
    const context = useContext(AuthContext)

    return (
        <div className="min-h-full flex flex-col justify-center">
            <div className="lg:w-full sm:mx-auto sm:w-full sm:max-w-5xl">
                <div className=" py-8 border border-gray-300 sm:rounded-lg">
                    <form className="space-y-8 divide-y divide-gray-200">
                        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                            <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                                <div className="flex flex-col justify-center items-center ">
                                    <h3 className="text-3xl leading-6 font-medium text-gray-900 dark:text-white">Personal
                                        Info</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500  dark:text-white">Basic info like
                                        your name and
                                        photo.</p>
                                </div>
                                <div className="space-y-6 sm:space-y-5">
                                    <div
                                        className="flex justify-between px-10 items-center content-center  sm:border-t sm:border-gray-200 sm:pt-5">

                                        <div className="flex flex-col justify-start content-start items-start w-1/2">
                                            <p className="dark:text-white  text-xl text-gray-700 font-medium">
                                                Profile
                                            </p>

                                            <p className="dark:text-white self-start text-sm text-align-start text-gray-700 sm:mt-px">
                                                Some info may be visible to other people
                                            </p>
                                        </div>

                                        <NavLink to="/profile/edit"
                                           className="self-end py-2 button-color px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white "
                                        >
                                            Edit
                                        </NavLink>
                                    </div>

                                    <div
                                        className="flex justify-between lg:justify-start px-10 items-center content-center  sm:border-t sm:border-gray-200 sm:pt-5">
                                        <div className="w-1/3">
                                            <p
                                                className="dark:text-white uppercase float-left block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                Photo
                                            </p>
                                        </div>
                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <img className="h-12 w-auto mr-2 rounded-lg"
                                                 src={context?.user?.photo ? context?.user?.photo : ''}
                                                 alt="profile"/>
                                        </div>
                                    </div>

                                    <div
                                        className="flex justify-between lg:justify-start px-10 items-center content-center  sm:border-t sm:border-gray-200 sm:pt-5">
                                        <div className="w-1/3">
                                            <p
                                                className="block dark:text-white float-left text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                Name
                                            </p>
                                        </div>

                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <p className="dark:text-white font-medium float-left">{context?.user?.name }</p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex justify-between lg:justify-start px-10 items-center content-center  sm:border-t sm:border-gray-200 sm:pt-5">
                                        <div className="w-1/3">
                                            <p
                                                className="uppercase dark:text-white float-left block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                Bio
                                            </p>
                                        </div>
                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <p className="font-medium dark:text-white float-left">{context?.user?.bio}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="flex justify-between lg:justify-start px-10 items-center content-center  sm:border-t sm:border-gray-200 sm:pt-5">
                                        <div className="w-1/3">
                                            <p
                                                className="dark:text-white uppercase float-left  block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                Phone
                                            </p>
                                        </div>

                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <p className="dark:text-white font-medium float-left">{context?.user?.phone}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="flex justify-between lg:justify-start px-10 items-center content-center  sm:border-t sm:border-gray-200 sm:pt-5">
                                        <div className="w-1/3">
                                            <p className="dark:text-white  float-left uppercase block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                Email
                                            </p>
                                        </div>

                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <p className="dark:text-white font-medium float-left">{context?.user?.email}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="flex justify-between lg:justify-start px-10 items-center content-center  sm:border-t sm:border-gray-200 sm:pt-5">
                                        <div className="w-1/3">
                                            <p
                                                className="dark:text-white float-left uppercase block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                Password
                                            </p>
                                        </div>

                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <p className="dark:text-white font-medium float-left">***************</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
