import { Button, Card, TextInput } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

type User = {
  id: string
  name: string
  email: string
}
export function User() {
  const navigate = useNavigate()

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    retry: false,
    queryFn: async (): Promise<User> => {
      const token = localStorage.getItem("access_token")
      if (!token) {
        navigate("/sign-in")
        throw new Error("No token provided")
      }
      const res = await fetch("http://localhost:8080/api/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      return data.user
    },
  })

  function logoutUser() {
    localStorage.removeItem("access_token")
    navigate("/sign-in")
  }

  if (isLoading || error || !user) {
    return <div></div>
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Card p="lg" className="w-full md:w-[40%]">
        <div className="flex flex-col gap-4">
          <p className="text-xl text-blue-200 font-semibold">Your information</p>
          <TextInput label="Full Name" value={user.name} />
          <TextInput label="Email" value={user.email} />
          <Button mt="sm" color="red" onClick={logoutUser}>
            Log Out
          </Button>
        </div>
      </Card>
      <Card p="lg" className="w-full md:w-[60%]">
        <p className="text-xl text-blue-200 font-semibold">Past Orders</p>
      </Card>
    </div>
  )
}
