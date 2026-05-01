import { useState } from "react"
import { Card, Tabs } from "@mantine/core"
import { Register } from "./Register"
import { Login } from "./Login"

export function Sign() {
  const [activeTab, setActiveTab] = useState<string | null>("register")

  return (
    <div className="flex justify-center">
      <Card w={450}>
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="register">Register</Tabs.Tab>
            <Tabs.Tab value="login">Login</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="register" p="sm">
            <Register setActiveTab={setActiveTab} />
          </Tabs.Panel>
          <Tabs.Panel value="login" p="sm">
            <Login setActiveTab={setActiveTab} />
          </Tabs.Panel>
        </Tabs>
      </Card>
    </div>
  )
}
