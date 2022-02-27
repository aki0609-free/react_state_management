import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context/StateProvider'

const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext()
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      setLoading(true)

      try {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        )
        setTasks(data)
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [setTasks])

  return { tasks, isLoading, isError }
}

export default useClassicalFetch
