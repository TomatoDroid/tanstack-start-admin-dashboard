import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table/column-header'
import { LongText } from '@/components/long-text'
import { DataTableRowActions } from '@/features/users/components/data-table-row-actions'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { roles } from '../data/data'
import { User } from '../data/schema'
import { motion } from 'motion/react'

export const UsersColumns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className={''}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'username',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Username" />
    ),
    cell: ({ row }) => (
      <LongText className="max-w-30 ps-3">{row.getValue('username')}</LongText>
    ),
    meta: {
      className: cn(
        'drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)]',
        'ps-0.5 max-md:sticky start-6 @4xl/content:table-cell @4xl/content:drop-shadow-none',
      ),
    },
    enableHiding: false,
  },
  {
    id: 'fullName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const { firstName, lastName } = row.original
      const fullName = `${firstName} ${lastName}`
      return <LongText className="max-w-36">{fullName}</LongText>
    },
    meta: { className: 'w-36' },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="w-fit ps-2 text-nowrap">{row.getValue('email')}</div>
    ),
  },
  {
    accessorKey: 'phoneNumber',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    cell: ({ row }) => <div>{row.getValue('phoneNumber')}</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      
      const statusConfig: Record<string, { color: string; dot: string; bg: string }> = {
        active: {
          color: 'text-emerald-700 dark:text-emerald-300',
          dot: 'bg-emerald-500',
          bg: 'bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/20',
        },
        inactive: {
          color: 'text-slate-600 dark:text-slate-400',
          dot: 'bg-slate-400',
          bg: 'bg-slate-400/10 dark:bg-slate-400/20 border-slate-400/20',
        },
        invited: {
          color: 'text-sky-700 dark:text-sky-300',
          dot: 'bg-sky-500',
          bg: 'bg-sky-500/10 dark:bg-sky-500/20 border-sky-500/20',
        },
        suspended: {
          color: 'text-red-700 dark:text-red-300',
          dot: 'bg-red-500',
          bg: 'bg-red-500/10 dark:bg-red-500/20 border-red-500/20',
        },
      }

      const config = statusConfig[status] || statusConfig.inactive

      return (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide border backdrop-blur-md transition-all",
            config.bg,
            config.color
          )}
        >
          <span className="relative flex h-2 w-2">
            {status === 'active' && (
              <motion.span 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className={cn("absolute inline-flex h-full w-full rounded-full opacity-75", config.dot)}
              />
            )}
            <span className={cn("relative inline-flex rounded-full h-2 w-2", config.dot)} />
          </span>
          <span className="capitalize">{status}</span>
        </motion.div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: 'role',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => {
      const { role } = row.original
      const userType = roles.find(({ value }) => value === role)

      if (!userType) {
        return null
      }

      return (
        <motion.div 
          whileHover={{ x: 5 }}
          className="flex items-center gap-x-3 group cursor-default"
        >
          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-secondary/50 border border-border/50 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
            {userType.icon && (
              <userType.icon size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold capitalize tracking-tight leading-none">
              {row.getValue('role')}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-medium">
              Access Level
            </span>
          </div>
        </motion.div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'actions',
    cell: DataTableRowActions,
  },
]
