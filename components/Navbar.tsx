import Link from "next/link";

export const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link href="/">About US</Link>
                            </li>
                            <li>
                                <Link href="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link href="/cart">Cart</Link>
                            </li>
                        </ul>
                    </div>
                    <Link
                        href="/"
                        className="btn btn-ghost normal-case text-xl"
                    >
                        Mani Events
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-3">
                        <li className="mx-14">
                            <Link href="/">About Us</Link>
                        </li>
                        <li className="mx-14">
                            <Link href="/gallery">Gallery</Link>
                        </li>
                        <li className="mx-14">
                            <Link href="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
