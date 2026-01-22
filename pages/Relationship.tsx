import React from 'react';
import { 
    Search, 
    Bell, 
    Calendar, 
    Download, 
    ChevronDown, 
    Globe, 
    Smartphone, 
    MoreVertical 
} from 'lucide-react';

export const Relationship: React.FC = () => {
  return (
    <div className="flex flex-col h-full overflow-y-auto bg-background-dark">
        {/* Top Nav */}
        <header className="flex items-center justify-between border-b border-[#283039] px-10 py-4 sticky top-0 bg-background-dark/80 backdrop-blur-md z-10">
            <div className="flex items-center gap-8">
                <h2 className="text-white text-lg font-bold tracking-tight">Módulo Relacionamento</h2>
                <div className="flex items-center gap-6">
                    <a className="text-primary text-sm font-medium border-b-2 border-primary pb-1" href="#">Visão Geral</a>
                    <a className="text-[#9dabb9] text-sm font-medium hover:text-white transition-colors" href="#">Satisfação</a>
                    <a className="text-[#9dabb9] text-sm font-medium hover:text-white transition-colors" href="#">Canais Digitais</a>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9dabb9] text-lg w-5 h-5" />
                    <input className="w-64 h-10 bg-[#1c2632] border-none rounded-lg pl-10 pr-4 text-sm text-white placeholder:text-[#9dabb9] focus:ring-1 focus:ring-primary outline-none" placeholder="Buscar corretor ou ticket..."/>
                </div>
                <button className="size-10 flex items-center justify-center rounded-lg bg-[#1c2632] text-white hover:bg-[#283039] transition-colors">
                    <Bell className="w-5 h-5" />
                </button>
            </div>
        </header>

        <div className="p-10 max-w-[1400px] mx-auto w-full">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-4">
                <a className="text-[#9dabb9] text-sm font-medium hover:text-white" href="#">Governança</a>
                <span className="text-[#283039] text-sm">/</span>
                <span className="text-white text-sm font-medium">Relacionamento</span>
            </div>

            {/* Page Heading */}
            <div className="flex flex-wrap justify-between items-end gap-6 mb-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-black tracking-tight text-white">Relacionamento com Corretores</h1>
                    <p className="text-[#9dabb9] text-lg">Métricas de satisfação e engajamento da categoria.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#1c2632] text-white text-sm font-bold rounded-lg border border-[#283039] hover:bg-[#283039]">
                        <Calendar className="w-5 h-5" />
                        <span>Últimos 30 dias</span>
                        <ChevronDown className="w-4 h-4" />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-transform active:scale-95">
                        <Download className="w-5 h-5" />
                        <span>Exportar Relatório</span>
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
                <button className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-primary/20 text-primary border border-primary/30 px-5">
                    <span className="text-sm font-semibold">Todas as Delegacias</span>
                    <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#1c2632] text-[#9dabb9] border border-[#283039] px-5 hover:text-white transition-colors">
                    <span className="text-sm font-medium">Pessoa Física</span>
                    <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#1c2632] text-[#9dabb9] border border-[#283039] px-5 hover:text-white transition-colors">
                    <span className="text-sm font-medium">Pessoa Jurídica</span>
                    <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#1c2632] text-[#9dabb9] border border-[#283039] px-5 hover:text-white transition-colors">
                    <span className="text-sm font-medium">Status: Ativo</span>
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-12 gap-6">
                {/* Main KPI: ISC Gauge */}
                <div className="col-span-12 lg:col-span-4 bg-[#1c2632] rounded-xl border border-[#283039] p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-cyan-400"></div>
                    <h3 className="text-[#9dabb9] text-sm font-bold uppercase tracking-widest mb-8">Índice de Satisfação (ISC)</h3>
                    <div className="relative w-[200px] h-[100px] overflow-hidden mb-6">
                         {/* CSS Gauge Implementation */}
                        <div className="w-[200px] h-[200px] rounded-full border-[20px] border-[#283039]"></div>
                        <div className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full border-[20px] border-transparent border-t-primary border-r-primary" style={{transform: 'rotate(-45deg)'}}></div>
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                            <span className="text-5xl font-black text-white">82%</span>
                            <span className="text-primary text-xs font-bold">EM ALTA (+2%)</span>
                        </div>
                    </div>
                    <p className="text-[#9dabb9] text-sm text-center px-4">Meta global estabelecida: <span className="text-white font-bold">85%</span></p>
                    <div className="mt-6 w-full h-1.5 bg-[#283039] rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[82%]"></div>
                    </div>
                </div>

                {/* Word Cloud: Dissatisfaction */}
                <div className="col-span-12 lg:col-span-8 bg-[#1c2632] rounded-xl border border-[#283039] p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-[#9dabb9] text-sm font-bold uppercase tracking-widest">Principais Motivos de Insatisfação</h3>
                        <span className="text-xs text-red-400 font-bold bg-red-400/10 px-2 py-1 rounded">ALERTAS ATIVOS</span>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center items-center h-48 content-center">
                        <span className="text-4xl font-black text-white/90 hover:text-primary transition-colors cursor-pointer">Demora Cadastro</span>
                        <span className="text-2xl font-bold text-[#9dabb9] hover:text-white transition-colors cursor-pointer">Anuidade</span>
                        <span className="text-5xl font-black text-primary/80 hover:text-primary transition-colors cursor-pointer">SLA Jurídico</span>
                        <span className="text-xl font-medium text-[#9dabb9]/60 hover:text-white transition-colors cursor-pointer">Site Lento</span>
                        <span className="text-3xl font-bold text-white/70 hover:text-white transition-colors cursor-pointer">App Mobile</span>
                        <span className="text-2xl font-semibold text-primary/40 hover:text-white transition-colors cursor-pointer">Fiscalização</span>
                        <span className="text-lg font-normal text-[#9dabb9]/40 hover:text-white transition-colors cursor-pointer">Atendimento Presencial</span>
                        <span className="text-4xl font-black text-white/80 hover:text-white transition-colors cursor-pointer">Dúvidas Técnicas</span>
                    </div>
                </div>

                {/* SLA Bar Chart */}
                <div className="col-span-12 lg:col-span-7 bg-[#1c2632] rounded-xl border border-[#283039] p-8">
                    <h3 className="text-[#9dabb9] text-sm font-bold uppercase tracking-widest mb-8">Tempo Médio de Resposta (SLA) por Setor</h3>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-white font-medium">Atendimento Geral</span>
                                <span className="text-[#9dabb9]">4h 20m</span>
                            </div>
                            <div className="w-full h-3 bg-[#283039] rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[20%]"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-white font-medium">Setor de Cadastro</span>
                                <span className="text-[#9dabb9]">48h 15m</span>
                            </div>
                            <div className="w-full h-3 bg-[#283039] rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[65%]"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-white font-medium">Departamento Jurídico</span>
                                <span className="text-red-400 font-bold">72h+ Alerta</span>
                            </div>
                            <div className="w-full h-3 bg-[#283039] rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 w-[95%]"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-white font-medium">Fiscalização Administrativa</span>
                                <span className="text-[#9dabb9]">24h 05m</span>
                            </div>
                            <div className="w-full h-3 bg-[#283039] rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[40%]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Digital Engagement */}
                <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
                    {/* Portal Card */}
                    <div className="bg-[#1c2632] rounded-xl border border-[#283039] p-6 flex items-center justify-between">
                        <div className="flex gap-4 items-center">
                            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Globe className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Acessos Portal</h4>
                                <p className="text-[#9dabb9] text-xs">Média diária de corretores</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-3xl font-black text-white">12.4k</p>
                            <p className="text-green-500 text-xs font-bold">+15.2% ↑</p>
                        </div>
                    </div>
                    {/* App Card */}
                    <div className="bg-[#1c2632] rounded-xl border border-[#283039] p-6 flex items-center justify-between">
                        <div className="flex gap-4 items-center">
                            <div className="size-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                                <Smartphone className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Uso do App CRECI</h4>
                                <p className="text-[#9dabb9] text-xs">Usuários ativos (MAU)</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-3xl font-black text-white">45.8k</p>
                            <p className="text-green-500 text-xs font-bold">+8.4% ↑</p>
                        </div>
                    </div>
                    {/* Growth Chart Mockup */}
                    <div className="flex-1 bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-primary/20 p-6 flex flex-col justify-center">
                        <div className="flex justify-between items-end h-24 gap-2">
                            <div className="flex-1 bg-primary/30 rounded-t-lg h-[40%]"></div>
                            <div className="flex-1 bg-primary/30 rounded-t-lg h-[60%]"></div>
                            <div className="flex-1 bg-primary/30 rounded-t-lg h-[55%]"></div>
                            <div className="flex-1 bg-primary/30 rounded-t-lg h-[80%]"></div>
                            <div className="flex-1 bg-primary/30 rounded-t-lg h-[75%]"></div>
                            <div className="flex-1 bg-primary rounded-t-lg h-[95%]"></div>
                        </div>
                        <p className="text-[#9dabb9] text-xs text-center mt-4">Crescimento de Engajamento Digital (6 meses)</p>
                    </div>
                </div>
            </div>

            {/* Bottom Summary Table/List */}
            <div className="mt-8 bg-[#1c2632] rounded-xl border border-[#283039] overflow-hidden">
                <div className="px-8 py-6 border-b border-[#283039] flex justify-between items-center">
                    <h3 className="text-white font-bold">Últimos Feedbacks Críticos</h3>
                    <button className="text-primary text-sm font-bold hover:underline">Ver todos</button>
                </div>
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[#9dabb9] text-xs uppercase tracking-widest border-b border-[#283039]">
                            <th className="px-8 py-4 font-semibold">Corretor</th>
                            <th className="px-8 py-4 font-semibold">Categoria</th>
                            <th className="px-8 py-4 font-semibold">Data</th>
                            <th className="px-8 py-4 font-semibold">Status</th>
                            <th className="px-8 py-4 font-semibold text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#283039]">
                        <tr className="hover:bg-[#283039]/30 transition-colors">
                            <td className="px-8 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">RM</div>
                                    <span className="text-sm font-medium text-white">Ricardo Mendes (CRECI 12345)</span>
                                </div>
                            </td>
                            <td className="px-8 py-4 text-sm text-[#9dabb9]">Atraso Documentação</td>
                            <td className="px-8 py-4 text-sm text-[#9dabb9]">Há 2 horas</td>
                            <td className="px-8 py-4">
                                <span className="px-2 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold">URGENTE</span>
                            </td>
                            <td className="px-8 py-4 text-right">
                                <button className="text-[#9dabb9] hover:text-white"><MoreVertical className="w-4 h-4" /></button>
                            </td>
                        </tr>
                        <tr className="hover:bg-[#283039]/30 transition-colors">
                            <td className="px-8 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500 text-xs font-bold">AS</div>
                                    <span className="text-sm font-medium text-white">Ana Silva (CRECI 98765)</span>
                                </div>
                            </td>
                            <td className="px-8 py-4 text-sm text-[#9dabb9]">Erro App Mobile</td>
                            <td className="px-8 py-4 text-sm text-[#9dabb9]">Há 5 horas</td>
                            <td className="px-8 py-4">
                                <span className="px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-[10px] font-bold">EM ANÁLISE</span>
                            </td>
                            <td className="px-8 py-4 text-right">
                                <button className="text-[#9dabb9] hover:text-white"><MoreVertical className="w-4 h-4" /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};