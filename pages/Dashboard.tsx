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

  // Theme-based styles
  const isDark = theme === 'dark';
  const cardBg = isDark ? 'bg-[#1a2128]' : 'bg-white';
  const cardBorder = isDark ? 'border-slate-800' : 'border-slate-200';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textSecondary = isDark ? 'text-slate-400' : 'text-slate-600';
  const textMuted = isDark ? 'text-slate-500' : 'text-slate-500';
  const dividerBg = isDark ? 'bg-slate-800' : 'bg-slate-200';
  const buttonHoverBg = isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-200';
  const toggleBg = isDark ? 'bg-[#283039]' : 'bg-slate-200';
  const toggleActiveBg = isDark ? 'bg-slate-700' : 'bg-primary';
  const progressBg = isDark ? 'bg-[#283039]' : 'bg-slate-200';
  const tableHeaderBg = isDark ? 'bg-[#283039]/50' : 'bg-slate-100';

  return (
    <div className={`flex flex-col h-full overflow-y-auto ${isDark ? 'bg-background-dark' : 'bg-background-light'
      }`}>
      {/* Header */}
      <header className={`sticky top-0 z-10 flex items-center justify-between backdrop-blur-md border-b px-8 py-4 ${isDark
          ? 'bg-background-dark/95 border-slate-800'
          : 'bg-background-light/95 border-slate-200'
        }`}>
        <div className="flex flex-col">
          <h2 className={`text-xl font-bold tracking-tight ${textPrimary}`}>
            Painel Executivo Estratégico
          </h2>
          <p className={`text-xs ${textSecondary}`}>Dados consolidados do conselho regional</p>
        </div>
        <div className="flex items-center gap-4">
          <div className={`flex rounded-lg p-1 ${toggleBg}`}>
            <button
              onClick={() => setViewMode('monthly')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${viewMode === 'monthly'
                  ? `${toggleActiveBg} shadow-sm text-white`
                  : `${textMuted} hover:text-slate-300`
                }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setViewMode('yearly')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${viewMode === 'yearly'
                  ? `${toggleActiveBg} shadow-sm text-white`
                  : `${textMuted} hover:text-slate-300`
                }`}
            >
              Anual
            </button>
          </div>
          <div className={`h-8 w-px ${dividerBg} mx-2`}></div>
          <button className={`p-2 ${textMuted} ${buttonHoverBg} rounded-lg`}>
            <Bell className="w-5 h-5" />
          </button>
          <button className={`p-2 ${textMuted} ${buttonHoverBg} rounded-lg`}>
            <Search className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="p-8 flex flex-col gap-8 max-w-[1400px] w-full mx-auto">
        {/* Semáforo Estratégico */}
        <section className={`${cardBg} rounded-xl border ${cardBorder} p-6 shadow-sm`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
              <h3 className={`text-lg font-bold ${textPrimary}`}>Semáforo Estratégico</h3>
              <p className={`text-sm ${textSecondary}`}>Status Geral da Operação: <span className="text-emerald-500 font-bold">Estável</span></p>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-500/10 text-red-500 group-hover:bg-red-500 transition-colors group-hover:text-white">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <span className={`text-xs font-bold ${textSecondary} group-hover:text-red-500`}>Crítico</span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 transition-colors group-hover:text-white">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <span className={`text-xs font-bold ${textSecondary} group-hover:text-amber-500`}>Atenção</span>
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
          <div className={`${cardBg} p-5 rounded-xl border ${cardBorder} shadow-sm`}>
            <div className="flex justify-between items-start mb-4">
              <p className={`text-sm font-medium ${textSecondary} leading-tight`}>Taxa de<br />Inadimplência</p>
              <span className="text-emerald-500 text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                <TrendingDown className="w-3 h-3" /> 2.4%
              </span>
            </div>
            <div className="flex items-end justify-between">
              <h4 className={`text-2xl font-bold ${textPrimary}`}>12.8%</h4>
              <div className="h-10 w-24 flex items-end gap-1">
                {[20, 40, 60, 40, 25, 20].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className={`w-1/6 rounded-t-sm ${i > 2 ? 'bg-primary' : 'bg-primary/20'}`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Satisfaction Index */}
          <div className={`${cardBg} p-5 rounded-xl border ${cardBorder} shadow-sm`}>
            <div className="flex justify-between items-start mb-4">
              <p className={`text-sm font-medium ${textSecondary} leading-tight`}>ISC (Índice de<br />Satisfação)</p>
              <div className="flex text-amber-400 gap-0.5">
                {[1, 2, 3, 4].map(i => <span key={i} className="text-xs">★</span>)}
                <span className={`text-xs ${isDark ? 'text-slate-600' : 'text-slate-300'}`}>★</span>
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <h4 className={`text-2xl font-bold ${textPrimary}`}>8.4</h4>
              <span className={`text-sm ${textMuted}`}>/ 10</span>
            </div>
            <p className={`text-[10px] ${textSecondary} mt-2 font-medium`}>Meta: 8.5 (+0.2 vs. mês ant.)</p>
          </div>

          {/* Revenue vs Forecast */}
          <div className={`${cardBg} p-5 rounded-xl border ${cardBorder} shadow-sm`}>
            <div className="flex justify-between items-start mb-4">
              <p className={`text-sm font-medium ${textSecondary} leading-tight`}>Receita vs.<br />Previsto</p>
              <span className="text-primary text-[10px] font-bold uppercase tracking-wider">Atingido 94%</span>
            </div>
            <h4 className={`text-2xl font-bold ${textPrimary}`}>R$ 4.2M</h4>
            <div className={`w-full ${progressBg} h-2 rounded-full mt-3 overflow-hidden`}>
              <div className="bg-primary h-full w-[94%]"></div>
            </div>
          </div>

          {/* Regulatory Deadlines */}
          <div className={`${cardBg} p-5 rounded-xl border ${cardBorder} shadow-sm`}>
            <div className="flex justify-between items-start mb-4">
              <p className={`text-sm font-medium ${textSecondary} leading-tight`}>Prazos<br />Regulatórios</p>
              <Calendar className={`w-5 h-5 ${textSecondary}`} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className={`text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Auditoria TCU</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xl font-bold ${textPrimary}`}>12 Dias</span>
                <span className="text-[10px] bg-red-500/10 text-red-500 px-2 py-0.5 rounded font-bold uppercase">Urgente</span>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Row */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bar Chart: Financial Performance */}
          <div className={`lg:col-span-2 ${cardBg} rounded-xl border ${cardBorder} p-6`}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className={`font-bold ${textPrimary}`}>
                  Desempenho Financeiro {viewMode === 'monthly' ? 'Mensal' : 'Anual'}
                </h3>
                <p className={`text-xs ${textMuted} mt-0.5`}>
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
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 10, fontWeight: 'bold' }}
                  />
                  <Tooltip
                    cursor={{ fill: isDark ? '#283039' : '#e2e8f0' }}
                    contentStyle={{
                      backgroundColor: isDark ? '#101922' : '#ffffff',
                      borderColor: isDark ? '#283039' : '#e2e8f0',
                      color: isDark ? '#fff' : '#1e293b',
                      borderRadius: '8px'
                    }}
                    itemStyle={{ color: isDark ? '#fff' : '#1e293b' }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === chartData.length - 1 ? '#137fec' : (isDark ? 'rgba(19, 127, 236, 0.2)' : 'rgba(19, 127, 236, 0.3)')}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Donut Chart: Regional Distribution */}
          <div className={`${cardBg} rounded-xl border ${cardBorder} p-6 flex flex-col`}>
            <h3 className={`font-bold mb-1 ${textPrimary}`}>Distribuição Regional</h3>
            <p className={`text-xs ${textMuted} mb-4`}>Corretores ativos por região</p>

            <div className="flex-1 min-h-[160px] relative flex justify-center items-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
                <span className={`text-2xl font-extrabold ${textPrimary}`}>54.2k</span>
                <span className={`text-[10px] ${textMuted} font-bold uppercase tracking-tight`}>Total</span>
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
                    <span className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item.name}</span>
                  </div>
                  <span className={`text-xs font-bold ${textPrimary}`}>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Table */}
        <section className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden shadow-sm`}>
          <div className={`px-6 py-5 border-b ${cardBorder} flex justify-between items-center`}>
            <h3 className={`font-bold ${textPrimary}`}>Resumo de Governança</h3>
            <button className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-colors">Exportar PDF</button>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className={`${tableHeaderBg} ${textMuted} font-medium`}>
                  <th className="px-6 py-3 font-semibold text-xs uppercase tracking-wider">Item Estratégico</th>
                  <th className="px-6 py-3 font-semibold text-xs uppercase tracking-wider">Responsável</th>
                  <th className="px-6 py-3 font-semibold text-xs uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 font-semibold text-xs uppercase tracking-wider text-right">Evolução</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDark ? 'divide-slate-800' : 'divide-slate-200'}`}>
                <tr>
                  <td className={`px-6 py-4 font-semibold ${textPrimary}`}>Digitalização de Processos</td>
                  <td className={`px-6 py-4 ${textSecondary}`}>Dir. Operações</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase">Concluído</span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-emerald-500">100%</td>
                </tr>
                <tr>
                  <td className={`px-6 py-4 font-semibold ${textPrimary}`}>Censo Profissional 2024</td>
                  <td className={`px-6 py-4 ${textSecondary}`}>Dir. Regional</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase">Em Andamento</span>
                  </td>
                  <td className={`px-6 py-4 text-right font-bold ${textPrimary}`}>68%</td>
                </tr>
                <tr>
                  <td className={`px-6 py-4 font-semibold ${textPrimary}`}>Renovação de Infraestrutura</td>
                  <td className={`px-6 py-4 ${textSecondary}`}>Tecnologia</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase">Planejamento</span>
                  </td>
                  <td className={`px-6 py-4 text-right font-bold ${textPrimary}`}>15%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className={`p-8 mt-auto border-t ${cardBorder} text-center`}>
          <p className={`text-xs ${textMuted}`}>© 2024 CRECI INTELIGENTE - Sistema de Governança Estratégica</p>
        </footer>
      </div>
    </div>
  );
};