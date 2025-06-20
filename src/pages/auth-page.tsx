import { useState } from "react";
import { signOut, singIn } from "../services/auth";
import { useAuth } from "../store/auth-context";

export default function AuthPage() {
  const { user } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginButtonClick = async () => {
    await singIn(username, password);
    window.location.reload();
  };

  const handleLogoutButtonClick = async () => {
    await signOut();
    window.location.reload();
  };

  return (
    <div className="flex size-full flex-col justify-between">
      <div>
        <div className="flex items-center px-4 py-2 justify-center h-[72px]">
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Login
          </h2>
        </div>
        {user ? (
          <>
            <div className="flex max-w-[480px] flex-wrap justify-center items-end gap-4 px-4 py-3">
              <p className="text-white text-base font-normal leading-normal px-4 py-1 text-center">
                Logged in as {user.email}
              </p>
            </div>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#94e0b2] text-[#141f18] text-base font-bold leading-normal tracking-[0.015em]"
                onClick={handleLogoutButtonClick}
              >
                <span className="truncate">Logout</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  type="email"
                  placeholder="Username or Email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2a4133] focus:border-none h-14 placeholder:text-[#9bbfaa] p-4 text-base font-normal leading-normal"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2a4133] focus:border-none h-14 placeholder:text-[#9bbfaa] p-4 text-base font-normal leading-normal"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
            </div>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#94e0b2] text-[#141f18] text-base font-bold leading-normal tracking-[0.015em]"
                onClick={handleLoginButtonClick}
              >
                <span className="truncate">Login</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
