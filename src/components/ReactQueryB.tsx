import React, { VFC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import { Task } from '../types/types'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

const ReactQueryB: VFC = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Task[]>('tasks')
  console.log('rendered React QueryB')

  return (
    <>
      <p className="font-bold my-3">ReactQueryB</p>
      {data?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => navigate('/')}
        className="h-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">react query A</p>
    </>
  )
}

export default ReactQueryB
