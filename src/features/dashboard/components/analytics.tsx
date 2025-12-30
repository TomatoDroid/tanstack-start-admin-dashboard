import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AnalyticsChart } from './analytics-chart'
import { motion } from 'motion/react'
import { MousePointerClick, Users, TrendingDown, Clock } from 'lucide-react'

export function Analytics() {
  const stats = [
    {
      title: 'Total Clicks',
      value: '1,248',
      change: '+12.4%',
      label: 'vs last week',
      icon: MousePointerClick,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Unique Visitors',
      value: '832',
      change: '+5.8%',
      label: 'vs last week',
      icon: Users,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Bounce Rate',
      value: '42%',
      change: '-3.2%',
      label: 'vs last week',
      icon: TrendingDown,
      gradient: 'from-amber-500 to-orange-500',
      positive: true,
    },
    {
      title: 'Avg. Session',
      value: '3m 24s',
      change: '+18s',
      label: 'vs last week',
      icon: Clock,
      gradient: 'from-violet-500 to-purple-500',
    },
  ]

  const referrers = [
    { name: 'Direct', value: 512, color: 'bg-violet-500' },
    { name: 'Product Hunt', value: 238, color: 'bg-indigo-500' },
    { name: 'Twitter', value: 174, color: 'bg-blue-500' },
    { name: 'Blog', value: 104, color: 'bg-cyan-500' },
  ]

  const devices = [
    { name: 'Desktop', value: 74, color: 'bg-emerald-500' },
    { name: 'Mobile', value: 22, color: 'bg-teal-500' },
    { name: 'Tablet', value: 4, color: 'bg-cyan-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Traffic Overview Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GlassCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-indigo-400">
                Traffic Overview
              </span>
            </CardTitle>
            <CardDescription>Weekly clicks and unique visitors</CardDescription>
          </CardHeader>
          <CardContent className="px-6">
            <AnalyticsChart />
          </CardContent>
        </GlassCard>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Referrers and Devices */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="col-span-1 lg:col-span-4"
        >
          <GlassCard>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-indigo-400">
                  Referrers
                </span>
              </CardTitle>
              <CardDescription>Top sources driving traffic</CardDescription>
            </CardHeader>
            <CardContent>
              <BarList items={referrers} valueFormatter={(n) => `${n}`} />
            </CardContent>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="col-span-1 lg:col-span-3"
        >
          <GlassCard>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
                  Devices
                </span>
              </CardTitle>
              <CardDescription>How users access your app</CardDescription>
            </CardHeader>
            <CardContent>
              <BarList items={devices} valueFormatter={(n) => `${n}%`} />
            </CardContent>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  )
}

// Glass morphism card component
function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl dark:from-white/10 dark:to-white/5 dark:backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 dark:opacity-100" />
      <div className="relative z-10">{children}</div>
    </Card>
  )
}

// Enhanced stat card component
function StatCard({
  title,
  value,
  change,
  label,
  icon: Icon,
  gradient,
  positive,
}: {
  title: string
  value: string
  change: string
  label: string
  icon: any
  gradient: string
  positive?: boolean
}) {
  return (
    <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 dark:from-white/10 dark:to-white/5 dark:hover:shadow-black/40">
      {/* Decorative gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
      />

      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-white/10" />

      <CardHeader className="relative z-10 flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <motion.div
          className={`rounded-xl bg-gradient-to-br ${gradient} p-2`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Icon className="h-4 w-4 text-white" />
        </motion.div>
      </CardHeader>
      <CardContent className="relative z-10">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold tracking-tight"
        >
          {value}
        </motion.div>
        <div className="mt-2 flex items-center gap-2">
          <motion.span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
              positive || change.startsWith('+')
                ? 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400'
                : 'bg-red-500/10 text-red-700 dark:bg-red-500/20 dark:text-red-400'
            }`}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {change}
          </motion.span>
          <span className="text-xs text-muted-foreground">{label}</span>
        </div>
      </CardContent>
    </Card>
  )
}

// Bar list component
function BarList({
  items,
  valueFormatter,
}: {
  items: { name: string; value: number; color: string }[]
  valueFormatter: (n: number) => string
}) {
  const max = Math.max(...items.map((i) => i.value), 1)

  return (
    <ul className="space-y-4">
      {items.map((item, index) => {
        const width = `${Math.round((item.value / max) * 100)}%`
        return (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group"
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${item.color} shadow-lg shadow-current`}
                />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              <div className="text-sm font-semibold tabular-nums">
                {valueFormatter(item.value)}
              </div>
            </div>
            <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-muted/50">
              <motion.div
                className={`h-full rounded-full ${item.color} shadow-lg shadow-current`}
                initial={{ width: 0 }}
                animate={{ width }}
                transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
              />
            </div>
          </motion.li>
        )
      })}
    </ul>
  )
}
