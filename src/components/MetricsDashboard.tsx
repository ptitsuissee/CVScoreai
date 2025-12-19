import { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Target, Eye, MousePointerClick, Crown, CheckCircle } from 'lucide-react';

interface MetricsDashboardProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Tableau de bord Métriques',
    subtitle: 'Suivi de performance et conversion',
    metrics: 'Métriques clés',
    conversion: 'Conversion',
    engagement: 'Engagement',
    revenue: 'Revenus',
    mockNote: '💡 Données simulées — Intégrer Analytics + Stripe en production',
    period: 'Période : 30 derniers jours',
    stats: {
      visitors: {
        label: 'Visiteurs',
        value: '2,847',
        change: '+12,5%',
        trend: 'up',
      },
      analyses: {
        label: 'Analyses gratuites',
        value: '562',
        change: '+8,3%',
        trend: 'up',
      },
      conversions: {
        label: 'Conversions Premium',
        value: '28',
        change: '+15,2%',
        trend: 'up',
      },
      revenue: {
        label: 'Revenus (EUR)',
        value: '286,72 €',
        change: '+15,2%',
        trend: 'up',
      },
      conversionRate: {
        label: 'Taux de conversion',
        value: '4,98%',
        change: '+0,7%',
        trend: 'up',
      },
      avgSession: {
        label: 'Durée moy. session',
        value: '3m 24s',
        change: '+18s',
        trend: 'up',
      },
      bounceRate: {
        label: 'Taux de rebond',
        value: '52,3%',
        change: '-3,2%',
        trend: 'down',
      },
      atsScore: {
        label: 'Score ATS moyen',
        value: '68/100',
        change: '+2pts',
        trend: 'up',
      },
    },
    goals: {
      title: 'Objectifs du mois',
      items: [
        { label: '500 analyses gratuites', current: 562, target: 500, completed: true },
        { label: '25 conversions Premium', current: 28, target: 25, completed: true },
        { label: '5% taux conversion', current: 4.98, target: 5, completed: false },
        { label: '250€ de revenus', current: 286.72, target: 250, completed: true },
      ],
    },
  },
  en: {
    title: 'Metrics Dashboard',
    subtitle: 'Performance and conversion tracking',
    metrics: 'Key metrics',
    conversion: 'Conversion',
    engagement: 'Engagement',
    revenue: 'Revenue',
    mockNote: '💡 Simulated data — Integrate Analytics + Stripe in production',
    period: 'Period: Last 30 days',
    stats: {
      visitors: {
        label: 'Visitors',
        value: '2,847',
        change: '+12.5%',
        trend: 'up',
      },
      analyses: {
        label: 'Free analyses',
        value: '562',
        change: '+8.3%',
        trend: 'up',
      },
      conversions: {
        label: 'Premium conversions',
        value: '28',
        change: '+15.2%',
        trend: 'up',
      },
      revenue: {
        label: 'Revenue (EUR)',
        value: '€286.72',
        change: '+15.2%',
        trend: 'up',
      },
      conversionRate: {
        label: 'Conversion rate',
        value: '4.98%',
        change: '+0.7%',
        trend: 'up',
      },
      avgSession: {
        label: 'Avg. session time',
        value: '3m 24s',
        change: '+18s',
        trend: 'up',
      },
      bounceRate: {
        label: 'Bounce rate',
        value: '52.3%',
        change: '-3.2%',
        trend: 'down',
      },
      atsScore: {
        label: 'Avg. ATS score',
        value: '68/100',
        change: '+2pts',
        trend: 'up',
      },
    },
    goals: {
      title: 'Monthly goals',
      items: [
        { label: '500 free analyses', current: 562, target: 500, completed: true },
        { label: '25 Premium conversions', current: 28, target: 25, completed: true },
        { label: '5% conversion rate', current: 4.98, target: 5, completed: false },
        { label: '€250 revenue', current: 286.72, target: 250, completed: true },
      ],
    },
  },
};

export function MetricsDashboard({ language }: MetricsDashboardProps) {
  const t = content[language];

  const renderMetricCard = (icon: any, label: string, value: string, change: string, trend: 'up' | 'down', color: string) => {
    const Icon = icon;
    const isPositive = trend === 'up';

    const colorClasses = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      purple: 'bg-purple-50 border-purple-200 text-purple-600',
      green: 'bg-green-50 border-green-200 text-green-600',
      orange: 'bg-orange-50 border-orange-200 text-orange-600',
      gray: 'bg-gray-50 border-gray-200 text-gray-600',
    };

    const colorClass = colorClasses[color as keyof typeof colorClasses];

    return (
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition-all">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center border-2`}>
            <Icon size={24} />
          </div>
          <div className={`px-3 py-1 rounded-full text-sm ${isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {change}
          </div>
        </div>
        <div className="text-3xl text-gray-900 mb-1">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl text-gray-900 mb-3">{t.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{t.subtitle}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Eye size={16} />
            <span>{t.period}</span>
          </div>
        </div>

        {/* Mock data notice */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-8 text-center">
          <p className="text-blue-900">{t.mockNote}</p>
        </div>

        {/* Main metrics grid */}
        <div className="mb-8">
          <h2 className="text-2xl text-gray-900 mb-6">{t.metrics}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {renderMetricCard(Users, t.stats.visitors.label, t.stats.visitors.value, t.stats.visitors.change, t.stats.visitors.trend, 'blue')}
            {renderMetricCard(MousePointerClick, t.stats.analyses.label, t.stats.analyses.value, t.stats.analyses.change, t.stats.analyses.trend, 'purple')}
            {renderMetricCard(Crown, t.stats.conversions.label, t.stats.conversions.value, t.stats.conversions.change, t.stats.conversions.trend, 'orange')}
            {renderMetricCard(DollarSign, t.stats.revenue.label, t.stats.revenue.value, t.stats.revenue.change, t.stats.revenue.trend, 'green')}
          </div>
        </div>

        {/* Secondary metrics */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Conversion metrics */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
            <h3 className="text-xl text-gray-900 mb-6 flex items-center gap-2">
              <Target className="text-purple-600" size={24} />
              {t.conversion}
            </h3>
            <div className="space-y-4">
              {renderMetricCard(TrendingUp, t.stats.conversionRate.label, t.stats.conversionRate.value, t.stats.conversionRate.change, t.stats.conversionRate.trend, 'purple')}
            </div>
          </div>

          {/* Engagement metrics */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
            <h3 className="text-xl text-gray-900 mb-6 flex items-center gap-2">
              <MousePointerClick className="text-blue-600" size={24} />
              {t.engagement}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-2 border-blue-200">
                <div className="text-2xl text-blue-900 mb-1">{t.stats.avgSession.value}</div>
                <div className="text-sm text-blue-700 mb-2">{t.stats.avgSession.label}</div>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full inline-block">
                  {t.stats.avgSession.change}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border-2 border-gray-200">
                <div className="text-2xl text-gray-900 mb-1">{t.stats.bounceRate.value}</div>
                <div className="text-sm text-gray-700 mb-2">{t.stats.bounceRate.label}</div>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full inline-block">
                  {t.stats.bounceRate.change}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly goals */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 p-8">
          <h3 className="text-2xl text-gray-900 mb-6 flex items-center gap-3">
            <Target className="text-green-600" size={28} />
            {t.goals.title}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.goals.items.map((goal, index) => {
              const progress = Math.min((goal.current / goal.target) * 100, 100);
              return (
                <div key={index} className="bg-white rounded-xl p-5 border-2 border-green-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-gray-900 mb-1">{goal.label}</div>
                      <div className="text-sm text-gray-600">
                        {goal.current} / {goal.target}
                      </div>
                    </div>
                    {goal.completed && (
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle size={18} className="text-green-600" />
                      </div>
                    )}
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${goal.completed ? 'bg-green-600' : 'bg-blue-600'} transition-all`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-2">{Math.round(progress)}%</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ATS Score average */}
        <div className="mt-8 bg-white rounded-2xl border-2 border-gray-200 p-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white text-3xl mb-4 shadow-xl">
            {t.stats.atsScore.value.split('/')[0]}
          </div>
          <h3 className="text-2xl text-gray-900 mb-2">{t.stats.atsScore.label}</h3>
          <p className="text-gray-600 mb-3">
            {language === 'fr' ? 'Score moyen de tous les CV analysés' : 'Average score of all analyzed resumes'}
          </p>
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
            {t.stats.atsScore.change}
          </div>
        </div>
      </div>
    </div>
  );
}
