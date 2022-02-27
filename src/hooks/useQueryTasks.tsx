import axios from 'axios'
import { QueryFunction, useQuery } from 'react-query'
import { Task } from '../types/types'

const getTasks: QueryFunction<Task[]> = async ({ queryKey }) => {
  const { data } = await axios.get<Task[]>(
    'https://jsonplaceholder.typicode.com/todos'
  )
  return data
}

const useQueryTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: 'tasks',
    queryFn: getTasks,
    cacheTime: 30000,
    staleTime: 30000,
  })
}

export default useQueryTasks
