'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FormCreateCustomer } from '../FormCreateCustomer/index'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const HeaderCompanies = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false)
  return (
    <div className='flex justify-between items-center '>
      <h2>List of companies</h2>
      <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
        <DialogTrigger asChild>
          <Button variant='outline'>Create Company</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[625px]'>
          <DialogHeader>
            <DialogTitle>Create Customer</DialogTitle>
            <DialogDescription>
              Create and configure your customer.
            </DialogDescription>
          </DialogHeader>

          <FormCreateCustomer />
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default HeaderCompanies
