import React from 'react';
import { Calendar, SlidersHorizontal, ArrowUp, ArrowDown, Lightbulb } from 'lucide-react';
import { 
    ComposedChart, 
    Bar, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
    ReferenceLine
} from 'recharts';
import { IMAGES } from '../constants';

const chartData = [
  { name: 'JAN', hist: 19, proj: null },
  { name: 'FEV', hist: 21, proj: null },
  { name: 'MAR', hist: 17, proj: null },
  { name: 'ABR', hist: 15, proj: null },
  { name: 'MAI', hist: 19, proj: null },
  { name: 'JUN', hist: 17, proj: null },
  { name: 'JUL', hist: null, proj: 15 },
  { name: 'AGO', hist: null, proj: 15 },
  { name: 'SET', hist: null, proj: 10 },
  { name: 'OUT', hist: null, proj: 8 },
];

export const Financial: React.FC = () => {
  return (
    <div className="flex flex-col h-full overflow-y-auto bg-background-dark p-8">
        {/* Header */}
        <header className="flex justify-between items-end mb-8">
            <div>
                <h2 className="text-2xl font-bold mb-1 text-white">Análise de Inadimplência</h2>
                <p className="text-slate-500 text-sm">Visão estratégica e projeções financeiras em tempo real.</p>
            </div>
            <div className="flex gap-3">
                <div className="flex items-center bg-[#1a2128] border border-slate-800 rounded-lg px-3 py-2">
                    <Calendar className="text-slate-400 mr-2 w-4 h-4" />
                    <select className="bg-transparent border-none text-sm font-medium text-white focus:ring-0 cursor-pointer outline-none">
                        <option>Últimos 12 meses</option>
                        <option>Ano Corrente (2024)</option>
                        <option>Projeção 2025</option>
                    </select>
                </div>
                <button className="bg-[#1a2128] border border-slate-800 p-2 rounded-lg hover:bg-slate-800 transition-colors">
                    <SlidersHorizontal className="text-slate-500 w-5 h-5" />
                </button>
            </div>
        </header>

        {/* KPI Metrics Summary */}
        <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-[#1a2128] p-6 rounded-xl border border-slate-800 shadow-sm">
                <p className="text-sm font-medium text-slate-500 mb-2">Dívida Total Ativa</p>
                <div className="flex items-end gap-2">
                    <h3 className="text-2xl font-bold text-white">R$ 14.8M</h3>
                    <span className="text-red-500 text-xs font-bold mb-1 flex items-center">
                        <ArrowUp className="w-3 h-3" /> 2.4%
                    </span>
                </div>
            </div>
            <div className="bg-[#1a2128] p-6 rounded-xl border border-slate-800 shadow-sm">
                <p className="text-sm font-medium text-slate-500 mb-2">Taxa de Inadimplência</p>
                <div className="flex items-end gap-2">
                    <h3 className="text-2xl font-bold text-white">18.2%</h3>
                    <span className="text-green-500 text-xs font-bold mb-1 flex items-center">
                        <ArrowDown className="w-3 h-3" /> 0.8%
                    </span>
                </div>
            </div>
            <div className="bg-[#1a2128] p-6 rounded-xl border border-slate-800 shadow-sm ring-2 ring-primary/20">
                <p className="text-sm font-medium text-slate-500 mb-2">Impacto no Orçamento</p>
                <div className="flex items-end gap-2">
                    <h3 className="text-2xl font-bold text-orange-500">- R$ 3.2M</h3>
                    <span className="text-slate-400 text-xs font-medium mb-1">Estimado</span>
                </div>
            </div>
            <div className="bg-[#1a2128] p-6 rounded-xl border border-slate-800 shadow-sm">
                <p className="text-sm font-medium text-slate-500 mb-2">Meta de Recuperação</p>
                <div className="flex items-end gap-2">
                    <h3 className="text-2xl font-bold text-white">R$ 5.0M</h3>
                    <div className="w-16 h-2 bg-slate-800 rounded-full mb-2 overflow-hidden">
                        <div className="bg-primary h-full" style={{width: '65%'}}></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Analytics: Historical vs Predictive */}
        <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="col-span-3 bg-[#1a2128] p-8 rounded-xl border border-slate-800 shadow-sm">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h4 className="font-bold text-lg text-white">Evolução Histórica e Projeção Preditiva</h4>
                        <p className="text-sm text-slate-500">Inadimplência mensal baseada em modelos de IA</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-primary"></span>
                            <span className="text-xs font-medium text-slate-300">Histórico Realizado</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-primary/40 border border-primary/60 border-dashed"></span>
                            <span className="text-xs font-medium text-slate-300">Projeção IA</span>
                        </div>
                    </div>
                </div>
                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={chartData} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                            <CartesianGrid vertical={false} stroke="#283039" strokeDasharray="3 3" />
                            <XAxis 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} 
                                dy={10}
                            />
                            <YAxis 
                                hide={false} 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{fill: '#94a3b8', fontSize: 10}} 
                                tickFormatter={(value) => `${value}%`}
                            />
                            <Tooltip 
                                contentStyle={{backgroundColor: '#101922', borderColor: '#283039', color: '#fff'}}
                            />
                            <ReferenceLine x="JUN" stroke="#94a3b8" strokeDasharray="3 3" />
                            <Bar dataKey="hist" fill="#137fec" barSize={40} radius={[4, 4, 0, 0]} />
                            <Bar dataKey="proj" fill="rgba(19, 127, 236, 0.1)" stroke="#137fec" strokeDasharray="4 4" barSize={40} radius={[4, 4, 0, 0]} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

        {/* Lower Section: Distribution and Segmentation */}
        <div className="grid grid-cols-12 gap-6">
            {/* Regional Distribution Map */}
            <div className="col-span-7 bg-[#1a2128] p-6 rounded-xl border border-slate-800 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold text-white">Distribuição por Jurisdição</h4>
                    <button className="text-primary text-xs font-bold hover:underline">Ver Tabela Detalhada</button>
                </div>
                <div className="flex gap-8">
                    <div className="flex-1 h-64 bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden">
                        <img 
                            className="opacity-80 w-full h-full object-cover" 
                            alt="Mapa do Brasil mostrando calor de inadimplência regional" 
                            src={IMAGES.MAP} 
                        />
                    </div>
                    <div className="w-48 space-y-4">
                        <div className="p-3 bg-slate-800/50 rounded-lg border-l-4 border-red-500">
                            <p className="text-[10px] font-bold text-slate-500 uppercase">ZONA SUL</p>
                            <p className="text-sm font-bold text-white">24.5% <span className="text-[10px] text-red-500 font-normal">(Crítico)</span></p>
                        </div>
                        <div className="p-3 bg-slate-800/50 rounded-lg border-l-4 border-primary">
                            <p className="text-[10px] font-bold text-slate-500 uppercase">CENTRO</p>
                            <p className="text-sm font-bold text-white">12.1% <span className="text-[10px] text-primary font-normal">(Estável)</span></p>
                        </div>
                        <div className="p-3 bg-slate-800/50 rounded-lg border-l-4 border-green-500">
                            <p className="text-[10px] font-bold text-slate-500 uppercase">LITORAL</p>
                            <p className="text-sm font-bold text-white">8.4% <span className="text-[10px] text-green-500 font-normal">(Otimizado)</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Segment Analysis */}
            <div className="col-span-5 bg-[#1a2128] p-6 rounded-xl border border-slate-800 shadow-sm">
                <h4 className="font-bold mb-6 text-white">Perfil do Inadimplente</h4>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between text-xs font-bold mb-2">
                            <span className="text-white">PESSOA FÍSICA (PF)</span>
                            <span className="text-slate-500">R$ 9.2M (62%)</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{width: '62%'}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs font-bold mb-2">
                            <span className="text-white">PESSOA JURÍDICA (PJ)</span>
                            <span className="text-slate-500">R$ 4.1M (28%)</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-primary/60" style={{width: '28%'}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs font-bold mb-2">
                            <span className="text-white">RECÉM-INSCRITOS</span>
                            <span className="text-slate-500">R$ 1.5M (10%)</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-400" style={{width: '10%'}}></div>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-slate-800">
                        <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                            <Lightbulb className="text-primary w-5 h-5 shrink-0" />
                            <div>
                                <p className="text-xs font-bold text-primary">INSIGHT DE IA</p>
                                <p className="text-[11px] text-slate-400">Pessoas Físicas com mais de 5 anos de registro apresentam 40% mais chances de negociação via portal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};