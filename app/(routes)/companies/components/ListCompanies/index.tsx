import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'
import { columns } from './columns'
import DataTableCompanies from './DataTableCompanies'
const ListCompanies = async () => {
  const { userId } = auth()
  if (!userId) redirect('/')

  const companies = await db.company.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  })

  return <DataTableCompanies columns={columns} data={companies} />
}
export default ListCompanies
