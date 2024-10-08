'use client'
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FormCreateCustomerType } from './formCreateCustomer.type'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { UploadButton } from '@/app/utils/uploadthing'
import { toast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
const formSchema = z.object({
  name: z.string(),
  country: z.string().min(2),
  webSite: z.string().min(2),
  phone: z.string().min(6),
  cif: z.string().min(6),
  profileImage: z.string(),
})
export const FormCreateCustomer = (props: FormCreateCustomerType) => {
  const { stOpenModalCreate } = props
  const router = useRouter()
  const [photoUploade, setPhotoUploade] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      country: '',
      webSite: '',
      phone: '',
      cif: '',
      profileImage: '',
    },
  })

  const { isValid } = form.formState

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await axios.post('api/company', data)
      toast({
        title: 'Customer created successfully',
      })
      router.refresh()
      stOpenModalCreate(false)
    } catch (error) {
      toast({
        title: 'Error creating customer',
        variant: 'destructive',
      })
    }
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <div className='grid grid-cols-2 gap-3'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=' Company Name...'
                      {...field}
                      type='text'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='country'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select the Country' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='US'>United States</SelectItem>
                      <SelectItem value='CA'>Canada</SelectItem>
                      <SelectItem value='FR'>France</SelectItem>
                      <SelectItem value='DE'>Germany</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='webSite'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='www.example.com'
                      {...field}
                      type='text'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='+1 (555) 000-0000'
                      {...field}
                      type='number'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='cif'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CIF</FormLabel>
                  <FormControl>
                    <Input placeholder='B-00000000' {...field} type='text' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='profileImage'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Image</FormLabel>
                  <FormControl>
                    {photoUploade ? (
                      <p className='text-sm'>Image Uploade</p>
                    ) : (
                      <UploadButton
                        className='bg-slate-600/20 text-slate-800 rounded-lg outline-dotted outline-2 '
                        {...field}
                        endpoint='profileImage'
                        onClientUploadComplete={(res) => {
                          form.setValue('profileImage', res[0].url)
                          toast({
                            title: 'File uploaded',
                          })
                          setPhotoUploade(true)
                        }}
                        onUploadError={(err: Error) => {
                          toast({
                            title: 'Error uploading file',
                          })
                        }}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type='submit' disabled={!isValid || !photoUploade}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
