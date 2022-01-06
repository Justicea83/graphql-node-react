import {Disclosure, Menu, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";


const user = {
    name: 'Xanther Neal',
    email: 'tom@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
    {name: 'My Profile', href: '#', icon: 'account_circle'},
    {name: 'Group Chat', href: '#', icon: 'groups'},
    {name: 'Logout', href: '#', icon: 'logout'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {

    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <Disclosure as="nav" className="border-gray-200">
                {({open}) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="flex">
                                    <div className="flex-shrink-0 flex items-center">
                                        <img
                                            className="block lg:hidden h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                                            alt="Workflow"
                                        />
                                    </div>

                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button
                                                className="max-w-xs dark:bg-black bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <span className="sr-only">Open user menu</span>
                                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt=""/>
                                                <p className="text-sm dark:text-white font-bold mx-2">{user.name}</p>
                                                <span className="material-icons  dark:text-white ">{isActive ? 'arrow_drop_up' : 'arrow_drop_down'}</span>
                                            </Menu.Button>
                                        </div>
                                        <Transition beforeEnter={() => setIsActive(true)} afterLeave={() => setIsActive(false)}
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items
                                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {userNavigation.map((item) => (
                                                    <Menu.Item key={item.name}>
                                                        {({active}) => (
                                                            <div className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                item.name.toLowerCase() !== "logout" ? 'header-icons' : 'logout',
                                                                'cursor-pointer flex justify-start align-middle block px-4 py-2 text-sm text-gray-700'
                                                            )}>
                                                                <span
                                                                    className={classNames(
                                                                        item.name.toLowerCase() === "logout" ? 'logout' : 'header-icons',
                                                                        'material-icons mr-2 text-base')}>
                                                                    {item.icon}
                                                                </span>
                                                                <a
                                                                    href={item.href}
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            </div>

                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                                <div className="-mr-2 flex items-center sm:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button
                                        className="bg-white dark:bg-black  inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
                                        <span className="sr-only">Open main menu</span>
                                        {/*here*/}
                                        <img
                                            className="block lg:hidden h-8 w-auto full-circle"
                                            src={user.imageUrl}
                                            alt="Workflow"
                                        />
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        {/*hidden on small screens*/}
                        <Disclosure.Panel className="sm:hidden">
                            <div className="pt-4 pb-3 border-t border-gray-200">
                                <div className="mt-3 space-y-1">
                                    {userNavigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 flex justify-start"
                                        >
                                           <span
                                               className={classNames(
                                                   item.name.toLowerCase() === "logout" ? 'logout' : 'header-icons',
                                                   'material-icons mr-2 text-base')}>
                                                                    {item.icon}
                                                                </span>  <span>{item.name}</span>
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}