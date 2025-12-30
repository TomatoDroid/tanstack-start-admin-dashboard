import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'motion/react'

export function RecentSales() {
  const sales = [
    {
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      amount: '+$1,999.00',
      initials: 'OM',
      avatar: '/avatars/01.png',
    },
    {
      name: 'Jackson Lee',
      email: 'jackson.lee@email.com',
      amount: '+$39.00',
      initials: 'JL',
      avatar: '/avatars/02.png',
    },
    {
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      amount: '+$299.00',
      initials: 'IN',
      avatar: '/avatars/03.png',
    },
    {
      name: 'William Kim',
      email: 'will@email.com',
      amount: '+$99.00',
      initials: 'WK',
      avatar: '/avatars/04.png',
    },
    {
      name: 'Sofia Davis',
      email: 'sofia.davis@email.com',
      amount: '+$39.00',
      initials: 'SD',
      avatar: '/avatars/05.png',
    },
  ]

  return (
    <div className="space-y-4">
      {sales.map((sale, index) => (
        <motion.div
          key={sale.email}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="group flex items-center gap-4 rounded-xl p-2 transition-all hover:bg-muted/50"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Avatar className="h-10 w-10 ring-2 ring-primary/20 transition-all group-hover:ring-primary/40">
              <AvatarImage src={sale.avatar} alt={sale.name} />
              <AvatarFallback className="bg-gradient-to-br from-violet-500 to-indigo-500 text-white">
                {sale.initials}
              </AvatarFallback>
            </Avatar>
          </motion.div>
          <div className="flex flex-1 flex-wrap items-center justify-between gap-2">
            <div className="space-y-0.5">
              <p className="text-sm font-medium leading-none">{sale.name}</p>
              <p className="text-muted-foreground text-xs">{sale.email}</p>
            </div>
            <motion.div
              className="rounded-lg bg-emerald-500/10 px-2 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {sale.amount}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
