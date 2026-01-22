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
  FileText
} from 'lucide-react';
import { IMAGES } from '../constants';

const SidebarItem = ({ to, icon: Icon, label }: { to: string; icon: React.ElementType; label: string }) => {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => 
        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
          isActive 
            ? 'bg-primary/10 text-primary' 
            : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
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

  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-slate-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 flex flex-col bg-[#111418] border-r border-slate-800">
        <div className="p-6 flex flex-col h-full justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex gap-3 items-center">
              <div className="bg-primary rounded-lg p-2 text-white">
                <Landmark className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-base font-bold leading-none tracking-tight">CRECI</h1>
                <p className="text-[#9dabb9] text-xs font-medium leading-none mt-1">INTELIGENTE</p>
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
            <div className="p-3 bg-[#1a2128] rounded-xl flex items-center gap-3">
              <div 
                className="size-10 rounded-full bg-slate-700 bg-cover bg-center" 
                style={{ backgroundImage: `url("${IMAGES.AVATAR}")` }}
              ></div>
              <div className="flex flex-col overflow-hidden">
                <p className="text-sm font-bold truncate text-white">Admin Executivo</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Presidência</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#283039] text-white text-sm font-bold hover:bg-slate-700 transition-all">
              <LogOut className="w-4 h-4" />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <Outlet />
      </main>
    </div>
  );
};