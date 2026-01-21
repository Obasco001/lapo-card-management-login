
import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import Logo from './Logo';

interface LoginFormProps {
  onLoginSuccess?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { username, password });
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <div className="w-full">
      <div className="mb-12">
        <Logo />
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-3xl font-bold text-slate-800">Hi, Welcome Back!</h1>
          <div className="flex -space-x-2">
             <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-500 flex items-center justify-center text-xs font-bold text-white">B</div>
             <img src="https://picsum.photos/seed/user1/32/32" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="User" />
          </div>
        </div>
        <p className="text-slate-500 text-sm">Please sign in using your credentials.</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#0051a8] transition-colors">
              <User size={18} />
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0051a8]/20 focus:border-[#0051a8] transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#0051a8] transition-colors">
              <Lock size={18} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="block w-full pl-10 pr-12 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0051a8]/20 focus:border-[#0051a8] transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <div className="flex justify-end mt-2">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-[#0051a8] transition-colors">
              Forgot password?
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-[#0051a8] focus:ring-[#0051a8] border-slate-300 rounded cursor-pointer"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 cursor-pointer">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-[#0051a8] hover:bg-[#004185] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0051a8] transition-all transform active:scale-[0.98]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
