import { Button } from '@/components/ui/button'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { ConfigDrawer } from '@/components/config-drawer'
import Header from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { TopNav } from '@/components/top-nav'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Overview } from './components/overview'
import { RecentSales } from './components/recent-sales'
import { Analytics } from './components/analytics'
import { motion } from 'motion/react'
import { TrendingUp, Users, CreditCard, Activity, ArrowUpRight, Sparkles } from 'lucide-react'

export function Dashboard() {
  return (
    <>
      <Header>
        <TopNav links={topNav} />
        <div className="ms-auto flex items-center gap-4">
          <Search />
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </Header>

      <Main className="relative">
        {/* Ambient background effects */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-linear-to-br from-violet-500/20 via-purple-500/10 to-transparent blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 animate-pulse rounded-full bg-linear-to-tr from-emerald-500/20 via-teal-500/10 to-transparent blur-3xl animation-delay-2000" />
        </div>

        <div className="relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h1 className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-white/90 dark:via-white/70 dark:to-white/40">
                    Dashboard
                  </h1>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Sparkles className="h-5 w-5 text-amber-400" />
                  </motion.div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Welcome back! Here's what's happening with your business today.
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="group relative overflow-hidden bg-linear-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-violet-500/40 hover:from-violet-500 hover:to-indigo-500">
                  <span className="relative z-10 flex items-center gap-2">
                    Download Report
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-violet-400 to-indigo-400 opacity-0 transition-opacity group-hover:opacity-20" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <Tabs defaultValue={'overview'} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <TabsList className="relative bg-linear-to-br from-muted/50 to-muted/30 p-1 backdrop-blur-xl dark:from-white/5 dark:to-white/2">
                <div className="absolute inset-0 bg-linear-to-r from-violet-500/10 via-transparent to-emerald-500/10 rounded" />
                <TabsTrigger
                  value={'overview'}
                  className="relative data-[state=active]:bg-linear-to-br data-[state=active]:from-white data-[state=active]:to-white/80 data-[state=active]:text-gray-900 data-[state=active]:shadow-xl dark:data-[state=active]:from-white/10 dark:data-[state=active]:to-white/5 dark:data-[state=active]:text-white dark:data-[state=active]:shadow-black/20"
                >
                  <span className="flex items-center gap-2">
                    <Activity className="h-4 w-4" />
                    Overview
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value={'analytics'}
                  className="relative data-[state=active]:bg-linear-to-br data-[state=active]:from-white data-[state=active]:to-white/80 data-[state=active]:text-gray-900 data-[state=active]:shadow-xl dark:data-[state=active]:from-white/10 dark:data-[state=active]:to-white/5 dark:data-[state=active]:text-white dark:data-[state=active]:shadow-black/20"
                >
                  <span className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Analytics
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value={'reports'}
                  disabled
                  className="relative disabled:opacity-40"
                >
                  Reports
                </TabsTrigger>
                <TabsTrigger
                  value={'notifications'}
                  disabled
                  className="relative disabled:opacity-40"
                >
                  Notifications
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value={'overview'} className="space-y-6">
              {/* Stats Cards Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <StatCard
                    title="Total Revenue"
                    value="$45,231.89"
                    change="+20.1%"
                    changeLabel="from last month"
                    icon={CreditCard}
                    trend="up"
                    gradient="from-amber-500 to-orange-500"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <StatCard
                    title="Subscriptions"
                    value="+2,350"
                    change="+180.1%"
                    changeLabel="from last month"
                    icon={Users}
                    trend="up"
                    gradient="from-emerald-500 to-teal-500"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <StatCard
                    title="Sales"
                    value="+12,234"
                    change="+19%"
                    changeLabel="from last month"
                    icon={TrendingUp}
                    trend="up"
                    gradient="from-violet-500 to-purple-500"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <StatCard
                    title="Active Now"
                    value="+573"
                    change="+201"
                    changeLabel="since last hour"
                    icon={Activity}
                    trend="up"
                    gradient="from-blue-500 to-cyan-500"
                    pulse
                  />
                </motion.div>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="col-span-1 lg:col-span-4"
                >
                  <GlassCard className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-indigo-400">
                          Revenue Overview
                        </span>
                      </CardTitle>
                      <CardDescription>
                        Monthly revenue for the current year
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-2">
                      <Overview />
                    </CardContent>
                  </GlassCard>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="col-span-1 lg:col-span-3"
                >
                  <GlassCard className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
                          Recent Sales
                        </span>
                      </CardTitle>
                      <CardDescription>
                        You made 265 sales this month
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentSales />
                    </CardContent>
                  </GlassCard>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value={'analytics'} className={'space-y-6'}>
              <Analytics />
            </TabsContent>
          </Tabs>
        </div>
      </Main>
    </>
  )
}

// Glass morphism card component
function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <Card
      className={`relative overflow-hidden border-0 bg-linear-to-br from-white/80 to-white/40 backdrop-blur-xl dark:from-white/10 dark:to-white/5 dark:backdrop-blur-xl ${className}`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent opacity-0 dark:opacity-100" />
      <div className="relative z-10">{children}</div>
    </Card>
  )
}

// Enhanced stat card component
function StatCard({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  trend,
  gradient,
  pulse,
}: {
  title: string
  value: string
  change: string
  changeLabel: string
  icon: any
  trend: 'up' | 'down' | 'neutral'
  gradient: string
  pulse?: boolean
}) {
  const isPositive = trend === 'up'

  return (
    <Card className="group relative overflow-hidden border-0 bg-linear-to-br from-white/80 to-white/40 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 dark:from-white/10 dark:to-white/5 dark:hover:shadow-black/40">
      {/* Decorative gradient background */}
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />

      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-white/10" />

      <CardHeader className="relative z-10 flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <motion.div
          className={`rounded-xl bg-linear-to-br ${gradient} p-2`}
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
          className="text-3xl font-bold tracking-tight"
        >
          {value}
        </motion.div>
        <div className="mt-2 flex items-center gap-2">
          <motion.span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
              isPositive
                ? 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400'
                : 'bg-red-500/10 text-red-700 dark:bg-red-500/20 dark:text-red-400'
            }`}
            animate={pulse ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {isPositive && <TrendingUp className="h-3 w-3" />}
            {change}
          </motion.span>
          <span className="text-xs text-muted-foreground">{changeLabel}</span>
        </div>
      </CardContent>
    </Card>
  )
}

const topNav = [
  {
    title: 'Overview',
    href: 'dashboard/overview',
    isActive: true,
    disabled: false,
  },
  {
    title: 'Customers',
    href: 'dashboard/customers',
    isActive: false,
    disabled: true,
  },
  {
    title: 'Products',
    href: 'dashboard/products',
    isActive: false,
    disabled: true,
  },
  {
    title: 'Settings',
    href: 'dashboard/settings',
    isActive: false,
    disabled: true,
  },
]
