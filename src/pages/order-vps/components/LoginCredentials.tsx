import React, { useState } from "react";
import Input from "./ui/Input";

interface Props {
  username: string;
  password: string;
  onPasswordChange: (password: string) => void;
}

const LoginCredentials: React.FC<Props> = ({
  username,
  password,
  onPasswordChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const generatePassword = () => {
    // Generate a random 16-character password
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const password = Array(16)
      .fill("")
      .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
      .join("");
    onPasswordChange(password);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-white mb-6">
        5. Login & password for your server
      </h3>

      <div className="space-y-4">
        {/* Username */}
        <div>
          <label className="block text-gray-400 mb-2">Username</label>
          <Input type="text" value={username} disabled label="Username" />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-400 mb-2">Password</label>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            readOnly
            label="Password"
            rightElement={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-300"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            }
          />
          <button
            onClick={generatePassword}
            className="mt-2 text-blue-400 hover:text-blue-300 text-sm"
          >
            Generate new password
          </button>
        </div>

        <div className="text-sm text-gray-400">
          In order to use SSH Keys you can add them in the Customer Control
          Panel later.
        </div>
      </div>
    </div>
  );
};

export default LoginCredentials;
