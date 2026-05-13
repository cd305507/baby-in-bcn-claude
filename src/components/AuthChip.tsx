import React, { useState } from 'react';
import { LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../lib/auth';

export const AuthChip: React.FC = () => {
  const { user, loading, isConfigured, signIn, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  if (loading) return null;

  if (!isConfigured) {
    return (
      <span
        title="Copy .env.example to .env.local and fill in Firebase config to enable sign-in."
        className="hidden sm:inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-white/30 bg-white/5 px-2.5 py-1 rounded-full border border-white/10"
      >
        ⚙ Setup
      </span>
    );
  }

  if (!user) {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation();
          signIn();
        }}
        className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-med-dark bg-med-yellow px-3 py-1.5 rounded-full shadow-sm hover:scale-105 active:scale-95 transition-transform"
      >
        <LogIn className="w-3 h-3" />
        Sign in
      </button>
    );
  }

  const name = user.displayName || user.email?.split('@')[0] || 'User';
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen((v) => !v);
        }}
        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md px-1 pr-3 py-1 rounded-full transition-colors"
      >
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt={name}
            referrerPolicy="no-referrer"
            className="w-6 h-6 rounded-full object-cover border border-white/30"
          />
        ) : (
          <span className="w-6 h-6 rounded-full bg-med-yellow text-med-dark font-black text-[11px] flex items-center justify-center">
            {initial}
          </span>
        )}
        <span className="text-[10px] font-bold text-white truncate max-w-[7ch] hidden xs:inline">
          {name.split(' ')[0]}
        </span>
      </button>

      {menuOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 top-full mt-2 w-44 bg-white text-med-dark rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
        >
          <div className="px-3 py-2.5 border-b border-gray-100">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Signed in as</p>
            <p className="text-xs font-bold text-med-dark mt-1 truncate">{name}</p>
            {user.email && (
              <p className="text-[10px] text-gray-400 truncate mt-0.5">{user.email}</p>
            )}
          </div>
          <button
            onClick={async () => {
              setMenuOpen(false);
              await signOut();
            }}
            className="w-full px-3 py-2.5 text-left text-xs font-bold text-med-coral hover:bg-med-coral/5 transition-colors flex items-center gap-2"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};
