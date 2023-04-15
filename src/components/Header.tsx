import { signIn,signOut,useSession } from "next-auth/react";

export const Header = () => {
    const {data:sessionData} = useSession();
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1 pl-5 text-3xl fot-bold">
                {sessionData?.user?.name ? `Notes for ${sessionData?.user?.name}` : ``}
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown-end dropdown">
                    {sessionData?.user ? (
                        <label
                        tabIndex={0}
                        className="btn-ghost btn-circlr avatar btn"
                        onClick={() => void signOut()}
                        >
                            <div>
                                <img 
                                src={sessionData?.user?.image ?? ""} 
                                alt={sessionData?.user?.image ?? ""} 
                                />
                            </div>
                        </label>
                    ):(
                        <button
                        className="btn-ghost rounded-btn btn"
                        onClick={() => void signIn()}
                        >
                        Sign In
                        </button>
                    )
                    }
                </div>
            </div>
        </div>
    )
}