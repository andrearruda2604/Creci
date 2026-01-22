import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  DollarSign,
  Gavel,
  Settings,
  LogOut,
  Landmark,
  FileText,
  Sun,
  Moon
} from 'lucide-react';
import { IMAGES } from '../constants';
import { useTheme } from '../contexts/ThemeContext';

const SidebarItem = ({ to, icon: Icon, label }: { to: string; icon: React.ElementType; label: string }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isActive
          ? 'bg-primary/10 text-primary'
          : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200 dark:text-slate-400 dark:hover:bg-slate-800'
        }`
      }
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </NavLink>
  );
};

export const Layout: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex h-screen overflow-hidden font-sans ${theme === 'dark'
        ? 'bg-background-dark text-slate-100'
        : 'bg-background-light text-slate-900'
      }`}>
      {/* Sidebar */}
      <aside className={`w-64 flex-shrink-0 flex flex-col border-r ${theme === 'dark'
          ? 'bg-[#111418] border-slate-800'
          : 'bg-white border-slate-200'
        }`}>
        <div className="p-6 flex flex-col h-full justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex gap-3 items-center">
              <div className="bg-primary rounded-lg p-2 text-white">
                <Landmark className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <h1 className={`text-base font-bold leading-none tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>CRECI</h1>
                <p className={`text-xs font-medium leading-none mt-1 ${theme === 'dark' ? 'text-[#9dabb9]' : 'text-slate-500'
                  }`}>INTELIGENTE</p>
              </div>
            </div>

            <nav className="flex flex-col gap-1">
              <SidebarItem to="/" icon={LayoutDashboard} label="Visão Geral" />
              <SidebarItem to="/reports" icon={FileText} label="Relatórios" />
              <SidebarItem to="/relationship" icon={Users} label="Relacionamento" />
              <SidebarItem to="/financial" icon={DollarSign} label="Financeiro" />
              <SidebarItem to="/governance" icon={Gavel} label="Governança" />
              <SidebarItem to="/settings" icon={Settings} label="Configurações" />
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 text-sm font-bold transition-all ${theme === 'dark'
                  ? 'bg-amber-500/10 text-amber-400 hover:bg-amber-500/20'
                  : 'bg-slate-800/10 text-slate-700 hover:bg-slate-800/20'
                }`}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4" />
                  <span>Modo Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4" />
                  <span>Modo Escuro</span>
                </>
              )}
            </button>

            {/* User Profile */}
            <div className={`p-3 rounded-xl flex items-center gap-3 ${theme === 'dark' ? 'bg-[#1a2128]' : 'bg-slate-100'
              }`}>
              <div
                className="size-10 rounded-full bg-slate-700 bg-cover bg-center"
                style={{ backgroundImage: `url("${IMAGES.AVATAR}")` }}
              ></div>
              <div className="flex flex-col overflow-hidden">
                <p className={`text-sm font-bold truncate ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>Admin Executivo</p>
                <p className={`text-[10px] uppercase tracking-wider ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'
                  }`}>Presidência</p>
              </div>
            </div>

            <button className={`w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 text-sm font-bold transition-all ${theme === 'dark'
                ? 'bg-[#283039] text-white hover:bg-slate-700'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}>
              <LogOut className="w-4 h-4" />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={`flex-1 flex flex-col overflow-hidden relative ${theme === 'dark' ? 'bg-background-dark' : 'bg-background-light'
        }`}>
        <Outlet />
      </main>
    </div>
  );
};