import Layout from '@/components/baselayout/layout'
import Appointment from '@/components/coursDeSoutien/appointment'
import ResourceHero from '@/components/resources/resourceHero'
import ResourceTabs from '@/components/resources/resourceTabs'
import React from 'react'

export default function index() {
  return (
   <Layout title='Ressources'>
    <ResourceHero/>
    <div className='flex flex-col p-8 lg:px-16 pb-20'>
    <ResourceTabs/>
    <Appointment/>
    </div>
   </Layout>
  )
}
