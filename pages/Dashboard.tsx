import React, { useState } from 'react';
import {
  Bell,
  Search,
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  TrendingDown,
  Calendar,
  ArrowRight
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { useTheme } from '../contexts/ThemeContext';

const dataMonthly = [
  { name: 'JAN', value: 2.1 },
  { name: 'FEV', value: 2.8 },
  { name: 'MAR', value: 2.4 },
  { name: 'ABR', value: 3.2 },
  { name: 'MAI', value: 3.5 },
  { name: 'JUN', value: 4.2 },
];

const dataYearly = [
  { name: '2019', value: 28.5 },
  { name: '2020', value: 32.1 },
  { name: '2021', value: 38.7 },
  { name: '2022', value: 42.3 },
  { name: '2023', value: 46.8 },
  { name: '2024', value: 50.4 },
];

const dataRegional = [
  { name: 'Capital', value: 45, color: '#137fec' },
  { name: 'Interior Sul', value: 32, color: '#137fec99' },
  { name: 'Interior Norte', value: 23, color: '#137fec4d' },
];

export const Dashboard: React.FC = () => {
  const [viewMode, setViewMode] = useState<'monthly' | 'yearly'>('monthly');
  const { theme } = useTheme();

  const chartData = viewMode === 'monthly' ? dataMonthly : dataYearly;

  return (
    <div className={`flex flex-col h-full overflow-y-auto ${theme === 'dark' ? 'bg-background-dark' : 'bg-background-light'
      }`}>
      {/* Header */}
      <header className={`sticky top-0 z-10 flex items-center justify-between backdrop-blur-md border-b px-8 py-4 ${theme === 'dark'
          ? 'bg-background-dark/95 border-slate-800'
          : 'bg-background-light/95 border-slate-200'
        }`}>
        <div className="flex flex-col">
          <h2 className={`text-xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>Painel Executivo Estratégico</h2>
          <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Dados consolidados do conselho regional</p>
        </div>
        <div className="flex items-center gap-4">
          <div className={`flex rounded-lg p-1 ${theme === 'dark' ? 'bg-[#283039]' : 'bg-slate-200'
            }`}>
            <button
              onClick={() => setViewMode('monthly')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${viewMode === 'monthly'
                ? 'bg-slate-700 shadow-sm text-white'
                : 'text-slate-500 hover:text-slate-300'
                }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setViewMode('yearly')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${viewMode === 'yearly'
                ? 'bg-slate-700 shadow-sm text-white'
                : 'text-slate-500 hover:text-slate-300'
                }`}
            >
              Anual
            </button>
          </div>
          <div className="h-8 w-px bg-slate-800 mx-2"></div>
          <button className="p-2 text-slate-500 hover:bg-slate-800 rounded-lg">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-800 rounded-lg">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="p-8 flex flex-col gap-8 max-w-[1400px] w-full mx-auto">
        {/* Semáforo Estratégico */}
        <section className="bg-[#1a2128] rounded-xl border border-slate-800 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-lg font-bold">Semáforo Estratégico</h3>
              <p className="text-sm text-slate-400">Status Geral da Operação: <span className="text-emerald-500 font-bold">Estável</span></p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-500/10 text-red-500 group-hover:bg-red-500 transition-colors group-hover:text-white">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-400 group-hover:text-red-500">Crítico</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 transition-colors group-hover:text-white">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-400 group-hover:text-amber-500">Atenção</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-500">Estável</span>
              </div>
            </div>
          </div>
        </section>

        {/* KPI Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Default Rate */}
          <div className="bg-[#1a2128] p-5 rounded-xl border border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm font-medium text-slate-400 leading-tight">Taxa de<br />Inadimplência</p>
              <span className="text-emerald-500 text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                <TrendingDown className="w-3 h-3" /> 2.4%
              </span>
            </div>
            <div className="flex items-end justify-between">
              <h4 className="text-2xl font-bold text-white">12.8%</h4>
              <div className="h-10 w-24 flex items-end gap-1">
                {[20, 40, 60, 40, 25, 20].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className={`w-1/6 rounded-t-sm ${i > 2 ? 'bg-primary' : 'bg-primary/20'}`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Satisfaction Index */}
          <div className="bg-[#1a2128] p-5 rounded-xl border border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm font-medium text-slate-400 leading-tight">ISC (Índice de<br />Satisfação)</p>
              <div className="flex text-amber-400 gap-0.5">
                {[1, 2, 3, 4].map(i => <span key={i} className="text-xs">★</span>)}
                <span className="text-slate-600 text-xs">★</span>
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <h4 className="text-2xl font-bold text-white">8.4</h4>
              <span className="text-sm text-slate-500">/ 10</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 font-medium">Meta: 8.5 (+0.2 vs. mês ant.)</p>
          </div>

          {/* Revenue vs Forecast */}
          <div className="bg-[#1a2128] p-5 rounded-xl border border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm font-medium text-slate-400 leading-tight">Receita vs.<br />Previsto</p>
              <span className="text-primary text-[10px] font-bold uppercase tracking-wider">Atingido 94%</span>
            </div>
            <h4 className="text-2xl font-bold text-white">R$ 4.2M</h4>
            <div className="w-full bg-[#283039] h-2 rounded-full mt-3 overflow-hidden">
              <div className="bg-primary h-full w-[94%]"></div>
            </div>
          </div>

          {/* Regulatory Deadlines */}
          <div className="bg-[#1a2128] p-5 rounded-xl border border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm font-medium text-slate-400 leading-tight">Prazos<br />Regulatórios</p>
              <Calendar className="text-slate-400 w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-bold text-slate-300">Auditoria TCU</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-white">12 Dias</span>
                <span className="text-[10px] bg-red-500/10 text-red-500 px-2 py-0.5 rounded font-bold uppercase">Urgente</span>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Row */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bar Chart: Financial Performance */}
          <div className="lg:col-span-2 bg-[#1a2128] rounded-xl border border-slate-800 p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-white font-bold">
                  Desempenho Financeiro {viewMode === 'monthly' ? 'Mensal' : 'Anual'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Comparativo de receita bruta (em milhões)
                </p>
              </div>
              <button className="flex items-center gap-1 text-xs text-primary font-bold hover:underline">
                Ver Detalhes <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} />
                  <Tooltip
                    cursor={{ fill: '#283039' }}
                    contentStyle={{ backgroundColor: '#101922', borderColor: '#283039', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? '#137fec' : 'rgba(19, 127, 236, 0.2)'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Donut Chart: Regional Distribution */}
          <div className="bg-[#1a2128] rounded-xl border border-slate-800 p-6 flex flex-col">
            <h3 className="text-white font-bold mb-1">Distribuição Regional</h3>
            <p className="text-xs text-slate-500 mb-4">Corretores ativos por região</p>

            <div className="flex-1 min-h-[160px] relative flex justify-center items-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
                <span className="text-2xl font-extrabold text-white">54.2k</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">Total</span>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={dataRegional}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {dataRegional.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              {dataRegional.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs font-medium text-slate-300">{item.name}</span>
                  </div>
                  <span className="text-xs font-bold text-white">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Table */}
        <section className="bg-[#1a2128] rounded-xl border border-slate-800 overflow-hidden shadow-sm">
          <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center">
            <h3 className="text-white font-bold">Resumo de Governança</h3>
            <button className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-colors">Exportar PDF</button>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#283039]/50 text-slate-500 font-medium">
                  <th className="px-6 py-3 font-semibold text-xs uppercase tracking-wider">Item Estratégico</th>
                  <th className="px-6 py-3 font-semibold text-xs uppercase tracking-wider">Responsável</th>
                  <th className="px-6 py-3 font-semibold text-xs uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 font-semibold text-xs uppercase tracking-wider text-right">Evolução</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">Digitalização de Processos</td>
                  <td className="px-6 py-4 text-slate-400">Dir. Operações</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase">Concluído</span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-emerald-500">100%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">Censo Profissional 2024</td>
                  <td className="px-6 py-4 text-slate-400">Dir. Regional</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase">Em Andamento</span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-white">68%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">Renovação de Infraestrutura</td>
                  <td className="px-6 py-4 text-slate-400">Tecnologia</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase">Planejamento</span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-white">15%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="p-8 mt-auto border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">© 2024 CRECI INTELIGENTE - Sistema de Governança Estratégica</p>
        </footer>
      </div>
    </div>
  );
};